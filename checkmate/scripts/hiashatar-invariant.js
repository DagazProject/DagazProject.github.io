(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hiashatar-invariant") {
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

var checkStop = function(design, board, player, pos, hia) {
  for (var dir = 0; dir < design.dirs.length; dir++) {
       var p = design.navigate(player, pos, dir);
       if (p !== null) {
           var piece = board.getPiece(p);
           if ((piece !== null) && (piece.player == player) && (piece.type == hia)) return true;
       }
  }
  return false;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders, hia) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      if (checkStop(design, board, player, p, hia)) return false;
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == knight);
}

Dagaz.Model.checkPositions = function(design, board, player, positions) {
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight");
  var bishop = design.getPieceType("Bishop");
  var queen  = design.getPieceType("Queen");
  var hia    = design.getPieceType("Hia");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king, hia], [rook, queen], hia)) return true;
       if (checkDirection(design, board, player, pos, s,  [king, hia], [rook, queen], hia)) return true;
       if (checkDirection(design, board, player, pos, w,  [king, hia], [rook, queen], hia)) return true;
       if (checkDirection(design, board, player, pos, e,  [king, hia], [rook, queen], hia)) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn, hia], [bishop, queen], hia)) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn, hia], [bishop, queen], hia)) return true;
       if (checkDirection(design, board, player, pos, sw, [king, hia], [bishop, queen], hia)) return true;
       if (checkDirection(design, board, player, pos, se, [king, hia], [bishop, queen], hia)) return true;
       if (checkLeap(design, board, player, pos, n, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, n, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, s, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, s, se, knight)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight)) return true;
  }
  return false;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  board.generate(design);
  if (board.moves.length == 0) {
      var pos = Dagaz.Model.findPiece(design, board, board.player, king);
      if (pos === null) return 1;
      if (Dagaz.Model.checkPositions(design, board, board.player, [pos])) {
          return 1;
      } else {
          return 0;
      }
  }
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos  = Dagaz.Model.findPiece(design, b, board.player, king);
      if ((pos !== null) && (Dagaz.Model.checkPositions(design, b, board.player, [pos]))) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
