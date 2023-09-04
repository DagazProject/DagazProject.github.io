(function() {

Dagaz.Model.passForcedDraw = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "senet-invariant") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var mx = null; var mn = null;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if ((mx === null) || (mx < move.mode)) {
          mx = move.mode;
      }
      if ((mn === null) || (mn > move.mode)) {
          mn = move.mode;
      }
  });
  _.each(board.moves, function(move) {
      if ((mx == 6) && (mn < 6)) {
          if (move.mode == 6) move.failed = true;
      }
      if (mx == 7) {
          if (move.mode < 7) move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
