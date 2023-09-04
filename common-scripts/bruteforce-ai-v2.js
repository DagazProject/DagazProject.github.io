(function() {

Dagaz.AI.AI_FRAME = 1000;

function BruteforceAi(params) {
  this.params = params;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "bruteforce") || (type == "solver")) {
      return new BruteforceAi(params);
  } else {
      return findBot(type, params, parent);
  }
}

BruteforceAi.prototype.isCached = function(ctx, board) {
  if (_.isUndefined(ctx.cache)) {
      ctx.cache = [];
  } else {
      if (_.indexOf(ctx.cache, board.zSign) >= 0) return true;
  }
  ctx.cache.push(board.zSign);
  return false;
}

BruteforceAi.prototype.expand = function(ctx, node) {
  if (_.isUndefined(node.tree)) {
      node.tree = [];
      _.each(Dagaz.AI.generate(ctx, node.board), function(move) {
           if (_.isUndefined(ctx.result)) {
               var board = node.board.apply(move);
               if (!_.isUndefined(node.parent) && (node.parent.board.zSign == board.zSign)) {
                   node.back = move;
                   return;
               }
               if (this.isCached(ctx, board)) return;
               var child = {
                   parent: node,
                   board:  board,
                   move:   move
               };
               if (board.checkGoals(ctx.design, board.player) !== null) {
                   ctx.result = child;
                   node.tree  = [];
               }
               node.tree.push(child);
           }
      }, this);
      node.hwm = 0;
  }
}

BruteforceAi.prototype.getNext = function(ctx, node) {
  if (_.isUndefined(node.tree)) {
      this.expand(ctx, node);
      return node;
  }
  if (node.hwm < node.tree.length) {
      var child = node.tree[node.hwm];
      node.hwm++;
      return this.getNext(ctx, child);
  }
  node.closed = true;
  if (_.isUndefined(node.parent)) return null;
  return this.getNext(ctx, node.parent);
}

BruteforceAi.prototype.setContext = function(ctx, board) {
  if (_.isUndefined(ctx.locate)) {
      ctx.locate = ctx;
      ctx.board  = board;
  } else {
      var r = null;
      var lastMove = board.move.toString();
      if (!_.isUndefined(ctx.locate.parent) && 
          !_.isUndefined(ctx.locate.back)   && 
          (ctx.locate.back.toString() == lastMove)) {
           r = ctx.locate.parent;
      } else {
           for (var i = 0; i < ctx.locate.tree.length; i++) {
                if (ctx.locate.tree[i].move.toString() == lastMove) {
                    r = ctx.locate.tree[i];
                    break;
                }
           }
      }
      ctx.locate = r;
  }
}

BruteforceAi.prototype.getMove = function(ctx) {
  ctx.timestamp = Date.now();
  if (_.isUndefined(ctx.current)) {
      ctx.current = ctx;
  }
  while (_.isUndefined(ctx.result) && (ctx.current !== null) && (Date.now() - ctx.timestamp < Dagaz.AI.AI_FRAME)) {
      ctx.current = this.getNext(ctx, ctx.current);
  }
  if ((ctx.locate === null) || (ctx.locate.closed && _.isUndefined(ctx.locate.back))) {
      return { done: true, ai: "nothing" };
  }
  if (ctx.locate.closed) {
      return {
           done: true,
           move: ctx.locate.back,
           time: Date.now() - ctx.timestamp,
           ai:  "bruteforce"
      };
  } else {
      var ix = 0;
      if (!_.isUndefined(ctx.locate.hwm) && (ctx.locate.hwm > 0)) {
          ix = ctx.locate.hwm - 1;
      }
      return {
           done: true,
           move: ctx.locate.tree[ix].move,
           time: Date.now() - ctx.timestamp,
           ai:  "bruteforce"
      };
  }
}

})();
