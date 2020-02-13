(function() {

var isRecursive = false;

var getGoal = games.model.getGoal;

games.model.getGoal = function(board, player) {
  var design = board.design;
  board.generate();
  if (board.moves.length == 0) {
      var king = design.getPieceType("King");
      var safe = null;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if ((piece.type == king) && (piece.player == board.player)) {
              safe = pos;
          }
      });
      var p = board.player;
      if (safe !== null) {
          delete board.moves;
          board.player = design.nextPlayer(board.player);
          isRecursive = true;
          board.generate();
          isRecursive = false;
          for (var i = 0; i < board.moves.length; i++) {
               for (var j = 0; j < board.moves[i].actions.length; j++) {
                    if (safe == board.moves[i].actions[j][1]) safe = null;
               }
          }
          board.player = p;
          board.moves = [];
      }
      if (safe === null) {
          if (p == player) {
              return -1;
          } else {
              return 1;
          }
      }
      return 0;
  }
  if (!_.isUndefined(getGoal)) {
      return getGoal(board);
  }
  return null;
}

var extension = games.model.extension;

games.model.extension = function(board) {
  var design = board.design;
  var king   = design.getPieceType("King");
  var rook   = design.getPieceType("Rook");
  if (!isRecursive) {
      var moves = [];
      _.each(board.moves, function(move) {
          var safe = [];
          if (move.mode == 1) {
              var a = move.actions[0][0]; var b = move.actions[1][0];
              safe = _.range(Math.min(a, b), Math.max(a, b) + 1);
              for (var i = 0; i < move.actions.length; i++) {
                   var piece = move.actions[i][2];
                   if (piece.getValue(0) !== null) {
                       return;
                   }
              }
          }
          var b = board.apply(move);
          _.each(design.allPositions(), function(pos) {
              var piece = b.getPiece(pos);
              if (piece === null) return;
              if ((piece.type == king) && (piece.player == board.player)) {
                  safe.push(pos);
              }
          });
          if (safe.length > 0) {
              isRecursive = true;
              b.generate();
              isRecursive = false;
              for (var i = 0; i < b.moves.length; i++) {
                   for (var j = 0; j < b.moves[i].actions.length; j++) {
                        if (_.indexOf(safe, b.moves[i].actions[j][1]) >= 0) return;
                   }
              }
              for (var i = 0; i < move.actions.length; i++) {
                   var piece = move.actions[i][2];
                   if ((piece.type == rook) || (piece.type == king)) {
                         move.actions[i][2] = piece.setValue(0, 1);
                   }
              }
          }
          moves.push(move);
      });
      board.moves = moves;
      if (!_.isUndefined(extension)) {
          extension(board);
      }
  }
}

})();
