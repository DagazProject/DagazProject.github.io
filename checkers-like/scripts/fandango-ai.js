"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceKing             = 0x02;
var pieceNo               = 0x80;

var moveflagPromotion     = 0x01000000;

var g_moveUndoStack = new Array();
var materialTable = [0, 1000, 3000];

var pieceSquareAdj = new Array(2);
Dagaz.AI.flipTable = new Array(256);

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0
], 
[   0,   0,   0,   0,   0,   0,   0,   0, // pieceMan
   50,  55,  40,  40,  40,  40,  55,  50,
   40,  45,  30,  30,  30,  30,  45,  40,
   30,  35,  20,  20,  20,  20,  35,  30,
   20,  25,  10,  10,  10,  10,  25,  20,
   10,  15,   0,   0,   0,   0,  15,  10,
    0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0
], 
[   0,   0,   0,   0,   0,   0,   0,   0, // pieceKing
    0,  50,  50,  50,  50,  50,  50,   0,
    0,  50,  70,  70,  70,  70,  50,   0,
    0,  50,  70, 100, 100,  70,  50,   0,
    0,  50,  70, 100, 100,  70,  50,   0,
    0,  50,  70,  70,  70,  70,  50,   0,
    0,  50,  50,  50,  50,  50,  50,   0,
    0,   0,   0,   0,   0,   0,   0,   0
]];

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move) {
    var result = null;
    for (var i = 0; i < move.length; i++) {
        if (result === null) {
            result = Dagaz.AI.FormatSquare(move[i] & 0xFF);
        }
        result = result + Dagaz.AI.FormatSquare((move[i] >> 8) & 0xFF);
    }
    var capturing = '';
    for (var i = 0; i < move.length; i++) {
        var target = (move[i] >> 16) & 0xFF;
        if (target) {
            capturing = capturing + Dagaz.AI.FormatSquare(target);
        }
    }
    if (capturing != '') {
        result = result + 'x' + capturing;
    }
    return result;
}

Dagaz.AI.QScoreMove = function(move) {
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var r = 1;
    for (var i = 0; i < move.length; i++) {
        var to = (move[i] >> 8) & 0xFF;
        var from = move[i] & 0xFF;
        var target = (move[i] >> 16) & 0xFF;
        if (!target) continue;
        var inc = getDirection(from, to, target);
        while (Dagaz.AI.g_board[target] & enemy) {
            target += inc;
            r++;
        }
    }
    return r;
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

function Mobility(color) {
    var inc, mob, to;
    var result = 0; var cnt = 0;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & Dagaz.AI.PLAYERS_MASK) {
             result += (Dagaz.AI.g_board[from] & enemy) ? -pieceSquareAdj[pieceEmpty][from] : pieceSquareAdj[pieceEmpty][from];
             cnt++;
         }
    }
    if (cnt > 10) result = 0;
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
  pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceMan]);
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
            } else {
                var isBlack = c >= 'a' && c <= 'z';
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= pieceMan;
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

    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'b' ? Dagaz.AI.colorWhite : pieceEmpty;

    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][Dagaz.AI.flipTable[i]];
            Dagaz.AI.g_baseEval -= materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_move50 = 0;

    return '';
}

function UndoHistory(move, step, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.move = move;
    this.step = step;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

function getDirection(from, to, target) {
    var allDirections = [1, -1, 16, -16, 17, -17, 15, -15];
    var dir = target - to;
    if (_.indexOf(allDirections, dir) >= 0) return dir;
    dir = target - from;
    if (_.indexOf(allDirections, dir) >= 0) return dir;
    return 0;
}

Dagaz.AI.MakeStep = function(move, step) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var piece = Dagaz.AI.g_board[from];

    var c = 0;
    if (target) {
        var inc = getDirection(from, to, target);
        for (var pos = target; ; pos += inc) {
             var captured = Dagaz.AI.g_board[pos];
             if ((captured & enemy) == 0) break;
             if (captured & pieceNo) break;

             var capturedType = captured & Dagaz.AI.PIECE_MASK;
             Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
             Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? Dagaz.AI.flipTable[pos] : pos];
             Dagaz.AI.g_board[pos] = pieceEmpty;

             Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[pos][capturedType];
             Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[pos][capturedType];

             c++;
        }
    }

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(move, step, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, c);
    Dagaz.AI.g_moveCount++;

    if (c) Dagaz.AI.g_move50 = 0;

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[from] : from];

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        newPiece |= pieceKing;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];

        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
        Dagaz.AI.g_baseEval -= materialTable[pieceMan];
        Dagaz.AI.g_baseEval += materialTable[newPiece & Dagaz.AI.TYPE_MASK];
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return target;
}

