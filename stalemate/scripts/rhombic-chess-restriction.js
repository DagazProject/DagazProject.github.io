(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rhombic-chess-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.parent !== null) && !_.isUndefined(board.move) && board.move.isDropMove()) {
      var pos = board.move.actions[0][1][0];
      _.each(board.moves, function(move) {
           if (!move.isDropMove()) return;
           var p = design.navigate(1, move.actions[0][1][0], 4);
           if (p === null) return;
           if (p == pos) {
               move.failed = true;
           }
      });
  }
  CheckInvariants(board);
}

})();
