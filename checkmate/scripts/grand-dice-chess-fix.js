(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "grand-dice-chess-fix") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.mode != 6) && (move.mode != 9)) return;
      var pos = move.actions[0][1][0];
      _.each(design.allPositions(), function(p) {
           if (pos == p) return;
           if (!design.inZone(1, board.player, p)) return;
           var piece = board.getPiece(p);
           if (piece === null) return;
           if (piece.player != board.player) return;
           move.capturePiece(p);
      });
  });
  CheckInvariants(board);
}

})();
