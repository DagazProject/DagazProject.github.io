"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.Model.WIDTH         = 7;
Dagaz.Model.HEIGHT        = 7;
Dagaz.AI.RESERVE_SIZE     = 2;
Dagaz.AI.STALMATED        = true;
Dagaz.AI.USE_HIST_TABLE   = true;

Dagaz.AI.PIECE_MASK       = 0x1F;
Dagaz.AI.TYPE_MASK        = 0xF;
Dagaz.AI.PLAYERS_MASK     = 0x30;
Dagaz.AI.COUNTER_SIZE     = 4;
Dagaz.AI.TYPE_SIZE        = 4;
Dagaz.AI.VECTORDELTA_SIZE = 256;

Dagaz.AI.colorBlack       = 0x20;
Dagaz.AI.colorWhite       = 0x10;

Dagaz.AI.WHITE_PROM       = 0x30;
Dagaz.AI.BLACK_PROM       = 0x70;

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var piecePheasant         = 0x02;
var piecePawnP            = 0x03;
var pieceCrane            = 0x04;
var pieceFalcon           = 0x05;
var pieceLeftQuail        = 0x06;
var pieceRightQuail       = 0x07;
var pieceFalconP          = 0x08;
var pieceKing             = 0x09;

var pieceNo               = 0x80;

const moveflagPromotion   = 0x10000000;

var g_moveUndoStack       = new Array();

const RESERVE_SIZE        = 100;
var g_reserve = new Array(RESERVE_SIZE);

// Evaulation variables
var g_mobUnit;

var materialTable = [0, 100, 350, 450, 600, 700, 2100, 2100, 3700, 600000];
var inHandTable   = [0, 200, 700, 0, 1200, 1400, 4200, 4200, 0, 0];

var g_seeValues = [0, 1, 2, 2, 2, 3, 5, 5, 6, 900, 0, 0, 0, 0, 0, 0,
                   0, 1, 2, 2, 2, 3, 5, 5, 6, 900, 0, 0, 0, 0, 0, 0];

Dagaz.AI.pieceAdj = [
[    0,     0,     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0
]];

var pieceSquareAdj = new Array(32);
var flipTable = new Array(256);

var g_vectorDelta    = new Array(Dagaz.AI.VECTORDELTA_SIZE);

var g_deltaOffset    = [0, 0, 0, 0, 0, 0, 1, 1, 3, 0];
var g_pawnDeltas     = [-16];
var g_pheasantDeltas = [-32, 15, 7];
var g_gooseDeltas    = [32, -30, -34];
var g_craneDeltas    = [-16, 16, -15, 15, -17, 17];
var g_falconDeltas   = [-16, -15, 15, -17, 17, -1, 1];
var g_lqDeltas       = [15, -16, 17];
var g_rqDeltas       = [17, -16, 15];
var g_hawkDeltas     = [15, 17, -16, -1, 1, -15, -17, 16];
var g_kingDeltas     = [-16, 16, -15, 15, -17, 17, -1, 1];

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

function FormatReserve(square) {
    var letters = ['X', 'Y', 'Z', 'T'];
    return letters[square % (2 * Dagaz.AI.RESERVE_SIZE)] + (Dagaz.Model.HEIGHT - ((square / (2 * Dagaz.AI.RESERVE_SIZE)) | 0));
}

Dagaz.AI.FormatMove = function(move) {
    var result;
    var from = move & 0xFF;
    if (from != 0) {
        result = FormatSquare(from) + FormatSquare((move >> 8) & 0xFF);
    } else {
        from = (move >> 16) & 0xFF;
        result = FormatReserve(from) + FormatSquare((move >> 8) & 0xFF);
    }
    return result;
}

