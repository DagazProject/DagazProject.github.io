(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chessgi-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var sr = design.getDirection("sr");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove() || (move.mode == 2)) {
          var pos = move.actions[0][(move.mode == 2) ? 0 : 1][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player != board.player)) {
              piece = piece.changeOwner(board.player);
              var p = design.navigate(board.player, pos, sr);
              while (p !== null) {
                  if (board.getPiece(p) === null) {
                      move.dropPiece(p, piece);
                      return;
                  }
                  p = design.navigate(board.player, p, sr);
              }
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
