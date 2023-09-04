(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fighting-checkers-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      var f = true;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] === null)) f = false;
      });
      if (f) move.failed = true;
  });
  CheckInvariants(board);
}

})();
