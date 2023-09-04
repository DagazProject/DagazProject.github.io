(function() {

var MAXVAL            = 100000;

Dagaz.AI.AI_FRAME     = 100000;
Dagaz.AI.MIN_DEEP     = 3;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "horn-chess-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  var white = null;
  var black = [];
  for (var pos = 0; pos < design.positions.length - 3; pos++) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player == 1) {
              if (white === null) {
                  black.push(pos);
              } else {
                  r += MAXVAL / 2;
              }
          } else {
              white = pos;
          }
      }
  }
  if (white !== null) {
      r += white;
  }
  if (black.length == 2) {
      if ((black[0] + 1 == black[1]) && (black[1] + 1 == white)) {
          if (board.player == 1) {
              r = MAXVAL;
          } else {
              r = -MAXVAL;
          }
          if (player == 1) {
              r = -r;
          }
      }
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var b = board.apply(move);
  return design.positions.length +
         Dagaz.AI.eval(design, ai.params, b, board.player) -
         Dagaz.AI.eval(design, ai.params, board, board.player);
}

})();
