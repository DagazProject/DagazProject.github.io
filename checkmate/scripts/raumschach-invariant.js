(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "raumschach-invariant") {
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

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  board.generate(design);
  if (board.moves.length == 0) {
      var pos = Dagaz.Model.findPiece(design, board, board.player, king);
      if (pos === null) return 1;
      if (Dagaz.Model.checkPositions(design, board, board.player, pos)) {
          return 1;
      } else {
          return 0;
      }
  }
  return checkGoals(design, board, player);
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

var checkGlide = function(design, board, player, pos, o, d, riders) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, o);
      if (p === null) return false;
      p = design.navigate(player, p, d);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, leapers) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return _.indexOf(leapers, +piece.type) >= 0;
}

var checkJump = function(design, board, player, pos, o, d, t, knight) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  p = design.navigate(player, p, t);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == knight);
}

Dagaz.Model.checkPositions = function(design, board, player, pos) {
  var king    = design.getPieceType("King");
  var pawn    = design.getPieceType("Pawn");
  var rook    = design.getPieceType("Rook");
  var knight  = design.getPieceType("Knight");
  var unicorn = design.getPieceType("Unicorn");
  var bishop  = design.getPieceType("Bishop");
  var queen   = design.getPieceType("Queen");
  var u  = design.getDirection("u");  var d  = design.getDirection("d");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  if (checkDirection(design, board, player, pos, u,  [king], [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, d,  [king], [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, n,  [king], [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, s,  [king], [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, w,  [king], [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, e,  [king], [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, nw, [king, pawn], [bishop, queen])) return true;
  if (checkDirection(design, board, player, pos, ne, [king, pawn], [bishop, queen])) return true;
  if (checkDirection(design, board, player, pos, sw, [king], [bishop, queen])) return true;
  if (checkDirection(design, board, player, pos, se, [king], [bishop, queen])) return true;
  if (checkLeap(design, board, player, pos, n, nw, [knight])) return true;
  if (checkLeap(design, board, player, pos, n, ne, [knight])) return true;
  if (checkLeap(design, board, player, pos, s, sw, [knight])) return true;
  if (checkLeap(design, board, player, pos, s, se, [knight])) return true;
  if (checkLeap(design, board, player, pos, w, nw, [knight])) return true;
  if (checkLeap(design, board, player, pos, w, sw, [knight])) return true;
  if (checkLeap(design, board, player, pos, e, ne, [knight])) return true;
  if (checkLeap(design, board, player, pos, e, se, [knight])) return true;
  if (checkJump(design, board, player, pos, u, n, n, knight)) return true;
  if (checkJump(design, board, player, pos, u, e, e, knight)) return true;
  if (checkJump(design, board, player, pos, u, w, w, knight)) return true;
  if (checkJump(design, board, player, pos, u, s, s, knight)) return true;
  if (checkJump(design, board, player, pos, d, n, n, knight)) return true;
  if (checkJump(design, board, player, pos, d, e, e, knight)) return true;
  if (checkJump(design, board, player, pos, d, w, w, knight)) return true;
  if (checkJump(design, board, player, pos, d, s, s, knight)) return true;
  if (checkJump(design, board, player, pos, u, u, n, knight)) return true;
  if (checkJump(design, board, player, pos, u, u, e, knight)) return true;
  if (checkJump(design, board, player, pos, u, u, w, knight)) return true;
  if (checkJump(design, board, player, pos, u, u, s, knight)) return true;
  if (checkJump(design, board, player, pos, d, d, n, knight)) return true;
  if (checkJump(design, board, player, pos, d, d, e, knight)) return true;
  if (checkJump(design, board, player, pos, d, d, w, knight)) return true;
  if (checkJump(design, board, player, pos, d, d, s, knight)) return true;
  if (checkGlide(design, board, player, pos, u, nw, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, u, ne, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, u, sw, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, u, se, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, d, nw, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, d, ne, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, d, sw, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, d, se, [unicorn, queen])) return true;
  if (checkGlide(design, board, player, pos, u, n, [bishop, queen])) return true;
  if (checkGlide(design, board, player, pos, u, e, [bishop, queen])) return true;
  if (checkGlide(design, board, player, pos, u, w, [bishop, queen])) return true;
  if (checkGlide(design, board, player, pos, u, s, [bishop, queen])) return true;
  if (checkGlide(design, board, player, pos, d, n, [bishop, queen])) return true;
  if (checkGlide(design, board, player, pos, d, e, [bishop, queen])) return true;
  if (checkGlide(design, board, player, pos, d, w, [bishop, queen])) return true;
  if (checkGlide(design, board, player, pos, d, s, [bishop, queen])) return true;
  if (checkLeap(design, board, player, pos, u, n, [king, pawn])) return true;
  if (checkLeap(design, board, player, pos, u, e, [king, pawn])) return true;
  if (checkLeap(design, board, player, pos, u, w, [king, pawn])) return true;
  if (checkLeap(design, board, player, pos, u, s, [king])) return true;
  if (checkLeap(design, board, player, pos, d, n, [king])) return true;
  if (checkLeap(design, board, player, pos, d, e, [king])) return true;
  if (checkLeap(design, board, player, pos, d, w, [king])) return true;
  if (checkLeap(design, board, player, pos, d, s, [king])) return true;
  if (checkLeap(design, board, player, pos, u, nw, [king])) return true;
  if (checkLeap(design, board, player, pos, u, ne, [king])) return true;
  if (checkLeap(design, board, player, pos, u, sw, [king])) return true;
  if (checkLeap(design, board, player, pos, u, se, [king])) return true;
  if (checkLeap(design, board, player, pos, d, nw, [king])) return true;
  if (checkLeap(design, board, player, pos, d, ne, [king])) return true;
  if (checkLeap(design, board, player, pos, d, sw, [king])) return true;
  if (checkLeap(design, board, player, pos, d, se, [king])) return true;
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = Dagaz.Model.findPiece(design, b, board.player, king);
      if (Dagaz.Model.checkPositions(design, b, board.player, pos)) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
