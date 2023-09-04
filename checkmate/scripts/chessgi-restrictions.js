(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chessgi-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n");
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var pos = move.actions[0][1][0];
      var p = design.navigate(board.player, pos, n);
      if (p === null) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
