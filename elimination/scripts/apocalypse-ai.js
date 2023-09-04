(function() {

var MAXVALUE     = 1000000;
var NOISE_FACTOR = 10;
var SMALL_BONUS  = 20;
var BONUS        = 100;
var LARGE_BONUS  = 200;

function Ai(params) {
  this.params = params;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "apocalypse") || (type == "common")) {
      return new Ai(params);
  } else {
      return findBot(type, params, parent);
  }
}

var isCovered = function(design, board, pos, player, type) {
  var r = false;
  _.each(Dagaz.Model.GetCover(design, board)[pos], function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player)) {
          if (_.isUndefined(type) || (piece.type == type)) {
              r = true;
          }
      }
  });
  return r;
}

Ai.prototype.setContext = function(ctx, board) {
  ctx.board = board;
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {      
      return { done: true, ai: "nothing" };
  }
  timestamp   = Date.now();
  var enemies = 0;
  var friends = 0;
  _.each(ctx.design.allPositions(), function(pos) {
      var piece = ctx.board.getPiece(pos);
      if ((piece !== null) && (piece.type == 1)) {
          if (piece.player == 1) {
              enemies++;
          } else {
              friends++
          }
      }
  });
  var eval = -MAXVALUE;
  var best = null;
  _.each(moves, function(move) {
      var e = _.random(0, NOISE_FACTOR);
      if (move.isSimpleMove()) {
           var pos = move.actions[0][0][0];
           var trg = move.actions[0][1][0];
           var piece = ctx.board.getPiece(pos);
           if (piece !== null) {
               var target = ctx.board.getPiece(trg);
               if (piece.type == 1) {
                   if (isCovered(ctx.design, ctx.board, pos, 1)) e += MAXVALUE;
                   if (target === null) {
                       if (isCovered(ctx.design, ctx.board, trg, 1, 0)) e += LARGE_BONUS;
                       if (isCovered(ctx.design, ctx.board, trg, 1, 1)) {
                           if ((enemies == 1) && (friends == 2)) {
                               e += BONUS;
                           } else {
                               e -= MAXVALUE;
                           }
                       }
                   } else {
                       if (target.type == 1) {
                           e += SMALL_BONUS;
                       } else {
                           e += BONUS;
                       }
                   }
               } else {
                   if (isCovered(ctx.design, ctx.board, pos, 1)) e += SMALL_BONUS;
                   if ((target === null) && isCovered(ctx.design, ctx.board, trg, 1)) e -= MAXVALUE;
                   if (friends == 1) e += BONUS;
                   if (target !== null) e += SMALL_BONUS;
                   if ((move.actions[0][2] !== null) && (move.actions[0][2][0].type != piece.type)) {
                       if (friends == 1) {
                           e += MAXVALUE;
                       } else {
                           e -= MAXVALUE;
                       }
                   }
               }
           }
      }
      if ((best === null) || (eval < e)) {
           console.log("Move: " + move.toString() + ", eval = " + e);
           best = move;
           eval = e;
      }
  });
  return {
      done: true,
      move: best,
      time: Date.now() - timestamp,
      ai:  "aggressive"
  };
}

})();
