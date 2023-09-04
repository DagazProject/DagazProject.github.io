(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hanoi-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.checkGoals = function(design, board, player) {
  var result = 1;
  _.each(design.allPositions(), function(pos) {
      if (pos % 3 != 2) {
          if (board.getPiece(pos) !== null) result = null;
      }
  });
  return result;
}

})();
