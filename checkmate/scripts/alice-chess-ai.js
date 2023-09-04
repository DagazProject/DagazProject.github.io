"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;

Dagaz.AI.PIECE_MASK       = 0x1F;
Dagaz.AI.TYPE_MASK        = 0xE;
Dagaz.AI.PLAYERS_MASK     = 0x30;
Dagaz.AI.COUNTER_SIZE     = 3;
Dagaz.AI.TYPE_SIZE        = 4;

Dagaz.AI.colorBlack       = 0x20;
Dagaz.AI.colorWhite       = 0x10;

var pieceEmpty            = 0x00;
var pieceMirrored         = 0x01;
var piecePawn             = 0x02;
var pieceMirroredPawn     = 0x03;
var pieceKnight           = 0x04;
var pieceMirroredKnight   = 0x05;
var pieceBishop           = 0x06;
var pieceMirroredBishop   = 0x07;
var pieceRook             = 0x08;
var pieceMirroredRook     = 0x09;
var pieceQueen            = 0x0A;
var pieceMirroredQueen    = 0x0B;
var pieceKing             = 0x0C;
var pieceMirroredKing     = 0x0D;
var pieceNo               = 0x80;

var moveflagEPC           = 0x2  << 16;
var moveflagCastleKing    = 0x4  << 16;
var moveflagCastleQueen   = 0x8  << 16;
var moveflagPromotion     = 0x10 << 16;
var moveflagPromoteKnight = 0x20 << 16;
var moveflagPromoteQueen  = 0x40 << 16;
var moveflagPromoteBishop = 0x80 << 16;

var g_castleRights; // bitmask representing castling rights, 1 = wk, 2 = wq, 4 = bk, 8 = bq
var g_enPassentSquare;

var g_moveUndoStack = new Array();

// Evaulation variables
var g_mobUnit;

var materialTable = [0, 0, 100, 100, 3350, 3350, 3450, 3450, 5000, 5000, 9750, 9750, 600000, 600000];

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
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceMirrored
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0 
], 
[   0,    0,   0,   0,   0,   0,    0,    0, // piecePawn
  -25,  105, 135, 270, 270, 135,  105,  -25,
  -80,    0,  30, 176, 176,  30,    0,  -80,
  -85,   -5,  25, 175, 175,  25,   -5,  -85,
  -90,  -10,  20, 125, 125,  20,  -10,  -90,
  -95,  -15,  15,  75,  75,  15,  -15,  -95, 
 -100,  -20,  10,  70,  70,  10,  -20, -100, 
    0,    0,   0,   0,   0,   0,    0,    0
],
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceMirroredPawn
  -25,  105, 135, 270, 270, 135,  105,  -25,
  -80,    0,  30, 176, 176,  30,    0,  -80,
  -85,   -5,  25, 175, 175,  25,   -5,  -85,
  -90,  -10,  20, 125, 125,  20,  -10,  -90,
  -95,  -15,  15,  75,  75,  15,  -15,  -95, 
 -100,  -20,  10,  70,  70,  10,  -20, -100, 
    0,    0,   0,   0,   0,   0,    0,    0
],
[-200, -100, -50, -50, -50, -50, -100, -200, // pieceKnight
 -100,    0,   0,   0,   0,   0,    0, -100,
  -50,    0,  60,  60,  60,  60,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
  -50,    0,  30,  30,  30,  30,    0,  -50,
 -100,    0,   0,   0,   0,   0,    0,  -100,
 -200,  -50, -25, -25, -25, -25,  -50,  -200
],
[-200, -100, -50, -50, -50, -50, -100, -200, // pieceMirroredKnight
 -100,    0,   0,   0,   0,   0,    0, -100,
  -50,    0,  60,  60,  60,  60,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
  -50,    0,  30,  30,  30,  30,    0,  -50,
 -100,    0,   0,   0,   0,   0,    0,  -100,
 -200,  -50, -25, -25, -25, -25,  -50,  -200
],
[ -50,  -50,  -25,-10, -10, -25,  -50,   -50, // pieceBishop
  -50,  -25,  -10,  0,   0, -10,  -25,   -50,
  -25,  -10,    0, 25,  25,   0,  -10,   -25,
  -10,    0,   25, 40,  40,  25,    0,   -10,
  -10,    0,   25, 40,  40,  25,    0,   -10,
  -25,  -10,    0, 25,  25,   0,  -10,   -25,
  -50,  -25,  -10,  0,   0, -10,  -25,   -50,
  -50,  -50,  -25,-10, -10, -25,  -50,   -50
],
[ -50,  -50,  -25,-10, -10, -25,  -50,   -50, // pieceMirroredBishop
  -50,  -25,  -10,  0,   0, -10,  -25,   -50,
  -25,  -10,    0, 25,  25,   0,  -10,   -25,
  -10,    0,   25, 40,  40,  25,    0,   -10,
  -10,    0,   25, 40,  40,  25,    0,   -10,
  -25,  -10,    0, 25,  25,   0,  -10,   -25,
  -50,  -25,  -10,  0,   0, -10,  -25,   -50,
  -50,  -50,  -25,-10, -10, -25,  -50,   -50
],
[ -60,  -30,  -10, 20,  20, -10,  -30,   -60, // pieceRook
   40,   70,   90,120, 120,  90,   70,    40,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60
],
[ -60,  -30,  -10, 20,  20, -10,  -30,   -60, // pieceMirroredRook
   40,   70,   90,120, 120,  90,   70,    40,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60
],
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceQueen
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
], 
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceMirroredQueen
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
], 
[  50,  150, -25, -125, -125, -25, 150,  50, // pieceKing
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
  150,  250,  75,  -25,  -25,  75, 250, 150
],
[  50,  150, -25, -125, -125, -25, 150,  50, // pieceMirroredKing
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
  150,  250,  75,  -25,  -25,  75, 250, 150
]];

var pieceSquareAdj = new Array(14);
var flipTable = new Array(256);

var g_vectorDelta  = new Array(256);

var g_bishopDeltas = [-15, -17, 15, 17];
var g_knightDeltas  = [31, 33, 14, -14, -31, -33, 18, -18];
var g_rookDeltas    = [-1, +1, -16, +16];
var g_queenDeltas   = [-1, +1, -15, +15, -17, +17, -16, +16];

