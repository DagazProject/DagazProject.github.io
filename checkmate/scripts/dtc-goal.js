(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dtc-goal") {
      checkVersion(design, name, value);
  }
}

var countKings = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player !== player) return;
      if (piece.type != 5) return;
      r++;
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (board.parent !== null) {
      if (countKings(design, board, board.parent.player) < 1) return -1;
  }
  return checkGoals(design, board, player);
}

})();
