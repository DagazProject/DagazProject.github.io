(function() {

Dagaz.View.MARK_R = 10;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cubic-chess-restriction") {
      checkVersion(design, name, value);
  }
}

var countPieces = function(design, board, pos, dir) {
  var r = 0;
  var p = design.navigate(1, pos, dir);
  while (p !== null) {
      if (board.getPiece(p) === null) return r;
      p = design.navigate(1, p, dir);
      r++;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = move.actions[0][0][0];
      var cnt = countPieces(design, board, pos, 8) +
                countPieces(design, board, pos, 9);
      if (cnt != move.mode) {
          move.failed = true;
      }
  });
  board.moves = _.filter(board.moves, function(move) {
      return _.isUndefined(move.failed);
  });
  CheckInvariants(board);
}

})();
