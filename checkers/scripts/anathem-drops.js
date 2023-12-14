(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "anathem-drops") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var c = 0;
  _.each(board.moves, function(move) {
      if (_.indexOf([0, 1, 3, 6, 7], +move.mode) >= 0) return;
      var pos = move.actions[0][1][0];
      var f = true;
      if (move.mode == 2) {
         _.each(design.allDirections(), function(dir) {
             var p = design.navigate(1, pos, dir);
             if (p === null) return;
             if (board.getPiece(p) !== null) return;
             p = design.navigate(0, pos, dir);
             if (p === null) return;
             var piece = board.getPiece(p);
             if (piece === null) return;
             if (piece.player != board.player) return;
             f = false;
             c++; 
         });
      }
      if (move.mode == 4) {
         var n = 0;
         _.each(design.allDirections(), function(dir) {
             var p = design.navigate(1, pos, dir);
             if (p === null) return;
             var piece = board.getPiece(p);
             if (piece === null) return;
             if (piece.player != board.player) return;
             n++;
         });
         if (n > 1) f = false;
      }
      if (move.mode == 5) {
         var n = 0;
         _.each(design.allDirections(), function(dir) {
             var p = design.navigate(1, pos, dir);
             if (p === null) return;
             if (board.getPiece(p) !== null) return;
             n++;
         });
         if (n > 1) f = false;
      }
      if (f) {
         move.failed = true;
      }
  });
  if (c > 0) {
      _.each(board.moves, function(move) {
          if (_.indexOf([4, 5], +move.mode) < 0) return;
          move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
