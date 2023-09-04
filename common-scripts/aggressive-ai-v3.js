(function() {

var MAXVALUE              = 1000000;

Dagaz.AI.AI_FRAME         = 5000;
Dagaz.AI.NOISE_FACTOR     = 15;
Dagaz.AI.MATERIAL_FACTOR  = 10;
Dagaz.AI.MOBILITY_FACTOR  = 1;

Dagaz.AI.SUICIDE_FACTOR   = 2;
Dagaz.AI.ENEMY_FACTOR     = 1.3;
Dagaz.AI.COST_FACTOR      = 0.1;
Dagaz.AI.ENEMY_BONUS      = 20;
Dagaz.AI.CHECK_PROMOTION  = false;

function AggressiveAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
  if (_.isUndefined(this.params.MATERIAL_FACTOR)) {
      this.params.MATERIAL_FACTOR = Dagaz.AI.MATERIAL_FACTOR;
  }
  if (_.isUndefined(this.params.MOBILITY_FACTOR)) {
      this.params.MOBILITY_FACTOR = Dagaz.AI.MOBILITY_FACTOR;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "aggressive") || (type == "common") || (type == "1") || (type == "2")) {
      return new AggressiveAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var g = board.checkGoals(design, player);
  if (g !== null) {
      return g * MAXVALUE;
  }
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
  var captured = [];
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var pos = a[0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.player != board.player) {
                  if (board.lastt == pos) {
                      r += Dagaz.AI.ENEMY_BONUS;
                  }
                  r += design.price[piece.type] * Dagaz.AI.ENEMY_FACTOR;
              } else {
                  r -= design.price[piece.type];
              }
          }
          captured.push(pos);
      }
  });
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
          var pos    = a[0][0];
          var target = a[1][0];
          var piece  = board.getPiece(pos);
          if (piece !== null) {
              if (_.indexOf(captured, target) >= 0) {
                  r -= design.price[piece.type] * Dagaz.AI.SUICIDE_FACTOR;
              } else {
                  if (Dagaz.AI.CHECK_PROMOTION && (a[2] !== null)) {
                      var promoted = a[2][0];
                      r += design.price[promoted.type];
                      r -= design.price[piece.type];
                  }
              }
              var enemy = board.getPiece(target);
              if (enemy !== null) {
                  if (board.lastt == target) {
                      r += Dagaz.AI.ENEMY_BONUS;
                  }
                  r += design.price[enemy.type] * Dagaz.AI.ENEMY_FACTOR;
                  r -= design.price[piece.type];
                  captured.push(target);
              }
              if (!_.isUndefined(Dagaz.AI.COST_FACTOR) && (captured.length == 0)) {
                  r -= design.price[piece.type] * Dagaz.AI.COST_FACTOR;
              }
          }
      }
  });
  return r;
}

AggressiveAi.prototype.expand = function(ctx) {
  if (_.isUndefined(ctx.cache)) {
      ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
      ctx.cache = _.map(ctx.board.moves, function(m) {
          return {
             move:   m,
             board:  ctx.board.apply(m),
             weight: Dagaz.AI.heuristic(this, ctx.design, ctx.board, m)
          };
      }, this);
      if (this.params.NOISE_FACTOR > 0) {
          _.each(ctx.cache, function(n) {
             n.weight *= this.params.NOISE_FACTOR + 1;
             n.weight += _.random(0, this.params.NOISE_FACTOR);
          }, this);
      }
      ctx.cache = _.sortBy(ctx.cache, function(n) {
           return -n.weight;
      });
  }
}

AggressiveAi.prototype.dump = function(ctx, node) {
  console.log("Dump: " + node.move.toString() + ", a = " + node.a + ", b = " + node.b + ", h = " + node.weight);
}

AggressiveAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
  delete ctx.cache;
  delete ctx.best;
}

AggressiveAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  this.expand(ctx);
  ctx.timestamp = Date.now();
  var ix  = 0;
  var mxa = -MAXVALUE;
  var mxb = -MAXVALUE;
  while ((ix < ctx.cache.length) && ((Date.now() - ctx.timestamp < this.params.AI_FRAME) || _.isUndefined(ctx.best))) {
      var node = ctx.cache[ix];
      node.a   = Dagaz.AI.eval(ctx.design, this.params, node.board, ctx.board.player);
      if (mxa <= node.a) {
          mxa = node.a;
          node.board.moves = Dagaz.AI.generate(ctx, node.board);
          if (node.board.moves.length == 0) {
              ctx.best = ix;
              break;
          }
          var m = _.chain(node.board.moves)
           .map(function(m) {
                return {
                   move:   m,
                   weight: Dagaz.AI.heuristic(this, ctx.design, node.board, m)
                };
            }, this)
           .max(function(n) {
                return n.weight;
            }).value();
          var b = node.board.apply(m.move);
          if (b.checkGoals(ctx.design, ctx.board.player) === null) {
              node.b = Dagaz.AI.eval(ctx.design, this.params, b, ctx.board.player);
              if (this.params.MOBILITY_FACTOR != 0) {
                  b.moves = Dagaz.AI.generate(ctx, b);
                  node.b *= this.params.MATERIAL_FACTOR;
                  node.b += b.moves.length * this.params.MOBILITY_FACTOR;
              }
              if (this.params.NOISE_FACTOR > 0) {
                  node.b += _.random(0, this.params.NOISE_FACTOR);
              }
              if (mxb < node.b) {
                  mxb = node.b;
                  this.dump(ctx, node);
                  ctx.best = ix;
              }
          }
      }
      ix++;
  }
  console.log(ix + "/" + ctx.cache.length);
  if (!_.isUndefined(ctx.best)) {
      return {
           done: true,
           move: ctx.cache[ctx.best].move,
           time: Date.now() - ctx.timestamp,
           ai:  "aggressive"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
