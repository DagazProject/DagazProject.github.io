(function() {

var isExtended = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dakon-goal") {
      if (value == "extended") isExtended = true;
  } else {
      checkVersion(design, name, value);
  }
}

var eval = Dagaz.AI.eval;

Dagaz.AI.eval = function(design, params, board, player) {
  var mobility = 0;
  var isForced = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player)) {
          if (design.inZone(1, player, pos)) {
              if (+piece.getValue(0) < 0) isForced = true;
          } else {
              mobility++;
          }
      }
  });
  if (mobility == 0) return -1;
  var r = eval(design, params, board, player) * 100 + mobility;
  if (isExtended && isForced) {
      r += 10;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = 0; var e = 0; var s = 0;
  var w = 0; var l = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = Math.abs(+piece.getValue(0));
          if (piece.player == player) {
              if (design.inZone(1, player, pos)) {
                  w += v;
              } else {
                  f++;
                  s += v;
              }
          } else {
              if (design.inZone(1, player, pos)) {
                  l += v;
              } else {
                  e++;
                  s -= v;
              }
          }
      }
  });
  if (w > Dagaz.Model.WIN_CNT) return 1;
  if (l > Dagaz.Model.WIN_CNT) return -1;
  if ((f == 0) || (e == 0)) {
      var e = eval(design, [], board, player) + s;
      if (e > 0) {
          return 1;
      } 
      if (e < 0) {
          return -1;
      }
      return 0;
  }
  return checkGoals(design, board, player);
}

})();
