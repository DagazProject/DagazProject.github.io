(function() {

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = 300;
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
  ctx.board  = board;
}

var isSafe = function(design, board, move) {
  var pos = move.actions[0][1][0];
  board.generate(design);
  var moves = _.filter(board.moves, function(move) {
      var actions = _.filter(move.actions, function(action) {
          return ((action[0][0] == pos) && (action[1] === null)) ||
                 ((action[1] !== null) && (action[1][0] == pos));
      });
      return actions.length > 0;
  });
  return moves.length == 0;
}

var isAttack = function(design, board, move) {
  return _.chain(move.actions)
          .filter(function(action) {
              return (action[0] !== null) && (action[1] !== null);
           })
          .filter(function(action) {
              return board.getPiece(action[1][0]) !== null;
           })
          .size().value() > 0;
}

Ai.prototype.getMove = function(ctx) {
  var timestamp = Date.now();
  var design = Dagaz.Model.getDesign();
  var result = null;
  var captured = 0;
  var safe = [];
  var strike = [];
  var moves = _.filter(Dagaz.AI.generate(ctx, ctx.board), function(move) {
      return move.actions.length == 1;
  });
  _.chain(moves)
   .filter(function(move) {
       var target = ctx.board.getPiece(move.actions[0][1][0]);
       if (target === null) return false;
       var piece = ctx.board.getPiece(move.actions[0][0][0]);
       if (piece === null) return false;
       if (Dagaz.AI.isAttacked(design, ctx.board, piece.player, move.actions[0][1][0])) {
           var a = Dagaz.AI.getPrice(design, piece.type, piece.player, move.actions[0][0][0]);
           var b = Dagaz.AI.getPrice(design, target.type, target.player, move.actions[0][1][0]);
           if (a >= b) return false;
       }
       return true;
    })
   .each(function(move) {
      var board = ctx.board.apply(move);
      if (board.checkGoals(design, ctx.board.player) > 0) {
          result = move;
          captured = null;
      }
      if (captured !== null) {
          var c = _.chain(move.actions)
           .filter(function(action) {
                return (action[0] !== null) && (action[1] === null);
            })
           .size()
           .value();
          if (c > captured) {
              captured = c;
              result = move;
          }
      }
      if ((result === null) && (Date.now() - timestamp < this.params.AI_FRAME) && isSafe(design, board, move)) {
          if (isAttack(design, ctx.board, move)) {
              strike.push(move);
          }
          safe.push(move);
      }
  }, this);
  if (strike.length == 0) {
      strike = safe;
  }
  if ((result === null) && (strike.length > 0)) {
      var ix = this.params.rand(0, strike.length - 1);
      result = strike[ix];
  }
  if (!_.isUndefined(Dagaz.AI.isAttacked)) {
      var attacked = _.filter(design.allPositions(), function(pos) {
          var piece = ctx.board.getPiece(pos);
          if (piece === null) return;
          if (piece.player != ctx.board.player) return;
          return Dagaz.AI.isAttacked(design, ctx.board, piece.player, pos);
      });
      var moves = _.filter(moves, function(move) {
          if (_.indexOf(attacked, move.actions[0][0][0]) < 0) return false;
          var target = ctx.board.getPiece(move.actions[0][1][0]);
          if (target === null) return false;
          var piece = ctx.board.getPiece(move.actions[0][0][0]);
          if (piece === null) return false;
          if (Dagaz.AI.isAttacked(design, ctx.board, piece.player, move.actions[0][1][0])) {
              var a = Dagaz.AI.getPrice(design, piece.type, piece.player, move.actions[0][0][0]);
              var b = Dagaz.AI.getPrice(design, target.type, target.player, move.actions[0][1][0]);
              if (a >= b) return false;
          }
          return true;
      });
      var best = null;
      for (var i = 0; i < moves.length; i++) {
           var b = ctx.board.apply(moves[i]);
           var e = Dagaz.AI.eval(design, [], b, ctx.board.player);
           if ((best === null) || (best.eval < e)) {
                best = {
                   eval: e,
                   move: moves[i]
                };
           }
      }
      if (best !== null) {
          return {
              done: true,
              move: best.move,
              ai:   "fast"
          };
      }
  }
  if (result) {
      return {
          done: true,
          move: result,
          ai:   "aggressive"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
