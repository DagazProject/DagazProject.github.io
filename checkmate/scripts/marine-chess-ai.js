"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var pieceKnight           = 0x02;
var pieceBishop           = 0x03;
var pieceRook             = 0x04;
var pieceQueen            = 0x05;
var pieceKing             = 0x06;
var pieceNo               = 0x80;

var moveflagEPC           = 0x02000000;
var moveflagCastleKing    = 0x04000000;
var moveflagCastleQueen   = 0x08000000;
var moveflagPromotion     = 0x10000000;
var moveflagPromoteKnight = 0x20000000;
var moveflagPromoteQueen  = 0x40000000;
var moveflagPromoteBishop = 0x80000000;

var g_moveUndoStack = new Array();
var materialTable = [0, 100, 2350, 3450, 5000, 9750, 600000];
var g_mobUnit;

var pieceSquareAdj = new Array(5);
var flipTable = new Array(256);

var g_vectorDelta  = new Array(256);

var g_bishopDeltas = [-15, -17, 15, 17];
var g_knightDeltas = [31, 33, 14, -14, -31, -33, 18, -18];
var g_rookDeltas   = [-1, +1, -16, +16];
var g_queenDeltas  = [-1, +1, -15, +15, -17, +17, -16, +16];

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
[   0,    0,   0,   0,   0,   0,    0,    0, // piecePawn
   25,  105, 135, 270, 270, 135,  105,   25,
  -30,    0,  30, 176, 176,  30,    0,  -30,
  -35,   -5,  25, 175, 175,  25,   -5,  -35,
  -40,  -10,  20, 125, 125,  20,  -10,  -40,
  -45,  -15,  15,  75,  75,  15,  -15,  -45, 
  -50,  -20,  10,  70,  70,  10,  -20,  -50, 
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
[ -50,  -50,  -25,-10, -10, -25,  -50,   -50, // pieceBishop
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
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceQueen
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
], 
[ 150,  200,  25,  -75,  -75,  25, 200, 150, // pieceKing
  100,  150, -25, -125, -125, -25, 150, 100,
  100,  150, -25, -125, -125, -25, 150, 100,
  100,  150, -25, -125, -125, -25, 150, 100,
  100,  150, -25, -125, -125, -25, 150, 100,
  100,  150, -25, -125, -125, -25, 150, 100,
  100,  150, -25, -125, -125, -25, 150, 100,
  250,  300, 175,   75,   75, 175, 300, 250
]];

var g_castleRights;

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

var Mobility = function(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite
    var mobUnit = color == Dagaz.AI.colorWhite ? g_mobUnit[0] : g_mobUnit[1];

    // Knight mobility
    mob = -3;
    pieceIdx = (color | pieceKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (Dagaz.AI.g_board[from + 31 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from + 31]];
        if (Dagaz.AI.g_board[from + 33 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from + 33]];
        if (Dagaz.AI.g_board[from + 14 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from + 14]];
        if (Dagaz.AI.g_board[from - 14 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from - 14]];
        if (Dagaz.AI.g_board[from - 31 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from - 31]];
        if (Dagaz.AI.g_board[from - 33 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from - 33]];
        if (Dagaz.AI.g_board[from + 18 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from + 18]];
        if (Dagaz.AI.g_board[from - 18 * 2] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[from - 18]];
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
            if (Dagaz.AI.g_board[to - 15] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }

        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 17; while (Dagaz.AI.g_board[to] == 0) to -= 17;
            if (Dagaz.AI.g_board[to - 17] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[to]] << 2; 
          }
        }

        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 15; while (Dagaz.AI.g_board[to] == 0) to += 15;
            if (Dagaz.AI.g_board[to + 15] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[to]] << 2; 
          }
        }

        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 17; while (Dagaz.AI.g_board[to] == 0) to += 17;
            if (Dagaz.AI.g_board[to + 17] == pieceEmpty) mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
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
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++;}  if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 1] == pieceEmpty)) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 1] == pieceEmpty)) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 16] == pieceEmpty)) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 16] == pieceEmpty)) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Queen mobility
    mob = -2;
    pieceIdx = (color | pieceQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 15] == pieceEmpty)) mob++;
        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 17] == pieceEmpty)) mob++;
        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 15] == pieceEmpty)) mob++;
        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 17] == pieceEmpty)) mob++;
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 1] == pieceEmpty)) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 1] == pieceEmpty)) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 16] == pieceEmpty)) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 16] == pieceEmpty)) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 22 * mob;

    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var evalAdjust = 0;

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
    } else {
        curEval += mobility;
        curEval += evalAdjust;
    }
    
    return curEval;
}

