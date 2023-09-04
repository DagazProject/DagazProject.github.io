"use strict";

(function() {

Dagaz.AI.g_maxply       = 10;
Dagaz.AI.g_timeout      = 5000;
Dagaz.Model.WIDTH       = 8;
Dagaz.Model.HEIGHT      = 8;
Dagaz.AI.NOISE_FACTOR   = 0;

Dagaz.AI.PIECE_MASK     = 0xF;
Dagaz.AI.TYPE_MASK      = 0x7;
Dagaz.AI.PLAYERS_MASK   = 0x18;
Dagaz.AI.TYPE_SIZE      = 3;

Dagaz.AI.colorBlack     = 0x10;
Dagaz.AI.colorWhite     = 0x08;

var pieceEmpty          = 0x00;
var pieceMan            = 0x01;
var pieceKing           = 0x02;
var piecePrince         = 0x03;
var pieceNo             = 0x80;

var moveflagPromotion   = 0x01000000;

var g_moveUndoStack = new Array();

Dagaz.AI.materialTable = [0, 100, 1000];

var pieceSquareAdj = new Array(4);
Dagaz.AI.flipTable = new Array(256);

Dagaz.AI.pieceAdj = [
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceEmpty
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0
], 
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceMan
   50,    0,  50,   0,  50,   0,   50,    0, 
    0,   40,   0,  10,   0,  10,    0,    0, 
   -5,    0, 100,   0,   0,   0,    0,    0, 
    0,   20,   0,  20,   0,   0,    0,   -5, 
  -10,    0,  10,   0,  10,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,  -10, 
  -50,    0, -20,   0, -20,   0,  -20,    0 
], 
[   0,    0,   0,   0,   0,   0,    0,  100, // pieceKing
    0,    0,   0,   0,   0,   0,   70,    0, 
    0,    0,   0,   0,   0,  70,    0,    0, 
    0,    0,   0,   0,  70,   0,    0,    0, 
    0,    0,   0,  70,   0,   0,    0,    0, 
    0,    0,  70,   0,   0,   0,    0,    0, 
    0,   70,   0,   0,   0,   0,    0,    0, 
  100,    0,   0,   0,   0,   0,    0,    0 
]];

Dagaz.AI.g_board = new Array(256);
Dagaz.AI.g_toMove = 0;

Dagaz.AI.g_baseEval    = 0;
Dagaz.AI.g_hashKeyLow  = 0;
Dagaz.AI.g_hashKeyHigh = 0;

Dagaz.AI.g_zobristLow = 0;
Dagaz.AI.g_zobristHigh = 0;
Dagaz.AI.g_zobristBlackLow = 0;
Dagaz.AI.g_zobristBlackHigh = 0;

Dagaz.AI.g_moveCount = 0;

Dagaz.AI.g_move50 = 0;
Dagaz.AI.g_repMoveStack = new Array();

var g_hashSize = 1 << 22;
var g_hashMask = g_hashSize - 1;
var g_hashTable;
var g_killers;

var hashflagAlpha = 1;
var hashflagBeta  = 2;
var hashflagExact = 3;

var once       = true;
var inProgress = false;
var resultMove = null;
var player     = null;

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "external") || (type == "smart") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var g_startTime;
var g_nodeCount;
var g_qNodeCount;
var g_searchValid;
var g_globalPly = 0;

var minEval = -2000000;
var maxEval = +2000000;

var minMateBuffer = minEval + 2000;
var maxMateBuffer = maxEval - 2000;

function HashEntry(lock, value, flags, hashDepth, bestMove, globalPly) {
    this.lock = lock;
    this.value = value;
    this.flags = flags;
    this.hashDepth = hashDepth;
    this.bestMove = bestMove;
}

function Search(finishMoveCallback, maxPly, finishPlyCallback) {
    var lastEval;
    var alpha = minEval;
    var beta = maxEval;
    
    g_globalPly++;
    g_nodeCount = 0;
    g_qNodeCount = 0;
    g_searchValid = true;
    
    var bestMove = 0;
    var value;
    
    g_startTime = (new Date()).getTime();

    var i;
    for (i = 1; i <= maxPly && g_searchValid; i++) {
        var tmp = AlphaBeta(i, 0, alpha, beta);
        if (!g_searchValid) break;

        value = tmp;

        if (value > alpha && value < beta) {
            alpha = value - 500;
            beta = value + 500;

            if (alpha < minEval) alpha = minEval;
            if (beta > maxEval) beta = maxEval;
        } else if (alpha != minEval) {
            alpha = minEval;
            beta = maxEval;
            i--;
        }

        if (g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask] != null) {
            bestMove = g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask].bestMove;
        }

        if (finishPlyCallback != null) {
            finishPlyCallback(bestMove, value, (new Date()).getTime() - g_startTime, i);
        }
    }

    if (finishMoveCallback != null) {
        finishMoveCallback(bestMove, value, (new Date()).getTime() - g_startTime, i - 1);
    }
}

