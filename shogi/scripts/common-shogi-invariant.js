(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "common-shogi-invariant") {
      checkVersion(design, name, value);
  }
}

var pawnFound = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player == player) && (piece.type == design.getPieceType("Pawn"))) {
          return true;
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n  = design.getDirection("n");  var s  = design.getDirection("s");
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null)) {
          var pos = move.actions[0][0][0];
          var target = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && !design.inZone(0, board.player, pos)) {
               if ((piece.type == design.getPieceType("Pawn")) || (piece.type == design.getPieceType("Lance"))) {
                   if (design.navigate(board.player, target, n) === null) {
                       move.failed = true;
                       return;
                   }
               }
               if (piece.type == design.getPieceType("Knight")) {
                   var p = design.navigate(board.player, target, n);
                   if ((p === null) || (design.navigate(board.player, p, n) === null)) {
                       move.failed = true;
                       return;
                   }
               }
               if (piece.type == design.getPieceType("Pawn")) {
                   if (pawnFound(design, board, board.player, target, n) || pawnFound(design, board, board.player, target, s)) {
                       move.failed = true;
                       return;
                   }
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
