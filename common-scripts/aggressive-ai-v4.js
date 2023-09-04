(function() {

var MAXVALUE              = 1000000;

Dagaz.AI.AI_FRAME         = 5000;
Dagaz.AI.NOISE_FACTOR     = 15;
Dagaz.AI.MATERIAL_FACTOR  = 1;
Dagaz.AI.MOBILITY_FACTOR  = 1;

Dagaz.AI.CAPTURING_FACTOR = 1;
Dagaz.AI.PROMOTING_FACTOR = 1;
Dagaz.AI.CREATING_FACTOR  = 1;
Dagaz.AI.SUICIDE_FACTOR   = 2;

Dagaz.AI.ATTACKING_FACTOR = 1;
Dagaz.AI.DEFENDING_FACTOR = 1;
Dagaz.AI.KING_PRICE       = 1000;

Dagaz.AI.FRIEND_FACTOR    = 1;
Dagaz.AI.ENEMY_FACTOR     = 1;
Dagaz.AI.EMPTY_FACTOR     = 1;

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
  if (_.isUndefined(this.params.CAPTURING_FACTOR)) {
      this.params.CAPTURING_FACTOR = Dagaz.AI.CAPTURING_FACTOR;
  }
  if (_.isUndefined(this.params.PROMOTING_FACTOR)) {
      this.params.PROMOTING_FACTOR = Dagaz.AI.PROMOTING_FACTOR;
  }
  if (_.isUndefined(this.params.CREATING_FACTOR)) {
      this.params.CREATING_FACTOR = Dagaz.AI.CREATING_FACTOR;
  }
  if (_.isUndefined(this.params.SUICIDE_FACTOR)) {
      this.params.SUICIDE_FACTOR = Dagaz.AI.SUICIDE_FACTOR;
  }
  if (_.isUndefined(this.params.ATTACKING_FACTOR)) {
      this.params.ATTACKING_FACTOR = Dagaz.AI.ATTACKING_FACTOR;
  }
  if (_.isUndefined(this.params.DEFENDING_FACTOR)) {
      this.params.DEFENDING_FACTOR = Dagaz.AI.DEFENDING_FACTOR;
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

var getCover = function(design, board, player, pos, ignore, compare) {
  return _.chain(board.cover[pos])
   .map(function(pos) {
        if (pos == ignore) return null;
        var piece = board.getPiece(pos);
        if (piece === null) return null;
        if (!compare(piece.player, player)) return null;
        return design.price[piece.type];
    }).compact()
   .sortBy(function(price) {
        return -price;
    }).value();
}

var eq = function(a, b) {
  return a == b;
}

var ne = function(a, b) {
  return a != b;
}

var isAttacked = function(design, board, player, stop, start, price) {
  var e = getCover(design, board, board.player, stop, start, ne);
  var s = 0;
  if (e.length > 0) {
      s = -price;
  }
  if (price < Dagaz.AI.KING_PRICE) {
      var f = getCover(design, board, board.player, stop, start, eq);
      while ((e.length > 0) && (f.length > e.length)) {
          s += e.pop();
          s -= f.pop();
      }
  }
  return s < 0;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r        = 0;
  var player   = board.player;
  var start    = null;
  var stop     = null;
  var captures = [];
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var pos = a[0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player != player)) {
               r += design.price[piece.type] * ai.params.CAPTURING_FACTOR;
               if (!_.isUndefined(board.bonus) && (board.bonus[pos] < 0)) {
                   r -= board.bonus[pos];
               }
          }
          captures.push(pos);
      }
      if ((a[0] !== null) && (a[1] !== null)) {
          if (start === null) {
              start = a[0][0];
              if (!_.isUndefined(board.bonus)) {
                  r += board.bonus[start];
              }
          }
          stop = a[1][0];
      }
  });
  var price = 0;
  if (start !== null) {
      var piece = board.getPiece(start);
      if (piece !== null) {
          price = design.price[piece.type];
      }
  }
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
          var pos = a[1][0];
          var piece = board.getPiece(pos);
          if (_.indexOf(captures, pos) < 0) {
              if ((piece !== null) && (piece.player != player)) {
                   r += design.price[piece.type] * ai.params.CAPTURING_FACTOR;
                   if (!_.isUndefined(board.bonus)) {
                       r += Math.abs(board.bonus[pos]);
                   }
              }
              if (a[2] !== null) {
                  var promoted = a[2][0];
                  r -= price * ai.params.SUICIDE_FACTOR;
                  if (promoted.player == player) {
                      r += design.price[promoted.type] * ai.params.PROMOTING_FACTOR;
                  }
              }
          } else {
              r -= price * ai.params.SUICIDE_FACTOR;
          }
      }
      if ((a[0] === null) && (a[1] !== null) && (a[2] !== null) && (_.indexOf(captures, a[1][0]) < 0)) {
          var pos = a[1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.player != player) {
                  r += design.price[piece.type] * ai.params.CAPTURING_FACTOR;
              }
          }
          piece = a[2][0];
          if (piece.player == player) {
              r += design.price[piece.type] * ai.params.CREATING_FACTOR;
          }
      }
  });
  if (!_.isUndefined(board.cover) && (start !== null) && (stop !== null)) {
      if (isAttacked(design, board, board.player, stop, start, price)) {
          r -= price * ai.params.SUICIDE_FACTOR;
      }
  }
  return r;
}