function QSearch(alpha, beta, ply, depth) {
    g_qNodeCount++;

    var realEval = Dagaz.AI.Evaluate();
    
    if (realEval >= beta) 
        return realEval;

    if (realEval > alpha)
        alpha = realEval;

    realEval -= depth;

    var moveScores = new Array();
    var moves = Dagaz.AI.GenerateCaptureMoves();

    for (var i = 0; i < moves.length; i++) {
        if (!Dagaz.AI.MakeMove(moves[i])) {
            continue;
        }

        var value = -QSearch(-beta, -alpha, ply - 1, depth + 1);
        
        Dagaz.AI.UnmakeMove(moves[i]);

        if (value > realEval) {
            if (value >= beta) 
                return value;
            
            if (value > alpha)
                alpha = value;
            
            realEval = value;
        }
    }

    return realEval;
}

function StoreHash(value, flags, ply, move, depth) {
    if (value >= maxMateBuffer)
        value += depth;
    else if (value <= minMateBuffer)
        value -= depth;
    g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask] = new HashEntry(Dagaz.AI.g_hashKeyHigh, value, flags, ply, move);
}

function IsRepDraw() {
    var stop = Dagaz.AI.g_moveCount - 1 - Dagaz.AI.g_move50;
    stop = stop < 0 ? 0 : stop;
    for (var i = Dagaz.AI.g_moveCount - 5; i >= stop; i -= 2) {
        if (Dagaz.AI.g_repMoveStack[i] == Dagaz.AI.g_hashKeyLow)
            return true;
    }
    return false;
}

function offset(n) {
  var r = '';
  while (n > 0) {
      r = r + ' ';
      n--;
  }
  return r;
}

function AlphaBeta(ply, depth, alpha, beta) {
    if (ply <= 0) {
        return QSearch(alpha, beta, 0, depth + 1);
    }

    g_nodeCount++;
    if ((g_nodeCount & 127) == 127) {
        if ((new Date()).getTime() - g_startTime > Dagaz.AI.g_timeout) {
            // Time cutoff
            g_searchValid = false;
            return beta - 1;
        }
    }

    if (depth > 0 && IsRepDraw()) return 0;

    // Mate distance pruning
    var oldAlpha = alpha;
    alpha = alpha < minEval + depth * 10 ? alpha : minEval + depth * 10;
    beta = beta > maxEval - (depth + 1) * 10 ? beta : maxEval - (depth + 1) * 10;
    if (alpha >= beta)
       return alpha;

    var hashMove = null;
    var hashFlag = hashflagAlpha;
    var hashNode = g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask];
    if (hashNode != null && hashNode.lock == Dagaz.AI.g_hashKeyHigh) {
        hashMove = hashNode.bestMove;
    }

    var moveMade = false;
    var realEval = minEval;

    var movePicker = new MovePicker(hashMove, depth, g_killers[depth][0], g_killers[depth][1]);

    for (;;) {
        var currentMove = movePicker.nextMove();
        if (currentMove == 0) {
            break;
        }

        var plyToSearch = ply - 1;

        if (!Dagaz.AI.MakeMove(currentMove)) {
            continue;
        }

        var w = 0;
        if (Dagaz.AI.NOISE_FACTOR && (depth == 0)) {
            w = _.random(0, Dagaz.AI.NOISE_FACTOR);
        }

        var value = w - AlphaBeta(plyToSearch, depth + 1, -beta, -alpha);
        moveMade = true;

        Dagaz.AI.UnmakeMove(currentMove);

        if (!g_searchValid) {
            return alpha;
        }

        if (value > realEval) {
            if (value >= beta) {
                StoreHash(value, hashflagBeta, ply, currentMove, depth);
                return value;
            }
            if (value > oldAlpha) {
                hashFlag = hashflagExact;
                alpha = value;
            }

            realEval = value;
            hashMove = currentMove;
        }
    }

    if (!moveMade) {
        // If we have no valid moves it's either stalemate or checkmate
        return minEval + depth * 10;
    }

    StoreHash(realEval, hashFlag, ply, hashMove, depth);
    return realEval;
}

