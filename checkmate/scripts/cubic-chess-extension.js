(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cubic-chess-extension") {
      checkVersion(design, name, value);
  }
}

var buildStack = function(design, board, pos) {
  while (pos !== null) {
      var piece = board.getPiece(pos);
      if (piece === null) return pos;
      if (piece.player != board.player) return pos;
      pos = design.navigate(1, pos, 8);
  }
  return pos;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var s = design.navigate(1, move.actions[0][0][0], 8);
      var d = buildStack(design, board, move.actions[0][1][0]);
      if (d === null) {
          move.failed = true;
          return;
      }
      move.actions[0][1] = [d];
      while (s !== null) {
          d = design.navigate(1, d, 8);
          var piece = board.getPiece(s);
          if (piece === null) break;
          if (d === null) {
              move.failed = true;
              return;
          }
          move.movePiece(s, d, piece);
          s = design.navigate(1, s, 8);
      }
      while (d !== null) {
          if (board.getPiece(d) === null) break;
          move.capturePiece(d);
          d = design.navigate(1, d, 8);
      }
  });
  CheckInvariants(board);
}

})();
