"use strict";

(function() {

Dagaz.Model.WIDTH         = 7;
Dagaz.Model.HEIGHT        = 14;

Dagaz.AI.NOISE_FACTOR     = 3;
Dagaz.AI.g_timeout        = 7000;

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var pieceBishop           = 0x02;
var pieceRook             = 0x03;
var pieceQueen            = 0x04;
var pieceKing             = 0x05;
var pieceNo               = 0x80;

var moveflagPromotion     = 0x01000000;
var moveflagPromotionR    = 0x02000000;
var moveflagPromotionB    = 0x04000000;
var moveflagPromotionAny  = 0x07000000;
var moveflagEPC           = 0x08000000;
var moveflagReserve       = 0x10000000;
var moveflagClearway      = 0x20000000;

Dagaz.AI.g_flags = moveflagPromotionR | moveflagPromotionB | moveflagEPC | moveflagClearway;

var g_moveUndoStack = new Array();
var materialTable = [0, 100, 1000, 1500, 10000, 200000];

var pieceSquareAdj = new Array(6);
var flipTable = new Array(256);

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0, // piecePawn
    0,    0,   70,   75,   70,    0,    0, 
    0,    0,   65,   75,   65,    0,    0, 
    0,    0,    0,   60,    0,    0,    0, 
    5,   10,   50,   40,   50,   10,    5, 
   10,   20,   20,   20,   20,   20,   10, 
    5,   15,   15,   15,   15,   15,    5, 
   10,   10,   10,   10,   10,   10,   10, 
   15,   20,   20,   20,   20,   20,   15, 
   10,   30,   30,   30,   30,   30,   10, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,   70,   30,   70,    0,    0, 
    0,    0,   50,   40,   50,    0,    0, 
    0,    0,   70,   50,   70,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0, // pieceBishop
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
  -10,    0,   10,   -5,   10,    0,  -10, 
   -5,   10,    0,    0,    0,   10,   -5, 
    5,   -5,    0,    0,    0,   -5,    5, 
   -5,   -5,    0,    0,    0,   -5,   -5, 
   -5,  -10,   -5,    0,   -5,  -10,   -5, 
  -10,   10,   10,   10,   10,   10,  -10, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,   50,    0,   50,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0, // pieceRook
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
  -10,   -5,   -5,   10,   -5,   -5,  -10, 
   -5,    0,    0,   50,    0,    0,   -5, 
   -5,   10,   20,   50,   20,   10,   -5, 
   -5,   10,   20,   50,   20,   10,   -5, 
   -5,    0,    0,   50,    0,    0,   -5, 
  -10,   -5,   -5,   30,   -5,   -5,  -10, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,  100,    0,    0,    0, 
    0,    0,    0,  100,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0, // pieceQueen
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
  -10,    0,   10,   10,   10,    0,  -10, 
   -5,   30,    0,   50,    0,   30,   -5, 
    5,   -5,    0,   50,    0,   -5,    5, 
   -5,   -5,    0,   50,    0,   -5,   -5, 
   -5,  -10,   -5,   50,   -5,  -10,   -5, 
  -10,   10,   10,   30,   10,   10,  -10, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0, 1000,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0, // pieceKing
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
   50,   30,   30,  -10,   30,   30,   50, 
   30,  -10,  -10,  -50,  -10,  -10,   30, 
   30,  -10,  -10,  -50,  -10,  -10,   30, 
   30,  -10,  -10,  -50,  -10,  -10,   30, 
   30,  -10,  -10,  -50,  -10,  -10,   30, 
   50,   30,   30,  -10,   30,   30,   50, 
    0,    0,    0,  100,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0
]];

var g_mob = [0, 1, 3, 3, 5, 10];
var g_enPassentSquare;

var COUNTER_SIZE          = 6;

