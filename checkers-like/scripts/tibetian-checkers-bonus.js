(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tibetian-checkers-bonus") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var v = board.getValue(board.player - 1);
  if (v === null) v = 0;
  if (v > 0) {
      _.each(board.moves, function(move) {
          if (move.mode != 3) {
              move.failed = true;
              return;
          }
          move.setValue(board.player - 1, v - 1);
          if (v > 1) {
              move.goTo(board.turn);
          }
      });
  } else {
      _.each(board.moves, function(move) {
          if (move.mode != 3) return;
          move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
