(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "catch-pigs-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!_.isUndefined(board.move)) {
      _.each(board.moves, function(move) {
           if (move.actions[0][0][0] == board.move.actions[0][1][0]) {
               move.failed = true;
           }
      });
  }
  CheckInvariants(board);
}

})();
