(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "leshogi-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var r = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 0) && design.inZone(2, piece.player, pos)) {
          if (piece.player == player) {
              r = 1;
          } else {
              r = -1;
          }
      }
  });
  if (r !== null) return r;
  return checkGoals(design, board, player);
}

})();
