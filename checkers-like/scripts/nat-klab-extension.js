(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MIN_DEEP      = 4;
Dagaz.AI.MAX_DEEP      = 6;

var MAX_FORCED_FACTOR  = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "nat-klab-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 8;
  if (move.isDropMove()) {
      var pos = move.actions[0][1][0];
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if (p === null) {
              r -= 2;
              return;
          }
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.player != board.player)) {
              p = design.navigate(board.player, p, dir);
              if ((p !== null) && (board.getPiece(p) === null)) {
                  r += 10;
              }
              p = design.navigate(0, pos, dir);
              if ((p !== null) && (board.getPiece(p) === null)) {
                  r -= 4;
              }
          }
      });
  }
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
           var target = board.getPiece(a[0][0]);
           if (target !== null) {
               r += design.price[target.type];
           }
      }
  });
  return r;
}

Dagaz.AI.isForced = function(design, board, move) {
  if (!move.isSimpleMove()) return false;
  if (_.isUndefined(move.isForced)) {
      move.isForced = false;
      var b = board.apply(move);
      var c = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if ((piece !== null) && (piece.type == 0) && (piece.player == b.player)) {
              _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(b.player, pos, dir);
                   if (p !== null) {
                       piece = b.getPiece(p);
                       if ((piece !== null) && (piece.type == 0) && (piece.player != b.player)) {
                            p = design.navigate(b.player, p, dir);
                            if ((p !== null) && (b.getPiece(p) === null)) c++;
                       }
                   }
              });
          }
      });
      if ((c > 0) && (c <= MAX_FORCED_FACTOR)) {
          move.isForced = true;
      }
  }
  return move.isForced;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = design.price[piece.type];
              if (!Dagaz.AI.isFriend(board.player, piece.player)) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (!Dagaz.AI.isFriend(player, board.player)) {
      r = -r;
  }
  return r;
}

})();
