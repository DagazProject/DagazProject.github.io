(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bride-and-groom-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 19) return;
      pos = design.navigate(1, pos, 3);
      if (pos === null) return;
      piece = board.getPiece(pos);
      if (piece === null) return;
      if ((piece.type == 1) || (piece.type == 2)) f = true;
  });
  if (f) return 1;
  return checkGoals(design, board, player);
}

})();
