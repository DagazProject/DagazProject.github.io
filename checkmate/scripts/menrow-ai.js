"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.AI.STALMATED        = true;

Dagaz.AI.PIECE_MASK       = 0x1F;
Dagaz.AI.TYPE_MASK        = 0xF;
Dagaz.AI.PLAYERS_MASK     = 0x30;
Dagaz.AI.COUNTER_SIZE     = 5;
Dagaz.AI.TYPE_SIZE        = 4;

Dagaz.AI.colorBlack       = 0x20;
Dagaz.AI.colorWhite       = 0x10;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var piecePawn             = 0x02;
var pieceDama             = 0x03;
var pieceKnight           = 0x04;
var pieceBishop           = 0x05;
var pieceRook             = 0x06;
var pieceQueen            = 0x07;
var pieceKing             = 0x08;
var pieceNo               = 0x80;

var moveflagCastleKing    = 0x2  << 24;
var moveflagCastleQueen   = 0x4  << 24;
var moveflagPromotion     = 0x8  << 24;
var moveflagPromoteRook   = 0x10 << 24;
var moveflagPromoteKnight = 0x20 << 24;
var moveflagPromoteQueen  = 0x40 << 24;
var moveflagPromoteBishop = 0x80 << 24;

var g_castleRights; // bitmask representing castling rights, 1 = wk, 2 = wq, 4 = bk, 8 = bq

var g_moveUndoStack = new Array();

// Evaulation variables
var g_mobUnit;

var materialTable = [0, 600, 800, 3000, 3350, 3450, 5000, 9750, 600000];

Dagaz.AI.pieceAdj = [
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceEmpty
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0 
], 
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceMan
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
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
  -85,   -5,  25, 175, 175,  25,   -5,  -85,
  -85,   -5,  25, 175, 175,  25,   -5,  -85,
  -90,  -10,  20, 125, 125,  20,  -10,  -90,
  -95,  -15,  15,  75,  75,  15,  -15,  -95, 
 -100,  -20,  10,  70,  70,  10,  -20, -100, 
    0,    0,   0,   0,   0,   0,    0,    0
],
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceDama
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0 
], 
[-200, -100, -50, -50, -50, -50, -100, -200, // pieceKnight
 -100,    0,   0,   0,   0,   0,    0, -100,
  -50,    0,  60,  60,  60,  60,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
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
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
  150,  250,  75,  -25,  -25,  75, 250, 150
]];

var pieceSquareAdj = new Array(9);
var flipTable = new Array(256);

var g_vectorDelta  = new Array(512);

var g_bishopDeltas = [-15, -17, 15, 17];
var g_knightDeltas = [31, 33, 14, -14, -31, -33, 18, -18];
var g_rookDeltas   = [-1, +1, -16, +16];
var g_queenDeltas  = [-1, +1, -15, +15, -17, +17, -16, +16];

var g_seeValues = [0, 1, 1, 2, 3, 3, 5, 7, 900, 0, 0, 0, 0, 0, 0, 0,
                   0, 1, 1, 2, 3, 3, 5, 7, 900, 0, 0, 0, 0, 0, 0, 0];

Dagaz.AI.g_flags = 0;

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
    return ((row + 2) << 4) | (column + 2);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

var formatMove = function(step, color, rn) {
    var result = '';
    if (rn == 0) {
        result = FormatSquare(step & 0xFF)
    }
    result = result + FormatSquare((step >> 8) & 0xFF);
    if (step & moveflagPromotion) {
        if (step & moveflagPromoteBishop) result += " Bishop";
        else if (step & moveflagPromoteRook) result += " Rook";
        else if (step & moveflagPromoteKnight) result += " Knight";
        else if (step & moveflagPromoteQueen) result += " Queen";
        else result += " Dama";
    }
    return result;
}

