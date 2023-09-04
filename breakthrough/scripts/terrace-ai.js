(function() {

Dagaz.AI.AI_FRAME     = 1500;
Dagaz.AI.REP_DEEP     = 30;
Dagaz.AI.MAX_QS_LEVEL = 3;
Dagaz.AI.MAX_AB_VARS  = 10;
Dagaz.AI.MAX_QS_VARS  = 2;
Dagaz.AI.STALEMATE    = 0;

var penalty = [
  [   1,   1,   1,   1,   1,   1,   1, 100,
      1,   1,   1,   1,   1,   1,  11,  14,
      1,   1,   1,   1,   1,   1,  10,  13,
      1,   1,   1,   1,   1,   6,   9,  12,
      1,   1,   1,   1,   2,   5,   8,  11,
      1,   1,   1,   2,   3,   4,   7,  10, 
      1,   1,   2,   3,   4,   5,   6,   9, 
      1,   2,   3,   4,   5,   6,   7,   8 ],
  [   1,   1,   1,   1,   1,   1,   1,   1,
      1,   5,   1,   1,   3,   4,   5,   1,
      1,   6,   1,   1,   3,   4,   4,   1,
      1,   7,   1,   1,   2,   3,   3,   1,
      1,   8,   8,   1,   1,   1,   1,   1,
      1,   9,   9,   5,   4,   1,   1,   1, 
      1,  10,   5,   4,   3,   1,   1,   1, 
      1,   1,   1,   1,   1,   1,   1,   1 ],
  [   1,   1,   1,   1,   1,   1,   1,   1,
      1,   5,   1,   1,   3,   4,   5,   1,
      1,   6,   1,   1,   3,   4,   4,   1,
      1,   7,   1,   1,   2,   3,   3,   1,
      1,   8,   8,   1,   1,   1,   1,   1,
      1,   9,   9,   5,   4,   1,   1,   1, 
      1,  10,   5,   4,   3,   1,   1,   1, 
      1,   1,   1,   1,   1,   1,   1,   1 ],
  [   1,   1,   1,   1,   1,   1,   1,   1,
      1,   5,   1,   1,   3,   4,   5,   1,
      1,   6,   1,   1,   3,   4,   4,   1,
      1,   7,   1,   1,   2,   3,   3,   1,
      1,   8,   8,   1,   1,   1,   1,   1,
      1,   9,   9,   5,   4,   1,   1,   1, 
      1,  10,   5,   4,   3,   1,   1,   1, 
      1,   1,   1,   1,   1,   1,   1,   1 ]
];

Dagaz.AI.getPrice = function(design, piece, pos) {
  if (pos > 63) return 0;
  var r = design.price[piece.type];
  if (piece.player == 1) {
      r = r * penalty[piece.type][pos];
  } else {
      r = r * penalty[piece.type][63 - pos];
  }
  return r;
}

Dagaz.AI.isMajorPiece = function(type) {
  return true;
}

Dagaz.AI.isRepDraw = function(board) {
  return false;
}

Dagaz.AI.see = function(design, board, move) {
  return true;
}

Dagaz.AI.inCheck = function(design, board) {
  return false;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player == board.player) {
              r -= Dagaz.AI.getPrice(design, piece, pos);
          } else {
              r += Dagaz.AI.getPrice(design, piece, pos);
          }
      }
  }
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
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
