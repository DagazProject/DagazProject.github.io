(function() {

var unprom = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "mini-shogi-extension") {
      unprom[0] = 0; // King
      unprom[1] = 1; // Gold
      unprom[2] = 2; // Silver
      unprom[3] = 2; // SilverP
      unprom[4] = 4; // Bishop
      unprom[5] = 4; // BishopP
      unprom[6] = 6; // Rook
      unprom[7] = 6; // RookP
      unprom[8] = 8; // Pawn
      unprom[9] = 8; // PawnP
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var sr = design.getDirection("sr");
  _.each(board.moves, function(m) {
      if (m.isSimpleMove()) {
          var pos = m.actions[0][0][0];
          if (design.inZone(0, board.player, pos)) {
              pos = m.actions[0][1][0];
              var piece = board.getPiece(pos);
              if ((piece !== null) && (piece.type > 0)) {
                  var type = unprom[piece.type];
                  var p = design.navigate(board.player, pos, sr);
                  while ((p !== null) && (board.getPiece(p) !== null)) {
                      p = design.navigate(board.player, p, sr);
                  }
                  if (p !== null) {
                      m.dropPiece(p, Dagaz.Model.createPiece(type, board.player));
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
