(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "camelot-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var piece = null; var isCaptured = null; var rn = 0;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) {
              if ((isCaptured !== null) && (piece !== null)) {
                  if ((piece.type == 0) && !isCaptured) {
                      move.failed = true;
                  }
              }
              isCaptured = true;
          } else {
              if (piece === null) {
                  piece = board.getPiece(a[0][0]);
              }
              if (rn != a[3]) {
                  if (isCaptured) {
                      move.failed = true;
                  }
                  isCaptured = false;
              }
          }
          rn = a[3];
      });
  });
  CheckInvariants(board);
}

})();
