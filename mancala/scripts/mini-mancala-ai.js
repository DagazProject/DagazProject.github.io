(function() {

Dagaz.AI.AI_FRAME     = 500;
Dagaz.AI.REP_DEEP     = 10;
Dagaz.AI.STALEMATE    = -1;

Dagaz.AI.getPrice = function(design, piece, pos) {
  var v = piece.getValue(0);
  if (v === null) return 1;
  return v;
}

Dagaz.AI.isMajorPiece = function(type) {
  return true;
}

Dagaz.AI.isRepDraw = function(board) {
  var z = board.zSign;
  for (var i = 0; i < Dagaz.AI.REP_DEEP; i++) {
       if (board.parent === null) return false;
       board = board.parent;
       if (board.zSign == z) return true;
  }
  return false;
}

Dagaz.AI.see = function(design, board, move) {
  return false;
}

Dagaz.AI.inCheck = function(design, board) {
  return false;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return 1;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0; var f = 0; var e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 0) return;
      if (piece.player == player) {
          r += Dagaz.AI.getPrice(design, piece, pos);
          f++;
      } else {
          r -= Dagaz.AI.getPrice(design, piece, pos);
          e++;
      }
  });
  if (e == 0) return 1000000;
  if (f == 0) return -1000000;
  if (e == 1) return r + 100000;
  if (f == 1) return r - 100000;
  return r;
}

})();
