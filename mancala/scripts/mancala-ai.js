(function() {

var MAX_DEEP = 100;

var isSimple = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "mancala-ai") {
      if (value == "simple") {
          isSimple = true;
          return;
      }
      MAX_DEEP = +value;
  } else {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(1, player, pos)) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var value = Math.abs(+piece.getValue(0));
              if (piece.player == player) {
                  r += value;
              } else {
                  r -= value;
              }
          }
      }
  });
  return r;
}

var findMove = function(design, board, player) {
  var src = null;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(1, player, pos)) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == player) && (+piece.getValue(0) < 0)) {
              src = pos;
          }
      }
  });
  if (src === null) return null;
  var dst = design.navigate(player, src, 0);
  if (dst === null) return null;
  var move = Dagaz.Model.createMove(0);
  move.movePiece(src, dst, null);
  board.moves = [ move ];
  Dagaz.Model.CheckInvariants(board);
  if (board.moves.length == 0) return null;
  return board.moves[0];
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var b = board; var m = move;
  if (board.moves.length > 1) {
      var stack = [ board.zSign ];
      while (m !== null) {
          if ((MAX_DEEP !== null) && (stack.length >= MAX_DEEP)) return -1;
          b = b.apply(m);
          b.player = board.player;
          if (_.indexOf(stack, b.zSign) >= 0) return -1;
          stack.push(b.zSign);
          if (isSimple) break;
          m = findMove(design, b, board.player);
      }
      var e = Dagaz.AI.eval(design, ai.params, b, board.player);
      console.log("Debug: " + move.toString() + ", deep = " + stack.length + ", eval = " + e);
      return e;
  }
  return 1;
}

})();
