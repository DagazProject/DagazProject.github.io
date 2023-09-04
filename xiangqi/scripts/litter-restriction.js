(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "litter-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  _.each(board.moves, function(move) {
      if (move.mode == 0) return;
      var pos = move.actions[0][0][0] - 64;
      var piece = board.getPiece(pos);
      if ((piece === null) || (piece.type != move.mode - 1)) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
