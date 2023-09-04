(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "terrace-restriction") {
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
      var target = board.getPiece(pos);
      if (target === null) return;
      if (target.type > piece.type) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
