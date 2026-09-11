(function() {

Dagaz.AI.inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "amoeba-invariant") {
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

var isHole = function(design, board, pos) {
  var dn = design.getDirection("down");
  var p = design.navigate(1, pos, dn);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.type == 0;
}

var isSafe = function(design, board, pos) {
  for (var dir = 0; dir < 4; dir++) {
       var p = design.navigate(1, pos, dir);
       if (p === null) continue;
       if (isHole(design, board, p)) return true;
  }
  return false;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders, checkSafe) {
  if (checkSafe) {
      if (isSafe(design, board, pos)) return false;
  }
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  if (checkSafe) {
      if (isSafe(design, board, p)) return false;
  }
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      if (isHole(design, board, p)) return false;
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      if (checkSafe) {
          if (isSafe(design, board, p)) return false;
      }
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight, checkSafe) {
  if (checkSafe) {
      if (isSafe(design, board, pos)) return false;
  }
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  if (checkSafe) {
      if (isSafe(design, board, p)) return false;
  }
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == knight);
}

Dagaz.Model.checkPositions = function(design, board, player, positions, checkSafe) {
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king], [rook], checkSafe)) return true;
       if (checkDirection(design, board, player, pos, s,  [king], [rook], checkSafe)) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [rook], checkSafe)) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [rook], checkSafe)) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [], checkSafe)) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [], checkSafe)) return true;
       if (checkDirection(design, board, player, pos, sw, [king], [], checkSafe)) return true;
       if (checkDirection(design, board, player, pos, se, [king], [], checkSafe)) return true;
       if (checkLeap(design, board, player, pos, n, nw, knight, checkSafe)) return true;
       if (checkLeap(design, board, player, pos, n, ne, knight, checkSafe)) return true;
       if (checkLeap(design, board, player, pos, s, sw, knight, checkSafe)) return true;
       if (checkLeap(design, board, player, pos, s, se, knight, checkSafe)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight, checkSafe)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight, checkSafe)) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight, checkSafe)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight, checkSafe)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos  = Dagaz.Model.findPiece(design, b, board.player, king);
      if (pos !== null) {
          if (!Dagaz.Model.checkPositions(design, b, board.player, [pos], move.mode == 0)) return;
      }
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
