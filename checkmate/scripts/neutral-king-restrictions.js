(function() {

var strong = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "neutral-king-restrictions") {
      if (value == "strong") strong = true;
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if ((piece.player < 3) && (piece.player != board.player)) {
                   move.failed = true;
                   return;
              }
              if ((move.mode > 0) && (move.mode < 3) && (move.mode != board.player)) {
                   move.failed = true;
                   return;
              }
              if (strong) {
                   pos = move.actions[0][1][0];
                   piece = board.getPiece(pos);
                   if (piece !== null) {
                       if (piece.player == board.player) {
                           move.failed = true;
                       }
                   }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
