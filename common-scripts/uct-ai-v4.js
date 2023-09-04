(function() {

var MAXVALUE          = 1000000;

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.MIN_DEEP     = 4;
Dagaz.AI.UCT_COEFF    = Math.sqrt(2);
Dagaz.AI.NO_MOVE_GOAL = -1;

var branchCount       = 0;
var leafCount         = 0;
var termCount         = 0;

function UctAi(params, parent) {
  this.params = params;
  this.parent = parent;
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

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var piece = board.getPiece(a[0][0]);
          if (piece !== null) {
              r += design.price[piece.type];
          }
      }
  });
  return r;
}

UctAi.prototype.expand = function(ctx, node) {
  var all = 0;
  if (_.isUndefined(node.cache)) {
      node.hwm = 0;
      node.isForced = false;
      node.board.moves = Dagaz.AI.generate(ctx, node.board);
      node.cache = _.map(node.board.moves, function(m) {
           var w = Dagaz.AI.heuristic(this, ctx.design, node.board, m);
           if (w > 1) node.isForced = true;
           node.hwm += w;
           all += w;
           return {
              move:   m,
              weight: w,
              win:    w,
              all:    w
           };
      });
  }
  return all;
}

UctAi.prototype.simulate = function(ctx, node, player, eval) {
  var cnt = Dagaz.AI.MIN_DEEP;
  while (cnt > 0) {
      this.expand(ctx, node);
      if (node.cache.length == 0) {
          termCount++;
          if (node.board.player == player) {
              return Dagaz.AI.NO_MOVE_GOAL;
          } else {
              return -Dagaz.AI.NO_MOVE_GOAL;
          }
      }
      var child = null;
      if (node.cache.length > 1) {
          var v = 0;
          var l = _.random(0, node.hwm);
          for (var i = 0; i < node.cache.length; i++) {
               v += node.cache[i].weight;
               if (v >= l) {
                   child = node.cache[i];
                   break;
               }
          }
      } else {
          child = node.cache[0];
      }
      if (child === null) return -1;
      if (_.isUndefined(child.board)) {
          child.board = node.board.apply(child.move);
      }
      node = child;
      cnt--;
      if ((cnt < 0) && node.isForced) cnt = 1;
  }
  leafCount++;
  return Dagaz.AI.eval(ctx.design, this.params, node.board, player) - eval;
}

var uct = function(win, count, all) {
  if ((count > 0) && (all > 0)) {
      return Math.sqrt(Math.log(all) / count) * Dagaz.AI.UCT_COEFF +
             win / count;
  } else {
      return MAXVALUE;
  }
}

var clearStat = function() {
  branchCount = 0;
  leafCount   = 0;
  termCount   = 0;
}

UctAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board = board;
  delete ctx.cache;
}

UctAi.prototype.getMove = function(ctx) {
  ctx.all = this.expand(ctx, ctx);
  if (ctx.cache.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (ctx.cache.length == 1) {
      var r = {
           done: true,
           move: ctx.cache[0].move,
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
      return r;
  }
  clearStat();
  ctx.timestamp = Date.now();
  while (Date.now() - ctx.timestamp < Dagaz.AI.AI_FRAME) {
      var ix = null; var maxu = null;
      for (var i = 0; i < ctx.cache.length; i++) {
           var u = uct(ctx.cache[i].win, ctx.cache[i].all, ctx.all);
           if ((maxu === null) || (maxu < u)) {
                maxu = u;
                ix = i;
           }
      }
      var node = ctx.cache[ix];
      if (_.isUndefined(node.board)) {
          node.board = ctx.board.apply(node.move);
      }
      var s = Dagaz.AI.eval(ctx.design, this.params, ctx.board, ctx.board.player);
      var e = this.simulate(ctx, node, ctx.board.player, s);
      if (e > 0) {
          ctx.cache[ix].win += e;
      } else {
          e = Math.max(-e, 1);
      }
      ctx.cache[ix].all += e;
      ctx.all += e;
      branchCount++;
  }
  ctx.best = null; var maxw = null;
  for (var i = 0; i < ctx.cache.length; i++) {
      if ((maxw === null) || (maxw < ctx.cache[i].win)) {
           maxw = ctx.cache[i].win;
           ctx.best = i;
      }
  }
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
