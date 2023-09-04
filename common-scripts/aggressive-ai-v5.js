(function() {

var MAXVALUE              = 1000000;

Dagaz.AI.AI_FRAME         = 3000;
Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.AI.KING_PRICE       = 1000;

function AggressiveAi(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "aggressive") || (type == "common") || (type == "1") || (type == "2") || (type == "3") || (type == "4") || (type == "5") || (type == "6") || (type == "7")) {
      return new AggressiveAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

var isAttacked = function(design, board, player, pos, opponents) {
  var r = false;
  var cover = board.getCover(design);
  _.each(cover[pos], function(p) {
      if (!r) {
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.player != player)) {
              if (_.isUndefined(opponents) || (_.indexOf(opponents, piece.player) >= 0)) {
                  r = true;
              }
          }
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
      var pos    = move.actions[0][0][0];
      var target = move.actions[0][1][0];
      var piece  = board.getPiece(target);
      if (piece !== null) {
          r += design.price[piece.type];
      }
      if (isAttacked(design, board, board.player, target)) {
          piece  = board.getPiece(pos);
          if (piece !== null) {
              r -= (design.price[piece.type] / 2) | 0;
          }
      }
      var mx = null;
      _.each(design.allPositions(), function(p) {
          if ((p != pos) && (p != target)) {
              var piece = board.getPiece(p);
              if ((piece !== null) && (piece.player == board.player)) {
                  var price = (design.price[piece.type] / 2) | 0;
                  if ((mx === null) || (mx < price)) {
                      mx = price;
                  }
              }
          }
      });
      if (mx !== null) {
          r -= mx;
      }
  }
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  var positions = [];
  var opponents = [];
  var kingFound = false;
  _.each(design.allPositions(), function (pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          positions.push(pos);
          if (design.price[piece.type] >= Dagaz.AI.KING_PRICE) {
              if (piece.player != player) {
                  opponents.push(piece.player);
              } else {
                  kingFound = true;
              }
          }
      }
  });
  if (!kingFound) return -MAXVALUE;
  _.each(positions, function (pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var price = design.price[piece.type];
          if (piece.player == player) {
              if (isAttacked(design, board, player, pos, opponents)) {
                  price = (price / 2) | 0;
              }
              r += price;
          } else {
              if (isAttacked(design, board, piece.player, pos, [ player ])) {
                  r -= (price / 4) | 0;
              }
          }
      }
  });
  return r;
}

AggressiveAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

AggressiveAi.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var best  = null;
  var moves = _.chain(ctx.board.moves).filter(function(move) {
      move.h = Dagaz.AI.heuristic(this, ctx.design, ctx.board, move);
      return move.h >= 0;
  },  this).sortBy(function(move) {
      return -move.h;
  }).value();
  ctx.timestamp = Date.now();
  var mx = -MAXVALUE;
  for (var i = 0; i < moves.length; i++) {
       if ((best !== null) && (Date.now() - ctx.timestamp >= Dagaz.AI.AI_FRAME)) break;
       var board = ctx.board.apply(moves[i]);
       var eval  = Dagaz.AI.eval(ctx.design, this.params, board, ctx.board.player);
       if (Dagaz.AI.NOISE_FACTOR > 0) {
           eval += _.random(0, Dagaz.AI.NOISE_FACTOR);
       }
       if ((best === null) || (mx < eval)) {
           best = moves[i];
           mx = eval;
           console.log("Move: " + best.toString() + ", h = " + moves[i].h + ", e = " + eval);
       }
  }
  if (best !== null) {
      return {
           done: true,
           move: best,
           time: Date.now() - ctx.timestamp,
           ai:  "aggressive"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
