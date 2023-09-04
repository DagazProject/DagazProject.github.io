(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "columns-checkers-promotion") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (a[0][0] != a[1][0]) return;
          if (a[2] === null) return;
          var piece = a[2][0];
          var pos = a[0][0];
          if (piece.type != 0) return;
          if (design.inZone(0, piece.player, pos)) {
              a[2] = [piece.promote(1)];
          }
      });
  });
  CheckInvariants(board);
}

})();
