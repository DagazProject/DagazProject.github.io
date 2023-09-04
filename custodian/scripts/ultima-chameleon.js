(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ultima-chameleon") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var piece = null;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
               var piece = board.getPiece(a[0][0]);
               var enemy = board.getPiece(a[1][0]);
               if ((piece !== null) && (enemy !== null) && (piece.type == 2) && (enemy.type != 0)) {
                    move.failed = true;
               }
          }
      });
  });
  CheckInvariants(board);
}

})();
