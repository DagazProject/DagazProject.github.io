(function() {

var penalty = [
  [-50,-50,-50,-50,-50,-50,-50,-50,   // Soldier
   -10,-10,-10,-10,-10,-10,-10,-10,
     0, 10, 30, 30, 30, 30, 10,  0,
     0, 10, 20, 20, 20, 20, 10,  0,
     0, 10, 10, 10, 10, 10, 10,  0,
     0,  0,  5,  5,  5,  5,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0 ],
  [-50,-40,-30,-30,-30,-30,-40,-50,   // Horse
   -40,-20,  0,  0,  0,  0,-20,-40,
   -30,  0, 10, 15, 15, 10,  0,-30,
   -30,  5, 15, 20, 20, 15,  5,-30,
   -30,  0, 15, 20, 20, 15,  0,-30,
   -30,  5, 10, 15, 15, 10,  5,-30,
   -40,-20,  0,  5,  5,  0,-20,-40,
   -50,-40,-30,-30,-30,-30,-40,-50 ],
  [-50,-20,-20,-20,-20,-20,-20,-50,   // Elephant
   -20,-10, -5, -5, -5, -5,-10,-20,
   -20, -5,  0,  0,  0,  0, -5,-20,
   -20, -5,  0,  0,  0,  0, -5,-20,
   -20, -5,  0,  0,  0,  0, -5,-20,
   -20, -5,  0,  0,  0,  0, -5,-20,
   -20,-10,-10,-10,-10,-10,-10,-20,
   -50,-20,-20,-20,-20,-20,-20,-50 ],
  [  0,  0,  0,  0,  0,  0,  0,  0,   // Chariot
     5, 10, 10, 10, 10, 10, 10,  5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
     0,  0,  0,  5,  5,  0,  0,  0 ],
  [  0,  0,  0,  0,  0,  0,  0,  0,   // Cannon
     5, 10, 10, 10, 10, 10, 10,  5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
     0,  0,  0,  5,  5,  0,  0,  0 ],
  [-50,-20,-20,-20,-20,-20,-20,-50,   // Mandarin
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -50,-20,-20,-20,-20,-20,-20,-50 ],
  [-50,-20,-20,-20,-20,-20,-20,-50,   // General
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -20,  0,  0,  0,  0,  0,  0,-20,
   -50,-20,-20,-20,-20,-20,-20,-50 ]
];

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
