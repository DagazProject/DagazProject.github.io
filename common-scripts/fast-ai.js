(function() {

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "fast") || (type == "opening")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board = board;
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  var best = null;
  _.each(moves, function(move) {
      if (best !== null) return;
      var board = ctx.board.apply(move);
      if (Dagaz.Model.checkGoals(ctx.design, board, ctx.board.player) > 0) {
          best = move;
      }
  });
  if (best !== null) {
      console.log("FAST: " + best.toString());
      return {
           done: true,
           move: best,
           time: Date.now() - ctx.timestamp,
           ai:  "fast"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
