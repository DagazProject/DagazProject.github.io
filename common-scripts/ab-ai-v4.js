(function() {

var MAXVALUE          = 1000000;

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.NOISE_FACTOR = 10;
Dagaz.AI.NO_MOVE_GOAL = -1;

var branchCount       = 0;
var leafCount         = 0;
var termCount         = 0;

function AbAi(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "ab") || (type == "common") || (type == "1") || (type == "2") || (type == "3") || (type == "4")) {
      return new AbAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

AbAi.prototype.expand = function(node, ctx) {
  if (_.isUndefined(node.cache)) {
      node.board.moves = Dagaz.AI.generate(ctx, node.board);
      node.cache = _.chain(node.board.moves)
       .map(function(m) {
           return {
               move:   m,
               board:  node.board.apply(m),
               weight: Dagaz.AI.heuristic(this, ctx.design, node.board, m) * Dagaz.AI.NOISE_FACTOR +
                       _.random(0, Dagaz.AI.NOISE_FACTOR - 1)
           };
        }, this)
       .sortBy(function(n) {
           return -n.weight;
        }).value();
  }
}

var goalVector = function(design, goal, player) {
  var r = _.range(design.getPlayersCount());
  if (player - 1 <= r.length) {
      r[player - 1] = goal * MAXVALUE;
  }
  return r;
}

var estimate = function(values, player) {
  var r = 0;
  for (var p = 0; p < values.length; p++) {
      if (p == player - 1) {
          r += values[p];
      } else {
          r -= values[p];
      }
  }
  return r;
}

AbAi.prototype.ab = function(node, ctx, level) {
  if (level >= Dagaz.AI.discardVector.length) {
      leafCount++;
      return Dagaz.AI.getEval(ctx.design, node.board);
  }
  var g = Dagaz.Model.checkGoals(ctx.design, node.board, ctx.board.player);
  if (g !== null) {
      termCount++;
      return goalVector(ctx.design, g, ctx.board.player);
  }
  this.expand(node, ctx);
  if (node.cache.length == 0) {
      termCount++;
      if (node.board.player == ctx.board.player) {
          return goalVector(ctx.design, Dagaz.AI.NO_MOVE_GOAL, node.board.player);
      } else {
          return goalVector(ctx.design, -Dagaz.AI.NO_MOVE_GOAL, node.board.player);
      }
  }
  var cnt = Dagaz.AI.discardVector[level];
  if ((cnt == 0) || (cnt > node.cache.length)) {
      cnt = node.cache.length;
  }
  node.best  = null;
  var result = null;
  var value  = null;
  for (var i = 0; i < cnt; i++) {
       var v = this.ab(node.cache[i], ctx, level + 1);
       var e = estimate(v, node.board.player);
       if ((result === null) || (value < e)) {
           node.best = i;
           result = v;
           value = e;
       }
       if (level == 0) {
           branchCount++;
           if (Date.now() - ctx.timestamp >= Dagaz.AI.AI_FRAME) break;
       }
  }
  return result;
}

var clearStat = function() {
  branchCount = 0;
  leafCount   = 0;
  termCount   = 0;
}

AbAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board = board;
  delete ctx.cache;
}

AbAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (ctx.board.moves.length == 1) {
      var r = {
           done: true,
           move: ctx.board.moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
      return r;
  }
  clearStat();
  Dagaz.Model.GetCover(ctx.design, ctx.board);
  this.expand(ctx, ctx);
  ctx.timestamp = Date.now();
  this.ab(ctx, ctx, 0);
  console.log("AI Stat: " + branchCount + "/" + leafCount + "/" + termCount);
  if (ctx.best !== null) {
      var r = {
           done: true,
           move: ctx.cache[ctx.best].move,
           time: Date.now() - ctx.timestamp,
           ai:  "ab"
      };
      return r;
  } else {
      delete ctx.cache;
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