Dagaz.AI.ScoreMove = function(move) {
    var moveTo = (move >> 8) & 0xFF;
    var target = (move >> 16) & 0xFF;
    var captured = Dagaz.AI.g_board[target] & Dagaz.AI.TYPE_MASK;
    var piece = Dagaz.AI.g_board[move & 0xFF];
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
    return false;
}

Dagaz.AI.isNoZugzwang = function() {
    return Dagaz.AI.g_pieceCount[pieceBishop | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceKnight | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceRook   | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceQueen  | Dagaz.AI.g_toMove] != 0;
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
  pieceSquareAdj[piecePawn]   = MakeTable(Dagaz.AI.pieceAdj[piecePawn]);
  pieceSquareAdj[pieceKnight] = MakeTable(Dagaz.AI.pieceAdj[pieceKnight]);
  pieceSquareAdj[pieceBishop] = MakeTable(Dagaz.AI.pieceAdj[pieceBishop]);
  pieceSquareAdj[pieceRook]   = MakeTable(Dagaz.AI.pieceAdj[pieceRook]);
  pieceSquareAdj[pieceQueen]  = MakeTable(Dagaz.AI.pieceAdj[pieceQueen]);
  pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);

  var pieceDeltas = [[], [], g_knightDeltas, g_bishopDeltas, g_rookDeltas, g_queenDeltas, g_queenDeltas];

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
            
           index = square - (square + 17) + 128;
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);
           index = square - (square + 15) + 128;
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);

           for (var i = pieceKnight; i <= pieceKing; i++) {
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
        g_mobUnit[i][enemy  | piecePawn]   = 1;
        g_mobUnit[i][enemy  | pieceBishop] = 2;
        g_mobUnit[i][enemy  | pieceKnight] = 2;
        g_mobUnit[i][enemy  | pieceRook]   = 4;
        g_mobUnit[i][enemy  | pieceQueen]  = 6;
        g_mobUnit[i][enemy  | pieceKing]   = 6;
        g_mobUnit[i][friend | piecePawn]   = 0;
        g_mobUnit[i][friend | pieceBishop] = 0;
        g_mobUnit[i][friend | pieceKnight] = 0;
        g_mobUnit[i][friend | pieceRook]   = 0;
        g_mobUnit[i][friend | pieceQueen]  = 0;
        g_mobUnit[i][friend | pieceKing]   = 0;
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
    kingPos = Dagaz.AI.g_pieceList[(them | pieceKing) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, Dagaz.AI.g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }

    // Checkmate/stalemate
    if (GenerateValidMoves().length == 0) {
        return Dagaz.AI.g_inCheck ? 'Checkmate' : 'Stalemate';
    } 

    return '';
}

