(function() {

Dagaz.AI.AI_FRAME = 1000;

var bonus = [
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,   // Pawn
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0, 10, 10, 10, 10, 10, 10,  0,  0,  0,
     0,  0,  0, 20, 20, 20, 20, 20, 20, 20,  0,  0,
     0,  0, 10, 80, 90, 90, 90, 90, 80, 10, 10,  0,
     0,  0, 30, 80, 90, 90, 90, 90, 80, 20, 30,  0,
     0,  0, 25, 70, 80, 80, 80, 80, 70, 10, 25,  0,
     0,  0, 20, 60, 70, 70, 70, 70, 70, 60, 20,  0,
     0,  0, 15, 30, 30, 30, 30, 30, 30, 30, 15,  0,
     0,  0, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
  [  0,  0,  0,  0, 40, 40, 90, 80, 70, 70, 60, 60,   // Rook
     0,  0,  0,  0, 40, 40, 80, 60, 70, 70, 60, 60,
    10, 10, 10, 10, 70, 70,  0,  0, 80, 80, 30, 30,
    10, 10, 10, 10, 80, 80,  0,  0, 80, 80, 30, 30,
    10, 10, 50, 60, 90, 90, 90, 90, 80, 70, 60, 60,
    20, 20, 40, 40, 90, 90, 90, 90, 80, 70, 60, 60,
    20, 20, 40, 40, 90, 90, 90, 90, 80,  0, 30, 30,
     0,  0, 20, 20, 90, 90, 90, 90, 80,  0, 30, 30,
     0,  0, 20, 20, 80, 80, 80, 80, 80,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
  [  0,  0,  0,  0,  0, 10, 10,  0,  0,  0,  0,  0,   // Knight
     0,  0,  0, 80,  0,  0,  0,  0, 80,  0,  0,  0,
     0,  0,  0,  0, 80, 60,  0, 80,  0,  0,  0,  0,
     0,  0,  0, 40,  0,  0,  0,  0,  0, 70,  0,  0,
     0,  0, 50, 50, 90, 90, 90, 90, 50, 50,  0,  0,
     0,  0, 50, 50, 90, 90, 90, 90, 50, 50,  0,  0,
     0,  0, 10, 10, 90, 90, 90, 90, 10, 10,  0,  0,
     0,  0, 10, 10, 90, 90, 90, 90, 10, 10,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
  [  0,  0,  0,  0,  0, 10, 10,  0,  0,  0,  0,  0,   // Bishop
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0, 40,  0,  0,  0,  0,  0,  0, 40,  0,  0,
     0,  0,  0, 70,  0,  0,  0,  0, 70,  0,  0,  0,
     0,  0,  0,  0, 80,  0,  0, 80,  0,  0, 80,  0,
     0,  0,  0,  0,  0, 90, 90,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0, 90, 90,  0,  0,  0,  0,  0,
     0,  0,  0,  0, 80,  0,  0, 80,  0,  0,  0,  0,
     0,  0,  0, 70,  0,  0,  0,  0, 70,  0,  0,  0,
     0,  0, 40,  0,  0,  0,  0,  0,  0, 40,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
  [  0,  0,  0,  0, 40, 40, 90, 80, 70, 70, 60, 60,   // Queen
     0,  0,  0,  0, 40, 40, 80, 60, 70, 70, 60, 60,
    10, 10, 10, 10, 70, 70,  0,  0, 80, 80, 30, 30,
    10, 10, 10, 90, 80, 80,  0,  0, 90, 80, 30, 30,
    10, 10, 50, 60, 90, 90, 90, 90, 80, 70, 90, 60,
    20, 20, 40, 40, 90, 95, 95, 90, 80, 70, 60, 90,
    20, 20, 40, 40, 90, 95, 95, 90, 80,  0, 30, 30,
     0,  0, 20, 20, 90, 90, 90, 90, 80,  0, 30, 30,
     0,  0, 20, 20, 80, 80, 80, 80, 80,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,   // King
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
     0,  0,  0,  0, 90, 90, 90, 90,  0,  0,  0,  0,
     0,  0,  0,  0, 90, 90, 90, 90,  0,  0,  0,  0 ],
];

Dagaz.AI.getPrice = function(design, type, player, pos) {
  if (pos > 143) return 0;
  var r = design.price[type];
  if (player == 1) {
      r += bonus[type][pos];
  } else {
      r += bonus[type][143 - pos];
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r += Dagaz.AI.getPrice(design, piece.type, piece.player, pos) * 2;
      }
      pos = move.actions[0][0][0];
      piece = board.getPiece(pos);
      if (piece !== null) {
          r -= Dagaz.AI.getPrice(design, piece.type, piece.player, pos);
      }
  }
  return r;
}

var checkStep = function(design, board, player, pos, dir, types) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return _.indexOf(types, +piece.type) >= 0;
}

var checkSlide = function(design, board, player, pos, dir, types) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(types, +piece.type) >= 0;
}

Dagaz.AI.isAttacked = function(design, board, player, pos) {
return checkStep(design, board, player, pos, 12, [5, 3, 4]) || // ner - King
       checkStep(design, board, player, pos, 14, [5, 3, 4]) || // nwr - King
       checkStep(design, board, player, pos, 11, [5, 1, 4]) || // wr - King
       checkStep(design, board, player, pos, 10, [5, 1, 4]) || // er - King
       checkStep(design, board, player, pos,  9, [5, 1, 4]) || // sr - King
       checkStep(design, board, player, pos,  8, [5, 1, 4]) || // nr - King
       checkStep(design, board, player, pos, 15, [5, 3, 4]) || // ser - King
       checkStep(design, board, player, pos, 13, [5, 3, 4]) || // swr - King
       checkStep(design, board, player, pos, 16, [2])       || // nner - Knight
       checkStep(design, board, player, pos, 17, [2])       || // sswr - Knight
       checkStep(design, board, player, pos, 18, [2])       || // nnwr - Knight
       checkStep(design, board, player, pos, 19, [2])       || // sser - Knight
       checkStep(design, board, player, pos, 20, [2])       || // neer - Knight
       checkStep(design, board, player, pos, 21, [2])       || // swwr - Knight
       checkStep(design, board, player, pos, 22, [2])       || // nwwr - Knight
       checkStep(design, board, player, pos, 23, [2])       || // seer - Knight
       checkSlide(design, board, player, pos, 11, [4, 1])   || // wr - Queen, Rook
       checkSlide(design, board, player, pos, 10, [4, 1])   || // er - Queen, Rook
       checkSlide(design, board, player, pos,  9, [4, 1])   || // sr - Queen, Rook
       checkSlide(design, board, player, pos, 12, [4, 3])   || // ner - Queen, Bishop
       checkSlide(design, board, player, pos,  8, [4, 1])   || // nr - Queen, Rook
       checkSlide(design, board, player, pos, 15, [4, 3])   || // ser - Queen, Bishop
       checkSlide(design, board, player, pos, 13, [4, 3])   || // swr - Queen, Bishop
       checkSlide(design, board, player, pos, 14, [4, 3]);     // nwr - Queen, Bishop
}

Dagaz.AI.eval = function(design, params, board, player) {
  if (_.isUndefined(board.completeEval)) {
      board.completeEval = 0;
      _.each(design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if (piece === null) return;
           var v = Dagaz.AI.getPrice(design, piece.type, piece.player, pos);
           // Check Attacking
           if (Dagaz.AI.isAttacked(design, board, piece.player, pos)) {
               v = (v / 4) | 0;
           }
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
