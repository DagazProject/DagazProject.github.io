(function() {

var extension = games.model.extension;

games.model.extension = function(board) {
  var design = board.design;
  var moves = [];
  if (!_.isUndefined(board.parent)) {
      _.each(board.moves, function(move) {
           var b = board.apply(move);
           if (b.z != board.parent.z) {
               moves.push(move);
           }
      });
  }
  if (moves.length > 0) {
      board.moves = moves;
  }
  if (!_.isUndefined(extension)) {
      extension(board);
  }
}

})();
