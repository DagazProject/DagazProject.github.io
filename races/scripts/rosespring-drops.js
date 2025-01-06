(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "backgammon-drops") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isDropMove() && (move.mode == 0)) {
          var val = null;
          for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
               var piece = board.getPiece(pos);
               if (piece !== null) {
                   if (piece.player == board.player) {
                       val = piece.type;
                   } else {
                       move.capturePiece(pos);
                   }
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
