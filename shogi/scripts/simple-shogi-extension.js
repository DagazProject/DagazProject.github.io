(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "simple-shogi-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var sr = design.getDirection("sr");
  if (promote.length == 0) {
      promote[ design.getPieceType("SilverP") ] = design.getPieceType("Silver");
      promote[ design.getPieceType("PawnP") ]   = design.getPieceType("Pawn");
  }
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player != board.player)) {
              if (!_.isUndefined(promote[piece.type])) {
                  piece = piece.promote(promote[piece.type]);
              }
              piece = piece.changeOwner(board.player);
              var p = design.navigate(board.player, pos, sr);
              while (p !== null) {
                  if (board.getPiece(p) === null) {
                      move.dropPiece(p, piece);
                      return;
                  }
                  p = design.navigate(board.player, p, sr);
              }
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
