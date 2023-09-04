(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "neutron-goal") {
     checkVersion(design, name, value);
  }
}

var nextPlayer = function(player) {
  if (player == 1) return 2;
  return 1;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 0) return;
      if (design.inZone(0, player, pos)) r = 1;
      if (design.inZone(0, nextPlayer(player), pos)) r = -1;
  });
  if (r != 0) return r;
  return checkGoals(design, board, player);
}

})();
