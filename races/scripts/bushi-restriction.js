(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bushi-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.parent !== null) && (board.parent.player == board.player)) {
      _.each(board.moves, function(move) {
          if (move.mode == 3) {
              move.failed = true;
              return;
          }
          var pos = move.actions[0][0][0];
          if (pos == board.lastt) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
