(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "margo-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      var f = false;
      _.each([5, 7, 9, 11], function(dir) {
          if (f) return;
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          if (board.getPiece(p) === null) f = true;
      });
      if (f) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