var g_seeValues = [0, 0, 1, 1, 3, 3, 3, 3, 5, 5, 9, 9, 900, 900, 0, 0,
                   0, 0, 1, 1, 3, 3, 3, 3, 5, 5, 9, 9, 900, 900, 0, 0];

var g_castleRightsMask = [
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 7,15,15,15, 3,15,15,11, 0, 0, 0, 0,
0, 0, 0, 0,15,15,15,15,15,15,15,15, 0, 0, 0, 0,
0, 0, 0, 0,15,15,15,15,15,15,15,15, 0, 0, 0, 0,
0, 0, 0, 0,15,15,15,15,15,15,15,15, 0, 0, 0, 0,
0, 0, 0, 0,15,15,15,15,15,15,15,15, 0, 0, 0, 0,
0, 0, 0, 0,15,15,15,15,15,15,15,15, 0, 0, 0, 0,
0, 0, 0, 0,15,15,15,15,15,15,15,15, 0, 0, 0, 0,
0, 0, 0, 0,13,15,15,15,12,15,15,14, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[(square & 0xF) - 4] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move, color) {
    if (color == Dagaz.AI.colorWhite) {
        if (move & moveflagCastleKing) return "e1-g1";
        if (move & moveflagCastleQueen) return "e1-c1";
    } else {
        if (move & moveflagCastleKing) return "e8-g8";
        if (move & moveflagCastleQueen) return "e8-c8";
    }
    var result = FormatSquare(move & 0xFF) + '-' + FormatSquare((move >> 8) & 0xFF);
    if (move & moveflagPromotion) {
        if (move & moveflagPromoteBishop) result += " Bishop";
        else if (move & moveflagPromoteKnight) result += " Knight";
        else if (move & moveflagPromoteQueen) result += " Queen";
        else result += " Rook";
    }
    return result;
}

