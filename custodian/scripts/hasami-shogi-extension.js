(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hasami-shogi-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

Dagaz.AI.isForced = function(design, board, move) {
  if (_.isUndefined(board.lastt)) return false;
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if ((a[0] !== null) && (a[1] === null) && (a[0][0] == board.lastt)) {
           return true;
       }
  }
  return false;
}

var checkLineDir = function(design, board, pos, dir) {
  var r = 0;
  var piece = board.getPiece(pos);
  if (piece !== null) {
      var p = design.navigate(piece.player, pos, dir);
      while (p !== null) {
          if (design.inZone(0, piece.player, p)) break;
          var x = board.getPiece(p);
          if (x === null) break;
          if (x.player != piece.player) break;
          p = design.navigate(piece.player, p, dir);
          r++;
      }
  }
  return r;
}

var checkLine = function(design, board, player) {
  var pos = board.lastt;
  var piece = board.getPiece(pos);
  if (piece !== null) {
      var n  = design.getDirection("n");  var s  = design.getDirection("s");
      var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
      var ne = design.getDirection("ne"); var se = design.getDirection("se");
      if ((checkLineDir(design, board, pos, n)  + checkLineDir(design, board, pos, s)  >= 4) ||
          (checkLineDir(design, board, pos, nw) + checkLineDir(design, board, pos, se) >= 4) ||
          (checkLineDir(design, board, pos, ne) + checkLineDir(design, board, pos, sw) >= 4)) {
          if (piece.player == player) {
              return 1;
          } else {
              return -1;
          }
      }
  }
  return 0;
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
  if (enemies < 5) {
      return 1;
  }
  if (friends < 5) {
      return -1;
  }
  var g = checkLine(design, board, player);
  if (g != 0) return g;
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var s = design.getDirection("s");
  var w = design.getDirection("w"); var e = design.getDirection("e");
  _.each(board.moves, function(m) {
      if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
           var from = m.actions[0][0][0];
           var pos  = m.actions[0][1][0];
           _.each([n, s, w, e], function(d) {
                 var captured = [];
                 var p = design.navigate(board.player, pos, d);
                 while (p !== null) {
                     if (p == from) break;
                     var piece = board.getPiece(p);
                     if (piece === null) return;
                     if (piece.player == board.player) {
                         _.each(captured, function(p) {
                             m.capturePiece(p);
                         });
                         return;
                     } else {
                         captured.push(p);
                     }
                     p = design.navigate(board.player, p, d);
                 }
           });
           var all = [];
           var b = board.apply(m);
           _.each([0, 8, 72, 80], function(p) {
               if (_.indexOf(all, p) < 0) {
                   var group = [ p ];
                   for (var i = 0; i < group.length; i++) {
                        var pos = group[i];
                        var piece = b.getPiece(pos);
                        if ((piece === null) || (piece.player == board.player)) return;
                        _.each([n, s, w, e], function(d) {
                             var p = design.navigate(board.player, pos, d);
                             if ((p !== null) && (_.indexOf(all, p) < 0)) {
                                 var piece = b.getPiece(p);
                                 if ((piece === null) || (piece.player != board.player)) {
                                     group.push(p);
                                     all.push(p);
                                 }
                             }
                        });
                   }
                   _.each(group, function(p) {
                        m.capturePiece(p);
                   });
               }
           });
      }
  });
  CheckInvariants(board);
}

})();
