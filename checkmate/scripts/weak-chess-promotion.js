(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "weak-chess-promotion") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Pawn");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == pawn) && 
              (move.actions[0][2] !== null) && 
              (move.actions[0][2][0].type != pawn)) {
              piece = move.actions[0][2][0];
              var pieces = [];
              if (board.player == 1) {
                  pieces.push(piece.promote(design.getPieceType("Bishop")));
              }
              pieces.push(piece.promote(design.getPieceType("Knight")));
              if (board.player == 1) {
                  pieces.push(piece.promote(design.getPieceType("Rook")));
                  pieces.push(piece.promote(design.getPieceType("Queen")));
              }
              move.actions[0][2] = pieces;
          }
      }
  });
  CheckInvariants(board);
}

})();
