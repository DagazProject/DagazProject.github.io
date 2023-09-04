(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "evoluchess-wall") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 6) return;
      var dst = move.actions[0][1][0];
      piece = board.getPiece(dst);
      if (piece === null) return;
      var dir = design.findDirection(pos, dst);
      if (dir === null) return;
      pos = design.navigate(1, dst, dir);
      if (piece.type == 6) {
          if ((piece.player == board.player) || (pos !== null)) {
               move.failed = true;
               return;
          }
      }
      if (pos !== null) {
          if (board.getPiece(pos) !== null) {
               move.failed = true;
               return;
          }
          move.movePiece(dst, pos, piece);
      } else {
          piece = board.getPiece(dst);
          if ((piece !== null) && (piece.player == board.player)) {
               move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
