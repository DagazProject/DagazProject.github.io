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

Dagaz.AI.isSafePosition = function(design, board, pos) {
  board.generate(design);
  var r = true;
  _.each(board.moves, function(m) {
      _.chain(m.actions)
       .filter(function(action) {
            return (action[0] !== null) && (action[1] === null);
        })
       .each(function(action) {
            if (action[0][0] == pos) {
                r = false;
            }
        });
  });
  return r;
}

Dagaz.AI.isSafeMove = function(design, board, move) {
  var pos = null;
  _.chain(move.actions)
   .filter(function(action) {
       return (action[0] !== null) && (action[1] !== null);
    })
   .each(function(action) {
       pos = action[1][0];
    });
  if (pos === null) return false;
  var b = board.apply(move);
  return Dagaz.AI.isSafePosition(design, b, pos);
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
     if (Dagaz.AI.isSafeMove(design, ctx.board, move)) {
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
