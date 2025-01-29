(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "zertz-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = 0;
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      cnt++;
  });
  if (cnt > 0) {
      _.each(board.moves, function(move) {
         if (move.mode != 1) return;
         move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
