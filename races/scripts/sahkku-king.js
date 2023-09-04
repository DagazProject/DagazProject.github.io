(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sahkku-king") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 4) return;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.type != 6) return;
          move.capturePiece(pos);
      });
      move.dropPiece(move.actions[0][0][0], Dagaz.Model.createPiece(6, board.player));
  });
  CheckInvariants(board);
}

})();
