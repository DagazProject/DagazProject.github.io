(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gonnect-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var piece  = null; var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      if (board.getPiece(pos) === null) return;
      piece = board.getPiece(pos);
      cnt++;
  });
  if ((cnt > 1) || ((piece !== null) && (piece.player == 2))) {
      _.each(board.moves, function(move) {
          var pos = move.actions[0][1][0];
          if (board.getPiece(pos) === null) return;
          move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
