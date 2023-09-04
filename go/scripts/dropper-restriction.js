(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dropper-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          if (board.getPiece(p) !== null) {
              move.failed = true;
          }
      });
  });
  CheckInvariants(board);
}

})();