Dagaz.AI.FormatMove = function(move, color) {
    var result = '';
    if (move.length == 1) {
        if (color == Dagaz.AI.colorWhite) {
            if (move[0] & moveflagCastleKing) return "e1g1";
            if (move[0] & moveflagCastleQueen) return "e1c1";
        } else {
            if (move[0] & moveflagCastleKing) return "e8g8";
            if (move[0] & moveflagCastleQueen) return "e8c8";
        }
    }
    for (var i = 0; i < move.length; i++) {
        result = result + formatMove(move[i], color, i);
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
    result += 22 * mob;

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
    if ((move[0] >> 16) & 0xFF) return 0;
    var moveTo = (move[0] >> 8) & 0xFF;   
    var captured = Dagaz.AI.g_board[moveTo] & Dagaz.AI.TYPE_MASK;
    var piece = Dagaz.AI.g_board[move[0] & 0xFF];
    var score;
    if (captured != pieceEmpty) {
        var pieceType = piece & Dagaz.AI.TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = Dagaz.AI.historyTable[piece & Dagaz.AI.PIECE_MASK][moveTo];
    }
    return score;
}

var isHashMoveValid = function(step) {
    var from = step & 0xFF;
    var to = (step >> 8) & 0xFF;
    var ourPiece = Dagaz.AI.g_board[from];
    var pieceType = ourPiece & Dagaz.AI.TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
    if (pieceType == pieceDama) return false;
    // Can't move a piece we don't control
    if (Dagaz.AI.g_toMove != (ourPiece & Dagaz.AI.colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (Dagaz.AI.g_board[to] != 0 && (Dagaz.AI.g_toMove == (Dagaz.AI.g_board[to] & Dagaz.AI.colorWhite))) return false;
    if (pieceType == piecePawn) {
        // Valid moves are push, capture, double push, promotions
        var dir = to - from;
        if ((Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) != (dir < 0))  {
            // Pawns have to move in the right direction
            return false;
        }

        var row = to & 0xF0;
        var delta = (8 - Dagaz.Model.HEIGHT) << 4;
        if (((row == (0x90 - delta) && !Dagaz.AI.g_toMove) ||
             (row == 0x20 && Dagaz.AI.g_toMove)) != (step & moveflagPromotion)) {
            // Handle promotions
            return false;
        }

        if (dir == -16 || dir == 16) {
            // White/Black push
            return Dagaz.AI.g_board[to] == 0;
        } else if (dir == -15 || dir == -17 || dir == 15 || dir == 17) {
            // White/Black capture
            return Dagaz.AI.g_board[to] != 0;
        } else {
            return false;
        }

        return true;
    } else {
        // This validates that this piece type can actually make the attack
        if (step >> 16) return false;
        return IsSquareAttackableFrom(to, from);
    }
}

Dagaz.AI.IsHashMoveValid = function(move) {
    if (move.length > 1) return false;
    if ((move[0] >> 16) & 0xFF) return false;
    return isHashMoveValid(move[0]);
}

Dagaz.AI.isNoZugzwang = function() {
    return Dagaz.AI.g_pieceCount[pieceBishop | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceKnight | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceRook   | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceQueen  | Dagaz.AI.g_toMove] != 0;
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

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceMan]);
  pieceSquareAdj[piecePawn]   = MakeTable(Dagaz.AI.pieceAdj[piecePawn]);
  pieceSquareAdj[pieceDama]   = MakeTable(Dagaz.AI.pieceAdj[pieceDama]);
  pieceSquareAdj[pieceKnight] = MakeTable(Dagaz.AI.pieceAdj[pieceKnight]);
  pieceSquareAdj[pieceBishop] = MakeTable(Dagaz.AI.pieceAdj[pieceBishop]);
  pieceSquareAdj[pieceRook]   = MakeTable(Dagaz.AI.pieceAdj[pieceRook]);
  pieceSquareAdj[pieceQueen]  = MakeTable(Dagaz.AI.pieceAdj[pieceQueen]);
  pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);

  var pieceDeltas = [[], [], [], g_bishopDeltas, g_knightDeltas, g_bishopDeltas, g_rookDeltas, g_queenDeltas, g_queenDeltas];

  for (var i = 0; i < 512; i++) {
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
           var index = square - (square - 17) + 256;
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << piecePawn);
           index = square - (square - 15) + 256;
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << piecePawn);
            
           index = square - (square + 17) + 256;
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);
           index = square - (square + 15) + 256;
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);

           for (var i = pieceDama; i <= pieceKing; i++) {
                for (var dir = 0; dir < pieceDeltas[i].length; dir++) {
                     var target = square + pieceDeltas[i][dir];
                     while (!(target & 0x88)) {
                         index = square - target + 256;

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
 
                         if (i == pieceKnight) {
                             g_vectorDelta[index].delta = pieceDeltas[i][dir];
                             break;
                         }

                         if (i == pieceKing)
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
        g_mobUnit[i][0x80] = 0;
        g_mobUnit[i][enemy  | pieceMan]    = 1;
        g_mobUnit[i][enemy  | piecePawn]   = 1;
        g_mobUnit[i][enemy  | pieceDama]   = 2;
        g_mobUnit[i][enemy  | pieceBishop] = 2;
        g_mobUnit[i][enemy  | pieceKnight] = 2;
        g_mobUnit[i][enemy  | pieceRook]   = 4;
        g_mobUnit[i][enemy  | pieceQueen]  = 6;
        g_mobUnit[i][enemy  | pieceKing]   = 6;
        g_mobUnit[i][friend | pieceMan]    = 0;
        g_mobUnit[i][friend | piecePawn]   = 0;
        g_mobUnit[i][friend | pieceDama]   = 0;
        g_mobUnit[i][friend | pieceBishop] = 0;
        g_mobUnit[i][friend | pieceKnight] = 0;
        g_mobUnit[i][friend | pieceRook]   = 0;
        g_mobUnit[i][friend | pieceQueen]  = 0;
        g_mobUnit[i][friend | pieceKing]   = 0;
    }
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
                    case 'm':
                        piece |= pieceMan;
                        break;
                    case 'd':
                        piece |= pieceDama;
                        break;
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'q':
                        piece |= pieceQueen;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                
                if (piece & Dagaz.AI.TYPE_MASK) {
                    Dagaz.AI.g_board[MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }
    
    Dagaz.AI.InitializePieceList();
    
    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : 0;
    Dagaz.AI.player = Dagaz.AI.g_toMove;
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
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, them);
    }

    // Check for king capture (invalid FEN)
/*  kingPos = Dagaz.AI.g_pieceList[(them | pieceKing) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, Dagaz.AI.g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }

    // Checkmate/stalemate
    if (GenerateValidMoves().length == 0) {
        return Dagaz.AI.g_inCheck ? 'Checkmate' : 'Stalemate';
    }*/

    return '';
}

