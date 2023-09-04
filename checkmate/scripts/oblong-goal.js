(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "oblong-goal") {
     checkVersion(design, name, value);
  }
}

var checkStep = function(design, board, pos, piece, dir, types) {
  var p = design.navigate(piece.player, pos, dir);
  if (p === null) return 0;
  var enemy = board.getPiece(p);
  if (enemy === null) return 0;
  if (piece.player == enemy.player) return 0;
  var r = 0;
  if (_.indexOf(types, piece.type) >= 0) {
      if ((piece.type != 6) || ((_.indexOf(types, enemy.type) < 0) && (enemy.type != 11))) {
          r += design.price[enemy.type];
      }
  }
  if ((_.indexOf(types, enemy.type) >= 0) && (enemy.type != 11)) {
      r -= (piece.type / 6) | 0;
  }
  return r;
}

var checkJump = function(design, board, pos, piece, o, d, types) {
  var p = design.navigate(piece.player, pos, o);
  if (p === null) return 0;
  p = design.navigate(piece.player, p, d);
  if (p === null) return 0;
  var enemy = board.getPiece(p);
  if (enemy === null) return 0;
  if (piece.player == enemy.player) return 0;
  var r = 0;
  if (_.indexOf(types, piece.type) >= 0) {
      r += design.price[enemy.type];
  }
  if (_.indexOf(types, enemy.type) >= 0) {
      r -= (piece.type / 6) | 0;
  }
  return r;
}

var checkSlide = function(design, board, pos, piece, dir, types) {
  var p = design.navigate(piece.player, pos, dir);
  if (p === null) return 0;
  var enemy = board.getPiece(p);
  if (enemy !== null) return 0;
  while (enemy === null) {
      p = design.navigate(piece.player, p, dir);
      if (p === null) return 0;
      enemy = board.getPiece(p);
  }
  if (piece.player == enemy.player) return 0;
  var r = 0;
  if (_.indexOf(types, piece.type) >= 0) {
      r += design.price[enemy.type];
  }
  if (_.indexOf(types, enemy.type) >= 0) {
      r -= (piece.type / 6) | 0;
  }
  return r;
}

Dagaz.AI.heuristic = function(app, design, board, move) {
  var r = 1;
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r = design.price[piece.type];
      }
  }
  return r;
}

Dagaz.AI.eval = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = design.price[piece.type];
      v += checkStep(design, board, pos, piece, 7, [6, 8]); // n
      v += checkStep(design, board, pos, piece, 3, [6, 8]); // e
      v += checkStep(design, board, pos, piece, 4, [6, 8]); // w
      v += checkStep(design, board, pos, piece, 1, [6, 8]); // s
      v += checkStep(design, board, pos, piece, 6, [6, 5, 11]); // nw
      v += checkStep(design, board, pos, piece, 5, [6, 5, 11]); // ne
      v += checkStep(design, board, pos, piece, 2, [6, 5]); // sw
      v += checkStep(design, board, pos, piece, 0, [6, 5]); // se
      v += checkJump(design, board, pos, piece, 6, 6, [9]); // nw nw
      v += checkJump(design, board, pos, piece, 5, 5, [9]); // ne ne
      v += checkJump(design, board, pos, piece, 2, 2, [9]); // sw sw
      v += checkJump(design, board, pos, piece, 0, 0, [9]); // se se
      v += checkJump(design, board, pos, piece, 7, 6, [10]); // n nw
      v += checkJump(design, board, pos, piece, 7, 5, [10]); // n ne
      v += checkJump(design, board, pos, piece, 1, 2, [10]); // s sw
      v += checkJump(design, board, pos, piece, 1, 0, [10]); // s se
      v += checkJump(design, board, pos, piece, 4, 6, [10]); // w nw
      v += checkJump(design, board, pos, piece, 4, 2, [10]); // w sw
      v += checkJump(design, board, pos, piece, 3, 5, [10]); // e ne
      v += checkJump(design, board, pos, piece, 3, 0, [10]); // e se
      v += checkSlide(design, board, pos, piece, 7, [8]); // n
      v += checkSlide(design, board, pos, piece, 3, [8]); // e
      v += checkSlide(design, board, pos, piece, 4, [8]); // w
      v += checkSlide(design, board, pos, piece, 1, [8]); // s
      if (piece.player == player) {
          r += v;
      } else{
          r -= v;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 6) return;
      if (piece.player == player) {
          f++;
      } else {
          e++;
      }
  });
  if (e < 1) return 1; if (f < 1) return -1;
  return checkGoals(design, board, player);
}

})();
