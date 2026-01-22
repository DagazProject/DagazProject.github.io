(function() {

var slots = [
  ['G10-G47', 'G4-G57', 'G9-F58', 'G1-H56', 'G6-G58', 'G8-H57', 'G3-G69', 'G2-I66', 'G7-H68', 'G5-H68'],
  ['G10-G36', 'G4-G35', 'G9-H45', 'G1-F25', 'G6-H35', 'G7-G25', 'G3-I34', 'G2-F14', 'G8-H24', 'G5-H24'],
  ['G10-F37', 'G4-E37', 'G1-E48', 'G9-E26', 'G8-E38', 'G7-E27', 'G3-D17', 'G2-D49', 'G6-D28', 'G5-D28'],
  ['G10-G57', 'G1-H57', 'G4-G58', 'G9-H78', 'G6-I56', 'G7-I66', 'G8-F69', 'G2-I77', 'G3-G79', 'G5-H78'],
  ['G10-G35', 'G1-G25', 'G4-H35', 'G9-H23', 'G6-F14', 'G7-F15', 'G8-I44', 'G3-G13', 'G2-I33', 'G5-H23'],
  ['G10-E37', 'G1-E38', 'G4-E27', 'G9-C28', 'G8-E49', 'G7-D49', 'G6-D16', 'G2-C39', 'G3-C17', 'G5-C28'],
  ['G10-H78', 'G6-I89', 'G4-H68', 'G3-H79', 'G2-I78', 'G1-G69', 'G9-I67', 'G8-F69', 'G7-I66', 'G5-I89'],
  ['G10-H23', 'G6-I12', 'G2-H13', 'G3-I23', 'G4-H24', 'G1-G14', 'G9-I34', 'G7-F14', 'G8-I44', 'G5-I12'],
  ['G10-C28', 'G8-B19', 'G4-D28', 'G2-C18', 'G3-C29', 'G1-D39', 'G9-D17', 'G6-D16', 'G7-D49', 'G5-B19'],
  ['G10-G58', 'G1-F58', 'G4-G57', 'G9-H56', 'G3-F69', 'G2-I66', 'G8-G69', 'G7-I67', 'G6-G68', 'G5-G69'],
  ['G10-H35', 'G1-H45', 'G4-G35', 'G9-F25', 'G8-H34', 'G6-I34', 'G2-F14', 'G7-G14', 'G3-I44', 'G5-I34'],
  ['G10-E27', 'G1-E26', 'G4-E37', 'G9-E48', 'G6-D27', 'G2-D16', 'G3-D49', 'G8-D39', 'G7-D17', 'G5-D17']
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
