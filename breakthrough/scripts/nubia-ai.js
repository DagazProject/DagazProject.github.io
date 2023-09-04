"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.AI.g_timeout        = 1000;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceNo               = 0x80;

var g_moveUndoStack = new Array();
var materialTable = [0, 100];

var pieceSquareAdj = new Array(2);
Dagaz.AI.flipTable = new Array(256);

Dagaz.AI.g_inCheck = false;

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,  100,  100,  100,  100,  100,  100,99999, // pieceMan
   10,   10,    0,    0,    0,    0,    0,  100, 
    0,   10,    0,    0,    0,    0,    0,  100, 
   50,   10,    0,    0,    0,    0,    0,  100, 
  100,   50,    0,    0,    0,    0,    0,  100, 
    0,   50,    0,    0,    0,    0,    0,  100, 
   50,   50,   50,   10,   10,   10,   10,  100, 
 -100,   50,    0,  100,   50,    0,   10,    0
]];

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move) {
    var result = FormatSquare(move & 0xFF) + FormatSquare((move >> 8) & 0xFF);
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

function inCheck(color, from) {
    return false;
}

function Mobility(color) {
    var inc, mob, to;
    var result = 0;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var curr = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             if (inCheck(color, from)) {
                 result += 10000;
             }
             inc = 1; mob = 0;
             to = from + inc;
             while (Dagaz.AI.g_board[to] == 0) {
                 mob++;
                 to += inc;
             }
             if ((curr == me) && (Dagaz.AI.g_board[from - inc] & enemy)) mob *= 100;
             result += mob;
             inc = -1; mob = 0;
             to = from + inc;
             while (Dagaz.AI.g_board[to] == 0) {
                 mob++;
                 to += inc;
             }
             if ((curr == me) && (Dagaz.AI.g_board[from - inc] & enemy)) mob *= 100;
             result += mob;
             inc = 16; mob = 0;
             to = from + inc;
             while (Dagaz.AI.g_board[to] == 0) {
                 mob++;
                 to += inc;
             }
             if ((curr == me) && (Dagaz.AI.g_board[from - inc] & enemy)) mob *= 100;
             result += mob;
             inc = -16; mob = 0;
             to = from + inc;
             while (Dagaz.AI.g_board[to] == 0) {
                 mob++;
                 to += inc;
             }
             if ((curr == me) && (Dagaz.AI.g_board[from - inc] & enemy)) mob *= 100;
             result += mob;
         }
    }
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

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {
  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = Dagaz.AI.MakeSquare(row, col);
            Dagaz.AI.flipTable[square] = Dagaz.AI.MakeSquare((Dagaz.Model.HEIGHT - 1) - row, (Dagaz.Model.WIDTH - 1) - col);
       }
  }

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
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
                        piece |= pieceMan;
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

    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_inCheck = false;
    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
            if (!Dagaz.AI.g_toMove && inCheck(Dagaz.AI.colorWhite, i)) Dagaz.AI.g_inCheck = true;
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][Dagaz.AI.flipTable[i]];
            Dagaz.AI.g_baseEval -= materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
            if (Dagaz.AI.g_toMove && inCheck(Dagaz.AI.colorBlack, i)) Dagaz.AI.g_inCheck = true;
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_move50 = 0;

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
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? Dagaz.AI.flipTable[target] : target];
        Dagaz.AI.g_board[target] = pieceEmpty;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[from] : from];

    Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
    Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    Dagaz.AI.g_inCheck = inCheck(Dagaz.AI.g_toMove, to);

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

    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var piece = Dagaz.AI.g_board[to];
    Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    Dagaz.AI.g_board[to] = pieceEmpty;

    if (captured) {
        Dagaz.AI.g_board[target] = captured;
    }
}

function GenerateCaptureMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {           
           GenerateCaptureMovesFrom(moves, pos);
       }
  }
}

function GenerateQuietMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {
           GenerateQuietMovesFrom(moves, pos);
       }
  }
}

function CheckGoal() {
  var pos = Dagaz.AI.g_toMove ? 0x92 : 0x29;
  var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
  return Dagaz.AI.g_board[pos] & enemy;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  if (CheckGoal()) return moves;
  GenerateCaptureMoves(moves);
  GenerateQuietMoves(moves);
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  if (CheckGoal()) return moves;
  GenerateCaptureMoves(moves);
  return moves;
}

function GenerateStep(moves, from, to, captured) {
  moves.push(from | (to << 8) | (captured << 16));
}

function GenerateCaptureMovesFrom(moves, from) {
  var to, target, inc;
  var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
  var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
  if (piece == pieceMan) {
      inc = 1; to = from + inc; target = from - inc;
      if (Dagaz.AI.g_board[target] & enemy) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, target);
              to += inc;
          }
      }
      inc = -1; to = from + inc; target = from - inc;
      if (Dagaz.AI.g_board[target] & enemy) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, target);
              to += inc;
          }
      }
      inc = 16; to = from + inc; target = from - inc;
      if (Dagaz.AI.g_board[target] & enemy) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, target);
              to += inc;
          }
      }
      inc = -16; to = from + inc; target = from - inc;
      if (Dagaz.AI.g_board[target] & enemy) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, target);
              to += inc;
          }
      }
  }
}

function GenerateQuietMovesFrom(moves, from) {
  var to, inc;
  var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
  var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
  if (piece == pieceMan) {
      inc = 1; to = from + inc;
      if ((Dagaz.AI.g_board[from - inc] & enemy) == 0) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, 0);
              to += inc;
          }
      }
      inc = -1; to = from + inc;
      if ((Dagaz.AI.g_board[from - inc] & enemy) == 0) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, 0);
              to += inc;
          }
      }
      inc = 16; to = from + inc;
      if ((Dagaz.AI.g_board[from - inc] & enemy) == 0) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, 0);
              to += inc;
          }
      }
      inc = -16; to = from + inc;
      if ((Dagaz.AI.g_board[from - inc] & enemy) == 0) {
          while (Dagaz.AI.g_board[to] == 0) {
              GenerateStep(moves, from, to, 0);
              to += inc;
          }
      }
  }
}

})();
