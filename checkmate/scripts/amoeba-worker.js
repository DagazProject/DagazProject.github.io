"use strict";

let g_width             = 7;
let g_height            = 7;

let NOISE_FACTOR        = 3;
let PIECE_MASK          = 0xF;
let TYPE_MASK           = 0x7;
let PLAYERS_MASK        = 0x18;
let COUNTER_SIZE        = 4;
let TYPE_SIZE           = 3;
var VECTORDELTA_SIZE    = 256;

var colorBlack          = 0x10;
var colorWhite          = 0x08;

var g_specMove          = false;

importScripts('../../underscore/underscore-min.js', '../../common-scripts/zobrist-worker.js', '../../common-scripts/garbo-worker.js');

function GetMoveSAN(move, validMoves) {
  return FormatMove(move);
}

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    return letters[(square & 0xF) - 4] + (((g_height + 1) - (square >> 4)) + 1);
}

function FormatMove(move, color) {
    var result = FormatSquare(move & 0xFF) + '-' + FormatSquare((move >> 8) & 0xFF);
    if (move & moveflagPromotion) {
        if (move & moveflagPromoteKnight) result += " Knight";
        else result += " Rook";
    }
    return result;
}

var materialTable = [0, 800, 3450, 5000, 600000, 0, 0];

var emptyAdj = [
    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0 
];

var pawnAdj = [   
    0,    0,    0,    0,    0,    0,    0, // piecePawn
  -25,  105,  135,  270,  135,  105,  -25,
  -80,    0,   30,  176,   30,    0,  -80,
  -85,   -5,   25,  175,   25,   -5,  -85,
  -90,  -10,   20,  125,   20,  -10,  -90,
 -100,  -20,   10,   70,   10,  -20, -100, 
    0,    0,    0,    0,    0,    0,    0
];

var knightAdj = [
 -200, -100,  -50,  -50,  -50, -100, -200, // pieceKnight
 -100,    0,    0,    0,    0,    0, -100,
  -50,    0,   60,   60,   60,    0,  -50,
  -50,    0,   30,   60,   30,    0,  -50,
  -50,    0,   30,   30,   30,    0,  -50,
 -100,    0,    0,    0,    0,    0,  -100,
 -200,  -50,  -25,  -25,  -25,  -50,  -200
];

var rookAdj = [ 
  -60,  -30,  -10,   20,  -10,  -30,   -60, // pieceRook
   40,   70,   90,  120,   90,   70,    40,
  -60,  -30,  -10,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,  -10,  -30,   -60
];

var kingAdj = [  
   50,  150,  -25, -125,  -25,  150,    50, // pieceKing
   50,  150,  -25, -125,  -25,  150,    50,
   50,  150,  -25, -125,  -25,  150,    50,
   50,  150,  -25, -125,  -25,  150,    50,
   50,  150,  -25, -125,  -25,  150,    50,
   50,  150,  -25, -125,  -25,  150,    50,
  150,  250,   75,  -25,   75,  250,   150
];

var holeAdj = [   
    0,    0,    0,    0,    0,    0,     0, // pieceHole
    0,    0,    0,    0,    0,    0,     0, 
    0,    0,    0,    0,    0,    0,     0, 
    0,    0,    0,    0,    0,    0,     0, 
    0,    0,    0,    0,    0,    0,     0, 
    0,    0,    0,    0,    0,    0,     0, 
    0,    0,    0,    0,    0,    0,     0 
];

var pieceSquareAdj = new Array(8);
var flipTable = new Array(256);

