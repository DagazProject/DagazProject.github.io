(function() {

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = [0, 0, 0];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.type < 7) {
              cnt[0]++;
          } else {
              cnt[piece.player]++;
          }
      }
  });
  if (cnt[0] > 0) {
      return checkGoals(design, board, player);
  } else {
      if (cnt[player] == 0) return -1;
      if (cnt[design.nextPlayer(player)] == 0) return 1;
  }
  return checkGoals(design, board, player);
}

})();
