(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "reversi-3d-extension") {
      checkVersion(design, name, value);
  }
}

var checkDirection = function(design, board, pos, dir, captured) {
  while (pos !== null) {
      pos = design.navigate(board.player, pos, dir);
      if (pos !== null) {
          var piece = board.getPiece(pos);
          if (piece === null) return false;
          if (piece.player == board.player) return captured.length > 0;
          captured.push(pos);
      }
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      _.each(design.allDirections(), function(dir) {
          var captured = [];
          if (checkDirection(design, board, pos, dir, captured)) {
              _.each(captured, function(pos) {
                  var piece = board.getPiece(pos);
                  if (piece !== null) {
                      piece = piece.changeOwner(board.player);
                      move.movePiece(pos, pos, piece);
                  }
              });
          }
      });
      if (move.actions.length <= 1) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
