(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gauntlet-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var c = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player == 1) {
              c++;
          }
      }
  });
  if (c < 1) {
      if (player == 1) return -1;
      if (player == 2) return 1;
  }
  return checkGoals(design, board, player);
}

})();
