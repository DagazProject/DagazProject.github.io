"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 3;
Dagaz.AI.STALMATED        = true;
Dagaz.AI.CHECK_OPT        = true;

Dagaz.AI.PIECE_MASK       = 0xF;
Dagaz.AI.TYPE_MASK        = 0x7;
Dagaz.AI.PLAYERS_MASK     = 0x18;
Dagaz.AI.COUNTER_SIZE     = 6;
Dagaz.AI.TYPE_SIZE        = 3;

Dagaz.AI.colorBlack       = 0x10;
Dagaz.AI.colorWhite       = 0x08;

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var pieceKing             = 0x02;
var pieceCaptured         = 0x03;
var pieceNo               = 0x80;

var g_moveUndoStack = new Array();

// Evaulation variables
var g_mobUnit;

var materialTable = [200, 100, -1000000];

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0
],
[-100,    0,   60,   50,   60,    0, -100, // piecePawn
    0,   50,   55,   60,   55,   50,    0,
   60,   55,   55,    0,   55,   55,   60,
   50,   60,    0, -100,    0,   60,   50,
   60,   55,   55,    0,   55,   55,   60,
    0,   50,   55,   60,   55,   50,    0,
 -100,    0,   60,   50,   60,    0, -100
],
[2000000,   50,   20,   10,   20,   50, 2000000, // pieceKing
   50,   20,   10,    0,   10,   20,   50,
   20,   10,    0,   10,    0,   10,   20,
   10,    0,   10,  -10,   10,    0,   10,
   20,   10,    0,   10,    0,   10,   20,
   50,   20,   10,    0,   10,   20,   50,
 2000000,   50,   20,   10,   20,   50, 2000000
],
[   0,    0,    0,    0,    0,    0,    0, // pieceCaptured
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0
]];

var RESTRICTED = [0x24, 0x2A, 0x84, 0x8A];

var pieceSquareAdj = new Array(2);
var g_rookDeltas   = [-1, +1, -16, +16];

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    return letters[(square & 0xF) - 4] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move) {
    var result = FormatSquare(move & 0xFF) + FormatSquare((move >> 8) & 0xFF);
    return result;
}

function getAttacked(color) {
    var r = [];
    for (var square = 0; square < 255; square++) {
         var piece = Dagaz.AI.g_board[square];
         if (piece == pieceNo) continue;
         if ((piece & Dagaz.AI.PLAYERS_MASK) == color) continue;
         _.each([1, -1, 16, -16], function(dir) {
             if (_.indexOf(r, square) >= 0) return;
             if ((Dagaz.AI.g_board[square + dir] & Dagaz.AI.PLAYERS_MASK) != color) return;
             if (Dagaz.AI.g_board[square - dir] != pieceEmpty) return;
             _.each([1, -1, 16, -16], function(d) {
                 if (_.indexOf(r, square) >= 0) return;
                 if (d == dir) return;
                 if ((Dagaz.AI.g_board[square - dir + d] & Dagaz.AI.PLAYERS_MASK) != color) return;
                 r.push(square);
             });
         });
    }
    return r;
}

function logPosition() {
    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
         var s = '';
         for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
              var square = MakeSquare(row, col);
              var piece = Dagaz.AI.g_board[square];
              if (piece == pieceEmpty) {
                  s = s + ' .';
              } else if ((piece & Dagaz.AI.TYPE_MASK) == pieceKing) {
                  s = s + ' O';
              } else if (piece & Dagaz.AI.colorWhite) {
                  s = s + ' x';
              } else {
                  s = s + ' o';
              }
         }
         console.log(s);
    }
}

function logAttacked(attacked) {
    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
         var s = '';
         for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
              var square = MakeSquare(row, col);
              if (_.indexOf(attacked, square) < 0) {
                  s = s + ' .';
              } else {
                  s = s + ' X';
              }
         }
         console.log(s);
    }
}

function logPath(path) {
    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
         var s = '';
         for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
              var pos = row * Dagaz.Model.WIDTH + col;
              var t = '' + (path[pos] / 100);
              while (t.length < 3) t = ' ' + t;
              s = s + t;
         }
         console.log(s);
    }
}

