(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dafang-capture") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var v = board.getValue(board.player - 1);
  if (v === null) v = 0;
  _.each(board.moves, function(move) {
      if (v == 0) {
          if (move.isCaptureMove()) move.failed = true;
          return;
      }
      if (!move.isCaptureMove()) {
          move.failed = true;
          return;
      }
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if ((piece === null) || (Dagaz.Model.calcScore(design, board, piece.player, pos) > 0)) {
          move.failed = true;
          return;
      }
      if (v > 1) {
          move.setValue(board.player - 1, v - 1);
          move.goTo(board.turn);
      } else {
          move.setValue(board.player - 1, null);
      }
  })
  CheckInvariants(board);
}

})();