function Mobility(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite
    var mobUnit = color == Dagaz.AI.colorWhite ? g_mobUnit[0] : g_mobUnit[1];

    // Knight mobility
    mob = -3;
    pieceIdx = (color | pieceKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from + 31]];
        mob += mobUnit[Dagaz.AI.g_board[from + 33]];
        mob += mobUnit[Dagaz.AI.g_board[from + 14]];
        mob += mobUnit[Dagaz.AI.g_board[from - 14]];
        mob += mobUnit[Dagaz.AI.g_board[from - 31]];
        mob += mobUnit[Dagaz.AI.g_board[from - 33]];
        mob += mobUnit[Dagaz.AI.g_board[from + 18]];
        mob += mobUnit[Dagaz.AI.g_board[from - 18]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (color | pieceMirroredKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from + 31]];
        mob += mobUnit[Dagaz.AI.g_board[from + 33]];
        mob += mobUnit[Dagaz.AI.g_board[from + 14]];
        mob += mobUnit[Dagaz.AI.g_board[from - 14]];
        mob += mobUnit[Dagaz.AI.g_board[from - 31]];
        mob += mobUnit[Dagaz.AI.g_board[from - 33]];
        mob += mobUnit[Dagaz.AI.g_board[from + 18]];
        mob += mobUnit[Dagaz.AI.g_board[from - 18]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 65 * mob;

    // Bishop mobility
    mob = -4;
    pieceIdx = (color | pieceBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 15; while (Dagaz.AI.g_board[to] == 0) to -= 15;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }

        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 17; while (Dagaz.AI.g_board[to] == 0) to -= 17;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2; 
          }
        }

        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 15; while (Dagaz.AI.g_board[to] == 0) to += 15;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2; 
          }
        }

        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 17; while (Dagaz.AI.g_board[to] == 0) to += 17;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }

        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (color | pieceMirroredBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 15; while (Dagaz.AI.g_board[to] == 0) to -= 15;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }

        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 17; while (Dagaz.AI.g_board[to] == 0) to -= 17;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2; 
          }
        }

        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 15; while (Dagaz.AI.g_board[to] == 0) to += 15;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2; 
          }
        }

        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 17; while (Dagaz.AI.g_board[to] == 0) to += 17;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }

        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 44 * mob;

    // Rook mobility
    mob = -4;
    pieceIdx = (color | pieceRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++;}  if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (color | pieceMirroredRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++;}  if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Queen mobility
    mob = -2;
    pieceIdx = (color | pieceQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (color | pieceMirroredQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 22 * mob;

    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var evalAdjust = 0;

    // Black bishop pair
    if (Dagaz.AI.g_pieceCount[pieceBishop] + Dagaz.AI.g_pieceCount[pieceMirroredBishop] >= 2)
        evalAdjust -= 500;
    // White bishop pair
    if (Dagaz.AI.g_pieceCount[pieceBishop | Dagaz.AI.colorWhite] + Dagaz.AI.g_pieceCount[pieceMirroredBishop | Dagaz.AI.colorWhite]  >= 2)
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
    var moveTo = (move >> 8) & 0xFF;
    var captured = Dagaz.AI.g_board[moveTo] & Dagaz.AI.TYPE_MASK;
    var piece = Dagaz.AI.g_board[move & 0xFF];
    var score;
    if (captured != pieceEmpty) {
        var pieceType = (piece & Dagaz.AI.TYPE_MASK) >> 1;
        score = (captured << 5) - pieceType;
    } else {
        score = Dagaz.AI.historyTable[piece & Dagaz.AI.PIECE_MASK][moveTo];
    }
    return score;
}

Dagaz.AI.IsHashMoveValid = function(hashMove) {
    return false;
}

Dagaz.AI.isNoZugzwang = function() {
    return Dagaz.AI.g_pieceCount[pieceBishop | Dagaz.AI.g_toMove] != 0 || Dagaz.AI.g_pieceCount[pieceMirroredBishop | Dagaz.AI.g_toMove] != 0 ||         
           Dagaz.AI.g_pieceCount[pieceKnight | Dagaz.AI.g_toMove] != 0 || Dagaz.AI.g_pieceCount[pieceMirroredKnight | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceRook   | Dagaz.AI.g_toMove] != 0 || Dagaz.AI.g_pieceCount[pieceMirroredRook   | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceQueen  | Dagaz.AI.g_toMove] != 0 || Dagaz.AI.g_pieceCount[pieceMirroredQueen  | Dagaz.AI.g_toMove] != 0;
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

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {

  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = MakeSquare(row, col);
            flipTable[square] = MakeSquare((Dagaz.Model.HEIGHT - 1) - row, col);
       }
  }

  pieceSquareAdj[pieceEmpty]          = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceMirrored]       = MakeTable(Dagaz.AI.pieceAdj[pieceMirrored]);
  pieceSquareAdj[piecePawn]           = MakeTable(Dagaz.AI.pieceAdj[piecePawn]);
  pieceSquareAdj[pieceMirroredPawn]   = MakeTable(Dagaz.AI.pieceAdj[pieceMirroredPawn]);
  pieceSquareAdj[pieceKnight]         = MakeTable(Dagaz.AI.pieceAdj[pieceKnight]);
  pieceSquareAdj[pieceMirroredKnight] = MakeTable(Dagaz.AI.pieceAdj[pieceMirroredKnight]);
  pieceSquareAdj[pieceBishop]         = MakeTable(Dagaz.AI.pieceAdj[pieceBishop]);
  pieceSquareAdj[pieceMirroredBishop] = MakeTable(Dagaz.AI.pieceAdj[pieceMirroredBishop]);
  pieceSquareAdj[pieceRook]           = MakeTable(Dagaz.AI.pieceAdj[pieceRook]);
  pieceSquareAdj[pieceMirroredRook]   = MakeTable(Dagaz.AI.pieceAdj[pieceMirroredRook]);
  pieceSquareAdj[pieceQueen]          = MakeTable(Dagaz.AI.pieceAdj[pieceQueen]);
  pieceSquareAdj[pieceMirroredQueen]  = MakeTable(Dagaz.AI.pieceAdj[pieceMirroredQueen]);
  pieceSquareAdj[pieceKing]           = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);
  pieceSquareAdj[pieceMirroredKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceMirroredKing]);

  var pieceDeltas = [[], [], [], [], g_knightDeltas, g_knightDeltas, g_bishopDeltas, g_bishopDeltas, g_rookDeltas, g_rookDeltas, g_queenDeltas, g_queenDeltas, g_queenDeltas, g_queenDeltas];

  for (var i = 0; i < 256; i++) {
      g_vectorDelta[i] = new Object();
      g_vectorDelta[i].delta = 0;
      g_vectorDelta[i].pieceMask = new Array(2);
      g_vectorDelta[i].pieceMask[0] = 0;
      g_vectorDelta[i].pieceMask[1] = 0;
  }
    
  // Initialize the vector delta table    
  for (var row = 0; row < (Dagaz.Model.HEIGHT << 4); row += 0x10) {
      for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
           var square = row | col;
            
           // Pawn moves
           var index = square - (square - 17) + 128;
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << piecePawn);
           index = square - (square - 15) + 128;
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << piecePawn);
           index = square - (square - 17) + 128;
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << pieceMirroredPawn);
           index = square - (square - 15) + 128;
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << pieceMirroredPawn);
            
           index = square - (square + 17) + 128;
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);
           index = square - (square + 15) + 128;
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);
           index = square - (square + 17) + 128;
           g_vectorDelta[index].pieceMask[0] |= (1 << pieceMirroredPawn);
           index = square - (square + 15) + 128;
           g_vectorDelta[index].pieceMask[0] |= (1 << pieceMirroredPawn);

           for (var i = pieceKnight; i <= pieceMirroredKing; i++) {
                for (var dir = 0; dir < pieceDeltas[i].length; dir++) {
                     var target = square + pieceDeltas[i][dir];
                     while (!(target & 0x88)) {
                         index = square - target + 128;

                         g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << i);
                         g_vectorDelta[index].pieceMask[0] |= (1 << i);

                         var flip = -1;
                         if (square < target) flip = 1;

                         if ((square & 0xF0) == (target & 0xF0)) {
                             // On the same row
                             g_vectorDelta[index].delta = flip * 1;
                         } else if ((square & 0x0F) == (target & 0x0F)) {
                             // On the same column
                             g_vectorDelta[index].delta = flip * 16;
                         } else if ((square % 15) == (target % 15)) {
                             g_vectorDelta[index].delta = flip * 15;
                         } else if ((square % 17) == (target % 17)) {
                             g_vectorDelta[index].delta = flip * 17;
                         }
 
                         if ((i & Dagaz.AI.TYPE_MASK) == pieceKnight) {
                             g_vectorDelta[index].delta = pieceDeltas[i][dir];
                             break;
                         }

                         if ((i & Dagaz.AI.TYPE_MASK) == pieceKing)
                             break;

                         target += pieceDeltas[i][dir];
                     }
                }
           }
      }
  }
  InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (var i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        var enemy = i == 0 ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
        var friend = i == 0 ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][pieceMirrored] = 0;
        g_mobUnit[i][0x80] = 0;
        g_mobUnit[i][enemy  | piecePawn]           = 1;
        g_mobUnit[i][enemy  | pieceMirroredPawn]   = 1;
        g_mobUnit[i][enemy  | pieceBishop]         = 2;
        g_mobUnit[i][enemy  | pieceMirroredBishop] = 2;
        g_mobUnit[i][enemy  | pieceKnight]         = 2;
        g_mobUnit[i][enemy  | pieceMirroredKnight] = 2;
        g_mobUnit[i][enemy  | pieceRook]           = 4;
        g_mobUnit[i][enemy  | pieceMirroredRook]   = 4;
        g_mobUnit[i][enemy  | pieceQueen]          = 6;
        g_mobUnit[i][enemy  | pieceMirroredQueen]  = 6;
        g_mobUnit[i][enemy  | pieceKing]           = 6;
        g_mobUnit[i][enemy  | pieceMirroredKing]   = 6;
        g_mobUnit[i][friend | piecePawn]           = 0;
        g_mobUnit[i][friend | pieceMirroredPawn]   = 0;
        g_mobUnit[i][friend | pieceBishop]         = 0;
        g_mobUnit[i][friend | pieceMirroredBishop] = 0;
        g_mobUnit[i][friend | pieceKnight]         = 0;
        g_mobUnit[i][friend | pieceMirroredKnight] = 0;
        g_mobUnit[i][friend | pieceRook]           = 0;
        g_mobUnit[i][friend | pieceMirroredRook]   = 0;
        g_mobUnit[i][friend | pieceQueen]          = 0;
        g_mobUnit[i][friend | pieceMirroredQueen]  = 0;
        g_mobUnit[i][friend | pieceKing]           = 0;
        g_mobUnit[i][friend | pieceMirroredKing]   = 0;
    }
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split('+');
    
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
        }
        else {
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
                        piece |= piecePawn;
                        break;
                    case 's':
                        piece |= pieceMirroredPawn;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'e':
                        piece |= pieceMirroredBishop;
                        break;
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'l':
                        piece |= pieceMirroredKnight;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'a':
                        piece |= pieceMirroredRook;
                        break;
                    case 'q':
                        piece |= pieceQueen;
                        break;
                    case 'f':
                        piece |= pieceMirroredQueen;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                    case 'g':
                        piece |= pieceMirroredKing;
                        break;
                }
                
                Dagaz.AI.g_board[MakeSquare(row, col)] = piece;
                col++;
            }
        }
    }
    
    Dagaz.AI.InitializePieceList();
    
    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : 0;
    var them = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    
    g_castleRights = 0;
    if (chunks[2].indexOf('K') != -1) { 
        if (Dagaz.AI.g_board[MakeSquare(7, 4)] != (pieceKing | Dagaz.AI.colorWhite) ||
            Dagaz.AI.g_board[MakeSquare(7, 7)] != (pieceRook | Dagaz.AI.colorWhite)) {
            return 'Invalid FEN: White kingside castling not allowed';
        }
        g_castleRights |= 1;
    }
    if (chunks[2].indexOf('Q') != -1) {
        if (Dagaz.AI.g_board[MakeSquare(7, 4)] != (pieceKing | Dagaz.AI.colorWhite) ||
            Dagaz.AI.g_board[MakeSquare(7, 0)] != (pieceRook | Dagaz.AI.colorWhite)) {
            return 'Invalid FEN: White queenside castling not allowed';
        }
        g_castleRights |= 2;
    }
    if (chunks[2].indexOf('k') != -1) {
        if (Dagaz.AI.g_board[MakeSquare(0, 4)] != (pieceKing | Dagaz.AI.colorBlack) ||
            Dagaz.AI.g_board[MakeSquare(0, 7)] != (pieceRook | Dagaz.AI.colorBlack)) {
            return 'Invalid FEN: Black kingside castling not allowed';
        }
        g_castleRights |= 4;
    }
    if (chunks[2].indexOf('q') != -1) {
        if (Dagaz.AI.g_board[MakeSquare(0, 4)] != (pieceKing | Dagaz.AI.colorBlack) ||
            Dagaz.AI.g_board[MakeSquare(0, 0)] != (pieceRook | Dagaz.AI.colorBlack)) {
            return 'Invalid FEN: Black queenside castling not allowed';
        }
        g_castleRights |= 8;
    }
    
    g_enPassentSquare = -1;
    if (chunks[3].indexOf('-') == -1) {
	var col = chunks[3].charAt(0).charCodeAt() - 'a'.charCodeAt();
	var row = Dagaz.Model.HEIGHT - (chunks[3].charAt(1).charCodeAt() - '0'.charCodeAt());
	g_enPassentSquare = MakeSquare(row, col);
    }

    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][flipTable[i]];
            Dagaz.AI.g_baseEval -= materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    Dagaz.AI.g_move50 = 0;
    var kingPos = Dagaz.AI.g_pieceList[(Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE];
    Dagaz.AI.g_inCheck = false;
    if (kingPos == 0) kingPos = Dagaz.AI.g_pieceList[(Dagaz.AI.g_toMove | pieceMirroredKing) << Dagaz.AI.COUNTER_SIZE];
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, them, true);
    }

    // Check for king capture (invalid FEN)
    kingPos = Dagaz.AI.g_pieceList[(them | pieceKing) << Dagaz.AI.COUNTER_SIZE];
    if (kingPos == 0) kingPos = Dagaz.AI.g_pieceList[(them | pieceMirroredKing) << Dagaz.AI.COUNTER_SIZE]
    if ((kingPos != 0) && IsSquareAttackable(kingPos, Dagaz.AI.g_toMove, true)) {
        return 'Invalid FEN: Can capture king';
    }

    // Checkmate/stalemate
    if (GenerateValidMoves().length == 0) {
        return Dagaz.AI.g_inCheck ? 'Checkmate' : 'Stalemate';
    } 

    return '';
}

