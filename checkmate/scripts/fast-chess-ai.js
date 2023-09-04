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
  ctx.board = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  var best = null;
  _.each(ctx.board.moves, function(move) {
      var pos = Dagaz.AI.getTarget(move);
      if (pos === null) return;
      var piece = ctx.board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) return;
      best = move;
  });
  if (best !== null) {
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
