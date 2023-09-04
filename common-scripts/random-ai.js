(function() {

function RandomAi(params) {
  this.params = params;
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "random") || (type == "solver")) {
      return new RandomAi(params);
  } else {
      return findBot(type, params, parent);
  }
}

RandomAi.prototype.setContext = function(ctx, board) {
  ctx.board  = board;
}

RandomAi.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {      
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return { done: true, move: moves[0], ai: "once" };
  }
  var ix = this.params.rand(0, moves.length - 1);
  return {
      done: true,
      move: moves[ix],
      ai:   "random"
  };
}

})();
