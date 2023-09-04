(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chaturanga-promotion") {
      checkVersion(design, name, value);
  }
}

var promote = function(design, board, player, pos, type, zone, cnt, piece) {
  if (design.inZone(zone, player, pos)) {
      var pieces = _.filter(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return false;
          if (piece.player != player) return false;
          return piece.type == type;
      });
      if (pieces.length < cnt) {
          piece = piece.promote(type);
      }
  }
  return piece;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Bhata");
  var rook   = design.getPieceType("Ratha");
  var knight = design.getPieceType("Ashva");
  var bishop = design.getPieceType("Gaja");
  var queen  = design.getPieceType("Mantri");
  _.each(board.moves, function(m) {
      if (m.isSimpleMove()) {
          var piece = board.getPiece(m.actions[0][0][0]);
          if ((piece !== null) && (piece.type == pawn)) {
               var pos = m.actions[0][1][0];
               if (design.inZone(0, board.player, pos)) {
                   piece = promote(design, board, board.player, pos, rook,   1, 2, piece);
                   piece = promote(design, board, board.player, pos, knight, 2, 2, piece);
                   piece = promote(design, board, board.player, pos, bishop, 3, 2, piece);
                   piece = promote(design, board, board.player, pos, queen,  4, 1, piece);
                   m.actions[0][2] = [ piece ];
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