function Mobility(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var enemy = color == colorWhite ? colorBlack : colorWhite;
    var mobUnit = color == colorWhite ? g_mobUnit[0] : g_mobUnit[1];

    // Knight mobility
    mob = -3;
    pieceIdx = (color | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[g_board[from + 31]];
        mob += mobUnit[g_board[from + 33]];
        mob += mobUnit[g_board[from + 14]];
        mob += mobUnit[g_board[from - 14]];
        mob += mobUnit[g_board[from - 31]];
        mob += mobUnit[g_board[from - 33]];
        mob += mobUnit[g_board[from + 18]];
        mob += mobUnit[g_board[from - 18]];
        from = g_pieceList[pieceIdx++];
    }
    result += 65 * mob;

    // Rook mobility
    mob = -4;
    pieceIdx = (color | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (g_board[to] == 0) { to--; mob++; }
        to = from + 1;  while (g_board[to] == 0) { to++; mob++; }
        to = from + 16; while (g_board[to] == 0) { to += 16; mob++; }
        to = from - 16; while (g_board[to] == 0) { to -= 16; mob++; }
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    return result;
}

function Evaluate() {
    var curEval = g_baseEval;
    var mobility = Mobility(colorWhite) - Mobility(0);
    if (g_toMove == 0) {
        // Black
        curEval -= mobility;
    }
    else {
        curEval += mobility;
    }
    return curEval;
}

function ScoreMove(move) {
    var moveTo = (move >> 8) & 0xFF;
    var captured = g_board[moveTo] & TYPE_MASK;
    var piece = g_board[move & 0xFF];
    var score;
    if (captured != pieceEmpty) {
        var pieceType = piece & TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = historyTable[piece & PIECE_MASK][moveTo];
    }
    return score;
}

function IsHashMoveValid(hashMove) {
    var from = hashMove & 0xFF;
    var to = (hashMove >> 8) & 0xFF;
    var ourPiece = g_board[from];
    var pieceType = ourPiece & TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
    // Can't move a piece we don't control
    if (g_toMove != (ourPiece & colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (g_board[to] != 0 && (g_toMove == (g_board[to] & colorWhite))) return false;
    if (pieceType == piecePawn) {
        // Valid moves are push, capture, double push, promotions
        var dir = to - from;
        if ((g_toMove == colorWhite) != (dir < 0))  {
            // Pawns have to move in the right direction
            return false;
        }

        var row = to & 0xF0;
        if (hashMove & moveflagPromotion) {
            // Handle promotions
            return false;
        }

        if (dir == -16 || dir == 16) {
            // White/Black push
            return g_board[to] == 0;
        } else if (dir == -15 || dir == -17 || dir == 15 || dir == 17) {
            // White/Black capture
            return g_board[to] != 0;
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

function isNoZugzwang() {
    return g_pieceCount[pieceKnight | g_toMove] != 0 ||
           g_pieceCount[pieceRook   | g_toMove] != 0;
}

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var pieceKnight           = 0x02;
var pieceRook             = 0x03;
var pieceKing             = 0x04;
var pieceHole             = 0x05;
var pieceNo               = 0x80;

var g_vectorDelta  = new Array(VECTORDELTA_SIZE);

var g_knightDeltas = [31, 33, 14, -14, -31, -33, 18, -18];
var g_rookDeltas   = [-1, +1, -16, +16];
var g_kingDeltas   = [-1, +1, -15, +15, -17, +17, -16, +16];

var moveflagPromotion     = 0x10 << 16;
var moveflagPromoteKnight = 0x20 << 16;

var g_flags = moveflagPromotion | moveflagPromoteKnight;

function ResetGame() {
    CommonResetGame();

    pieceSquareAdj[pieceEmpty]  = MakeTable(emptyAdj);
    pieceSquareAdj[piecePawn]   = MakeTable(pawnAdj);
    pieceSquareAdj[pieceKnight] = MakeTable(knightAdj);
    pieceSquareAdj[pieceRook]   = MakeTable(rookAdj);
    pieceSquareAdj[pieceKing]   = MakeTable(kingAdj);
    pieceSquareAdj[pieceHole]   = MakeTable(holeAdj);

  var pieceDeltas = [[], [], g_knightDeltas, g_rookDeltas, g_kingDeltas];

  for (var i = 0; i < VECTORDELTA_SIZE; i++) {
      g_vectorDelta[i] = new Object();
      g_vectorDelta[i].delta = 0;
      g_vectorDelta[i].pieceMask = new Array(2);
      g_vectorDelta[i].pieceMask[0] = 0;
      g_vectorDelta[i].pieceMask[1] = 0;
  }
    
  // Initialize the vector delta table    
  for (var row = 0; row < (g_height << 4); row += 0x10) {
      for (var col = 0; col < g_width; col++) {
           var square = row | col;
            
           // Pawn moves
           var index = square - (square - 17) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << piecePawn);
           index = square - (square - 15) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << piecePawn);
            
           index = square - (square + 17) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);
           index = square - (square + 15) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);

           for (var i = pieceKnight; i <= pieceKing; i++) {
                for (var dir = 0; dir < pieceDeltas[i].length; dir++) {
                     var target = square + pieceDeltas[i][dir];
                     while (!(target & 0x88)) {
                         index = square - target + (VECTORDELTA_SIZE >> 1);

                         g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << i);
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
        var enemy = i == 0 ? colorBlack : colorWhite;
        var friend = i == 0 ? colorWhite : colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][0x80] = 0;
        g_mobUnit[i][enemy  | piecePawn]   = 1;
        g_mobUnit[i][enemy  | pieceKnight] = 2;
        g_mobUnit[i][enemy  | pieceRook]   = 4;
        g_mobUnit[i][enemy  | pieceKing]   = 6;
        g_mobUnit[i][enemy  | pieceHole]   = 0;
        g_mobUnit[i][friend | piecePawn]   = 0;
        g_mobUnit[i][friend | pieceKnight] = 0;
        g_mobUnit[i][friend | pieceRook]   = 0;
        g_mobUnit[i][friend | pieceKing]   = 0;
        g_mobUnit[i][friend | pieceHole]   = 0;
    }
}

function InitializeFromFen(fen) {
    var chunks = fen.split(' ');
    g_toMove = chunks[1].charAt(0) == 'w' ? colorWhite : 0;
    var me = (g_toMove == colorWhite) ? colorWhite : colorBlack;
    
    for (var i = 0; i < 256; i++) 
        g_board[i] = 0x80;
    
    var row = 0;
    var col = 0;
    
    var pieces = chunks[0];
    for (var i = 0; i < pieces.length; i++) {
        var c = pieces.charAt(i);
        
        if (c == '/') {
            row++;
            col = 0;
            if (row >= g_height) break;
        } else {
            if (c >= '0' && c <= '9') {
                for (var j = 0; j < parseInt(c); j++) {
                    g_board[MakeSquare(row, col)] = 0;
                    col++;
                }
            }
            else {
                var isBlack = c >= 'a' && c <= 'z' && c != 'x' && c != 'X';
                var piece = isBlack ? colorBlack : colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'x':
                        piece  = pieceHole | me;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                
                g_board[MakeSquare(row, col)] = piece;
                col++;
            }
        }
    }
    
    InitializePieceList();
    
    var them = colorWhite - g_toMove;
    
    g_specMove = (chunks[2] % 2) != 0;

    var hashResult = SetHash();
    g_hashKeyLow = hashResult.hashKeyLow;
    g_hashKeyHigh = hashResult.hashKeyHigh;

    g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (g_board[i] & colorWhite) {
            g_baseEval += pieceSquareAdj[g_board[i] & TYPE_MASK][i];
            g_baseEval += materialTable[g_board[i] & TYPE_MASK];
        } else if (g_board[i] & colorBlack) {
            g_baseEval -= pieceSquareAdj[g_board[i] & TYPE_MASK][flipTable[i]];
            g_baseEval -= materialTable[g_board[i] & TYPE_MASK];
        }
    }
    if (!g_toMove) g_baseEval = -g_baseEval;

    g_move50 = 0;
    var kingPos = g_pieceList[(g_toMove | pieceKing) << COUNTER_SIZE];
    g_inCheck = false;
    if (kingPos != 0) {
        g_inCheck = IsSquareAttackable(kingPos, them);
    }

    // Check for king capture (invalid FEN)
/*  kingPos = g_pieceList[(them | pieceKing) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }*/

    // Checkmate/stalemate
    if (GenerateValidMoves().length == 0) {
        return g_inCheck ? 'Checkmate' : 'Stalemate';
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

function MakeMove(move) {
    var me = g_toMove >> TYPE_SIZE;
    var otherColor = colorWhite - g_toMove; 
    
    var flags = move & 0xFF0000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = g_board[to];
    var piece = g_board[from];

    g_moveUndoStack[g_moveCount] = new UndoHistory(g_inCheck, g_baseEval, g_hashKeyLow, g_hashKeyHigh, g_move50, captured);
    g_moveCount++;

    if (captured) {
        // Remove our piece from the piece list
        var capturedType = captured & PIECE_MASK;
        g_pieceCount[capturedType]--;
        var lastPieceSquare = g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]];
        g_pieceIndex[lastPieceSquare] = g_pieceIndex[to];
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]] = 0;

        g_baseEval += materialTable[captured & TYPE_MASK];
        g_baseEval += pieceSquareAdj[captured & TYPE_MASK][me ? flipTable[to] : to];

        g_hashKeyLow ^= g_zobristLow[to][capturedType];
        g_hashKeyHigh ^= g_zobristHigh[to][capturedType];
        g_move50 = 0;
    }

    g_hashKeyLow ^= g_zobristLow[from][piece & PIECE_MASK];
    g_hashKeyHigh ^= g_zobristHigh[from][piece & PIECE_MASK];
    g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
    g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
    g_hashKeyLow ^= g_zobristBlackLow;
    g_hashKeyHigh ^= g_zobristBlackHigh;
    
    g_baseEval -= pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[from] : from];
    
    // Move our piece in the piece list
    g_pieceIndex[to] = g_pieceIndex[from];
    g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[to]] = to;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~TYPE_MASK);
        if (flags & moveflagPromoteKnight) 
            newPiece |= pieceKnight;
        else 
            newPiece |= pieceRook;

        g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
        g_board[to] = newPiece;
        g_hashKeyLow ^= g_zobristLow[to][newPiece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][newPiece & PIECE_MASK];
        
        g_baseEval += pieceSquareAdj[newPiece & TYPE_MASK][me == 0 ? flipTable[to] : to];
        g_baseEval -= materialTable[piecePawn];
        g_baseEval += materialTable[newPiece & TYPE_MASK];

        var pawnType = piece & PIECE_MASK;
        var promoteType = newPiece & PIECE_MASK;

        g_pieceCount[pawnType]--;

        var lastPawnSquare = g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]];
        g_pieceIndex[lastPawnSquare] = g_pieceIndex[to];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[lastPawnSquare]] = lastPawnSquare;
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]] = 0;
        g_pieceIndex[to] = g_pieceCount[promoteType];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[promoteType]++;
    } else {
        g_board[to] = g_board[from];
        g_baseEval += pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[to] : to];
    }
    g_board[from] = pieceEmpty;

    g_toMove = otherColor;
    g_baseEval = -g_baseEval;
    
    var kingPos = g_pieceList[(pieceKing | (colorWhite - g_toMove)) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        UnmakeMove(move);
        return false;
    }
    
    g_inCheck = false;
    
    g_inCheck = false;
    var kingPos = g_pieceList[(pieceKing | g_toMove) << COUNTER_SIZE];
    if (kingPos != 0) {
        g_inCheck = IsSquareAttackable(kingPos, colorWhite - g_toMove);
    }

    g_repMoveStack[g_moveCount - 1] = g_hashKeyLow;
    g_move50++;

    return true;
}

