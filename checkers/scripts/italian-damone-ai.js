"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.AI.g_timeout        = 7000;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceManP             = 0x02;
var pieceKing             = 0x03;
var pieceKingP            = 0x04;
var pieceDamone           = 0x05;
var pieceNo               = 0x80;

var moveflagPromotion     = 0x03000000;
var moveflagPromotionMan  = 0x01000000;
var moveflagPromotionKing = 0x02000000;

var g_moveUndoStack = new Array();
var materialTable = [0, 100, 1000, 1000, 20000, 20000];

var pieceSquareAdj = new Array(6);
Dagaz.AI.flipTable = new Array(256);

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    1,    0,    1,    0, // pieceMan
    0,   50,    0,   50,    0,    5,    0,    1, 
    0,    0,   20,    0,   20,    0,    3,    0, 
    0,   50,    0,   20,    0,   15,    0,    5, 
    1,    0,   20,    0,   15,    0,   10,    0, 
    0,    5,    0,   15,    0,   10,    0,    0, 
    1,    0,    3,    0,   10,    0,    0,    0, 
    0,    1,    0,    5,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceManP
    0,   10,    0,   10,    0,    5,    0,    0, 
    0,    0,   20,    0,   20,    0,    3,    0, 
    0,   10,    0,   30,    0,   15,    0,    0, 
    0,    0,   20,    0,   30,    0,   10,    0, 
    0,   10,    0,   15,    0,   10,    0,    0, 
    0,    0,   10,    0,   10,    0,    5,    0, 
    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    5,    0,    5,    0,    5,    0, // pieceKing
    0,  100,    0,   50,    0,   10,    0,    5, 
    5,    0,   50,    0,   40,    0,   10,    0, 
    0,   50,    0,   35,    0,   30,    0,    5, 
    5,    0,   40,    0,   25,    0,   20,    0, 
    0,   10,    0,   30,    0,   15,    0,   10, 
    5,    0,   10,    0,   20,    0,    0,    0, 
    0,    5,    0,    5,    0,   10,    0,    0
],
[1000,    0,    5,    0,    5,    0,    5,    0, // pieceKingP
    0,  100,    0,   50,    0,   10,    0,    5, 
    5,    0,   50,    0,   40,    0,   10,    0, 
    0,   50,    0,   35,    0,   30,    0,    5, 
    5,    0,   40,    0,   25,    0,   20,    0, 
    0,   10,    0,   30,    0,   15,    0,   10, 
    5,    0,   10,    0,   20,    0,    0,    0, 
    0,    5,    0,    5,    0,   10,    0,    0
],
[1000,    0,    5,    0,    5,    0,    5,    0, // pieceDamone
    0,  100,    0,   50,    0,   10,    0,    5, 
    5,    0,   50,    0,   40,    0,   10,    0, 
    0,   50,    0,   35,    0,   30,    0,    5, 
    5,    0,   40,    0,   25,    0,   20,    0, 
    0,   10,    0,   30,    0,   15,    0,   10, 
    5,    0,   10,    0,   20,    0,    0,    0, 
    0,    5,    0,    5,    0,   10,    0,    0
]];

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
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

Dagaz.AI.Mobility = function(color) {
    var mob, to, pos;
    var result = 0;
    var inc = color == Dagaz.AI.colorWhite ? -17 : 17;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             if (piece == pieceMan) {
                 mob = 0;
                 to = from + inc; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 15; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from - 15; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 result += 10 * mob;
             } else {
                 mob = 0;
                 to = from + 15; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from - 15; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 17; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from - 17; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 result += 50 * mob;
             }
         }
    }
    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var mobility = Dagaz.AI.Mobility(Dagaz.AI.colorWhite) - Dagaz.AI.Mobility(0);
    if (Dagaz.AI.g_toMove == 0) {
        // Black
        curEval -= mobility;
    }
    else {
        curEval += mobility;
    }
    return curEval;
}

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {
  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = Dagaz.AI.MakeSquare(row, col);
            Dagaz.AI.flipTable[square] = Dagaz.AI.MakeSquare((Dagaz.Model.HEIGHT - 1) - row, (Dagaz.Model.WIDTH - 1) - col);
       }
  }

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceMan]);
  pieceSquareAdj[pieceManP]   = MakeTable(Dagaz.AI.pieceAdj[pieceManP]);
  pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);
  pieceSquareAdj[pieceKingP]  = MakeTable(Dagaz.AI.pieceAdj[pieceKingP]);
  pieceSquareAdj[pieceDamone] = MakeTable(Dagaz.AI.pieceAdj[pieceDamone]);
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
                switch (c) {
                    case 'p':
                        piece |= pieceMan;
                        break;
                    case 's':
                        piece |= pieceManP;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                    case 'i':
                        piece |= pieceKingP;
                        break;
                    case 'd':
                        piece |= pieceDamone;
                        break;
                }
                
                Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = piece;
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
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][Dagaz.AI.flipTable[i]];
            Dagaz.AI.g_baseEval -= materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
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
        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
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
        if (flags & moveflagPromotionMan) newPiece |= pieceManP;
            else newPiece |= pieceKingP;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];

        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
        Dagaz.AI.g_baseEval -= materialTable[pieceMan];
        Dagaz.AI.g_baseEval += materialTable[newPiece & Dagaz.AI.TYPE_MASK];
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
        piece = Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromotionMan) piece |= pieceMan;
            else piece |= pieceKing;

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

function GenerateCaptureMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {           
           GenerateCaptureMovesFrom(moves, pos);
       }
  }
}

function GenerateQuietMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {
           GenerateQuietMovesFrom(moves, pos);
       }
  }
}

function NoKing() {
  var me = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & me) {
           if ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) >= pieceKingP) return false;
       }
  }
  return true;
}

function CheckGoal() {
  var pos = Dagaz.AI.g_toMove ? 0x99 : 0x22;
  var me = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  if (Dagaz.AI.g_board[pos] & me) return false;
  var pieceType = Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK;
  return pieceType >= pieceKingP;
}

function CheckInvariant(moves) {
  var mx = 0;
  for (var i = 0; i < moves.length; i++) {
      if (mx < moves[i].length) mx = moves[i].length;
  }
  var result = [];
  for (var i = 0; i < moves.length; i++) {
      if (moves[i].length == mx) result.push(moves[i]);
  }
  return result;
}

function CheckPromotion(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
      if ((moves[i].length > 0) && (moves[i][0] & moveflagPromotion)) result.push(moves[i]);
  }
  return result;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  if (NoKing() || CheckGoal()) return moves;
  GenerateCaptureMoves(moves);
  moves = CheckInvariant(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
  }
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  GenerateCaptureMoves(moves);
  moves = CheckInvariant(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
      moves = CheckPromotion(moves);
  }
  return moves;
}

function GenerateQuietStep(moves, from, to, pieceType) {
    var flags = 0;
    if (pieceType == pieceMan) {
        if (!Dagaz.AI.g_toMove && (_.indexOf([0x97, 0x79], +to) >= 0)) {
            flags = moveflagPromotionMan;
        }
        if (Dagaz.AI.g_toMove && (_.indexOf([0x24, 0x42], +to) >= 0)) {
            flags = moveflagPromotionMan;
        }
    }
    if (pieceType == pieceKing) {
        if (!Dagaz.AI.g_toMove && (to == 0x99)) {
            flags = moveflagPromotionKing;
        }
        if (Dagaz.AI.g_toMove && (to == 0x22)) {
            flags = moveflagPromotionKing;
        }
    }
    moves.push(from | (to << 8) | flags);
}

function GenerateCaptureStep(from, dir, pieceType) {
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = from + dir;
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    if (pieceType == pieceMan) {
        if ((Dagaz.AI.g_board[captured] & Dagaz.AI.TYPE_MASK) != pieceMan) return 0;
    }
    if ((pieceType == pieceKing) || (pieceType == pieceManP)) {
        if ((Dagaz.AI.g_board[captured] & Dagaz.AI.TYPE_MASK) == pieceKingP) return 0;
        if ((Dagaz.AI.g_board[captured] & Dagaz.AI.TYPE_MASK) == pieceDamone) return 0;
    }
    var to = captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    var flags = 0;
    if (pieceType == pieceMan) {
        if (!Dagaz.AI.g_toMove && (_.indexOf([0x97, 0x79], +to) >= 0)) {
            flags = moveflagPromotionMan;
        }
        if (Dagaz.AI.g_toMove && (_.indexOf([0x24, 0x42], +to) >= 0)) {
            flags = moveflagPromotionMan;
        }
    }
    if (pieceType == pieceKing) {
        if (!Dagaz.AI.g_toMove && (to == 0x99)) {
            flags = moveflagPromotionKing;
        }
        if (Dagaz.AI.g_toMove && (to == 0x22)) {
            flags = moveflagPromotionKing;
        }
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateCaptureMovesFromTree(moves, from, pieceType, stack, isDone) {
    var r = true;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -17 : 17;
    var dirs = [-17, -15, 15, 17];
    if (pieceType == pieceMan) dirs = [inc, -15, 15];
    _.each(dirs, function(dir) {
        if (isDone) return;
        var step = GenerateCaptureStep(from, dir, pieceType);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, pieceType, stack, step & moveflagPromotion)) r = false;
        Dagaz.AI.UnmakeStep();
        stack.pop();
    });
    if (r && (stack.length > 0)) {
        var move = new Array();
        for (var i = 0; i < stack.length; i++) {
            move.push(stack[i]);
        }
        moves.push(move);
    }
    return !r;
}

function GenerateCaptureMovesFrom(moves, from) {
    var pieceType = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;   
    GenerateCaptureMovesFromTree(moves, from, pieceType, new Array());
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -17 : 17;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
    if (piece == pieceMan) {
        to = from + inc;
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from + 15; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from - 15; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
    } else {
        to = from + 15; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from - 15; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from + 17; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from - 17; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
    }
}

})();
