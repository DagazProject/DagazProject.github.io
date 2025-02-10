(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "abyss-invariant") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knights) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (_.indexOf(knights, +piece.type) >= 0);
}

var checkJump = function(design, board, player, pos, o, d, angels) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (_.indexOf(angels, +piece.type) >= 0);
}

Dagaz.Model.checkPositions = function(design, board, player, positions) {
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var rookk  = design.getPieceType("RookK");
  var knight = design.getPieceType("Knight");
  var knightk= design.getPieceType("KnightK");
  var bishop = design.getPieceType("Bishop");
  var bishopk= design.getPieceType("BishopK");
  var queen  = design.getPieceType("Queen");
  var angel  = design.getPieceType("Angel");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king, knightk, bishopk], [rook, queen, rookk, angel])) return true;
       if (checkDirection(design, board, player, pos, s,  [king, knightk, bishopk], [rook, queen, rookk, angel])) return true;
       if (checkDirection(design, board, player, pos, w,  [king, knightk, bishopk], [rook, queen, rookk, angel])) return true;
       if (checkDirection(design, board, player, pos, e,  [king, knightk, bishopk], [rook, queen, rookk, angel])) return true;
       if (checkDirection(design, board, player, pos, nw, [king, knightk, pawn, rookk], [bishop, queen, bishopk, angel])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, knightk, pawn, rookk], [bishop, queen, bishopk, angel])) return true;
       if (checkDirection(design, board, player, pos, sw, [king, knightk, rookk], [bishop, queen, bishopk, angel])) return true;
       if (checkDirection(design, board, player, pos, se, [king, knightk, rookk], [bishop, queen, bishopk, angel])) return true;
       if (checkLeap(design, board, player, pos, n, nw, [knight, knightk])) return true;
       if (checkLeap(design, board, player, pos, n, ne, [knight, knightk])) return true;
       if (checkLeap(design, board, player, pos, s, sw, [knight, knightk])) return true;
       if (checkLeap(design, board, player, pos, s, se, [knight, knightk])) return true;
       if (checkLeap(design, board, player, pos, w, nw, [knight, knightk])) return true;
       if (checkLeap(design, board, player, pos, w, sw, [knight, knightk])) return true;
       if (checkLeap(design, board, player, pos, e, ne, [knight, knightk])) return true;
       if (checkLeap(design, board, player, pos, e, se, [knight, knightk])) return true;
       if (checkJump(design, board, player, pos, n, nw, [angel])) return true;
       if (checkJump(design, board, player, pos, n, ne, [angel])) return true;
       if (checkJump(design, board, player, pos, s, sw, [angel])) return true;
       if (checkJump(design, board, player, pos, s, se, [angel])) return true;
       if (checkJump(design, board, player, pos, w, nw, [angel])) return true;
       if (checkJump(design, board, player, pos, w, sw, [angel])) return true;
       if (checkJump(design, board, player, pos, e, ne, [angel])) return true;
       if (checkJump(design, board, player, pos, e, se, [angel])) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = Dagaz.Model.findPiece(design, b, board.player, king);     
      if ((pos === null) || (Dagaz.Model.checkPositions(design, b, board.player, [pos]))) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
