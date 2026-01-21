(function() {

var slots = [
  ['G10-E37', 'G9-C28', 'G1-E38', 'G4-E27', 'G2-C39', 'G3-C17', 'G6-E49', 'G7-D49', 'G8-D16', 'G5-C28'],
  ['G10-G35', 'G9-H23', 'G1-G25', 'G4-H35', 'G2-G13', 'G3-I33', 'G6-F15', 'G7-F14', 'G8-I44', 'G5-H23'],
  ['G10-G57', 'G9-H78', 'G1-H57', 'G4-G58', 'G2-I77', 'G3-G79', 'G6-I56', 'G6-I77', 'G8-F69', 'G5-H78']
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
