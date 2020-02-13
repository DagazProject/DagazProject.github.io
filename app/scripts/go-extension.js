(function() {

var extension = games.model.extension;

games.model.extension = function(board) {
  var design = board.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if (move.actions.length == 0) return;
      var pos = move.actions[0][1];
      var dame = 0;
      var captures = [];
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) {
              dame++;
              return;
          }
          var cnt = 0;
          var group = [p];
          for (var i = 0; i < group.length; i++) {
               _.each(design.allDirections(), function(d) {
                   var q = design.navigate(board.player, group[i], d);
                   if ((q === null) || (_.indexOf(group, q) >= 0)) return;
                   var x = board.getPiece(q);
                   if (x === null) {
                       cnt++;
                       return;
                   }
                   if (x.player == piece.player) {
                       group.push(q);
                   }
               });
          }
          if ((cnt == 0) && (piece.player != board.player)) {
              captures = _.union(captures, group);
              return;
          }
          if ((cnt > 0) && (piece.player == board.player)) {
              dame += cnt;
          }
      });
      if (captures.length > 0) {
          _.each(captures, function(p) {
              move.capturePiece(p);
          });
          moves.push(move);
          return;
      }
      if (dame > 0) {
          moves.push(move);
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  if (!_.isUndefined(extension)) {
      extension(board);
  }
}

})();
