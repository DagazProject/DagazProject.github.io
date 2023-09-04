(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ultima-long-leaper") {
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
      var piece  = null;
      _.each(move.actions, function(a) {
          if ((action === null) && (a[0] !== null) && (a[1] !== null)) {
               action = a;
               piece  = board.getPiece(a[0][0]);
          }
      });
      var f = false;
      if ((action !== null) && (piece !== null)) {
          var sx  = sign(Dagaz.Model.getX(action[1][0]) - Dagaz.Model.getX(action[0][0]));
          var sy  = sign(Dagaz.Model.getY(action[1][0]) - Dagaz.Model.getY(action[0][0]));
          for (var pos = action[0][0] + sy * Dagaz.Model.WIDTH + sx; pos != action[1][0]; pos += sy * Dagaz.Model.WIDTH + sx) {
               var enemy = board.getPiece(pos);
               if (enemy !== null) {
                   if (f || ((piece.type == 2) && (enemy.type != 3))) {
                       move.failed = true;
                   }
                   move.capturePiece(pos);
                   f = true;
                   continue;
               }
               f = false;
          }
      }
  });
  CheckInvariants(board);
}

})();
