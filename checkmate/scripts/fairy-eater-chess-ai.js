"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.AI.Q_SEARCH_LIMIT   = -5;
Dagaz.AI.ALL_CUT_LIMIT    = 100;

Dagaz.AI.PIECE_MASK       = 0xF;
Dagaz.AI.TYPE_MASK        = 0x7;
Dagaz.AI.PLAYERS_MASK     = 0x18;
Dagaz.AI.COUNTER_SIZE     = 4;
Dagaz.AI.TYPE_SIZE        = 3;
Dagaz.AI.VECTORDELTA_SIZE = 512;

Dagaz.AI.colorBlack       = 0x10;
Dagaz.AI.colorWhite       = 0x08;

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var pieceGhost            = 0x02;
var pieceRider            = 0x03;
var pieceShield           = 0x04;
var pieceChaos            = 0x05;
var pieceReaper           = 0x06;
var pieceKing             = 0x07;
var pieceNo               = 0x80;

var moveflagPromotion     = 0x08 << 16;
var moveflagPromoteGhost  = 0x10 << 16;
var moveflagPromoteRider  = 0x20 << 16;
var moveflagPromoteShield = 0x40 << 16;
var moveflagPromoteChaos  = 0x80 << 16;

var g_moveUndoStack = new Array();
var g_mobUnit;

var materialTable = [0, 800, 3200, 3500, 4500, 6800, 8450, 600000];

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0 
]];

var pieceSquareAdj = new Array(8);
var flipTable = new Array(256);

var g_vectorDelta  = new Array(Dagaz.AI.VECTORDELTA_SIZE);

var g_rookDeltas   = [-1, +1, -16, +16];
var g_reaperDeltas = [-1, +1, -16, +16, 31, 33, 14, -14, -31, -33, 18, -18];
var g_chaosDeltas  = [-15, -17, 15, 17, 31, 33, 14, -14, -31, -33, 18, -18];
var g_knightDeltas = [31, 33, 14, -14, -31, -33, 18, -18];
var g_ghostDeltas  = [-2, +2, -30, +30, -34, +34, -32, +32];
var g_kingDeltas   = [-1, +1, -15, +15, -17, +17, -16, +16];

var g_seeValues = [0, 1, 2, 3, 4, 5, 7, 900,
                   0, 1, 2, 3, 4, 5, 7, 900];

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    return letters[(square & 0xF) - 4] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 4);
}

Dagaz.AI.FormatMove = function(move, color) {
    var result = FormatSquare(move & 0xFF) + '-' + FormatSquare((move >> 8) & 0xFF);
    if (move & moveflagPromotion) {
        if (move & moveflagPromoteGhost) result += " Ghost";
        else if (move & moveflagPromoteRider) result += " Knightrider";
        else if (move & moveflagPromoteShield) result += " Shield";
        else if (move & moveflagPromoteChaos) result += " Chaos";
        else result += " Reaper";
    }
    return result;
}

