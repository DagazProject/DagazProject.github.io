(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "connect-four-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var avail = 0;
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      if (r == 0) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var mx = 0;
              for (var ix = 0; ix < 4; ix++) {
                   var vl = +piece.getValue(ix);
                   if (mx < vl) mx = vl;
              }
              if (mx >= 4) {
                  if (piece.player == player) {
                      r = 1;
                  } else {
                      r = -1;
                  }
              }
          } else {
              avail++;
          }
      }
  });
  if (r != 0) return r;
  if (avail == 0) return 0;
  return checkGoals(design, board, player);
}

})();
