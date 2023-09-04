(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fighting-checkers-turns") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = board.getValue(0);
  _.each(board.moves, function(move) {
      f = true; var p = null;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (f && (pos !== null)) {
              if (pos == a[0][0]) move.failed = true;
              f = false;
          }
          p = a[1][0];
      });
      if (p !== null) {
          move.setValue(0, p);
      }
  });
  CheckInvariants(board);
}

})();
