(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klin-zha-moves") {
     checkVersion(design, name, value);
  }
}

var isBlocked = function(design, board, pos, forced) {
  var r = false;
  var piece = board.getPiece(pos);
  if (piece !== null) {
      if (piece.type == 13) return true;
  }
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(1, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (!forced) {
          if (piece.player == board.player) return;
      }
      if (piece.type != 13) return;
      r = true;
  });
  return r;
}

var isGoal = function(design, board, pos) {
  var r = false;
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(1, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player != board.player || (piece.type % 2) == 0) {
          r = true;
      }
  });
  return r;
}

var addSteps = function(design, board, src, mn, mx, dirs, dsts, type) {
  var group = [src]; var dist = [];
  dist[src] = 0;
  for (var i = 0; i < group.length; i++) {
       var d = dist[group[i]] + 1;
       if (d > mx) continue;
       _.each(dirs, function(dir) {
           var pos = design.navigate(1, group[i], dir);
           if (pos === null) return;
           if (_.indexOf(group, pos) >= 0) return;
           if (isBlocked(design, board, pos, false)) return;
           var piece = board.getPiece(pos);
           if (piece !== null && piece.player == board.player) {
               if (piece.type > 0) return;
           }
           if (d >= mn) {
               if ((type % 2) == 1 || !isBlocked(design, board, pos, true)) {
                   dsts.push(pos);
               }
           }
           if (piece !== null) return;
           group.push(pos);
           dist[pos] = d;
       });
  }
}

var addJumps = function(design, board, src, mn, mx, dirs, dsts, type) {
  var group = [src]; var dist = [];
  dist[src] = 0;
  for (var i = 0; i < group.length; i++) {
       var d = dist[group[i]] + 1;
       if (d > mx) continue;
       _.each(dirs, function(dir) {
           var pos = design.navigate(1, group[i], dir);
           if (pos === null) return;
           if (_.indexOf(group, pos) >= 0) return;
           var piece = board.getPiece(pos);
           if (d >= mn) {
               if (!isBlocked(design, board, pos, (type % 2) == 0) && ((piece === null) || (piece.player != board.player) || (piece.type == 0))) {
                   dsts.push(pos);
               }
           }
           group.push(pos);
           dist[pos] = d;
       });
  }
}

var addBlocks = function(design, board, src, mn, mx, dirs, dsts) {
  var group = [src]; var dist = [];
  dist[src] = 0;
  for (var i = 0; i < group.length; i++) {
       var d = dist[group[i]] + 1;
       if (d > mx) continue;
       _.each(dirs, function(dir) {
           var pos = design.navigate(1, group[i], dir);
           if (pos === null) return;
           if (_.indexOf(group, pos) >= 0) return;
           var piece = board.getPiece(pos);
           if (piece !== null) return;
           if (d >= mn) {
               if (!isGoal(design, board, pos)) {
                   dsts.push(pos);
               }
           }
           group.push(pos);
           dist[pos] = d;
       });
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = true;
  _.each(board.moves, function (move) {
      if (move.mode == 0 || move.mode == 2) f = false;
  });
  if (f) {
      _.each(design.allPositions(), function(src) {
          var piece = board.getPiece(src);
          if (piece === null) return;
          if (piece.player != board.player) return;
          var dsts = [];
          if (piece.type == 1 || piece.type == 2) {
              addSteps(design, board, src, 1, 1, design.allDirections(), dsts, piece.type);
          }
          if (piece.type == 3 || piece.type == 4) {
              addSteps(design, board, src, 1, 2, design.allDirections(), dsts, piece.type);
          }
          if (piece.type == 5 || piece.type == 6) {
              _.each(design.allDirections(), function(dir) {
                 addSteps(design, board, src, 1, 3, [dir], dsts, piece.type);
              });
          }
          if (piece.type == 7 || piece.type == 8) {
              addSteps(design, board, src, 1, 3, design.allDirections(), dsts, piece.type);
          }
          if (piece.type == 9 || piece.type == 10) {
              addSteps(design, board, src, 2, 4, design.allDirections(), dsts, piece.type);
          }
          if (piece.type == 11 || piece.type == 12) {
              _.each(design.allDirections(), function(dir) {
                 addJumps(design, board, src, 3, 6, [dir], dsts, piece.type);
              });
          }
          if (piece.type == 13) {
              addBlocks(design, board, src, 1, 2, design.allDirections(), dsts);
          }
          _.each(dsts, function(dst) {
              var m = Dagaz.Model.createMove(1);
              m.movePiece(src, dst, piece);
              board.moves.push(m);
          });
      });
  }
  CheckInvariants(board);
}

})();
