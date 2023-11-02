(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fangyuan-tiaoqi-goal") {
     checkVersion(design, name, value);
  }
}

var getMove = function(move) {
  var r = null;
  for (var i = 0; i < move.actions.length; i++) {
      if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
          if (r === null) {
              r = {
                  start: move.actions[i][0][0],
                  next:  move.actions[i][1][0]
              };
          }
          r.end = move.actions[i][1][0];
      }
  }
  return r;
}

var getDistance = function(design, board) {
  if (_.isUndefined(board.distance)) {
      board.distance = [];
      var group = [];
      _.each(design.allPositions(), function(pos) {
           board.distance.push(0);
           if (design.inZone(1, board.player, pos)) {
               group.push(pos);
           }
      });
      for (var i = 0; i < group.length; i++) {
           _.each(design.allDirections(), function(dir) {
               var pos = design.navigate(board.player, group[i], dir);
               if ((pos !== null) && (_.indexOf(group, pos) < 0)) {
                   board.distance[pos] = board.distance[group[i]] + 1;
                   group.push(pos);
               }
           });
      }
  }
  return board.distance;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var d = getDistance(design, board);
  var m = getMove(move);
  if (m !== null) {
      return (d[m.start] - d[m.end]) * 100;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = true; var e = true;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (!design.inZone(0, piece.player, pos)) {
          if (piece.player == player) {
              f = false;
          } else{
              e = false;
          }
      }
  });
  if (f && e) return 0;
  if (e) return -1;
  return checkGoals(design, board, player);
}

})();