function UndoHistory(ep, castleRights, inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.ep = ep;
    this.castleRights = castleRights;
    this.inCheck = inCheck;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

Dagaz.AI.MakeMove = function(move) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 
    
    var flags = move & 0xFF0000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = Dagaz.AI.g_board[to];
    var piece = Dagaz.AI.g_board[from];
    var epcEnd = to;

    if (flags & moveflagEPC) {
        epcEnd = me ? (to + 0x10) : (to - 0x10);
        captured = Dagaz.AI.g_board[epcEnd];
        Dagaz.AI.g_board[epcEnd] = pieceEmpty;
    }

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(g_enPassentSquare, g_castleRights, Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    g_enPassentSquare = -1;

    if (flags) {
        if (flags & moveflagCastleKing) {
            if (IsSquareAttackable(from + 1, otherColor, false) ||
            	IsSquareAttackable(from + 2, otherColor, false)) {
                Dagaz.AI.g_moveCount--;
                return false;
            }
            
            var rook = Dagaz.AI.g_board[to + 1];
            
            Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to + 1][rook & Dagaz.AI.PIECE_MASK];
            Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to + 1][rook & Dagaz.AI.PIECE_MASK];
            Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to - 1][rook & Dagaz.AI.PIECE_MASK];
            Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to - 1][rook & Dagaz.AI.PIECE_MASK];
            
            Dagaz.AI.g_board[to - 1] = rook;
            Dagaz.AI.g_board[to + 1] = pieceEmpty;
            
            Dagaz.AI.g_baseEval -= pieceSquareAdj[rook & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to + 1] : (to + 1)];
            Dagaz.AI.g_baseEval += pieceSquareAdj[rook & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to - 1] : (to - 1)];

            var rookIndex = Dagaz.AI.g_pieceIndex[to + 1];
            Dagaz.AI.g_pieceIndex[to - 1] = rookIndex;
            Dagaz.AI.g_pieceList[((rook & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | rookIndex] = to - 1;
        } else if (flags & moveflagCastleQueen) {
            if (IsSquareAttackable(from - 1, otherColor, false) ||
            	IsSquareAttackable(from - 2, otherColor, false)) {
                Dagaz.AI.g_moveCount--;
                return false;
            }
            
            var rook = Dagaz.AI.g_board[to - 2];

            Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to -2][rook & Dagaz.AI.PIECE_MASK];
            Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to - 2][rook & Dagaz.AI.PIECE_MASK];
            Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to + 1][rook & Dagaz.AI.PIECE_MASK];
            Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to + 1][rook & Dagaz.AI.PIECE_MASK];
            
            Dagaz.AI.g_board[to + 1] = rook;
            Dagaz.AI.g_board[to - 2] = pieceEmpty;
            
            Dagaz.AI.g_baseEval -= pieceSquareAdj[rook & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to - 2] : (to - 2)];
            Dagaz.AI.g_baseEval += pieceSquareAdj[rook & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to + 1] : (to + 1)];

            var rookIndex = Dagaz.AI.g_pieceIndex[to - 2];
            Dagaz.AI.g_pieceIndex[to + 1] = rookIndex;
            Dagaz.AI.g_pieceList[((rook & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | rookIndex] = to + 1;
        }
    }

    if (captured) {
        // Remove our piece from the piece list
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceCount[capturedType]--;
        var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
        Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[epcEnd];
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? flipTable[epcEnd] : epcEnd];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[epcEnd][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[epcEnd][capturedType];
        Dagaz.AI.g_move50 = 0;
    } else if ((piece & Dagaz.AI.TYPE_MASK) == piecePawn) {
        var diff = to - from;
        if (diff < 0) diff = -diff;
        if (diff > 16) {
            g_enPassentSquare = me ? (to + 0x10) : (to - 0x10);
        }
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    
    g_castleRights &= g_castleRightsMask[from] & g_castleRightsMask[to];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[from] : from];
    
    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    var newPiece = piece;
    newPiece ^= pieceMirrored;
    if (flags & moveflagPromotion) {
        newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromoteKnight) 
            newPiece |= pieceKnight;
        else if (flags & moveflagPromoteQueen) 
            newPiece |= pieceQueen;
        else if (flags & moveflagPromoteBishop) 
            newPiece |= pieceBishop;
        else 
            newPiece |= pieceRook;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_board[to] = newPiece;
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];
        
    Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
    Dagaz.AI.g_baseEval -= materialTable[piece & Dagaz.AI.TYPE_MASK];
    Dagaz.AI.g_baseEval += materialTable[newPiece & Dagaz.AI.TYPE_MASK];

    var pawnType = piece & Dagaz.AI.PIECE_MASK;
    var promoteType = newPiece & Dagaz.AI.PIECE_MASK;

    Dagaz.AI.g_pieceCount[pawnType]--;

    var lastPawnSquare = Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pawnType]];
    Dagaz.AI.g_pieceIndex[lastPawnSquare] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPawnSquare]] = lastPawnSquare;
    Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pawnType]] = 0;
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[promoteType];
    Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
    Dagaz.AI.g_pieceCount[promoteType]++;

    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    if (captured) {
        if ((captured & pieceMirrored) != (piece & pieceMirrored)) {
            Dagaz.AI.UnmakeMove(move);
            return false;
        }
    }
    
    if ((piece & Dagaz.AI.TYPE_MASK) == pieceKing || Dagaz.AI.g_inCheck) {
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos == 0) kingPos = Dagaz.AI.g_pieceList[(pieceMirroredKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor, (piece & Dagaz.AI.TYPE_MASK) != pieceKing)) {
            Dagaz.AI.UnmakeMove(move);
            return false;
        }
    } else {
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos == 0) kingPos = Dagaz.AI.g_pieceList[(pieceMirroredKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            if (ExposesCheck(from, kingPos)) {
                Dagaz.AI.UnmakeMove(move);
                return false;
            }
            
            if (epcEnd != to) {
                if (ExposesCheck(epcEnd, kingPos)) {
                    Dagaz.AI.UnmakeMove(move);
                    return false;
                }
            }
        }
    }
    
    Dagaz.AI.g_inCheck = false;
    
    if (flags <= moveflagEPC) {
        var theirKingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
        if (theirKingPos == 0) theirKingPos = Dagaz.AI.g_pieceList[(pieceMirroredKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
        if (theirKingPos != 0) {
            // First check if the piece we moved can attack the enemy king
            Dagaz.AI.g_inCheck = IsSquareAttackableFrom(theirKingPos, to, true);
            if (!Dagaz.AI.g_inCheck) {
                // Now check if the square we moved from exposes check on the enemy king
                Dagaz.AI.g_inCheck = ExposesCheck(from, theirKingPos);
                if (!Dagaz.AI.g_inCheck) {
                    // Finally, ep. capture can cause another square to be exposed
                    if (epcEnd != to) {
                        Dagaz.AI.g_inCheck = ExposesCheck(epcEnd, theirKingPos);
                    }
                }
            }
        }
    } else {
        // Castle or promotion, slow check
        Dagaz.AI.g_inCheck = false;
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos == 0) kingPos = Dagaz.AI.g_pieceList[(pieceMirroredKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove, true);
        }
    }

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    
    Dagaz.AI.g_moveCount--;
    g_enPassentSquare = g_moveUndoStack[Dagaz.AI.g_moveCount].ep;
    g_castleRights = g_moveUndoStack[Dagaz.AI.g_moveCount].castleRights;
    Dagaz.AI.g_inCheck = g_moveUndoStack[Dagaz.AI.g_moveCount].inCheck;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;
    
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;
    
    var flags = move & 0xFF0000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    
    var piece = Dagaz.AI.g_board[to];
    
    if (flags) {
        if (flags & moveflagCastleKing) {
            var rook = Dagaz.AI.g_board[to - 1];
            Dagaz.AI.g_board[to + 1] = rook;
            Dagaz.AI.g_board[to - 1] = pieceEmpty;
			
            var rookIndex = Dagaz.AI.g_pieceIndex[to - 1];
            Dagaz.AI.g_pieceIndex[to + 1] = rookIndex;
            Dagaz.AI.g_pieceList[((rook & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | rookIndex] = to + 1;
        }
        else if (flags & moveflagCastleQueen) {
            var rook = Dagaz.AI.g_board[to + 1];
            Dagaz.AI.g_board[to - 2] = rook;
            Dagaz.AI.g_board[to + 1] = pieceEmpty;
			
            var rookIndex = Dagaz.AI.g_pieceIndex[to + 1];
            Dagaz.AI.g_pieceIndex[to - 2] = rookIndex;
            Dagaz.AI.g_pieceList[((rook & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | rookIndex] = to - 2;
        }
    }

    piece ^= pieceMirrored;
    
    if (flags & moveflagPromotion) {
        piece = (piece & (~Dagaz.AI.TYPE_MASK)) | piecePawn;
    }

    Dagaz.AI.g_board[from] = piece;

    var pawnType = Dagaz.AI.g_board[from] & Dagaz.AI.PIECE_MASK;
    var promoteType = Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK;

    Dagaz.AI.g_pieceCount[promoteType]--;

    var lastPromoteSquare = Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[promoteType]];
    Dagaz.AI.g_pieceIndex[lastPromoteSquare] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPromoteSquare]] = lastPromoteSquare;
    Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[promoteType]] = 0;
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[pawnType];
    Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
    Dagaz.AI.g_pieceCount[pawnType]++;

    var epcEnd = to;
    if (flags & moveflagEPC) {
        if (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) 
            epcEnd = to + 0x10;
        else 
            epcEnd = to - 0x10;
        Dagaz.AI.g_board[to] = pieceEmpty;
    }
    
    Dagaz.AI.g_board[epcEnd] = captured;

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;

    if (captured) {
        // Restore our piece to the piece list
        var captureType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[epcEnd] = Dagaz.AI.g_pieceCount[captureType];
        Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = epcEnd;
        Dagaz.AI.g_pieceCount[captureType]++;
    }
}

