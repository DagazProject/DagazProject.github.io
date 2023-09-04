(function() {

function HanoiAi(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "hanoi") || (type == "solver")) {
      return new HanoiAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

HanoiAi.prototype.calc = function(ctx) {
  var result = 0;
  _.each(ctx.design.allPositions(), function(pos) {
      if (ctx.board.getPiece(pos) !== null) result++;
  });
  return result;
}

HanoiAi.prototype.hanoi = function(ctx, A, B, C, N) {
  if (N > 0) {
     this.hanoi(ctx, A, C, B, N - 1);
     ctx.solve.push({
         a: A,
         b: B
     });
     this.hanoi(ctx, C, B, A, N - 1);
  }
}

HanoiAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
}

HanoiAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (_.isUndefined(ctx.solve)) {
      ctx.solve = [];
      this.hanoi(ctx, 0, 2, 1, this.calc(ctx));
  }
  var result = null;
  if (ctx.solve.length > 0) {
      var x = ctx.solve.shift();
      _.each(ctx.board.moves, function(m) {
          if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
              var a = m.actions[0][0][0] % 3;
              var b = m.actions[0][1][0] % 3;
              if ((a == x.a) && (b == x.b)) {
                  result = m;
              }
          }
      });
  }
  if (result !== null) {
      return {
           done: true,
           move: result,
           ai:  "hanoi"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
