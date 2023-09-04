(function() {

Dagaz.AI.AI_FRAME     = 2000;
Dagaz.AI.REP_DEEP     = 30;
Dagaz.AI.MAX_QS_LEVEL = 5;
Dagaz.AI.MAX_AB_VARS  = 1000;
Dagaz.AI.MAX_QS_VARS  = 5;
Dagaz.AI.STALEMATE    = -1;

var penalty = 
  [ -60, -30, -10,  20,  20, -10, -30, -60,
     40,  70,  90, 120, 120,  90,  70,  40,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60 ];

Dagaz.AI.getPrice = function(design, piece, pos) {
  if (pos >= 64) pos -= 64;
  if (pos >= 64) return 0;
  var r = design.price[piece.type];
  if (piece.player == 1) {
      r += penalty[pos];
  } else {
      r += penalty[63 - pos];
  }
  return r;
}

Dagaz.AI.isMajorPiece = function(type) {
  return type > 0;
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

var checkStep = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type > 1) return false;
  return true;
}

var checkSlide = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if  (p === null) return false;
      piece = board.getPiece(p);
  }
  if ((piece.player != player) && (piece.type == 5)) return true;
  p = design.navigate(player, p, dir);
  if  (p === null) return false;
  piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if  (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  if (piece.type != 4) return false;
  return true;
}

var checkJump = function(design, board, player, pos, d, o, t) {
  var p = design.navigate(player, pos, d);
  if  (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  p = design.navigate(player, p, o);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type != t) return false;
  return true;
}

var isAttacked = function(design, board, player, pos) {
  return checkStep(design, board, player, pos, 7)       || // n
         checkStep(design, board, player, pos, 4)       || // w
         checkStep(design, board, player, pos, 3)       || // e
         checkSlide(design, board, player, pos, 4)      || // w
         checkSlide(design, board, player, pos, 3)      || // e
         checkSlide(design, board, player, pos, 1)      || // s
         checkSlide(design, board, player, pos, 7)      || // n
         checkJump(design, board, player, pos, 5, 5, 8) || // ne, ne
         checkJump(design, board, player, pos, 0, 0, 8) || // se, se
         checkJump(design, board, player, pos, 2, 2, 8) || // sw, sw
         checkJump(design, board, player, pos, 6, 6, 8) || // nw, nw
         checkJump(design, board, player, pos, 5, 7, 7) || // ne, n
         checkJump(design, board, player, pos, 5, 3, 7) || // ne, e
         checkJump(design, board, player, pos, 0, 1, 7) || // se, s
         checkJump(design, board, player, pos, 0, 3, 7) || // se, e
         checkJump(design, board, player, pos, 2, 1, 7) || // sw, s
         checkJump(design, board, player, pos, 2, 4, 7) || // sw, w
         checkJump(design, board, player, pos, 6, 4, 7) || // nw, w
         checkJump(design, board, player, pos, 6, 7, 7);   // nw, n
}

Dagaz.AI.see = function(design, board, move) {
  if (!move.isSimpleMove()) return false;
  var pos = move.actions[0][0][0];
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  pos = move.actions[0][1][0];
  var target = board.getPiece(pos);
  if (target === null) return false;
  if (!isAttacked(design, board, piece.player, pos)) return true;
  return Dagaz.AI.getPrice(design, target, pos) > Dagaz.AI.getPrice(design, piece, pos);
}

Dagaz.AI.inCheck = function(design, board) {
  if (_.isUndefined(board.inCheck)) {
      board.inCheck = false;
      var king = null;
      for (var pos = 0; pos < design.positions.length; pos++) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == board.player) && (piece.type == 12)) {
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
