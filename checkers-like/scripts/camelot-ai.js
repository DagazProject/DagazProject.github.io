(function() {

Dagaz.AI.AI_FRAME = 500;

var bonus = [
    0,    0,    0,    0,    0, 1000, 1000,    0,    0,    0,    0,    0,
    0,    0,   70,   80,   90,  100,  100,   90,   80,   70,    0,    0,
    0,   50,   60,   70,   80,   90,   90,   80,   70,   60,   50,    0,
   30,   40,   50,   60,   70,   80,   80,   70,   60,   50,   40,   30, 
   30,   30,   30,   50,   60,   70,   70,   60,   50,   30,   30,   30,
   20,   20,   20,   40,   40,   50,   50,   40,   40,   20,   20,   20,
   10,   20,   20,   30,   30,   30,   30,   30,   30,   20,   20,   10,
   10,   20,   20,   20,   20,   20,   20,   20,   20,   20,   20,   10,
   10,   10,   10,   10,   10,   10,   10,   10,   10,   10,   10,   10,
    0,    0,    0,   10,   10,   10,   10,   10,   10,    0,    0,    0,
    0,    0,    0,   10,   10,   10,   10,   10,   10,    0,    0,    0,
  -10,  -10,  -10,    0,    0,    0,    0,    0,    0,  -10,  -10,  -10,
  -20,  -20,  -20,  -20,  -20,  -20,  -20,  -20,  -20,  -20,  -20,  -20,
    0,  -30,  -30,   10,   10,   10,   10,   10,   10,  -30   -30,    0,
    0,    0,  -40,    0,    0,    0,    0,    0,    0,  -40,    0,    0,
    0,    0,    0,    0,    0, -100, -100,    0,    0,    0,    0,    0
];

Dagaz.AI.getPrice = function(design, piece, pos) {
  if (pos > 191) return 0;
  var r = design.price[piece.type];
  if (piece.player == 1) {
      r += bonus[pos];
  } else {
      r += bonus[191 - pos];
  }
  return r;
}

Dagaz.AI.eval = function(ai, design, board, player) {
  if (_.isUndefined(board.completeEval)) {
      board.completeEval = 0;
      _.each(design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if (piece === null) return;
           var v = Dagaz.AI.getPrice(design, piece, pos);
           if (piece.player == board.player) {
               board.completeEval += v;
           } else {
               board.completeEval -= v;
           }
      });
  }
  if (board.player == player) {
      return board.completeEval;
  } else {
      return -board.completeEval;
  }
}

})();
