(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "game-swap") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var src = move.actions[0][0][0];
      var dst = move.actions[0][1][0];
      var piece = board.getPiece(dst);
      if (piece === null) return;
      move.movePiece(dst, src, piece);
  });
  CheckInvariants(board);
}

})();
