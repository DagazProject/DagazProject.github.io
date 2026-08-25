(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ginseng-moves") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type == 8) return;
      var group = [pos]; var levels = [0];
      for (var ix = 0; ix < group.length; ix++) {
           if (levels[ix] >= 5) continue;
           var target = board.getPiece(group[ix]);
           if (target !== null) {
               if (target.player != board.player) continue;
           }
           _.each([1, 3, 4, 7], function(dir) {
               var p = design.navigate(1, group[ix], dir);
               if (p === null) return;
               if (_.indexOf(group, p) >= 0) return;
               var t = board.getPiece(p);
               if (t !== null) {
                   if (t.player == board.player) return;
               }
               group.push(p);
               levels.push(levels[ix] + 1);
           });
      }
      _.each(group, function(dst) {
           if (dst == pos) return;
           var m = Dagaz.Model.createMove(0);
           m.movePiece(pos, dst, piece);
           board.moves.push(m);
      });
  });
  CheckInvariants(board);
}

})();
