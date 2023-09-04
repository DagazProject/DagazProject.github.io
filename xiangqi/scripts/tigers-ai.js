(function() {

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if (type == "opening") {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board  = board;
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {      
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return { done: true, move: moves[0], ai: "once" };
  }
  var result = null;
  _.each(moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = ctx.board.getPiece(pos);
          if ((piece !== null) && (piece.type == 7)) {
              result = move;
          }
      }
  });
  if (result !== null) {
      return {
          done: true,
          move: result,
          ai:   "heuristic"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
