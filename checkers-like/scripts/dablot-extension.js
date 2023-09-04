(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MIN_DEEP      = 2;
Dagaz.AI.MAX_DEEP      = 3;

var MAX_FORCED_FACTOR  = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dablot-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
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

Dagaz.AI.isForced = function(design, board, move) {
  if (_.isUndefined(move.isForced)) {
      move.isForced = false;
      var b = board.apply(move);
      var c = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if ((piece !== null) && (piece.type == 2) && (piece.player == b.player)) {
              _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(b.player, pos, dir);
                   if (p !== null) {
                       var enemy = b.getPiece(p);
                       if ((enemy !== null) && (+enemy.type >= +piece.type) && (enemy.player != b.player)) {
                            p = design.navigate(b.player, p, dir);
                            if ((p !== null) && (b.getPiece(p) === null)) c++;
                       }
                   }
              });
          }
      });
      if ((c > 0) && (c <= MAX_FORCED_FACTOR)) {
          move.isForced = true;
      }
  }
  return move.isForced;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = design.price[piece.type];
              var bonus = 8;
              if (design.inZone(0, piece.player, pos)) {
                  bonus -= 3;
              }
              if (design.inZone(1, piece.player, pos)) {
                  bonus -= 4;
              }
              if (design.inZone(2, piece.player, pos)) {
                  bonus -= 5;
              }
              v += bonus;
              if (!Dagaz.AI.isFriend(board.player, piece.player)) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (!Dagaz.AI.isFriend(player, board.player)) {
      r = -r;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var kings = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != player) && (piece.type == 0)) {
          kings++;
      }
  });
  var enemies = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != player)) {
          enemies++;
      }
  });
  if ((kings == 0) || (enemies < 2))  {
      return 1;
  } else {
      return checkGoals(design, board, player);
  }
}

var saveMove = function(moves, move, pn, board, piece) {
  var m = Dagaz.Model.createMove();
  var notFound = true;
  _.chain(move.actions)
   .filter(function(action) {
        return action[3] < pn;
    })
   .each(function(action) {
        if ((action[0] !== null) && (action[1] === null)) {
            var p = board.getPiece(action[0][0]);
            if ((p !== null) && (+p.type < +piece.type)) {
                notFound = false;
            }
        }
        m.actions.push([ action[0], action[1], action[2], action[3] ]);
    });
  _.each(moves, function(n) {
      if (n.toString() == m.toString()) {
          notFound = false;
      }
  });
  if (notFound) {
      moves.push(m);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var moves = [];
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length > 1;
    })
   .each(function(move) {
       var piece = null;
       _.chain(move.actions)
        .filter(function(action) {
             return action[3] == 1;
         })
        .filter(function(action) {
             return (action[0] !== null) && (action[1] !== null);
         })
        .each(function(action) {
             piece = board.getPiece(action[0][0]);
         });
         if ((piece !== null) && (+piece.type > 0)) {
           _.chain(move.actions)
            .filter(function(action) {
                 return (action[0] !== null) && (action[1] === null);
             })
            .each(function(action) {
                 var p = board.getPiece(action[0][0]);
                 if ((p === null) || (+p.type < +piece.type)) {
                     if (action[3] > 1) {
                         saveMove(moves, move, action[3], board, piece);
                     }
                     move.failed = true;
                 }
             });
         }
    });
  _.each(moves, function(move) {
      board.moves.push(move);
  });
  CheckInvariants(board);
}

})();
