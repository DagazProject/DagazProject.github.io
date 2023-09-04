(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "khans-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = null; var piece = null;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (piece === null) {
              piece = board.getPiece(a[0][0]);
          }
          pos = a[1][0];
      });
      if ((piece === null) || (pos === null)) return;
      if (piece.type == 1) return;
      if (design.inZone(0, 1, pos)) move.failed = true;
      if (design.inZone(0, 2, pos)) move.failed = true;
  });
  CheckInvariants(board);
}

})();
