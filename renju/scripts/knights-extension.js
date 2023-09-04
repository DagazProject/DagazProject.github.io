(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "knights-extension") {
     checkVersion(design, name, value);
  }
}

var getLine = function(design, board, player, pos, dir, ix) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.type != 0) return 0;
  if (piece.player != board.player) return 0;
  return +piece.getValue(ix);
}

var updateLine = function(design, board, player, pos, ix, vl, dir, move) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.type != 0) || (piece.player != board.player)) break;
      piece = piece.setValue(ix, vl);
      move.movePiece(p, p, piece);
      p = design.navigate(player, p, dir);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dirs   = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  _.each(board.moves, function(move) {
      if ((move.actions.length > 1) && (move.actions[1][0] === null) && (move.actions[1][1] !== null) && (move.actions[1][2] !== null)) {
          var pos   = move.actions[1][1][0];
          var piece = move.actions[1][2][0];
          for (var ix = 0; ix < dirs.length; ix++) {
               var vl = 1;
               vl += getLine(design, board, board.player, pos, dirs[ix], ix);
               vl += getLine(design, board, 0, pos, dirs[ix], ix);
               updateLine(design, board, board.player, pos, ix, vl, dirs[ix], move);
               updateLine(design, board, 0, pos, ix, vl, dirs[ix], move);
               piece = piece.setValue(ix, vl);
          }
          move.actions[1][2] = [ piece ];
      }
  });
  CheckInvariants(board);
}

})();
