(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "salt-n-pepper-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = 0; e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (design.inZone(0, player, pos)) {
          if (piece !== null) {
              if ((piece.player != player) && !design.inZone(1, player, pos)) f++;
          } else {
              f++;
          }
      }
      if (design.inZone(0, design.nextPlayer(player), pos)) {
          if (piece !== null) {
              if ((piece.player != player) && !design.inZone(1, design.nextPlayer(player), pos)) e++;
          } else {
              e++;
          }
      }
  });
  if (f == 0) return 1;
  if (e == 0) return -1;
  return checkGoals(design, board, player);
}

})();
