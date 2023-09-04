(function() {

Dagaz.AI.discardVector = [0, 0, 7, 7, 7, 7];

Dagaz.AI.AI_FRAME      = 1000;
Dagaz.AI.MAX_DEEP      = 6;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "kono-extension") {
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
              var v = 10;
              if (design.inZone(0, board.player, pos)) {
                  v += 30;
              }
              if (isAttacked(design, board, piece.player, pos)) {
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

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 2) {
      return 1;
  }
  if (friends < 2) {
      return -1;
  }
  return checkGoals(design, board, player);
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
