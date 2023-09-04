(function() {

var MAXVALUE           = 1000000;

Dagaz.AI.AI_FRAME      = 3000;
Dagaz.AI.NOISE_FACTOR  = 5;
Dagaz.AI.MIN_WEIGHT    = 10;

function AggressiveAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
  if (_.isUndefined(this.params.MIN_WEIGHT)) {
      this.params.MIN_WEIGHT = Dagaz.AI.MIN_WEIGHT;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "aggressive") || (type == "common") || (type == "1") || (type == "2") || (type == "3") || (type == "4") || (type == "5") || (type == "6") || (type == "7")) {
      return new AggressiveAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

var getPrice = function(design, piece, player) {
  if (piece === null) return 0;
  var price = design.price[piece.type];
  if (piece.player == player) {
      return -price;
  } else {
      return price;
  }
}

Dagaz.AI.mobility = function(design, board, player) {
  var r = board.moves.length;
  _.each(board.moves, function(m) {
      _.each(m.actions, function(a) {
          if (a[0] !== null) {
              var piece = board.getPiece(a[0][0]);
              if (a[1] === null) {
                  r += getPrice(design, piece, player);
              } else {
                  piece = board.getPiece(a[1][0]);
                  r += getPrice(design, piece, player);
              }
          }
      });
  });
  return r;
}

var mobility = function(design, board, player) {
  if (board.player != player) {
      board = board.copy();
      board.player = player;
  }
  if (_.isUndefined(board.moves)) {
      board.generate(design);
  }
  return Dagaz.AI.mobility(design, board, player);
}

Dagaz.AI.eval = function(design, params, board, player) {
  return mobility(design, board, player) -
         mobility(design, board, board.player);
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var captured = [];
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var pos = a[0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              r += design.price[piece.type];
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
              var f = false;
              if (_.indexOf(captured, target) >= 0) {
                  r -= design.price[piece.type];
              } else {
                  if (a[2] !== null) {
                      var promoted = a[2][0];
                      r += design.price[promoted.type];
                      f = true;
                  }
              }
              var enemy = board.getPiece(target);
              if (enemy !== null) {
                  r += design.price[enemy.type] * 2;
                  f = true;
              }
              if (f) {
                  r -= design.price[piece.type];
              }
          }
      }
  });
  return r;
}

AggressiveAi.prototype.expand = function(ctx) {
  if (_.isUndefined(ctx.cache)) {
      ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
      ctx.cache = _.chain(ctx.board.moves)
       .map(function(m) {
           return {
              move:   m,
              board:  ctx.board.apply(m),
              weight: Dagaz.AI.heuristic(this, ctx.design, ctx.board, m)
           };
        }, this)
       .filter(function(n) {
           return n.weight >= 0;
        }).value();
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

var isSafe = function(ctx, board) {
  board.moves = Dagaz.AI.generate(ctx, board);
  for (var ix = 0; ix < board.moves.length; ix++) {
       var m = board.moves[ix];
       var b = board.apply(m);
       var g = b.checkGoals(ctx.design, board.player);
       if ((g !== null) && (g >= 0)) {
           return false;
       }
  }
  return true;
}

AggressiveAi.prototype.stat = function(ctx) {
  var mn = 0; var mx = 0;
  var cn = 0; var sm = 0;
  _.each(ctx.cache, function(node) {
      if (_.isUndefined(node.board.moves)) {
          node.board.moves = Dagaz.AI.generate(ctx, node.board);
      }
      if (cn == 0) {
          mn = node.board.moves.length;
          mx = node.board.moves.length;
      } else {
          if (mn > node.board.moves.length) mn = node.board.moves.length;
          if (mx < node.board.moves.length) mx = node.board.moves.length;
      }
      sm += node.board.moves.length;
      cn++;     
  });
  console.log("min/max/sum/count = " + mn + "/" + mx + "/" + sm + "/" + cn);
}

AggressiveAi.prototype.dump = function(ctx, node) {
  console.log("Dump: " + node.move.toString() + ", weight = " + node.weight + ", eval = " + node.eval);
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
  var ix = 0;
  var mx = -MAXVALUE;
  while (ix < ctx.cache.length) {
      var node = ctx.cache[ix];
      if (node.weight < this.params.MIN_WEIGHT) break;
      if (node.board.checkGoals(ctx.design, ctx.board.player) > 0) {
          mx = MAXVALUE;
          ctx.best = ix;
          node.eval = mx;
          this.dump(ctx, node);
          break;
      }
      if (isSafe(ctx, node.board)) {
          node.eval = Dagaz.AI.eval(ctx.design, this.params, node.board, ctx.board.player);
          if (_.isUndefined(ctx.best) || (mx < node.eval)) {
              ctx.best = ix;
              mx = node.eval;
              this.dump(ctx, node);
          }
      }
      ix++;
  }
  while ((ix < ctx.cache.length) && (Date.now() - ctx.timestamp < this.params.AI_FRAME)) {
      var node = ctx.cache[ix];
      if (isSafe(ctx, node.board)) {
          node.eval = Dagaz.AI.eval(ctx.design, this.params, node.board, ctx.board.player);
          if (_.isUndefined(ctx.best) || (mx < node.eval)) {
              this.dump(ctx, node);
              ctx.best = ix;
              mx = node.eval;
          }
      }
      ix++;
  }
//this.stat(ctx);
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