AggressiveAi.prototype.expand = function(ctx) {
  if (_.isUndefined(ctx.cache)) {
      ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
      ctx.cache = _.map(ctx.board.moves, function(m) {
          var b = ctx.board.apply(m);
          return {             
             move:   m,
             board:  b,
             goal:   b.checkGoals(ctx.design, ctx.board.player),
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
           if (n.goal !== null) {
               return -n.goal * MAXVALUE;
           }
           return -n.weight;
      });
  }
}

var calculate = function(design, board, player) {
  if (!_.isUndefined(board.cover)) {
      board.bonus = _.map(design.allPositions(), function(pos) {return 0;});
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var price = design.price[piece.type];
              if (isAttacked(design, board, piece.player, pos, pos, price)) {
                  if (piece.player == player) {
                      board.bonus[pos] = price * Dagaz.AI.FRIEND_FACTOR;
                      _.each(board.serial[pos], function(serial) {
                          _.chain(design.allPositions())
                           .filter(function(pos) {
                               return board.getPiece(pos) === null;
                            })
                           .each(function(empty) {
                               if (_.indexOf(board.serial[empty], serial) >= 0) {
                                   board.bonus[empty] += price * Dagaz.AI.EMPTY_FACTOR;
                               }
                            });
                      });
                  } else {
                      board.bonus[pos] = -price * Dagaz.AI.ENEMY_FACTOR;
                  }
              }
          }
      });
  }
}

AggressiveAi.prototype.dump = function(ctx, node) {
  console.log("Dump: " + node.move.toString() + ", a = " + node.a + ", b = " + node.b + ", h = " + node.weight + ", m = " + node.m);
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
  var eval = Dagaz.AI.eval(ctx.design, this.params, ctx.board, ctx.board.player);
  ctx.board.getCover(ctx.design);
  calculate(ctx.design, ctx.board, ctx.board.player);
  this.expand(ctx);
  ctx.timestamp = Date.now();
  var ix = 0;
  var mx = 1 - MAXVALUE;
  while ((ix < ctx.cache.length) && ((Date.now() - ctx.timestamp < this.params.AI_FRAME) || _.isUndefined(ctx.best))) {
      var node = ctx.cache[ix];
      node.a = Dagaz.AI.eval(ctx.design, this.params, node.board, ctx.board.player);
      if (node.goal !== null) {
          if (node.goal > 0) {
              ctx.best = ix;
              break;
          } else {
              node.a = -MAXVALUE;
          }
      }
      if ((eval <= node.a) && (mx <= node.a)) {
          node.board.moves = Dagaz.AI.generate(ctx, node.board);
          if (node.board.moves.length == 0) {
              ctx.best = ix;
              break;
          }
          var m = _.chain(node.board.moves)
           .map(function(m) {
                var b = node.board.apply(m);
                return {
                   move:   m,
                   board:  b,
                   goal:   b.checkGoals(ctx.design, node.board.player),
                   weight: Dagaz.AI.heuristic(this, ctx.design, node.board, m)
                };
            }, this)
           .max(function(n) {
                if (n.goal !== null) {
                    return n.goal * MAXVALUE;
                }
                return n.weight;
            }).value();
          if (m.goal !== null) {
              node.b = -m.goal * MAXVALUE;
          } else {
              node.b = Dagaz.AI.eval(ctx.design, this.params, m.board, ctx.board.player);
              node.m = m.move;
          }
          if (mx < node.b) {
              mx = node.b;
              this.dump(ctx, node);
              ctx.best = ix;
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
