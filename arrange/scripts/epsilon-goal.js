(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "epsilon-goal") {
     checkVersion(design, name, value);
  }
}

var calcDirection = function(design, board, pos, player, dir) {
  var r = 1;
  var p = design.navigate(1, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) break;
      if (piece.player != player) break;
      p = design.navigate(1, p, dir);
      r++;
  }
  p = design.navigate(0, pos, dir);
  while (p !== null) {
      if (piece === null) break;
      if (piece.player != player) break;
      p = design.navigate(0, p, dir);
      r++;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var p = design.nextPlayer(board.player);
  var f = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != p) return;
      _.each(design.allDirections(), function(dir) {
          if (calcDirection(design, board, pos, p, dir) == 5) f = true;
      });
  });
  if (f) {
      return (p == player) ? 1 : -1;
  }
  return checkGoals(design, board, player);
}

})();
