(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "amoeba-promote") {
     checkVersion(design, name, value);
  }
}

function isLast(design, board, player, pos) {
  var p = design.navigate(1, pos, 9);
  p = design.navigate(player, p, 3);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.type == 1) return false;
      }
      p = design.navigate(player, p, 3);
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Pawn");
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      var from = move.actions[0][0][0];
      var to = move.actions[0][1][0];
      var piece = board.getPiece(from);
      if (piece === null) return;
      if (piece.type != pawn) return;
      if (!isLast(design, board, board.player, to)) return;
      var pieces = [];
      pieces.push(piece.promote(design.getPieceType("Knight")));
      pieces.push(piece.promote(design.getPieceType("Rook")));
      move.actions[0][2] = pieces;
  });
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var f = false;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          var from = a[0][0];
          var piece = board.getPiece(from);
          if (piece === null) return;
          if (piece.type != pawn) return;
          var to = a[1][0];
          if (!isLast(design, board, piece.player, to)) return;
          var pieces = [];
          pieces.push(piece.promote(design.getPieceType("Knight")));
          pieces.push(piece.promote(design.getPieceType("Rook")));
          a[2] = pieces;
          f = true;
      });
      if (f) return;
      var b = board.apply(move);
      for (var pos = 49; pos < 49 * 2; pos++) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           if (piece.type != pawn) continue;
           if (!isLast(design, b, piece.player, pos)) continue;
           var pieces = [];
           pieces.push(piece.promote(design.getPieceType("Knight")));
           pieces.push(piece.promote(design.getPieceType("Rook")));
           move.actions.push([ [pos], [pos], pieces, 1]);
           break;
      }
  });
  CheckInvariants(board);
}

})();
