(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-goal") {
     checkVersion(design, name, value);
  }
}

var getLine = function(design, board, pos, dir, frozen) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  var player = piece.player;
  var q = design.navigate(board.player, p, dir);
  if (q === null) return 0;
  piece = board.getPiece(q);
  if (piece === null) return 0;
  if (piece.player != player) return 0;
  frozen.push(p);
  frozen.push(q);
  return player;
}

var getMiddle = function(design, board, pos, dir, frozen) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return 0;
  if (_.indexOf(frozen, p) >= 0) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  var player = piece.player;
  var q = design.navigate(0, pos, dir);
  if (q === null) return 0;
  piece = board.getPiece(q);
  if (piece === null) return 0;
  if (piece.player != player) return 0;
  frozen.push(p);
  frozen.push(q);
  return player;
}

var getPair = function(design, board, pos, dir, frozen) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  var player = piece.player;
  var q = design.navigate(board.player, p, dir);
  if ((q !== null) && (board.getPiece(q) === null)) {
      frozen.push(p);
      return player;
  }
  q = design.navigate(0, pos, dir);
  if (q === null) return 0;
  if (board.getPiece(q) !== null) return 0;
  frozen.push(p);
  return player;
}

var expance = function(design, board, frozen, group, distance) {
  var x = design.getDirection("x");
  for (var i = 0; i < group.length; i++) {
      _.each(design.allDirections(), function(dir) {
           if (dir != x) {
               var p = design.navigate(board.player, group[i], dir);
               if ((p !== null) && (_.indexOf(group, p) < 0) && (_.indexOf(frozen, p) < 0)) {
                    distance[p] = distance[group[i]] + 1;
                    if (board.getPiece(p) === null) {
                        group.push(p);
                    }
               }
           }
      });
  }
}

var getTargets = function(design, board) {
  var f = true;
  var x = design.getDirection("x");
  if (_.isUndefined(board.targets)) {
      board.targets = [];
      _.each(design.allPositions(), function(pos) {
           if (board.getPiece(pos) === null) {
               var cnt    = 0;
               var player = 0;
               var frozen = [];
               _.each(design.allDirections(), function(dir) {
                   if (dir != x) {
                       var p = getLine(design, board, pos, dir, frozen);
                       if (p != 0) {
                           if ((player == 0) || (p == board.player)) player = p;
                           cnt++;
                       }
                   }
               });
               if (cnt == 0) {
                   _.each(design.allDirections(), function(dir) {
                       if (dir != x) {
                           var p = getMiddle(design, board, pos, dir, frozen);
                           if (p != 0) {
                               if ((player == 0) || (p == board.player)) player = p;
                               cnt++;
                           }
                       }
                   });
               }
               if (cnt > 1) frozen = [];
               if (cnt > 0) {
                   f = false;
                   board.targets[pos] = {
                      weight:   1000,
                      count:    cnt,
                      player:   player,
                      distance: []
                   };
                   board.targets[pos].distance[pos] = 0;
                   expance(design, board, frozen, [ pos ], board.targets[pos].distance);
               }
           }
      });
      if (f) {
          _.each(design.allPositions(), function(pos) {
               if (board.getPiece(pos) === null) {
                   var cnt    = 0;
                   var player = 0;
                   var frozen = [];
                   _.each(design.allDirections(), function(dir) {
                       if (dir != x) {
                           var p = getPair(design, board, pos, dir, frozen);
                           if (p != 0) {
                               if ((player == 0) || (p == board.player)) player = p;
                               cnt++;
                           }
                       }
                   });
                   if (cnt > 0) {
                       board.targets[pos] = {
                          weight:   10,
                          count:    cnt,
                          player:   player,
                          distance: []
                       };
                       board.targets[pos].distance[pos] = 0;
                       expance(design, board, frozen, [ pos ], board.targets[pos].distance);
                   }
               }
          });
      }
  }
  return board.targets;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var targets = getTargets(design, board);
  if (move.isDropMove()) {
      var pos = move.actions[0][1][0];
      if (!_.isUndefined(targets[pos])) {
          var r = targets[pos].weight;
          if (targets[pos].player != board.player) {
              r = (r / 10) | 0;
          }
          return r * targets[pos].count;
      }
      return 1;
  }
  if (move.isSimpleMove()) {
      var from   = move.actions[0][0][0];
      var target = move.actions[0][1][0];
      var r      = 1;
      _.each(design.allPositions(), function(pos) {
          if (!_.isUndefined(targets[pos]) &&
              !_.isUndefined(targets[pos].distance[from]) &&
              !_.isUndefined(targets[pos].distance[target]) &&
              (targets[pos].distance[target] < targets[pos].distance[from])) {
              var f = true;
              _.each(_.keys(targets[pos].distance), function(p) {
                   var piece = board.getPiece(p);
                   if ((piece !== null) && (piece.player != board.player) && (targets[pos].distance[p] <= targets[pos].distance[from])) f = false;
              });
              if (f) {
                   var w = targets[pos].weight * targets[pos].count;
                   if (targets[pos].player != board.player) {
                       w = (w / 10) | 0;
                   }
                   r += w;
              }
          }
      });
      return r;
  }
  if (move.actions.length > 0) {
      var target = move.actions[0][0][0];
      var r = 1;
      _.each(design.allPositions(), function(pos) {
          if (!_.isUndefined(targets[pos]) &&
              !_.isUndefined(targets[pos].distance[target])) {
              var w = targets[pos].weight * targets[pos].count;
              w -= targets[pos].distance[target] * 10;
              r += w;
          }
      });
      return r;
  }
  return 1;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if ((enemies < 3) && (board.reserve[0][design.nextPlayer(player)] == 0)) {
      return 1;
  }
  if ((friends < 3) && (board.reserve[0][player] == 0)) {
      return -1;
  }
  return checkGoals(design, board, player);
}

})();
