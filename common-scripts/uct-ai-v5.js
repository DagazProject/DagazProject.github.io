(function() {

var MAXVALUE          = 1000000;

Dagaz.AI.AI_FRAME     = 5000;
Dagaz.AI.MIN_DEEP     = 2;
Dagaz.AI.MAX_DEEP     = 10;
Dagaz.AI.WIN_EVAL     = 100;
Dagaz.AI.DRAW_EVAL    = 50;
Dagaz.AI.NOISE_FACTOR = 0;
Dagaz.AI.UCT_COEFF    = Math.sqrt(2);
Dagaz.AI.KING_TYPES   = [0];
Dagaz.AI.ONE_KING     = true;
Dagaz.AI.CHECK_GOALS  = false;

var maxDeep = 0;

function UctAi(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "uct") || (type == "common") || (type == "1") || (type == "2")) {
      return new UctAi(parent);
  } else {
      return findBot(type, params, parent);
  }
}

Dagaz.AI.eval = function(design, params, board, player, covered) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[+piece.type];
          if (_.isUndefined(covered) && (_.indexOf(covered, pos) >= 0)) {
              v = (v / 2) | 0;
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
  var captured = [];
  var price = null;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var piece = board.getPiece(a[0][0]);
          if (piece !== null) {
              r += design.price[+piece.type];
          }
          captured.push(a[0][0]);
      }
  });
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
          var target = board.getPiece(a[1][0]);
          if (target !== null) {
              r += design.price[+target.type];
          }
          var piece = board.getPiece(a[0][0]);
          if (price === null) {
              price = design.price[+piece.type];
          }
          if ((target !== null) && (_.indexOf(captured, a[1][0]) >= 0)) {
              r -= price;
              return;
          }
          if (piece !== null) {
              if (target !== null) {
                  r -= (design.price[+piece.type] / 2) | 0;
              }
              if ((a[2] !== null) && (a[2][0].type != +piece.type)) {
                 r += design.price[a[2][0].type];
              }
          }
      }
  });
  return r;
}

var uct = function(win, count, all) {
  return Math.sqrt(Math.log(all) / count) * Dagaz.AI.UCT_COEFF +
         win / count;
}

UctAi.prototype.simulate = function(ctx, node, player) {
  var board = node.b;
  var move = node.m;
  var deep = 0;
  var positions = null;
  var price = null;
  var last = null;
  var covered = [];
  var start = null;
  if (move.isSimpleMove()) {
      var piece = board.getPiece(move.actions[0][0][0]);
      if (piece !== null) {
          price = design.price[+piece.type];
          last  = move.actions[0][1][0];
          piece = board.getPiece(last);
          if ((piece === null) || (design.price[+piece.type] > price)) {
              last = null;
          }
      }
  }
  while (deep < Dagaz.AI.MAX_DEEP) {
      var moves = Dagaz.AI.generate(ctx, board);
      var goal  = null;
      if ((moves.length == 0) || Dagaz.AI.CHECK_GOALS) {
          goal = Dagaz.Model.checkGoals(ctx.design, board, player);
          if (goal !== null) {
              if (goal > 0)  return Dagaz.AI.WIN_EVAL;
              if (goal == 0) return Dagaz.AI.DRAW_EVAL;
              return null;
          }
      }
      if (moves.length == 0) {
          if (board.player != player) return Dagaz.AI.WIN_EVAL;
          return null;
      }
      if (board.player == player) {
          deep++;
          if (deep > maxDeep) {
              maxDeep = deep;
          }
          if (_.isUndefined(node.d) || (node.d < deep)) {
              node.d = deep;
          }
          positions = [];
          for (var pos = 0; pos < ctx.design.positions.length; pos++) {
               var piece = board.getPiece(pos);
               if ((piece !== null) && (piece.player == player) && (_.indexOf(Dagaz.AI.KING_TYPES, +piece.type) >= 0)) {
                   positions.push(pos);
                   if (Dagaz.AI.KING_TYPES.length < 2) break;
               }
          }
          last = null;
      } else {
          covered = [];
          if ((deep >= Dagaz.AI.MIN_DEEP) && (positions !== null)) {
               var f = true;
               for (var i = 0; i < moves.length; i++) {
                    for (var j = 0; j < moves[i].actions.length; j++) {
                         var a = moves[i].actions[j];
                         if ((a[0] !== null) && (a[1] !== null) && (_.indexOf(positions, a[1][0]) >= 0)) {
                             if ((last !== null) && (last == a[1][0])) return null;
                             covered.push(a[1][0]);
                             f = false;
                         }
                         if ((a[0] !== null) && (a[1] === null) && (_.indexOf(positions, a[0][0]) >= 0)) {
                             if ((last !== null) && (last == a[0][0])) return null;
                             covered.push(a[0][0]);
                             f = false;
                         }
                    }
               }
               if (start === null) {
                   start = Dagaz.AI.eval(ctx.design, [], board, player, covered);
               }
               if (f) break;
          }
      }
      var nodes = [];
      var all = 0;
      for (var i = 0; i < moves.length; i++) {
           var weight = Dagaz.AI.heuristic(this, ctx.design, board, moves[i]) | 0;
           if (weight <= 0) weight = 1;
           nodes.push({
               m: moves[i],
               h: weight
           });
           all += weight;
      }
      var lvl = _.random(0, all - 1);
      var all = 0;
      for (var i = 0; i < nodes.length; i++) {
          all += nodes[i].h;
          if ((lvl < all) || (i == nodes.length - 1)) {
              if ((board.player == player) && (positions !== null)) {
                  for (var j = 0; j < nodes[i].m.actions.length; j++) {
                       var a = nodes[i].m.actions[j];
                       if ((a[0] !== null) && (a[1] !== null)) {
                           positions.push(a[1][0]);
                       }
                  }
              }
              board = board.apply(nodes[i].m);
              break;
          }
      }
  }
  return Dagaz.AI.eval(ctx.design, [], board, player, covered) - start;
}

UctAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board = board;
}

UctAi.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  var nodes = _.map(moves, function(move) {
      var weight = Dagaz.AI.heuristic(this, ctx.design, ctx.board, move);
      if (weight <= 0) weight = 1;
//    console.log("DUMP " + weight + ": " + move.toString());
      if (Dagaz.AI.NOISE_FACTOR > 0) {
          weight = weight * Dagaz.AI.NOISE_FACTOR;
          weight += _.random(0, Dagaz.AI.NOISE_FACTOR - 1);
      }
      return {
          m: move,
          h: weight,
          s:(weight / 2) | 0,
          d: 0,
          w: 0,
          c: weight
      };
  });
  var all = nodes.length;
  if (!_.isUndefined(Dagaz.AI.MAX_MOVES) && (nodes.length > Dagaz.AI.MAX_MOVES)) {
      nodes =  _.sortBy(nodes, function(n) {
          return -n.h;
      });
      var truncated = [];
      for (var i = 0; i < Dagaz.AI.MAX_MOVES; i++) {
          truncated.push(nodes[i]);
      }
      nodes = truncated;
  }
  ctx.timestamp = Date.now();
  var cnt = 1;
  maxDeep = 0;
  while (Date.now() - ctx.timestamp < Dagaz.AI.AI_FRAME) {
      var node = _.max(nodes, function(n) {
          return uct(n.w + n.s, n.c, cnt);
      });
      if (_.isUndefined(node.b)) {
          node.b = ctx.board.apply(node.m);
      }
      var result = this.simulate(ctx, node, ctx.board.player);
      if ((result !== null) && (result > 0)) {
          if (result > Dagaz.AI.WIN_EVAL) {
              result = Dagaz.AI.WIN_EVAL;
          }
          node.w += result;
          node.c += result;
      } else {
          node.c++;
          cnt++;
      }
  }
  var best = _.max(nodes, function(n) {
      return n.w;
  });
  if (best.w == 0) {
      best = _.max(nodes, function(n) {
          return n.h;
      });
  }
  _.each(nodes, function(n) {
      console.log("Dump " + n.d + "/" + n.c + "/" + n.w + "/" + n.h + ": " + n.m.toString());
  });
  if (best !== null) {
      console.log("UCT " + all + "/" + cnt + "/" + maxDeep + "/" + best.c + "/" + best.w + "/" + best.h + ": " + best.m.toString());
      return {
           done: true,
           move: best.m,
           time: Date.now() - ctx.timestamp,
           ai:  "uct"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
