(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "renju-goal") {
     checkVersion(design, name, value);
  }
}

var getLine = function(design, board, pos, dir, ix) {
  var v = 0;
  var c = true;
  var p = design.navigate(board.player, pos, dir);
  if (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          v = +piece.getValue(ix);
          if (piece.player != board.player) {
              v = -v;
          }
          var player = piece.player;
          while (p !== null) {
              piece = board.getPiece(p);
              if (piece === null) {
                  c = false;
                  break;
              }
              if (piece.player != player) break;
              p = design.navigate(board.player, p, dir);
          }
      } else {
          c = false;
      }
  }
  return {
     value:  v,
     closed: c
  };
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  var dirs   = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  if ((move.actions.length > 0) && (move.actions[0][0] === null) && (move.actions[0][1] !== null)) {
      var pos = move.actions[0][1][0];
      for (var ix = 0; ix < 4; ix++) {
           var fw = getLine(design, board, pos, dirs[ix], ix);
           var bk = getLine(design, board, pos, dirs[ix + 4], ix);
           if ((fw.value == 4)  || (bk.value == 4))  r += 1000;
           if ((fw.value == 1)  && (bk.value >= 3))  r += 1000;
           if ((fw.value >= 3)  && (bk.value == 1))  r += 1000;
           if ((fw.value >= 2)  && (bk.value >= 2))  r += 1000;
           if ((fw.value == -4) || (bk.value == -4)) r += 900;
           if ((fw.value == -1) && (bk.value == -3)) r += 900;
           if ((fw.value == -3) && (bk.value == -1)) r += 900;
           if ((fw.value == -2) && (bk.value == -2)) r += 900;
           if ((fw.value == 3)  && !fw.closed && !bk.closed && (bk.value >= 0)) r += 800;
           if ((bk.value == 3)  && !bk.closed && !fw.closed && (fw.value >= 0)) r += 800;
           if ((fw.value == 1)  && !fw.closed && (bk.value == 2) && !bk.closed) r += 800;
           if ((fw.value == 2)  && !fw.closed && (bk.value == 1) && !bk.closed) r += 800;
           if ((fw.value == -3) && !fw.closed && !bk.closed && (bk.value <= 0)) r += 700;
           if ((bk.value == -3) && !fw.closed && !bk.closed && (fw.value <= 0)) r += 700;
           if ((fw.value == -1) && !fw.closed && (bk.value == -2) && !bk.closed) r += 700;
           if ((fw.value == -2) && !fw.closed && (bk.value == -1) && !bk.closed) r += 700;
           if ((fw.value == 2)  && !fw.closed) r += 10;
           if ((bk.value == 2)  && !bk.closed) r += 10;
           if ((fw.value == 1)  && !fw.closed && (bk.value == 1) && !bk.closed) r += 10;
           if ((fw.value == 3)  && fw.closed  && !bk.closed && (bk.value >= 0)) r += 2;
           if ((bk.value == 3)  && bk.closed  && !fw.closed && (fw.value >= 0)) r += 2;
           if ((fw.value == 1)  && fw.closed  && (bk.value == 2) && !bk.closed) r += 2;
           if ((fw.value == 2)  && fw.closed  && (bk.value == 1) && !bk.closed) r += 2;
           if ((fw.value == 1)  && !fw.closed && (bk.value == 2) && bk.closed) r += 2;
           if ((fw.value == 2)  && !fw.closed && (bk.value == 1) && bk.closed) r += 2;
           if ((fw.value == -2) && !fw.closed) r += 8;
           if ((bk.value == -2) && !bk.closed) r += 8;
           if ((fw.value == -1) && !fw.closed && (bk.value == -1) && !bk.closed) r += 10;
           if ((fw.value == 1)  && !fw.closed && !bk.closed && (bk.value >= 0)) r += 4;
           if ((bk.value == 1)  && !fw.closed && !bk.closed && (fw.value >= 0)) r += 4;
           if ((fw.value == -1) || (bk.value == -1)) r += 1;
      }
  }
  if (r != 0) {
      console.log("Move: " + move.toString() + ", weight = " + r);
      return r;
  } else {
      return -1;
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  for (var pos = 0; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var mx = 0;
           for (var ix = 0; ix < 4; ix++) {
                var vl = +piece.getValue(ix);
                if (mx < vl) mx = vl;
           }
           if (mx >= 5) {
               if (piece.player == player) {
                   return 1;
               } else {
                   return -1;
               }
           }
       }
  }
  return checkGoals(design, board, player);
}

})();
