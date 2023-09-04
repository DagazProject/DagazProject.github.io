(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shen-capture") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((board.turn != 8) && (board.turn != 13)) return;
      if (!design.inZone(2, board.player, move.actions[0][1][0])) return;
      if (board.turn == 8) {
          move.goTo(4);
      } else {
          move.goTo(9);
      }
  });
  CheckInvariants(board);
}

})();
