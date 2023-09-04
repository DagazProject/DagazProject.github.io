(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "terrace-go") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = 0; var e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 0) return;
      var r = 1;
      if (design.inZone(0, piece.player, pos)) {
          r++;
      }
      if (piece.player == player) {
          f = r;
      } else {
          e = r;
      }
  });
  if ((f > 1) || (e < 1)) return 1;
  if ((e > 1) || (f < 1)) return -1;
  return checkGoals(design, board, player);
}

})();
