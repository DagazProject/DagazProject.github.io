(function() {

Dagaz.AI.AI_FRAME     = 1500;
Dagaz.AI.REP_DEEP     = 30;
Dagaz.AI.MAX_QS_LEVEL = 4;
Dagaz.AI.MAX_AB_VARS  = 100;
Dagaz.AI.MAX_QS_VARS  = 10;
Dagaz.AI.STALEMATE    = -1;

var penalty = [
  [   0, 100,-200,9000,-200, 100,   0,
      0,   0, 100,-200, 100,   0,   0,
      0,   0,   0,   0,   0,   0,   0,
     10, 300, 300,   0, 300, 300,  10,
     50, 400, 400,  10, 400, 400,  50,
     50, 500, 500,  50, 500, 500,  50,
      0,  50,  50,   0,  50,  50,   0,
      0,   0,   0,-500,   0,   0,   0,
      0,   0,-500,   0,-500,   0,   0 ], // Rat
  [ 100, 400,-100,9000,-100, 400, 100,
    200, 300, 500,-100, 500, 300, 200,
    250, 250, 300, 300, 300, 250, 250,
    200,   0,   0, 250,   0,   0, 200,
    150,   0,   0, 200,   0,   0, 150,
    100,   0,   0, 150,   0,   0, 100,
     50,  50,  50, 100,  50,  50,  50,
    -10, -50,-100,-500,-100, -50, -10,
    -50,-100,-500,   0,-500,-100, -50 ], // Cat
  [ 100, 400,-200,9000,-200, 400, 100,
    200, 300, 500,-200, 500, 300, 200,
    250, 250, 300, 300, 300, 250, 250,
    200,   0,   0, 250,   0,   0, 200,
    150,   0,   0, 200,   0,   0, 150,
    100,   0,   0, 150,   0,   0, 100,
     50,  50,  50, 100,  50,  50,  50,
    -10, -50,-100,-500,-100, -50, -10,
    -50,-100,-500,   0,-500,-100, -50 ], // Dog
  [ 100, 400,-300,9000,-300, 400, 100,
    200, 300, 500,-300, 500, 300, 200,
    250, 250, 300, 300, 300, 250, 250,
    200,   0,   0, 250,   0,   0, 200,
    150,   0,   0, 200,   0,   0, 150,
    100,   0,   0, 150,   0,   0, 100,
     50,  50,  50, 100,  50,  50,  50,
    -10, -50,-100,-500,-100, -50, -10,
    -50,-100,-500,   0,-500,-100, -50 ], // Fox
  [ 100, 400,-400,9000,-400, 400, 100,
    200, 300, 500,-400, 500, 300, 200,
    250, 250, 300, 300, 300, 250, 250,
    200,   0,   0, 250,   0,   0, 200,
    150,   0,   0, 200,   0,   0, 150,
    100,   0,   0, 150,   0,   0, 100,
     50,  50,  50, 100,  50,  50,  50,
    -10, -50,-100,-500,-100, -50, -10,
    -50,-100,-500,   0,-500,-100, -50 ], // Panther
  [ 300, 400,-500,9000,-500, 400, 300,
    300, 350, 500,-500, 500, 350, 300,
    250, 300, 300, 300, 300, 300, 250,
    200,   0,   0, 250,   0,   0, 200,
    150,   0,   0, 200,   0,   0, 150,
    100,   0,   0, 150,   0,   0, 100,
     50, 200, 200, 100, 200, 200,  50,
      0,   0,-100,-500,-100,   0,   0,
      0,-100,-500,   0,-500,-100,   0 ], // Tiger
  [ 300, 400,-600,9000,-600, 400, 300,
    300, 350, 500,-600, 500, 350, 300,
    250, 300, 300, 300, 300, 300, 250,
    200,   0,   0, 250,   0,   0, 200,
    150,   0,   0, 200,   0,   0, 150,
    100,   0,   0, 150,   0,   0, 100,
     50, 200, 200, 100, 200, 200,  50,
      0,   0,-100,-500,-100,   0,   0,
      0,-100,-500,   0,-500,-100,   0 ], // Lion
  [  30, 100,-700,9000,-700, 100,  30,
     30,  50, 100,-700, 100,  50,  30,
     10,  30,  50, 100,  50,  30,  10,
    -70,   0,   0, -60,   0,   0, -60,
    -60,   0,   0, -50,   0,   0, -60,
    -50,   0,   0, 100,   0,   0, -50,
    -10,  50, 100, 500, 100,  50, -10,
    -10, 100, 500,-500, 500, 100, -10,
    -10, 500,-500,   0,-500, 500, -10 ]  // Elephant
];

Dagaz.AI.getPrice = function(design, piece, pos) {
  var r = design.price[piece.type];
  if (piece.player == 1) {
      r += penalty[piece.type][pos];
  } else {
      r += penalty[piece.type][62 - pos];
  }
  return r;
}

Dagaz.AI.isMajorPiece = function(type) {
  return true;
}

Dagaz.AI.see = function(design, board, move) {
  return true;
}

Dagaz.AI.inCheck = function(design, board) {
  return false;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r += Dagaz.AI.getPrice(design, piece, pos);
      }
  }
  return r;
}

