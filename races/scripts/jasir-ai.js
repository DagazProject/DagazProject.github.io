(function() {

Dagaz.AI.AI_FRAME       = 1500;
Dagaz.AI.REP_DEEP       = 30;
Dagaz.AI.MAX_QS_LEVEL   = 3;
Dagaz.AI.MAX_AB_VARS    = 10;
Dagaz.AI.MAX_QS_VARS    = 2;
Dagaz.AI.STALEMATE      = 0;

var penalty = [
     0,  0,  0,  0,  0,
   100,100,100,100,100,
    20, 20, 20, 20, 20,
    10, 10, 30, 10, 10,
    20, 30, 30, 30, 20,
     0,  0,  0,  0,  0,
   -10,-10,-10,-10,-10 
];

Dagaz.AI.getPrice = function(design, type, player, pos) {
  if (pos > 34) return 0;
  var r = design.price[type];
  if (player == 1) {
      r += penalty[pos];
  } else {
      r += penalty[34 - pos];
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
  if (!move.isSimpleMove()) return false;
  var pos = move.actions[0][0][0];
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  pos = move.actions[0][1][0];
  piece = board.getPiece(pos);
  if (piece === null) return false;
  return true;
}

Dagaz.AI.inCheck = function(design, board) {
  return false;
}

var checkDir = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if  (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.player != player;
}

var isAttacked = function(design, board, player, pos) {
  return checkDir(design, board, player, pos, 4)  ||
         checkDir(design, board, player, pos, 6)  ||
         checkDir(design, board, player, pos, 8)  ||
         checkDir(design, board, player, pos, 10) ||
         checkDir(design, board, player, pos, 12) ||
         checkDir(design, board, player, pos, 14) ||
         checkDir(design, board, player, pos, 15);
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r += design.price[piece.type];
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
           var v = Dagaz.AI.getPrice(design, piece.type, piece.player, pos);
           // Check Attacking
           if (isAttacked(design, board, piece.player, pos)) {
               v = -10;
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
