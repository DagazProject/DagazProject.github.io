(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "paisho-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var p = null; var f = 0; var e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 5)) {
          if (design.inZone(0, piece.player, pos)) {
              p = piece.player;
          }
          if (piece.player == player) {
              f++;
          } else {
              e++;
          }
      }
  });
  if (e == 0) return 1;
  if (f == 0) return -1;
  if (p !== null) {
      if (p == player) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
