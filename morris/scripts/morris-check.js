(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-check") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design   = Dagaz.Model.design;
  var captured = [];
  var dirs     = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  _.each(board.moves, function(move) {
      if (_.isUndefined(move.failed) && Dagaz.Model.isCapture(move)) {
          var pos = move.actions[0][0][0];
          var inLine = false;
          for (var i = 0; i < 8; i++) {
              if (Dagaz.Model.isLine(design, board, design.nextPlayer(board.player), pos, dirs[i], null)) {
                  inLine = true;
              }
          }
          for (var i = 0; i < 4; i++) {
              if (Dagaz.Model.isMiddle(design, board, design.nextPlayer(board.player), pos, dirs[i], null)) {
                  inLine = true;
              }
          }
          if (!inLine) {
              captured.push(pos);
          }
      }
  });
  if (captured.length > 0) {
      _.each(board.moves, function(move) {
          if (_.isUndefined(move.failed) && Dagaz.Model.isCapture(move)) {
              var pos = move.actions[0][0][0];
              if (_.indexOf(captured, pos) < 0) {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