Dagaz.AI.ResetGame = function() {
    g_killers = new Array(128);
    for (var i = 0; i < 128; i++) {
        g_killers[i] = [0, 0];
    }

    g_hashTable = new Array(g_hashSize);

    var mt = new Dagaz.AI.MT(0x1badf00d);

    Dagaz.AI.g_zobristLow = new Array(256);
    Dagaz.AI.g_zobristHigh = new Array(256);
    for (var i = 0; i < 256; i++) {
        Dagaz.AI.g_zobristLow[i] = new Array(32);
        Dagaz.AI.g_zobristHigh[i] = new Array(32);
        for (var j = 0; j < 32; j++) {
            Dagaz.AI.g_zobristLow[i][j] = mt.next(32);
            Dagaz.AI.g_zobristHigh[i][j] = mt.next(32);
        }
    }
    Dagaz.AI.g_zobristBlackLow = mt.next(32);
    Dagaz.AI.g_zobristBlackHigh = mt.next(32);

    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
         for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
              var square = Dagaz.AI.MakeSquare(row, col);
              Dagaz.AI.flipTable[square] = Dagaz.AI.MakeSquare((Dagaz.Model.HEIGHT - 1) - row, (Dagaz.Model.WIDTH - 1) - col);
         }
    }
    pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
    pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceMan]);
    pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);
    pieceSquareAdj[piecePrince] = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);
}

Dagaz.AI.SetHash = function() {
    var result = new Object();
    result.hashKeyLow = 0;
    result.hashKeyHigh = 0;
    for (var i = 0; i < 256; i++) {
        var piece = Dagaz.AI.g_board[i];
        if (piece & Dagaz.AI.PLAYERS_MASK) {
            result.hashKeyLow ^= Dagaz.AI.g_zobristLow[i][piece & Dagaz.AI.PIECE_MASK]
            result.hashKeyHigh ^= Dagaz.AI.g_zobristHigh[i][piece & Dagaz.AI.PIECE_MASK]
        }
    }
    if (!Dagaz.AI.g_toMove) {
        result.hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
        result.hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    }
    return result;
}