function Mobility(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var enemy = color ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite
    var mobUnit = color ? g_mobUnit[0] : g_mobUnit[1];

    // Pawn mobility
    mob = 0;
    pieceIdx = (color | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // Pheasant mobility
    mob = 0;
    pieceIdx = (color | piecePheasant) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 32]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 32]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // PawnP mobility
    mob = 0;
    pieceIdx = (color | piecePawnP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from + 32]];
            mob += mobUnit[Dagaz.AI.g_board[from - 30]];
            mob += mobUnit[Dagaz.AI.g_board[from - 34]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from - 32]];
            mob += mobUnit[Dagaz.AI.g_board[from + 30]];
            mob += mobUnit[Dagaz.AI.g_board[from + 34]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // Crane mobility
    mob = 0;
    pieceIdx = (color | pieceCrane) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // Falcon mobility
    mob = 0;
    pieceIdx = (color | pieceFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // LeftQuail mobility
    mob = 0;
    pieceIdx = (color | pieceLeftQuail) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
            to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
            to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // RightQuail mobility
    mob = 0;
    pieceIdx = (color | pieceRightQuail) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

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
    var from = move & 0xFF;
    var piece;
    if (from != 0) {
        piece = Dagaz.AI.g_board[from];
    } else {
        var slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
    }
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

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {

  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = MakeSquare(row, col);
            flipTable[square] = MakeSquare((Dagaz.Model.HEIGHT - 1) - row, col);
       }
  }

  pieceSquareAdj[pieceEmpty]      = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[piecePawn]       = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[piecePheasant]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[piecePawnP]      = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceCrane]      = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceFalcon]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceLeftQuail]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceRightQuail] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceFalconP]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceKing]       = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);

  var pieceDeltas = [[], g_pawnDeltas, g_pheasantDeltas, g_gooseDeltas, g_craneDeltas, g_falconDeltas, g_lqDeltas, g_rqDeltas, g_hawkDeltas, g_kingDeltas];

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
           for (var i = piecePawn; i <= pieceKing; i++) {
                for (var dir = 0; dir < pieceDeltas[i].length; dir++) {
                     var delta = pieceDeltas[i][dir];
                     var target = square + delta;
                     var cnt = 1;
                     while (!(target & 0x88)) {
                         var index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
                         g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << i);
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
                         if (i == pieceKing) break;
                         if (dir < g_deltaOffset[i]) break;
                         if ((i == pieceFalconP) && (cnt == 2) && (dir < 2)) break;
                         target += delta;
                         cnt++;
                     }
                     delta = -delta;
                     target = square + delta;
                     cnt = 1;
                     while (!(target & 0x88)) {
                         var index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
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
                         if (i == pieceKing) break;
                         if (dir < g_deltaOffset[i]) break;
                         if ((i == pieceFalconP) && (cnt == 2) && (dir < 2)) break;
                         target += delta;
                         cnt++;
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
        g_mobUnit[i][enemy  | piecePawn]       = 1;
        g_mobUnit[i][enemy  | piecePheasant]   = 2;
        g_mobUnit[i][enemy  | piecePawnP]      = 2;
        g_mobUnit[i][enemy  | pieceCrane]      = 3;
        g_mobUnit[i][enemy  | pieceFalcon]     = 3;
        g_mobUnit[i][enemy  | pieceLeftQuail]  = 4;
        g_mobUnit[i][enemy  | pieceRightQuail] = 4;
        g_mobUnit[i][enemy  | pieceFalconP]    = 5;
        g_mobUnit[i][enemy  | pieceKing]       = 9;
        g_mobUnit[i][friend | piecePawn]       = 0;
        g_mobUnit[i][friend | piecePheasant]   = 0;
        g_mobUnit[i][friend | piecePawnP]      = 0;
        g_mobUnit[i][friend | pieceCrane]      = 0;
        g_mobUnit[i][friend | pieceFalcon]     = 0;
        g_mobUnit[i][friend | pieceLeftQuail]  = 0;
        g_mobUnit[i][friend | pieceRightQuail] = 0;
        g_mobUnit[i][friend | pieceFalconP]    = 0;
        g_mobUnit[i][friend | pieceKing]       = 0;
    }
}

var SetHash = Dagaz.AI.SetHash;

