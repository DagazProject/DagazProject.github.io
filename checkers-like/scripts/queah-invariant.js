(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "queah-invariant") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design   = Dagaz.Model.design;
  var priority = 0;
  _.each(board.moves, function(move) {
      if (move.mode == 2) {
          var cnt = 0;
          _.each(design.allPositions(), function(pos) {
              if (design.inZone(0, board.player, pos)) {
                  var piece = board.getPiece(pos);
                  if ((piece !== null) && (piece.player == board.player)) {
                      cnt++;
                  }
              }
          });
          if (cnt == 4) {
              move.failed = true;
              return;
          }
      }
      if (priority < move.mode) {
          priority = move.mode;
      }
  });
  _.each(board.moves, function(move) {
      if (move.mode < priority) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
