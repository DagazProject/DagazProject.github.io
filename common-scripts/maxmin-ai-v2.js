(function() {

var MAXVALUE          = 200000000;

Dagaz.AI.MAX_DEEP     = 100000000;
Dagaz.AI.NOISE_FACTOR = 10000;
Dagaz.AI.AI_FRAME     = 1000;
Dagaz.AI.inProgress   = false;

function MaxMinAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.MAX_DEEP)) {
      this.params.MAX_DEEP = Dagaz.AI.MAX_DEEP;
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

MaxMinAi.prototype.eval = function(ctx, board, player) {
  return Dagaz.AI.eval(ctx.design, this.params, board, player);
}

Dagaz.AI.getChessForcedMove = function(ctx, board, player) {
  var pos = board.lastt;
  board.moves = Dagaz.AI.generate(ctx, board);
  var moves = _.chain(board.moves)
   .filter(function(m) {
       return (m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null);
    })
   .filter(function(m) {
       return m.actions[0][1][0] == pos;
    })
   .map(function(m) {
       var v = MAXVALUE;
       var piece = board.getPiece(m.actions[0][0][0]);
       if (piece !== null) {
           v = ctx.design.price[piece.type];
       }
       return {
           value: v,
           move:  m
       };
    })
   .sortBy(function(f) {
       return f.value;
    })
   .map(function(f) {
       return f.move;
    }).value();
  if (moves.length > 0) {
      return moves[0];
  } else {
      return null;
  }
}

Dagaz.AI.getCheckersForcedMove = function(ctx, board, player) {
  board.moves = Dagaz.AI.generate(ctx, board);
  var moves = _.filter(board.moves, function(m) {
      return m.actions.length > 1;
  });
  if (moves.length == 0) return null;
  if (moves.length == 1) return moves[0];
  var ix = _.random(0, moves.length - 1);
  return moves[ix];
}

Dagaz.AI.getForcedMove = function(ctx, board, player) {
  return null;
}

MaxMinAi.prototype.simulate = function(ctx, board, player, deep, noEval) {
  var p = player;
  if (board.parent) {
      p = board.parent.player;
  }
  var g = board.checkGoals(ctx.design, p);
  if (g !== null) {
      if (p !== player) {
          g = -g;
      }
      return {
          deep: deep,
          eval: MAXVALUE * g
      };
  }
  if (noEval) {
      return {
          deep: deep,
          eval: 0
      };
  }
  var move = Dagaz.AI.getForcedMove(ctx, board, player);
  while (move !== null) {
      board = board.apply(move);
      g = board.checkGoals(ctx.design, p);
      if (g !== null) {
          if (p !== player) {
              g = -g;
          }
          return {
              deep: deep,
              eval: MAXVALUE * g
          };
      }
      move = Dagaz.AI.getForcedMove(ctx, board, player);
      deep++;
  }
  return {
      deep: deep,
      eval: this.eval(ctx, board, player)
  };
}

MaxMinAi.prototype.expandMoves = function(ctx, board, player, cache, noEval, deep) {
  var result = null;
  board.moves = Dagaz.AI.generate(ctx, board);
  if (board.moves.length == 0) {
      if (board.player == player) {
          return -MAXVALUE;
      } else {
          return MAXVALUE;
      }
  }
  if (!_.isUndefined(Dagaz.AI.heuristic)) {
      board.moves = _.chain(board.moves)
       .map(function(move) {
            return {
               move: move,
               eval: Dagaz.AI.heuristic(this, ctx.design, board, move)
            };
        }, this)
       .filter(function(node) {
           return node.eval >= 0;
        })
       .sortBy(function(node) {
           return -node.eval;
        })
       .map(function(node) {
           return node.move;
        }).value();
  }
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var r = this.simulate(ctx, b, player, deep, noEval);
      var e = r.eval;
      var d = r.deep;
      if ((result === null) ||
         ((board.player == player) && (e > result)) ||
         ((board.player != player) && (e < result))) {
          result = e;
      }
      cache.push({
          board: b,
          move:  move,
          deep:  d,
          eval:  e,
          cnt:   0
      });
  }, this);
  return result;
}

MaxMinAi.prototype.changeCache = function(ctx, board) {
  ctx.board = board;
  if (!_.isUndefined(ctx.cache) && (board.zSign != 0)) {
      for (var i = 0; i < ctx.cache.length; i++) {
           if (ctx.cache[i].board.zSign == board.zSign) {
               if (!_.isUndefined(board.move)) {
                   if (board.move.toString() != ctx.cache[i].move.toString()) continue;
               }
               if (!_.isUndefined(ctx.cache[i].cache)) {
                   ctx.board = ctx.cache[i].board;
                   ctx.cache = ctx.cache[i].cache;
                   return;
               }
           }
      }
  }
  ctx.cache = [];
  this.expandMoves(ctx, board, board.player, ctx.cache, true, 0);
}

