(function() {

var prom = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "migi-shogi-captures") {
      prom[0] = 0; // King
      prom[1] = 7; // Prince -> Rook
      prom[2] = 6; // Gold   -> Lance
      prom[3] = 5; // Silver -> Knight
      prom[4] = 8; // Copper -> Pawn
      prom[5] = 3; // Knight -> Silver
      prom[6] = 2; // Lance  -> Gold
      prom[7] = 1; // Rook   -> Prince
      prom[8] = 4; // Pawn   -> Copper
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
      pos = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT + 4;
      if (board.player == 2) {
          pos = pos + 31;
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
