(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "senet-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 2)) {
          if (piece.player != player) {
              e++;
          } else {
              f++;
          }
      }
  });
  if (e < 1) {
      return -1;
  }
  if (f < 1) {
      return 1;
  }
  return checkGoals(design, board, player);
}

})();
