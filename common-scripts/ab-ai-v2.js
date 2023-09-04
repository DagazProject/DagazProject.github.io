(function() {

var MAXVALUE          = 1000000;

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.MIN_DEEP     = 3;
Dagaz.AI.NO_MOVE_GOAL = -1;

function AbAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.MIN_DEEP)) {
      this.params.MIN_DEEP = Dagaz.AI.MIN_DEEP;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "ab") || (type == "common") || (type == "1") || (type == "2")) {
      return new AbAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

AbAi.prototype.expand = function(ctx, node) {
  if (_.isUndefined(node.cache)) {
      node.board.moves = Dagaz.AI.generate(ctx, node.board);
      node.cache = _.chain(node.board.moves)
       .map(function(move) {
           return {
               goal:   null,
               player: node.board.player,
               move:   move,
               board:  node.board.apply(move),
               h:      Dagaz.AI.heuristic(this, ctx.design, node.board, move)
           };
        }, this)
       .filter(function(n) {
           return n.h >= 0;
        }).value();
      node.cache = _.sortBy(node.cache, function(n) {
           return -n.h;
      });
      for (var ix = 0; ix < node.cache.length; ix++) {
           n = node.cache[ix];
           n.goal = n.board.checkGoals(ctx.design, n.player);
           if (n.goal !== null) {
               if (n.goal > 0) {
                   node.win = ix;
               }
           } else {
               n.board.moves = Dagaz.AI.generate(ctx, n.board);
               if (n.board.moves.length == 0) {
                   n.goal = -Dagaz.AI.NO_MOVE_GOAL;
                   if (n.goal > 0) {
                       node.win  = ix;
                   }
               }
           }
      }
  }
  node.best = null;
  if (!_.isUndefined(node.win)) {
      node.best = node.win;
  }
}

AbAi.prototype.eval = function(ctx, node) {
  if (_.isUndefined(node.eval)) {
      node.eval = Dagaz.AI.eval(ctx.design, this.params, node.board, node.player);
  }
  return node.eval;
}

AbAi.prototype.ab = function(ctx, node, a, b, deep) {
  node.loss = 0;
  this.expand(ctx, node);
  if (node.goal !== null) {
      return -node.goal * MAXVALUE;
  }
  if (deep <= 0) {
      return -this.eval(ctx, node);
  }
  node.ix = 0;
  node.m  = a;
  while ((node.ix < node.cache.length) && (node.m <= b) && (Date.now() - ctx.timestamp < this.params.AI_FRAME)) { // m <= b
      var n = node.cache[node.ix];
        if (_.isUndefined(n.win)) {
          var t = -this.ab(ctx, n, -b, -node.m, deep - 1);
          if ((t !== null) && (t > node.m)) {
              node.m = t;
              node.best = node.ix;
          }
        } else {
            node.loss++;
        }
      node.ix++;
  }
  return node.m;
}

AbAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.goal      = null;
  ctx.board     = board;
  ctx.timestamp = Date.now();
  delete ctx.cache;
}

AbAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  this.expand(ctx, ctx);
  if (ctx.best === null) {
      for (var i = 0; i < ctx.cache.length; i++) {
           this.expand(ctx, ctx.cache[i]);
      }
      ctx.timestamp = Date.now();
      this.ab(ctx, ctx, -MAXVALUE, MAXVALUE, this.params.MIN_DEEP);
  }
  if (ctx.best !== null) {
      return {
           done: true,
           move: ctx.cache[ctx.best].move,
           time: Date.now() - ctx.timestamp,
           ai:  "ab"
      };
  } else {
      delete ctx.cache;
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
