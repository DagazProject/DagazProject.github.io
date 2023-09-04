(function() {

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.MIN_DEEP     = 5;
Dagaz.AI.NOISE_FACTOR = 5;
Dagaz.AI.WIN_FACTOR   = 10;
Dagaz.AI.NO_MOVE_GOAL = 1;
Dagaz.AI.UCT_LEVEL    = 2;

function UctAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.MIN_DEEP)) {
      this.params.MIN_DEEP = Dagaz.AI.MIN_DEEP;
  }
  if (_.isUndefined(this.params.UCT_COEFF)) {
      this.params.UCT_COEFF = Math.sqrt(2);
  }
  if (_.isUndefined(this.params.WIN_FACTOR)) {
      this.params.WIN_FACTOR = Dagaz.AI.WIN_FACTOR;
  }
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
  if (_.isUndefined(this.params.UCT_LEVEL)) {
      this.params.UCT_LEVEL = Dagaz.AI.UCT_LEVEL;
  }
  if (_.isUndefined(this.params.WIN_WEIGHT)) {
      this.params.WIN_WEIGHT = 0.7;
  }
  if (_.isUndefined(this.params.LOSS_WEIGHT)) {
      this.params.LOSS_WEIGHT = -0.3;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "uct") || (type == "common") || (type == "1") || (type == "2")) {
      return new UctAi(params, parent);
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

var price = function(design, piece, player) {
  if (piece === null) return 0;
  if (piece.player == player) {
      return -design.price[piece.type];
  } else {
      return design.price[piece.type];
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          var pos = a[0][0];
          if (a[1] === null) {
              var piece = board.getPiece(pos);
              r += price(design, piece, board.player);
          } else {
              var target = a[1][0];
              var piece = board.getPiece(target);
              r += price(design, piece, board.player);
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

UctAi.prototype.expand = function(ctx, node) {
  var result = null;
  if (_.isUndefined(node.cache)) {
      node.board.moves = Dagaz.AI.generate(ctx, node.board);
      node.cache = _.chain(node.board.moves)
       .map(function(m) {
           return {
               move:  m,
               board: node.board.apply(m),
               cnt:   0,
               loss:  0,
               win:   Dagaz.AI.heuristic(this, ctx.design, node.board, m)
           };
        }, this)
       .filter(function(n) {
           return n.win >= 0;
        }).value();
      if (node.cache.length == 0) {
          node.all = 0;
      } else {
          node.all = _.chain(node.cache)
           .map(function(n) {
               return n.win;
            })
           .reduce(function(acc, x) {
               return acc + x;
            }, 0).value();
      }
      for (var ix = 0; ix < node.cache.length; ix++) {
           n = node.cache[ix];
           n.all = n.win;
           var goal = n.board.checkGoals(ctx.design, node.board.player);
           if (goal !== null) {
               if (goal > 0) {
                   node.best = ix;
                   node.goal = goal;
                   break;
               }
               if (n.board.player != node.board.player) {
                   goal = -goal;
               }
               n.goal = goal;
           } else {
               n.board.moves = Dagaz.AI.generate(ctx, n.board);
               if (n.board.moves.length == 0) {
                   node.goal = Dagaz.AI.NO_MOVE_GOAL;
                   if (node.goal > 0) {
                       node.best = ix;
                   }
                   break;
               }
           }
      }
  }
  if (!_.isUndefined(node.best)) {
      result = node.best;
  }
  return result;
}

UctAi.prototype.shedule = function(ctx, node, deep) {
  if (_.isUndefined(node.cache)) return null;
  if (node.cache.length == 0) return null;
  if (node.cache.length == 1) return 0;
  if (!_.isUndefined(Dagaz.AI.isForced) && _.isUndefined(node.forced)) {
      node.forced = _.filter(_.range(node.cache.length), function(ix) {
           return Dagaz.AI.isForced(ctx.design, node.board, node.cache[ix].move);
      });
  }
  if (!_.isUndefined(node.forced) && node.forced.length > 0) {
      for (var i = 0; i < node.forced.length; i++) {
           var ix = node.forced[i];
           var child = node.cache[ix];
           if (!_.isUndefined(child) && _.isUndefined(child.cache)) return ix;
      }
  }
  if (deep <= this.params.UCT_LEVEL) {
      var mx = 0;
      var ix = null;
      for (var i = 0; i < node.cache.length; i++) {
           var child = node.cache[i];
           var uct = Math.sqrt(Math.log(node.all) / child.all) * 
                     this.params.UCT_COEFF + child.win / child.all;
           if ((ix === null) || (mx < uct)) {
               ix = i;
               mx = uct;
           }
      }
      return ix;
  } else {
      return _.random(0, node.cache.length - 1);
  }
}

UctAi.prototype.proceed = function(ctx, node) {
  var deep  = 0;
  var stack = [];
  var last  = null;
  while (deep < this.params.MIN_DEEP) {
      stack.push(node);
      this.expand(ctx, node);
      if (!_.isUndefined(node.goal)) break;
      var ix = this.shedule(ctx, node, stack.length);
      if (ix === null) break;
      if (!_.isUndefined(node.forced) && (node.forced.length == 0)) {
          last = stack.length;
      }
      node = node.cache[ix];
      if (_.isUndefined(node.cache)) deep++;
  }
  var goal = null;
  if (!_.isUndefined(node.goal)) {
      goal = node.goal;
      if (node.board.player != ctx.board.player) {
          goal = -goal;
      }
      goal *= this.params.WIN_FACTOR;
  } else {
      if (!_.isUndefined(Dagaz.AI.eval) && (last !== null)) {
          node = stack[last - 1];
          goal = Dagaz.AI.eval(ctx.design, this.params, node.board, ctx.board.player) -
                 Dagaz.AI.eval(ctx.design, this.params, ctx.board,  ctx.board.player);
      }
  }
  var prev = ctx;
  for (var i = 0; i < stack.length; i++) {
      var n = stack[i];
      var c = 1;
      if ((goal !== null) && (goal != 0)) {
          var g = goal;
          if (prev.board.player != ctx.board.player) {
              g = -g;
          }
          if (g > 0) {
              n.win += g;
              c = g;
          }
          if (g < 0) {
              n.loss -= g;
              c = -g;
          }
      }
      n.all += c;
      n.cnt++;
      prev = n;
  }
}

UctAi.prototype.changeCache = function(ctx, board) {
  if (!_.isUndefined(ctx.cache) && (board.zSign != 0)) {
      for (var i = 0; i < ctx.cache.length - 1; i++) {
           if ((!_.isUndefined(ctx.cache[i].board)) && (ctx.cache[i].board.zSign == board.zSign)) {
               if (!_.isUndefined(board.move)) {
                   if (board.move.toString() != ctx.cache[i].move.toString()) continue;
               }
               if (!_.isUndefined(ctx.cache[i].cache)) {
                   ctx.all   = ctx.cache[i].all;
                   ctx.board = ctx.cache[i].board;
                   ctx.cache = ctx.cache[i].cache;
                   return;
               }
           }
      }
  }
  delete ctx.cache;
}

UctAi.prototype.setCache = function(ctx, ix) {
  ctx.all   = ctx.cache[ix].all;
  ctx.board = ctx.cache[ix].board;
  ctx.cache = ctx.cache[ix].cache;
}

UctAi.prototype.dump = function(node, eval) {
  console.log("UCT: " + node.move.toString() + ", win/loss/all/cnt = " + node.win + "/" + node.loss + "/" + node.all + "/" + node.cnt + ", eval = " + eval);
}

UctAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
  ctx.timestamp = Date.now();
  this.changeCache(ctx, board);
}

UctAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var ix = this.expand(ctx, ctx);
/*_.each(ctx.cache, function(node) {
      this.dump(node);
  }, this);*/
  if (ix === null) {
      _.each(ctx.cache, function(node) {
         this.expand(ctx, node);
      }, this);
      ctx.timestamp = Date.now();
      while (Date.now() - ctx.timestamp < this.params.AI_FRAME) {
         this.proceed(ctx, ctx);
      }
      var mx = 0;
      for (var i = 0; i < ctx.cache.length; i++) {
           var node = ctx.cache[i];
           if (!_.isUndefined(node.best)) continue;
           if (node.all == 0) continue;
           var eval = (this.params.WIN_WEIGHT * node.win + this.params.LOSS_WEIGHT * node.loss) / node.all;
           this.dump(node, eval);
           if ((ix === null) || (mx < eval)) {
                ix = i;
                mx = eval;
           } else {
                if ((eval == mx) && (_.random(0, 10) > this.params.NOISE_FACTOR)) {
                    ix = i;
                }
           }
      }
  }
  if (ix !== null) {
      var r = {
           done: true,
           move: ctx.cache[ix].move,
           time: Date.now() - ctx.timestamp,
           ai:  "uct"
      };
      this.setCache(ctx, ix);
      return r;
  } else {
      delete ctx.cache;
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
