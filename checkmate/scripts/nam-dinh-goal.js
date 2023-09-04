(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MAX_DEEP      = 6;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "nam-dinh-goal") {
     checkVersion(design, name, value);
  }
}

var isAttacked = function(design, board, player, pos) {
  var r = false;
  _.each([0, 3, 4, 6], function(dir) {
      if (r) return;
      var p = design.navigate(player, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player == player) return;
      p = design.navigate(player, p, dir);
      if (p === null) return;
      piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player == player) return;
      r = true;
  });
  return r;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = design.price[piece.type];
              if (design.inZone(0, board.player, pos)) {
                  v *= 2;
              }
              if ((piece.type == 0) && isAttacked(design, board, piece.player, pos)) {
                  v = (v / 2) | 0;
              }
              if (board.player != piece.player) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (board.player != player) {
      r = -r;
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.actions.length > 0) {
      var pos = move.actions[0][1][0];
      if (board.getPiece(pos) !== null) {
          r += 9;
      }
  }
  return r;
}

})();
