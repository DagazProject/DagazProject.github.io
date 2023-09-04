(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "backgammon-turns") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 7) {
          var dice = null;
          for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
               var piece = board.getPiece(pos);
               if (piece !== null) {
                   dice = piece;
               }
          }
          if (dice !== null) {
               var piece = move.actions[0][2][0];
               if (piece.type == dice.type) {
                   move.goTo(1);
                   return;
               }
               if (piece.type > dice.type) {
                   move.goTo(10);
               } else {
                   move.goTo(4);
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
