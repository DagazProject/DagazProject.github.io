(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "andalusia-invariant") {
     checkVersion(design, name, value);
  }
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

var checkDirection = function(design, board, player, pos, dir, types) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      return _.indexOf(types, +piece.type) >= 0;
  }
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return piece.type > 0;
}

var checkPositions = function(design, board, player, pos) {
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  if (checkDirection(design, board, player, pos, n, [0, 1, 2])) return true;
  if (checkDirection(design, board, player, pos, e, [0, 1, 2])) return true;
  if (checkDirection(design, board, player, pos, w, [0, 1, 2])) return true;
  if (checkDirection(design, board, player, pos, s, [1, 2])) return true;
  if (checkDirection(design, board, player, pos, nw, [0, 1, 2])) return true;
  if (checkDirection(design, board, player, pos, ne, [0, 1, 2])) return true;
  if (checkDirection(design, board, player, pos, sw, [1, 2])) return true;
  if (checkDirection(design, board, player, pos, se, [1, 2])) return true;
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos  = findPiece(design, b, board.player, 2);
      if ((pos === null) || checkPositions(design, b, board.player, pos)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
