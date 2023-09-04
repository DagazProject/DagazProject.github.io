(function() {

var checkVersion = Dagaz.Model.checkVersion;

var unprom = [];

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "wa-shogi-extension") {
     unprom[23] = 16; // Flying Falcon -> Tenacious Falcon
     unprom[21] = 22; // Running Rabbit -> Treacherous fox
     unprom[24] =  2; // Violent Wolf -> Bear's Eyes
     unprom[25] =  4; // Violent Stag -> Roaming Boar
     unprom[ 3] = 10; // Blind Dog -> Violent Wolf
     unprom[ 5] = 11; // Climbing Monkey -> Violent Stag
     unprom[15] =  6; // Flying Goose -> Swallow's Wings
     unprom[26] =  7; // Flying Cock -> Raiding Falcon
     unprom[27] = 14; // Swallow's Wings -> Gliding Swallow
     unprom[17] =  8; // Strutting Crow -> Flying Falcon
     unprom[19] =  9; // Swooping Owl -> Cloud Eagle
     unprom[28] = 13; // Liberated Horse -> Heavenly Horse
     unprom[29] = 12; // Oxcart -> Plodding Ox
     unprom[30] =  1; // Sparrow Pawn -> Golden Bird
  } else {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var sr = design.getDirection("sr");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (!_.isUndefined(unprom[+piece.type])) {
                   piece = piece.promote(unprom[+piece.type]);
              }
              piece = piece.changeOwner(board.player);
              var p = design.navigate(board.player, pos, sr);
              while (p !== null) {
                  if (board.getPiece(p) === null) {
                      move.movePiece(pos, p, piece);
                      return;
                  }
                  p = design.navigate(board.player, p, sr);
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
