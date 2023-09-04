(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ur-repeat") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode < 1) return;
      if (move.mode > 4) return;
      if (!_.isUndefined(move.failed)) return;
      var pos = move.actions[0][1][0];
      if (design.inZone(5, board.player, pos)) {
          move.goTo(board.turn - 3);
      }
  });
  CheckInvariants(board);
}

})();
