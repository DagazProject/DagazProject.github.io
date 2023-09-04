(function() {

Dagaz.AI.NOISE_FACTOR = 10;

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.NOISE_FACTOR)) {
      this.params.NOISE_FACTOR = Dagaz.AI.NOISE_FACTOR;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "heuristic") || (type == "common") || (type == "1") || (type == "2")) {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Dagaz.AI.heuristic = function(app, design, board, move) {
  var r = 1;
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r = design.price[piece.type];
      }
  }
  return r;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (!Dagaz.AI.selector || (Dagaz.Model.getSetupSelector(2) == 1)) {
      var nodes = _.chain(ctx.board.moves)
         .map(function(m) {
              return {
                 move:   m,
                 weight: Dagaz.AI.heuristic(this, ctx.design, ctx.board, m)
              };
          }, this)
         .filter(function(n) {
              return n.weight >= 0;
          }).value();
      if (this.params.NOISE_FACTOR > 1) {
          _.each(nodes, function(n) {
             n.weight *= this.params.NOISE_FACTOR;
             n.weight += _.random(0, this.params.NOISE_FACTOR - 1);
          }, this);
      }
      if (nodes.length > 0) {
          nodes = _.sortBy(nodes, function(n) {
               return -n.weight;
          });
          console.log("Move: " + nodes[0].move.toString() + ", weight = " + nodes[0].weight);
          return {
               done: true,
               move: nodes[0].move,
               time: Date.now() - ctx.timestamp,
               ai:  "heuristic"
          };
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
