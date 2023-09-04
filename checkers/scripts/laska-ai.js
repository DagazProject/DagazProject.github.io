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

Dagaz.AI.materialTable = [100, 5000];

Dagaz.AI.pieceAdj = [
[   0,    0,   0,   0,   0,   0,    0, // pieceMan
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0
], 
[   0,    0,   0,   0,   0,   0,    0, // pieceKing
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0, 
    0,    0,   0,   0,   0,   0,    0
]];

function Mobility(color) {
    var mob, to, pos;
    var result = 0;
    var inc = color == Dagaz.AI.colorWhite ? -16 : 16;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             if (piece == pieceMan) {
                 mob = 0;
                 to = from + inc - 1; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) {
                     pos = to - inc + 1;
                     if (Dagaz.AI.g_board[pos] != 0) {
                         mob += 4;
                         to += inc - 1;
                         if (Dagaz.AI.g_board[to] == 0) mob += 4;
                     }
                 }
                 to = from + inc + 1; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) {
                     pos = to - inc - 1;
                     if (Dagaz.AI.g_board[pos] != 0) {
                         mob += 4;
                         to += inc + 1;
                         if (Dagaz.AI.g_board[to] == 0) mob += 4;
                     }
                 }
                 to = from - inc - 1;
                 if (Dagaz.AI.g_board[to] & enemy) mob++;
                 to = from - inc + 1;
                 if (Dagaz.AI.g_board[to] & enemy) mob++;
                 to = from + (inc * 2);
                 while (Dagaz.AI.g_board[to] == 0) to += inc * 2;
                 if (Dagaz.AI.g_board[to] & enemy) mob += 4;
                 result += 10 * mob;
             }
             if (piece == pieceKing) {
                 mob = -2;
                 to = from - 17; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from - 15; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 17; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 15; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 32; if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 to = from - 32; if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 to = from + 2;  if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 to = from - 2;  if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 result += 50 * mob;
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
       if (isBad(moves[i])) f = false;
       for (var j = 0; j < moves.length; j++) {
            if (!f) break;
            if ((i != j) && IsPrefix(moves[i], moves[j])) f = false;
       }
       if (f) {
           result.push(moves[i]);
       }
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
        if (!Dagaz.AI.g_toMove && (row == 0x80)) {
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
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    var flags = 0;
    if (isMan) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == 0x80)) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x20)) {
            flags = moveflagPromotion;
        }
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateCaptureMovesFromTree(moves, from, isMan, stack, isDone) {
    var r = true;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var dirs = [-17, -15, 15, 17];
    if (isMan) dirs = [inc - 1, inc + 1];
    _.each(dirs, function(dir) {
        if (isDone) return;
        var step = GenerateCaptureStep(from, dir, isMan);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, isMan, stack, step & moveflagPromotion)) r = false;
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
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
        }
        to = from + 17; 
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
        to = from + 15; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, false);
            moves.push(steps);
        }
    }
}

})();
