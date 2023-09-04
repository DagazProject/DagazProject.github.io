(function() {

Dagaz.AI.g_flags = 0x3C << 16;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "minixiangqi-promotion") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Soldier");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == pawn) && 
              (move.actions[0][2] !== null) && 
              design.inZone(1, piece.player, move.actions[0][1][0])) {
              piece = move.actions[0][2][0];
              var pieces = [];
              pieces.push(piece.promote(design.getPieceType("Soldier")));
              pieces.push(piece.promote(design.getPieceType("Horse")));
              pieces.push(piece.promote(design.getPieceType("Leopard")));
              pieces.push(piece.promote(design.getPieceType("Cannon")));
              pieces.push(piece.promote(design.getPieceType("Chariot")));
              move.actions[0][2] = pieces;
          }
      }
  });
  CheckInvariants(board);
}

})();
