(function() {

var MAXVALUE              = 1000000;

Dagaz.AI.AI_FRAME         = 5000;
Dagaz.AI.MIN_DEEP         = 3;
Dagaz.AI.MAX_DEEP         = 10;
Dagaz.AI.EVAL_FACTOR      = 10;
Dagaz.AI.MAX_WEIGHT       = 1000;
Dagaz.AI.STALEMATE_RESULT = 1;
Dagaz.AI.KING_PRICE       = 1000;
Dagaz.AI.USE_COVER        = true;

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
  var r = 1;
  if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != board.player)) {
          return design.price[piece.type];
      }
  }
  return r;
}

UctAi.prototype.expand = function(ctx, node) {
  if (_.isUndefined(node.tree)) {
      node.board.moves = Dagaz.AI.generate(ctx, node.board);
      node.tree = _.map(node.board.moves, function(m) {
           return {
              parent: node,
              board:  node.board.apply(m),
              move:   m,
              cnt:    0,
              maxmin: null,
              weight: Dagaz.AI.heuristic(this, ctx.design, node.board, m)
           };
      }, this);
      if (node.tree.length == 0) {
           if (node.board.player == ctx.board.player) {
               node.maxmin = -Dagaz.AI.STALEMATE_RESULT * MAXVALUE;
           } else {
               node.maxmin = Dagaz.AI.STALEMATE_RESULT * MAXVALUE;
           }
           return;
      }
      node.tree = _.filter(node.tree, function(child) {
           if (child.weight <= 0) return false;
           var g = child.board.checkGoals(ctx.design, ctx.board.player);
           if (g !== null) {
               child.maxmin = g * MAXVALUE;
           }
           return true;
      });
  }
}

UctAi.prototype.minmax = function(ctx, node, deep) {
  var result = node.maxmin;
  if (deep > 0) {
      this.expand(ctx, node);
      _.each(node.tree, function(child) {
           var r = this.maxmin(ctx, child, deep - 1);
           if (r === null) r = 0;
           if ((result === null) || (result > r)) {
               result = r;
           }
      }, this);
  }
  return result;
}

UctAi.prototype.maxmin = function(ctx, node, deep) {
  var result = node.maxmin;
  if (deep > 0) {
      this.expand(ctx, node);
      _.each(node.tree, function(child) {
           var r = this.minmax(ctx, child, deep - 1);
           if (r === null) r = 0;
           if ((result === null) || (result < r)) {
               result = r;
           }
      }, this);
  }
  return result;
}

UctAi.prototype.getEval = function(ctx, node) {
  if (_.isUndefined(node.eval)) {
      node.eval = Dagaz.AI.eval(ctx.design, this.params, node.board, ctx.board.player);
  }
  return node.eval;
}

UctAi.prototype.shedule = function(ctx, childs) {
  if (childs.length == 0) return null;
  if (childs.length == 1) return childs[0];
  var all = 0;
  for (var i = 0; i < childs.length; i++) {
      if (childs[i].weight > 0) {
          all += childs[i].weight;
      }
  }
  var m = _.random(0, all - 1);
  all = 0;
  for (var i = 0; i < childs.length; i++) {
      if (childs[i].weight > 0) {
          all += childs[i].weight;
          if (m < all) {
              return childs[i];
          }
      }
  }
  return null;
}

UctAi.prototype.continue = function(ctx, node, deep) {
  var positions = [ node.board.lastt ];
  _.each(ctx.design.allPositions(), function(pos) {
      var piece = node.board.getPiece(pos);
      if ((piece !== null) && (piece.player != node.board.player) && (ctx.design.price[piece.type] >= Dagaz.AI.KING_PRICE)) {
          positions.push(pos);
      }
  });
  var childs = _.filter(node.tree, function(child) {
      var result = false;
      _.each(child.move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
              var piece = node.board.getPiece(a[0][0]);
              if (piece === null) return;
              if (ctx.design.price[piece.type] >= Dagaz.AI.KING_PRICE) return;
              if (_.indexOf(positions, a[1][0]) >= 0) result = true;
          }
          if ((a[0] !== null) && (a[1] === null) && (_.indexOf(positions, a[0][0]) >= 0)) result = true;
      });
      return result;
  });
  if ((deep == 1) && (childs.length == 0)) {
      childs = node.tree;
  }
  return this.shedule(ctx, childs);
}

