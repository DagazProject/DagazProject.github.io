(function() {

var type = null;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "cyvasse-goal") {
      type = value;
  } else{
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != 2) return;
      if (type !== null) {
          if (type != piece.getType()) return;
      }
      cnt++;
  });
  if (cnt == 0) {
      if (player == 1) return 1;
          else return -1;
  }
  return checkGoals(design, board, player);
}

})();
