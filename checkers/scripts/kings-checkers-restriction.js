(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "kings-checkers-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var n = false; var s = false;
      var piece = null; 
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          var dy = Dagaz.Model.getY(a[1][0]) - Dagaz.Model.getY(a[0][0]);
          if (dy > 0) s = true;
          if (dy < 0) n = true;
          if (piece !== null) return;
          piece = board.getPiece(a[0][0]);
      });
      if (piece === null) return;
      if (piece.type > 0) return;
      var v = piece.getValue(0);
      if (v !== null) {
          if (board.player == 1) {
              if (_.indexOf(v, '0') >= 0) return;
          } else {
              if (_.indexOf(v, '1') >= 0) return;
          }
      }
      if (piece.player == 1) {
          if (s) move.failed = true;
      } else {
          if (n) move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
