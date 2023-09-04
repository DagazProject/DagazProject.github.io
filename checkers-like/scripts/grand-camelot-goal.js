(function() {

var win = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "grand-camelot-goal") {
      win = +value;
  } else {
      checkVersion(design, name, value);
  }
}

var getMove = function(move) {
  var r = null;
  var pos = null;
  for (var i = 0; i < move.actions.length; i++) {
      if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
          if (r === null) {
              r = {
                  start: move.actions[i][0][0]
              };
          }
          if ((pos === null) || (pos == move.actions[i][0][0])) {
              pos = move.actions[i][1][0];
              r.end = pos;
          }
      }
  }
  return r;
}

var capturedBonus = function(design, board, player, move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var piece = board.getPiece(a[0][0]);
          if (piece !== null) {
              r += design.price[piece.type];
          }
      }
  });
  return r;
}

var getTargets = function(design, board, player) {
  if (_.isUndefined(board.targets)) {
      board.targets = {
          first:  [],
          second: []
      };
      _.each(design.allPositions(), function(pos) {
          if (design.inZone(0, player, pos) && (board.getPiece(pos) === null)) {
              board.targets.first.push(pos);
              _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(player, pos, dir);
                   if ((p !== null) && design.inZone(0, player, p) && (board.getPiece(p) !== null)) {
                        p = design.navigate(player, p, dir);
                        if ((p !== null) && !design.inZone(0, player, p) && (board.getPiece(p) === null)) {
                             board.targets.second.push(p);
                        }
                   }
              });
          }
      });
  }
  return board.targets;
}

var distance = function(a, b) {
  return Math.abs(Dagaz.Model.getX(a) - Dagaz.Model.getX(b)) +
         Math.abs(Dagaz.Model.getY(a) - Dagaz.Model.getY(b));
}

var getDistance = function(targets, pos) {
  var r = null;
  _.each(targets, function(goal) {
      var d = distance(goal, pos);
      if ((r === null) || (r > d)) {
          r = d;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var t = getTargets(design, board, board.player);
  var m = getMove(move);
  var r = 1;
  if (m !== null) {
      if (_.indexOf(t.first, m.end) >= 0) {
          r = 1000 + getDistance(t.first, m.start);
      }
      if ((r == 1) && (_.indexOf(t.second, m.end) >= 0)) {
          r = 500 + getDistance(t.second, m.start);
      }
      if (r == 1) {
          r = 100 + getDistance(t.first, m.start) - getDistance(t.first, m.end);
      }
      r += capturedBonus(design, board, board.player, move);
  }
  return r;
}

Dagaz.AI.eval = function(ai, design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[piece.type];
          if (design.inZone(0, piece.player, pos)) {
              v = 1000;
          }
          if (piece.player == player) {
              r += v;
          } else {
              r -= v;
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = [0, 0, 0, 0]; var g = [0, 0, 0, 0];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (design.inZone(0, piece.player, pos)) {
              g[piece.player - 1]++;
          }
          f[piece.player - 1]++;
      }
  });
  for (var p = 0; p < 4; p++) {
      var r = null;
      if (g[p] >= win) r = 1;
      if (f[p] < win) r = -1;
      if (r !== null) {
          if (p + 1 == player) {
              return r;
          } else {
              return -r;
          }
      }
  }
  if ((f[0] < win) && (f[1] < win) && (f[2] < win) && (f[3] < win)) return 0;
  return checkGoals(design, board, player);
}

})();
