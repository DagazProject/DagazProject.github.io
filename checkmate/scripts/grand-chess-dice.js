(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "grand-chess-dice") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode > 5) return;
      var pos = design.navigate(1, 0, 8);
      while (pos !== null) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == move.mode)) {
              move.capturePiece(pos);
              return;
          }
          pos = design.navigate(1, pos, 8);
      }
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
