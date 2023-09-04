(function() {

var MAXVALUE      = 1000000;

Dagaz.AI.AI_FRAME = 3000;

function UctAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = Dagaz.AI.AI_FRAME;
  }
  if (_.isUndefined(this.params.UCT_COEFF)) {
      this.params.UCT_COEFF = Math.sqrt(2);
  }
  if (_.isUndefined(this.params.WIN_WEIGHT)) {
      this.params.WIN_WEIGHT = 0.7;
  }
  if (_.isUndefined(this.params.LOSS_WEIGHT)) {
      this.params.LOSS_WEIGHT = -0.7;
  }
  if (_.isUndefined(this.params.PENALTY_WEIGHT)) {
      this.params.PENALTY_WEIGHT = -0.7;
  }
  if (_.isUndefined(this.params.HEURISTIC_WEIGHT)) {
      this.params.HEURISTIC_WEIGHT = 0.3;
  }
  if (_.isUndefined(this.params.MAX_DEEP)) {
      this.params.MAX_DEEP = 100;
  }
  if (_.isUndefined(this.params.BAD_EXCHANGE_PENALTY)) {
      this.params.BAD_EXCHANGE_PENALTY = -5;
  }
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "common") || (type == "uct") || (type == "1") || (type == "2")) {
      return new UctAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  for (var i = 0; i < move.actions.length; i++) {
       if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
           var piece = board.getPiece(move.actions[i][1][0]);
           if (piece !== null) {
               r += 9;
           }
       }
       if ((move.actions[i][0] !== null) && (move.actions[i][1] == null)) {
           r += 9;
       }
  }
  return r;
}

UctAi.prototype.heuristic = function(design, board, move) {
  if (_.isUndefined(this.params.heuristic)) {
      this.params.heuristic = Dagaz.AI.heuristic;
  }
  return this.params.heuristic(this, design, board, move);
}

UctAi.prototype.generate = function(ctx, board) {
   board.moves = Dagaz.AI.generate(ctx, board);
   if ((board.moves.length == 1) && board.moves[0].isPass()) {
       var moves = Dagaz.AI.generate(ctx, board.apply(board.moves[0]));
       if ((moves.length == 0) || ((moves.length == 1) && moves[0].isPass())) {
           board.moves = [];
       }
   }
}

Dagaz.AI.isForced = function(ai, design, board, move) {
  var r = false;
  _.each(move.actions, function(action) {
      if ((action[0] !== null) && (action[1] !== null)) {
          if (board.getPiece(action[1][0]) !== null) {
              r = true;
          }
      }
  });
  return r;
}

UctAi.prototype.getForcedMoves = function(ctx, board) {
  var moves = Dagaz.AI.generate(ctx, board);
  if (moves.length < 2) {
      return moves;
  }
  return _.filter(moves, function(move) {
     return Dagaz.AI.isForced(this, ctx.design, board, move);
  }, this);
}

UctAi.prototype.uct = function(win, count, all) {
  if ((count > 0) && (all > 0)) {
      return Math.sqrt(Math.log(all) / count) * this.params.UCT_COEFF +
             win / count;
  } else {
      return MAXVALUE;
  }
}

var isAttacking = function(move, pos) {
  return _.filter(move.actions, function(action) {
     if ((action[0] !== null) && (action[0][0] == pos) && (action[1] === null)) return true;
     return (action[0] !== null) && (action[1] !== null) && (action[1][0] == pos) && (action[0][0] != pos);
  }).length > 0;
}

var getPrice = function(design, board, move) {
  var actions = _.filter(move.actions, function(action) {
      return action[0] !== null;
  });
  if (actions.length == 0) return 0;
  var piece = board.getPiece(actions[0][0][0]);
  if (piece === null) return 0;
  return design.price[piece.type];
}

UctAi.prototype.calcExchange = function(ctx, board, move) {
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
       var pos = move.actions[0][1][0];
       var moves = _.filter(Dagaz.AI.generate(ctx, board), function(m) {
           return isAttacking(m, pos);
       });
       while (moves.length > 0) {
           move = _.reduce(moves, function(acc, move) { 
               if (acc === null) return move;
               if (getPrice(ctx.design, board, move) < getPrice(ctx.design, board, acc)) return move;
               return acc;
           }, null);
           if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
                board = board.apply(move);
                pos = move.actions[0][1][0];
                moves = _.filter(Dagaz.AI.generate(ctx, board), function(m) {
                    return isAttacking(m, pos);
                });
           } else {
                moves = [];
           }
       }
  }
  return board;
}

