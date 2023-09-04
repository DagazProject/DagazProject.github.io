(function() {

Dagaz.Model.WIDTH = 11;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pasang-invariant") {
      checkVersion(design, name, value);
  }
}

var checkDir = function(design, board, player, pos, dir, result) {
  var type = null;
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.type == 0) break;
          if ((type !== null) && (piece.type != type)) break;
          if (type === null) {
              type = +piece.type;
              if ((result.length > 0) && (result[result.length - 1].length > 0)) {
                   var q = board.getPiece(result[result.length - 1][0]);
                   if ((q !== null) && (q.type != type)) {
                       result.push([]);
                   }
              }
          }
          result[result.length - 1].push(p);
      }
      p = design.navigate(player, p, dir);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var w = design.getDirection("w"); 
  var n = design.getDirection("n"); 
  var moves  = [];
  _.each(board.moves, function(move) {
      if (move.isSimpleMove() && _.isUndefined(move.failed)) {
          var src = move.actions[0][0][0];
          var dst = move.actions[0][1][0];
          var piece = board.getPiece(src);
          if (piece !== null) {
              var b = board.apply(move);
              var dirs = [];
              if (piece.type == 0) {
                  if (Dagaz.Model.getX(src) != Dagaz.Model.getX(dst)) {
                      dirs.push(n);
                  } else {
                      dirs.push(w);
                  }
              } else {
                  dirs.push(n);
                  dirs.push(w);
              }
              var result = [];
              _.each(dirs, function(dir) {
                  result.push([]);
                  checkDir(design, b, 0, dst, dir, result);
                  checkDir(design, b, 1, dst, dir, result);
              });
              var captures = [];
              for (var i = 0; i < result.length; i++) {
                  if (result[i].length % 2 != 0) {
                      captures.push(result[i]);
                  }
              }
              if (captures.length > 0) {
                  if (captures.length > 1) {
                      for (var i = 0; i < captures.length; i++) {
                           var m = Dagaz.Model.createMove(move.mode);
                           m.actions.push(move.actions[0]);
                           var s = 0;
                           _.each(captures[i], function(p) {
                               var piece = b.getPiece(p);
                               if (piece !== null) {
                                   s += +piece.type;
                               }
                               m.capturePiece(p, 2);
                           });
                           m.addValue(board.player, s);
                           moves.push(m);
                      }
                  } else {
                      var s = 0;
                      _.each(captures[0], function(p) {
                          var piece = b.getPiece(p);
                          if (piece !== null) {
                              s += +piece.type;
                          }
                          move.capturePiece(p);
                      });
                      move.addValue(board.player, s);
                      moves.push(move);
                  }
              }
          }
      } else {
          moves.push(move);
      }
  });
  board.moves = moves;
  CheckInvariants(board);
}

})();
