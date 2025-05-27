"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 0;
Dagaz.AI.PIECE_MASK       = 0xF;
Dagaz.AI.TYPE_MASK        = 0x7;
Dagaz.AI.PLAYERS_MASK     = 0x18;
Dagaz.AI.COUNTER_SIZE     = 6;
Dagaz.AI.TYPE_SIZE        = 3;

Dagaz.AI.colorBlack       = 0x10;
Dagaz.AI.colorWhite       = 0x08;

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var pieceUnicorn          = 0x02;
var pieceBishop           = 0x03;
var pieceKnight           = 0x04;
var pieceRook             = 0x05;
var pieceQueen            = 0x06;
var pieceKing             = 0x07;

var moveflagPromotion     = 0x01 << 24;

var g_moveUndoStack = new Array();

var g_mobUnit;

var materialTable = [0, 800, 2000, 2500, 3350, 5000, 1000, 600000];

Dagaz.AI.pieceAdj = [
[   
    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
],
[   
    0,    0,    0,    0,    0, // piecePawn
   50,  200,  300,  150,   50, 
   30,  100,  150,  100,   30, 
   10,   50,  100,   50,   10, 
    0,    0,    0,    0,    0,

   50,  200,  300,  200,   50,
   30,  150,  250,  150,   30, 
   10,  100,  200,  100,   10, 
    0,   50,  150,   50,    0, 
    0,    0,    0,    0,    0,

    0,   30,   50,   30,    0,
  -10,   50,  100,   50,  -10, 
    0,   70,  200,   70,    0, 
  -10,   40,  130,   40,  -10, 
    0,    0,    0,    0,    0,

  -30,   10,   30,   10,  -30,
  -20,   30,   50,   30,  -20, 
  -10,   50,  150,   50,  -10, 
  -20,   20,  100,   20,  -20, 
    0,    0,    0,    0,    0,

  -40,    0,   10,    0,  -40,
  -30,   10,   50,   10,  -30, 
  -20,   20,   80,   20,  -20, 
  -50,   10,   70,   10,  -50, 
    0,    0,    0,    0,    0
],
[   
    0,    0,    0,    0,    0, // pieceUnicorn
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   30,   30,   30,    0, 
    0,   30,   60,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
],
[   
  -50,    0,    0,    0,  -50, // pieceBishop
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   30,   30,   30,    0, 
    0,   30,   60,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
  -50,    0,    0,    0,  -50
],
[   
  -50,    0,    0,    0,  -50, // pieceKnight
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   30,   30,   30,    0, 
    0,   30,   60,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
  -50,    0,    0,    0,  -50
],
[   
    0,    0,    0,    0,    0, // pieceRook
    0,   20,  100,   20,    0, 
    0,   20,   20,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,   20,  100,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
],
[   
    0,    0,    0,    0,    0, // pieceQueen
    0,   20,  100,   20,    0, 
    0,   20,   20,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,   20,  100,   20,    0,
    0,   30,   30,   30,    0, 
    0,   30,   70,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,   70,   70,   70,    0, 
    0,   70,  100,   70,    0, 
    0,   70,   70,   70,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,   10,   10,   10,    0, 
    0,   10,   50,   10,    0, 
    0,   10,   10,   10,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
],
[   
    0,    0,    0,    0,    0, // pieceKing
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,  100, -100,  100,    0, 
    0,   50,  -50,   50,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,  100,  -50,  100,    0, 
    0,   50,  -25,   50,    0
]];

var pieceSquareAdj = new Array(8);
var flipTable = new Array(256 * 9);

var g_seeValues = [0, 1, 3, 3, 3, 5, 9, 900,
                   0, 1, 3, 3, 3, 5, 9, 900];

Dagaz.AI.g_board = new Array(256 * 9);

