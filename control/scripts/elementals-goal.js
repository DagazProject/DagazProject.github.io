(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "elementals-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var r = null;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(0, 1, pos)) return;
      var piece = board.getPiece(pos);
      if ((piece === null) || ((r !== null) && (r != piece.player))) {
          r = 0;
          return;
      }
      r = piece.player;
  });
  if (r) {
      if (r == player) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
