(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cubic-chess-invariant") {
      checkVersion(design, name, value);
  }
}

var isKing = function(design, board, pos) {
  var p = design.navigate(1, pos, 8);
  while (p !== null) {
      if (board.getPiece(p) === null) return false;
      p = design.navigate(1, p, 8);
  }
  return true;
}

var countKings = function(design, board) {
  var c = [0, 0];
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(1, 1, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (!isKing(design, board, pos)) return;
      c[piece.player - 1]++;
  });
  return c;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var c = countKings(design, board);
  if (c[player - 1] == 0) return -1;
//if (c[design.nextPlayer(player) - 1] == 0) return 1;
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var b = board.apply(move);
      var c = countKings(design, b);
      if (c[board.player - 1] == 0) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
