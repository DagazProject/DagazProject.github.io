(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyvasse-trebuchet") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      if (move.mode < 2) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 7) return;
      var dir = move.mode - 2;
      var p = design.navigate(0, pos, dir);
      if ((p === null) || (board.getPiece(p) !== null)) {
          move.failed = true;
          return;
      }
      move.dropPiece(p, piece);
      pos = move.actions[0][1][0];
      move.capturePiece(pos);
      piece = Dagaz.Model.createPiece(12, board.player);
      move.actions[0][2] = [piece];
  });
  CheckInvariants(board);
}

})();
