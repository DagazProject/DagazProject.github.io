(function() {

Dagaz.AI.AI_FRAME     = 1000;
Dagaz.AI.REP_DEEP     = 30;
Dagaz.AI.MAX_QS_LEVEL = 3;
Dagaz.AI.MAX_AB_VARS  = 50;
Dagaz.AI.MAX_QS_VARS  = 3;
Dagaz.AI.STALEMATE    = -1;

var penalty = 
  [ -60, -10,  20, -10, -60,
    -60, -10,  20, -10, -60,
    -60, -10,  20, -10, -60,
    -60, -10,  20, -10, -60,
    -60, -10,  20, -10, -60 ];

Dagaz.AI.getPrice = function(design, piece, pos) {
  var r = design.price[piece.type];
  if (piece.player == 1) {
      r += penalty[pos];
  } else {
      r += penalty[24 - pos];
  }
  return r;
}

Dagaz.AI.isMajorPiece = function(type) {
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

var checkStep = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type != 1) return false;
  return true;
}

var checkSlide = function(design, board, player, pos, dir, t) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != player)) {
          return _.indexOf(t, +piece.type) >= 0;
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

var checkJump = function(design, board, player, pos, d, o) {
  var p = design.navigate(player, pos, d);
  if  (p === null) return false;
  p = design.navigate(player, p, o);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type != 0) return false;
  return true;
}

var isAttacked = function(design, board, player, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  if (piece.type == 0) {
      return checkSlide(design, board, player, pos, 0, [3, 4])   || // w
             checkSlide(design, board, player, pos, 1, [3, 4])   || // e
             checkSlide(design, board, player, pos, 2, [3, 4])   || // s
             checkSlide(design, board, player, pos, 4, [3, 4])   || // n
             checkSlide(design, board, player, pos, 3, [3])      || // ne
             checkSlide(design, board, player, pos, 5, [3])      || // se
             checkSlide(design, board, player, pos, 6, [3])      || // sw
             checkSlide(design, board, player, pos, 7, [3])      || // nw
             checkJump(design, board, player, pos, 3, 3)         || // ne, ne
             checkJump(design, board, player, pos, 5, 5)         || // se, se
             checkJump(design, board, player, pos, 6, 6)         || // sw, sw
             checkJump(design, board, player, pos, 7, 7);           // nw, nw
  }
  if (piece.type == 1) {
      return checkSlide(design, board, player, pos, 0, [4])      || // w
             checkSlide(design, board, player, pos, 1, [4])      || // e
             checkSlide(design, board, player, pos, 2, [4])      || // s
             checkSlide(design, board, player, pos, 4, [4])      || // n
             checkJump(design, board, player, pos, 3, 3)         || // ne, ne
             checkJump(design, board, player, pos, 5, 5)         || // se, se
             checkJump(design, board, player, pos, 6, 6)         || // sw, sw
             checkJump(design, board, player, pos, 7, 7);           // nw, nw
  }
  if (piece.type == 2) {
      return checkStep(design, board, player, pos, 0)            || // w
             checkStep(design, board, player, pos, 1)            || // e
             checkStep(design, board, player, pos, 2)            || // s
             checkStep(design, board, player, pos, 4)            || // n
             checkStep(design, board, player, pos, 3)            || // ne
             checkStep(design, board, player, pos, 5)            || // se
             checkStep(design, board, player, pos, 6)            || // sw
             checkStep(design, board, player, pos, 7)            || // nw
             checkJump(design, board, player, pos, 3, 3)         || // ne, ne
             checkJump(design, board, player, pos, 5, 5)         || // se, se
             checkJump(design, board, player, pos, 6, 6)         || // sw, sw
             checkJump(design, board, player, pos, 7, 7);           // nw, nw
  }
  if (piece.type == 3) {
      return checkStep(design, board, player, pos, 0)            || // w
             checkStep(design, board, player, pos, 1)            || // e
             checkStep(design, board, player, pos, 2)            || // s
             checkStep(design, board, player, pos, 4)            || // n
             checkStep(design, board, player, pos, 3)            || // ne
             checkStep(design, board, player, pos, 5)            || // se
             checkStep(design, board, player, pos, 6)            || // sw
             checkStep(design, board, player, pos, 7)            || // nw
             checkSlide(design, board, player, pos, 3, [2])      || // ne
             checkSlide(design, board, player, pos, 5, [2])      || // se
             checkSlide(design, board, player, pos, 6, [2])      || // sw
             checkSlide(design, board, player, pos, 7, [2])      || // nw
             checkJump(design, board, player, pos, 3, 3)         || // ne, ne
             checkJump(design, board, player, pos, 5, 5)         || // se, se
             checkJump(design, board, player, pos, 6, 6)         || // sw, sw
             checkJump(design, board, player, pos, 7, 7);           // nw, nw
  }
  if (piece.type == 4) {
      return checkSlide(design, board, player, pos, 0, [3])      || // w
             checkSlide(design, board, player, pos, 1, [3])      || // e
             checkSlide(design, board, player, pos, 2, [3])      || // s
             checkSlide(design, board, player, pos, 4, [3])      || // n
             checkSlide(design, board, player, pos, 3, [2, 3])   || // ne
             checkSlide(design, board, player, pos, 5, [2, 3])   || // se
             checkSlide(design, board, player, pos, 6, [2, 3])   || // sw
             checkSlide(design, board, player, pos, 7, [2, 3])   || // nw
             checkJump(design, board, player, pos, 3, 3)         || // ne, ne
             checkJump(design, board, player, pos, 5, 5)         || // se, se
             checkJump(design, board, player, pos, 6, 6)         || // sw, sw
             checkJump(design, board, player, pos, 7, 7);           // nw, nw
  }
  return false;
}

Dagaz.AI.see = function(design, board, move) {
  var pos = Dagaz.AI.getSource(move);
  if (pos === null) return false;
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  pos = Dagaz.AI.getTarget(move);
  if (pos === null) return false;
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
