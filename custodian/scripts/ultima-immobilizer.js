(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ultima-immobilizer") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var immobilized = [];
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
          if (piece !== null) {
              isImmobilized = false;
              _.each(design.allDirections(), function(dir) {
                  if (!isImmobilized) {
                      var p = design.navigate(board.player, pos, dir);
                      if (p !== null) {
                          var enemy = board.getPiece(p);
                          if ((enemy !== null) && (enemy.player != piece.player)) {
                              if ((enemy.type == 5) || ((piece.type == 5) && (enemy.type == 2))) {
                                  isImmobilized = true;
                              }
                          }
                      }
                  }
              });
              if (isImmobilized) {
                  immobilized.push(pos);
                  if (pos != action[1][0]) {
                      move.failed = true;
                  }
              }
          }
      }
  });
  _.each(board.moves, function(move) {
      var action = null;
      _.each(move.actions, function(a) {
          if ((action === null) && (a[0] !== null) && (a[1] !== null)) {
               action = a;
          }
      });
      if (action !== null) {
          var pos = action[0][0];
          if ((_.indexOf(immobilized, pos) < 0) && (pos == action[1][0])) {
               move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
