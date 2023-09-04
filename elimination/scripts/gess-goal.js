(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gess-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var init = _.chain(move.actions)
   .filter(function(a) {
       return (a[0] !== null) && (a[1] !== null);
    })
   .map(function(a) {
       return a[0][0];
    }).value();
  _.each(move.actions, function(a) {
       var pos = null;
       if ((a[0] !== null) && (a[1] === null)) pos = a[0][0];
       if ((a[0] !== null) && (a[1] !== null) && (_.indexOf(init, a[1][0]) < 0)) pos = a[1][0];
       if (pos !== null) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.type == 0)) {
               if (piece.player != board.player) {
                   r++;
               } else {
                   r--;
               }
           }
       }
  });
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  for (var pos = 0; pos < (design.positions.length / 2) | 0; pos++) {
       var players = [];
       var price   = 0;
       var center  = board.getPiece(pos);
       if (center !== null) {
           players.push(center.player);
       }
       _.each(design.allDirections(), function(dir) {
           var p = design.navigate(board.player, pos, dir);
           if (p !== null) {
               var piece = board.getPiece(p);
               if ((piece !== null) && (piece.type == 0)) {
                   if (_.indexOf(players, piece.player) < 0) {
                       players.push(piece.player);
                   }
                   if (center !== null) {
                       price += 100;
                   } else {
                       price += 10;
                   }
               }
           }
       });
       if (price == 80) {
           price = 10000;
       }
       if (players.length == 1) {
           if (players[0] == player) {
               r += price;
           } else {
               r -= price;
           }
       }
  }
  return r;
}

var checkRing = function(design, board, pos) {
  if (board.getPiece(pos) !== null) return null;
  var r = null;
  for (var dir = 0; dir < design.dirs.length; dir++) {
       var p = design.navigate(board.player, pos, dir);
       if (p === null) return null;
       var piece = board.getPiece(p);
       if (piece === null) return null;
       if ((r !== null) && (r != piece.player)) return null;
       r = piece.player;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var players = [];
  for (var pos = 0; pos < (design.positions.length / 2) | 0; pos++) {
      var p = checkRing(design, board, pos);
      if ((p !== null) && (_.indexOf(players, p) < 0)) {
          players.push(p);
      }
  }
  if (players.length < 2) {
      var r = 1;
      if (players.length > 0) {
          if (players[0] == board.player) {
              r = 1;
          } else {
              r = -1;
          }
      }
      if (player == board.player) {
          return r;
      } else {
          return -r;
      }
  }
  return checkGoals(design, board, player);
}

})();
