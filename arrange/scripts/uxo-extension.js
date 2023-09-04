(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "uxo-extension") {
     checkVersion(design, name, value);
  }
}

var isLine = function(design, board, player, pos, f, b) {
  var p = design.navigate(board.player, pos, f);
  if (p !== null) {
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.player != player)) return false;
      var q = design.navigate(board.player, p, f);
      if (q !== null) {
          piece = board.getPiece(q);
          if ((piece === null) || (piece.player != player)) return false;
      } else {
          q = design.navigate(board.player, pos, b);
          if (q === null) return false;
          piece = board.getPiece(q);
          if ((piece === null) || (piece.player != player)) return false;
      }
  } else {
      p = design.navigate(board.player, pos, b);
      if (p === null) return false;
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.player != player)) return false;
      p = design.navigate(board.player, p, b);
      if (p === null) return false;
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.player != player)) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos   = move.actions[0][1][0];
      var piece = move.actions[0][2][0];
      if (isLine(design, board, board.player, pos, 0, 3) || isLine(design, board, board.player, pos, 1, 2) ||
          isLine(design, board, board.player, pos, 4, 6) || isLine(design, board, board.player, pos, 5, 7)) {
          move.capturePiece(pos);
          move.dropPiece(pos, piece.promote(6));
          pos = design.navigate(board.player, pos, 8);
          if (pos === null) {
              move.failed = true;
              return;
          }
          _.each(design.allPositions(), function(p) {
              var q = design.navigate(board.player, p, 8);
              if (q === null) return;
              if (q != pos) return;
              if (board.getPiece(p) === null) return;
              move.capturePiece(p);
          });
          move.dropPiece(pos, piece.promote(+piece.type - 3), 2);
      }
  });
  CheckInvariants(board);
}

})();
