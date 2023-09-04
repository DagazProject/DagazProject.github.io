(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "longgammon-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves  = [];
  var inHome = true;
  _.each(design.allPositions(), function(pos) {
      if (!inHome) return;
      var piece = board.getPiece(pos);
      if ((piece === null) || (piece.type > 0) || (piece.player != board.player)) return;
      if (!design.inZone(0, piece.player, pos)) inHome = false;
  });
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = design.navigate(1, move.actions[0][0][0], 3);
          if ((pos !== null) && (board.getPiece(pos) !== null)) {
              move.failed = true;
              return;
          }
          if (inHome) return;
          pos = move.actions[0][1][0];
          if (design.inZone(2, board.player, pos)) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
