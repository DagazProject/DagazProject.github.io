(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pawn-wars-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = 0; var e = 0; var c = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) return;
      if (piece.player == player) {
          f++;
      } else {
          e++;
      }
  });
  if (e > 0) return -1;
  if (f > 0) return 1;
  board.generate(design);
  if (board.moves.length == 0) {
      if (board.player == player) {
          return -1;
      } else {
          return 1;
      }
  }
  return checkGoals(design, board, player);
}

})();
