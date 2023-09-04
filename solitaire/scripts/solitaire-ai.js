(function() {

function SolitaireAi(params) {
  this.params = params;
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = 100;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "solitaire") || (type == "solver")) {
      return new SolitaireAi(params);
  } else {
      return findBot(type, params, parent);
  }
}

SolitaireAi.prototype.setContext = function(ctx, board) {
  ctx.board = board;
}

var isEquals = function(a, b) {
  return (_.difference(a, b).length == 0) && (_.difference(b, a).length == 0);
}

var zupdate = function(value, pos) {
  var z = Dagaz.Model.getZobristHash();
  return z.update(value, 1, 0, pos);
}

var step = function(design, stack) {
  if (stack.length == 0) return false;
  var frame = stack.pop();
  stack.push(frame);
  while ((stack.length > 0) && (frame.dir >= design.dirs.length)) {
      frame.dir = 0;
      frame.pos++;
      if (frame.pos >= frame.setup.length) {
          stack.pop();
          frame = stack.pop();
          stack.push(frame);
      }
  }
  if (stack.length == 0) return false;
  var d = frame.dir;
  frame.dir++;
  var t = frame.setup[frame.pos];
  var z = zupdate(frame.z, t);
  var p = design.navigate(1, t, d);
  if (p === null) return false;
  z = zupdate(z, p);
  if (_.indexOf(frame.setup, p) >= 0) return false;
  var f = design.navigate(1, p, d);
  if (f === null) return false;
  z = zupdate(z, f);
  if (_.indexOf(frame.setup, f) >= 0) return false;
  stack.push({
      setup: _.chain(frame.setup)
              .map(function(pos) {
                   if (pos == t) {
                       return f;
                   } else {
                       return pos;
                   }
               })
              .push(p)
              .value(),
      pos:   0,
      dir:   0,
      from:  f,
      to:    t,
      z:     z
  });
  return true;
}

SolitaireAi.prototype.getMove = function(ctx) {
  var timestamp = Date.now();
  var design = Dagaz.Model.getDesign();
  if (!ctx.timestamp) {
      ctx.timestamp = timestamp;
  }
  if (!ctx.goal) {
      ctx.z = 0;
      ctx.goal = _.filter(design.allPositions(), function(pos) {
          if (ctx.board.getPiece(pos) !== null) {
              ctx.z = zupdate(ctx.z, pos);
              return true;
          } else {
              return false;
          }
      });
      ctx.zcache = [];
  }
  if (!ctx.stack) {
      ctx.stack = [];
      ctx.stack.push({
          setup: [ design.zones[0][1][0] ],
          pos:   0,
          dir:   0,
          z:     zupdate(0, design.zones[0][1][0])
      });
  }
  while (!ctx.completed && (Date.now() - timestamp < this.params.AI_FRAME) && (ctx.stack.length > 0)) {
     if (step(design, ctx.stack)) {
         var frame = ctx.stack.pop();
         ctx.stack.push(frame);
         if (frame.z == ctx.z) {
             if (isEquals(frame.setup, ctx.goal)) {
                 if (ctx.timestamp) {
                     console.log("Time: " + (Date.now() - ctx.timestamp));
                 }
                 ctx.completed = true;
                 break;
             }
         }
         if ((frame.setup.length >= ctx.goal.length) || (_.indexOf(ctx.zcache, frame.z) >= 0)) {
             ctx.stack.pop();
         } else {
             ctx.zcache.push(frame.z);
         }
     }
  }
  if (!ctx.completed) return null;
  if (ctx.stack.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var frame = ctx.stack.pop();
  var moves = _.filter(Dagaz.AI.generate(ctx, ctx.board), function(move) {
        return _.chain(move.actions)
         .filter(function(action) {
             return (action[0] !== null) && (action[1] !== null);
          })
         .filter(function(action) {
             return (action[0][0] == frame.from) && (action[1][0] == frame.to);
          })
          .size().value() > 0;
  });
  if (moves.length > 0) {
      return {
          done: true,
          move: moves[0],
          ai:   "solitaire"
      };
  } else {
      ctx.stack = [];
      return { done: true, ai: "nothing" };
  }
}

})();
