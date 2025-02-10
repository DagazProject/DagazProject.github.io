(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "abyss-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  _.each(board.moves, function(move) {
      if (move.actions.length == 0) return;
      if (move.actions[0][1] === null) return;
      var pos = move.actions[0][1][0];
      if (board.getPiece(pos) === null) return;
      if (move.actions[0][0] === null) return;
      pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 8) return;
      if (move.actions.length != 2) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
