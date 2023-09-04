(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "chu-shogi-promotion") {
      promote[ 1] =  7; // Go-Between -> Drunk elephant!
      promote[ 0] = 35; // Pawn -> Gold general!
      promote[23] =  9; // Side Mover -> Free boar
      promote[25] =  8; // Vertical Mover -> Flying ox
      promote[ 2] = 19; // Bishop -> Dragon horse!
      promote[ 4] = 17; // Rook -> Dragon king!
      promote[18] = 10; // Dragon Horse -> Horned falcon
      promote[16] = 11; // Dragon King -> Soaring eagle
      promote[28] = 13; // Lance -> White horse
      promote[22] = 12; // Reverse Chariot -> Whale
      promote[31] = 27; // Blind Tiger -> Flying stag
      promote[33] =  3; // Ferocious Leopard -> Bishop!
      promote[37] = 24; // Copper General -> Side mover!
      promote[36] = 26; // Silver General -> Vertical mover!
      promote[34] =  5; // Gold General -> Rook!
      promote[32] = 30; // Drunk Elephant -> Crowned prince
      promote[20] = 15; // Kirin -> Lion
      promote[21] =  6; // Phoenix -> Free king
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n");
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (!move.isSimpleMove()) return;
      _.each(move.actions, function(a) {
           var sf = false;
           var piece = null;
           if (a[0] !== null) {
               piece = board.getPiece(a[0][0]);
               if (design.inZone(0, board.player, a[0][0])) {
                   sf = true;
               }
           }
           if (a[1] !== null) {
               var pos = a[1][0];
               var ef = design.inZone(0, board.player, pos);
               if ((piece === null) && (a[2] !== null)) {
                   piece = a[2][0];
               }
               var promoted = null;
               if ((piece !== null) && !_.isUndefined(promote[piece.type])) {
                   if ((!sf && ef) || (sf && (board.getPiece(pos) !== null)) ||
                       ((piece.type == 0) && (design.navigate(piece.player, pos, n) === null))) {
                         promoted = piece.promote(promote[piece.type]);
                   }
               }
               if ((piece !== null) && (promoted !== null)) {
                   a[2] = [ piece, promoted ];
               }
           }
      });
  });
  CheckInvariants(board);
}

})();
