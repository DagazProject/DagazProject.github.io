(function() {

Dagaz.Model.isScored = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "cub-capture") {
     if (value == "score") Dagaz.Model.isScored = true;
  } else {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      var pos = null; piece = null; rn = 0;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (a[2] === null) return;
          pos = a[1][0];
          piece = a[2][0]; 
          rn = a[3];
      });
      if (pos === null) return;
      if (piece === null) return;
      v = design.price[piece.type];
      var cnt = 0;
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if (p === null) return;
          var x = board.getPiece(p);
          if (x === null) return;
          if (x.player == board.player) return;
          var u = design.price[x.type];
          if (u > v) {
              move.capturePiece(p, rn);
              cnt += u - v;
          }
      });
      if (Dagaz.Model.isScored && (cnt > 0)) {
          move.addValue(0, (board.player == 1) ? cnt: 0);
          move.addValue(1, (board.player == 2) ? cnt: 0);
      }
  });
  CheckInvariants(board);
}

})();