var g_pieceIndex = new Array(256);
var g_pieceList  = new Array(2 * 8 * 64);
var g_pieceCount = new Array(2 * 8);

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 1) << 4) | (column + 2);
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    return letters[(square & 0xF) - 2] + ((Dagaz.Model.HEIGHT + 1) - (square >> 4));
}

Dagaz.AI.FormatMove = function(move) {
    var result = null;
    for (var i = 0; i < move.length; i++) {
        if (result === null) {
            result = Dagaz.AI.FormatSquare(move[i] & 0xFF);
        }
        result = result + Dagaz.AI.FormatSquare((move[i] >> 8) & 0xFF);
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
            result[Dagaz.AI.MakeSquare(row, col)] = table[row * Dagaz.Model.WIDTH + col];
        }
    }
    return result;
}

Dagaz.AI.Mobility = function(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var inc = color == Dagaz.AI.colorWhite ? -16 : 16;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

    mob = 0;
    pieceIdx = (color | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        var row = from & 0xF0;
        if ((row >= 0x50) && (row <= 0xA0)) {
            to = from + inc;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to + inc] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            } else {
                if (Dagaz.AI.g_board[from] & Dagaz.AI.colorWhite) {
                    if ((row == 0xA0) && (Dagaz.AI.g_board[to + inc] == 0)) mob++;
                } else {
                    if ((row == 0x50) && (Dagaz.AI.g_board[to + inc] == 0)) mob++;
                }
            }
            to = from + inc - 1;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to + inc - 1] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            } else {
                if (Dagaz.AI.g_board[from] & Dagaz.AI.colorWhite) {
                    if (row < 0x90) mob++;
                } else {
                    if (row > 0x60) mob++;
                }
            }
            to = from + inc + 1;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to + inc + 1] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            } else {
                if (Dagaz.AI.g_board[from] & Dagaz.AI.colorWhite) {
                    if (row < 0x90) mob++;
                } else {
                    if (row > 0x60) mob++;
                }
            }
            to = from - 1;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to - 1] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            } else {
                if (Dagaz.AI.g_board[from] & Dagaz.AI.colorWhite) {
                    if (row < 0x80) mob++;
                } else {
                    if (row > 0x70) mob++;
                }
            }
            to = from + 1;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to - 1] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            } else {
                if (Dagaz.AI.g_board[from] & Dagaz.AI.colorWhite) {
                    if (row < 0x80) mob++;
                } else {
                    if (row > 0x70) mob++;
                }
            }
            to = from - inc;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to - inc] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            }
            to = from - inc - 1;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to - inc - 1] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            }
            to = from - inc + 1;
            if (Dagaz.AI.g_board[to] & enemy) {
                if (Dagaz.AI.g_board[to - inc + 1] == 0) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
            }
        }
        from = g_pieceList[pieceIdx++];
    }
    result += mob;

    mob = 0;
    pieceIdx = (color | pieceKing) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        var row = from & 0xF0;
        if ((row >= 0x50) && (row <= 0xA0)) {
            to = from + 16; if (Dagaz.AI.g_board[to] == 0) mob++;
            to = from - 16; if (Dagaz.AI.g_board[to] == 0) mob++;
            to = from + 1;  if (Dagaz.AI.g_board[to] == 0) mob++;
            to = from - 1;  if (Dagaz.AI.g_board[to] == 0) mob++;
            to = from + 17; if (Dagaz.AI.g_board[to] == 0) mob++;
            to = from - 17; if (Dagaz.AI.g_board[to] == 0) mob++;
            to = from + 15; if (Dagaz.AI.g_board[to] == 0) mob++;
            to = from - 15; if (Dagaz.AI.g_board[to] == 0) mob++;
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 2 * mob;

    mob = -1;
    pieceIdx = (color | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        var row = from & 0xF0;
        if ((row >= 0x50) && (row <= 0xA0)) {
            to = from - 17; while (Dagaz.AI.g_board[to] == 0) {to -= 17; mob++;}
            to = from - 15; while (Dagaz.AI.g_board[to] == 0) {to -= 15; mob++;}
            to = from + 17; while (Dagaz.AI.g_board[to] == 0) {to += 17; mob++;}
            to = from + 15; while (Dagaz.AI.g_board[to] == 0) {to += 15; mob++;}
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 5 * mob;

    mob = -1;
    pieceIdx = (color | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        var row = from & 0xF0;
        if ((row >= 0x50) && (row <= 0xA0)) {
            to = from - 16; while (Dagaz.AI.g_board[to] == 0) {to -= 16; mob++;}
            to = from - 1;  while (Dagaz.AI.g_board[to] == 0) {to--; mob++;}
            to = from + 16; while (Dagaz.AI.g_board[to] == 0) {to += 16; mob++;}
            to = from + 1;  while (Dagaz.AI.g_board[to] == 0) {to++; mob++;}
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 5 * mob;

    mob = -1;
    pieceIdx = (color | pieceQueen) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        var row = from & 0xF0;
        if ((row >= 0x50) && (row <= 0xA0)) {
            to = from - 17; while (Dagaz.AI.g_board[to] == 0) {to -= 17; mob++;}
            to = from - 15; while (Dagaz.AI.g_board[to] == 0) {to -= 15; mob++;}
            to = from + 17; while (Dagaz.AI.g_board[to] == 0) {to += 17; mob++;}
            to = from + 15; while (Dagaz.AI.g_board[to] == 0) {to += 15; mob++;}
            to = from - 16; while (Dagaz.AI.g_board[to] == 0) {to -= 16; mob++;}
            to = from - 1;  while (Dagaz.AI.g_board[to] == 0) {to--; mob++;}
            to = from + 16; while (Dagaz.AI.g_board[to] == 0) {to += 16; mob++;}
            to = from + 1;  while (Dagaz.AI.g_board[to] == 0) {to++; mob++;}
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 5 * mob;

    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var mobility = Dagaz.AI.Mobility(Dagaz.AI.colorWhite) - Dagaz.AI.Mobility(0);
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

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = Dagaz.AI.MakeSquare(row, col);
            flipTable[square] = Dagaz.AI.MakeSquare((Dagaz.Model.HEIGHT - 1) - row, col);
       }
  }

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[piecePawn]   = MakeTable(Dagaz.AI.pieceAdj[piecePawn]);
  pieceSquareAdj[pieceBishop] = MakeTable(Dagaz.AI.pieceAdj[pieceBishop]);
  pieceSquareAdj[pieceRook]   = MakeTable(Dagaz.AI.pieceAdj[pieceRook]);
  pieceSquareAdj[pieceQueen]  = MakeTable(Dagaz.AI.pieceAdj[pieceQueen]);
  pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);
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
                        piece |= piecePawn;
                        break;
                    case 'b':
                        piece |= pieceBishop;
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
                    Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }

    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : pieceEmpty;

    g_enPassentSquare = -1;
    if (chunks[2].indexOf('-') == -1) {
	var col = chunks[2].charAt(0).charCodeAt() - 'a'.charCodeAt();
	var row = Dagaz.Model.HEIGHT - (chunks[2].charAt(1).charCodeAt() - '0'.charCodeAt());
	g_enPassentSquare = Dagaz.AI.MakeSquare(row, col);
    }

    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    InitializePieceList();

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

    return '';
}

function InitializePieceList() {
    for (var i = 0; i < 64; i++) {
        g_pieceCount[i] = 0;
        for (var j = 0; j < 64; j++) {
            // 0 is used as the terminator for piece lists
            g_pieceList[(i << COUNTER_SIZE) | j] = 0;
        }
    }
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & 0x80) continue;
        g_pieceIndex[i] = 0;
        if ((Dagaz.AI.g_board[i] & Dagaz.AI.PLAYERS_MASK) && (Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK)) {
            var piece = Dagaz.AI.g_board[i] & Dagaz.AI.PIECE_MASK;
            g_pieceList[(piece << COUNTER_SIZE) | g_pieceCount[piece]] = i;
            g_pieceIndex[i] = g_pieceCount[piece];
            g_pieceCount[piece]++;
        }
    }
}

