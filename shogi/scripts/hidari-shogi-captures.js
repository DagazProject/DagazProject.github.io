(function() {

var prom = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "hidari-shogi-captures") {
      prom[0] = 0; // King
      prom[1] = 4; // Gold   -> Knight
      prom[2] = 5; // Silver -> Lance
      prom[3] = 6; // Copper -> Bishop
      prom[4] = 1; // Knight -> Gold
      prom[5] = 2; // Lance  -> Silver
      prom[6] = 3; // Bishop -> Copper
      prom[7] = 8; // Rook   -> Pawn
      prom[8] = 7; // Pawn   -> Rook
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) return;
      pos = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT + 4;
      if (board.player == 2) {
          pos = pos + 39;
      }
      while (pos !== null) {
          if (board.getPiece(pos) === null) {
              piece = piece.changeOwner(board.player);
              move.dropPiece(pos, piece);
              var p = design.navigate(board.player, pos, 3);
              if (p !== null && piece.type != 0) {
                  piece = piece.promote(prom[piece.type]);
                  move.dropPiece(p, piece);
              }
              break;
          }
          pos = design.navigate(board.player, pos, 8);
      }
  });
  CheckInvariants(board);
}

})();
