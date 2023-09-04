(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "suff-goal") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var allDirections = function() {
  return _.range(8);
}

var isDiagonal = function(dir)  {
   return _.indexOf([0, 2, 5, 6], +dir) >= 0;
}

Dagaz.AI.eval = function(ai, design, board, player) {
  var r = 0;
  var enemies = []; var friends = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (design.inZone(1, player, pos) && (piece !== null)) {
          if (design.inZone(3, piece.player, pos)) {
              if (piece.player == player) {
                  r += 100;
              } else {
                  r -= 100;
              }
          }
          if (piece.player == player) {
              if (design.inZone(0, player, pos)) {
                  friends.push(pos);
              }
          } else {
              enemies.push(pos);
          }
      }
  });
  var attacked = [];
  _.each(enemies, function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var isBig = (piece.type == 1);
      var group = [ pos ];
      for (var i = 0; i < group.length; i++) {
          _.each(allDirections(), function(dir) {
               var p = design.navigate(player, group[i], dir);
               if ((p !== null) && (board.getPiece(p) !== null)) {
                   var q = design.navigate(player, p, dir);
                   if ((q !== null) && (_.indexOf(group, q) < 0) && design.inZone(1, player, q) && (board.getPiece(q) !== null)) {
                       if (isBig || isDiagonal(dir)) {
                           if ((_.indexOf(friends, p) >= 0) && (_.indexOf(attacked, p) < 0)) {
                                attacked.push(p);
                           }
                       }
                       group.push(q);
                   }
               }
          });
      }
  });
  _.each(attacked, function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = design.price[piece.type];
      if (piece.player != player) {
          v = -v;
      }
      r -= v * 5;
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
          if (design.inZone(3, player, pos) && (board.getPiece(pos) === null)) {
              board.targets.first.push(pos);
              _.each(allDirections(), function(dir) {
                   var p = design.navigate(player, pos, dir);
                   if ((p !== null) && design.inZone(3, player, p) && (board.getPiece(p) !== null)) {
                        p = design.navigate(player, p, dir);
                        if ((p !== null) && !design.inZone(3, player, p) && (board.getPiece(p) === null)) {
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

var capturedBonus = function(design, board, player, move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && design.inZone(1, player, a[0][0])) {
          var piece = board.getPiece(a[0][0]);
          if ((piece !== null) && (piece.player != player)) {
              r += design.price[piece.type];
          }
      }
  });
  return r;
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

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var t = getTargets(design, board, board.player);
  var m = getMove(move);
  var r = 1;
  if (m !== null) {
      if (!design.inZone(0, 1, m.start) && !design.inZone(0, 1, m.end)) {
          return -1000;
      }
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

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && design.inZone(3, piece.player, pos)) {
          if (piece.player == player) {
              friends++;
          } else {
              enemies++;
          }
      }
  });
  if (friends == 6) return 1;
  if (enemies == 6) return -1;
  return checkGoals(design, board, player);
}

})();