function UndoHistory(move, step, ep, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.move = move;
    this.step = step;
    this.ep = ep;
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

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(move, step, g_enPassentSquare, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    g_enPassentSquare = -1;

    if (captured) {
        var capturedType = captured & Dagaz.AI.PIECE_MASK;

        g_pieceCount[capturedType]--;
        var lastPieceSquare = g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]];
        g_pieceIndex[lastPieceSquare] = g_pieceIndex[target];
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? flipTable[target] : target];
        Dagaz.AI.g_board[target] = pieceEmpty;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][capturedType];
        Dagaz.AI.g_move50 = 0;
    } else if ((piece & Dagaz.AI.TYPE_MASK) == piecePawn) {
        var diff = to - from;
        if (diff < 0) diff = -diff;
        if (diff > 16) {
            g_enPassentSquare = me ? (to + 16) : (to - 16);
        }
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[from] : from];

    // Move our piece in the piece list
    g_pieceIndex[to] = g_pieceIndex[from];
    g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[to]] = to;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromotionB) newPiece |= pieceBishop;
        else if (flags & moveflagPromotionR) newPiece |= pieceRook;
        else newPiece |= pieceQueen;

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

        g_pieceCount[pawnType]--;

        var lastPawnSquare = g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]];
        g_pieceIndex[lastPawnSquare] = g_pieceIndex[to];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[lastPawnSquare]] = lastPawnSquare;
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]] = 0;
        g_pieceIndex[to] = g_pieceCount[promoteType];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[promoteType]++;
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return captured;
}

