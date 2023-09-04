(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "custom-passive-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var pos = move.actions[0][1][0];
      if (pos < 64) return;
      var piece = board.getPiece(pos - 64);
      if ((piece === null) || (piece.type == 0)) return;
      move.actions[0][2] = [board.getPiece(move.actions[0][0][0]).promote(+piece.type + 6)];
  });
  CheckInvariants(board);
}

})();