function Mobility(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite
    var mobUnit = color == Dagaz.AI.colorWhite ? g_mobUnit[0] : g_mobUnit[1];

    // Ghost mobility
    mob = -2;
    pieceIdx = (color | pieceGhost) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 2; while (Dagaz.AI.g_board[to] == 0) { to -= 2; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 2; while (Dagaz.AI.g_board[to] == 0) to -= 2;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 2; while (Dagaz.AI.g_board[to] == 0) { to += 2; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 2; while (Dagaz.AI.g_board[to] == 0) to += 2;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from - 30; while (Dagaz.AI.g_board[to] == 0) { to -= 30; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 30; while (Dagaz.AI.g_board[to] == 0) to -= 30;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 30; while (Dagaz.AI.g_board[to] == 0) { to += 30; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 30; while (Dagaz.AI.g_board[to] == 0) to += 30;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from - 34; while (Dagaz.AI.g_board[to] == 0) { to -= 34; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 34; while (Dagaz.AI.g_board[to] == 0) to -= 34;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 34; while (Dagaz.AI.g_board[to] == 0) { to += 34; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 34; while (Dagaz.AI.g_board[to] == 0) to += 34;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from - 32; while (Dagaz.AI.g_board[to] == 0) { to -= 32; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 32; while (Dagaz.AI.g_board[to] == 0) to -= 32;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 32; while (Dagaz.AI.g_board[to] == 0) { to += 32; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 32; while (Dagaz.AI.g_board[to] == 0) to += 32;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Rider mobility
    mob = -2;
    pieceIdx = (color | pieceRider) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 31; while (Dagaz.AI.g_board[to] == 0) { to -= 31; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 31; while (Dagaz.AI.g_board[to] == 0) to -= 31;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 31; while (Dagaz.AI.g_board[to] == 0) { to += 31; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 31; while (Dagaz.AI.g_board[to] == 0) to += 31;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from - 33; while (Dagaz.AI.g_board[to] == 0) { to -= 33; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 33; while (Dagaz.AI.g_board[to] == 0) to -= 33;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 33; while (Dagaz.AI.g_board[to] == 0) { to += 33; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 33; while (Dagaz.AI.g_board[to] == 0) to += 33;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from - 14; while (Dagaz.AI.g_board[to] == 0) { to -= 14; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 14; while (Dagaz.AI.g_board[to] == 0) to -= 14;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 14; while (Dagaz.AI.g_board[to] == 0) { to += 14; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 14; while (Dagaz.AI.g_board[to] == 0) to += 14;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from - 18; while (Dagaz.AI.g_board[to] == 0) { to -= 18; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to -= 18; while (Dagaz.AI.g_board[to] == 0) to -= 18;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        to = from + 18; while (Dagaz.AI.g_board[to] == 0) { to += 18; mob++; }
        if (Dagaz.AI.g_board[to] & enemy) {
          mob++;
          if (!(Dagaz.AI.g_board[to] & piecePawn)) {
            to += 18; while (Dagaz.AI.g_board[to] == 0) to += 18;
            mob += mobUnit[Dagaz.AI.g_board[to]] << 2;
          }
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 44 * mob;

    // Shield mobility
    mob = -2;
    pieceIdx = (color | pieceShield) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++;}  if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 55 * mob;

    // Chaos mobility
    mob = -4;
    pieceIdx = (color | pieceChaos) << Dagaz.AI.COUNTER_SIZE;
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

    // Reaper mobility
    mob = -4;
    pieceIdx = (color | pieceReaper) << Dagaz.AI.COUNTER_SIZE;
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
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++;}  if (Dagaz.AI.g_board[to] & enemy) mob += mobUnit[Dagaz.AI.g_board[to]];
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob += mobUnit[Dagaz.AI.g_board[to]];
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob += mobUnit[Dagaz.AI.g_board[to]];
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob += mobUnit[Dagaz.AI.g_board[to]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

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

Dagaz.AI.ScoreMove = function(move) {
    var moveTo = (move >> 8) & 0xFF;
    var captured = Dagaz.AI.g_board[moveTo] & Dagaz.AI.TYPE_MASK;
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
    var from = hashMove & 0xFF;
    var to = (hashMove >> 8) & 0xFF;
    var ourPiece = Dagaz.AI.g_board[from];
    var pieceType = ourPiece & Dagaz.AI.TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
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
        if (((row == 0x70 && !Dagaz.AI.g_toMove) ||
             (row == 0x50 && Dagaz.AI.g_toMove)) != (hashMove & moveflagPromotion)) {
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
        if (hashMove >> 16) return false;
        return IsSquareAttackableFrom(to, from);
    }
}

Dagaz.AI.isNoZugzwang = function() {
    return true;
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

function inBoard(target) {
  if (target < 0) return false;
  if ((target & 0xF0) >= 0x90) return false;
  if ((target & 0x0F) >= 0x09) return false;
  return true;
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
  pieceSquareAdj[piecePawn]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceGhost]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceRider]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceShield] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceChaos]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceReaper] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);

  var pieceDeltas = [[], [], g_ghostDeltas, g_knightDeltas, g_rookDeltas, g_chaosDeltas, g_reaperDeltas, g_kingDeltas];

  for (var i = 0; i < Dagaz.AI.VECTORDELTA_SIZE; i++) {
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
           var index = square - (square - 17) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << piecePawn);
           index = square - (square - 15) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << piecePawn);
            
           index = square - (square + 17) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);
           index = square - (square + 15) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);

           for (var i = pieceGhost; i <= pieceKing; i++) {
                for (var dir = 0; dir < pieceDeltas[i].length; dir++) {
                     var target = square + pieceDeltas[i][dir];
                     while (inBoard(target)) {
                         index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);

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
                         } else {
                             g_vectorDelta[index].delta = pieceDeltas[i][dir];
                         }

                         if ((i == pieceShield) && (dir >= 2)) {
                             g_vectorDelta[index].delta = pieceDeltas[i][dir];
                             break;
                         }

                         if ((i == pieceChaos) && (dir >= 4)) {
                             g_vectorDelta[index].delta = pieceDeltas[i][dir];
                             break;
                         }

                         if ((i == pieceReaper) && (dir >= 4)) {
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
        g_mobUnit[i][pieceNo] = 0;
        g_mobUnit[i][enemy  | piecePawn]   = 1;
        g_mobUnit[i][enemy  | pieceGhost]  = 2;
        g_mobUnit[i][enemy  | pieceRider]  = 2;
        g_mobUnit[i][enemy  | pieceShield] = 3;
        g_mobUnit[i][enemy  | pieceChaos]  = 4;
        g_mobUnit[i][enemy  | pieceReaper] = 4;
        g_mobUnit[i][enemy  | pieceKing]   = 6;
        g_mobUnit[i][friend | piecePawn]   = 0;
        g_mobUnit[i][friend | pieceGhost]  = 0;
        g_mobUnit[i][friend | pieceRider]  = 0;
        g_mobUnit[i][friend | pieceShield] = 0;
        g_mobUnit[i][friend | pieceChaos]  = 0;
        g_mobUnit[i][friend | pieceReaper] = 0;
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
                        piece |= pieceShield;
                        break;
                    case 'g':
                        piece |= pieceGhost;
                        break;
                    case 'h':
                        piece |= pieceChaos;
                        break;
                    case 'r':
                        piece |= pieceReaper;
                        break;
                    case 'n':
                        piece |= pieceRider;
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
    var them = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    
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

function UndoHistory(inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
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

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        // Remove our piece from the piece list
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceCount[capturedType]--;
        var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
        Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? flipTable[to] : to];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    
    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[from] : from];
    
    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromoteGhost) 
            newPiece |= pieceGhost;
        else if (flags & moveflagPromoteRider) 
            newPiece |= pieceRider;
        else if (flags & moveflagPromoteShield) 
            newPiece |= pieceShield;
        else if (flags & moveflagPromoteChaos) 
            newPiece |= pieceChaos;
        else 
            newPiece |= pieceReaper;

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
    
    if ((piece & Dagaz.AI.TYPE_MASK) == pieceKing || Dagaz.AI.g_inCheck) {
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
            Dagaz.AI.UnmakeMove(move);
            return false;
        }
    } else {
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            if (ExposesCheck(from, kingPos)) {
                Dagaz.AI.UnmakeMove(move);
                return false;
            }
        }
    }
    
    Dagaz.AI.g_inCheck = false;
    
    if (flags < moveflagPromotion) {
        var theirKingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
        if (theirKingPos != 0) {
            // First check if the piece we moved can attack the enemy king
            Dagaz.AI.g_inCheck = IsSquareAttackableFrom(theirKingPos, to);
            if (!Dagaz.AI.g_inCheck) {
                // Now check if the square we moved from exposes check on the enemy king
                Dagaz.AI.g_inCheck = ExposesCheck(from, theirKingPos);
            }
        }
    } else {
        // Castle or promotion, slow check
        Dagaz.AI.g_inCheck = false;
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
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

    Dagaz.AI.g_board[to] = captured;

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;

    if (captured) {
        // Restore our piece to the piece list
        var captureType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[captureType];
        Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = to;
        Dagaz.AI.g_pieceCount[captureType]++;
    }
}

function ExposesCheck(from, kingPos) {
    var index = kingPos - from + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    if (((g_vectorDelta[index].pieceMask[0] & (1 << (pieceRider))) != 0) ||
        ((g_vectorDelta[index].pieceMask[0] & (1 << (pieceChaos))) != 0) ||
        ((g_vectorDelta[index].pieceMask[0] & (1 << (pieceReaper))) != 0)) {
        var delta = g_vectorDelta[index].delta;
        var pos = kingPos + delta;
        while (Dagaz.AI.g_board[pos] == 0) pos += delta;
        var piece = Dagaz.AI.g_board[pos];
        if (((piece & (Dagaz.AI.g_board[kingPos] ^ Dagaz.AI.PLAYERS_MASK)) & Dagaz.AI.PLAYERS_MASK) == 0)
            return false;
        // Now see if the piece can actually attack the king
        var backwardIndex = pos - kingPos + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
        return (g_vectorDelta[backwardIndex].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) != 0;
    }
    return false;
}

function IsSquareOnPieceLine(target, from) {
    var index = from - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var piece = Dagaz.AI.g_board[from];
    return (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) ? true : false;
}

function IsSquareAttackableFrom(target, from) {
    var index = from - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var piece = Dagaz.AI.g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
        if ((piece & Dagaz.AI.TYPE_MASK) == pieceGhost) inc = inc * 2;
        do {
            from += inc;
            if (from == target) return true;
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
    // Attackable by pieces?
    for (var i = pieceGhost; i <= pieceKing; i++) {
        var index = (color | i) << Dagaz.AI.COUNTER_SIZE;
        var square = Dagaz.AI.g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = Dagaz.AI.g_pieceList[++index];
        }
    }
    return false;
}

function GenerateMove(moveStack, from, to, flags, moves) {
    var r = from | (to << 8) | flags;
    if (moves) {
        var f = true;
        _.each(moves, function(m) {
            var x = m.toString() + ' ';
            if (x.startsWith(Dagaz.AI.FormatMove(r) + ' ')) {
                f = false;
            }
        });
        if (f) return;
    }
    moveStack[moveStack.length] = r;
}

function GenerateValidMoves() {
    var moveList = new Array();
    var allMoves = new Array();
    Dagaz.AI.GenerateCaptureMoves(allMoves);
    Dagaz.AI.GenerateAllMoves(allMoves);
    for (var i = allMoves.length - 1; i >= 0; i--) {
        if (Dagaz.AI.MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            Dagaz.AI.UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

Dagaz.AI.GenerateAllMoves = function(moveStack, moves) {
    var from, to, piece, pieceIdx;

    // Pawn quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        GeneratePawnMoves(moveStack, from);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Ghost quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceGhost) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 2;  while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 2; }
	to = from + 2;  while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 2; }
	to = from - 30; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 30; }
	to = from + 30; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 30; }
	to = from - 34; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 34; }
	to = from + 34; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 34; }
	to = from - 32; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 32; }
	to = from + 32; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 32; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Rider quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRider) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 31; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 31; }
	to = from + 31; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 31; }
	to = from - 33; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 33; }
	to = from + 33; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 33; }
	to = from - 14; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 14; }
	to = from + 14; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 14; }
	to = from - 18; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 18; }
	to = from + 18; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 18; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Shield quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceShield) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to++; }
	to = from + 16; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 16; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Chaos quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceChaos) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 33; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 14; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 14; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 31; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 33; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 18; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 18; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 15; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 15; }
	to = from - 17; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 17; }
	to = from + 15; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 15; }
	to = from + 17; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 17; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Reaper quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceReaper) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 33; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 14; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 14; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 31; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 33; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 18; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 18; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to--; }
	to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to++; }
	to = from + 16; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to += 16; }
	to = from - 16; while (Dagaz.AI.g_board[to] == 0) { GenerateMove(moveStack, from, to, 0, moves); to -= 16; }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King quiet moves
    {
 	pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
	to = from - 15; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 17; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 15; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 17; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 1;  if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 1;  if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 16; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 16; if (Dagaz.AI.g_board[to] == 0) GenerateMove(moveStack, from, to, 0, moves);
    }
}