Dagaz.AI.UnmakeStep = function() {
    Dagaz.AI.g_moveCount--;
    var move = g_moveUndoStack[Dagaz.AI.g_moveCount].move;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;

    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var piece = Dagaz.AI.g_board[to];

    if (flags & moveflagPromotion) {
        piece = (Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK)) | pieceMan;
        Dagaz.AI.g_board[from] = piece;
    } else {
        Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    }
    Dagaz.AI.g_board[to] = pieceEmpty;

    if (target) {
        var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
        var inc = getDirection(from, to, target);
        for (var i = 0; i < g_moveUndoStack[Dagaz.AI.g_moveCount].captured; target += inc, i++) {
             if (Dagaz.AI.g_board[target] != pieceEmpty) break;
             Dagaz.AI.g_board[target] = pieceMan | enemy;
        }
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

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  GenerateCaptureMoves(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
  }
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  GenerateCaptureMoves(moves);
  return moves;
}

function isEq(a, b) {
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
  }
  return true;
}

function addMove(moves, stack) {
  var move = new Array();
  for (var i = 0; i < stack.length; i++) {
      move.push(stack[i]);
  }
  for (var i = 0; i < moves.length; i++) {
      if (isEq(moves[i], move)) return;
  }
  moves.push(move);
}

function GenerateCaptureMovesFromTree(moves, from, isReversed, history, stack, isMan, restricted) {
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var promoted = false;
    var allDirections = [1, -1, 16, -16, 17, -17, 15, -15];
    if (isMan) {
        allDirections = [1, -1, inc, inc - 1, inc + 1];
    }
    _.each(allDirections, function(dir) {
         if (restricted && (restricted == dir)) return;
         var to = from + dir;
         if (_.indexOf(history, to) >= 0) return;
         if (Dagaz.AI.g_board[to] != pieceEmpty) return;
         var target = to + dir;
         if (isReversed) {
             target = from - dir;
         }
         if ((Dagaz.AI.g_board[target] & enemy) == 0) return;
         if (Dagaz.AI.g_board[target] & pieceNo) return;
         var step = from | (to << 8) | (target << 16);
         if (isMan) {
            var row = to & 0xF0;
            if (!Dagaz.AI.g_toMove && (row == 0x90)) {
                step |= moveflagPromotion;
                promoted = true;
            }
            if (Dagaz.AI.g_toMove && (row == 0x20)) {
                step |= moveflagPromotion;
                promoted = true;
            }
         }
         history.push(to);
         stack.push(step);
         Dagaz.AI.MakeStep(step, 0);
         addMove(moves, stack);
         if (!promoted) {
             GenerateCaptureMovesFromTree(moves, to, true, history, stack, isMan, dir);
             GenerateCaptureMovesFromTree(moves, to, false, history, stack, isMan, dir);
         }
         Dagaz.AI.UnmakeStep();
         stack.pop();
         history.pop();
    });
}

function GenerateCaptureMovesFrom(moves, from) {
  var pieceType = Dagaz.AI.g_board[from] & 0x0F;
  GenerateCaptureMovesFromTree(moves, from, false, [from], [], pieceType == pieceMan);
  GenerateCaptureMovesFromTree(moves, from, true, [from], [], pieceType == pieceMan);
}

function GenerateStep(moves, from, to, isMan) {
  var flags = 0;
  if (isMan) {
      var row = to & 0xF0;
      if (!Dagaz.AI.g_toMove && (row == 0x90)) {
          flags = moveflagPromotion;
      }
      if (Dagaz.AI.g_toMove && (row == 0x20)) {
          flags = moveflagPromotion;
      }
  }
  moves.push([from | (to << 8) | flags]);
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;

    if (piece == pieceMan) {
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateStep(steps, from, to, true);
            moves.push(steps);
        }
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateStep(steps, from, to, true);
            moves.push(steps);
        }
    }

    if (piece == pieceKing) {
       _.each([1, -1, 16, -16, 17, -17, 15, -15], function(dir) {
           var to = from + dir;
           if (Dagaz.AI.g_board[to] != pieceEmpty) return;
           GenerateStep(moves, from, to);
      });
    }
}

})();
