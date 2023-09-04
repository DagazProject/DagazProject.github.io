(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ur-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode < 1) return;
      if (move.mode > 4) return;
      if (!_.isUndefined(move.failed)) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      pos = design.navigate(board.player, 0, 6);
      while (pos !== null) {
          if (board.getPiece(pos) === null) {
              move.dropPiece(pos, piece.promote(2));
              break;
          }
          pos = design.navigate(board.player, pos, 6);
      }
  });
  CheckInvariants(board);
}

})();
