(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyvasse-rabble") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var v = board.getValue(0);
  _.each(board.moves, function(move) {
      if (move.mode == 0) return;
      if (!move.isSimpleMove()) {
          move.setValue(0, null);
          return;
      }
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if ((piece === null) || (pos == v)) {
          move.failed = true;
          return;
      }
      if (piece.type != 1) {
          move.setValue(0, null);
          if (v !== null) move.failed = true;
          return;
      }
      var cnt = 0;
      _.each(design.allPositions(), function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player != board.player) return;
          if (piece.type == 1) cnt++;
      });
      pos = move.actions[0][1][0];
      if ((cnt < 2) || (v !== null)) {
          move.setValue(0, null);
      } else {
          move.setValue(0, pos);
          move.goTo(board.turn);
      }
  });
  CheckInvariants(board);
}

})();
