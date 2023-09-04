(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "italian-damone-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0; var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (+piece.type >= 3)) {
          if (piece.player != player) {
              e++;
          } else {
              f++;
          }
          if (design.inZone(1, piece.player, pos)) {
              r = piece.player;
          }
      }
  });
  if (r != 0) {
      if (r == player) {
          return 1;
      } else {
          return -1;
      }
  }
  if (e == 0) return 1;
  if (f == 0) return -1;
  return checkGoals(design, board, player);
}

})();