var checkAttacked = function(design, board, piece, pos, dir) {
  var b = piece.getValue(0);
  if (b === null) return false;
  var p = design.navigate(piece.player, pos, dir);
  if (p === null) return false;
  var enemy = board.getPiece(p);
  if (enemy === null) return false;
  if (enemy.player == piece.player) return false;
  var a = enemy.getValue(0);
  if (a === null) return false;
  if ((a == 1) && (b == 8)) return true;
  if (Dagaz.AI.strictMode) {
      if ((a == 8) && (b == 1)) return false;
  }
  return a >= b;
}

var notDefended = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return true;
  var piece = board.getPiece(p);
  if (piece === null) return true;
  return piece.player == player;
}

var checkStep = function(design, board, player, pos, dir, type) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return piece.type == type;
}

var checkSlide = function(design, board, player, pos, dir, types) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (!design.inZone(1, player, p)) {
         var piece = board.getPiece(p);
         if (piece === null) return false;
         if (piece.player == player) return false;
         return _.indexOf(types, +piece.type) >= 0;
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

Dagaz.AI.eval = function(design, params, board, player) {
  if (_.isUndefined(board.completeEval)) {
      board.completeEval = 0;
      _.each(design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if (piece === null) return;
           var v = Dagaz.AI.getPrice(design, piece, pos);
           if (design.inZone(0, piece.player, pos)) {
               if (piece.player == board.player) {
                   v += 5000;
               } else if (notDefended(design, board, piece.player, pos, 0) &&
                   notDefended(design, board, piece.player, pos, 1) && 
                   notDefended(design, board, piece.player, pos, 2)) {
                   v += 3000;
               }
           }
           if (piece.type == 0) {
               if (!design.inZone(1, board.player, pos)) {
                   if (Dagaz.AI.strictMode && checkStep(design, board, piece.player, pos, 3, 7)) v += 1000;
               } else {
                   if (checkSlide(design, board, piece.player, pos, 0, [4, 5, 6]) ||
                       checkSlide(design, board, piece.player, pos, 1, [4, 5, 6]) ||
                       checkSlide(design, board, piece.player, pos, 3, [5, 6])) {
                       v += 500;
                   }
               }
           }
           if (checkAttacked(design, board, piece, pos, 0) ||
               checkAttacked(design, board, piece, pos, 1) ||
               checkAttacked(design, board, piece, pos, 2) ||
               checkAttacked(design, board, piece, pos, 3)) {
               v = (v / 2) | 0;
           }
           if (piece.player == board.player) {
               board.completeEval += v;
           } else {
               board.completeEval -= v;
           }
      });
  }
  if (board.player == player) {
      return board.completeEval;
  } else {
      return -board.completeEval;
  }
}

})();
