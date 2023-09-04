(function() {

Dagaz.View.MARK_R = 15;
Dagaz.View.WIDTH = 404;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chaturaji-score") {
      checkVersion(design, name, value);
  }
}

var getValue = function(board, ix) {
  var v = board.getValue(ix);
  if (v === null) return 0;
  return v;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.mode < 2) return -1;
  if (move.mode <= 5) {
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          var piece = board.getPiece(a[0][0]);
          if (piece === null) return;
          if (a[1] === null) {
              r += design.price[piece.type];
          } else {
              if (piece.type == 5) r += 5;
              piece = board.getPiece(a[1][0]);
              if (piece !== null) {
                  r += design.price[piece.type];
              }
          }
      });
  }
  return r;
}

var checkStep = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if ((piece.player + player) % 2 == 0) return 0;
  return design.price[piece.type];
}

var checkJump = function(design, board, player, pos, o, d) {
  var p = design.navigate(player, pos, o);
  if (p === null) return 0;
  p = design.navigate(player, p, d);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if ((piece.player + player) % 2 == 0) return 0;
  return design.price[piece.type];
}

var checkSlide = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if ((piece.player + player) % 2 == 0) return 0;
          return design.price[piece.type];
      }
      p = design.navigate(player, p, dir);
  }
  return 0;
}

Dagaz.AI.eval = function(ai, design, board, player) {
  var r = 0;
  var v = getValue(board, 0) + getValue(board, 2) -
          getValue(board, 1) - getValue(board, 3);
  if (player % 2 == 1) {
       r += v;
  } else {
       r -= v;
  }
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = 0;
      if (piece.type == 4) {
          v += checkStep(design, board, piece.player, pos, 0);
          v += checkStep(design, board, piece.player, pos, 1);
          v += checkStep(design, board, piece.player, pos, 2);
          v += checkStep(design, board, piece.player, pos, 3);
          v += checkStep(design, board, piece.player, pos, 4);
          v += checkStep(design, board, piece.player, pos, 5);
          v += checkStep(design, board, piece.player, pos, 6);
          v += checkStep(design, board, piece.player, pos, 7);
      }
      if (piece.type == 5) {
          v += checkStep(design, board, piece.player, pos, 5);
          v += checkStep(design, board, piece.player, pos, 6);
      }
      if (piece.type == 6) {
          v += checkJump(design, board, piece.player, pos, 0, 0);
          v += checkJump(design, board, piece.player, pos, 2, 2);
          v += checkJump(design, board, piece.player, pos, 5, 5);
          v += checkJump(design, board, piece.player, pos, 6, 6);
      }
      if (piece.type == 7) {
          v += checkJump(design, board, piece.player, pos, 7, 6);
          v += checkJump(design, board, piece.player, pos, 7, 5);
          v += checkJump(design, board, piece.player, pos, 1, 2);
          v += checkJump(design, board, piece.player, pos, 1, 0);
          v += checkJump(design, board, piece.player, pos, 4, 6);
          v += checkJump(design, board, piece.player, pos, 4, 2);
          v += checkJump(design, board, piece.player, pos, 3, 5);
          v += checkJump(design, board, piece.player, pos, 3, 0);
      }
      if (piece.type == 8) {
          v += checkSlide(design, board, piece.player, pos, 1);
          v += checkSlide(design, board, piece.player, pos, 3);
          v += checkSlide(design, board, piece.player, pos, 4);
          v += checkSlide(design, board, piece.player, pos, 7);
      }
      if ((piece.player + player) % 2 == 0) {
           r += v;
      } else {
           r -= v;
      }
  });
  return r;
}

var showBoard = Dagaz.View.showBoard;

Dagaz.View.showBoard = function(board, ctx) {
  if (!_.isUndefined(showBoard)) {
       showBoard(board, ctx);
  }
  var g = getValue(board, 0) + getValue(board, 2);
  var r = getValue(board, 1) + getValue(board, 3);
  if (g + r == 0) return;
  ctx.save();
  ctx.fillStyle = '#00C800';
  if (g * r == 0) {
      if (g == 0) ctx.fillStyle = '#FF0000';
      ctx.fillRect(57, 407, Dagaz.View.WIDTH, 6);
  } else {
      var m = ((g * Dagaz.View.WIDTH)/(g + r)) | 0;
      if (m < 20) m = 20;
      if (Dagaz.View.WIDTH - m < 20) m = Dagaz.View.WIDTH - 20;
      ctx.fillRect(57, 407, m, 6);
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(m + 57, 407, Dagaz.View.WIDTH - m, 6);
      if (r != g) {
          if (g > r) ctx.fillStyle = '#00C800';
          ctx.beginPath();
          ctx.arc(m + 57, 410, 3, 0, 2 * Math.PI);
          ctx.fill();
      }
  }
  ctx.restore();
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var g = 0; var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 4) return;
      if (_.indexOf([1, 3], +piece.player) >= 0) {
          g++;
      } else {
          r++;
      }
  });
  if (g * r == 0) {
      g = getValue(board, 0) + getValue(board, 2);
      r = getValue(board, 1) + getValue(board, 3);
      if (g == r) return 0;
      if (_.indexOf([1, 3], +player) >= 0) {
          if (g > r) {
              return 1;
          } else {
              return -1;
          }
      } else {
          if (g > r) {
              return -1;
          } else {
              return 1;
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