function UndoHistory(step, num, castleRights, inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.step = step;
    this.num = num;
    this.castleRights = castleRights;
    this.inCheck = inCheck;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

var MakeStep = function(step, num) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 
    
    var flags = step & 0xFF000000;
    var to = (step >> 8) & 0xFF;
    var from = step & 0xFF;
    var captured = Dagaz.AI.g_board[to];
    var piece = Dagaz.AI.g_board[from];

    var target = (step >> 16) & 0xFF;
    if (target) {
        captured = Dagaz.AI.g_board[target];
    }

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(step, num, g_castleRights, Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    if (flags) {
        if (flags & moveflagCastleKing) {
            if (IsSquareAttackable(from + 1, otherColor) ||
            	IsSquareAttackable(from + 2, otherColor)) {
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
            if (IsSquareAttackable(from - 1, otherColor) ||
            	IsSquareAttackable(from - 2, otherColor)) {
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
        var pos = target ? target : to;
        Dagaz.AI.g_board[pos] = pieceEmpty;

        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceCount[capturedType]--;
        var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
        Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[pos];
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? flipTable[pos] : pos];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[pos][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[pos][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    
    g_castleRights &= g_castleRightsMask[from] & g_castleRightsMask[to];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[from] : from];
    
    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromoteRook) 
            newPiece |= pieceRook;
        else if (flags & moveflagPromoteKnight) 
            newPiece |= pieceKnight;
        else if (flags & moveflagPromoteQueen) 
            newPiece |= pieceQueen;
        else if (flags & moveflagPromoteBishop) 
            newPiece |= pieceBishop;
        else 
            newPiece |= pieceDama;

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
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return target;
}

var UnmakeStep = function() {
    Dagaz.AI.g_moveCount--;
    var step = g_moveUndoStack[Dagaz.AI.g_moveCount].step;
    g_castleRights = g_moveUndoStack[Dagaz.AI.g_moveCount].castleRights;
    Dagaz.AI.g_inCheck = g_moveUndoStack[Dagaz.AI.g_moveCount].inCheck;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;
    
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;
    
    var flags = step & 0xFF000000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (step >> 8) & 0xFF;
    var from = step & 0xFF;
    var target = (step >> 16) & 0xFF;
    
    var piece = Dagaz.AI.g_board[to];
    
    if (flags) {
        if (flags & moveflagCastleKing) {
            var rook = Dagaz.AI.g_board[to - 1];
            Dagaz.AI.g_board[to + 1] = rook;
            Dagaz.AI.g_board[to - 1] = pieceEmpty;
			
            var rookIndex = Dagaz.AI.g_pieceIndex[to - 1];
            Dagaz.AI.g_pieceIndex[to + 1] = rookIndex;
            Dagaz.AI.g_pieceList[((rook & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | rookIndex] = to + 1;
        } else if (flags & moveflagCastleQueen) {
            var rook = Dagaz.AI.g_board[to + 1];
            Dagaz.AI.g_board[to - 2] = rook;
            Dagaz.AI.g_board[to + 1] = pieceEmpty;
			
            var rookIndex = Dagaz.AI.g_pieceIndex[to + 1];
            Dagaz.AI.g_pieceIndex[to - 2] = rookIndex;
            Dagaz.AI.g_pieceList[((rook & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | rookIndex] = to - 2;
        }
    }
    
    if (flags & moveflagPromotion) {
        piece = Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK);
        if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceDama)
            piece |= pieceMan;
        else
            piece |= piecePawn;

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
    } else {
        Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    }
    Dagaz.AI.g_board[to] = target ? pieceEmpty : captured;

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;

    if (captured) {
        if (target) {
            Dagaz.AI.g_board[target] = captured;
            to = target;
        }

        // Restore our piece to the piece list
        var captureType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[captureType];
        Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = to;
        Dagaz.AI.g_pieceCount[captureType]++;
    }

    return g_moveUndoStack[Dagaz.AI.g_moveCount].num;
}

Dagaz.AI.MakeMove = function(move) {
    for (var i = 0; i < move.length; i++) {
        if (MakeStep(move[i], i) == pieceEmpty) break;
    }

    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;

    if (Dagaz.AI.player == Dagaz.AI.g_toMove) {
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if ((kingPos != 0) && IsSquareAttackable(kingPos, Dagaz.AI.g_toMove)) {
            Dagaz.AI.UnmakeMove(move);
            return false;
        }
    }

/*  Dagaz.AI.g_inCheck = false;
    kingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
    }*/

    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    while (UnmakeStep() > 0);
}

function IsSquareOnPieceLine(target, from) {
    var index = from - target + 256;
    var piece = Dagaz.AI.g_board[from];
    return (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) ? true : false;
}

function IsSquareAttackableFrom(target, from) {
    var index = from - target + 256;
    var piece = Dagaz.AI.g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
        do {
            from += inc;
            if (from == target) {
                if ((piece & Dagaz.AI.TYPE_MASK) == pieceDama) {
                    from += inc;
                    return Dagaz.AI.g_board[from] == pieceEmpty;
                } 
                return true;
            }
        } while (Dagaz.AI.g_board[from] == 0);
    }
    return false;
}

function IsSquareAttackable(target, color) {
    // Attackable by pawns?
    var inc = color ? -16 : 16;
    var pawn = (color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack) | piecePawn;
    if (Dagaz.AI.g_board[target - (inc - 1)] == pawn) return true;
    if (Dagaz.AI.g_board[target - (inc + 1)] == pawn) return true;

    var man = (color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack) | pieceMan;
    if ((Dagaz.AI.g_board[target - 17] == man) && (Dagaz.AI.g_board[target + 17] == pieceEmpty)) return true;
    if ((Dagaz.AI.g_board[target + 17] == man) && (Dagaz.AI.g_board[target - 17] == pieceEmpty)) return true;
    if ((Dagaz.AI.g_board[target - 15] == man) && (Dagaz.AI.g_board[target + 15] == pieceEmpty)) return true;
    if ((Dagaz.AI.g_board[target + 15] == man) && (Dagaz.AI.g_board[target - 15] == pieceEmpty)) return true;

    // Attackable by pieces?
    for (var i = pieceDama; i <= pieceKing; i++) {
        var index = (color | i) << Dagaz.AI.COUNTER_SIZE;
        var square = Dagaz.AI.g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = Dagaz.AI.g_pieceList[++index];
        }
    }
    return false;
}

function GenerateValidMoves() {
    var moveList = new Array();
    var allMoves = new Array();
    GenerateCheckersCaptures(allMoves);
    if (allMoves.length == 0) {
        GenerateChessCaptures(allMoves);
        Dagaz.AI.GenerateAllMoves(allMoves);
    }
    for (var i = allMoves.length - 1; i >= 0; i--) {
        if (Dagaz.AI.MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            Dagaz.AI.UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

function NoKing() {
  var me = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & me) {
           if ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) == pieceKing) return false;
       }
  }
  return true;
}

Dagaz.AI.GenerateCaptureMoves = function(allMoves) {
    if (NoKing()) return;
    GenerateCheckersCaptures(allMoves);
    GenerateChessCaptures(allMoves);
}

function GenerateCaptureStep(from, dir, isMan) {
    var delta = (8 - Dagaz.Model.HEIGHT) << 4;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = from + dir;
    if (!isMan) {
        while (Dagaz.AI.g_board[captured] == pieceEmpty) {
            captured += dir;
        }
    }
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    var flags = 0;
    if (isMan) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == (0x90 - delta))) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x20)) {
            flags = moveflagPromotion;
        }
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateCaptureMovesFromTree(moves, from, isMan, stack, restricted) {
    var r = true;
    _.each([-17, -15, 15, 17], function(dir) {
        if (restricted && (restricted == dir)) return;
        var step = GenerateCaptureStep(from, dir, isMan);
        if (step == 0) return;
        var f = isMan;
        if (step & moveflagPromotion) f = false;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, f, stack, -dir)) r = false;
        UnmakeStep();
        stack.pop();
        if (!f) {
            pos += dir;
            while (Dagaz.AI.g_board[pos] == pieceEmpty) {
                step &= ~0xFF00;
                step |= pos << 8;
                stack.push(step);
                MakeStep(step, 0);
                if (GenerateCaptureMovesFromTree(moves, pos, f, stack, -dir)) r = false;
                UnmakeStep();
                stack.pop();
                pos += dir;
            }
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

function GenerateCheckersCaptures(moves) {
    var from, piece, pieceIdx;

    pieceIdx = (Dagaz.AI.g_toMove | pieceMan) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
        GenerateCaptureMovesFromTree(moves, from, piece == pieceMan, new Array());
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    pieceIdx = (Dagaz.AI.g_toMove | pieceDama) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
        GenerateCaptureMovesFromTree(moves, from, piece == pieceMan, new Array());
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

function GenerateMove(from, to, flags) {
    return [from | (to << 8) | flags];
}

function MovePawnTo(moveStack, start, square) {
    var row = square & 0xF0;
    var delta = (8 - Dagaz.Model.HEIGHT) << 4;
    if (((row == (0x90 - delta)) || (row == 0x20))) {
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteQueen);
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteKnight);
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteBishop);
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteRook);
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
    if (Dagaz.AI.g_board[to] == 0) {
	MovePawnTo(moveStack, from, to);
    }
}