function getPath(attacked) {
    var r = new Array(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT);
    for (var i = 0; i < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; i++) r[i] = 1000;
    var g = [0, Dagaz.Model.WIDTH - 1, Dagaz.Model.WIDTH * (Dagaz.Model.HEIGHT - 1), Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT - 1];
    for (var i = 0; i < g.length; i++) r[g[i]] = 0;
    for (var i = 0; i < g.length; i++) {
         var pos = g[i]; var w = r[pos];
         var x = pos % Dagaz.Model.WIDTH; 
         var y = (pos / Dagaz.Model.WIDTH) | 0;
         if (x > 0) {
             var row = y; var col = x - 1;
             var p = row * Dagaz.Model.WIDTH + col;
             if (_.indexOf(g, p) >= 0) continue;
             var square = MakeSquare(row, col);
             if (_.indexOf(attacked, square) >= 0) continue;
             if (Dagaz.AI.g_board[square] != pieceEmpty) continue;
             r[p] = w + 100;
             g.push(p);
         }
         if (x < Dagaz.Model.WIDTH - 1) {
             var row = y; var col = x + 1;
             var p = row * Dagaz.Model.WIDTH + col;
             if (_.indexOf(g, p) >= 0) continue;
             var square = MakeSquare(row, col);
             if (_.indexOf(attacked, square) >= 0) continue;
             if (Dagaz.AI.g_board[square] != pieceEmpty) continue;
             r[p] = w + 100;
             g.push(p);
         }
         if (y > 0) {
             var row = y - 1; var col = x;
             var p = row * Dagaz.Model.WIDTH + col;
             if (_.indexOf(g, p) >= 0) continue;
             var square = MakeSquare(row, col);
             if (_.indexOf(attacked, square) >= 0) continue;
             if (Dagaz.AI.g_board[square] != pieceEmpty) continue;
             r[p] = w + 100;
             g.push(p);
         }
         if (y < Dagaz.Model.HEIGHT - 1) {
             var row = y + 1; var col = x;
             var p = row * Dagaz.Model.WIDTH + col;
             if (_.indexOf(g, p) >= 0) continue;
             var square = MakeSquare(row, col);
             if (_.indexOf(attacked, square) >= 0) continue;
             if (Dagaz.AI.g_board[square] != pieceEmpty) continue;
             r[p] = w + 100;
             g.push(p);
         }
    }
    return r;
}

Dagaz.AI.Evaluate = function() {
    var curEval  = Dagaz.AI.g_baseEval;
    var ba = getAttacked(Dagaz.AI.colorWhite); 
    var wa = getAttacked(Dagaz.AI.colorBlack);
    var mobility = Mobility(Dagaz.AI.colorWhite, wa) - Mobility(0, ba);
    var evalAdjust = 0;

    if (Dagaz.AI.g_pieceCount[pieceKing] == 0) {
        evalAdjust += 600000;
    } else {
        var kingPos = Dagaz.AI.g_pieceList[pieceKing << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            var path = getPath(ba);
            var row  = ((kingPos & 0xF0) >> 4) - 2;
            var col  = (kingPos & 0xF) - 4;
            evalAdjust += path[row * Dagaz.Model.WIDTH + col];
        }
        evalAdjust += (wa.length - ba.length) * 100;
    }

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
    var score = 1;
    var mask = (move >> 16) & 0x0F;
    for (var ix = 0; mask != 0; ix++) {
         if (mask & 1) score++;
         mask = mask >> 1;
    }
    if (mask & 0x10) score += 10;
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
    // Can't move to a non empty square
    if (Dagaz.AI.g_board[to] != 0) return false;
    var dir = to - from;
    return _.indexOf(g_rookDeltas, dir) >= 0;
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

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[piecePawn]   = MakeTable(Dagaz.AI.pieceAdj[piecePawn]);
  pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);
  pieceSquareAdj[pieceCaptured] = MakeTable(Dagaz.AI.pieceAdj[pieceCaptured]);
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split('-');

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
                        piece |= piecePawn;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                    case 'c':
                        piece |= pieceCaptured;
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
            Dagaz.AI.g_baseEval += materialTable[(Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) >> Dagaz.AI.TYPE_SIZE];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval -= materialTable[(Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) >> Dagaz.AI.TYPE_SIZE];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    // DEBUG:
/*  logPosition();
    var a = getAttacked({}, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
    logAttacked(a);
    var p = getPath(a);
    logPath(p);*/

    Dagaz.AI.g_move50 = 0;
    return '';
}

