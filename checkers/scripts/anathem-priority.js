(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "anathem-priority") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var c = 0;
  _.each(board.moves, function(move) {
      if ((move.mode != 0) && (move.mode != 6)) return;
      c++;
  });
  if (c > 0) {
      _.each(board.moves, function(move) {
          if ((move.mode == 0) || (move.mode == 6)) return;
          move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
