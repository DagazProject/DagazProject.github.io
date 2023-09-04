(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ultima-withdrawer") {
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
      var action = null;
      _.each(move.actions, function(a) {
          if ((action === null) && (a[0] !== null) && (a[1] !== null)) {
              action = a;
          }
      });
      if (action !== null) {
          var pos = action[0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && ((piece.type == 1) || (piece.type == 2))) {
              var sx  = sign(Dagaz.Model.getX(pos) - Dagaz.Model.getX(action[1][0]));
              var sy  = sign(Dagaz.Model.getY(pos) - Dagaz.Model.getY(action[1][0]));
              var dst = action[1][0];
              var dir = design.findDirection(dst, dst + sy * Dagaz.Model.WIDTH + sx);
              if (dir !== null) {
                  var p = design.navigate(1, pos, dir);
                  if (p!== null) {
                      var enemy = board.getPiece(p);
                      if ((enemy !== null) && (enemy.player != board.player)) {
                          if ((piece.type == 1) || (enemy.type == 1)) {
                              move.capturePiece(p);
                          }
                      }
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
