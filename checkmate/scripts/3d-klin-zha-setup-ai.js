(function() {

var slots = [
  ['G10-FE48', 'G6-FF59', 'G1-FE49', 'G4-FF48', 'G9-GF48', 'G7-FF47', 'G8-FD49', 'G2-FF58', 'G3-FE59', 'G5-FF59'],
  ['G10-FE26', 'G1-FF26', 'G9-FE16', 'G8-FF25', 'G7-EE15', 'G4-FE15', 'G2-FF36', 'G6-FD16', 'G3-GG14', 'G5-FF25'],
  ['G10-GC28', 'G8-GB19', 'G4-GC18', 'G9-GC29', 'G3-FC28', 'G7-GC39', 'G1-FB19', 'G6-FB18', 'G2-GD17', 'G5-GB19'],
  ['G10-DC28', 'G1-DD28', 'G9-DC18', 'G4-DC29', 'G2-CA19', 'G3-CC39', 'G6-CC18', 'G7-BA19', 'G8-BB19', 'G5-BB19']
];

function Ai(params, parent) {
  this.parent = parent;
  this.params = params;
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if (type == "opening") {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board = board;
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  var m = _.map(moves, function(move) {
      return move.toString();
  });
  if (_.isUndefined(ctx.slot)) {
      var s = _.filter(slots, function(x) {
          return _.intersection(m, x).length > 0;
      });
      if (s.length > 0) {
          ctx.slot = 0;
          if (s.length > 1) {
              ctx.slot = this.params.rand(0, s.length - 1);
          }
      }
  }
  if (!_.isUndefined(ctx.slot)) {
      var r = null;
      _.each(moves, function(move) {
          if (_.indexOf(slots[ctx.slot], move.toString()) < 0) return;
          r = move;
      });
      if (r !== null) {
          return {
            done: true,
            move: r,
            ai:   "random"
          };
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
