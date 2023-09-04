(function() {

var MAXVALUE  = 1000000;

function MaxMinAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = 8;
  }
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = 2000;
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

Dagaz.AI.MAX_DEEP = 10;

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

Dagaz.AI.simpleHeuristic = function(design, params, board, move) {
  return move.actions.length;
}

Dagaz.AI.defaultHeuristic = function(design, params, board, move) {
  move.result = board.apply(move);
  return Dagaz.AI.eval(design, params, move.result, board.player);
}

Dagaz.AI.apply = function(board, move) {
  return board.apply(move);
}

MaxMinAi.prototype.eval = function(ctx, board, move, player) {
  var b = Dagaz.AI.apply(board, move);
  var t = move.getTarget();
  var deep = 0;
  while (deep++ < Dagaz.AI.MAX_DEEP) {
      var goal = Dagaz.Model.checkGoals(ctx.design, b, player);
      if (goal !== null) {
          return (MAXVALUE - deep) * goal;
      }
      b.moves = Dagaz.AI.generate(ctx, b);
      if (b.moves.length == 0) {
          if (Dagaz.AI.isFriend(player, b.player)) {
              return -MAXVALUE + deep;
          } else {
              return MAXVALUE - deep;
          }
      }
      var moves = _.filter(b.moves, function(m) {
          if (m.actions.length != 1) return false;
          if (m.actions[0][1] === null) return false;
          return m.actions[0][1][0] == t;
      });
      if (moves.length > 1) {
          var mn = _.chain(moves).map(function(m) {
              var pos = m.actions[0][0][0];
              var piece = b.getPiece(pos);
              if (piece === null) return 0;
              return ctx.design.price[piece.type];
          }).min().value();
          moves = _.filter(moves, function(m) {
              var pos = m.actions[0][0][0];
              var piece = b.getPiece(pos);
              if (piece === null) return false;
              return ctx.design.price[piece.type] == mn;
          });
      }
      if (moves.length == 0) {
          moves = _.filter(b.moves, function(m) {
              if (_.chain(m.actions).filter(function(a) {
                      return (a[0] !== null) && (a[1] === null);
                  }).size().value() > 0) return true;
              if (move.actions.length != 1) return false;
              if (move.actions[0][2] === null) return false;
              var piece = b.getPiece(move.actions[0][0][0]);
              if (piece === null) return false;
              for (var i = 0; i < move.actions[0][2].length; i++) {
                  if (move.actions[0][2][i].type != piece.type) {
                      return true;
                  }
              }
              return false;
          });
      }
      if (moves.length == 0) {
          break;
      } else {
          var ix = 0;
          if (moves.length > 1) {
              ix = _.random(0, moves.length - 1);
          }
          b = Dagaz.AI.apply(b, moves[ix]);
      }
  }
  return Dagaz.AI.eval(ctx.design, this.params, b, player);
}

MaxMinAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

MaxMinAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var result = null;
  var mx = 0;
  if (!_.isUndefined(Dagaz.AI.heuristic)) {
      ctx.board.moves = _.sortBy(ctx.board.moves, function(move) {
          return Dagaz.AI.heuristic(ctx.design, this.params, ctx.board, move);
      }, this);
  }
  _.each(ctx.board.moves, function(m) {
      if ((result === null) || (Date.now() - ctx.timestamp < this.params.AI_FRAME)) {
          var eval = this.eval(ctx, ctx.board, m, ctx.board.player);
          console.log("AI: " + m.toString() + " [" + eval + "]");
          if ((result === null) || (eval >= mx)) {
              if ((eval > mx) || (_.random(0, 10) > this.params.NOISE_FACTOR)) {
                  result = m;
              }
              mx = eval;
          }
      }
  }, this);
  if (result !== null) {
      return {
           done: true,
           move: result,
           time: Date.now() - ctx.timestamp,
           ai:  "maxmin"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
