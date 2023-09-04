(function() {

Dagaz.AI.AI_FRAME     = 2000;
Dagaz.AI.REP_DEEP     = 10;
Dagaz.AI.MAX_QS_LEVEL = 5;
Dagaz.AI.STALEMATE    = -1;

var penalty = 
  [   0,   0,   0,   0,   0,
    -25, 105, 135, 105, -25,
    -80,   0,  30,   0, -80,
    -85,  -5,  25,  -5, -85,
    -90, -10,  20, -10, -90 ];

Dagaz.AI.getPrice = function(design, piece, pos) {
  var r = design.price[piece.type];
  if (piece.player == 1) {
      r += penalty[pos];
  } else {
      r += penalty[24 - pos];
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          return Dagaz.AI.getPrice(design, piece, pos);
      }
  }
  return r;
}

var lockedPenalty = function(design, board, pos, player, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return 0;
      piece = board.getPiece(p);
  }
  return 100;
}

var attackerPenalty = function(design, board, pos, player, dir, n) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  p = design.navigate(player, p, n);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  while ((piece === null) || (piece.player == player))  {
      p = design.navigate(player, p, n);
      if (p === null) return 0;
      piece = board.getPiece(p);
  }
  return 200;
}

var defenderBonus = function(design, board, pos, player, dir, s) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  p = design.navigate(player, p, s);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, s);
      if (p === null) return 0;
      piece = board.getPiece(p);
  }
  if (piece.player != player) return 0;
  return 200;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = Dagaz.AI.getPrice(design, piece, pos);
      v -= lockedPenalty(design, board, pos, piece.player, 4);
      v -= attackerPenalty(design, board, pos, piece.player, 0, 4);
      v -= attackerPenalty(design, board, pos, piece.player, 1, 4);
      if (v == Dagaz.AI.getPrice(design, piece, pos)) v += 10000;
      v += defenderBonus(design, board, pos, piece.player, 0, 2);
      v += defenderBonus(design, board, pos, piece.player, 1, 2);
      if (piece.player == player) {
          r += v;
      } else {
          r -= v;
      }
  });
  return r;
}

})();
