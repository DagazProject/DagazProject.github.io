(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "adiuh-checkers-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = piece.getValue(0);
      if (v === null) {
          v = 1;
      } else {
          v++;
      }
      if (pos >= Dagaz.Model.BOARD_SIZE / 2) {
          v = -v;
      }
      if (player == 1) {
          r += v;
      } else {
          r -= v;
      }
      if (piece.player == player) {
          r++;
      } else {
          r--;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) {
      var w = 0; var b = 0;
      for (var pos = 0; pos < Dagaz.Model.BOARD_SIZE; pos++) {
           var piece = board.getPiece(pos);
           if (piece !== null) {
               var c = 1;
               var s = piece.getValue(0);
               if (s !== null) {
                   c += s.length;
               }
               if (pos < Dagaz.Model.BOARD_SIZE / 2) {
                   w += c;
               } else {
                   b += c;
               }
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
