(function() {

function CarefulAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if (type == "opening") {
      return new CarefulAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

CarefulAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board  = board;
}

CarefulAi.prototype.getMove = function(ctx) {
  var design = Dagaz.Model.getDesign();
  var result = [];
  _.chain(Dagaz.AI.generate(ctx, ctx.board))
   .filter(function(move) {
       return move.actions.length > 0;
    })
   .each(function(move) {
     var b = ctx.board.apply(move);
     if (b.checkGoals(design, ctx.board.player) >= 0) {
         result.push(move);
     }
  }, this);
  if (result.length > 0) {
      var ix = this.params.rand(0, result.length - 1);
      return {
          done: true,
          move: result[ix],
          ai:   "careful"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