function UndoHistory(castleRights, inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
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
    
    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(g_castleRights, Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
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
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceCount[capturedType]--;
        var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
        Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[target];
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_board[target] = pieceEmpty;
        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? flipTable[target] : target];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][capturedType];
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
    
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromoteKnight) 
            newPiece |= pieceKnight;
        else if (flags & moveflagPromoteQueen) 
            newPiece |= pieceQueen;
        else if (flags & moveflagPromoteBishop) 
            newPiece |= pieceBishop;
        else 
            newPiece |= pieceRook;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];
        
        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
        Dagaz.AI.g_baseEval -= materialTable[piecePawn];
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

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    
    var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        Dagaz.AI.UnmakeMove(move);
        return false;
    }
    
    Dagaz.AI.g_inCheck = false;
    var kingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
    }

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    
    Dagaz.AI.g_moveCount--;
    g_castleRights = g_moveUndoStack[Dagaz.AI.g_moveCount].castleRights;
    Dagaz.AI.g_inCheck = g_moveUndoStack[Dagaz.AI.g_moveCount].inCheck;
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
    
    if (flags & moveflagPromotion) {
        piece = (Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK)) | piecePawn;
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

    Dagaz.AI.g_board[to] = pieceEmpty;

    Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;

    if (captured) {
        Dagaz.AI.g_board[target] = captured;
        var captureType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[target] = Dagaz.AI.g_pieceCount[captureType];
        Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = target;
        Dagaz.AI.g_pieceCount[captureType]++;
    }
}

function IsSquareAttackableFrom(target, from) {
    var index = from - target + 128;
    var piece = Dagaz.AI.g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
        do {
            from += inc;
            if (from == target) {
                from += inc;
                return Dagaz.AI.g_board[from] == 0;
            }
        } while (Dagaz.AI.g_board[from] == pieceEmpty);
    }
    return false;
}

function IsSquareAttackable(target, color) {
    // Attackable by pawns?
    var inc = color ? -16 : 16;
    var pawn = (color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack) | piecePawn;
    if (Dagaz.AI.g_board[target - (inc - 1)] == pawn) return Dagaz.AI.g_board[target - (inc - 1) * 2] == pieceEmpty;
    if (Dagaz.AI.g_board[target - (inc + 1)] == pawn) return Dagaz.AI.g_board[target - (inc + 1) * 2] == pieceEmpty;
    // Attackable by pieces?
    for (var i = pieceKnight; i <= pieceKing; i++) {
        var index = (color | i) << Dagaz.AI.COUNTER_SIZE;
        var square = Dagaz.AI.g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = Dagaz.AI.g_pieceList[++index];
        }
    }
    return false;
}

