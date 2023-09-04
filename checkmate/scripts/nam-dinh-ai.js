(function() {

Dagaz.AI.AI_FRAME     = 2000;
Dagaz.AI.REP_DEEP     = 30;
Dagaz.AI.MAX_QS_LEVEL = 4;
Dagaz.AI.MAX_AB_VARS  = 100;
Dagaz.AI.MAX_QS_VARS  = 10;
Dagaz.AI.STALEMATE    = -1;

var penalty = 
  [-300,-150,-100,-150,-300,
   -150,   0, -50,   0,-150,
   -100, -50,   0, -50,-100,
   -150,   0, -50,   0,-150,
   -300,-150,-100,-150,-300 ];

Dagaz.AI.getPrice = function(design, piece, pos) {
  var r = design.price[piece.type];
  r += penalty[pos];
  return r;
}

Dagaz.AI.isMajorPiece = function(type) {
  return type == 0;
}

var buildCover = function(design, board) {
  board.attackers = []; 
  _.each(design.allPositions(), function(pos) {
      board.attackers[pos] = [];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if (p === null) return;
          var x = board.getPiece(p);
          if (x === null) return;
          if (x.player == piece.player) return;
          p = design.navigate(board.player, p, dir);
          if (p === null) return;
          var x = board.getPiece(p);
          if (x === null) return;
          if (x.player == piece.player) return;
          if ((piece.type == 1) && (x.type == 0)) return;
          board.attackers[pos].push(p);
      });
  });
}

var getAttackers = function(design, board, player, pos) {
  if (_.isUndefined(board.attackers)) {
      buildCover(design, board);
  }
  if (_.isUndefined(board.attackers[pos])) return null;
  return board.attackers[pos];
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
          r += Dagaz.AI.getPrice(design, piece, pos);
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
           var attackers = getAttackers(design, board, piece.player, pos);
           if ((attackers !== null) && (attackers.length > 0)) {
               v = (v / 2) | 0;
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
