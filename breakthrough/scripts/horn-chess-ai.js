(function() {

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "breakthrough") || (type == "common")) {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

var isSafe = function(ctx, board) {
  var r = true;
  board.moves = Dagaz.AI.generate(ctx, board);
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      b.moves  = Dagaz.AI.generate(ctx, b);
      var mode = _.chain(b.moves).map(function(m) {return m.mode;}).max().value();
      if (mode < 1) {
          r = false;
      }
  });
  return r;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent !== null) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
}

Ai.prototype.getMove = function(ctx) {
  ctx.timestamp = Date.now();
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  var result = null;
  _.each(ctx.board.moves, function(move) {
      var board = ctx.board.apply(move);
      if (isSafe(ctx, board)) {
          if ((result === null) || (result.mode < move.mode)) {
               console.log("Move: " + move.toString() + ", mode = " + move.mode);
               result = move;
          }
      }
  });
  if (result !== null) {
      return {
           done: true,
           move: result,
           time: Date.now() - ctx.timestamp,
           ai:  "breakthrough"
      };
  }
  if (this.parent !== null) {
      return this.parent.getMove(ctx);
  }
}

})();
