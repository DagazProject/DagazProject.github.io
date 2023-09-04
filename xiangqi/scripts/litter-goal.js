(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "litter-goal") {
      checkVersion(design, name, value);
  }
}

var countGenerals = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece === null) || (piece.player != player) || (piece.type != 7)) return;
      piece = board.getPiece(pos - 64);
      if ((piece === null) || (piece.type != 6)) return;
      r++;
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (board.parent !== null) {
      if (countGenerals(design, board, board.parent.player) == 0) return -1;
  }
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var b = board.apply(move);
      var c = countGenerals(design, b, board.player);
      if (c == 0) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
