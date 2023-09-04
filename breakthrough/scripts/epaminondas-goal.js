(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "epaminondas-goal") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2, "../sounds/gong.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          if (a[1] !== null) {
              var piece = board.getPiece(a[1][0]);
              if (piece !== null) {
                 if (piece.player != board.player) {
                     if (design.inZone(0, piece.player, a[1][0])) {
                         r += 1000;
                     } else {
                         r++;
                     }
                 }
                 if (design.inZone(0, design.nextPlayer(piece.player), a[1][0])) r += 1000;
              }
          } else {
              r++;
          }
      }
  });
  return r;
}

var getWeightDir = function(design, board, player, pos, d, o) {
  var c = 1;
  var p = design.navigate(player, pos, o);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) break;
      if (piece.player != player) break;
      p = design.navigate(player, p, o);
      c++;
  }
  var r = 0;
  p = design.navigate(player, pos, d);
  while (p !== null) {
      if (design.inZone(0, design.nextPlayer(player), p)) {
          return Dagaz.Model.HEIGHT - r;
      }
      if (board.getPiece(p) !== null) break;
      p = design.navigate(player, p, d);
      r++;
  }
  while (p !== null) {
      if (design.inZone(0, design.nextPlayer(player), p)) {
          return Dagaz.Model.HEIGHT - r;
      }
      var piece = board.getPiece(p);
      if (piece === null) break;
      if (piece.player == player) return 0;
      c--;
      if (c == 0) return 0;
      p = design.navigate(player, p, d);
      r++;
  }
  while (p !== null) {
      if (design.inZone(0, design.nextPlayer(player), p)) {
          return Dagaz.Model.HEIGHT - r;
      }
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return 0;
      }
      p = design.navigate(player, p, d);
      r++;
  }
  return 0;
}

var getWeight = function(design, board, player, pos) {
  var r = getWeightDir(design, board, player, pos, design.getDirection("n"), design.getDirection("s"));
  if (r > 0) return r;
  r = getWeightDir(design, board, player, pos, design.getDirection("nw"), design.getDirection("se"));
  if (r > 0) return r;
  return getWeightDir(design, board, player, pos, design.getDirection("ne"), design.getDirection("sw"));
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var w = 0;
          if (design.inZone(0, design.nextPlayer(piece.player), pos)) {
              w = 1000;
          } else {
              w = getWeight(design, board, piece.player, pos);
          }
          if (piece.player == player) {
              r += w;
          } else {
              r -= w;
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && design.inZone(0, design.nextPlayer(piece.player), pos)) {
          if (piece.player == board.player) {
              friends++;
          } else {
              enemies++;
          }
      }
  });
  if (friends > enemies) {
      if (player == board.player) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
