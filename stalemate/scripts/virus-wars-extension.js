(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "virus-wars-extension") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 0)) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 1) {
      return 1;
  }
  if (friends < 1) {
      return -1;
  }
  return checkGoals(design, board, player);
}

var getSteps = function(board) {
  var c = board.turn;
  if (c < 4) {
      while (c >= 2) c -= 2;
      return 2 - c;
  } else {
      c -= 4;
      while (c >= 3) c -= 3;
      return 3 - c;
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  if ((move.actions.length > 0) && (move.actions[0][0] === null) && (move.actions[0][1] !== null)) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var friends  = 0;
          var dead     = 0;
          var mobility = 0;
          var group    = [ pos ];
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(board.player, pos, dir);
              if (p !== null) {
                  var piece = board.getPiece(p);
                  if (piece !== null) {
                      if ((piece.player == board.player) && (piece.type == 0)) {
                          friends++;
                          mobility++;
                      }
                      if (piece.player != board.player) {
                          if (piece.type == 1) {
                              dead++;
                          }
                          group.push(p);
                      }
                  } else {
                      mobility++;
                  }
              }
          });
          if (friends > 0) {
              r = 1000 + friends;
          } else {
              if (dead > 0) {
                  r += 100 + dead;
              }
              for (var i = 0; i < group.length; i++) {
                   var q = group[i];
                   _.each(design.allDirections(), function(dir) {
                       var p = design.navigate(board.player, q, dir);
                       if (p !== null) {
                           var piece = board.getPiece(p);
                           if (piece !== null) {
                               if ((piece.player == board.player) && (piece.type == 0)) {
                                   friends++;
                                   mobility++;
                               }
                               if ((piece.player != board.player) && (_.indexOf(group, p) < 0)) {
                                   group.push(p);
                               }
                           } else {
                               mobility++;
                           }
                       }
                   });
              }
              if (friends > 0) {
                  r += 500 + friends;
              }
              r += 100 + mobility;
          }
      } else {
          var dist  = 0;
          var all   = [ pos ];
          var curr  = [ pos ];
          var next  = [];
          var dead  = [];
          var alive = [];
          while (curr.length > 0) {
              dist++;
              _.each(curr, function(q) {
                  _.each(design.allDirections(), function(dir) {
                       var p = design.navigate(board.player, q, dir);
                       if ((p !== null) && (_.indexOf(all, p) < 0)) {
                           next.push(p);
                           all.push(p);
                       }
                  });
              });
              dead  = [];
              alive = [];
              _.each(next, function(p) {
                  var piece = board.getPiece(p);
                  if ((piece !== null) && (piece.player != board.player)) {
                      if (piece.type == 0) {
                          alive.push(p);
                      } else {
                          dead.push(p);
                      }
                  }
              });
              if ((dead.length > 0) && (alive.length == 0)) {
                  for (var i = 0; i < dead.length; i++) {
                       var q = dead[i];
                       _.each(design.allDirections(), function(dir) {
                           var p = design.navigate(board.player, q, dir);
                           if ((p !== null) && (_.indexOf(dead, p) < 0)) {
                               var piece = board.getPiece(p);
                               if ((piece !== null) && (piece.player != board.player)) {
                                   if (piece.type == 0) {
                                       alive.push(p);
                                   }
                                   dead.push(p);
                               }
                           }
                       });
                  }
              }
              if (alive.length > 0) break;
              curr = next;
              next = [];
          }
          if (dist > 3) {
              r += 30 - dist;
          } else {
              if (dead.length == 0) {
                  if (alive.length + dist - 1 <= getSteps(board)) {
                      r += 50 + alive.length - dist;
                  }
              }
          }
      }
      return r;
  } else {
      return -1;
  }
}

var isAlive = function(design, board, group) {
  for (var i = 0; i < group.length; i++) {
       var f = false;
       _.each(design.allDirections(), function(dir) {
           var p = design.navigate(board.player, group[i], dir);
           if (p !== null) {
               var piece = board.getPiece(p);
               if ((piece !== null) && (piece.player == board.player)) {
                   if (piece.type == 0) {
                       f = true;
                       return;
                   }
                   if (_.indexOf(group, p) < 0) {
                       group.push(p);
                   }
               }
           }
       });
       if (f) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length == 1) && (move.actions[0][0] === null) && (move.actions[0][1] !== null)) {
          var pos = move.actions[0][1][0];
          if (!isAlive(design, board, [ pos ])) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
