(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "russian-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {      
      if (move.mode == 8) {
          if (board.move.mode != 7) {
              move.failed = true;
              return;
          }
          var pos = move.actions[0][0][0];
          for (var p = design.navigate(board.player, 0, 0); p !== null; p = design.navigate(board.player, p, 0)) {
               if ((pos != p) && (board.getPiece(p) !== null)) {
                   move.capturePiece(p);
               }
          }
          move.goTo(2);
      }
  });
  CheckInvariants(board);
}

})();
