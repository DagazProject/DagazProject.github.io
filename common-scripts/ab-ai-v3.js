(function() {

var MAXVALUE          = 1000000;

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.MIN_DEEP     = 2;
Dagaz.AI.NO_MOVE_GOAL = -1;
Dagaz.AI.USE_COVER    = false;

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

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[piece.type];
          if (Dagaz.AI.USE_COVER) {
              var cover = board.getCover(design);
              var isAttacked = false;
              _.each(cover[pos], function(p) {
                  if (!isAttacked) {
                      var enemy = board.getPiece(p);
                      if ((enemy !== null) && (enemy.player != piece.player)) isAttacked = true;
                  }
              });
              if (isAttacked) {
                  v = (v / 2) | 0;
              }
          }
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return 1;
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

AbAi.prototype.move = function(node) {
  if (!_.isUndefined(node.move)) {
      return node.move.toString();
  } else {
      return "root";
  }
}

AbAi.prototype.ab = function(ctx, node, a, b, deep) {
  node.loss = 0;
  this.expand(ctx, node);
  if (node.goal !== null) {
      console.log("Goal: " + offset(Dagaz.AI.MIN_DEEP - deep) + this.move(node) + ", weight = " + node.h + ", eval = " + this.eval(ctx, node));
      return -node.goal * MAXVALUE;
  }
  if (deep <= 0) {
      console.log("Eval: " + offset(Dagaz.AI.MIN_DEEP - deep) + this.move(node) + ", weight = " + node.h + ", eval = " + this.eval(ctx, node));
      return -this.eval(ctx, node);
  }
  console.log("AbAi: " + offset(Dagaz.AI.MIN_DEEP - deep) + this.move(node) + ", weight = " + node.h + ", eval = " + this.eval(ctx, node));
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
  console.log("MnMx: " + offset(Dagaz.AI.MIN_DEEP - deep) + node.m);
  return node.m;
}

var offset = function(deep) {
  var r = "";
  if (deep % 2 != 0) {
      r = "MAX: ";
  } else {
      r = "MIN: ";
  }
  while (deep > 0) {
      r = "  " + r;
      deep--;
  }
  return r;
}

AbAi.prototype.dump = function(ctx, node, deep) {
  if (!deep) {
       deep = 0;
  }
  if (deep > 0) return;
  if (_.isUndefined(node.cache)) return;
  for (var i = 0; i < node.cache.length; i++) {
       var n = node.cache[i];       
       console.log("Dump: " + offset(deep) + n.move.toString() + ", weight = " + n.h + ", eval = " + this.eval(ctx, n));
       if (node.cache) {
           this.dump(ctx, n, deep + 1);
       }
  }
}

Dagaz.AI.setContext = function(board) {}

AbAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  Dagaz.AI.setContext(board);
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
//console.log("Eval: " + this.eval(ctx, ctx));
//this.dump(ctx, ctx);
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
