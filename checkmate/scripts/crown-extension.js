(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "crown-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var piece  = board.getPiece(139);
  if ((piece !== null) && (_.indexOf([0, 2, 4, 6, 8, 10, 12], +piece.type) >= 0) && (piece.player != board.player)) {
      _.each(board.moves, function(move) {
          if (move.isSimpleMove()) {
              if (move.actions[0][1][0] == 139) return;
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
