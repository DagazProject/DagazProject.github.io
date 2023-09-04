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
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (+piece.type % 2 == 0) {
              if (pos % 4 != 0) result = null;
          } else {
              if (pos % 4 != 3) result = null;
          }
      }
  });
  return result;
}

})();
