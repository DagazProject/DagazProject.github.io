"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 3;
Dagaz.AI.g_maxply         = 20;

Dagaz.AI.PIECE_MASK       = 0xF;
Dagaz.AI.TYPE_MASK        = 0x7;
Dagaz.AI.PLAYERS_MASK     = 0x18;
Dagaz.AI.TYPE_SIZE        = 3;
Dagaz.AI.COUNTER_SIZE     = 4;
Dagaz.AI.TYPE_SIZE        = 3;

Dagaz.AI.colorBlack       = 0x10;
Dagaz.AI.colorWhite       = 0x08;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceNo               = 0x80;

var g_moveUndoStack = new Array();

var materialTable = [0, 100];

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,
    0,   0,   0,   0,
    0,   0,   0,   0
], 
[ -20, -10, -10, -20, // pieceMan
  -10,  20,  20, -10,
  -10,  20,  20, -10,
  -20, -10, -10, -20
]];

var pieceSquareAdj = new Array(3);

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

Dagaz.AI.FormatMove = function(move, color) {
    var result = FormatSquare(move & 0xFF) + '-' + FormatSquare((move >> 8) & 0xFF);
    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var evalAdjust = 0;

    if (Dagaz.AI.g_pieceCount[pieceMan] < 2)
        evalAdjust += 10000;
    if (Dagaz.AI.g_pieceCount[pieceMan | Dagaz.AI.colorWhite] < 2)
        evalAdjust -= 10000;

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

Dagaz.AI.ScoreMove = function(move){
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
    if (pieceType != pieceMan) return false;
    // Can't move a piece we don't control
    if (Dagaz.AI.g_toMove != (ourPiece & Dagaz.AI.colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (Dagaz.AI.g_board[to] != 0 && (Dagaz.AI.g_toMove == (Dagaz.AI.g_board[to] & Dagaz.AI.colorWhite))) return false;
    return IsSquareAttackableFrom(to, from);
}

function IsSquareAttackableFrom(to, from) {
    if (Dagaz.AI.g_board[from] == 0) return false;
    var dir = to - from;
    if (_.indexOf([1, -1, 16, -16], dir) >= 0) {
        return Dagaz.AI.g_board[from] == 0;
    }
    if (_.indexOf([2, -2, 32, -32], dir) >= 0) {
        if ((Dagaz.AI.g_board[to] & Dagaz.AI.PLAYERS_MASK) == (Dagaz.AI.g_board[from] & Dagaz.AI.PLAYERS_MASK)) return false;
        var pos = from + (dir >> 1);
        return (Dagaz.AI.g_board[pos] & Dagaz.AI.PLAYERS_MASK) == (Dagaz.AI.g_board[from] & Dagaz.AI.PLAYERS_MASK);
    }
    return false;
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
  pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceMan]);
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
                    case 'p':
                        piece |= pieceMan;
                        break;
                }
                
                Dagaz.AI.g_board[MakeSquare(row, col)] = piece;
                col++;
            }
        }
    }

    Dagaz.AI.InitializePieceList();

    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : 0;

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

function UndoHistory(baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

Dagaz.AI.MakeMove = function(move) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 

    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = Dagaz.AI.g_board[to];
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceCount[capturedType]--;
        var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
        Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][to];

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

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][from];

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
    Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][to];
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

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

    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;

    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;

    var piece = Dagaz.AI.g_board[to];
    Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
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

Dagaz.AI.GenerateCaptureMoves = function(moves) {
  if (_.isUndefined(moves)) {
      moves = [];
  }
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {
           GenerateCaptureMovesFrom(moves, pos);
       }
  }
  return moves;
}

Dagaz.AI.GenerateQuietMoves = function(moves) {
  if (_.isUndefined(moves)) {
      moves = [];
  }
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {
           GenerateQuietMovesFrom(moves, pos);
       }
  }
  return moves;
}

function GenerateMove(moves, from, to) {
    moves.push(from | (to << 8));
}

function GenerateCaptureMovesFrom(moves, from) {
    var to;
    var me = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    to = from - 16; if (Dagaz.AI.g_board[to] & me) {
        to -= 16;
        if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
    }
    to = from + 16; if (Dagaz.AI.g_board[to] & me) {
        to += 16;
        if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
    }
    to = from - 1; if (Dagaz.AI.g_board[to] & me) {
        to--;
        if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
    }
    to = from + 1; if (Dagaz.AI.g_board[to] & me) {
        to++;
        if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
    }
}

function GenerateQuietMovesFrom(moves, from) {
    var to;
    to = from - 16; if (Dagaz.AI.g_board[to] == pieceEmpty) GenerateMove(moves, from, to);
    to = from + 16; if (Dagaz.AI.g_board[to] == pieceEmpty) GenerateMove(moves, from, to);
    to = from - 1;  if (Dagaz.AI.g_board[to] == pieceEmpty) GenerateMove(moves, from, to);
    to = from + 1;  if (Dagaz.AI.g_board[to] == pieceEmpty) GenerateMove(moves, from, to);
}

Dagaz.AI.GenerateAllMoves = function(moves) {
  if (_.isUndefined(moves)) {
      moves = [];
  }
  Dagaz.AI.GenerateCaptureMoves(moves);
  Dagaz.AI.GenerateQuietMoves(moves);
  return moves;
}

Dagaz.AI.See = function(move) {
  return true;
}

function Mobility(color) {
    var mob, from, to, pieceIdx;
    var result = 0;
    var inc = color == Dagaz.AI.colorWhite ? -16 : 16;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

    // Man mobility
    mob = 0;
    pieceIdx = (color | pieceMan) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 16;
        if (Dagaz.AI.g_board[to] == pieceEmpty) {
            mob++;
        } else if (Dagaz.AI.g_board[to] & me) {
            to -= 16; if (Dagaz.AI.g_board[to] & enemy) mob += 10;
        }
        to = from + 16;
        if (Dagaz.AI.g_board[to] == pieceEmpty) {
            mob++;
        } else if (Dagaz.AI.g_board[to] & me) {
            to += 16; if (Dagaz.AI.g_board[to] & enemy) mob += 10;
        }
        to = from - 1;
        if (Dagaz.AI.g_board[to] == pieceEmpty) {
            mob++;
        } else if (Dagaz.AI.g_board[to] & me) {
            to--; if (Dagaz.AI.g_board[to] & enemy) mob += 10;
        }
        to = from + 1;
        if (Dagaz.AI.g_board[to] == pieceEmpty) {
            mob++;
        } else if (Dagaz.AI.g_board[to] & me) {
            to++; if (Dagaz.AI.g_board[to] & enemy) mob += 10;
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 10 * mob;
    return result;
}

})();
