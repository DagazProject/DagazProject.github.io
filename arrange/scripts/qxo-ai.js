(function() {

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "qmorris") || (type == "opening")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var calcPieces = function(design, board, player, pos) {
  var r = 0;
  var p = design.navigate(board.player, pos, 8);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player == player)) r++;
      p = design.navigate(board.player, p, 8);
  }
  return r;
}

var checkLine = function(design, board, pos, dir, list) {
  p = pos;
  while (p !== null) {
      if (calcPieces(design, board, design.nextPlayer(board.player), p) == 0) return false;
      p = design.navigate(board.player, p, dir);
  }
  p = pos;
  while (p !== null) {
      if (calcPieces(design, board, board.player, p) == 0) {
          list.push(p);
      }
      p = design.navigate(board.player, p, dir);
  }
  return true;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length > 1) {
      var positions = [];
      if (checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("a3"), 3, positions) ||
          checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("b3"), 3, positions) ||
          checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("c3"), 3, positions) ||
          checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("a3"), 1, positions) ||
          checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("a2"), 1, positions) ||
          checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("a1"), 1, positions) ||
          checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("a3"), 7, positions) ||
          checkLine(ctx.design, ctx.board, Dagaz.Model.stringToPos("a1"), 4, positions)) {
          console.log("QM: " + positions);
          moves = _.filter(moves, function(move) {
              if ((move.actions.length > 0) && (move.actions[0][0] === null) && (move.actions[0][1] !== null)) {
                   return _.indexOf(positions, move.actions[0][1][0]) >= 0;
              }
              return false;
          });
          if (moves.length > 0) {
              if (moves.length == 1) {
                  return { done: true, move: moves[0], ai: "qm" };
              }
              var ix = _.random(0, moves.length - 1);
              return {
                  done: true,
                  move: moves[ix],
                  ai:   "qm"
              };
          }
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
