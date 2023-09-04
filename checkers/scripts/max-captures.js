(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "max-captures") {
     checkVersion(design, name, value);
  }
}

var calcCaptures = function(move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      if (a[1] !== null) return;
      r++;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var mx = 0;
  _.each(board.moves, function(move) {
      var cn = calcCaptures(move);
      if (cn > mx) mx = cn;
  });
  if (mx > 0) {
      _.each(board.moves, function(move) {
           if (mx > calcCaptures(move)) move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
