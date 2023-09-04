"use strict";

(function() {

Dagaz.AI.g_maxply         = 15;
Dagaz.AI.g_timeout        = 10000;
Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.AI.Q_SEARCH_LIMIT   = -5;
Dagaz.AI.Q_SEARCH_ARITY   = 2;

Dagaz.AI.PIECE_MASK       = 0x3;
Dagaz.AI.TYPE_MASK        = 0x1;
Dagaz.AI.PLAYERS_MASK     = 0x6;
Dagaz.AI.COUNTER_SIZE     = 5;
Dagaz.AI.TYPE_SIZE        = 1;

Dagaz.AI.colorBlack       = 0x4;
Dagaz.AI.colorWhite       = 0x2;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceNo               = 0x80;

var g_moveUndoStack = new Array();
var materialTable = [0, 1000];

var pieceSquareAdj = new Array(2);

Dagaz.AI.SPEC_POSITIONS  = [
   0x22, 0x24, 0x26, 0x28, 0x2A,
   0x33, 0x35, 0x37, 0x39,
   0x42, 0x44, 0x46, 0x48, 0x4A,
   0x53, 0x55, 0x57, 0x59,
   0x62, 0x64, 0x66, 0x68, 0x6A
];

var allDirections = [1, -1, 16, -16, 17, -17, 15, -15];
var specDirections = [17, -17, 15, -15];

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0,   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,  50,   0,  50,   0,  50,   0,   0,
    0,  50,   0,  50,   0,  50,   0,  50,   0,
    0,   0,  50,   0,  50,   0,  50,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0
], 
[ -20, -10,  10, -10,  10, -10,  10, -10, -20, // pieceMan
  -10,  20,   0,  20,   0,  20,   0,  20, -10,
   10,   0,  20,   0,  20,   0,  20,   0,  10,
  -10,  20,   0,  20,   0,  20,   0,  20, -10,
  -20, -10,  10, -10,  10, -10,  10, -10, -20
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
    var inc, from, to, pieceIdx;
    var result = 0;
    var enemy = color ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var cnt = Dagaz.AI.g_pieceCount[color | pieceMan];
    pieceIdx = (color | pieceMan) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (cnt < 10) {
            result += 10 * pieceSquareAdj[pieceEmpty][from];
        }
        _.each(allDirections, function(dir) {
            if ((_.indexOf(Dagaz.AI.SPEC_POSITIONS, from) < 0) && (_.indexOf(specDirections, dir) >= 0)) return;
            var to = from + dir;
            if (Dagaz.AI.g_board[to] == pieceEmpty) {
                result += 10;
                to += dir;
                while (Dagaz.AI.g_board[to] & enemy) {
                    result += 100;
                    to += dir;
                }
                to = from - dir;
                while (Dagaz.AI.g_board[to] & enemy) {
                    result += 100;
                    to -= dir;
                }
            }
        });
        from = Dagaz.AI.g_pieceList[pieceIdx++];
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

    Dagaz.AI.InitializePieceList();

    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : pieceEmpty;
    Dagaz.AI.player = Dagaz.AI.g_toMove;

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
    var dir = target - to;
    if (_.indexOf(allDirections, dir) >= 0) return dir;
    dir = target - from;
    if (_.indexOf(allDirections, dir) >= 0) return dir;
    return 0;
}

Dagaz.AI.MakeStep = function(move, step) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;
    var piece = Dagaz.AI.g_board[from];

    var c = 0;
    if (target) {
        var inc = getDirection(from, to, target);
        for (var pos = target; ; pos += inc) {
             var captured = Dagaz.AI.g_board[pos];
             if ((captured & enemy) == 0) break;
             if (captured & pieceNo) break;

             var capturedType = captured & Dagaz.AI.PIECE_MASK;
             Dagaz.AI.g_pieceCount[capturedType]--;
             var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
             Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[pos];
             Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
             Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

             Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
             Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][pos];
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

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][from];

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
    Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][to];
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

    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;
    var piece = Dagaz.AI.g_board[to];

    Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    Dagaz.AI.g_board[to] = pieceEmpty;

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;

    if (target) {
        var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
        var inc = getDirection(from, to, target);
        for (var i = 0; i < g_moveUndoStack[Dagaz.AI.g_moveCount].captured; target += inc, i++) {
             if (Dagaz.AI.g_board[target] != pieceEmpty) break;
             Dagaz.AI.g_board[target] = pieceMan | enemy;

             // Restore our piece to the piece list
             var captureType = Dagaz.AI.g_board[target] & Dagaz.AI.PIECE_MASK;
             Dagaz.AI.g_pieceIndex[target] = Dagaz.AI.g_pieceCount[captureType];
             Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = target;
             Dagaz.AI.g_pieceCount[captureType]++;
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
  // Man captures
  var pieceIdx = (Dagaz.AI.g_toMove | pieceMan) << Dagaz.AI.COUNTER_SIZE;
  var from = Dagaz.AI.g_pieceList[pieceIdx++];
  while (from != 0) {
      GenerateCaptureMovesFrom(moves, from);
      from = Dagaz.AI.g_pieceList[pieceIdx++];
  }
}

function GenerateQuietMoves(moves) {
  // Man quiet moves
  var pieceIdx = (Dagaz.AI.g_toMove | pieceMan) << Dagaz.AI.COUNTER_SIZE;
  var from = Dagaz.AI.g_pieceList[pieceIdx++];
  while (from != 0) {
      GenerateQuietMovesFrom(moves, from);
      from = Dagaz.AI.g_pieceList[pieceIdx++];
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

function checkVelo(move) {
  if (Dagaz.AI.veloPlayer === null) return true;
  var cnt = 0;
  for (var pos = 0; pos < 256; pos++) {
      if (Dagaz.AI.g_board[pos] & Dagaz.AI.colorBlack) cnt++;
  }
  if (cnt <= 5) return true;
  var me = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  if (me == Dagaz.AI.colorBlack) {
      if (move.length > 1) return false;
      var target = (move[0] >> 16) & 0xFF;
      return !target;
  } else {
      if (move.length > 1) return true;
      var c = 0;
      var target = (move[0] >> 16) & 0xFF;
      if (!target) return false;
      var to = (move >> 8) & 0xFF;
      var from = move & 0xFF;
      var inc = getDirection(from, to, target);
      var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
      if (inc == 0) return false;
      for (var p = target; ; p += inc) {
           var captured = Dagaz.AI.g_board[p];
           if ((captured & enemy) == 0) break;
           if (captured & pieceNo) break;
           c++;
      }
      return c > 1;
  }
}

function addMove(moves, stack) {
  var move = new Array();
  for (var i = 0; i < stack.length; i++) {
      move.push(stack[i]);
  }
  for (var i = 0; i < moves.length; i++) {
      if (isEq(moves[i], move)) return;
  }
  if (!checkVelo(move)) return;
  moves.push(move);
}

function GenerateCaptureMovesFromTree(moves, from, isReversed, history, stack, restricted) {
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    _.each(allDirections, function(dir) {
         if (restricted && (restricted == dir)) return;
         if ((_.indexOf(Dagaz.AI.SPEC_POSITIONS, from) < 0) && (_.indexOf(specDirections, dir) >= 0)) return;
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
         history.push(to);
         stack.push(step);
         Dagaz.AI.MakeStep(step, 0);
         addMove(moves, stack);
         GenerateCaptureMovesFromTree(moves, to, true, history, stack, dir);
         GenerateCaptureMovesFromTree(moves, to, false, history, stack, dir);
         Dagaz.AI.UnmakeStep();
         stack.pop();
         history.pop();
    });
}

function GenerateCaptureMovesFrom(moves, from) {
  GenerateCaptureMovesFromTree(moves, from, false, [from], []);
  GenerateCaptureMovesFromTree(moves, from, true, [from], []);
}

function GenerateStep(moves, from, to) {
  moves.push([from | (to << 8)]);
}

function GenerateQuietMovesFrom(moves, from) {
   _.each(allDirections, function(dir) {
       if ((_.indexOf(Dagaz.AI.SPEC_POSITIONS, from) < 0) && (_.indexOf(specDirections, dir) >= 0)) return;
       var to = from + dir;
       if (Dagaz.AI.g_board[to] != pieceEmpty) return;
       GenerateStep(moves, from, to);
  });
}

})();
