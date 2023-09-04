(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "taacoca-goal") {
     checkVersion(design, name, value);
  }
}

var calcDistance = function(design, board, player) {
  var group = [];
  var distance = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, player, pos)) {
          distance[pos] = 0;
          group.push(pos);
      }
  });
  for (var i = 0; i < group.length; i++) {
       var d = distance[group[i]];
       _.each(design.allDirections(), function(dir) {
            var p = design.navigate(player, group[i], dir);
            if ((p !== null) && (_.indexOf(group, p) < 0)) {
                 distance[p] = d + 1;
                 var piece = board.getPiece(p);
                 if ((piece === null) || (piece.player != player)) {
                     group.push(p);
                     if ((piece !== null) && (piece.player == player)) {
                         board.distance[p] = d + 1;
                     }
                 }
            }
       });
  }
}

var getDistance = function(design, board) {
  if (_.isUndefined(board.distance)) {
      board.distance = [];
      _.each(design.allPositions(), function(pos) {
          board.distance[pos] = 0;
      });
      calcDistance(design, board, 1);
      calcDistance(design, board, 2);
  }
  return board.distance;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  var distance = getDistance(design, board);
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = 10;
          if (!_.isUndefined(distance[pos])) {
              v -= distance[pos];
              if (v == 10) v *= 10;
          }
          v *= 10;
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var distance = getDistance(design, board);
  _.each(move.actions, function(a) {
      var pos   = a[1][0];
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != board.player)) {
          if (!_.isUndefined(distance[pos])) {
              r += 10 - distance[pos];
          } else {
              r++;
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var winner  = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (design.inZone(0, piece.player, pos)) {
              winner = piece.player;
          }
      }
  });
  if (winner > 0) {
      if (player == winner) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
