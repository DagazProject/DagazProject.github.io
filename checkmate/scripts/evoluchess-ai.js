(function() {

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.REP_DEEP     = 30;
Dagaz.AI.MAX_QS_LEVEL = 3;
Dagaz.AI.MAX_AB_VARS  = 100;
Dagaz.AI.MAX_QS_VARS  = 10;
Dagaz.AI.STALEMATE    = 0;

var penalty = [
  [   0,   0,   0,   0,   0,   0,   0,   0,   // King
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0 ],
  [   0,   0,   0,   0,   0,   0,   0,   0,    // Pawn
    -25, 105, 135, 270, 270, 135, 105, -25,
    -80,   0,  30, 176, 176,  30,   0, -80,
    -85,  -5,  25, 175, 175,  25,  -5, -85,
    -90, -10,  20, 125, 125,  20, -10, -90,
    -95, -15,  15,  75,  75,  15, -15, -95, 
   -100, -20,  10,  70,  70,  10, -20,-100, 
      0,   0,   0,   0,   0,   0,   0,   0 ],  
  [ -60, -30, -10,  20,  20, -10, -30, -60,   // Rook
     40,  70,  90, 120, 120,  90,  70,  40,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60 ],
  [-200,-100, -50, -50, -50, -50,-100,-200,   //  Knignt
   -100,   0,   0,   0,   0,   0,   0,-100,
    -50,   0,  60,  60,  60,  60,   0, -50,
    -50,   0,  30,  60,  60,  30,   0, -50,
    -50,   0,  30,  60,  60,  30,   0, -50,
    -50,   0,  30,  30,  30,  30,   0, -50,
   -100,   0,   0,   0,   0,   0,   0,-100,
   -200, -50, -25, -25, -25, -25, -50,-200 ],
  [ -50, -50, -25, -10, -10, -25, -50, -50,   // Bishop
    -50, -25, -10,   0,   0, -10, -25, -50,
    -25, -10,   0,  25,  25,   0, -10, -25,
    -10,   0,  25,  40,  40,  25,   0, -10,
    -10,   0,  25,  40,  40,  25,   0, -10,
    -25, -10,   0,  25,  25,   0, -10, -25,
    -50, -25, -10,   0,   0, -10, -25, -50,
    -50, -50, -25, -10, -10, -25, -50, -50 ],
  [   0,   0,   0,   0,   0,   0,   0,   0,   // Queen
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0 ],
  [   0,   0,   0,   0,   0,   0,   0,   0,   // Wall
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0 ]
];

Dagaz.AI.getPrice = function(design, piece, pos) {
  if (pos > 63) return 0;
  var r = design.price[piece.type];
  if (piece.player == 1) {
      r += penalty[piece.type][pos];
  } else {
      r += penalty[piece.type][63 - pos];
  }
  return r;
}

Dagaz.AI.isMajorPiece = function(type) {
  if (type == 0) return false; // King
  if (type == 1) return false; // Pawn
  return true;
}

Dagaz.AI.isRepDraw = function(board) {
  var z = board.zSign;
  for (var i = 0; i < Dagaz.AI.REP_DEEP; i++) {
       if (board.parent === null) return false;
       var pos = Dagaz.AI.getTarget(board.move);
       board = board.parent;
       if (board.zSign == z) return true;
       if (pos === null) continue;
       if (board.getPiece(pos) !== null) return false;
  }
  return true;
}

var checkStep = function(design, board, player, pos, price, dir, types) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (_.indexOf(types, +piece.type) < 0) return false;
  if (!_.isUndefined(price)) {
      if (isAttacked(design, board, piece.player, p)) return false;
      if (Dagaz.AI.getPrice(design, piece, p) > price) return false;
  }
  return true;
}

var checkSlide = function(design, board, player, pos, price, dir, types) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if  (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  if (_.indexOf(types, +piece.type) < 0) return false;
  if (!_.isUndefined(price)) {
      if (isAttacked(design, board, piece.player, p)) return false;
      if (Dagaz.AI.getPrice(design, piece, p) > price) return false;
  }
  return true;
}

var checkJump = function(design, board, player, pos, price, d, o, type) {
  var p = design.navigate(player, pos, d);
  if  (p === null) return false;
  p = design.navigate(player, p, o);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type != type) return false;
  if (!_.isUndefined(price)) {
      if (isAttacked(design, board, piece.player, p)) return false;
      if (Dagaz.AI.getPrice(design, piece, p) > price) return false;
  }
  return true;
}

var checkWall = function(design, board, player, pos, d, o) {
  var p = design.navigate(player, pos, d);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type != 6) return false;
  p = design.navigate(player, pos, o);
  return p === null;
}

var checkOpposite = function(design, board, player, pos) {
  var p = design.navigate(player, pos, 7); // n
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return false;
          return piece.type == 0;
      }
      p = design.navigate(player, p, 7); // n
  }
  return false;
}

