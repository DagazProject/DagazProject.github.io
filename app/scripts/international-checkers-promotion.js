(function() {

var extension = games.model.extension;

games.model.extension = function(board) {
  var design = board.design;
  _.each(board.moves, function(move) {
      if (move.actions.length == 0) return;
      var action = move.actions[move.actions.length - 1];
      if ((action[1] !== null) && (action[2] !== null) && design.inZone(board.player, action[1], 0)) {
           action[2] = action[2].promote(1);
      }
  });
  if (!_.isUndefined(extension)) {
      extension(board);
  }
}

})();
