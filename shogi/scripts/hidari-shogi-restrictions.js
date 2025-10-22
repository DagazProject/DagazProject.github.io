(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hidari-shogi-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var isEmpty = true; var kingPresent = false;
  for (var pos = 0; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           isEmpty = false;
           if (piece.type == 0 && piece.player == board.player) {
               kingPresent = true;
               break;
           }
       }
  }
  _.each(board.moves, function(move) {
       if (move.mode == 0 && !kingPresent) {
           move.failed = true;
           return;
       }
       if (move.mode == 2 && isEmpty) {
           move.failed = true;
           return;
       }
  });
  CheckInvariants(board);
}

})();