var checkShoot = function(design, board, player, pos, type, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != player) return 0;
  if (piece.type != type) return 0;
  p = design.navigate(player, p, dir);
  while (p !== null) {
      piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return 0;
          return Dagaz.AI.getPrice(design, piece, p);
      }
      p = design.navigate(player, p, dir);
  }
  return 0;
}

var isAttacked = function(design, board, player, pos, price) {
return checkStep(design, board, board.player, pos, price, 5, [0, 1])  || // ne - King, Pawn
       checkStep(design, board, board.player, pos, price, 6, [0, 1])  || // nw - King, Pawn
       checkStep(design, board, board.player, pos, price, 4, [0])     || // w  - King
       checkStep(design, board, board.player, pos, price, 3, [0])     || // e  - King
       checkStep(design, board, board.player, pos, price, 1, [0])     || // s  - King
       checkStep(design, board, board.player, pos, price, 7, [0])     || // n  - King
       checkStep(design, board, board.player, pos, price, 0, [0])     || // se - King
       checkStep(design, board, board.player, pos, price, 2, [0])     || // sw - King
       checkSlide(design, board, board.player, pos, price, 4, [2, 5]) || // w  - Rook, Queen
       checkSlide(design, board, board.player, pos, price, 3, [2, 5]) || // e  - Rook, Queen
       checkSlide(design, board, board.player, pos, price, 1, [2, 5]) || // s  - Rook, Queen
       checkSlide(design, board, board.player, pos, price, 7, [2, 5]) || // n  - Rook, Queen
       checkSlide(design, board, board.player, pos, price, 5, [4, 5]) || // ne - Bishop, Queen
       checkSlide(design, board, board.player, pos, price, 0, [4, 5]) || // se - Bishop, Queen
       checkSlide(design, board, board.player, pos, price, 2, [4, 5]) || // sw - Bishop, Queen
       checkSlide(design, board, board.player, pos, price, 6, [4, 5]) || // nw - Bishop, Queen
       checkJump(design, board, board.player, pos, price, 4, 2, 3)    || // w sw - Knight
       checkJump(design, board, board.player, pos, price, 4, 6, 3)    || // w nw - Knight
       checkJump(design, board, board.player, pos, price, 3, 5, 3)    || // e ne - Knight
       checkJump(design, board, board.player, pos, price, 3, 0, 3)    || // e se - Knight
       checkJump(design, board, board.player, pos, price, 1, 0, 3)    || // s se - Knight
       checkJump(design, board, board.player, pos, price, 1, 2, 3)    || // s sw - Knight
       checkJump(design, board, board.player, pos, price, 7, 5, 3)    || // n ne - Knight
       checkJump(design, board, board.player, pos, price, 7, 6, 3)    || // n nw - Knight
       checkWall(design, board, board.player, pos, 1, 7)       || // s n
       checkWall(design, board, board.player, pos, 3, 4)       || // e w
       checkWall(design, board, board.player, pos, 4, 3)       || // w e
       checkWall(design, board, board.player, pos, 7, 1);         // n s
}

// TODO: Redesign
// +opposite
Dagaz.AI.see = function(design, board, move) {
  if (!move.isSimpleMove()) return false;
  var pos = move.actions[0][0][0];
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  if (piece.type == 0) return true;
  pos = move.actions[0][1][0];
  piece = board.getPiece(pos);
  if (piece === null) return false;
  return true;
}

Dagaz.AI.inCheck = function(design, board) {
  if (_.isUndefined(board.inCheck)) {
      board.inCheck = false;
      var king = null;
      for (var pos = 0; pos < design.positions.length; pos++) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == board.player) && (piece.type == 0)) {
              if (king !== null) return false;
              king = pos;
          }
      }
      if (king === null) return false;
      board.inCheck = isAttacked(design, board, board.player, king);
  }
  return board.inCheck;
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

Dagaz.AI.eval = function(design, params, board, player) {
  if (_.isUndefined(board.completeEval)) {
      board.completeEval = 0;
      _.each(design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if (piece === null) return;
           var v = Dagaz.AI.getPrice(design, piece, pos);
           // Check King's Opposition
           if ((piece.type == 0) && (piece.player != board.player) &&
               checkOpposite(design, board, piece.player, pos)) {
               v = -v;
           }
           // Check Attacking
           if ((piece.type != 6) && isAttacked(design, board, piece.player, pos, Math.abs(v))) {
               v = (v / 4) | 0;
           }
           // Check Shooting
           if (piece.type == 1) { // Rook
               v += checkShoot(design, board, piece.player, pos, 6, 7); // Wall n
           }
           if (piece.type == 4) { // Bishop
               v += checkShoot(design, board, piece.player, pos, 4, 5); // Bishop ne
               v += checkShoot(design, board, piece.player, pos, 4, 6); // Bishop nw
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
