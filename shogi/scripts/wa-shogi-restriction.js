(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "wa-shogi-restriction") {
      checkVersion(design, name, value);
  }
}

var pieceFound = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.type == 1) && (piece.player == player)) return true;
      p = design.navigate(player, p, dir);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n  = design.getDirection("n");
  var s  = design.getDirection("s");
  _.each(board.moves, function(move) {
      if (move.mode == 1) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              pos = move.actions[0][1][0];
              if ((piece.type == 1) || (piece.type == 12)) {
                  if (design.navigate(board.player, pos, n) === null) {
                      move.failed = true;
                      return;
                  }
              }
              if (piece.type == 1) {
                  if (pieceFound(design, board, board.player, pos, n) ||
                      pieceFound(design, board, board.player, pos, s)) {
                      move.failed = true;
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
