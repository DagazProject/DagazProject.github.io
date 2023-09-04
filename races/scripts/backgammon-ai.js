(function() {

Dagaz.AI.NOISE_FACTOR = 10;

var PIECE_COUNT = 15;
var FIRST_RANK  = [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221, 204];

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "heuristic") || (type == "common") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var getDices = function(design, board) {
  var r = [];
  var pos = design.navigate(board.player, 0, 0);
  while (pos !== null) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r.push(+piece.type);
          var v = piece.getValue(0);
          if ((v !== null) && (v > 1)) {
              r.push(+piece.type);
          }
      }
      pos = design.navigate(board.player, pos, 0);
  }
  return r;
}

var getSetup = function(design, board, player, setup, positions) {
  var r = null;
  var pos = Dagaz.Model.stringToPos(Dagaz.Model.WHITE_START);
  if (player > 1) {
      pos = Dagaz.Model.stringToPos(Dagaz.Model.BLACK_START);
  }
  var cnt = 0;
  for (var ix = 1; pos !== null; ix++) {
       positions.push(pos);
       var p = pos; var v = 0;
       while (p !== null) {
           var piece = board.getPiece(p);
           if (piece === null) break;
           if (piece.player == player) {
               v++;
           } else {
               v--;
           }
           p = design.navigate(player, p, 5);
       } 
       setup.push(v);     
       if (v > 0) {
           cnt += v;
           if (r === null) {
               r = ix;
           }
       }
       pos = design.navigate(player, pos, 3);
  }
  if (cnt < PIECE_COUNT) return null;
  return r;
}

var applyMove = function(from, to, state) {
  if (state[from] <= 0) return false;
  if (state[to] < -1) return false;
  if (state[to] < 0) {
      state[to] = 0;
  }
  state[to]++;
  state[from]--;
  return true;
}

var isAllowed = function(ctx, state, from, to) {
  if (to < state.length - 1) {
      return state[to] >= -1;
  } else {
      if (ctx.first < 19) return false;
      if (to < state.length) return true;
      return from == ctx.first;
  }
}

var estimate = function(setup, state) {
  r = 100;
  r += (_.filter(setup, function(n) { return n < 0; }).length - 
        _.filter(state, function(n) { return n < 0; }).length) * 100;
  r += (_.filter(setup, function(n) { return n == 1; }).length - 
        _.filter(state, function(n) { return n == 1; }).length) * 10;
  for (var i = 19; i < state.length - 1; i++) {
       if (state[i] == 1) r -= 100;
       if (i < 23) {
           if (state[i] > 0) r += state[i] * 10;
       }
  }
  return r;
}

var copy = function(a) {
  var r = [];
  _.each(a, function(x) {
      r.push(x);
  });
  return r;
}

var simulate = function(ctx, setup, positions, dices, queue, ix) {
  var noMove = true;
  if (ix < dices.length) {
      for (var i = 0; i < setup.length - 1; i++) {
           if ((setup[i] > 0) && isAllowed(ctx, setup, i, i + dices[ix])) {
               noMove = false;
               var state = copy(setup);
               queue.push(positions[i]);
               applyMove(i, i + dices[ix], state);
               simulate(ctx, state, positions, dices, queue, ix + 1);
               queue.pop();
           }
      }
  }
  if (noMove) {
      var est = estimate(ctx.setup, setup);
      if (Dagaz.AI.NOISE_FACTOR > 1) {
          est *= Dagaz.AI.NOISE_FACTOR;
          est += _.random(0, Dagaz.AI.NOISE_FACTOR - 1);
      }
      if ((ctx.best === null) || (ctx.best < est)) {
           ctx.queue = copy(queue);
           ctx.best = est;
      }
  }
}

var eq = function(ctx, pos, target) {
  var r = false;
  while (pos !== null) {
      if (pos == target) r = true;
      pos = ctx.design.navigate(ctx.board.player, pos, 5);
  }
  return r;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (_.filter(ctx.board.moves, function(m) {return (m.mode >= 1) && (m.mode <= 6)}).length > 1) {
      if (_.isUndefined(ctx.queue) || (ctx.queue.length == 0)) {
          ctx.queue = [];
          ctx.best  = null;
          var dices = getDices(ctx.design, ctx.board);
          if (dices.length > 0) {
              var positions = [];
              ctx.setup = [];
              ctx.first = getSetup(ctx.design, ctx.board, ctx.board.player, ctx.setup, positions);
              if (ctx.first !== null) {
                  simulate(ctx, ctx.setup, positions, dices, [], 0);
                  if ((dices.length == 2) && (dices[0] != dices[1])) {
                      simulate(ctx, ctx.setup, positions, [dices[1], dices[0]], [], 0);
                  }
              }
          }
      }
      if (ctx.queue.length > 0) {
          var pos = ctx.queue.shift();
          for (var i = 0; i < ctx.board.moves.length; i++) {
               if ((ctx.board.moves[i].actions.length > 0) && eq(ctx, pos, ctx.board.moves[i].actions[0][0][0])) {
                    return {
                        done: true,
                        move: ctx.board.moves[i],
                        time: Date.now() - ctx.timestamp,
                        ai:  "heuristic"
                    };
               }
          }
      }
  }
  delete ctx.queue;
  for (var i = 0; i < ctx.board.moves.length; i++) {
       if (ctx.board.moves[i].actions.length > 0) {
           var pos = ctx.board.moves[i].actions[0][1][0];
           var piece = ctx.board.getPiece(pos);
           if ((piece !== null) || (_.indexOf(FIRST_RANK, pos) < 0)){
               return {
                   done: true,
                   move: ctx.board.moves[i],
                   time: Date.now() - ctx.timestamp,
                   ai:  "heuristic"
               };
           }
       }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