function ExposesCheck(from, kingPos) {
    var index = kingPos - from + 128;
    // If a queen can't reach it, nobody can!
    if ((g_vectorDelta[index].pieceMask[0] & (1 << (pieceQueen))) != 0) {
        var delta = g_vectorDelta[index].delta;
        var pos = kingPos + delta;
        while (Dagaz.AI.g_board[pos] == 0) pos += delta;
        
        var piece = Dagaz.AI.g_board[pos];
        if (((piece & (Dagaz.AI.g_board[kingPos] ^ Dagaz.AI.PLAYERS_MASK)) & Dagaz.AI.PLAYERS_MASK) == 0)
            return false;

        if ((Dagaz.AI.g_board[kingPos] & pieceMirrored) != (Dagaz.AI.g_board[pos] & pieceMirrored)) return false;

        // Now see if the piece can actually attack the king
        var backwardIndex = pos - kingPos + 128;
        return (g_vectorDelta[backwardIndex].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) != 0;
    }
    return false;
}

function IsSquareOnPieceLine(target, from) {
    var index = from - target + 128;
    var piece = Dagaz.AI.g_board[from];
    return (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) ? true : false;
}

function IsSquareAttackableFrom(target, from, checkMirrored) {
    var index = from - target + 128;
    var piece = Dagaz.AI.g_board[from];
    var pos = from;
    if (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
        do {
            from += inc;
            if (from == target)
                return !checkMirrored ? true : ((piece & pieceMirrored) == (Dagaz.AI.g_board[from] & pieceMirrored));
        } while (isEmpty(from, Dagaz.AI.g_board[pos] & pieceMirrored));
    }
    return false;
}


