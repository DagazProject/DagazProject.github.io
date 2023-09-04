(function() {

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if (type == "opening") {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
}

Ai.prototype.getMove = function(ctx) {
  var moves = _.filter(Dagaz.AI.generate(ctx, ctx.board), function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = ctx.board.getPiece(pos);
          if ((piece !== null) && (piece.player == ctx.board.player)) return false;
          var b = ctx.board.apply(move);
          var king = findPiece(ctx.design, b, ctx.board.player, 0);
          if (king === null) return false;
          var r = true;
          _.each([2, 3, 4, 5], function(dir) {
              if (!r) return;
              var p = ctx.design.navigate(1, king, dir);
              if (p === null) return;
              var piece = b.getPiece(p);
              if (piece === null) return;
              if (piece.player != ctx.board.player) {
                  r = false;
              }
          });
          return r;
      }
      return true;
  });
  if (moves.length > 0) {
      ctx.board.moves = moves;
  }
  return this.parent.getMove(ctx);
}

})();
