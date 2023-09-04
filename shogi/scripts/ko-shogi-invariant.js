(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ko-shogi-invariant") {
      checkVersion(design, name, value);
  }
}

var sign = function(x) {
  if (x > 0) {
      return 1;
  } else if (x < 0) {
      return -1;
  } else {
      return 0;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos      = null;
      var empty    = null;
      var captured = [];
      _.each(move.actions, function(a) {
          if ((pos === null) && (a[0] !== null) && (a[1] !== null)) {
              empty = a[0][0];
              pos   = a[1][0];
          }
          if ((a[0] !== null) && (a[1] === null)) {
              captured.push(a[0][0]);
          }
      });
      var piece = board.getPiece(empty);
      if ((piece !== null) && (piece.player == board.player) && (_.indexOf([48, 47], +piece.type) >= 0)) { // European cannon, Chariot of the Gods
          _.each(captured, function(target) {
              var sx  = sign(Dagaz.Model.getX(target) - Dagaz.Model.getX(pos));
              var sy  = sign(Dagaz.Model.getY(target) - Dagaz.Model.getY(pos));
              var dir = design.findDirection(pos, pos + Dagaz.Model.WIDTH * sy + sx);
              if (dir !== null) {
                  var p = pos;
                  while ((p!== null) && (p != target)) {
                      if (p != empty) {
                          var piece = board.getPiece(p);
                          if (piece !== null) {
                              if ((piece.player == board.player) || (_.indexOf(captured, p) < 0)) {
                                  move.failed = true;
                              }
                          }
                      }
                      p = design.navigate(1, p, dir);
                  }
              }
          });
      }
  });
  CheckInvariants(board);
}

})();