function IsSquareAttackable(target, color, checkMirrored) {
    // Attackable by pawns?
    var inc = color ? -16 : 16;
    var pawn = (color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack) | piecePawn;
    if (checkMirrored) {
        if (Dagaz.AI.g_board[target - (inc - 1)] == pawn)
            return ((Dagaz.AI.g_board[target - (inc - 1)] & pieceMirrored) == (Dagaz.AI.g_board[target] & pieceMirrored));
        if (Dagaz.AI.g_board[target - (inc + 1)] == pawn)
            return ((Dagaz.AI.g_board[target - (inc + 1)] & pieceMirrored) == (Dagaz.AI.g_board[target] & pieceMirrored));
        if (Dagaz.AI.g_board[target - (inc - 1)] == pawn + 1) 
            return ((Dagaz.AI.g_board[target - (inc - 1)] & pieceMirrored) == (Dagaz.AI.g_board[target] & pieceMirrored));
        if (Dagaz.AI.g_board[target - (inc + 1)] == pawn + 1) 
            return ((Dagaz.AI.g_board[target - (inc + 1)] & pieceMirrored) == (Dagaz.AI.g_board[target] & pieceMirrored));
    } else {
        if (Dagaz.AI.g_board[target - (inc - 1)] == pawn) return true;
        if (Dagaz.AI.g_board[target - (inc + 1)] == pawn) return true;
        if (Dagaz.AI.g_board[target - (inc - 1)] == pawn + 1) return true;
        if (Dagaz.AI.g_board[target - (inc + 1)] == pawn + 1) return true;
    }
    // Attackable by pieces?
    for (var i = pieceKnight; i <= pieceKing; i++) {
        var index = (color | i) << Dagaz.AI.COUNTER_SIZE;
        var square = Dagaz.AI.g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square, checkMirrored)) return true;
            square = Dagaz.AI.g_pieceList[++index];
        }
    }
    return false;
}

function GenerateMove(from, to, flags) {
    return from | (to << 8) | flags;
}

