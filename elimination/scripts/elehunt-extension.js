(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "elehunt-extension") {
     checkVersion(design, name, value);
  }
}

var checkLeap = function(design, board, pos, o, d, pygmy) {
  var p = design.navigate(board.player, pos, o);
  if (p === null) return false;
  p = design.navigate(board.player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.type == pygmy;
}

var checkStep = function(design, board, pos, dir, shaman) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      return piece.type == shaman;
  }
  p = design.navigate(board.player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.type == shaman;
}

var checkDir = function(design, board, move, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      move.capturePiece(p);
  }
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  var pygmy = design.getPieceType("Pygmy");
  if (checkLeap(design, board, p, n, nw, pygmy)) return true;
  if (checkLeap(design, board, p, n, ne, pygmy)) return true;
  if (checkLeap(design, board, p, s, sw, pygmy)) return true;
  if (checkLeap(design, board, p, s, se, pygmy)) return true;
  if (checkLeap(design, board, p, w, nw, pygmy)) return true;
  if (checkLeap(design, board, p, w, sw, pygmy)) return true;
  if (checkLeap(design, board, p, e, ne, pygmy)) return true;
  if (checkLeap(design, board, p, e, se, pygmy)) return true;
  var shaman = design.getPieceType("Shaman");
  return checkStep(design, board, p, n, shaman) || checkStep(design, board, p, nw, shaman) ||
         checkStep(design, board, p, w, shaman) || checkStep(design, board, p, sw, shaman) ||
         checkStep(design, board, p, s, shaman) || checkStep(design, board, p, se, shaman) ||
         checkStep(design, board, p, e, shaman) || checkStep(design, board, p, ne, shaman);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var unw = design.getDirection("unw"); var usw = design.getDirection("usw");
  var une = design.getDirection("une"); var use = design.getDirection("use");
  _.each(board.moves, function(move) {
      if (move.actions.length != 1) return;
      if (move.actions[0][0] === null) return;
      if (move.actions[0][1] === null) return;
      var pos = move.actions[0][1][0];
      var f = true;
      if (!checkDir(design, board, move, pos, unw)) f = false;
      if (!checkDir(design, board, move, pos, usw)) f = false;
      if (!checkDir(design, board, move, pos, une)) f = false;
      if (!checkDir(design, board, move, pos, use)) f = false;
      if (f) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
