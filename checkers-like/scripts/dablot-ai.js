"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;

var pieceEmpty            = 0x00;
var pieceMan              = 0x01;
var pieceKing             = 0x02;
var piecePrince           = 0x03;
var pieceNo               = 0x80;

Dagaz.AI.getPieceType = function(c) {
    var piece = 0;
    switch (c) {
        case 'p':
            piece |= pieceMan;
            break;
        case 'b':
            piece |= piecePrince;
            break;
        case 'k':
            piece |= pieceKing;
            break;
    }
    return piece;
}

function GenerateManCaptureMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if ((Dagaz.AI.g_board[pos] & color) && ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) == pieceMan)) {
           GenerateCaptureMovesFrom(moves, pos);
       }
  }
}

function GenerateKingCaptureMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if ((Dagaz.AI.g_board[pos] & color) && ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) == pieceKing)) {
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

function NoKing() {
  var me = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & me) {
           if ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) == pieceKing) return false;
       }
  }
  return true;
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
  if (NoKing()) return moves;
  GenerateManCaptureMoves(moves);
  moves = CheckInvariant(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
  }
  GenerateKingCaptureMoves(moves);
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  GenerateManCaptureMoves(moves);
  GenerateKingCaptureMoves(moves);
  return moves;
}

function GenerateQuietStep(moves, from, to) {
    moves.push(from | (to << 8));
}

function GenerateCaptureStep(from, dir, pieceType) {
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = from + dir;
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    if (pieceType == pieceMan) {
        if ((Dagaz.AI.g_board[captured] & Dagaz.AI.TYPE_MASK) >= pieceKing) return 0;
    }
    if (pieceType == piecePrince) {
        if ((Dagaz.AI.g_board[captured] & Dagaz.AI.TYPE_MASK) == pieceKing) return 0;
    }
    var to = captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    return from | (to << 8) | (captured << 16);
}

function GenerateCaptureMovesFromTree(moves, from, pieceType, stack) {
    var r = true;
    var dirs = [-17, -15, 15, 17];
    if (_.indexOf(Dagaz.AI.SPEC_POSITIONS, +from) >= 0) {
        dirs = [-17, -15, 15, 17, 2, -2, 32, -32];
    }
    _.each(dirs, function(dir) {
        var step = GenerateCaptureStep(from, dir, pieceType);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, pieceType, stack)) r = false;
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
    var pieceType = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;   
    GenerateCaptureMovesFromTree(moves, from, pieceType, new Array());
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;

    to = from + 17; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
    to = from - 17; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
    to = from + 15; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
    to = from - 15; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
    to = from + 2; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
    to = from - 2; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
    to = from + 32; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
    to = from - 32; 
    if (Dagaz.AI.g_board[to] == 0) {
        steps = new Array();
        GenerateQuietStep(steps, from, to, true);
        moves.push(steps);
    }
}

})();