Dagaz.AI.GenerateCaptureMoves = function(moveStack, moves) {
    var from, to, piece, pieceIdx;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

    // Pawn captures
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc - 1;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to, moves);
        }
        to = from + inc + 1;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to, moves);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Ghost captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceGhost) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 2; }  while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 2; }  while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 30; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 30; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 34; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 34; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 32; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 32; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Rider captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRider) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 31; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 31; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 33; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 33; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 14; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 14; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 18; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 18; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Shield captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceShield) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 16; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 16; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Chaos captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceChaos) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 33; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 14; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 14; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 31; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 33; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 18; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 18; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 15; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 17; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 15; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 17; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Reaper captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceReaper) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 33; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 14; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 14; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 31; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 33; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 18; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 18; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to -= 16; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from; do { to += 16; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King captures
    {
	pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
	from = Dagaz.AI.g_pieceList[pieceIdx];
	to = from - 15; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 17; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 15; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 17; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 1;  if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 1;  if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from - 16; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
	to = from + 16; if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moveStack, from, to, 0, moves);
    }
}

function MovePawnTo(moveStack, start, square, moves) {
    var row = square & 0xF0;
    if ((row == 0x70) || (row == 0x50)) {
        GenerateMove(moveStack, start, square, moveflagPromotion | moveflagPromoteGhost, moves);
        GenerateMove(moveStack, start, square, moveflagPromotion | moveflagPromoteRider, moves);
        GenerateMove(moveStack, start, square, moveflagPromotion | moveflagPromoteShield, moves);
        GenerateMove(moveStack, start, square, moveflagPromotion | moveflagPromoteChaos, moves);
        GenerateMove(moveStack, start, square, moveflagPromotion, moves);
    } else {
        GenerateMove(moveStack, start, square, 0, moves);
    }
}

function GeneratePawnMoves(moveStack, from) {
    var piece = Dagaz.AI.g_board[from];
    var color = piece & Dagaz.AI.colorWhite;
    var inc = (color == Dagaz.AI.colorWhite) ? -16 : 16;
    var to = from + inc;
    if (Dagaz.AI.g_board[to] == 0) {
	MovePawnTo(moveStack, from, to, pieceEmpty);
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
    SeeAddSliderAttacks(to, them, themAttacks, pieceGhost);
    if (themAttacks.length != 0 && captureDeficit > g_seeValues[pieceGhost]) {
        return false;
    }

    // Slider attacks
    Dagaz.AI.g_board[from] = 0;
    for (var pieceType = pieceRider; pieceType <= pieceReaper; pieceType++) {
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
    for (var pieceType = pieceGhost; pieceType <= pieceKing; pieceType++) {
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
    var index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
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