function GenerateValidMoves() {
    var moveList = new Array();
    var allMoves = new Array();
    Dagaz.AI.GenerateCaptureMoves(allMoves, null);
    Dagaz.AI.GenerateAllMoves(allMoves);
    for (var i = allMoves.length - 1; i >= 0; i--) {
        if (Dagaz.AI.MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            Dagaz.AI.UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

Dagaz.AI.GenerateAllMoves = function(moveStack) {
    var from, to, piece, pieceIdx;

    // Pawn quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        GeneratePawnMoves(moveStack, from);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredPawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        GeneratePawnMoves(moveStack, from);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Knight quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Bishop quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Queen quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King quiet moves
    {
 	pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
        if (from != 0) {
            to = from - 15; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 17; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 15; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 17; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 16; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 16; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
 	pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
        if (from != 0) {
            to = from - 15; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 17; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 15; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 17; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 16; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 16; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);

            if (!Dagaz.AI.g_inCheck) {
                var castleRights = g_castleRights;
                if (!Dagaz.AI.g_toMove) castleRights >>= 2;
                if (castleRights & 1) {
                    // Kingside castle
                    if (Dagaz.AI.g_board[from + 1] == pieceEmpty && Dagaz.AI.g_board[from + 2] == pieceEmpty) {
                        moveStack[moveStack.length] = GenerateMove(from, from + 0x02, moveflagCastleKing);
                    }
                }
                if (castleRights & 2) {
                    // Queenside castle
                    if (Dagaz.AI.g_board[from - 1] == pieceEmpty && Dagaz.AI.g_board[from - 2] == pieceEmpty && Dagaz.AI.g_board[from - 3] == pieceEmpty) {
                        moveStack[moveStack.length] = GenerateMove(from, from - 0x02, moveflagCastleQueen);
                    }
                }
            }
        }
    }
}

function isEmpty(to, mirrored) {
    if (Dagaz.AI.g_board[to] == 0) return true;
    if (Dagaz.AI.g_board[to] & pieceNo) return false;
    if (mirrored) return !(Dagaz.AI.g_board[to] & pieceMirrored);
        else return Dagaz.AI.g_board[to] & pieceMirrored;
}

Dagaz.AI.GenerateCaptureMoves = function(moveStack) {
    var from, to, piece, pieceIdx;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

    // Pawn captures
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc - 1;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + inc + 1;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredPawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc - 1;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + inc + 1;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    if (g_enPassentSquare != -1) {
        var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
        var pawn = Dagaz.AI.g_toMove | pieceMirroredPawn;
        var from = g_enPassentSquare - (inc + 1);
        if ((Dagaz.AI.g_board[from] & Dagaz.AI.PIECE_MASK) == pawn) {
            moveStack[moveStack.length] = GenerateMove(from, g_enPassentSquare, moveflagEPC);
        }
        from = g_enPassentSquare - (inc - 1);
        if ((Dagaz.AI.g_board[from] & Dagaz.AI.PIECE_MASK) == pawn) {
            moveStack[moveStack.length] = GenerateMove(from, g_enPassentSquare, moveflagEPC);
        }
    }

    // Knight captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Bishop captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Rook captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Queen captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to--; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (isEmpty(to, false)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to--; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (isEmpty(to, true)); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx];
    if (from != 0) {
	to = from - 15; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
    pieceIdx = (Dagaz.AI.g_toMove | pieceMirroredKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx];
    if (from != 0) {
	to = from - 15; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

function MovePawnTo(moveStack, start, square) {
    var row = square & 0xF0;
    var delta = (8 - Dagaz.Model.HEIGHT) << 4;
    if (((row == (0x90 - delta)) || (row == 0x20))) {
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteQueen);
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteKnight);
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteBishop);
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion);
    } else {
        moveStack[moveStack.length] = GenerateMove(start, square, 0);
    }
}

function GeneratePawnMoves(moveStack, from) {
    var piece = Dagaz.AI.g_board[from];
    var color = piece & Dagaz.AI.colorWhite;
    var inc = (color == Dagaz.AI.colorWhite) ? -16 : 16;
    // Quiet pawn moves
    var to = from + inc;
    var delta = (8 - Dagaz.Model.HEIGHT) << 4;
    if (isEmpty(to, false)) {
	MovePawnTo(moveStack, from, to);
	// Check if we can do a 2 square jump
	if ((((from & 0xF0) == 0x30) && color != Dagaz.AI.colorWhite) ||
	    (((from & 0xF0) == (0x80 - delta)) && color == Dagaz.AI.colorWhite)) {
            to += inc;
            if (Dagaz.AI.g_board[to] == 0) {
                moveStack[moveStack.length] = GenerateMove(from, to, 0);
            }				
	}
    }
}

Dagaz.AI.See = function(move) {
    var from = move & 0xFF;
    var to = (move >> 8) & 0xFF;

    var fromPiece = Dagaz.AI.g_board[from];

    var fromValue = g_seeValues[fromPiece & Dagaz.AI.PIECE_MASK];
    var toValue = g_seeValues[Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK];

    if (fromValue <= toValue) {
        return true;
    }

    if (move >> 16) {
        // Castles, promotion, ep are always good
        return true;
    }

    var us = (fromPiece & Dagaz.AI.colorWhite) ? Dagaz.AI.colorWhite : 0;
    var them = Dagaz.AI.colorWhite - us;

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    var inc = (fromPiece & Dagaz.AI.colorWhite) ? -16 : 16; // Note: this is capture direction from to, so reversed from normal move direction
    if (((Dagaz.AI.g_board[to + inc + 1] & Dagaz.AI.PIECE_MASK) == (piecePawn | them)) ||
        ((Dagaz.AI.g_board[to + inc - 1] & Dagaz.AI.PIECE_MASK) == (piecePawn | them))) {
        return false;
    }
    if (((Dagaz.AI.g_board[to + inc + 1] & Dagaz.AI.PIECE_MASK) == (pieceMirroredPawn | them)) ||
        ((Dagaz.AI.g_board[to + inc - 1] & Dagaz.AI.PIECE_MASK) == (pieceMirroredPawn | them))) {
        return false;
    }

    var themAttacks = new Array();

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    var captureDeficit = fromValue - toValue;
    SeeAddKnightAttacks(to, them, themAttacks, pieceKnight);
    SeeAddKnightAttacks(to, them, themAttacks, pieceMirroredKnight);
    if (themAttacks.length != 0 && captureDeficit > g_seeValues[pieceKnight]) {
        return false;
    }

    // Slider attacks
    Dagaz.AI.g_board[from] = 0;
    for (var pieceType = pieceBishop; pieceType <= pieceMirroredQueen; pieceType++) {
        if (SeeAddSliderAttacks(to, them, themAttacks, pieceType)) {
            if (captureDeficit > g_seeValues[pieceType]) {
                Dagaz.AI.g_board[from] = fromPiece;
                return false;
            }
        }
    }

    // Pawn defenses 
    // At this point, we are sure we are making a "losing" capture.  The opponent can not capture back with a 
    // pawn.  They cannot capture back with a minor/major and stand pat either.  So, if we can capture with 
    // a pawn, it's got to be a winning or equal capture. 
    if (((Dagaz.AI.g_board[to - inc + 1] & Dagaz.AI.PIECE_MASK) == (piecePawn | us)) ||
        ((Dagaz.AI.g_board[to - inc - 1] & Dagaz.AI.PIECE_MASK) == (piecePawn | us))) {
        Dagaz.AI.g_board[from] = fromPiece;
        return true;
    }
    if (((Dagaz.AI.g_board[to - inc + 1] & Dagaz.AI.PIECE_MASK) == (pieceMirroredPawn | us)) ||
        ((Dagaz.AI.g_board[to - inc - 1] & Dagaz.AI.PIECE_MASK) == (pieceMirroredPawn | us))) {
        Dagaz.AI.g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceKing);
    SeeAddSliderAttacks(to, them, themAttacks, pieceMirroredKing);

    // Our attacks
    var usAttacks = new Array();
    SeeAddKnightAttacks(to, us, usAttacks, pieceKnight);
    SeeAddKnightAttacks(to, us, usAttacks, pieceMirroredKnight);
    for (var pieceType = pieceBishop; pieceType <= pieceMirroredKing; pieceType++) {
        SeeAddSliderAttacks(to, us, usAttacks, pieceType);
    }

    Dagaz.AI.g_board[from] = fromPiece;

    // We are currently winning the amount of material of the captured piece, time to see if the opponent 
    // can get it back somehow.  We assume the opponent can capture our current piece in this score, which 
    // simplifies the later code considerably. 
    var seeValue = toValue - fromValue;

    for (; ; ) {
        var capturingPieceValue = 1000;
        var capturingPieceIndex = -1;

        // Find the least valuable piece of the opponent that can attack the square
        for (var i = 0; i < themAttacks.length; i++) {
            if (themAttacks[i] != 0) {
                var pieceValue = g_seeValues[Dagaz.AI.g_board[themAttacks[i]] & Dagaz.AI.TYPE_MASK];
                if (pieceValue < capturingPieceValue) {
                    capturingPieceValue = pieceValue;
                    capturingPieceIndex = i;
                }
            }
        }

        if (capturingPieceIndex == -1) {
            // Opponent can't capture back, we win
            return true;
        }

        // Now, if seeValue < 0, the opponent is winning.  If even after we take their piece, 
        // we can't bring it back to 0, then we have lost this battle. 
        seeValue += capturingPieceValue;
        if (seeValue < 0) {
            return false;
        }

        var capturingPieceSquare = themAttacks[capturingPieceIndex];
        themAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);

        // Our turn to capture
        capturingPieceValue = 1000;
        capturingPieceIndex = -1;

        // Find our least valuable piece that can attack the square
        for (var i = 0; i < usAttacks.length; i++) {
            if (usAttacks[i] != 0) {
                var pieceValue = g_seeValues[Dagaz.AI.g_board[usAttacks[i]] & Dagaz.AI.TYPE_MASK];
                if (pieceValue < capturingPieceValue) {
                    capturingPieceValue = pieceValue;
                    capturingPieceIndex = i;
                }
            }
        }

        if (capturingPieceIndex == -1) {
            // We can't capture back, we lose :( 
            return false;
        }

        // Assume our opponent can capture us back, and if we are still winning, we can stand-pat 
        // here, and assume we've won. 
        seeValue -= capturingPieceValue;
        if (seeValue >= 0) {
            return true;
        }

        capturingPieceSquare = usAttacks[capturingPieceIndex];
        usAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);
    }
}

