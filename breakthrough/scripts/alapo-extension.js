(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "alapo-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var target = null;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, board.player, pos)) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player != board.player)) {
              target = pos;
          }
      }
  });
  if (target !== null) {
      _.each(board.moves, function(move) {
           if (move.isSimpleMove() && (move.actions[0][1][0] != target)) {
               move.failed = true;
           }
      });
  }
  CheckInvariants(board);
}

})();
