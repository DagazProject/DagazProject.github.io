(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pilare-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0; var p = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player < 3)) {
          if (piece.player != player) {
              e++;
          } else {
              f++;
          }
          if (piece.getValue(1) !== null) {
              p = true;
          }
      }
  });
  if (!p) {
      if (e < 1) return 1;
      if (f < 1) return -1;
  }
  return checkGoals(design, board, player);
}

})();
