(function() {

Dagaz.Model.showLose = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "khans-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var winner = null; var f = 0; var e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) return;
      if (design.inZone(0, piece.player, pos)) {
          winner = piece.player;
      }
      if (piece.player == player) {
          f++;
      } else {
          e++;
      }
  });
  if (e < 1) return 1;
  if (f < 1) return -1;
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
