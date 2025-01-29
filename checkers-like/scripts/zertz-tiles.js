(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "zertz-tiles") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 2) return;
      var pos = move.actions[0][1][0];
      var cnt = 0;
      _.each([1, 2, 4, 0, 3, 5, 1, 2], function(dir) {
          if (cnt > 1) return;
          var p = design.navigate(1, pos, dir);
          if (p === null) {
              cnt++;
              return;
          }
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.type == 0)) {
              cnt++;
              return;
          }
          cnt = 0;
      });
      if (cnt < 2) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