function GenerateChessCaptures(moveStack) {
    var from, to, piece, pieceIdx;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

    // Pawn captures
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1);
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + (inc + 1);
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
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

    // Bishop captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Rook captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Queen captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // King captures
    {
	pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
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

Dagaz.AI.GenerateAllMoves = function(moveStack) {
    if (NoKing()) return;
    var from, to, piece, pieceIdx;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;

    // Man quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceMan) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + (inc - 1); if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + (inc + 1); if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Dama quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceDama) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Pawn quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
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
	
    // King quiet moves
    {
 	pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
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
            if ((castleRights & 1) && (Dagaz.AI.g_flags & moveflagCastleKing)) {
                // Kingside castle
                if (Dagaz.AI.g_board[from + 1] == pieceEmpty && Dagaz.AI.g_board[from + 2] == pieceEmpty) {
                    moveStack[moveStack.length] = GenerateMove(from, from + 0x02, moveflagCastleKing);
                }
            }
            if ((castleRights & 2) && (Dagaz.AI.g_flags & moveflagCastleQueen)) {
                // Queenside castle
                if (Dagaz.AI.g_board[from - 1] == pieceEmpty && Dagaz.AI.g_board[from - 2] == pieceEmpty && Dagaz.AI.g_board[from - 3] == pieceEmpty) {
                    moveStack[moveStack.length] = GenerateMove(from, from - 0x02, moveflagCastleQueen);
                }
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

    var themAttacks = new Array();

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    var captureDeficit = fromValue - toValue;
    SeeAddKnightAttacks(to, them, themAttacks);
    if (themAttacks.length != 0 && captureDeficit > g_seeValues[pieceKnight]) {
        return false;
    }

    // Slider attacks
    Dagaz.AI.g_board[from] = 0;
    for (var pieceType = pieceBishop; pieceType <= pieceQueen; pieceType++) {
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

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceKing);

    // Our attacks
    var usAttacks = new Array();
    SeeAddKnightAttacks(to, us, usAttacks);
    for (var pieceType = pieceBishop; pieceType <= pieceKing; pieceType++) {
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
    var index = square - target + 256;
    var delta = -g_vectorDelta[index].delta;
    if (delta == 0) return;
    square += delta;
    while (Dagaz.AI.g_board[square] == 0) {
        square += delta;
    }
    if ((Dagaz.AI.g_board[square] & Dagaz.AI.PLAYERS_MASK) && IsSquareOnPieceLine(target, square)) {
        if ((Dagaz.AI.g_board[square] & Dagaz.AI.colorWhite) == us) {
            usAttacks[usAttacks.length] = square;
        } else {
            themAttacks[themAttacks.length] = square;
        }
    }
}

// target = attacking square, us = color of knights to look for, attacks = array to add squares to
function SeeAddKnightAttacks(target, us, attacks) {
    var pieceIdx = (us | pieceKnight) << Dagaz.AI.COUNTER_SIZE;
    var attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    while (attackerSq != 0) {
        if (IsSquareOnPieceLine(target, attackerSq)) {
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
        if (IsSquareAttackableFrom(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
            hit = true;
        }
        attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    return hit;
}

})();
