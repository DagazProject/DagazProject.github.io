"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 3;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceKing             = 0x02;
var pieceNo               = 0x80;

var moveflagPromotion     = 0x01000000;

const DIR_DELTAS   = [-16, 16, -1, 1, -17, -15, 15, 17, -2, 2];

const DIR_POSITION = [[            // n
                0x34,
                0x44,
    0x52, 0x53, 0x54, 0x55, 0x56,
    0x62, 0x63, 0x64, 0x65, 0x66,
    0x72, 0x73, 0x74, 0x75, 0x76,
    0x82, 0x83, 0x84, 0x85, 0x86,
                0x94,
                0xA4
],[
                0x24,              // s
                0x34,
    0x42, 0x43, 0x44, 0x45, 0x46,
    0x52, 0x53, 0x54, 0x55, 0x56,
    0x62, 0x63, 0x64, 0x65, 0x66,
    0x72, 0x73, 0x74, 0x75, 0x76,
                0x84,
                0x94
],[
                0x34,              // w
          0x43, 0x44, 0x45, 0x46,
          0x53, 0x54, 0x55, 0x56,
          0x63, 0x64, 0x65, 0x66,
          0x74, 0x74, 0x75, 0x76,
          0x83, 0x84, 0x85, 0x86,
                0x94
],[
                0x34,              // e
    0x42, 0x43, 0x44, 0x45,
    0x52, 0x53, 0x54, 0x55,
    0x62, 0x63, 0x64, 0x65,
    0x72, 0x73, 0x74, 0x75,
    0x82, 0x83, 0x84, 0x85,
                0x94
],[
          0x33,                    // nw
                0x44,
          0x53,       0x55,
                0x64,       0x66,
          0x73,       0x75,
                0x84,       0x86,
                      0x95,
                            0xA6
],[
                      0x35,        // ne
                0x44,
          0x53,       0x55,
    0x62,       0x64,
          0x73,       0x75,
    0x82,       0x84,
          0x93,
    0xA2
],[
                            0x26, // sw
                      0x35,
                0x44,       0x46,
          0x53,       0x55,
                0x64,       0x66,
          0x73,       0x75,
                0x84,
          0x93
],[
    0x22,                         // se
          0x33,
    0x42,       0x44,
          0x53,       0x55,
    0x62,       0x64,
          0x73,       0x75,
                0x84,
                      0x95
],[
    0x24, 0x26,                  // ww
    0xA4, 0xA6
],[
    0x22, 0x24,                  // ee
    0xA2, 0xA4
]];

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
],
[   0,   0,   0,   0,   0, // pieceMan
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,  20,   0,  20,   0, 
    0,   0,  40,   0,   0, 
    0,  20,   0,  20,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
],
[   0,   0,   0,   0,   0, // pieceKing
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,  20,   0,  20,   0, 
    0,   0,  40,   0,   0, 
    0,  20,   0,  10,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
]];

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
        if (!Dagaz.AI.g_toMove && (row == 0xA0)) {
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
        if (!Dagaz.AI.g_toMove && (row == 0xA0)) {
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
    _.each(_.range(DIR_DELTAS.length), function(ix) {
        if (isDone) return;
        var dir = DIR_DELTAS[ix];
        if (restricted && (restricted == dir)) return;
        if (_.indexOf(DIR_POSITION[ix], from) < 0) return;
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
    var to; var steps; var dir; var ix;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;

    if (piece == pieceMan) {
        dir = 1; ix = _.indexOf(DIR_DELTAS, dir); to = from + dir;
        if ((ix >= 0) && (_.indexOf(DIR_POSITION[ix], from) >= 0) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
        dir = -1; ix = _.indexOf(DIR_DELTAS, dir); to = from + dir;
        if ((ix >= 0) && (_.indexOf(DIR_POSITION[ix], from) >= 0) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
        dir = 2; ix = _.indexOf(DIR_DELTAS, dir); to = from + dir;
        if ((ix >= 0) && (_.indexOf(DIR_POSITION[ix], from) >= 0) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
        dir = -2; ix = _.indexOf(DIR_DELTAS, dir); to = from + dir;
        if ((ix >= 0) && (_.indexOf(DIR_POSITION[ix], from) >= 0) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
        dir = inc - 1; ix = _.indexOf(DIR_DELTAS, dir); to = from + dir;
        if ((ix >= 0) && (_.indexOf(DIR_POSITION[ix], from) >= 0) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
        dir = inc + 1; ix = _.indexOf(DIR_DELTAS, dir); to = from + dir;
        if ((ix >= 0) && (_.indexOf(DIR_POSITION[ix], from) >= 0) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
        dir = inc; ix = _.indexOf(DIR_DELTAS, dir); to = from + dir;
        if ((ix >= 0) && (_.indexOf(DIR_POSITION[ix], from) >= 0) && (Dagaz.AI.g_board[to] == 0)) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, true);
            moves.push(steps);
        }
    }

    if (piece == pieceKing) {
        for (var ix = 0; ix < DIR_DELTAS.length; ix++) {
             if (_.indexOf(DIR_POSITION[ix], from) < 0) continue;
             var dir = DIR_DELTAS[ix];
             to = from + dir;
             while (Dagaz.AI.g_board[to] == 0) {
                 steps = new Array();
                 GenerateQuietStep(steps, from, to, false);
                 moves.push(steps);
                 to += dir;
             }
        }
    }
}

Dagaz.AI.Mobility = function(color) {
    return 0;
}

})();
