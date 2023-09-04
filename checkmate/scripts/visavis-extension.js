(function() {

inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "visavis-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (inProgress) return;
      inProgress = true;
      var b = board.apply(move);
      b.generate(design);
      if (b.moves.length == 0) {
          move.failed = true;
      }
      if (b.moves.length == 1) {
          var w = b.apply(b.moves[0]);
          w.generate(design);
          if (w.moves.length == 0) {
              move.failed = true;
          }
      }
      inProgress = false;
  });
  CheckInvariants(board);
}

})();
