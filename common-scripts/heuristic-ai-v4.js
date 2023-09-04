(function() {

Dagaz.AI.AI_FRAME = 3000;

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "heuristic") || (type == "common") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var simulate = function(ctx, node, player, deep) {
  node.b.moves = Dagaz.AI.generate(ctx, node.b);
  if (node.b.moves.length == 0) {
      node.e = Dagaz.AI.eval(ctx.design, node.b, player);
      return node;
  }
  if (node.b.player != player) {
      if ((node.b.moves.length == 1) && node.b.moves[0].isPass()) {
           node.b = node.b.apply(node.b.moves[0]);
           return simulate(ctx, node, player);
      }
      node.e = Dagaz.AI.eval(ctx.design, node.b, player);
      return node;
  }
  if ((node.b.moves.length == 1) && node.b.moves[0].isPass()) {
      node.e = Dagaz.AI.eval(ctx.design, node.b, player);
      return node;
  }
  node.n = _.map(node.b.moves, function(move) {
      return {
           o: node.b.player,
           m: move,
           b: node.b.apply(move),
           p: node
      };
  });
  var best = null;
  for (var i = 0; i < node.n.length; i++) {
       var r = simulate(ctx, node.n[i], player, deep + 1);
       if ((best === null) || (best.e < r.e)) {
           best = r;
       }
  }
  if (best !== null) {
      node.e = best.e;
  }
  return best;
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
  if (_.isUndefined(ctx.moves) || (ctx.moves.length == 0)) {
      Dagaz.Model.noRecursive = false;
      var nodes = _.map(ctx.board.moves, function(move) {
          return {
             o: ctx.board.player,
             m: move,
             b: ctx.board.apply(move),
             p: null
          };
      });
      ctx.timestamp = Date.now();
      var best = null;
      _.each(nodes, function(node) {
          var r = simulate(ctx, node, ctx.board.player, 0);
          if ((best === null) || (best.e < r.e)) {
               if (r.e > 0) {
                   best = r;
               }
          }
          if (Date.now() - ctx.timestamp > Dagaz.AI.AI_FRAME) return;
      });
      ctx.moves = [];
      while (best !== null) {
          ctx.moves.push(best.m);
          best = best.p;
      }
      Dagaz.Model.noRecursive = true;
  }
  if (ctx.moves.length > 0) {
      return {
           done: true,
           move: ctx.moves.pop(),
           time: Date.now() - ctx.timestamp,
           ai:  "heuristic"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
