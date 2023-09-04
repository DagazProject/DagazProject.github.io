(function() {

Dagaz.Model.WIDTH = 13;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chinese-checkers-goal") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
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
  var c = [0, 0, 0, 0, 0, 0];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && !design.inZone(0, piece.player, pos)) {
          c[piece.player - 1]++;
      }
  });
  if (c[player - 1] == 0) return 1;
  for (var i = 0; i < 6; i++) {
     if (c[i] == 0) return -1;
  }
  return checkGoals(design, board, player);
}

var sign = function(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = []
  _.each(board.moves, function(move) {
      var m = getMove(move);
      if ((m !== null) && design.inZone(2, board.player, m.start) && !design.inZone(2, board.player, m.end)) {
          var dx  = sign(Dagaz.Model.getX(m.start) - Dagaz.Model.getX(m.next));
          var dy  = sign(Dagaz.Model.getY(m.start) - Dagaz.Model.getY(m.next));
          var pos = m.next + dy * Dagaz.Model.WIDTH + dx;
          var dir = design.findDirection(m.next, pos);
          if (dir !== null) {
              while (pos !== null) {
                  var piece = board.getPiece(pos);
                  if (piece !== null) {
                      if (piece.player != board.player) {
                          moves.push(move);
                      }
                      return;
                  }
                  pos = design.navigate(board.player, pos, dir);
              }
          }
      }
      var f = false;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
              if (f && !design.inZone(0, board.player, a[1][0])) move.failed = true;
              if (design.inZone(0, board.player, a[1][0])) f = true;
          }
      });
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
