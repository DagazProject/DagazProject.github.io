(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "zertz-tiles") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 2) return;
      var pos = move.actions[0][1][0];
      var cnt = 0;
      _.each([1, 2, 4, 0, 3, 5, 1, 2], function(dir) {
          if (cnt > 1) return;
          var p = design.navigate(1, pos, dir);
          if (p === null) {
              cnt++;
              return;
          }
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.type == 0)) {
              cnt++;
              return;
          }
          cnt = 0;
      });
      if (cnt < 2) {
          move.failed = true;
          return;
      }
      _.each([0, 1, 2, 3, 4, 5], function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.type == 0) return;
          var group = [p]; var f = true;
          for (var i = 0; i < group.length; i++) {
              _.each([0, 1, 2, 3, 4, 5], function(d) {
                   var p = design.navigate(1, group[i], d);
                   if (p === null) return;
                   if (p == pos) return;
                   if (_.indexOf(group, p) >= 0) return;
                   var piece = board.getPiece(p);
                   if (piece === null) {
                       f = false;
                       return;
                   }
                   if (piece.type == 0) return;
                   group.push(p);
              });
          }
          if (f) {
              for (var i = 0; i < group.length; i++) {
                   var p = group[i];                   
                   var piece = board.getPiece(p);
                   if (piece === null) continue;
                   var q = Dagaz.Model.getDestination(design, board, board.player, +piece.type + 1);
                   if (q === null) continue;
                   move.movePiece(p, q, piece);
                   piece = Dagaz.Model.createPiece(0, board.player);
                   move.dropPiece(p, piece);
              }
          }
      });
  });
  CheckInvariants(board);
}

})();