MaxMinAi.prototype.setCache = function(ctx, n) {
  ctx.board = ctx.cache[n].board;
  ctx.cache = ctx.cache[n].cache;
}

MaxMinAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  if (!Dagaz.AI.selector || (Dagaz.Model.getSetupSelector(2) == 1)) {
      this.changeCache(ctx, board);
  }
}

MaxMinAi.prototype.shedule = function(ctx, cache) {
  if (cache.length == 0) return null;
  return _.random(0, cache.length - 1);
}

MaxMinAi.prototype.proceed = function(ctx, cache, n, deep) {
  var node = cache[n];
  node.cnt++;
  if (!deep) {
      deep = 1;
  }
  if (deep < this.params.MAX_DEEP) {
      if (_.isUndefined(node.cache)) {
          node.cache = [];
          node.eval  = this.expandMoves(ctx, node.board, ctx.board.player, node.cache, false, deep);
      } else {
          var ix = this.shedule(ctx, node.cache);
          if (ix === null) {
              if (node.board.player == ctx.board.player) {
                  return -MAXVALUE;
              } else {
                  return MAXVALUE;
              }
          }
          var olde = node.cache[ix].eval;
          var r = this.proceed(ctx, node.cache, ix, deep + 1);
          var eval  = r.eval;
          node.deep = r.deep;
          if ((node.eval == olde) && (eval != node.eval)) {
              if (ctx.board.player == node.board.player) {
                  node.eval = _.chain(node.cache).map(function(n) {
                     return n.eval;
                  }).max().value();
              } else {
                  node.eval = _.chain(node.cache).map(function(n) {
                     return n.eval;
                  }).min().value();
              }
          } else {
              if (ctx.board.player == node.board.player) {
                  if (eval > node.eval) {
                      node.eval = eval;
                  }
              } else {
                  if (eval < node.eval) {
                      node.eval = eval;
                  }
              }
          }
      }
  }
  return {
      deep: node.deep,
      eval: node.eval
  };
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

var setup = function(design, board, player) {
  var e = "";
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != player)) {
          if (e != "") e = e + ",";
          e = e + Dagaz.Model.posToString(p, design);
      }
  });
  var f = "";
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player == player)) {
          if (f != "") f = f + ",";
          f = f + Dagaz.Model.posToString(p, design);
      }
  });
  return " [" + e + "/" + f + "]";
}

MaxMinAi.prototype.dumpAll = function(ctx, player, cache, deep) {
  if (!deep) {
       deep = 0;
  }
  if (deep > 0) return;
  for (var i = 0; i < cache.length; i++) {
       var node = cache[i];
       var eval = this.eval(ctx, node.board, player);
       console.log(offset(deep) + node.move.toString() + setup(ctx.design, node.board, player) + ", cnt/deep = " + node.cnt + "/" + node.deep + ", eval = " + eval + "/" + node.eval);
       if (node.cache) {
           this.dumpAll(ctx, player, node.cache, deep + 1);
       }
  }
}

MaxMinAi.prototype.getMove = function(ctx) {
  var result = null;
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (ctx.board.moves.length == 1) {
      return {
           done: true,
           move: ctx.board.moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  if (!Dagaz.AI.selector || (Dagaz.Model.getSetupSelector(2) == 1)) {
      Dagaz.AI.inProgress = true;
      for (var ix = 0; ix < ctx.cache.length; ix++) {
           var node = ctx.cache[ix];
           if (_.isUndefined(node.cache)) {
               node.cache = [];
               node.eval = this.expandMoves(ctx, node.board, ctx.board.player, node.cache, false, 1);
           }
           if (node.eval == MAXVALUE) {
               result = ix;
           }
      }
      while ((result === null) && (Date.now() - ctx.timestamp < this.params.AI_FRAME)) {
           var ix = this.shedule(ctx, ctx.cache);
           if (ix === null) break;
           var eval = this.proceed(ctx, ctx.cache, ix).eval;
      }
      this.dumpAll(ctx, ctx.board.player, ctx.cache);
      var eval = 0;
      if (result === null) {
          for (var ix = 0; ix < ctx.cache.length; ix++) {
               var node = ctx.cache[ix];
               if ((result === null) || (node.eval > eval)) {
                    result = ix;
                    eval = node.eval;
               } else {
                    if ((node.eval == eval) && (_.random(0, 10) > this.params.NOISE_FACTOR)) {
                        result = ix;
                    }
               }
          }
      }
      Dagaz.AI.inProgress = false;
      if (result !== null) {
          var r = {
              done: true,
              move: ctx.cache[result].move,
              time: Date.now() - ctx.timestamp,
              ai:  "maxmin"
         };
         this.setCache(ctx, result);
         return r;
      } else {
         ctx.cache = [];
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