function UnmakeMove(move) {
    g_toMove = colorWhite - g_toMove;
    g_baseEval = -g_baseEval;
    
    g_moveCount--;
    g_inCheck = g_moveUndoStack[g_moveCount].inCheck;
    g_baseEval = g_moveUndoStack[g_moveCount].baseEval;
    g_hashKeyLow = g_moveUndoStack[g_moveCount].hashKeyLow;
    g_hashKeyHigh = g_moveUndoStack[g_moveCount].hashKeyHigh;
    g_move50 = g_moveUndoStack[g_moveCount].move50;
    
    var otherColor = colorWhite - g_toMove;
    var me = g_toMove >> TYPE_SIZE;
    var them = otherColor >> TYPE_SIZE;
    
    var flags = move & 0xFF0000;
    var captured = g_moveUndoStack[g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    
    var piece = g_board[to];
    
    if (flags & moveflagPromotion) {
        piece = (g_board[to] & (~TYPE_MASK)) | piecePawn;
        g_board[from] = piece;

        var pawnType = g_board[from] & PIECE_MASK;
        var promoteType = g_board[to] & PIECE_MASK;

        g_pieceCount[promoteType]--;

        var lastPromoteSquare = g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]];
        g_pieceIndex[lastPromoteSquare] = g_pieceIndex[to];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[lastPromoteSquare]] = lastPromoteSquare;
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]] = 0;
        g_pieceIndex[to] = g_pieceCount[pawnType];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[pawnType]++;
    } else {
        g_board[from] = g_board[to];
    }

    g_board[to] = captured;

    // Move our piece in the piece list
    g_pieceIndex[from] = g_pieceIndex[to];
    g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[from]] = from;

    if (captured) {
        // Restore our piece to the piece list
        var captureType = captured & PIECE_MASK;
        g_pieceIndex[to] = g_pieceCount[captureType];
        g_pieceList[(captureType << COUNTER_SIZE) | g_pieceCount[captureType]] = to;
        g_pieceCount[captureType]++;
    }
}

