(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "knights-court-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return 1;
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkDirection = function(design, board, player, pos, dir, type) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  return (piece.player != player) && (piece.type == type);
}

var checkKnight = function(design, board, player, pos, d, o, type) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece == null) return false;
  return (piece.player != player) && (piece.type == type);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var knight = design.getPieceType("Knight");
  var bishop = design.getPieceType("Bishop");
  var rook   = design.getPieceType("Rook");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = findPiece(design, b, board.player, knight);
      if (pos === null) {
          move.failed = true;
          return;
      }
      if (checkDirection(design, b, board.player, pos, n, rook) ||
          checkDirection(design, b, board.player, pos, w, rook) ||
          checkDirection(design, b, board.player, pos, e, rook) ||
          checkDirection(design, b, board.player, pos, s, rook) ||
          checkDirection(design, b, board.player, pos, nw, bishop) ||
          checkDirection(design, b, board.player, pos, sw, bishop) ||
          checkDirection(design, b, board.player, pos, ne, bishop) ||
          checkDirection(design, b, board.player, pos, se, bishop) ||
          checkKnight(design, b, board.player, pos, nw, n, knight) ||
          checkKnight(design, b, board.player, pos, nw, w, knight) ||
          checkKnight(design, b, board.player, pos, ne, n, knight) ||
          checkKnight(design, b, board.player, pos, ne, e, knight) ||
          checkKnight(design, b, board.player, pos, se, s, knight) ||
          checkKnight(design, b, board.player, pos, se, e, knight) ||
          checkKnight(design, b, board.player, pos, sw, s, knight) ||
          checkKnight(design, b, board.player, pos, sw, w, knight)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
