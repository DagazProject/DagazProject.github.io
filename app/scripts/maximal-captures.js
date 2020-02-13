(function() {

var extension = games.model.extension;

games.model.extension = function(board) {
  var len = _.max(_.map(board.moves, function(move) {
      return move.actions.length;
  }));
  board.moves = _.filter(board.moves, function(move) {
      return move.actions.length == len;
  });
  if (!_.isUndefined(extension)) {
      extension(board);
  }
}

})();