function MakeSquare(row, column, plane) {
    return ((plane + 2) << 8) | ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    var p = ['A', 'B', 'C', 'D', 'E'];
    var r = ['a', 'b', 'c', 'd', 'e'];
    return p[(square >> 8)  - 2] + 
           r[(square & 0xF) - 4] + 
           (((Dagaz.Model.HEIGHT + 1) - ((square & 0xF0) >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move, color) {
    var result = FormatSquare(move & 0xFFF) + '-' + FormatSquare((move >> 12) & 0xFFF);
    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var evalAdjust = 0;

    // Black queen gone, then cancel white's penalty for king movement
    if (Dagaz.AI.g_pieceList[pieceQueen << Dagaz.AI.COUNTER_SIZE] == 0) {
        var kingPos = Dagaz.AI.g_pieceList[(Dagaz.AI.colorWhite | pieceKing) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            evalAdjust -= pieceSquareAdj[pieceKing][kingPos];
        }
    }

    // White queen gone, then cancel black's penalty for king movement
    if (Dagaz.AI.g_pieceList[(Dagaz.AI.colorWhite | pieceQueen) << Dagaz.AI.COUNTER_SIZE] == 0) {
        var kingPos = flipTable[Dagaz.AI.g_pieceList[pieceKing << Dagaz.AI.COUNTER_SIZE]];
        if (kingPos != 0) {
            evalAdjust += pieceSquareAdj[pieceKing][kingPos];
        }
    }

    // Black bishop pair
    if (Dagaz.AI.g_pieceCount[pieceBishop] >= 2)
        evalAdjust -= 500;
    // White bishop pair
    if (Dagaz.AI.g_pieceCount[pieceBishop | Dagaz.AI.colorWhite] >= 2)
        evalAdjust += 500;

    var mobility = Mobility(Dagaz.AI.colorWhite) - Mobility(0);

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
    var moveTo = (move >> 12) & 0xFFF;
    var captured = Dagaz.AI.g_board[moveTo] & Dagaz.AI.TYPE_MASK;
    var piece = Dagaz.AI.g_board[move & 0xFFF];
    var score;
    if (captured != pieceEmpty) {
        var pieceType = piece & Dagaz.AI.TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = Dagaz.AI.historyTable[piece & Dagaz.AI.PIECE_MASK][moveTo];
    }
    return score;
}

Dagaz.AI.IsHashMoveValid = function(hashMove) {
    var from = hashMove & 0xFFF;
    var to = (hashMove >> 12) & 0xFFF;
    var ourPiece = Dagaz.AI.g_board[from];
    var pieceType = ourPiece & Dagaz.AI.TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
    // Can't move a piece we don't control
    if (Dagaz.AI.g_toMove != (ourPiece & Dagaz.AI.colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (Dagaz.AI.g_board[to] != 0 && (Dagaz.AI.g_toMove == (Dagaz.AI.g_board[to] & Dagaz.AI.colorWhite))) return false;
    if (pieceType == piecePawn) {
        if (hashMove & moveflagPromotion) {
            return false;
        }
        // Valid moves are push, capture, double push, promotions
        var dir = to - from;
        if ((Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) != (dir < 0))  {
            // Pawns have to move in the right direction
            return false;
        }

        var row = to & 0xFF0;
        if (((row == 0x660 && !Dagaz.AI.g_toMove) ||
             (row == 0x220 && Dagaz.AI.g_toMove)) != (hashMove & moveflagPromotion)) {
            // Handle promotions
            return false;
        }

        if (dir == -16 || dir == 16 || dir == -256 || dir == 256) {
            // White/Black push
            return Dagaz.AI.g_board[to] == 0;
        } else if (dir == -15 || dir == -17 || dir == 15 || dir == 17 || dir == -255 || dir == 255 || dir == -257 || dir == 257 || dir == -240 || dir == 240) {
            // White/Black capture
            return Dagaz.AI.g_board[to] != 0;
        } else {
            return false;
        }

        return true;
    } else {
        return IsSquareAttackableFrom(to, from);
    }
}

Dagaz.AI.isNoZugzwang = function() {
    return Dagaz.AI.g_pieceCount[pieceBishop  | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceUnicorn | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceKnight  | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceRook    | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceQueen   | Dagaz.AI.g_toMove] != 0;
}

function MakeTable(table) {
    var result = new Array(256 * 9);
    for (var i = 0; i < 256 * 9; i++) {
        result[i] = 0;
    }
    for (var plane = 0; plane < Dagaz.Model.HEIGHT; plane++) {
        for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
            for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
                result[MakeSquare(row, col, plane)] = table[(plane * Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) + (row * Dagaz.Model.WIDTH) + col];
            }
        }
    }
    return result;
}

})();