Dagaz.AI.UnmakeStep = function() {
    Dagaz.AI.g_moveCount--;
    var move = g_moveUndoStack[Dagaz.AI.g_moveCount].move;
    g_enPassentSquare = g_moveUndoStack[Dagaz.AI.g_moveCount].ep;
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

    if (flags & moveflagPromotion) {
        piece = Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK);
        piece |= piecePawn;

        Dagaz.AI.g_board[from] = piece;

        var pawnType = Dagaz.AI.g_board[from] & Dagaz.AI.PIECE_MASK;
        var promoteType = Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK;

        g_pieceCount[promoteType]--;

        var lastPromoteSquare = g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]];
        g_pieceIndex[lastPromoteSquare] = g_pieceIndex[to];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[lastPromoteSquare]] = lastPromoteSquare;
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]] = 0;
        g_pieceIndex[to] = g_pieceCount[pawnType];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[pawnType]++;
    } else {
        Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    }

    Dagaz.AI.g_board[to] = pieceEmpty;

    g_pieceIndex[from] = g_pieceIndex[to];
    g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[from]] = from;

    if (captured) {
        Dagaz.AI.g_board[target] = captured;

        var captureType = captured & Dagaz.AI.PIECE_MASK;
        g_pieceIndex[target] = g_pieceCount[captureType];
        g_pieceList[(captureType << COUNTER_SIZE) | g_pieceCount[captureType]] = target;
        g_pieceCount[captureType]++;
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

function GenerateCaptureMoves(moves, flags) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if ((Dagaz.AI.g_board[pos] & color) && ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) != pieceKing)) {           
           GenerateCaptureMovesFrom(moves, pos, flags);
       }
  }
}

function GenerateQuietMoves(moves, flags) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if ((Dagaz.AI.g_board[pos] & color) && ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) != pieceKing)) {
           GenerateQuietMovesFrom(moves, pos, flags);
       }
  }
}

