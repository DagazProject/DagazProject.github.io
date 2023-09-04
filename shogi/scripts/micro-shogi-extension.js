(function() {

var checkVersion = Dagaz.Model.checkVersion;

var unprom = [];

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "micro-shogi-extension") {
     unprom[0] = 0; // King
     unprom[1] = 1; // Bishop
     unprom[2] = 1; // Tokin -> Bishop
     unprom[3] = 3; // Gold
     unprom[4] = 3; // Rook -> Gold
     unprom[5] = 5; // Silver
     unprom[6] = 5; // Lance -> Silver
     unprom[7] = 7; // Pawn
     unprom[8] = 7; // Knight -> Pawn
  } else {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pr = design.getDirection("pr");
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
                      p = design.navigate(board.player, p, pr);
                      if (p !== null) {
                          m.dropPiece(p, Dagaz.Model.createPiece(type + 1, board.player));
                      }
                  }
              }
          } else {
              var p = design.navigate(board.player, pos, pr);
              if ((p !== null) && (board.getPiece(p) !== null)) {
                  m.capturePiece(p);
              }
              var piece = m.actions[0][2][0];
              if (piece.player != board.player) {
                  m.actions[0][2] = [ piece.changeOwner(board.player) ];
                  m.mode = 1;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
