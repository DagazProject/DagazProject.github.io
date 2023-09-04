"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR   = 5;
Dagaz.AI.g_timeout      = 3000;
Dagaz.AI.g_maxply       = 10;

var pieceEmpty          = 0x00;
var pieceMan            = 0x00;
var pieceKing           = 0x10;
var pieceNo             = 0x80;

var moveflagPromotion   = 0x01000000;

Dagaz.AI.materialTable = [100, 10000];

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceMan
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceKing
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0
]];

function Mobility(color) {
    if (Dagaz.AI.isWhite) return 0;
    var result = 0; var to;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var pos = 0; pos < 256; pos++) {
        if (Dagaz.AI.g_board[pos] & me) {
            var player = Dagaz.AI.g_board[pos] & Dagaz.AI.PLAYERS_MASK;
            var inc = (player == Dagaz.AI.colorWhite) ? -16 : 16;
            var ix = Dagaz.AI.g_board[pos] & Dagaz.AI.STACK_MASK;
            if (ix > 0) {
                var f = true;
                Dagaz.AI.iterateStack(ix, function(x) {
                     if (!f) return;
                     if (x & enemy) f = false;
                     result += 100;
                });
            }
            to = pos + (inc - 1);
            if (Dagaz.AI.g_board[to] == pieceEmpty) {
                result += 20;
            } else if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to += inc - 1;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
            to = pos + (inc + 1);
            if (Dagaz.AI.g_board[to] == pieceEmpty) {
                result += 20;
            } else if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to += inc + 1;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
            to = pos - (inc - 1);
            if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to -= inc - 1;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
            to = pos - (inc + 1);
            if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to -= inc + 1;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
            to = pos - inc * 2;
            if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to -= inc * 2;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
            to = pos + inc * 2;
            if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to += inc * 2;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
            to = pos - 2;
            if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to -= 2;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
            to = pos + 2;
            if (Dagaz.AI.g_board[to] & enemy) {
                var pieceType = (Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
                to += 2;
                if (Dagaz.AI.g_board[to] == pieceEmpty) result += Dagaz.AI.materialTable[pieceType] >> 1;
            }
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

Dagaz.AI.ScoreMove = function(move) {
    var score = 0;
    for (var i = 0; i < move.length; i++) {
         var from = move[i] & 0xFF;
         var to = (move[i] >> 8) & 0xFF;
         var target = (move[i] >> 16) & 0xFF;
         var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;
         var piece = Dagaz.AI.g_board[from];
         if (captured != pieceEmpty) {
             var pieceType = piece & Dagaz.AI.TYPE_MASK;
             score += (captured << 5) - pieceType;
         }
         if (move[i] & moveflagPromotion) {
             score += 1000;
         }
    }
    return score;
}

Dagaz.AI.IsHashMoveValid = function(move) {
    if (move.length != 1) return false;

    var from = move[0] & 0xFF;
    var to = (move[0] >> 8) & 0xFF;
    var target = (move[0] >> 16) & 0xFF;
    var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;

    var piece = Dagaz.AI.g_board[from];
    var pieceType = piece & Dagaz.AI.TYPE_MASK;
    if (pieceType < pieceMan || pieceType > pieceKing) return false;

    // Can't move a piece we don't control
    if (Dagaz.AI.g_toMove != (piece & Dagaz.AI.colorWhite)) return false;

    // Can't move to a square that has something of the same color
    if ((captured != pieceEmpty) && (Dagaz.AI.g_toMove == (captured & Dagaz.AI.colorWhite))) return false;

    var dir = to - from;
    if (captured == pieceEmpty) {
        if (pieceType == pieceMan) {
            if ((dir > 17) || (dir < -17)) return false;
            if ((Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) != (dir < 0)) return false;
        }
    } else {
        if ((dir <= 17) && (dir >= -17)) return false;
    }
    return true;
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

function isBad(move) {
  var captured = [];
  for (var i = 0; i < move.length; i++) {
       var pos = (move[i] >> 16) & 0xFF;
       if (_.indexOf(captured, pos) >= 0) return true;
       captured.push(pos);
  }
  return false;
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

function CheckPromotion(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
      if ((moves[i].length > 0) && (moves[i][0] & moveflagPromotion)) result.push(moves[i]);
  }
  return result;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  GenerateCaptureMoves(moves);
  moves = CheckInvariant(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
  }
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  GenerateCaptureMoves(moves);
  moves = CheckInvariant(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
      moves = CheckPromotion(moves);
  }
  return moves;
}

function GenerateQuietStep(moves, from, to, isMan) {
    var flags = 0;
    if (isMan) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == 0xB0)) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x20)) {
            flags = moveflagPromotion;
        }
    }
    moves.push(from | (to << 8) | flags);
}

function GenerateCaptureStep(from, dir, isMan) {
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = from + dir;
    if (!isMan) {
        while (Dagaz.AI.g_board[captured] == pieceEmpty) {
            captured += dir;
        }
    }
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    var flags = 0;
    if (isMan) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == 0xB0)) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x20)) {
            flags = moveflagPromotion;
        }
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateCaptureMovesFromTree(moves, from, isMan, stack, restricted) {
    var r = true;
    _.each([-17, -15, 15, 17, -2, 2, -32, 32], function(dir) {
        if (restricted && (restricted == dir)) return;
        var step = GenerateCaptureStep(from, dir, isMan);
        if (step == 0) return;
        var f = isMan;
        if (step & moveflagPromotion) f = false;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, f, stack, -dir)) r = false;
        Dagaz.AI.UnmakeStep();
        stack.pop();
        if (!f) {
            pos += dir;
            while (Dagaz.AI.g_board[pos] == pieceEmpty) {
                step &= ~0xFF00;
                step |= pos << 8;
                stack.push(step);
                Dagaz.AI.MakeStep(step, 0);
                if (GenerateCaptureMovesFromTree(moves, pos, f, stack, -dir)) r = false;
                Dagaz.AI.UnmakeStep();
                stack.pop();
                pos += dir;
            }
        }
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

function GenerateCaptureMovesFrom(moves, from) {
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;   
    GenerateCaptureMovesFromTree(moves, from, piece == pieceMan, new Array());
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;
    var inc = Dagaz.AI.g_toMove ? -16 : 16;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;

    if (piece == pieceMan) {
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
    }

    if (piece == pieceKing) {
        to = from - 17;
        while (Dagaz.AI.g_board[to] == pieceEmpty) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to -= 17;
        }
        to = from - 15;
        while (Dagaz.AI.g_board[to] == pieceEmpty) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to -= 15;
        }
        to = from + 17;
        while (Dagaz.AI.g_board[to] == pieceEmpty) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to += 17;
        }
        to = from + 15;
        while (Dagaz.AI.g_board[to] == pieceEmpty) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to += 15;
        }
    }
}

})();
