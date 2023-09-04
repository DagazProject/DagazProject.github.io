(function() {

var moves = [];

function DebugAi(params, parent) {
  this.params = params;
  this.parent = parent;
  moves.push("b4 - c3 - d3 - d2 - e3 x d2 x e1 x e3 x d1 x c1");
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "debug") || (type == "common")) {
      return new DebugAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

DebugAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

DebugAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  ctx.best = null;
  if (moves.length > 0) {
      var m = moves.shift();
      _.each(ctx.board.moves, function(move) {
          if (move.toString() == m) {
              ctx.best = move;
          }
      });
  }
  if (ctx.best !== null) {
      return {
           done: true,
           move: ctx.best,
           time: Date.now() - ctx.timestamp,
           ai:  "debug"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
