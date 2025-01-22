(function() {

Dagaz.AI.inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rutland-invariant") {
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

var checkLeap = function(design, board, player, pos, o, d, types) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (_.indexOf(types, +piece.type) >= 0);
}

Dagaz.Model.checkPositions = function(design, board, player, positions) {
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight");
  var bishop = design.getPieceType("Bishop");
  var queen  = design.getPieceType("Queen");
  var crook  = design.getPieceType("CrownRook");
  var conc   = design.getPieceType("Concubine");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king], [rook, queen, conc, crook])) return true;
       if (checkDirection(design, board, player, pos, s,  [king], [rook, queen, conc, crook])) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [rook, queen, conc, crook])) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [rook, queen, conc, crook])) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn, crook], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn, crook], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, sw, [king, crook], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, se, [king, crook], [bishop, queen])) return true;
       if (checkLeap(design, board, player, pos, n, nw, [knight, conc])) return true;
       if (checkLeap(design, board, player, pos, n, ne, [knight, conc])) return true;
       if (checkLeap(design, board, player, pos, s, sw, [knight, conc])) return true;
       if (checkLeap(design, board, player, pos, s, se, [knight, conc])) return true;
       if (checkLeap(design, board, player, pos, w, nw, [knight, conc])) return true;
       if (checkLeap(design, board, player, pos, w, sw, [knight, conc])) return true;
       if (checkLeap(design, board, player, pos, e, ne, [knight, conc])) return true;
       if (checkLeap(design, board, player, pos, e, se, [knight, conc])) return true;
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
      if (Dagaz.Model.checkPositions(design, b, board.player, [pos])) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
