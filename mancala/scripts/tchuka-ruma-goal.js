(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tchuka-ruma-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 1, pos)) {
          var piece = board.getPiece(pos);
          if (piece !== null) cnt++;
      }
  });
  if (cnt == 0) {
      return 1;
  }
  return checkGoals(design, board, player);
}

})();
