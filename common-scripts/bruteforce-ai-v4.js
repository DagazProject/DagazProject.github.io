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

BruteforceAi.prototype.isStalemate = function(node) {
  if (_.isUndefined(node.tree)) return false;
  for (var i = 0; i < node.tree.length; i++) {
       var child = node.tree[i];
       if (_.isUndefined(child.tree) || (child.tree.length > 0)) {
           return false;
       }
  }
  return true;
}

BruteforceAi.prototype.checkStalemate = function(ctx, node) {
  if (_.isUndefined(ctx.trace)) {
      while (!_.isUndefined(node.parent) && this.isStalemate(node)) {
          node.tree = [];
          node = node.parent;
      }
  }
}

BruteforceAi.prototype.expand = function(ctx, node) {
  if (_.isUndefined(node.tree)) {
      node.tree = [];
      _.each(Dagaz.AI.generate(ctx, node.board), function(move) {
           if (_.isUndefined(ctx.trace)) {
               var board = node.board.apply(move);
               if (!_.isUndefined(node.parent) && (node.parent.board.zSign == board.zSign)) {
                   node.back = move;
                   return;
               }
               if (this.isCached(ctx, board)) return;
               var child = {
                   level:  node.level + 1,
                   parent: node,
                   board:  board,
                   move:   move
               };
               if (board.checkGoals(ctx.design, board.player) !== null) {
                   ctx.trace = [ board.zSign ];
                   var q = child;
                   while (!_.isUndefined(q.parent)) {
                       q = q.parent;
                       ctx.trace.push(q.board.zSign);
                   }
                   node.tree = [];
               }
               node.tree.push(child);
               ctx.queue.push(child);
           }
           this.checkStalemate(ctx, node);
      }, this);
      node.hwm = 0;
  }
}

BruteforceAi.prototype.setContext = function(ctx, board) {
  if (_.isUndefined(ctx.current)) {
      ctx.board   = board;
      ctx.queue   = [ ctx ];
      ctx.current = ctx;
      ctx.level   = 0;
  } else {
      var result = null;
      if (ctx.current !== null) {
          if (!_.isUndefined(ctx.current.parent) && (ctx.current.parent.board.zSign == board.zSign)) {
              result = ctx.current.parent;
          } else {
              if (!_.isUndefined(ctx.current.tree)) {
                   _.each(ctx.current.tree, function(node) {
                        if (node.board.zSign == board.zSign) {
                            result = node;
                        }
                   });
              }
          }
      }
      ctx.current = result;
  }
}

BruteforceAi.prototype.getMove = function(ctx) {
  ctx.timestamp = Date.now();
  while (_.isUndefined(ctx.trace) && (ctx.queue.length > 0) && (Date.now() - ctx.timestamp < Dagaz.AI.AI_FRAME)) {
      var node = ctx.queue.shift();
      if (node.level < ctx.current.level) {
          ctx.queue.push(node);
          continue;
      }
      this.expand(ctx, node);
  }
  var result = null;
  if (ctx.current !== null) {
      this.expand(ctx, ctx.current);
      if (!_.isUndefined(ctx.trace)) {
          if (_.indexOf(ctx.trace, ctx.current.board.zSign) < 0) {
              if (!_.isUndefined(ctx.current.back)) {
                  result = ctx.current.back;
              }
          } else {
              _.each(ctx.current.tree, function(node) {
                  if (_.indexOf(ctx.trace, node.board.zSign) >= 0) {
                      result = node.move;
                  }
              });
          }
      } else {
          while (ctx.current.hwm < ctx.current.tree.length) {
              var child = ctx.current.tree[ctx.current.hwm];
              ctx.current.hwm++;
              if (!this.isStalemate(child)) {
                  result = child.move;
                  break;
              }
          }
          if (result === null) {
              result = ctx.current.back;
          }
      }
  }
  if (result === null) {
      return { done: true, ai: "nothing" };
  } else {
      return {
           done: true,
           move: result,
           time: Date.now() - ctx.timestamp,
           ai:  "bruteforce"
      };
  }
}

})();
