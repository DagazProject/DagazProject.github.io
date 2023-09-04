(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fanorona-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.MAX_DEEP  = 2;

var bonus = [
 30, 30, 50, 30, 50, 30, 50, 30, 30, 
 30, 80, 40, 80, 40, 80, 40, 80, 30, 
 50, 40, 80, 40, 80, 40, 80, 40, 50, 
 30, 80, 40, 80, 40, 80, 40, 80, 30, 
 30, 30, 50, 30, 50, 30, 50, 30, 30
];

Dagaz.AI.getPrice = function(pos) {
  if (pos >= 45) return 0
  return bonus[pos];
}

Dagaz.AI.eval = function(ai, design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = Dagaz.AI.getPrice(pos);
          if (piece.player == board.player) {
              _.each(design.allDirections(), function(dir) {
                  var p = design.navigate(1, pos, dir);
                  if (p === null) return;
                  var piece = board.getPiece(p);
                  var cnt = 0;
                  if (piece === null) {
                      p = design.navigate(0, pos, dir);
                      while (p !== null) {
                          piece = board.getPiece(p);
                          if (piece === null) break;
                          if (piece.player == board.player) break;
                          p = design.navigate(0, p, dir);
                          cnt++;
                      }
                  } else {
                      if (piece.player == board.player) return;
                      var q = design.navigate(0, pos, dir);
                      if (q === null) return;
                      if (board.getPiece(q) !== null) return;
                      while (p !== null) {
                          cnt++;
                          piece = board.getPiece(p);
                          if (piece === null) break;
                          if (piece.player == board.player) break;
                          p = design.navigate(1, p, dir);
                      }
                  }
                  v += cnt;
              });
          }
          if (!Dagaz.AI.isFriend(player, piece.player)) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.chain(board.moves)
   .filter(function(move) {
        return move.actions.length > 1;
    })
   .each(function(move) {
        var capturing = [];
        var actions = [];
        var mx = _.chain(move.actions)
         .map(function(action) {
              return action[3];
          }).max().value();
        var last = null;
        var p = 1;
        for (var part = 1; part <= mx; part++) {
             var from = null;
             var to   = null;
             var pos  = null;
             _.chain(move.actions)
              .filter(function(action) {
                   return (action[3] == part);
               })
              .each(function(action) {
                   if ((action[0] !== null) && (action[1] !== null)) {
                       from = action[0][0];
                       to = action[1][0];
                   }
                   if ((action[0] !== null) && (action[1] === null)) {
                       pos = action[0][0];
                   }
               });
             if ((last !== null) && (design.findDirection(last, from) == design.findDirection(from, to))) {
                 move.failed = true;
                 break;
             }
             last = from;
             var captured = [];
             _.each(board.moves, function(m) {
                 _.each(m.actions, function(a) {
                     if ((a[3] == part) && (a[0] !== null) && (a[1] !== null) && (a[0][0] == from) && (a[1][0] == to)) {
                         _.each(m.actions, function(c) {
                              if ((c[3] == part) && (c[0] !== null) && (c[1] === null) && (_.indexOf(captured, c[0][0]) < 0)) {
                                  captured.push(c[0][0]);
                                  return;
                              }
                         });
                         return;
                     }
                 });
             });
             var cn = captured.length;
             var dir = design.findDirection(from, pos);
             if (dir === null) {
                 dir = design.findDirection(to, pos);
             }
             if ((pos === null) || (dir == null)) {
                 move.failed = true;
                 return;
             }
             actions.push([ [from], [to], null, p ]);
             while (pos !== null) {
                  if (_.indexOf(capturing, pos) >= 0) {
                      move.failed = true;
                      return;
                  }
                  capturing.push(pos);
                  actions.push([ [pos], null, null, (cn > 1) ? (p + 1) : p ]);
                  pos = design.navigate(board.player, pos, dir);
                  if (pos !== null) {
                      var piece = board.getPiece(pos);
                      if ((piece === null) || (piece.player == board.player)) {
                          pos = null;
                          break;
                      }
                  }
             }
             if (cn > 1) {
                 p++;
             }
             p++;
        }
        move.a = actions;
    });
  _.each(board.moves, function(move) {
      if (move.actions.length > 1) {
          move.actions = move.a;
          delete move.a;
      }
  });
  CheckInvariants(board);
}

})();
