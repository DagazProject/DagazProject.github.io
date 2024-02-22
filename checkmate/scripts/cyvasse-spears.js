(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyvasse-spears") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      if (move.mode < 2) return;
      var from = move.actions[0][0][0];
      var piece = board.getPiece(from);
      if (piece === null) return;
      if (piece.type == 7) return;
      var dir = move.mode - 2;
      var to = move.actions[0][1][0];
      var p = design.navigate(board.player, from, dir);
      while ((p !== null) && (p != to)) {
          if (Dagaz.Model.isDefended(design, board, p)) {
              move.failed = true;
              return;
          }
          p = design.navigate(board.player, p, dir);
      }
  });
  CheckInvariants(board);
}

})();
