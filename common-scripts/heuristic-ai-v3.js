(function() {

Dagaz.AI.NOISE_FACTOR = 10;

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "heuristic") || (type == "common") || (type == "1") || (type == "2")) {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

var isBadMove = function(design, board, move) {
  var b = board.apply(move);
  b.generate();
  var r = false;
  _.each(b.moves, function(m) {
      if (!r) {
          var board = b.apply(m);
          board.generate();
          if (board.moves.length == 0) {
              r = true;
          }
      }
  });
  return r;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var nodes = _.chain(ctx.board.moves)
     .map(function(m) {
          return {
             move:   m,
             weight: Dagaz.AI.heuristic(this, ctx.design, ctx.board, m)
          };
      }, this)
     .filter(function(n) {
          return n.weight >= 0;
      }).value();
  if (this.params.NOISE_FACTOR > 1) {
      _.each(nodes, function(n) {
         n.weight *= this.params.NOISE_FACTOR;
         n.weight += _.random(0, this.params.NOISE_FACTOR - 1);
      }, this);
  }
  if (nodes.length > 0) {
      nodes = _.sortBy(nodes, function(n) {
           return -n.weight;
      });
      var result = null;
      _.each(nodes, function(n) {
          if (result === null) {
              if (isBadMove(ctx.design, ctx.board, n.move)) return;
              console.log("Move: " + n.move.toString() + ", weight = " + n.weight);
              result = n.move;
          }
      });
      if (result !== null) {
          return {
               done: true,
               move: result,
               time: Date.now() - ctx.timestamp,
               ai:  "heuristic"
          };
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