function GenerateKingCaptureMoves(moves, flags) {
  var pos = g_pieceList[(Dagaz.AI.g_toMove | pieceKing) << COUNTER_SIZE];
  if (pos != 0) {
      GenerateCaptureMovesFrom(moves, pos, flags);
  }
}

function GenerateKingQuietMoves(moves, flags) {
  var pos = g_pieceList[(Dagaz.AI.g_toMove | pieceKing) << COUNTER_SIZE];
  if (pos != 0) {
      GenerateQuietMovesFrom(moves, pos, flags);
  }
}

function NoKing() {
  return g_pieceCount[pieceKing | Dagaz.AI.g_toMove] == 0;
}

function getFlags() {
  var r = 0;
  var pieces = [0, 0, 0, 0, 0, 0];
  var me = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & me) {
           pieces[Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK]++;
           var row = pos & 0xF0;
           if (Dagaz.AI.g_toMove) {
               if (row > 0xA0) r |= moveflagReserve;
           } else {
               if (row < 0x50) r |= moveflagReserve;
           }
       }
  }
  if (pieces[pieceQueen] == 0) r |= moveflagPromotion;
  if ((pieces[pieceRook] < 2) && (Dagaz.AI.g_flags & moveflagPromotionR))   r |= moveflagPromotionR;
  if ((pieces[pieceBishop] < 2) && (Dagaz.AI.g_flags & moveflagPromotionB)) r |= moveflagPromotionB;
  return r;
}

function CheckInvariant(moves) {
  var mx = 0;
  for (var i = 0; i < moves.length; i++) {
      if (mx < moves[i].length) mx = moves[i].length;
  }
  var result = [];
  for (var i = 0; i < moves.length; i++) {
      if (moves[i].length == mx) result.push(moves[i]);
  }
  return result;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  if (NoKing()) return moves;
  var flags = getFlags();
  GenerateKingCaptureMoves(moves, flags);
  if (moves.length > 0) {
      GenerateKingQuietMoves(moves, flags);
      return moves;
  }
  GenerateCaptureMoves(moves, flags);
  moves = CheckInvariant(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves, flags);
      GenerateKingQuietMoves(moves, flags);
  }
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  if (NoKing()) return moves;
  var flags = getFlags();
  GenerateKingCaptureMoves(moves, flags);
  if (moves.length > 0) {
      GenerateKingQuietMoves(moves, flags);
      return moves;
  }
  GenerateCaptureMoves(moves, flags);
  moves = CheckInvariant(moves);
  return moves;
}

function GenerateQuietStep(moves, from, to, pieceType, flags) {
  var row = to & 0xF0;
  if (pieceType == piecePawn) {
      if (Dagaz.AI.g_toMove && (row == 0x10)) {
          if (flags & moveflagPromotionB) moves.push(from | (to << 8) | moveflagPromotion | moveflagPromotionB);
          else if (flags & moveflagPromotionR) moves.push(from | (to << 8) | moveflagPromotion | moveflagPromotionR);
          else if (flags & moveflagPromotion)  moves.push(from | (to << 8) | moveflagPromotion);
          return;
      }
      if (!Dagaz.AI.g_toMove && (row == 0xE0)) {
          if (flags & moveflagPromotionB) moves.push(from | (to << 8) | moveflagPromotion | moveflagPromotionB);
          else if (flags & moveflagPromotionR) moves.push(from | (to << 8) | moveflagPromotion | moveflagPromotionR);
          else if (flags & moveflagPromotion)  moves.push(from | (to << 8) | moveflagPromotion);
          return;
      }
  }
  moves.push(from | (to << 8));
}

function CheckReserve(pos, pieceType, flags) {
  if (flags & moveflagReserve) {
      var row = pos & 0xF0;
      if (Dagaz.AI.g_toMove) {
          if ((row > 0xA0) && (pieceType < pieceKing)) return true;
          if (row > 0xB0) return true;
      } else {
          if ((row < 0x50) && (pieceType < pieceKing)) return true;
          if (row < 0x40) return true;
      }
  }
  return false;
}