var div = function(a, b) {
  if (a > 0) {
      return (a / b) | 0;
  } else {
      return ((-a / b) | 0) * -1;
  }
}

UctAi.prototype.simulate = function(ctx, node, eval, deep) {
  this.expand(ctx, node);
  if (node.tree.length == 0) return node.maxmin;
  if ((node.board.player == ctx.board.player) && (deep > Dagaz.AI.MAX_DEEP)) this.getEval(ctx, node);
  var child = null;
  for (var i = 0; i < node.tree.length; i++) {
      if (node.board.player == ctx.board.player) {
          if ((node.tree[i].maxmin !== null) && (node.tree[i].maxmin >= MAXVALUE)) { 
               child = node.tree[i];
               break;
          }
      } else {
          if ((node.tree[i].maxmin !== null) && (node.tree[i].maxmin <= -MAXVALUE)) {
               child = node.tree[i];
               break;
          }
      }
  }
  if (child === null) {
      if (deep == 0) {
          child = this.shedule(ctx, node.tree);
      } else {
          child = this.continue(ctx, node, deep);
      }
  }
  if (child === null) return this.getEval(ctx, node);
  child.cnt++;
  var r = this.simulate(ctx, child, eval, deep + 1);
  var delta = div(r - eval, Dagaz.AI.EVAL_FACTOR);
  if (node.board.player == ctx.board.player) {
      if ((node.maxmin === null) || (node.maxmin < r)) {
           node.maxmin = r;
      }
      node.weight += delta;
  } else {
      if ((node.maxmin === null) || (node.maxmin > r)) {
           node.maxmin = r;
      }
      node.weight -= delta;
  }
  if (node.weight < 1) node.weight = 1;
  if (node.weight > Dagaz.AI.MAX_WEIGHT) node.weight = Dagaz.AI.MAX_WEIGHT;
  return r;
}

UctAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
  if (!_.isUndefined(ctx.current)) {
      var tree = ctx.current.tree;
      delete ctx.current;
      for (var i = 0; i < tree.length; i++) {
          if (tree[i].move.toString() == board.move.toString()) {
              ctx.current = tree[i];
              break;
          }
      }
  }
  if (_.isUndefined(ctx.current)) {
      ctx.current = ctx;
      ctx.maxmin  = null;
  }
}

UctAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var result = null;
  this.expand(ctx, ctx.current);
  _.each(ctx.current.tree, function(node) {
       var r = this.minmax(ctx, node, Dagaz.AI.MIN_DEEP - 1);
       if (r === null) return;
       if (r <= -MAXVALUE) {
           node.weight = -1;
           console.log("Bad Move: " + node.move.toString() + ", weight = " + node.weight + ", eval = " + node.maxmin);
       }
       if (node.maxmin >= MAXVALUE) {
           console.log("Best Move: " + node.move.toString() + ", weight = " + node.weight + ", eval = " + node.maxmin);
           result = node;
       }
  }, this);
  _.filter(ctx.current.tree, function(node) {
       return node.weight >= 0;
  });
  ctx.timestamp = Date.now();
  if (result === null) {
      var eval = this.getEval(ctx, ctx.current);
      var cnt  = 0;
      while (Date.now() - ctx.timestamp < Dagaz.AI.AI_FRAME) {
          this.simulate(ctx, ctx.current, eval, 0);
          cnt++;
      }
      console.log("Cnt = " + cnt);
      var maxmin  = null;
      var results = [];
      _.each(ctx.current.tree, function(node) {
          var eval = node.maxmin;
          if (eval === null) return;
          if ((maxmin === null) || (maxmin < eval)) {
               console.log("Move: " + node.move.toString() + ", weight = " + node.weight + ", eval = " + node.maxmin + ", cnt = " + node.cnt);
               results = [ node ];
               maxmin = eval;
          } else if (maxmin == eval) {
               console.log("Move: " + node.move.toString() + ", weight = " + node.weight + ", eval = " + node.maxmin + ", cnt = " + node.cnt);
               results.push(node);
          }
      });
      if (results.length > 0) {
          if (results.length > 1) {
              result = results[_.random(0, results.length - 1)];
          } else {
              result = results[0];
          }
      }
  }
  if (result !== null) {
      ctx.current = result;
      return {
           done: true,
           move: result.move,
           time: Date.now() - ctx.timestamp,
           ai:  "uct"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
