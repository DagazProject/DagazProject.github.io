"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceLeft             = 0x02;
var pieceRight            = 0x03;
var pieceNo               = 0x80;

var g_moveUndoStack = new Array();

var materialTable = [0, 200, 100, 100];

var pieceSquareAdj = new Array(3);

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move) {
    return Dagaz.AI.FormatSquare(move[0] & 0xFF) + Dagaz.AI.FormatSquare((move[move.length - 1] >> 8) & 0xFF)
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

function checkMobilityDir(pos, dir, pieceType, cnt) {
    var p = pos;
    for (;cnt > 0; cnt--) {
        p += +dir;
        var piece = Dagaz.AI.g_board[p] & Dagaz.AI.TYPE_MASK;
        if (piece == pieceType) return true;
    }
    return false;
}

function checkMobility(pos) {
    var c = 0;
    while (pos > 0) {
        pos -= 16;
        if (pos < 0) break;
        c++;
        if (Dagaz.AI.g_board[pos]) return 100;
        if (checkMobilityDir(pos, 1, pieceRight, c)) return 0;
        if (checkMobilityDir(pos, -1, pieceLeft, c)) return 0;
    }
    return 2000000 - c;
}

function Mobility(color) {
    var result = 0;
    if (color == Dagaz.AI.colorWhite) {
        for (var pos = 0; pos < 256; pos++) {
             if (Dagaz.AI.g_board[pos] & Dagaz.AI.colorWhite) {
                 result += checkMobility(pos);
             }
        }
    }
    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var mobility = Mobility(Dagaz.AI.colorWhite) - Mobility(0);
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

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceMan]);
  pieceSquareAdj[pieceLeft]   = MakeTable(Dagaz.AI.pieceAdj[pieceLeft]);
  pieceSquareAdj[pieceRight]  = MakeTable(Dagaz.AI.pieceAdj[pieceRight]);
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
                    case 'l':
                        piece |= pieceLeft;
                        break;
                    case 'r':
                        piece |= pieceRight;
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

    Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
    Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][to];
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

    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;

    var flags = move & 0xFF000000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var piece = Dagaz.AI.g_board[to];

    Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
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

function IsPrefix(a, b) {
  if (a.length >= b.length) return false;
  for (var i = 0; i < a.length; i++) {
       if (a[i] != b[i]) return false;
  }
  return true;
}

function CheckInvariant(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
       var f = true;
       for (var j = 0; j < moves.length; j++) {
            if ((i != j) && IsPrefix(moves[i], moves[j])) {
                f = false;
                break;
            }
       }
       if (f) {
           result.push(moves[i]);
       }
  }
  return result;
}

function CheckGoal() {
  for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
       if (Dagaz.AI.g_board[Dagaz.AI.MakeSquare(0, col)] & Dagaz.AI.colorWhite) return true;
  }
  return false;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  if (CheckGoal()) return moves;
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
  return moves;
}

function GenerateQuietStep(moves, from, to) {
  moves.push(from | (to << 8));
}

function GenerateCaptureStep(from, dir) {
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = from + dir;
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    return from | (to << 8) | (captured << 16);
}

function GenerateCaptureMovesFromTree(moves, from, dir) {
    var step = GenerateCaptureStep(from, dir);
    if (step == 0) return;
    var move = new Array();
    while (step != 0) {
        move.push(step);
        var pos = (step >> 8) & 0xFF;
        step = GenerateCaptureStep(pos, dir);
    }
    moves.push(move);
}

function GenerateCaptureMovesFrom(moves, from) {
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;   
    if (piece == pieceMan) {
        GenerateCaptureMovesFromTree(moves, from, -16);
    }
    if (piece == pieceLeft) {
        GenerateCaptureMovesFromTree(moves, from, 1);
    }
    if (piece == pieceRight) {
        GenerateCaptureMovesFromTree(moves, from, -1);
    }
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
    if (piece == pieceMan) {
        to = from - 16;
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to);
            moves.push(steps);
        }
    }
    if (piece == pieceLeft) {
        to = +from + +1;
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to);
            moves.push(steps);
        }
    }
    if (piece == pieceRight) {
        to = from - 1;
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to);
            moves.push(steps);
        }
    }
}

})();
