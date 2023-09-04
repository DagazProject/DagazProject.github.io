"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR       = 5;

var pieceEmpty              = 0x00;
var pieceJotunnA            = 0x01;
var pieceJotunnR            = 0x02;
var pieceJotunn             = 0x03;
var pieceValkyrieA          = 0x04;
var pieceValkyrieR          = 0x05;
var pieceNo                 = 0x80;

var moveflagPromotion       = 0x07000000;
var moveflagPromotionA      = 0x01000000;
var moveflagPromotionR      = 0x02000000;
var moveflagPromotionF      = 0x04000000;

var g_moveUndoStack = new Array();
var materialTable = [0, 100, 100, 200, 500, 500];
var g_mob = [0, 1, 1, 2, 4, 4];

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
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceJotunnA
   15,   10,   10,   10,   10,   10,   10,   15, 
   25,   20,   20,   20,   20,   20,   20,   25, 
   35,   30,   30,   30,   30,   30,   30,   35, 
   45,   40,   40,   40,   40,   40,   40,   45, 
   55,   50,   50,   50,   50,   50,   50,   55, 
   65,   60,   60,   60,   60,   60,   60,   65, 
    0,    0,    0,    0,    0,    0,    0,    0 
],
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceJotunnR
   15,   10,   10,   10,   10,   10,   10,   15, 
   25,   20,   20,   20,   20,   20,   20,   25, 
   35,   30,   30,   30,   30,   30,   30,   35, 
   45,   40,   40,   40,   40,   40,   40,   45, 
   55,   50,   50,   50,   50,   50,   50,   55, 
   65,   60,   60,   60,   60,   60,   60,   65, 
    0,    0,    0,    0,    0,    0,    0,    0 
],
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceJotunn
    0,   10,   10,   10,   10,   10,   10,    0, 
    0,   10,   20,   20,   20,   20,   10,    0, 
    0,   10,   20,   10,   10,   20,   10,    0, 
    0,   10,   20,   10,   10,   20,   10,    0, 
    0,   10,   20,   20,   20,   20,   10,    0, 
    0,   10,   10,   10,   10,   10,   10,    0, 
    0,    0,    0,    0,    0,    0,    0,    0 
],
[ -20,  -10,  -10,  -10,  -10,  -10,  -10,  -20, // pieceValkyrieA
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -20,  -10,  -10,  -10,  -10,  -10,  -10,  -20 
],
[ -20,  -10,  -10,  -10,  -10,  -10,  -10,  -20, // pieceValkyrieR
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -10,    0,    0,    0,    0,    0,    0,  -10, 
  -20,  -10,  -10,  -10,  -10,  -10,  -10,  -20 
]];

var pieceSquareAdj = new Array(6);

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[(square & 0xF) - 4] + ((9 - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move) {
    var result = null;
    for (var i = 0; i < move.length; i++) {
        if (result === null) {
            result = FormatSquare(move[i] & 0xFF);
        }
        result = result + FormatSquare((move[i] >> 8) & 0xFF);
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
            result[MakeSquare(row, col)] = table[row * Dagaz.Model.WIDTH + col];
        }
    }
    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    return curEval;
}

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {
  ResetGame();
  pieceSquareAdj[pieceEmpty]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceJotunnA]   = MakeTable(Dagaz.AI.pieceAdj[pieceJotunnA]);
  pieceSquareAdj[pieceJotunnR]   = MakeTable(Dagaz.AI.pieceAdj[pieceJotunnR]);
  pieceSquareAdj[pieceJotunn]    = MakeTable(Dagaz.AI.pieceAdj[pieceJotunn]);
  pieceSquareAdj[pieceValkyrieA] = MakeTable(Dagaz.AI.pieceAdj[pieceValkyrieA]);
  pieceSquareAdj[pieceValkyrieR] = MakeTable(Dagaz.AI.pieceAdj[pieceValkyrieR]);
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
                    Dagaz.AI.g_board[MakeSquare(row, col)] = 0;
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
                        piece |= pieceJotunnA;
                        break;
                    case 'q':
                        piece |= pieceJotunnR;
                        break;
                    case 'f':
                        piece |= pieceJotunn;
                        break;
                    case 'v':
                        piece |= pieceValkyrieA;
                        break;
                    case 'r':
                        piece |= pieceValkyrieR;
                        break;
                }
                
                if (piece & Dagaz.AI.TYPE_MASK) {
                    Dagaz.AI.g_board[MakeSquare(row, col)] = piece;
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
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
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
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][target];
        Dagaz.AI.g_board[target] = pieceEmpty;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][from];

    var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
    if (flags & moveflagPromotion) {
        if (flags & moveflagPromotionF) newPiece |= pieceJotunn;
        else if (flags & moveflagPromotionA) {
             if (piece & Dagaz.AI.colorWhite) newPiece |= pieceValkyrieR;
             else newPiece |= pieceJotunnR;
        } else if (flags & moveflagPromotionR) {
             if (piece & Dagaz.AI.colorWhite) newPiece |= pieceValkyrieA;
             else newPiece |= pieceJotunnA;
        }
    }

    if (newPiece & Dagaz.AI.TYPE_MASK) {
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];

        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][to];
        Dagaz.AI.g_baseEval -= materialTable[piece & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += materialTable[newPiece & Dagaz.AI.TYPE_MASK];
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return (Dagaz.AI.g_toMove != Dagaz.AI.colorWhite) ? 0 : captured;
}

