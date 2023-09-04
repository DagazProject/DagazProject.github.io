(function() {

Dagaz.AI.AI_FRAME     = 2000;
Dagaz.AI.REP_DEEP     = 10;
Dagaz.AI.MAX_QS_LEVEL = 10;
Dagaz.AI.MAX_AB_VARS  = 1000;
Dagaz.AI.MAX_QS_VARS  = 100;
Dagaz.AI.STALEMATE    = 0;

Dagaz.AI.isMajorPiece = function(type) {
  if (type == 0) return false;
  if (type == 5) return false;
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

var checkStep = function(design, board, player, pos, dir, types) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (_.indexOf(types, +piece.type) < 0) return false;
  return true;
}

var checkSlide = function(design, board, player, pos, dir, types) {
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
  return true;
}

var isAttacked = function(design, board, player, pos) {
return checkStep(design, board, board.player, pos, 3, [0, 5])  ||
       checkStep(design, board, board.player, pos, 7, [0, 5])  ||
       checkStep(design, board, board.player, pos, 0, [5])     ||
       checkStep(design, board, board.player, pos, 1, [5])     ||
       checkStep(design, board, board.player, pos, 2, [5])     ||
       checkStep(design, board, board.player, pos, 4, [5])     ||
       checkStep(design, board, board.player, pos, 5, [5])     ||
       checkStep(design, board, board.player, pos, 6, [5])     ||
       checkSlide(design, board, board.player, pos, 0, [4, 1]) ||
       checkSlide(design, board, board.player, pos, 1, [4, 1]) ||
       checkSlide(design, board, board.player, pos, 2, [4, 1]) ||
       checkSlide(design, board, board.player, pos, 3, [4]) ||
       checkSlide(design, board, board.player, pos, 4, [4, 1]) ||
       checkSlide(design, board, board.player, pos, 5, [4]) ||
       checkSlide(design, board, board.player, pos, 6, [4]) ||
       checkSlide(design, board, board.player, pos, 7, [4]);
}

Dagaz.AI.see = function(design, board, move) {
  if (!move.isSimpleMove()) return false;
  var pos = move.actions[0][0][0];
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  if (piece.type == 0) return true;
  pos = move.actions[0][1][0];
  piece = board.getPiece(pos);
  if (piece === null) return false;
  if (isAttacked(design, board, piece.player, pos)) return false;
  return true;
}

Dagaz.AI.inCheck = function(design, board) {
  if (_.isUndefined(board.inCheck)) {
      board.inCheck = false;
      var king = null;
      for (var pos = 0; pos < design.positions.length; pos++) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == board.player) && (piece.type == 5)) {
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
          piece = move.actions[0][2][0];
          r += (Dagaz.AI.getPrice(design, piece, pos) / 2) | 0;
          pos = move.actions[0][0][0];
          piece = board.getPiece(pos);
          if (piece !== null) {
              r -= Dagaz.AI.getPrice(design, piece, pos);
          }
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
