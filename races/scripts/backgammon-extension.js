(function() {

Dagaz.Model.passForcedDraw = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "backgammon-extension") {
      checkVersion(design, name, value);
  }
}

var isClosed = function(design, board, pos) {
  var p = design.navigate(board.player, pos, 5);
  while (p !== null) {
      if (board.getPiece(p) !== null) return true;
      p = design.navigate(board.player, p, 5);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          pos = move.actions[0][0][0];
          if (isClosed(design, board, pos)) {
              move.failed = true;
              return;
          }
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (isClosed(design, board, pos)) {
                  move.failed = true;
                  return;
              }
              var p = design.navigate(board.player, 0, 1);
              while (p !== null) {
                  if (board.getPiece(p) === null) {
                      move.movePiece(pos, p, piece);
                      break;
                  }
                  p = design.navigate(board.player, p, 1);
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
