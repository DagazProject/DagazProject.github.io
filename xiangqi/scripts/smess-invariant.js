(function() {

Dagaz.AI.inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "smess-invariant") {
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
      if ((_.indexOf(leapers, +piece.type) < 0) && (_.indexOf(riders, +piece.type) < 0)) return false;
      p = design.navigate(player, p, +dir + 8);
      if (p === null) return false;
      return p == pos;
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  if (_.indexOf(riders, +piece.type) < 0) return false;
  p = design.navigate(player, p, +dir + 8);
  return p !== null;
}

Dagaz.Model.checkPositions = function(design, board, player, positions) {
  var king   = design.getPieceType("Brain");
  var pawn   = design.getPieceType("Ninny");
  var rook   = design.getPieceType("Numskull");
  var n  = design.getDirection("fn");  var w  = design.getDirection("fw");
  var s  = design.getDirection("fs");  var e  = design.getDirection("fe");
  var nw = design.getDirection("fnw"); var sw = design.getDirection("fsw");
  var ne = design.getDirection("fne"); var se = design.getDirection("fse");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, s,  [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, w,  [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, e,  [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, sw, [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, se, [king, pawn], [rook])) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("Brain");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var list = [];
      var pos  = Dagaz.Model.findPiece(design, b, board.player, king);
      if (pos !== null) {
          list.push(pos);
      }
      if (Dagaz.Model.checkPositions(design, b, board.player, list)) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