UctAi.prototype.simulate = function(ctx, node, eval) {
  var deep  = 0;
  var board = node.board;
  while (Date.now() - ctx.timestamp < this.params.AI_FRAME) {
      if (deep > this.params.MAX_DEEP) break;
      this.generate(ctx, board);
      if (board.moves.length == 0) {
          if (!Dagaz.Model.stalemateDraw) {
              if (board.player != ctx.board.player) {
                  node.win++;
                  ctx.win++;
              } else {
                  node.loss++;
                  ctx.loss++;
              }
          }
          return;
      }
      var isLoss = false;
      var isWin  = false;
      var boards = [];
      for (var i = 0; i < board.moves.length; i++) {
           boards[i] = board.apply(board.moves[i]);
           var goal = boards[i].checkGoals(ctx.design, ctx.board.player);
           if (goal < 0) {
               isLoss = true;
           }
           if (goal > 0) {
               isWin = true;
           }
      }
      if (isLoss) {
          node.loss++;
          ctx.loss++;
          if (deep == 0) {
              node.bad = true;
          }
          return;
      } else {
          if (isWin) {
              node.win++;
              ctx.win++;
              return;
          }
      }
      var votes  = 0;
      var childs = _.map(board.moves, function(move) {
          var r  = this.heuristic(ctx.design, board, move);
          if (r < 0) {
              r = 0;
          }
          votes += r;
          return r;
      }, this);
      var ix = 0;
      var v = this.params.rand(0, votes - 1);
      votes = 0; i = 0;
      while ((votes < v) && (i < childs.length)) {
          if (childs[i] > 0) {
              ix = i;
              votes += childs[i];
          }
          i++;
      }
      board = boards[ix];
      deep++;
  }
  if (Dagaz.AI.eval) {
      var moves = this.getForcedMoves(ctx, board);
      while (moves.length > 0) {
          var ix = 0;
          if (moves.length > 1) {
             ix = this.params.rand(0, moves.length - 1);
          }
          board = board.apply(moves[ix]);
          moves = this.getForcedMoves(ctx, board);
      }
      var e = Dagaz.AI.eval(ctx.design, this.params, board, ctx.board.player);
      if (e < eval) {
          node.loss++;
          ctx.loss++;
      }
      if (e > eval) {
          node.win++;
          ctx.win++;
      }
  }
}

UctAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
  ctx.result    = null;
  ctx.init      = 0;
  ctx.loss      = 0;
  ctx.win       = 0;
  ctx.all       = 0;
  delete ctx.childs;
}

UctAi.prototype.getMove = function(ctx) {
  this.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (ctx.board.moves.length == 1) {
      return { done: true, move: ctx.board.moves[0], ai: "once" };
  }
  if (_.isUndefined(ctx.childs)) {
      ctx.childs = _.map(ctx.board.moves, function(move) {
           var board = ctx.board.apply(move);
           var goal  = board.checkGoals(ctx.design, ctx.board.player);
           if (goal > 0) {
               ctx.result = move;
           }
           if (this.heuristic(ctx.design, ctx.board, move) <= 0) {
               goal = -1;
           }
           return {
               move:    move,
               board:   board,
               bad:     goal < 0,
               penalty: 0,
               loss:    0,
               win:     0,
               all:     0
           };
      }, this);
  }
  if (ctx.result) {
      return {
           done: true,
           move: ctx.result,
           time: Date.now() - ctx.timestamp,
           cnt:  ctx.all,
           ai:   "goal"
      };
  }
  var eval = 0;
  if (Dagaz.AI.eval) {
      eval = Dagaz.AI.eval(ctx.design, this.params, ctx.board, ctx.board.player);
      while (ctx.init < ctx.childs.length) {
          var node = ctx.childs[ctx.init];
          var b = this.calcExchange(ctx, node.board, node.move);
          var diff = Dagaz.AI.eval(ctx.design, this.params, b, ctx.board.player) - eval;
          if (diff < 0) {
              node.penalty = (this.params.BAD_EXCHANGE_PENALTY * diff) | 0;
              node.all = node.penalty;
          }
          ctx.init++;
      }
  }
  while (Date.now() - ctx.timestamp < this.params.AI_FRAME) {
      var node = null;
      if (ctx.init < ctx.childs.length) {
          node = ctx.childs[ctx.init];
          ctx.init++;
      }
      if (node === null) {
          var mx = null;
          _.each(ctx.childs, function(child) {
              if (!child.bad) {
                  var value = this.uct(child.win, child.all, ctx.all);
                  if ((mx === null) || (value > mx)) {
                       mx = value;
                       node = child;
                  }
              }
          }, this);
      }
      if (node === null) break;
      if (node.bad) continue;
      this.simulate(ctx, node, eval);
      node.all++;
      ctx.all++;
  }
  ctx.childs = _.filter(ctx.childs, function(node) {
      return !node.bad;
  });
  var mx = null;
  for (var i = 0; i < ctx.childs.length; i++) {
      var u = 0;
      if (ctx.childs[i].win > 0) {
          u = ctx.childs[i].win / ctx.childs[i].all;
      }
      var v = 0;
      if (ctx.childs[i].loss > 0) {
          v = ctx.childs[i].loss / ctx.childs[i].all;
      }
      var p = 0;
      if (ctx.childs[i].penalty > 0) {
          p = ctx.childs[i].penalty / ctx.childs[i].all;
      }
      var h = this.heuristic(ctx.design, ctx.board, ctx.childs[i].move);
      var w = this.params.WIN_WEIGHT * u + this.params.LOSS_WEIGHT * v + this.params.HEURISTIC_WEIGHT * h + this.params.PENALTY_WEIGHT * p;
      if ((mx === null) || (w > mx)) {
          mx = w;
          ctx.result = ctx.childs[i].move;
      }
      console.log("Weight: " + w + "; Win = " + ctx.childs[i].win + "; Loss = " + ctx.childs[i].loss + "; All = " + ctx.childs[i].all + "; Move = " + ctx.childs[i].move.toString());
  }
  if (ctx.result) {
      return {
           done: true,
           move: ctx.result,
           time: Date.now() - ctx.timestamp,
           cnt:  ctx.all,
           ai:   "uct"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
