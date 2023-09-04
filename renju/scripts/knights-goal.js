(function() {

Dagaz.AI.AI_FRAME = 1000;

var prices = [];

prices[ 0] = 1000000;
prices[ 1] = 100000;
prices[ 2] = 1000000;
prices[ 3] = 100000;
prices[ 4] = 1000;
prices[ 5] = 10000;
prices[ 6] = 10;
prices[ 7] = 100;
prices[ 8] = 100;
prices[ 9] = 1000;
prices[10] = 0;
prices[11] = 10;
prices[12] = 10;
prices[13] = 100;
prices[14] = 0;
prices[15] = 0;

prices[16] = 10000;
prices[17] = 1000;
prices[18] = 10000;
prices[19] = 1000;
prices[20] = 10;
prices[21] = 100;
prices[22] = 10;
prices[23] = 1;
prices[24] = 1;
prices[25] = 10;
prices[26] = 0;
prices[27] = 0;
prices[28] = 0;
prices[29] = 1;
prices[30] = 0;
prices[31] = 0;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "knights-goal") {
     checkVersion(design, name, value);
  }
}

var isClosed = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) return false;
      if (piece.player != player) return true;
      p = design.navigate(player, p, dir);
  }
  return true;
}

var checkPosition = function(design, board, player, pos, o, d, positions) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((_.indexOf(positions, p) < 0) && (piece === null)) {
      positions.push(p);
  }
  if (piece === null) return false;
  if (piece.type == 0) return false;
  return piece.player != player;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var positions = [];
  for (var i = 0; i < 32; i++) {
      positions[i] = [];
  }
  var dirs = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  _.each(design.allPositions(), function(pos) {
      _.each(dirs, function(dir) {
           var ix = _.indexOf(dirs, dir);
           if (ix > 3) ix -= 4;
           var p = design.navigate(board.player, pos, dir);
           if (p !== null) {
               var piece = board.getPiece(p);
               if (piece !== null) {
                   var vl = piece.getValue(ix);
                   if ((vl !== null) && (vl > 0) && (vl < 5)) {
                       vl = (4 - vl) * 4;
                       if (piece.player != board.player) vl++;
                       if (isClosed(design, board, piece.player, p, dir)) vl += 2;
                       positions[vl].push(pos);
                       var list = [];
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("n"), design.getDirection("nw"), list)) return;
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("n"), design.getDirection("ne"), list)) return;
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("s"), design.getDirection("sw"), list)) return;
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("s"), design.getDirection("se"), list)) return;
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("w"), design.getDirection("sw"), list)) return;
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("w"), design.getDirection("nw"), list)) return;
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("e"), design.getDirection("se"), list)) return;
                       if (!checkPosition(design, board, piece.player, pos, design.getDirection("e"), design.getDirection("ne"), list)) return;
                       _.each(list, function(p) {
                           positions[vl + 16].push(p);
                       });
                   }
               }
           }
      });
  });
  var r = 0;
  if ((move.actions.length > 1) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
      var pos = move.actions[0][1][0];
      for (var i = 0; i < positions.length; i++) {
          if (_.indexOf(positions[i], pos) >= 0) {
              r += prices[i];
          }
      }
  }
  if (r > 0) {
      return r;
  } else {
      return -1;
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  for (var pos = 0; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.type == 0)) {
           for (var ix = 0; ix < 4; ix++) {
                var vl = +piece.getValue(ix);
                if (vl >= 5) {
                    if (piece.player == player) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
           }
       }
  }
  return checkGoals(design, board, player);
}

})();
