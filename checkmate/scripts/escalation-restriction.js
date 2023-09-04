(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "escalation-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      if (move.mode != 0) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          var v = piece.getValue(0);
          if (v === null) v = 0;
          var mask = 1 << (move.mode - 1);
          if ((mask & v) == 0) return;
      }
      moves.push(move);
  });
  board.moves = moves;
  CheckInvariants(board);
}

})();