Dagaz.AI.SetHash = function() {
    var result = SetHash();
    for (var i = 0; i < RESERVE_SIZE; i++) {
        var piece = g_reserve[i];
        if ((piece & Dagaz.AI.PLAYERS_MASK) && (piece & Dagaz.AI.TYPE_MASK)) {
            result.hashKeyLow ^= Dagaz.AI.g_zobristLow[i][piece & Dagaz.AI.PIECE_MASK];
            result.hashKeyHigh ^= Dagaz.AI.g_zobristHigh[i][piece & Dagaz.AI.PIECE_MASK];
        }
    }
    return result;
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split('-');
    
    for (var i = 0; i < 256; i++) 
        Dagaz.AI.g_board[i] = pieceNo;

    for (var i = 0; i < RESERVE_SIZE; i++) 
        g_reserve[i] = pieceEmpty;
    
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
            } else {
                var isBlack = (c >= 'a' && c <= 'z') || (_.indexOf(['$', ')', ']', '}', '^'], c) >= 0);
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (c >= 'A' && c <= 'Z') 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'n':
                        piece |= piecePawnP;
                        break;
                    case 'f':
                        piece |= pieceFalcon;
                        break;
                    case 'e':
                        piece |= pieceFalconP;
                        break;
                    case 'c':
                        piece |= pieceCrane;
                        break;
                    case 'h':
                        piece |= piecePheasant;
                        break;
                    case 'l':
                        piece |= pieceLeftQuail;
                        break;
                    case 'r':
                        piece |= pieceRightQuail;
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
 
    var ix = 0;
    pieces = chunks[1];
    for (var i = 0; i < pieces.length; i++) {
        var c = pieces.charAt(i);
        if (c == '/') continue;
            if (c >= '0' && c <= '9') {
                for (var j = 0; j < parseInt(c); j++) {
                    g_reserve[ix] = pieceEmpty;
                    ix++;
                }
            } else {
                var isBlack = (c >= 'a' && c <= 'z') || (_.indexOf(['!', '$', '(', ')', '[', ']', '{', '}', '~', '^'], c) >= 0);
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (c >= 'A' && c <= 'Z') 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'n':
                        piece |= piecePawnP;
                        break;
                    case 'f':
                        piece |= pieceFalcon;
                        break;
                    case 'e':
                        piece |= pieceFalconP;
                        break;
                    case 'c':
                        piece |= pieceCrane;
                        break;
                    case 'h':
                        piece |= piecePheasant;
                        break;
                    case 'l':
                        piece |= pieceLeftQuail;
                        break;
                    case 'r':
                        piece |= pieceRightQuail;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                if (piece & Dagaz.AI.TYPE_MASK) {
                    g_reserve[ix] = piece;
                }
                ix++;
        }
    }

    Dagaz.AI.InitializePieceList();
    
    Dagaz.AI.g_toMove = chunks[2].charAt(0) == 'w' ? Dagaz.AI.colorWhite : 0;
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
    for (var i = 0; i < RESERVE_SIZE; i++) {
        if (g_reserve[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += materialTable[g_reserve[i] & Dagaz.AI.TYPE_MASK];
        } else if (g_reserve[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= materialTable[g_reserve[i] & Dagaz.AI.TYPE_MASK];
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

function GetSlot() {
    for (var i = 0; i < RESERVE_SIZE; i++) {
        if (g_reserve[i] == pieceEmpty) return i;
    }
    return null;
}

function UndoHistory(inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured, slot) {
    this.inCheck = inCheck;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
    this.slot = slot;
}

Dagaz.AI.MakeMove = function(move) {
    var slot = GetSlot();
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 
    
    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = Dagaz.AI.g_board[to];
    var piece = Dagaz.AI.g_board[from];

    if (captured && (slot === null)) {
        return false;
    }

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured, slot);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        var newPiece = captured & (~Dagaz.AI.PLAYERS_MASK);
        newPiece |= Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
        if ((captured & Dagaz.AI.TYPE_MASK) == piecePawnP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= piecePawn;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceFalconP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceFalcon;
        }

        g_reserve[slot] = newPiece;
        Dagaz.AI.g_baseEval += inHandTable[newPiece & Dagaz.AI.TYPE_MASK];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[slot][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[slot][newPiece & Dagaz.AI.PIECE_MASK];

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

    if (from == 0) {
        slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
        Dagaz.AI.g_baseEval -= inHandTable[piece & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[slot][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[slot][piece & Dagaz.AI.PIECE_MASK];

        var pieceType = piece & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[pieceType];
        Dagaz.AI.g_pieceList[(pieceType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pieceType]] = to;
        Dagaz.AI.g_pieceCount[pieceType]++;

        g_reserve[slot] = 0;
    } else {
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[from] : from];

        // Move our piece in the piece list
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
        Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if ((piece & Dagaz.AI.TYPE_MASK) == pieceFalcon) newPiece |= pieceFalconP;
           else newPiece |= piecePawnP;

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
        Dagaz.AI.g_board[to] = piece;
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
    }

    if (from != 0) {
        Dagaz.AI.g_board[from] = pieceEmpty;
    }

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        Dagaz.AI.UnmakeMove(move);
        return false;
    }

    Dagaz.AI.g_inCheck = false;
    kingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
        if (Dagaz.AI.g_inCheck && (from == 0) && ((piece & Dagaz.AI.TYPE_MASK) == piecePawn)) {
            if (GenerateValidMoves().length == 0) {
                Dagaz.AI.UnmakeMove(move);
                return false;
            }
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
    
    var flags = move & 0xFF000000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var slot = g_moveUndoStack[Dagaz.AI.g_moveCount].slot;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;

    var piece = Dagaz.AI.g_board[to];

    if (flags & moveflagPromotion) {
        piece = Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK);
        if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceFalconP) piece |= pieceFalcon;
           else piece |= piecePawn;

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
        if (from == 0) {
            g_reserve[(move >> 16) & 0xFF] = Dagaz.AI.g_board[to];
            var capturedType = Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK;
            Dagaz.AI.g_pieceCount[capturedType]--;
            var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
            Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[to];
            Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
            Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;
        } else {
            Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
        }
    }

    Dagaz.AI.g_board[to] = captured;

    if (from != 0) {
        // Move our piece in the piece list
        Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;
    }

    if (captured) {
        g_reserve[slot] = 0;
        // Restore our piece to the piece list
        var captureType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[captureType];
        Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = to;
        Dagaz.AI.g_pieceCount[captureType]++;
    }
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
    if (Dagaz.AI.g_board[target - inc] == pawn) return true;
    // Attackable by pieces?
    for (var i = piecePheasant; i <= pieceKing; i++) {
        var index = (color | i) << Dagaz.AI.COUNTER_SIZE;
        var square = Dagaz.AI.g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = Dagaz.AI.g_pieceList[++index];
        }
    }
    return false;
}

function GenerateMove(from, to, flags) {
    return from | (to << 8) | flags;
}

function GenerateDrop(to, slot) {
    return (to << 8) | (slot << 16);
}

function GenerateValidMoves() {
    var moveList = new Array();
    var allMoves = new Array();
    Dagaz.AI.GenerateCaptureMoves(allMoves, null);
    Dagaz.AI.GenerateAllMoves(allMoves);
    Dagaz.AI.GenerateDropMoves(allMoves, true);
    for (var i = allMoves.length - 1; i >= 0; i--) {     
        if (Dagaz.AI.MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            Dagaz.AI.UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

Dagaz.AI.GenerateAllMoves = function(moveStack) {
    var from, to, piece, pieceIdx, flags = 0;
    var inc = Dagaz.AI.g_toMove ? -16 : 16;

    // Pawn quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Pheasant quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePheasant) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (2 * inc); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - (inc - 1); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - (inc + 1); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // PawnP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePawnP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - (2 * inc); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 2 * (inc - 1); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 2 * (inc + 1); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Crane quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceCrane) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 16; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 17; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 15; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Falcon quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 17; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 17; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 15; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 15; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // LeftQuail quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceLeftQuail) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - (inc - 1); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc; 
        }
	to = from - (inc + 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc + 1; 
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RightQuail quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRightQuail) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - (inc + 1); 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc; 
        }
	to = from - (inc - 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc - 1; 
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FalconP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceFalconP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc; 
        }
	to = from + (inc - 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc - 1; 
        }
	to = from + (inc + 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc + 1; 
        }
        to = from - (inc + 1); 
        if (Dagaz.AI.g_board[to] == 0) {
             moveStack[moveStack.length] = GenerateMove(from, to, 0);
             to -= inc + 1;
             if (Dagaz.AI.g_board[to] == 0) {
                 moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        to = from - (inc - 1); 
        if (Dagaz.AI.g_board[to] == 0) {
             moveStack[moveStack.length] = GenerateMove(from, to, 0);
             to -= inc - 1;
             if (Dagaz.AI.g_board[to] == 0) {
                 moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

Dagaz.AI.GenerateCaptureMoves = function(moveStack) {
    var from, to, piece, pieceIdx, flags = 0;
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var inc = Dagaz.AI.g_toMove ? -16 : 16;

    // Pawn captures
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Pheasant captures
    pieceIdx = (Dagaz.AI.g_toMove | piecePheasant) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (2 * inc); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - (inc - 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - (inc + 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // PawnP captures
    pieceIdx = (Dagaz.AI.g_toMove | piecePawnP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - (2 * inc); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 2 * (inc - 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 2 * (inc + 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Crane captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceCrane) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 16; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 15; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 17; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Falcon captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 15; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 15; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 17; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 17; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // LeftQuail captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceLeftQuail) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - (inc - 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RightQuail captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRightQuail) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - (inc + 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FalconP captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceFalconP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to += inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to += inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - (inc - 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        else if (Dagaz.AI.g_board[to] == 0) {
             to -= inc - 1;
             if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - (inc + 1); 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        else if (Dagaz.AI.g_board[to] == 0) {
             to -= inc + 1;
             if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

Dagaz.AI.GenerateDropMoves = function(moveStack, force) {
   var friend = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
   for (var slot = 0; slot < RESERVE_SIZE; slot++) {
       var piece = g_reserve[slot];
       if ((piece & friend) == 0) continue;
       for (var to = 0; to < 256; to++) {
           if (Dagaz.AI.g_board[to] != 0) continue;
           if (_.indexOf([piecePawn], piece & Dagaz.AI.TYPE_MASK) >= 0) {
               var row = to & 0xF0;
               if (row == ((Dagaz.Model.HEIGHT + 1) << 4) && !Dagaz.AI.g_toMove) continue;
               if (row == 0x20 && Dagaz.AI.g_toMove) continue;
               if ((piece & Dagaz.AI.TYPE_MASK) == piecePawn) {
                   var isFound = false;
                   var ix = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
                   var pawnPos = Dagaz.AI.g_pieceList[ix++];
                   while (pawnPos != 0) {
                       if ((pawnPos & 0xF) == (to & 0xF)) isFound = true;
                       pawnPos = Dagaz.AI.g_pieceList[ix++];
                   }
                   if (isFound) continue;
               }
           }
           moveStack[moveStack.length] = GenerateDrop(to, slot);
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

    if (move >> 24) {
        // Castles, promotion, ep are always good
        return true;
    }

    var us = (fromPiece & Dagaz.AI.colorWhite) ? Dagaz.AI.colorWhite : 0;
    var them = Dagaz.AI.colorWhite - us;

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    var inc = (fromPiece & Dagaz.AI.colorWhite) ? -16 : 16; // Note: this is capture direction from to, so reversed from normal move direction
    if ((Dagaz.AI.g_board[to + inc] & Dagaz.AI.PIECE_MASK) == (piecePawn | them)) {
        return false;
    }

    var themAttacks = new Array();

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    var captureDeficit = fromValue - toValue;

    // Slider attacks
    Dagaz.AI.g_board[from] = 0;
    for (var pieceType = piecePheasant; pieceType <= pieceFalconP; pieceType++) {
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
    if ((Dagaz.AI.g_board[to - inc] & Dagaz.AI.PIECE_MASK) == (piecePawn | us)) {
        Dagaz.AI.g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceKing);

    // Our attacks
    var usAttacks = new Array();
    for (var pieceType = piecePheasant; pieceType <= pieceKing; pieceType++) {
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
