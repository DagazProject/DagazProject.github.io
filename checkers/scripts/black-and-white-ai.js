"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 3;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceKing             = 0x02;
var pieceNo               = 0x80;

var moveflagPromotion     = 0x01000000;

Dagaz.AI.pieceAdj = [
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceEmpty
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0
], 
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceMan
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0
], 
[   0,    0,   0,   0,   0,   0,    0,    0, // pieceKing
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0
]];

function CheckPromotion(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
      if ((moves[i].length > 0) && (moves[i][0] & moveflagPromotion)) result.push(moves[i]);
  }
  return result;
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
        if (!Dagaz.AI.g_toMove && (row == 0x90)) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x20)) {
            flags = moveflagPromotion;
        }
    }
    moves.push(from | (to << 8) | flags);
}

function GenerateCaptureStep(from, dir, isMan) {
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
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
        if (!Dagaz.AI.g_toMove && (row == 0x90)) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x20)) {
            flags = moveflagPromotion;
        }
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateCaptureMovesFromTree(moves, from, isMan, stack, restricted, isDone) {
    var r = true;
    _.each([-1, 1, -16, 16], function(dir) {
        if (isDone) return;
        if (restricted && (restricted == dir)) return;
        var step = GenerateCaptureStep(from, dir, isMan);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, isMan, stack, -dir, step & moveflagPromotion)) r = false;
        Dagaz.AI.UnmakeStep();
        stack.pop();
        if (!isMan) {
            pos += dir;
            while (Dagaz.AI.g_board[pos] == pieceEmpty) {
                step &= ~0xFF00;
                step |= pos << 8;
                stack.push(step);
                Dagaz.AI.MakeStep(step, 0);
                if (GenerateCaptureMovesFromTree(moves, pos, isMan, stack, -dir)) r = false;
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
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
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
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to -= 17;
        }
        to = from - 15;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to -= 15;
        }
        to = from + 17;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to += 17;
        }
        to = from + 15;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
            to += 15;
        }
    }
}

Dagaz.AI.Mobility = function(color) {
    var mob, to;
    var result = 0;
    var inc = color == Dagaz.AI.colorWhite ? -16 : 16;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             if (piece == pieceMan) {
                 mob = 0;
                 to = from + inc; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 1; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from - 1; if (Dagaz.AI.g_board[to] == 0) mob++;
                 result += 10 * mob;
             }
             if (piece == pieceKing) {
                 mob = -2;
                 to = from - 1;  while (Dagaz.AI.g_board[to] == 0) {to--; mob++;}
                 to = from - 16; while (Dagaz.AI.g_board[to] == 0) {to -= 16; mob++;}
                 to = from + 1;  while (Dagaz.AI.g_board[to] == 0) {to++; mob++;}
                 to = from + 16; while (Dagaz.AI.g_board[to] == 0) {to += 16; mob++;}
                 result += 50 * mob;
             }
         }
    }
    return result;
}

})();
