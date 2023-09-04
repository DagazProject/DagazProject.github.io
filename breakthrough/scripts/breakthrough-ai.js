(function() {

var MAXVALUE  = 1000000;

function BreakthroughAi(params, parent) {
  this.params = params;
  this.parent = parent;
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "breakthrough") || (type == "common")) {
      return new BreakthroughAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

BreakthroughAi.prototype.setContext = function(ctx, board) {
  if (this.parent !== null) {
      this.parent.setContext(ctx, board);
  }
  ctx.board  = board;
}

var isAny = function(board, pos) {
  return pos !== null;
}

var isNoEnemy = function(board, pos) {
  if (pos === null) return false;
  var piece = board.getPiece(pos);
  if (piece === null) return true;
  return piece.player == board.player;
}

var calculatePath = function(design, board, goals, target, isValid) {
  var path = _.map(goals, function(pos) {
      return {
          position: pos,
          weight:   0
      };
  });
  for (var i = 0; i < path.length; i++) {
      var step = path[i];
      if (!isValid(board, step.position)) continue;
      if (step.position == target) return path;
      _.each(_.range(design.dirs.length), function(dir) {
          var pos = design.navigate(board.player, step.position, dir);
          if ((_.indexOf(_.map(path, function(s) {
                     return s.position;
                 }), pos) < 0) && isValid(board, pos)) {
              path.push({
                 position: pos,
                 weight:   step.weight + 1
              });
          }
      });
  }
  return [];
}

BreakthroughAi.prototype.getMove = function(ctx) {
  var design = ctx.design;
  var friend = _.chain(_.range(design.positions.length))
   .filter(function(pos) {
        return ctx.board.getPiece(pos) !== null;
    })
   .filter(function(pos) {
        return ctx.board.getPiece(pos).player == ctx.board.player;
    })
   .value();
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if ((friend.length == 1) && (moves.length > 1)) {
      var target = friend[0];
      var piece  = ctx.board.getPiece(target);
      if (design.goals[piece.player]) {
          var goals = _.chain(design.goals[piece.player])
           .filter(function(goal) {
                return goal.piece == piece.type;
            })
           .map(function(goal) {
                return goal.positions;
            })
           .flatten()
           .uniq()
           .value();
         var path = calculatePath(design, ctx.board, goals, target, isNoEnemy);
         if (path.length == 0) {
             path = calculatePath(design, ctx.board, goals, target, isAny);
         }
         if (path.length > 0) {
             var moves = _.chain(Dagaz.AI.generate(ctx, ctx.board))
              .filter(function(move) {
                  return move.actions.length == 1;
               })
              .filter(function(move) {
                  if (move.actions[0][0] === null) return false;
                  if (move.actions[0][1] === null) return false;
                  return move.actions[0][0][0] == target;
               })
              .sortBy(function(move) {
                  var ix = _.indexOf(_.map(path, function(step) {
                      return step.position;
                  }), move.actions[0][1][0]);
                  if (ix < 0) return MAXVALUE;
                  return path[ix].weight;
               })
              .value();
             if (moves.length > 0) {
                 return {
                     done: true,
                     move: moves[0],
                     ai:   "breakthrough"
                 };
             }
         }
      }
  }
  if (this.parent !== null) {
      return this.parent.getMove(ctx);
  }
}

})();
