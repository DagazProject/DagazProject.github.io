(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "co-ganh-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = board.getValue(0);
  if (pos !== null) {
      var moves = [];
      _.each(board.moves, function(move) {
          if (!move.isSimpleMove()) return;
          var to = move.actions[0][1][0];
          if (to != pos) return;
          moves.push(move);
      });
      if (moves.length > 0) {
          board.moves = moves;
      }
  }
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var from = move.actions[0][0][0];
      var to = move.actions[0][1][0];
      var dir = design.findDirection(from, to);
      if (dir === null) return;
      var pos = design.navigate(0, from, dir);
      if (pos === null) {
          move.setValue(0, null);
          return;
      }
      var piece = board.getPiece(pos);
      if ((piece === null) || (piece.player != board.player)) {
          move.setValue(0, null);
          return;
      }
      move.setValue(0, from);
  });
  CheckInvariants(board);
}

})();
