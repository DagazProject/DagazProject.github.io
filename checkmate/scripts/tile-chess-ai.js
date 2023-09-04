(function() {

var penalty = [
[ -50,  -50,  -25,-10, -10, -25,  -50,   -50, // Bishop
  -50,  -25,  -10,  0,   0, -10,  -25,   -50,
  -25,  -10,    0, 25,  25,   0,  -10,   -25,
  -10,    0,   25, 40,  40,  25,    0,   -10,
  -10,    0,   25, 40,  40,  25,    0,   -10,
  -25,  -10,    0, 25,  25,   0,  -10,   -25,
  -50,  -25,  -10,  0,   0, -10,  -25,   -50,
  -50,  -50,  -25,-10, -10, -25,  -50,   -50
],
[-200, -100, -50, -50, -50, -50, -100, -200, // Knight
 -100,    0,   0,   0,   0,   0,    0, -100,
  -50,    0,  60,  60,  60,  60,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
  -50,    0,  30,  60,  60,  30,    0,  -50,
  -50,    0,  30,  30,  30,  30,    0,  -50,
 -100,    0,   0,   0,   0,   0,    0,  -100,
 -200,  -50, -25, -25, -25, -25,  -50,  -200
],
[ -60,  -30,  -10, 20,  20, -10,  -30,   -60, // Rook
   40,   70,   90,120, 120,  90,   70,    40,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60,
  -60,  -30,  -10, 20,  20, -10,  -30,   -60
],
[   0,    0,   0,   0,   0,   0,    0,    0, // Queen
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0, 
], 
[  50,  150, -25, -125, -125, -25, 150,  50, // King
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
   50,  150, -25, -125, -125, -25, 150,  50,
  150,  250,  75,  -25,  -25,  75, 250, 150
]];

var getPiece = function(board, pos) {
  if (pos < 64) return null;
  return board.getPiece(pos - 64);
}

Dagaz.AI.getPrice = function(design, type, player, pos) {
  if (pos >= 64) pos -= 64;
  if (pos >= 64) return 0;
  var r = design.price[type];
  if (player == 1) {
      r += penalty[type][pos];
  } else {
      r += penalty[type][63 - pos];
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      var shadow = getPiece(board, pos);
      if ((piece !== null) && (shadow !== null)) {
          r += Dagaz.AI.getPrice(design, shadow.type, piece.player, pos);
      }
  }
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var shadow = getPiece(board, pos);
      if (shadow === null) return;
      var v = Dagaz.AI.getPrice(design, shadow.type, piece.player, pos);
      if (piece.player == board.player) {
          r += v;
      } else {
          r -= v;
      }
  });
  return r;
}

})();
