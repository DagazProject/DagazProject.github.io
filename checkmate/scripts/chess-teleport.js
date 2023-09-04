(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-teleport") {
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
      if (piece.player != board.player) return;
      if (piece.type == design.getPieceType("King")) {
          move.failed = true;
          return;
      }
      var to = move.actions[0][0][0];
      var pieces = [];
      if ((piece.type == design.getPieceType("Pawn")) && design.inZone(0, board.player, to)) {
           pieces.push(piece.promote(design.getPieceType("Bishop")));
           pieces.push(piece.promote(design.getPieceType("Knight")));
           pieces.push(piece.promote(design.getPieceType("Rook")));
           pieces.push(piece.promote(design.getPieceType("Queen")));
      } else{
           pieces.push(piece);
      }
      move.actions.push([ [pos], [to], pieces, 1]);
  });
  CheckInvariants(board);
}

})();