function GenerateCaptureStep(from, dir, pieceType, flags, isFirst) {
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = from + dir;
    if ((pieceType > piecePawn) && (pieceType < pieceKing)) {
        while (Dagaz.AI.g_board[captured] == pieceEmpty) {
            captured += dir;
        }
    }
    if (isFirst && (pieceType == piecePawn) && (g_enPassentSquare == captured)) {
        var to = captured + dir;
        captured = Dagaz.AI.g_toMove ? captured + 16 : captured - 16;
        if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
        return from | (to << 8) | (captured << 16);
    }
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = captured + dir;
    if (CheckReserve(to, pieceType, flags)) return 0;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    return from | (to << 8) | (captured << 16);
}

function promoteTypes(pieceType, pos, flags) {
    if ((pieceType == piecePawn) && (flags & moveflagPromotionAny)) {
        var row = pos & 0xF0;
        if (Dagaz.AI.g_toMove && (row == 0x10)) {
            var r = [];
            if (flags & moveflagPromotion)  r.push(pieceQueen); 
            if (flags & moveflagPromotionR) r.push(pieceRook); 
            if (flags & moveflagPromotionB) r.push(pieceBishop); 
            return r;
        }
        if (!Dagaz.AI.g_toMove && (row == 0xE0)) {
            var r = [];
            if (flags & moveflagPromotion)  r.push(pieceQueen); 
            if (flags & moveflagPromotionR) r.push(pieceRook); 
            if (flags & moveflagPromotionB) r.push(pieceBishop); 
            return r;
        }
    }
    return [pieceType];
}

