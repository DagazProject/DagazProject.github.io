(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "grand-chess-pass") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 7) return;
      _.each(board.moves, function(m) {
          if (m.mode != 0) return;
          move.failed = true;
      });
  });
  CheckInvariants(board);
}

})();