function GenerateAllMoves(moveStack) {
    var from, to, piece, pieceIdx;

    if (g_specMove) {
        pieceIdx = (g_toMove | pieceHole) << COUNTER_SIZE;
        from = g_pieceList[pieceIdx++];
        while (from != 0) {
            to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            from = g_pieceList[pieceIdx++];
        }
        return;
    }

    // Pawn quiet moves
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        GeneratePawnMoves(moveStack, from);
        from = g_pieceList[pieceIdx++];
    }

    // Knight quiet moves
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
	from = g_pieceList[pieceIdx++];
    }
	
    // King quiet moves
    {
 	pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
	from = g_pieceList[pieceIdx];
	to = from - 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

function GenerateCaptureMoves(moveStack) {
    var from, to, piece, pieceIdx;
    var inc = (g_toMove == colorWhite) ? -16 : 16;
    var enemy = g_toMove == colorWhite ? colorBlack : colorWhite;

    if (g_specMove) return;

    // Pawn captures
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc - 1;
        if (g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + inc + 1;
        if (g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        from = g_pieceList[pieceIdx++];
    }

    // Knight captures
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }
	
    // Rook captures
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }
	
    // King captures
    {
	pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
	from = g_pieceList[pieceIdx];
	to = from - 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

function GenerateDropMoves(moveStack, force) {}

function canPromote(square) {
    var inc = (g_toMove == colorWhite) ? -16 : 16;
    square += inc;
    while (g_board[square] == pieceHole) {
        square += inc;
    }
    return (g_board[square] == pieceNo);
}

function MovePawnTo(moveStack, start, square) {
    var row = square & 0xF0;
    if (canPromote(square)) {
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion | moveflagPromoteKnight);
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion);
    } else {
        moveStack[moveStack.length] = GenerateMove(start, square, 0);
    }
}

