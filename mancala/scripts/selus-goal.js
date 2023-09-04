(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "selus-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = Math.abs(+piece.getValue(0));
          if (piece.type == 1) {
              if (piece.player == player) {
                  r += v;
              } else {
                  r -= v;
              }
          }
          if (design.inZone(1, piece.player, pos)) {
              if (piece.player == player) {
                  r += v * 2;
              } else {
                  r -= v * 2;
              }
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var fc = 0; var ec = 0; var fs = 0; var es = 0;
  var freeze = board.getValue(0);
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type < 2)) {
          var v = Math.abs(+piece.getValue(0));
          if (piece.player == player) {
              fs += v;
          } else {
              es += v;
          }
          if ((freeze !== null) && (piece.player == freeze)) return;
          if ((piece.type == 0) && !design.inZone(1, piece.player, pos)) {
              if (piece.player == player) {
                  fc++;
              } else {
                  ec++;
              }
          }
      }
  });
  if (fc + ec == 0) {
      if (fs > es) return 1;
      if (fs < es) return -1;
      return 0;
  }
  return checkGoals(design, board, player);
}

})();