function GenerateMove(from, to, captured, flags) {
    return from | (to << 8) | (captured << 16) | flags;
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

    // Knight quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from + 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from + 14; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from - 14; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from - 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from - 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from + 18; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from - 18; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Bishop quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to += 17; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to++; }
	to = from + 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to += 16; }
	to = from - 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to -= 16; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Queen quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to += 17; }
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to++; }
	to = from + 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to += 16; }
	to = from - 16; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0, 0); to -= 16; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // King quiet moves
    {
 	pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
	to = from - 15; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from - 17; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from + 15; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from + 17; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from - 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from + 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from - 16; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
	to = from + 16; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
		
        if (!Dagaz.AI.g_inCheck) {
            var castleRights = g_castleRights;
            if (!Dagaz.AI.g_toMove) castleRights >>= 2;
            if (castleRights & 1) {
                // Kingside castle
                if (Dagaz.AI.g_board[from + 1] == pieceEmpty && Dagaz.AI.g_board[from + 2] == pieceEmpty) {
                    moveStack[moveStack.length] = GenerateMove(from, from + 0x02, 0, moveflagCastleKing);
                }
            }
            if (castleRights & 2) {
                // Queenside castle
                if (Dagaz.AI.g_board[from - 1] == pieceEmpty && Dagaz.AI.g_board[from - 2] == pieceEmpty && Dagaz.AI.g_board[from - 3] == pieceEmpty) {
                    moveStack[moveStack.length] = GenerateMove(from, from - 0x02, 0, moveflagCastleQueen);
                }
            }
        }
    }
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
        if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + inc - 1] == pieceEmpty)) {
            MovePawnTo(moveStack, from, to + inc - 1, to);
        }
        to = from + inc + 1;
        if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + inc + 1] == pieceEmpty)) {
            MovePawnTo(moveStack, from, to + inc + 1, to);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Knight captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceKnight) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 31] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 31, to, 0);
	to = from + 33; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 33] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 33, to, 0);
	to = from + 14; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 14] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 14, to, 0);
	to = from - 14; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 14] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 14, to, 0);
	to = from - 31; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 31] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 31, to, 0);
	to = from - 33; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 33] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 33, to, 0);
	to = from + 18; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 18] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 18, to, 0);
	to = from - 18; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 18] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 18, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Bishop captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceBishop) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 15] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 15, to, 0);
	to = from; do { to -= 17; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 17] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 17, to, 0);
	to = from; do { to += 15; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 15] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 15, to, 0);
	to = from; do { to += 17; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 17] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 17, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Rook captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRook) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 1] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 1, to, 0);
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 1] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 1, to, 0);
	to = from; do { to -= 16; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 16] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 16, to, 0);
	to = from; do { to += 16; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 16] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 16, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Queen captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceQueen) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 15] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 15, to, 0);
	to = from; do { to -= 17; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 17] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 17, to, 0);
	to = from; do { to += 15; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 15] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 15, to, 0);
	to = from; do { to += 17; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 17] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 17, to, 0);
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 1] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 1, to, 0);
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 1] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 1, to, 0);
	to = from; do { to -= 16; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 16] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 16, to, 0);
	to = from; do { to += 16; } while (Dagaz.AI.g_board[to] == 0); if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 16] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 16, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // King captures
    {
	pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
	to = from - 15; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 15] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 15, to, 0);
	to = from - 17; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 17] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 17, to, 0);
	to = from + 15; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 15] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 15, to, 0);
	to = from + 17; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 17] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 17, to, 0);
	to = from - 1;  if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 1] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 1, to, 0);
	to = from + 1;  if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 1] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 1, to, 0);
	to = from - 16; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to - 16] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to - 16, to, 0);
	to = from + 16; if ((Dagaz.AI.g_board[to] & enemy) && (Dagaz.AI.g_board[to + 16] == pieceEmpty)) moveStack[moveStack.length] = GenerateMove(from, to + 16, to, 0);
    }
}

function MovePawnTo(moveStack, start, square, captured) {
    var row = square & 0xF0;
    if (((row == 0x90) || (row == 0x20))) {
        moveStack[moveStack.length] = GenerateMove(start, square, captured, moveflagPromotion | moveflagPromoteQueen);
        moveStack[moveStack.length] = GenerateMove(start, square, captured, moveflagPromotion | moveflagPromoteKnight);
        moveStack[moveStack.length] = GenerateMove(start, square, captured, moveflagPromotion | moveflagPromoteBishop);
        moveStack[moveStack.length] = GenerateMove(start, square, captured, moveflagPromotion);
    } else {
        moveStack[moveStack.length] = GenerateMove(start, square, captured, 0);
    }
}

function GeneratePawnMoves(moveStack, from) {
    var piece = Dagaz.AI.g_board[from];
    var color = piece & Dagaz.AI.colorWhite;
    var inc = (color == Dagaz.AI.colorWhite) ? -16 : 16;
    // Quiet pawn moves
    var to = from + inc;
    if (Dagaz.AI.g_board[to] == 0) {
	MovePawnTo(moveStack, from, to, 0);
	// Check if we can do a 2 square jump
	if ((((from & 0xF0) == 0x30) && color != Dagaz.AI.colorWhite) ||
	    (((from & 0xF0) == 0x80) && color == Dagaz.AI.colorWhite)) {
            to += inc;
            if (Dagaz.AI.g_board[to] == 0) {
                moveStack[moveStack.length] = GenerateMove(from, to, 0, 0);
            }				
	}
    }
}

Dagaz.AI.See = function(move) {
    return true;
}

})();