function MovePicker(hashMove, depth, killer1, killer2) {
    this.hashMove = hashMove;
    this.depth = depth;
    this.killer1 = killer1;
    this.killer2 = killer2;

    this.moves = Dagaz.AI.GenerateAllMoves();
    this.moveCount = 0;
    this.atMove = -1;
    this.moveScores = null;
    this.stage = 0;

    // DEBUG:
    this.stage = 3;

    this.nextMove = function () {
        if (++this.atMove == this.moveCount) {
            this.stage++;
            if (this.stage == 1) {
                if (this.hashMove != null && Dagaz.AI.IsHashMoveValid(hashMove)) {
                    this.moves[0] = hashMove;
                    this.moveCount = 1;
                }
                if (this.moveCount != 1) {
                    this.hashMove = null;
                    this.stage++;
                }
            }

            if (this.stage == 2) {
                if (Dagaz.AI.IsHashMoveValid(this.killer1) &&
                    this.killer1 != this.hashMove) {
                    this.moves[this.moves.length] = this.killer1;
                    this.moveCount = this.moves.length;
                } else {
                    this.killer1 = 0;
                    this.stage++;
                }
            }

            if (this.stage == 3) {
                if (Dagaz.AI.IsHashMoveValid(this.killer2) &&
                    this.killer2 != this.hashMove) {
                    this.moves[this.moves.length] = this.killer2;
                    this.moveCount = this.moves.length;
                } else {
                    this.killer2 = 0;
                    this.stage++;
                }
            }

            if (this.stage == 4) {
                this.moveCount = this.moves.length;
                this.moveScores = new Array(this.moveCount);
                // Move ordering
                for (var i = this.atMove; i < this.moveCount; i++) this.moveScores[i] = Dagaz.AI.ScoreMove(this.moves[i]);
                // No moves, onto next stage
                if (this.atMove == this.moveCount) this.stage++;
            }

            if (this.stage == 5)
                return 0;
        }

        var bestMove = this.atMove;
        for (var j = this.atMove + 1; j < this.moveCount; j++) {
            if (this.moveScores[j] > this.moveScores[bestMove]) {
                bestMove = j;
            }
        }

        if (bestMove != this.atMove) {
            var tmpMove = this.moves[this.atMove];
            this.moves[this.atMove] = this.moves[bestMove];
            this.moves[bestMove] = tmpMove;

            var tmpScore = this.moveScores[this.atMove];
            this.moveScores[this.atMove] = this.moveScores[bestMove];
            this.moveScores[bestMove] = tmpScore;
        }

        var candidateMove = this.moves[this.atMove];
        if ((this.stage > 1 && candidateMove == this.hashMove) ||
            (this.stage > 2 && candidateMove == this.killer1)  ||
            (this.stage > 3 && candidateMove == this.killer2)) {
            return this.nextMove();
        }

        return this.moves[this.atMove];
    }
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

Dagaz.AI.FormatMove = function(move) {
    var result = null;
    for (var i = 0; i < move.length; i++) {
        if (result === null) {
            result = Dagaz.AI.FormatSquare(move[i] & 0xFF);
        }
        result = result + Dagaz.AI.FormatSquare((move[i] >> 8) & 0xFF);
    }
    return result;
}

Dagaz.AI.Mobility = function(color) {
    return 0;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var evalAdjust = 0;

    var players = 0;
    for (var i = 0; i < 256; i++) {
         if ((Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK) == pieceKing) {
             players |= Dagaz.AI.g_board[i] & Dagaz.AI.PLAYERS_MASK;
         }
    }
    if (players == Dagaz.AI.colorBlack) evalAdjust -= 1000;
    if (players == Dagaz.AI.colorWhite) evalAdjust += 1000;

    var mobility = Dagaz.AI.Mobility(Dagaz.AI.colorWhite) - Dagaz.AI.Mobility(0);
    if (Dagaz.AI.g_toMove == 0) {
        // Black
        curEval -= mobility;
        curEval -= evalAdjust;
    }
    else {
        curEval += mobility;
        curEval += evalAdjust;
    }
    return curEval;
}

Dagaz.AI.ScoreMove = function(move) {
    var score = 0;
    for (var i = 0; i < move.length; i++) {
         var from = move[i] & 0xFF;
         var to = (move[i] >> 8) & 0xFF;
         var target = (move[i] >> 16) & 0xFF;
         var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;
         var piece = Dagaz.AI.g_board[from];
         if (captured != pieceEmpty) {
             var pieceType = piece & Dagaz.AI.TYPE_MASK;
             score += (captured << 5) - pieceType;
         }
         if (move[i] & moveflagPromotion) {
             score += 1000;
         }
    }
    return score;
}

Dagaz.AI.IsHashMoveValid = function(move) {
    if (move.length != 1) return false;

    var from = move[0] & 0xFF;
    var to = (move[0] >> 8) & 0xFF;
    var target = (move[0] >> 16) & 0xFF;
    var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;

    var piece = Dagaz.AI.g_board[from];
    var pieceType = piece & Dagaz.AI.TYPE_MASK;
    if (pieceType < pieceMan || pieceType > pieceKing) return false;

    // Can't move a piece we don't control
    if (Dagaz.AI.g_toMove != (piece & Dagaz.AI.colorWhite)) return false;

    // Can't move to a square that has something of the same color
    if ((captured != pieceEmpty) && (Dagaz.AI.g_toMove == (captured & Dagaz.AI.colorWhite))) return false;

    var dir = to - from;
    if (captured == pieceEmpty) {
        if (pieceType == pieceMan) {
            if ((dir > 17) || (dir < -17)) return false;
            if ((Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) != (dir < 0)) return false;
        }
    } else {
        if ((dir <= 17) && (dir >= -17)) return false;
    }
    return true;
}

function MakeTable(table) {
    var result = new Array(256);
    for (var i = 0; i < 256; i++) {
        result[i] = 0;
    }
    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
        for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            result[Dagaz.AI.MakeSquare(row, col)] = table[row * Dagaz.Model.WIDTH + col];
        }
    }
    return result;
}