function UndoHistory(baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

Dagaz.AI.MakeMove = function(move) {
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = [];
    var piece = Dagaz.AI.g_board[from];

    var mask = (move >> 16) & 0x0F;
    for (var ix = 0; mask != 0; ix++) {
         if (mask & 1) {
             var pos = to + g_rookDeltas[ix];
             if ((Dagaz.AI.g_board[pos] & Dagaz.AI.PLAYERS_MASK) == enemy) {
                 captured.push([pos, Dagaz.AI.g_board[pos]]);
             }
         }
         mask = mask >> 1;
    }

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    for (var i = 0; i < captured.length; i++) {
         var pos = captured[i][0];

         // Remove our piece from the piece list
         var capturedType = Dagaz.AI.g_board[pos] & Dagaz.AI.PIECE_MASK;
         Dagaz.AI.g_pieceCount[capturedType]--;
         var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
         Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[pos];
         Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
         Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

         Dagaz.AI.g_baseEval += materialTable[(Dagaz.AI.g_board[pos] & Dagaz.AI.colorWhite) >> Dagaz.AI.TYPE_SIZE];
         Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK][pos];

         Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[pos][capturedType];
         Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[pos][capturedType];
 
         Dagaz.AI.g_board[pos] = pieceEmpty;
         Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    
    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][from];

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
    Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][to];
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    if (Dagaz.AI.check_optionally) {
        var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos == 0) kingPos = Dagaz.AI.g_pieceList[(pieceCaptured | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            var a = getAttacked(Dagaz.AI.g_toMove);
            if (_.indexOf(a, kingPos) >= 0) {
                Dagaz.AI.UnmakeMove(move);
                return false;
            }
        }
    }
    if (Dagaz.AI.g_toMove && (Dagaz.AI.g_pieceCount[pieceKing] == 0) && (Dagaz.AI.g_pieceCount[pieceCaptured] == 0)) {
        Dagaz.AI.UnmakeMove(move);
        return false;
    }

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    Dagaz.AI.g_moveCount--;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;

    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var piece = Dagaz.AI.g_board[to];

    Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    Dagaz.AI.g_board[to] = pieceEmpty;

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;

    for (var i = 0; i < captured.length; i++) {
         var pos = captured[i][0];
         Dagaz.AI.g_board[pos] = captured[i][1];

         // Restore our piece to the piece list
         var captureType = Dagaz.AI.g_board[pos] & Dagaz.AI.PIECE_MASK;
         Dagaz.AI.g_pieceIndex[pos] = Dagaz.AI.g_pieceCount[captureType];
         Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = pos;
         Dagaz.AI.g_pieceCount[captureType]++;
    }
}

function GenerateMove(from, to) {
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var friend = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var r = 0; var mask = 1;
    for (var ix = 0; ix < g_rookDeltas.length; ix++) {
         var pos = to + g_rookDeltas[ix];
         if (pos != from) {
             if ((Dagaz.AI.g_board[pos] & Dagaz.AI.PLAYERS_MASK) == enemy) {
                 pos += g_rookDeltas[ix];
                 if (((Dagaz.AI.g_board[pos] & Dagaz.AI.PLAYERS_MASK) == friend) ||
                     ((Dagaz.AI.g_board[pos] == pieceEmpty) && (_.indexOf(RESTRICTED, pos) >= 0))){
                      r |= mask;
                      if ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) == pieceKing) r |= 0x10;
                 }
             }
         }
         mask = mask << 1;
    }
    return from | (to << 8) | (r << 16);
}

Dagaz.AI.GenerateAllMoves = function(moveStack) {
    var from, to, pieceIdx;

    // Pawn quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        for (var i = 0; i < g_rookDeltas.length; i++) {
             to = from + g_rookDeltas[i];
             if (Dagaz.AI.g_board[to] == 0) {
                  if (pieceSquareAdj[piecePawn][to] < 0) continue;
                  var move = GenerateMove(from, to);
                  if ((move & 0xF0000) == 0) moveStack[moveStack.length] = move;
             }
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        for (var i = 0; i < g_rookDeltas.length; i++) {
             to = from + g_rookDeltas[i];
             if (Dagaz.AI.g_board[to] == 0) {
                  if (pieceSquareAdj[pieceKing][to] < 0) continue;
                  var move = GenerateMove(from, to);
                  if ((move & 0xF0000) == 0) moveStack[moveStack.length] = move;
             }
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

Dagaz.AI.GenerateCaptureMoves = function(moveStack) {
    var from, to, pieceIdx;

    // Pawn capture moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        for (var i = 0; i < g_rookDeltas.length; i++) {
             to = from + g_rookDeltas[i];
             if (Dagaz.AI.g_board[to] == 0) {
                  if (pieceSquareAdj[piecePawn][to] < 0) continue;
                  var move = GenerateMove(from, to);
                  if (move & 0xF0000) moveStack[moveStack.length] = move;
             }
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // King capture moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        for (var i = 0; i < g_rookDeltas.length; i++) {
             to = from + g_rookDeltas[i];
             if (Dagaz.AI.g_board[to] == 0) {
                  if (pieceSquareAdj[pieceKing][to] < 0) continue;
                  var move = GenerateMove(from, to);
                  if (move & 0xF0000) moveStack[moveStack.length] = move;
             }
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

Dagaz.AI.See = function(move) {
    return true;
}

function Mobility(color, attacked) {
    var result = 0;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             if (_.indexOf(attacked, from) >= 0) result -= (piece == pieceKing) ? 10000 : 500;
             _.each([1, -1, 16, -16], function(dir) {
                 if (Dagaz.AI.g_board[from + dir] != pieceEmpty) return;
                 result += 10;
             });
         }
    }
    return result;
}

})();
