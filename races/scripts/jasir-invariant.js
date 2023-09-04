(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "jasir-invariant") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          if (!f && !design.inZone(1, board.player, move.actions[0][1][0])) {
              f = true;
          }
      }
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (move.isSimpleMove()) {
              var pos = move.actions[0][1][0];
              if (design.inZone(1, board.player, pos) && (board.getPiece(pos) !== null)) {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
