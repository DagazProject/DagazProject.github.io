(function() {

var MAXVALUE           = 1000000;

Dagaz.AI.AI_FRAME      = 3000;
Dagaz.AI.NOISE_FACTOR  = 5;
Dagaz.AI.MAX_DEEP      = 4;
Dagaz.AI.FORCED_WEIGHT = 10;
Dagaz.AI.NO_MOVE_GOAL  = -1;

function MaxMinAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
  if (_.isUndefined(this.params.MAX_DEEP)) {
      this.params.MAX_DEEP = Dagaz.AI.MAX_DEEP;
  }
  if (_.isUndefined(this.params.FORCED_WEIGHT)) {
      this.params.FORCED_WEIGHT = Dagaz.AI.FORCED_WEIGHT;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "maxmin") || (type == "common") || (type == "1") || (type == "2")) {
      return new MaxMinAi(params, parent);
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
  var r = 1;
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

MaxMinAi.prototype.expand = function(ctx, node) {
  if (_.isUndefined(node.cache)) {
      node.board.moves = Dagaz.AI.generate(ctx, node.board);
      node.cache = _.chain(node.board.moves)
       .map(function(move) {
           return {
               goal:   null,
               player: node.board.player,
               move:   move,
               board:  node.board.apply(move),
               weight: Dagaz.AI.heuristic(this, ctx.design, node.board, move)
           };
        }, this)
       .filter(function(n) {
           return n.weight >= 0;
        }).value();
      if (this.params.NOISE_FACTOR > 1) {
           _.each(node.cache, function(n) {
              n.weight *= this.params.NOISE_FACTOR;
              n.weight += _.random(0, this.params.NOISE_FACTOR - 1);
           }, this);
      }
      for (var ix = 0; ix < node.cache.length; ix++) {
           n = node.cache[ix];
           if (!_.isUndefined(Dagaz.AI.isForced) && _.isUndefined(node.forced) && Dagaz.AI.isForced(ctx.design, node.board, n.move)) {
               n.weight += this.params.FORCED_WEIGHT;
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
      node.best = null;
  }
  if (!_.isUndefined(node.win)) {
      node.best = node.win;
  }
  if (node.best >= node.cache.length) {
      node.best = null;
  }
}

MaxMinAi.prototype.changeCache = function(ctx, board) {
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

MaxMinAi.prototype.setCache = function(ctx, ix) {
  ctx.win   = ctx.cache[ix].win;
  ctx.board = ctx.cache[ix].board;
  ctx.cache = ctx.cache[ix].cache;
}

MaxMinAi.prototype.eval = function(ctx, node) {
  if (!_.isUndefined(node.forced)) {
      return null;
  }
  if (_.isUndefined(node.eval)) {
      node.eval = Dagaz.AI.eval(ctx.design, this.params, node.board, node.player);
  }
  return node.eval;
}

MaxMinAi.prototype.shedule = function(ctx, node) {
  if (_.isUndefined(node.cache)) return null;
  if (!_.isUndefined(node.win))  return node.win;
  if (node.cache.length == 1) return 0;
  var s = 0;
  _.each(node.cache, function(n) {
      if (_.isUndefined(n.win)) {
          s += n.weight + 1;
      }
  });
  if (s == 0) return null;
  var v = _.random(0, s - 1);
  s = 0;
  for (var ix = 0; ix < node.cache.length; ix++) {
      var n = node.cache[ix];
      if (_.isUndefined(n.win)) {
          s += n.weight + 1;
          if (v < s) {
              return ix;
          }
      }
  }
  return null;
}

MaxMinAi.prototype.proceed = function(ctx, node, deep) {
  this.expand(ctx, node);
  if (node.goal !== null) {
      node.val = node.goal * MAXVALUE;
      return;
  }
  if ((deep < this.params.MAX_DEEP) && _.isUndefined(node.forced)) {
      node.val = this.eval(ctx, node);
      return;
  }
  if (deep <= 0) {
      if (!_.isUndefined(node.forced)) {
          node.val = 0;
      } else {
          node.val = this.eval(ctx, node);
      }
      return;
  }
  var ix = this.shedule(ctx, node);
  if (ix === null) {
      node.val = -MAXVALUE;
      return;
  }
  this.proceed(ctx, node.cache[ix], deep - 1);
  var wins = 0;
  node.val = null;
  for (var i = 0; i < node.cache.length; i++) {
       var n = node.cache[i];
       if (!_.isUndefined(n.win)) {
           wins++;
           continue;
       }
       if (_.isUndefined(n.val) || (n.val === null)) continue;
       if ((node.val === null) || (node.val > -n.val)) {
           node.val  = -n.val;
           node.best = i;
       }
  }
  if (wins == node.cache.length) {
       node.val = MAXVALUE;
  }
}

var offset = function(deep) {
  var r = "";
  while (deep > 0) {
      r = "  " + r;
      deep--;
  }
  return r;
}

MaxMinAi.prototype.dump = function(ctx, node, deep) {
  if (!deep) {
       deep = 0;
  }
  if (deep > 0) return;
  if (_.isUndefined(node.cache)) return;
  for (var i = 0; i < node.cache.length; i++) {
       var n = node.cache[i];
       if (!_.isUndefined(n.val)) {
           console.log("Dump: " + offset(deep) + n.move.toString() + ", player = " + n.player + ", goal = " + n.goal + ", win = " + n.win + ", forced = " + n.forced + ", weight = " + n.weight + ", eval = " + n.eval + ", val = " + n.val);
       }
       if (node.cache) {
           this.dump(ctx, n, deep + 1);
       }
  }
}

MaxMinAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.goal      = null;
  ctx.board     = board;
  ctx.timestamp = Date.now();
  this.changeCache(ctx, board);
}

MaxMinAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  this.expand(ctx, ctx);
  if (ctx.best === null) {
      _.each(ctx.cache, function(node) {
         this.expand(ctx, node);
      }, this);
      ctx.timestamp = Date.now();
      var cnt = 0;
      while (Date.now() - ctx.timestamp < this.params.AI_FRAME) {
          this.proceed(ctx, ctx, this.params.MAX_DEEP);
          cnt++;
      }
      console.log("Cnt = " + cnt + ", Val = " + ctx.val);
  }
  if ((ctx.best === null) && (ctx.cache.length > 0)) {
      ctx.cache = _.filter(ctx.cache, function(n) {
          return _.isUndefined(n.win);
      });
      if (ctx.cache.length == 1) {
          ctx.best = 0;
      }
      if (ctx.cache.length > 1) {
          ctx.best = _.random(0, ctx.cache.length - 1);
      }
  }
  this.dump(ctx, ctx);
  if (ctx.best !== null) {
      var r = {
           done: true,
           move: ctx.cache[ctx.best].move,
           time: Date.now() - ctx.timestamp,
           ai:  "maxmin"
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
