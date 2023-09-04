(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "escalation-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var t = piece.getValue(0);
      if (t === null) return;
      pos = move.actions[0][0][0];
      piece = board.getPiece(pos);
      if (piece === null) return;
      var v = piece.getValue(0);
      if (v === null) v = 0;
      move.actions[0][2] = [piece.setValue(0, v | t)];
  });
  CheckInvariants(board);
}

})();
