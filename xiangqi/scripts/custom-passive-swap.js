(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "custom-passive-swap") {
     checkVersion(design, name, value);
  }
}

var isBuzy = function(board, pos) {
  return board.getPiece(pos + 64) !== null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      if (!_.isUndefined(board.move) && (board.move.mode == 0)) {
          move.failed = true;
          return;
      }
      if (isBuzy(board, move.actions[0][0][0]) || 
          isBuzy(board, move.actions[0][1][0])) {
          move.failed = true;
          return;
      }
      move.movePiece(move.actions[0][1][0], move.actions[0][0][0], board.getPiece(move.actions[0][1][0]));
  });
  CheckInvariants(board);
}

})();