function GenerateCaptureMovesFromTree(moves, from, pieceType, flags, stack, restricted) {
    var r = true;
    var dirs = [-17, -15, 15, 17, -1, 1, -16, 16];
    if (pieceType == pieceBishop) dirs = [-17, -15, 15, 17];
    if (pieceType == pieceRook) dirs = [-1, 1, -16, 16];
    _.each(dirs, function(dir) {
        if (restricted && (restricted == dir)) return;
        var step = GenerateCaptureStep(from, dir, pieceType, flags, stack.length == 0);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        _.each(promoteTypes(pieceType, pos, flags), function(t) {
            stack.push(step);
            Dagaz.AI.MakeStep(step, 0);
            if (GenerateCaptureMovesFromTree(moves, pos, t, flags, stack, -dir)) r = false;
            Dagaz.AI.UnmakeStep();
            stack.pop();
            if ((t > piecePawn) && (t < pieceKing)) {
                pos += dir;
                while (Dagaz.AI.g_board[pos] == pieceEmpty) {
                    step &= ~0xFF00;
                    step |= pos << 8;
                    stack.push(step);
                    Dagaz.AI.MakeStep(step, 0);
                    if (GenerateCaptureMovesFromTree(moves, pos, t, flags, stack, -dir)) r = false;
                    Dagaz.AI.UnmakeStep();
                    stack.pop();
                    pos += dir;
                }
            }
        });
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

function GenerateCaptureMovesFrom(moves, from, flags) {
    var pieceType = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;   
    GenerateCaptureMovesFromTree(moves, from, pieceType, flags, new Array());
}

function GenerateQuietMovesFrom(moves, from, flags) {
    var to; var steps;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
    var row = from & 0xF0;

    if (Dagaz.AI.g_toMove) {
        if (row > 0xB0) {
            for (to = 0x82; to < 0xB0; to++) {
                 if ((Dagaz.AI.g_flags & moveflagClearway) && ((to & 0x0F) == 5)) continue;
                 if (Dagaz.AI.g_board[to] == 0) {
                     steps = new Array();
                     GenerateQuietStep(steps, from, to, piece, 0);
                     moves.push(steps);
                 }
            }
            return;
        }
        if (row < 0x40) {
            for (to = 0x52; to < 0x80; to++) {
                 if ((Dagaz.AI.g_flags & moveflagClearway) && ((to & 0x0F) == 5)) continue;
                 if (Dagaz.AI.g_board[to] == 0) {
                     steps = new Array();
                     GenerateQuietStep(steps, from, to, piece, 0);
                     moves.push(steps);
                 }
            }
        }
    }

    if (!Dagaz.AI.g_toMove) {
        if (row < 0x40) {
            for (to = 0x52; to < 0x80; to++) {
                 if ((Dagaz.AI.g_flags & moveflagClearway) && ((to & 0x0F) == 5)) continue;
                 if (Dagaz.AI.g_board[to] == 0) {
                     steps = new Array();
                     GenerateQuietStep(steps, from, to, piece, 0);
                     moves.push(steps);
                 }
            }
            return;
        }
        if (row > 0xB0) {
            for (to = 0x82; to < 0xB0; to++) {
                 if ((Dagaz.AI.g_flags & moveflagClearway) && ((to & 0x0F) == 5)) continue;
                 if (Dagaz.AI.g_board[to] == 0) {
                     steps = new Array();
                     GenerateQuietStep(steps, from, to, piece, 0);
                     moves.push(steps);
                 }
            }
        }
    }

    if (piece == piecePawn) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, flags);
            moves.push(steps);
            if ((Dagaz.AI.g_flags & moveflagEPC) && ((Dagaz.AI.g_toMove && (row == 0xA0)) || (!Dagaz.AI.g_toMove && (row == 0x50)))) {
                to += inc;
                if (Dagaz.AI.g_board[to] == 0) {
                    steps = new Array();
                    GenerateQuietStep(steps, from, to, piece, 0);
                    moves.push(steps);
                }
            }
        }
        if ((Dagaz.AI.g_toMove && (row < 0x90)) || (!Dagaz.AI.g_toMove && (row > 0x60))) {
            to = from + inc - 1; 
            if (Dagaz.AI.g_board[to] == 0) {
                steps = new Array();
                GenerateQuietStep(steps, from, to, piece, flags);
                moves.push(steps);
            }
            to = from + inc + 1; 
            if (Dagaz.AI.g_board[to] == 0) {
                steps = new Array();
                GenerateQuietStep(steps, from, to, piece, flags);
                moves.push(steps);
            }
        }
        if ((Dagaz.AI.g_toMove && (row < 0x80)) || (!Dagaz.AI.g_toMove && (row > 0x70))) {
            to = from - 1; 
            if (Dagaz.AI.g_board[to] == 0) {
                steps = new Array();
                GenerateQuietStep(steps, from, to, piece, 0);
                moves.push(steps);
            }
            to = from + 1; 
            if (Dagaz.AI.g_board[to] == 0) {
                steps = new Array();
                GenerateQuietStep(steps, from, to, piece, 0);
                moves.push(steps);
            }
        }
    }

    if (piece == pieceKing) {
        to = from - 1; 
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
        to = from + 1; 
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
        to = from - 16; 
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
        to = from + 16;
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
        to = from - 17; 
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
        to = from + 17; 
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
        to = from - 15; 
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
        to = from + 15; 
        if (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
        }
    }

    if ((piece == pieceBishop) || (piece == pieceQueen)) {
        to = from - 17;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to -= 17;
        }
        to = from + 17;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to += 17;
        }
        to = from - 15;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to -= 15;
        }
        to = from + 15;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to += 15;
        }
    }

    if ((piece == pieceRook) || (piece == pieceQueen)) {
        to = from - 16;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to -= 16;
        }
        to = from + 16;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to += 16;
        }
        to = from - 1;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to--;
        }
        to = from + 1;
        while (!CheckReserve(to, piece, flags) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece, 0);
            moves.push(steps);
            to++;
        }
    }
}

})();
