(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "escalation-promotion") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      pos = move.actions[0][1][0];
      if (!design.inZone(0, board.player, pos)) return;
      if (move.actions[0][2] !== null) {
          piece = move.actions[0][2][0];
      }
      var v = piece.getValue(0);
      if (v === null) return;
      if (v >= 16) return;
      move.actions[0][2] = [piece.setValue(0, v << 4)];
  });
  CheckInvariants(board);
}

})();
