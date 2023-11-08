(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "crown-row-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) {
      var w = 0; var b = 0;
      for (var pos = 0; pos < Dagaz.Model.BOARD_SIZE; pos++) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           if (!design.inZone(0, piece.player, pos)) continue;
           var v = 1;
           var s = piece.getValue(0);
           if (s !== null) {
               v += s.length;
           }
           if (piece.player == 1) {
               w += v;
           } else {
               b += v;
           }
      }
      var r = null;
      if (w == b) r = 0;
      if (w > b) {
          if (player == 1) {
              r = 1;
          } else {
              r = -1;
          }
      } 
      if (w < b) {
          if (player == 1) {
              r = -1;
          } else {
              r = 1;
          }
      }
      if (r !== null) return {
          message: ' (' + w + ':' + b + ')',
          result: r
      };
  }
  return checkGoals(design, board, player);
}

})();
