(function() {

Dagaz.Model.showLose = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gate-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
           var pos = a[1][0];
           if (design.inZone(0, board.player, pos)) {
               r += 10000;
           }
           var piece = board.getPiece(pos);
           if (piece !== null) {
               var v = design.price[piece.type];
               if (piece.player == board.player) {
                   r -= v;
               } else {
                   r += v;
               }
           }
      }
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
              if (design.inZone(0, piece.player, pos)) {
                  v = 10000;
              }
              if (!Dagaz.AI.isFriend(board.player, piece.player)) {
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
  if (!Dagaz.AI.isFriend(player, board.player)) {
      r = -r;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var winner = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (design.inZone(0, piece.player, pos)) {
              winner = piece.player;
          }
      }
  });
  if (winner !== null) {
      if (winner == player) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
