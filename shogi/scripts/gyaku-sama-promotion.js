(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "gyaku-sama-promotion") {
      promote[54] = 61; // Water Buffalo -> Fire Demon!
      promote[61] = 54; // Fire Demon! -> Water Buffalo
      promote[17] = 58; // Lion -> Lion Hawk
      promote[58] = 17; // Lion Hawk -> Lion
      promote[ 7] = 57; // Queen -> Free Eagle
      promote[57] =  7; // Free Eagle -> Queen
      promote[46] = 49; // Rook General -> Great General
      promote[49] = 46; // Great General -> Rook General
      promote[44] = 62; // Bishop General -> Vice General!
      promote[62] = 44; // Vice General! -> Bishop General
      promote[41] = 59; // Chariot Soldier -> Heavenly Tetrarch
      promote[59] = 41; // Heavenly Tetrarch -> Chariot Soldier
      promote[19] = 13; // Dragon King -> Soaring Eagle
      promote[13] = 19; // Soaring Eagle -> Dragon King
      promote[21] = 11; // Dragon Horse -> Horned Falcon
      promote[11] = 21; // Horned Falcon -> Dragon Horse
      promote[ 5] = 20; // Rook -> Dragon King!
      promote[20] =  5; // Dragon King! -> Rook
      promote[ 3] = 22; // Bishop -> Dragon Horse!
      promote[22] =  3; // Dragon Horse! -> Bishop
      promote[26] = 55; // Side Soldier -> Water Buffalo!
      promote[55] = 26; // Water Buffalo! -> Side Soldier
      promote[28] =  9; // Vertical Mover -> Flying Ox
      promote[ 9] = 28; // Flying Ox -> Vertical Mover
      promote[31] = 16; // Lance -> White Horse
      promote[16] = 31; // White Horse -> Lance
      promote[34] = 30; // Blind Tiger -> Flying Stag
      promote[30] = 34; // Flying Stag -> Blind Tiger
      promote[37] =  6; // Gold General -> Rook!
      promote[ 6] = 37; // Rook! -> Gold General
      promote[36] =  4; // Ferocious Leopard -> Bishop!
      promote[ 4] = 36; // Bishop! -> Ferocious Leopard
      promote[39] = 29; // Silver General -> Vertical Mover!
      promote[29] = 39; // Vertical Mover! -> Silver General
      promote[ 0] = 51; // Knight -> Side Soldier!
      promote[51] =  0; // Side Soldier! -> Knight
      promote[23] = 18; // Kirin -> Lion!
      promote[18] = 23; // Lion! -> Kirin
      promote[24] =  8; // Phoenix -> Queen!
      promote[ 8] = 24; // Queen! -> Phoenix
      promote[43] = 60; // Dog -> Multi General
      promote[60] = 43; // Multi General -> Dog
      promote[ 2] = 38; // Pawn -> Tokin
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var piece = null;
      var isPromoted = false;
      var isForced = true;
      var action = null;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
              if (piece === null) {
                  piece = board.getPiece(a[0][0]);
              }
              action = a;
              if ((piece !== null) && !_.isUndefined(promote[+piece.type])) {
                  var target = board.getPiece(a[1][0]);
                  if ((target !== null) && (target.player != board.player)) {
                      isPromoted = true;
                      return;
                  }
              }
              if (piece.type == 2) {
                  if (design.inZone(0, piece.player, a[1][0])) {
                      isPromoted = true;
                      isForced = false;
                  }
              }
          }
      });
      if (isPromoted && (action !== null)) {
          var promoted = piece.promote(promote[+piece.type]);
          if (isForced) {
              action[2] = [promoted];
          } else {
              action[2] = [piece, promoted];
          }
      }
  });
  CheckInvariants(board);
}

})();