function GeneratePawnMoves(moveStack, from) {
    var piece = g_board[from];
    var color = piece & colorWhite;
    var inc = (color == colorWhite) ? -16 : 16;
    // Quiet pawn moves
    var to = from + inc;
    if (g_board[to] == 0) {
	MovePawnTo(moveStack, from, to, pieceEmpty);
    }
}

function IsSquareOnPieceLine(target, from) {
    var index = from - target + (VECTORDELTA_SIZE >> 1);
    var piece = g_board[from];
    return (g_vectorDelta[index].pieceMask[(piece >> TYPE_SIZE) & 1] & (1 << (piece & TYPE_MASK))) ? true : false;
}

function IsSquareAttackableFrom(target, from) {
    var index = from - target + (VECTORDELTA_SIZE >> 1);
    var piece = g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> TYPE_SIZE) & 1] & (1 << (piece & TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
        do {
            from += inc;
            if (from == target) return true;
        } while (g_board[from] == 0);
    }
    return false;
}

function IsSquareAttackable(target, color) {
    // Attackable by pawns?
    var inc = color ? -16 : 16;
    var pawn = (color ? colorWhite : colorBlack) | piecePawn;
    if (g_board[target - (inc - 1)] == pawn) return true;
    if (g_board[target - (inc + 1)] == pawn) return true;
    // Attackable by pieces?
    for (var i = pieceKnight; i <= pieceKing; i++) {
        var index = (color | i) << COUNTER_SIZE;
        var square = g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = g_pieceList[++index];
        }
    }
    return false;
}

var g_seeValues = [0, 1, 3, 5, 900, 0, 0, 0,
                   0, 1, 3, 5, 900, 0, 0, 0];