Dagaz.AI.getPieceType = function(c) {
    var piece = 0;
    switch (c) {
        case 'p':
            piece |= pieceMan;
            break;
        case 'k':
            piece |= pieceKing;
            break;
    }
    return piece;
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split(' ');

    for (var i = 0; i < 256; i++) 
        Dagaz.AI.g_board[i] = pieceNo;

    var row = 0;
    var col = 0;

    var pieces = chunks[0];
    for (var i = 0; i < pieces.length; i++) {
        var c = pieces.charAt(i);
        
        if (c == '/') {
            row++;
            col = 0;
        } else {
            if (c >= '0' && c <= '9') {
                for (var j = 0; j < parseInt(c); j++) {
                    Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = 0;
                    col++;
                }
            }
            else {
                var isBlack = c >= 'a' && c <= 'z';
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                piece |= Dagaz.AI.getPieceType(c);
                if (piece & Dagaz.AI.TYPE_MASK) {
                    Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }

    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : pieceEmpty;

    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval += Dagaz.AI.materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][Dagaz.AI.flipTable[i]];
            Dagaz.AI.g_baseEval -= Dagaz.AI.materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_move50 = 0;

    return '';
}

function UndoHistory(move, step, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.move = move;
    this.step = step;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

Dagaz.AI.MakeStep = function(move, step) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(move, step, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_baseEval += Dagaz.AI.materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? Dagaz.AI.flipTable[target] : target];
        Dagaz.AI.g_board[target] = pieceEmpty;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[from] : from];

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        newPiece |= pieceKing;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];

        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
        Dagaz.AI.g_baseEval -= Dagaz.AI.materialTable[pieceMan];
        Dagaz.AI.g_baseEval += Dagaz.AI.materialTable[newPiece & Dagaz.AI.TYPE_MASK];
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return captured;
}

Dagaz.AI.UnmakeStep = function() {
    Dagaz.AI.g_moveCount--;
    var move = g_moveUndoStack[Dagaz.AI.g_moveCount].move;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;

    var flags = move & 0xFF000000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var piece = Dagaz.AI.g_board[to];

    if (flags & moveflagPromotion) {
        piece = (Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK)) | pieceMan;
        Dagaz.AI.g_board[from] = piece;
    } else {
        Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    }

    Dagaz.AI.g_board[to] = pieceEmpty;
    if (captured) {
        Dagaz.AI.g_board[target] = captured;
    }

    return g_moveUndoStack[Dagaz.AI.g_moveCount].step;
}

Dagaz.AI.MakeMove = function(move) {
    for (var i = 0; i < move.length; i++) {
        if (Dagaz.AI.MakeStep(move[i], i) == pieceEmpty) break;
    }
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    while (Dagaz.AI.UnmakeStep() > 0);
}

function debugPlyCallback(bestMove, value, time, ply) {
    console.log(Dagaz.AI.FormatMove(bestMove) + ', v = ' + value + ', t = ' + time + ', ply = ' + ply);
}

var garbo = function(bestMove, value, timeTaken, ply) {
  resultMove = Dagaz.AI.FormatMove(bestMove);  
  inProgress = false;
  console.log('Garbo: ' + resultMove + ', value = ' + value + ', time = ' + timeTaken + ', ply = ' + ply);
  if (Dagaz.AI.callback) {
      Dagaz.AI.callback(resultMove);
  }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board  = board;
  inProgress = false;
  resultMove = null;
  player     = board.player;
  if (once) {
      Dagaz.AI.ResetGame();
      once = false;
  }
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  if (resultMove !== null) {
      var bestMove = null;
      _.each(moves, function(move) {
          if (move.toString().startsWith(resultMove)) {
              bestMove = move;
          }
      });
      if (bestMove !== null) {
          return {
              done: true,
              move: bestMove,
              time: Date.now() - ctx.timestamp,
              ai:  "garbo"
         };
      }
      if (this.parent) {
          return this.parent.getMove(ctx);
      }
  }
  if (inProgress) {
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "garbo"
      };
  }
  var setup = Dagaz.Model.getSetup(ctx.design, ctx.board);
  var result = setup.match(/[?&]setup=(.*)/);
  if (result) {
      inProgress = true;
      var fen = result[1];
      setTimeout(function () {
            var s = Dagaz.AI.InitializeFromFen(fen);
            if (s == '') {
                Search(garbo, Dagaz.AI.g_maxply, debugPlyCallback);
            } else {
                console.log(s);
            }
        }, 100);
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "garbo"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
