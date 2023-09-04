(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "asalto-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (player == 1) {
      var f = true;
      _.each(design.zonePositions(0, player), function(pos) {
          var piece = board.getPiece(pos);
          if ((piece === null) || (piece.type != 0)) {
              f = false;
          }
      });
      if (f) return true;
  } else {
      var positions = _.filter(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          return (piece !== null) && (piece.type == 0);
      });
      if (positions.length < 9) {
          return 1;
      }
  }
  return checkGoals(design, board, player);
}

})();
