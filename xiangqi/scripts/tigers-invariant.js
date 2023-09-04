(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tigers-invariant") {
     checkVersion(design, name, value);
  }
}

var findGeneral = function(design, board, player) {
  var r = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player) && (piece.type == 7)) {
          r = pos;
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  _.each(board.moves, function(move) {
      if (move.isPass()) return;
      var b = board.apply(move);
      var pos = findGeneral(design, b, board.player);
      while (pos !== null) {
          var piece = b.getPiece(pos);
          if (piece !== null) {
              if ((piece.type == 7) && (piece.player != board.player)) {
                  move.failed = true;
              }
              break;
          }
          pos = design.navigate(board.player, pos, 7);
      }
  });
  CheckInvariants(board);
}

})();
