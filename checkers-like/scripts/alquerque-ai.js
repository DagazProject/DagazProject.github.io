"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceNo               = 0x80;

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

function IsPrefix(a, b) {
  if (a.length >= b.length) return false;
  for (var i = 0; i < a.length; i++) {
       if (a[i] != b[i]) return false;
  }
  return true;
}

function CheckInvariant(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
       var f = true;
       for (var j = 0; j < moves.length; j++) {
            if ((i != j) && IsPrefix(moves[i], moves[j])) {
                f = false;
                break;
            }
       }
       if (f) {
           result.push(moves[i]);
       }
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
  return moves;
}

function GenerateQuietStep(moves, from, to) {
    moves.push(from | (to << 8));
}

function GenerateCaptureStep(from, dir) {
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = from + dir;
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    return from | (to << 8) | (captured << 16);
}

function GenerateCaptureMovesFromTree(moves, from, stack) {
    var r = true;
    var dirs = [1, -1, 16, -16];
    if (_.indexOf(Dagaz.AI.SPEC_POSITIONS, +from) >= 0) {
        dirs = [1, -1, 16, -16, -17, -15, 15, 17];
    }
    _.each(dirs, function(dir) {
        var step = GenerateCaptureStep(from, dir);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, stack)) r = false;
        Dagaz.AI.UnmakeStep();
        stack.pop();
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
    GenerateCaptureMovesFromTree(moves, from, new Array());
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;

    to = from - 16; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }

    to = from - 1; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }

    to = +from + 16; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }

    to = +from + 1; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }

    if (_.indexOf(Dagaz.AI.SPEC_POSITIONS, +from) < 0) return;

    to = from - 17; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }

    to = from - 15; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }

    to = +from + 17; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }

    to = +from + 15; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, false);
        moves.push(steps);
    }
}

})();
