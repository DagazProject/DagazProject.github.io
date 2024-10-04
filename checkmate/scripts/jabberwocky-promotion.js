(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "jabberwocky-promotion") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.type != king) return;
          piece = move.actions[0][2][0];
          if (piece.type != king) return;
          var pieces = [];
          pieces.push(piece.promote(design.getPieceType("Bishop")));
          pieces.push(piece.promote(design.getPieceType("Knight")));
          pieces.push(piece.promote(design.getPieceType("Rook")));
          pieces.push(piece.promote(design.getPieceType("Queen")));
          move.actions[0][2] = pieces;
      }
  });
  CheckInvariants(board);
}

})();