function SeeAddXrayAttack(target, square, us, usAttacks, themAttacks) {
    var index = square - target + 128;
    var delta = -g_vectorDelta[index].delta;
    if (delta == 0) return;
    square += delta;
    while (Dagaz.AI.g_board[square] == 0) {
        square += delta;
    }
    if ((Dagaz.AI.g_board[square] & Dagaz.AI.PLAYERS_MASK) && IsSquareOnPieceLine(target, square)) {
        if ((Dagaz.AI.g_board[square] & pieceMirrored) != (Dagaz.AI.g_board[target] & pieceMirrored)) return;
        if ((Dagaz.AI.g_board[square] & Dagaz.AI.colorWhite) == us) {
            usAttacks[usAttacks.length] = square;
        } else {
            themAttacks[themAttacks.length] = square;
        }
    }
}

// target = attacking square, us = color of knights to look for, attacks = array to add squares to
function SeeAddKnightAttacks(target, us, attacks, pieceType) {
    var pieceIdx = (us | pieceType) << Dagaz.AI.COUNTER_SIZE;
    var attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    while (attackerSq != 0) {
        if (IsSquareOnPieceLine(target, attackerSq)) {
            if ((Dagaz.AI.g_board[attackerSq] & pieceMirrored) != (Dagaz.AI.g_board[target] & pieceMirrored)) break;
            attacks[attacks.length] = attackerSq;
        }
        attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

function SeeAddSliderAttacks(target, us, attacks, pieceType) {
    var pieceIdx = (us | pieceType) << Dagaz.AI.COUNTER_SIZE;
    var attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    var hit = false;
    while (attackerSq != 0) {
        if (IsSquareAttackableFrom(target, attackerSq, true)) {
            if ((Dagaz.AI.g_board[attackerSq] & pieceMirrored) != (Dagaz.AI.g_board[target] & pieceMirrored)) break;
            attacks[attacks.length] = attackerSq;
            hit = true;
        }
        attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    return hit;
}

})();
