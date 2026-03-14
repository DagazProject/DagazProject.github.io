(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-fly") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = board.getValue(0);
  if (cnt === null) cnt = 0;
  if (cnt == 0) {
      _.each(design.allPositions(), function(pos) {
          if (cnt > 3) return;
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.player != board.player) return;
          cnt++;
      });
      if (cnt > 3) {
          _.each(board.moves, function(move) {
              if (move.mode != 1) return;
              move.failed = true;
          });
      } else {
          _.each(board.moves, function(move) {
              if (move.mode == 1) return;
              move.failed = true;
          });
      }
  }
  CheckInvariants(board);
}

})();
