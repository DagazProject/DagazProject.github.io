(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "traverse-goal") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

var getTarget = function(design, board, player) {
  if (_.isUndefined(board.targetPos)) {
      board.targetPos = null;
      _.each(design.allPositions(), function(pos) {
           if ((board.targetPos === null) && (design.inZone(0, player, pos))) {
               var piece = board.getPiece(pos);
               if ((piece === null) || (piece.player != player)) {
                   board.targetPos = pos;
               }
           }
      });
  }
  return board.targetPos;
}

var getDistance = function(a, b) {
  return Math.abs(Dagaz.Model.getX(a) - Dagaz.Model.getX(b)) +
         Math.abs(Dagaz.Model.getY(a) - Dagaz.Model.getY(b));
}

var notBestDistance = function(board, x) {
  if (_.isUndefined(board.bestDistance)) {
      board.bestDistance = x;
      return false;
  }
  if (board.bestDistance > x) return true;
  board.bestDistance = x;
  return false;
}

var penalty = function(design, board, pos) {
  var r = 10;
  _.each(design.allDirections(), function(dir) {
      var q = design.navigate(0, pos, dir);
      if ((q === null) || (board.getPiece(q) !== null)) return;
      var p = design.navigate(board.player, pos, dir);
      if ((p !== null) && (board.getPiece(p) === null)) {
          var f = false;
          _.each(design.allDirections(), function(d) {
              if (!f) {
                  var q = design.navigate(board.player, p, d);
                  if ((q !== null) && (q != pos) && 
                      (board.getPiece(q) !== null)) {
                      q = design.navigate(board.player, q, d);
                      if ((q !== null) && (board.getPiece(q) === null)) {
                          f = true;
                      }
                  }
              }
          });
          if (f) {
              r = 0;
          }
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var s = null;
  var e = null;
  for (var i = 0; i < move.actions.length; i++) {
      if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
          if (s === null) {
              s = move.actions[i][0][0];
          }
          e = move.actions[i][1][0];
      }
  }
  if ((move.actions.length > 0) && (s !== null) && (e !== null)) {
      if (design.inZone(0, board.player, s)) return -1;
      var t = getTarget(design, board, board.player);
      if (t !== null) {
          var d = 10 + getDistance(s, t) - getDistance(e, t);
          if (notBestDistance(board, d)) return -1;
          r = d * 100;
          var b = board.apply(move);
          _.each(design.allPositions(), function(pos) {
              var piece = b.getPiece(pos);
              if (piece !== null) {
                  var p = penalty(design, b, pos);
                  if (piece.player == board.player) {
                      r -= p;
                  } else {
                      r += p;
                  }
              }
          });
      }
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var m = 2;
  var c = [0, 0, 0, 0];
  var p = [0, 0, 0, 0];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (!design.inZone(0, piece.player, pos)) {
              c[piece.player - 1]++;
          } else {
              p[piece.player - 1]++;
          }
          if (piece.player > m) {
              m = piece.player;
          }
      }
  });
  for (var i = 0; i < m; i++) {
      if ((c[i] == 0) && (p[i] != 0)) {
          if (i + 1 == player) {
              return 1;
          } else {
              return -1;
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
