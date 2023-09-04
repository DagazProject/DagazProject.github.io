(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "retrograde-en-passant") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.parent !== null) && !_.isUndefined(board.move) && (board.move.mode == 1)) {
      var piece = board.move.actions[0][2][0];
      if (piece.type != 0) return;
      var pos = board.move.actions[0][0][0];
      if (!design.inZone(1, board.player, pos)) return
      var p = design.navigate(board.parent.player, pos, 7);
      if (p === null) return;
      if (board.getPiece(p) !== null) return;
      p = design.navigate(board.parent.player, pos, 1);
      if (p === null) return;
      if (board.getPiece(p) !== null) return;
      piece = Dagaz.Model.createPiece(0, board.player);
      var move = Dagaz.Model.createMove(4);
      move.dropPiece(p, piece);
      move.goTo(board.turn);
      board.moves.push(move);
  }
  CheckInvariants(board);
}

})();