function See(move) {
    var from = move & 0xFF;
    var to = (move >> 8) & 0xFF;

    var fromPiece = g_board[from];

    var fromValue = g_seeValues[fromPiece & PIECE_MASK];
    var toValue = g_seeValues[g_board[to] & PIECE_MASK];

    if (fromValue <= toValue) {
        return true;
    }

    if (move >> 16) {
        // Castles, promotion, ep are always good
        return true;
    }

    var us = (fromPiece & colorWhite) ? colorWhite : 0;
    var them = colorWhite - us;

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    var inc = (fromPiece & colorWhite) ? -16 : 16; // Note: this is capture direction from to, so reversed from normal move direction
    if (((g_board[to + inc + 1] & PIECE_MASK) == (piecePawn | them)) ||
        ((g_board[to + inc - 1] & PIECE_MASK) == (piecePawn | them))) {
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
    g_board[from] = 0;
    for (var pieceType = pieceRook; pieceType <= pieceRook; pieceType++) {
        if (SeeAddSliderAttacks(to, them, themAttacks, pieceType)) {
            if (captureDeficit > g_seeValues[pieceType]) {
                g_board[from] = fromPiece;
                return false;
            }
        }
    }

    // Pawn defenses 
    // At this point, we are sure we are making a "losing" capture.  The opponent can not capture back with a 
    // pawn.  They cannot capture back with a minor/major and stand pat either.  So, if we can capture with 
    // a pawn, it's got to be a winning or equal capture. 
    if (((g_board[to - inc + 1] & PIECE_MASK) == (piecePawn | us)) ||
        ((g_board[to - inc - 1] & PIECE_MASK) == (piecePawn | us))) {
        g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceKing);

    // Our attacks
    var usAttacks = new Array();
    SeeAddKnightAttacks(to, us, usAttacks);
    for (var pieceType = pieceRook; pieceType <= pieceKing; pieceType++) {
        SeeAddSliderAttacks(to, us, usAttacks, pieceType);
    }

    g_board[from] = fromPiece;

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
                var pieceValue = g_seeValues[g_board[themAttacks[i]] & TYPE_MASK];
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
                var pieceValue = g_seeValues[g_board[usAttacks[i]] & TYPE_MASK];
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
    var index = square - target + (VECTORDELTA_SIZE >> 1);
    var delta = -g_vectorDelta[index].delta;
    if (delta == 0) return;
    square += delta;
    while (g_board[square] == 0) {
        square += delta;
    }
    if ((g_board[square] & PLAYERS_MASK) && IsSquareOnPieceLine(target, square)) {
        if ((g_board[square] & colorWhite) == us) {
            usAttacks[usAttacks.length] = square;
        } else {
            themAttacks[themAttacks.length] = square;
        }
    }
}

// target = attacking square, us = color of knights to look for, attacks = array to add squares to
function SeeAddKnightAttacks(target, us, attacks) {
    var pieceIdx = (us | pieceKnight) << COUNTER_SIZE;
    var attackerSq = g_pieceList[pieceIdx++];
    while (attackerSq != 0) {
        if (IsSquareOnPieceLine(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
        }
        attackerSq = g_pieceList[pieceIdx++];
    }
}

function SeeAddSliderAttacks(target, us, attacks, pieceType) {
    var pieceIdx = (us | pieceType) << COUNTER_SIZE;
    var attackerSq = g_pieceList[pieceIdx++];
    var hit = false;
    while (attackerSq != 0) {
        if (IsSquareAttackableFrom(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
            hit = true;
        }
        attackerSq = g_pieceList[pieceIdx++];
    }
    return hit;
}

function configure(name, value) {
    if (name == 'WIDTH') {
        g_width = +value;
        return true;
    }
    if (name == 'HEIGHT') {
        g_height = +value;
        return true;
    }
    if (name == 'FLAGS') {
        g_flags = +value;
        return true;
    }
    return false;
}

self.onmessage = function (e) {
    if (e.data == "go" || needsReset) {
        ResetGame();
        needsReset = false;
        if (e.data == "go") return;
    }
    if (e.data.match("^config") == "config") {
        const s = e.data.substr(7, e.data.length - 7);
        const r = s.match(/\s*([^\s=]+)\s*=\s*(\S+)/);
        if (r) {
            if (configure(r[1], r[2])) {
                self.postMessage("pv " + r[1] + '=' + r[2]);
            }
        }
    } else if (e.data.match("^position") == "position") {
        ResetGame();
        var result = InitializeFromFen(e.data.substr(9, e.data.length - 9));
        if (result.length != 0) {
            self.postMessage("message " + result);
        }
    } else if (e.data.match("^search") == "search") {
        g_timeout = parseInt(e.data.substr(7, e.data.length - 7), 10);
        Search(FinishMoveLocalTesting, 99, FinishPlyCallback);
    } else if (e.data == "analyze") {
        g_timeout = 99999999999;
        Search(null, 99, FinishPlyCallback);
    } else {
        MakeMove(GetMoveFromString(e.data));
    }
}
