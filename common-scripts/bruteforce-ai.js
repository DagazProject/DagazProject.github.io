(function() {

Dagaz.Model.checkVersion(Dagaz.Model.getDesign(), "distinct-moves", "true");

function BruteforceAi(params) {
  this.params = params;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = 100;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "bruteforce") || (type == "solver")) {
      return new BruteforceAi(params);
  } else {
      return findBot(type, params, parent);
  }
}

BruteforceAi.prototype.setContext = function(ctx, board) {
  ctx.board = board;
  if (_.isUndefined(ctx.cache)) {
      ctx.cache = [];
  }
}

var getKey = function(board) {
  return "" + board.zSign + " " + board.player;
}

var cache = function(ctx, board) {
  if (_.isUndefined(ctx.cache)) {
      ctx.cache = [];
  }
  var ix = getKey(board);
  if (!_.isUndefined(ctx.cache[ix])) {
      return ctx.cache[ix];
  }
  ctx.cache[ix] = _.sortBy(Dagaz.AI.generate(ctx, board), function(m) {
      var b = board.apply(m);
      var k = getKey(b);
      if ((board.parent !== null) && (b.zSign == board.parent.zSign)) {
          return 0;
      } else {
          return 1;
      }
  });
  if (Dagaz.AI.heuristic && (ctx.cache[ix].length > 1)) {
      var move = ctx.cache[ix].shift();
      ctx.cache[ix] = _.sortBy(ctx.cache[ix], function(move) {
          return -Dagaz.AI.heuristic(board, move);
      });
      ctx.cache[ix].unshift(move);
  }
  return ctx.cache[ix];
}

var isLoop = function(ctx, board, move) {
  if (move) {
      board = board.apply(move);
  }
  var parent = board.parent;
  while (parent) {
      if (parent.zSign == board.zSign) return true;
      parent = parent.parent;
  }
  return false;
}

var traceMove = function(ctx, board) {
   while (board.parent.zSign != ctx.board.zSign) {
      board = board.parent;
   }
   return board.move;
}

BruteforceAi.prototype.getMove = function(ctx) {
  var x = [];
  var queue = [ ctx.board ];
  var timestamp = Date.now();
  while ((Date.now() - timestamp < this.params.AI_FRAME) && queue.length > 0) {
      var board = queue.shift();
      var moves = cache(x, board);
      if (board.checkGoals(Dagaz.Model.getDesign(), board.player) !== null) {
          return {
              done:  true,
              move:  traceMove(ctx, board),
              ai:    "win"
          };
      }
      for (var i = 1; i < moves.length; i++) {
           var b = board.apply(moves[i]);
           var k = getKey(b);
           if (_.isUndefined(x.cache[k]) && !isLoop(ctx, b)) {
               queue.push(b);
           }
      }
  }
  var moves = cache(ctx, ctx.board);
  while (moves.length > 1) {
      var move = moves.pop();
      if (isLoop(ctx, ctx.board, move)) continue;
      return {
          done:  true,
          move:  move,
          ai:    "bruteforce"
      };
  }
  if (moves.length > 0) {
      return {
          done:  true,
          move:  moves[0],
          ai:    "back"
      };
  }
  return { done: true, ai: "nothing" };
}

})();
