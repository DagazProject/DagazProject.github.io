(function() {

var penalty = [11, 12, 14, 15, 15, 17, 6, 6, 3, 3, 2, 3, 0, 0, 1, 1];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tavola-goal") {
      checkVersion(design, name, value);
  }
}

var getPenalty = function(state, ix, eb) {
  var r = 0;
  for (var i = 0; i < penalty.length; i++) {
      if (ix + i >= state.length) {
          if (eb > 0) {
              r += penalty[i];
          }
          break;
      }
      if (state[ix + i] < 0) {
          r += penalty[i];
      }
  }
  return r;
}

var calcPieces = function(design, board, pos) {
  var r = 0;
  while (pos !== null) {
      if (board.getPiece(pos) !== null) r++;
      pos = design.navigate(1, pos, 5);
  }
  return r;
}

Dagaz.AI.eval = function(design, board, player) {
  var pos = Dagaz.Model.stringToPos(Dagaz.Model.WHITE_START);
  if (player > 1) {
      pos = Dagaz.Model.stringToPos(Dagaz.Model.BLACK_START);
  }
  var inHome = true;
  var state = [];
  while (pos !== null) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = calcPieces(design, board, pos);
          if (piece.player != player) {
              v = -v;
          } else {
              if (!design.inZone(0, player, pos)) inHome = false;
          }
          state.push(v);
      } else {
          state.push(0);
      }
      pos = design.navigate(player, pos, 3);
  }
  var eb = 0; var fo = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (design.inZone(2, piece.player, pos)) {
          if (piece.player != player) {
              eb++;
          }
      }
      if (design.inZone(3, piece.player, pos)) {
          if (piece.player == player) {
              fo++;
          }
      }
  });
  var r = 0;
  for (var i = 0; i < state.length; i++) {
      if (state[i] > 0) {
          var v = 36;
          if (state[i] == 1) {
              v -= getPenalty(state, i + 1, eb);
          }
          r += v;
      }
  }
  if (inHome) {
      r *= 2;
  }
  r += fo * 100;
  r += eb * 50;
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = [];
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(5, player, pos) && !design.inZone(2, player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (_.isUndefined(cnt[piece.player])) {
               cnt[piece.player] = 1;
          } else {
               cnt[piece.player]++;
          }
      }
  });
  if (_.isUndefined(cnt[board.player])) {
      return 1;
  }
  return checkGoals(design, board, player);
}

})();
