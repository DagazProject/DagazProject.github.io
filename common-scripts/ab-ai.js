(function() {

var MAXVALUE          = 1000000;

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.MIN_DEEP     = 3;
Dagaz.AI.MAX_DEEP     = 3;
Dagaz.AI.NOISE_FACTOR = 3;
Dagaz.AI.NO_MOVE_GOAL = -1;

function AbAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
  if (_.isUndefined(this.params.MIN_DEEP)) {
      this.params.MIN_DEEP = Dagaz.AI.MIN_DEEP;
  }
  if (_.isUndefined(this.params.MAX_DEEP)) {
      this.params.MAX_DEEP = Dagaz.AI.MAX_DEEP;
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
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          var piece = board.getPiece(a[0][0]);
          if (piece !== null) {
              if (a[1] === null) {
                  r += design.price[piece.type];
              } else {
                  var target = board.getPiece(a[1][0]);
                  if (target !== null) {
                      r += design.price[target.type] * 2;
                  }
                  if (a[2] !== null) {
                      var promoted = a[2][0];
                      r += design.price[promoted.type];
                  }
                  if ((target !== null) || (a[2] !== null)) {
                      r -= design.price[piece.type];
                  }
              }
          }
      }
  });
  return r;
}

Dagaz.AI.isChessForced = function(design, board, move) {
  if (_.isUndefined(board.lastc)) return false;
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if ((a[0] !== null) && (a[1] !== null) && (a[1][0] == board.lastc)) {
           return true;
       }
  }
  return false;
}

Dagaz.AI.isCheckersForced = function(design, board, move) {
  return move.actions.length > 1;
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
      if (this.params.NOISE_FACTOR > 1) {
           _.each(node.cache, function(n) {
              n.h *= this.params.NOISE_FACTOR;
              n.h += _.random(0, this.params.NOISE_FACTOR - 1);
           }, this);
      }
      node.cache = _.sortBy(node.cache, function(n) {
           return -n.h;
      });
      for (var ix = 0; ix < node.cache.length; ix++) {
           n = node.cache[ix];
           if (!_.isUndefined(Dagaz.AI.isForced) && _.isUndefined(node.forced) && Dagaz.AI.isForced(ctx.design, node.board, n.move)) {
               node.forced = ix;
           }
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
  if (!_.isUndefined(node.forced)) {
      return null;
  }
  if (_.isUndefined(node.eval)) {
      node.eval = Dagaz.AI.eval(ctx.design, this.params, node.board, node.player);
  }
  return node.eval;
}

AbAi.prototype.ab = function(ctx, node, a, b, deep) {
  node.loss = 0;
  this.expand(ctx, node);
  if (node.goal !== null) {
      return node.goal * MAXVALUE;
  }
  if (deep <= 0) {
      return this.eval(ctx, node);
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

AbAi.prototype.changeCache = function(ctx, board) {
  if (!_.isUndefined(ctx.cache) && (board.zSign != 0)) {
      for (var i = 0; i < ctx.cache.length - 1; i++) {
           if ((!_.isUndefined(ctx.cache[i].board)) && (ctx.cache[i].board.zSign == board.zSign)) {
               if (!_.isUndefined(board.move)) {
                   if (board.move.toString() != ctx.cache[i].move.toString()) continue;
               }
               if (!_.isUndefined(ctx.cache[i].cache)) {
                   console.log("Cache found: " + ctx.cache[i].move.toString());
                   ctx.win   = ctx.cache[i].win;
                   ctx.board = ctx.cache[i].board;
                   ctx.cache = ctx.cache[i].cache;
                   return;
               }
           }
      }
  }
  delete ctx.cache;
}

AbAi.prototype.setCache = function(ctx, ix) {
  ctx.win   = ctx.cache[ix].win;
  ctx.board = ctx.cache[ix].board;
  ctx.cache = ctx.cache[ix].cache;
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
       console.log("Dump: " + offset(deep) + n.move.toString() + ", goal = " + n.goal + ", win = " + n.win + ", weight = " + n.h + ", eval = " + n.m);
       if (node.cache) {
           this.dump(ctx, n, deep + 1);
       }
  }
}

AbAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.goal      = null;
  ctx.board     = board;
  ctx.timestamp = Date.now();
  this.changeCache(ctx, board);
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
           if ((Date.now() - ctx.timestamp >= this.params.AI_FRAME) && this.parent) {
                return this.parent.getMove(ctx);
           }
      }
      ctx.timestamp = Date.now();
      var deep = this.params.MIN_DEEP;
      while ((deep <= this.params.MAX_DEEP) && (Date.now() - ctx.timestamp < this.params.AI_FRAME)) {
          this.ab(ctx, ctx, -MAXVALUE, MAXVALUE, deep);
          ctx.cache = _.sortBy(ctx.cache, function(n) {
               return -n.m;
          });
          console.log("Deep/All/Done/Loss = " + deep + "/" + ctx.cache.length + "/" + ctx.ix + "/" + ctx.loss);
          deep++;
      }
  }
  this.dump(ctx, ctx);
  if (ctx.best !== null) {
      var r = {
           done: true,
           move: ctx.cache[ctx.best].move,
           time: Date.now() - ctx.timestamp,
           ai:  "ab"
      };
      this.setCache(ctx, ctx.best);
      return r;
  } else {
      delete ctx.cache;
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
