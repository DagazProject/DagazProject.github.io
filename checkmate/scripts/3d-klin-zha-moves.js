(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "3d-klin-zha-moves") {
     checkVersion(design, name, value);
  }
}

var isBlocked = function(design, board, pos) {

  return false;
}

var addSteps = function(design, board, src, mn, mx, dirs, dsts) {
  var group = [src]; var dist = [];
  dist[src] = 0;
  for (var i = 0; i < group.length; i++) {
       var d = dist[group[i]];
       if (d >= mx) continue;
       _.each(dirs, function(dir) {
           var pos = design.navigate(1, group[i], dir);
           if (pos === null) return;
           if (_.indexOf(group, pos) >= 0) return;
           if (isBlocked(design, board, pos)) return;
           var piece = board.getPiece(pos);
           if (piece !== null && piece.player == board.player) {
               if (piece.type > 0) return;
           }
           if (d + 1 >= mn) {
               dsts.push(pos);
           }
           if (piece !== null) return;
           group.push(pos);
           dist[pos] = d + 1;
       });
  }
}

var addJumps = function(design, board, src, mn, mx, dirs, dsts) {

}

var addBlocks = function(design, board, src, mn, mx, dirs, dsts) {

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
              addSteps(design, board, src, 1, 1, design.allDirections(), dsts);
          }
          if (piece.type == 3 || piece.type == 4) {
              addSteps(design, board, src, 1, 2, design.allDirections(), dsts);
          }
          if (piece.type == 5 || piece.type == 6) {
              _.each(design.allDirections(), function(dir) {
                 addSteps(design, board, src, 1, 3, [dir], dsts);
              });
          }
          if (piece.type == 7 || piece.type == 8) {
              addSteps(design, board, src, 1, 3, design.allDirections(), dsts);
          }
          if (piece.type == 9 || piece.type == 10) {
              addSteps(design, board, src, 2, 4, design.allDirections(), dsts);
          }
          if (piece.type == 11 || piece.type == 12) {
              _.each(design.allDirections(), function(dir) {
                 addJumps(design, board, src, 3, 5, [dir], dsts);
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