Dagaz.AI.UnmakeStep = function() {
    Dagaz.AI.g_moveCount--;
    var move = g_moveUndoStack[Dagaz.AI.g_moveCount].move;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;

    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;

    var flags = move & 0xFF000000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var piece = Dagaz.AI.g_board[to];
    var newPiece = Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK);

    if (flags & moveflagPromotion) {
        if (flags & moveflagPromotionA) {
            if (piece & Dagaz.AI.colorWhite) newPiece |= pieceValkyrieA;
            else newPiece |= pieceJotunnA;
        } else if (flags & moveflagPromotionR) { 
             if (piece & Dagaz.AI.colorWhite) newPiece |= pieceValkyrieR;
             else newPiece |= pieceJotunnR;
        }
    }

    if (newPiece & Dagaz.AI.TYPE_MASK) {
        Dagaz.AI.g_board[from] = newPiece;
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

function CheckCaptured(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
       var f = false;
       if (moves[i].length == 1) {
           var target = (moves[i][0] >> 16) & 0xFF;
           if (target) f = true;
       } else {
           f = true;
       }
       if (f) {
           result.push(moves[i]);
       }
  }
  return result;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  GenerateCaptureMoves(moves);
  GenerateQuietMoves(moves);
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  GenerateCaptureMoves(moves);
  moves = CheckCaptured(moves);
  return moves;
}

function GenerateQuietStep(moves, from, to, pieceType) {
    var flags = 0;
    if (pieceType == pieceJotunnA) {
        var row = to & 0xF0;
        if (row == 0x90) flags = moveflagPromotionF;
        flags |= moveflagPromotionA;
    }
    if (pieceType == pieceJotunnR) {
        var row = to & 0xF0;
        if (row == 0x90) flags = moveflagPromotionF;
        flags |= moveflagPromotionR;
    }
    if (pieceType == pieceValkyrieA) flags |= moveflagPromotionA;
    if (pieceType == pieceValkyrieR) flags |= moveflagPromotionR;
    moves.push(from | (to << 8) | flags);
}

function GenerateJotunnCaptureStep(from, dir, pieceType) {
    var captured = from - dir;
    var to = from + dir;
    if (Dagaz.AI.g_board[to]) return 0;
    if ((Dagaz.AI.g_board[captured] & Dagaz.AI.colorWhite) == 0) {
        captured = to + dir;
        if ((Dagaz.AI.g_board[captured] & Dagaz.AI.colorWhite) == 0) captured = 0;
    }
    var flags = 0;
    if (pieceType == pieceJotunnA) flags |= moveflagPromotionA;
    if (pieceType == pieceJotunnR) flags |= moveflagPromotionR;
    if (flags) {
        var row = to & 0xF0;
        if (row == 0x90) flags |= moveflagPromotionF;
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateValkyrieCaptureStep(from, dir, pieceType) {
    var captured = +from + dir;
    while (Dagaz.AI.g_board[captured] == pieceEmpty) {
        captured += dir;
    }
    if ((Dagaz.AI.g_board[captured] & Dagaz.AI.colorBlack) == 0) return 0;
    var to = +captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    var flags = 0;
    if (pieceType == pieceValkyrieA) flags |= moveflagPromotionA;
    if (pieceType == pieceValkyrieR) flags |= moveflagPromotionR;
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateValkyrieCaptureMovesFromTree(moves, from, pieceType, stack) {
    var r = true;
    var dirs = [-17, -15, 15, 17];
    if (pieceType == pieceValkyrieR) dirs = [1, -1, 16, -16];
    _.each(dirs, function(dir) {
        var step = GenerateValkyrieCaptureStep(from, dir, pieceType);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateValkyrieCaptureMovesFromTree(moves, pos, pieceType == pieceValkyrieR ? pieceValkyrieA : pieceValkyrieR, stack)) r = false;
        Dagaz.AI.UnmakeStep();
        stack.pop();
        pos += dir;
        while (Dagaz.AI.g_board[pos] == pieceEmpty) {
            step &= ~0xFF00;
            step |= pos << 8;
            stack.push(step);
            Dagaz.AI.MakeStep(step, 0);
            if (GenerateValkyrieCaptureMovesFromTree(moves, pos, pieceType == pieceValkyrieR ? pieceValkyrieA : pieceValkyrieR, stack)) r = false;
            Dagaz.AI.UnmakeStep();
            stack.pop();
            pos += dir;
        }
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

function GenerateJotunnMovesFrom(moves, from, pieceType) {
    var dirs = [-17, -15, 15, 17, 1, -1, 16, -16];
    if (pieceType == pieceJotunnA) dirs = [-17, -15, 15, 17];
    if (pieceType == pieceJotunnR) dirs = [1, -1, 16, -16];
    _.each(dirs, function(dir) {
        var step = GenerateJotunnCaptureStep(from, dir, pieceType);
        if (step == 0) return;
        var move = new Array();
        move.push(step);
        moves.push(move);
    });
}

function GenerateCaptureMovesFrom(moves, from) {
    var pieceType = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;   
    if (Dagaz.AI.g_board[from] & Dagaz.AI.colorWhite) GenerateValkyrieCaptureMovesFromTree(moves, from, pieceType, new Array());
    else GenerateJotunnMovesFrom(moves, from, pieceType);
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;
    var pieceType = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;

    if (pieceType == pieceValkyrieA) {
        to = from - 17;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to -= 17;
        }
        to = from + 17;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to += 17;
        }
        to = from - 15;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to -= 15;
        }
        to = from + 15;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to += 15;
        }
    }

    if (pieceType == pieceValkyrieR) {
        to = from - 16;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to -= 16;
        }
        to = from + 16;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to += 16;
        }
        to = from - 1;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to--;
        }
        to = from + 1;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, pieceType);
            moves.push(steps);
            to++;
        }
    }
}

})();
