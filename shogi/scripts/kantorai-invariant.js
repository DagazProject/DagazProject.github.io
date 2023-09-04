(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MIN_DEEP      = 2;
Dagaz.AI.MAX_DEEP      = 3;

var MAX_FORCED_FACTOR  = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "kantorai-invariant") {
      checkVersion(design, name, value);
  }
}

var checkStep = function(design, board, player, pos, dir, result) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  if (_.indexOf(result, p) >= 0) return;
  var piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player == player) return;
  result.push({
      pos: p,
      type: +piece.type
  });
}

var checkSlide = function(design, board, player, pos, dir, result) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  var piece = board.getPiece(p);
  if (piece !== null) return;
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return;
      piece = board.getPiece(p);
  }
  if (_.indexOf(result, p) >= 0) return;
  if (piece.player == player) return;
  result.push({
      pos: p,
      type: +piece.type
  });
}

var checkLeap = function(design, board, player, pos, o, d, result) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  if (_.indexOf(result, p) >= 0) return;
  var piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player == player) return;
  result.push({
      pos: p,
      type: +piece.type
  });
}

var checkAttacked = function(design, board, player, result) {
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player)) {
          if (_.indexOf([0, 1, 2, 3, 4], +piece.type) >= 0) {
              checkStep(design, board, player, pos, n, result);
          }
          if (_.indexOf([0, 2, 3, 4], +piece.type) >= 0) {
              checkStep(design, board, player, pos, w, result);
              checkStep(design, board, player, pos, e, result);
          }
          if (_.indexOf([0, 2, 4], +piece.type) >= 0) {
              checkStep(design, board, player, pos, s, result);
          }
          if (_.indexOf([0, 2, 7, 8], +piece.type) >= 0) {
              checkStep(design, board, player, pos, nw, result);
              checkStep(design, board, player, pos, ne, result);
          }
          if (_.indexOf([0, 8], +piece.type) >= 0) {
              checkStep(design, board, player, pos, sw, result);
              checkStep(design, board, player, pos, se, result);
          }
          if (_.indexOf([3, 4], +piece.type) >= 0) {
              checkSlide(design, board, player, pos, n, result);
              checkSlide(design, board, player, pos, w, result);
              checkSlide(design, board, player, pos, e, result);
          }
          if (piece.type == 4) {
              checkSlide(design, board, player, pos, s, result);
          }
          if (_.indexOf([7, 8], +piece.type) >= 0) {
              checkSlide(design, board, player, pos, nw, result);
              checkSlide(design, board, player, pos, ne, result);
          }
          if (piece.type == 8) {
              checkSlide(design, board, player, pos, sw, result);
              checkSlide(design, board, player, pos, se, result);
          }
          if (_.indexOf([5, 6], +piece.type) >= 0) {
              checkLeap(design, board, player, pos, n, nw, result);
              checkLeap(design, board, player, pos, n, ne, result);
              checkLeap(design, board, player, pos, w, nw, result);
              checkLeap(design, board, player, pos, e, ne, result);
          }
          if (piece.type == 6) {
              checkLeap(design, board, player, pos, s, sw, result);
              checkLeap(design, board, player, pos, s, se, result);
              checkLeap(design, board, player, pos, w, sw, result);
              checkLeap(design, board, player, pos, e, se, result);
          }
      }
  });
}

var getAttacked = function(design, board, move) {
  if (_.isUndefined(move.attacked)) {
      move.attacked = [];
      var b = board.apply(move);
      checkAttacked(design, b, b.player, move.attacked);
  }
  return move.attacked;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
          var piece = board.getPiece(a[1][0]);
          if (piece !== null) {
              r += design.price[piece.type];
          }
      }
  });
  return r;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = design.price[piece.type];
              if (!Dagaz.AI.isFriend(board.player, piece.player)) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (!Dagaz.AI.isFriend(player, board.player)) {
      r = -r;
  }
  return r;
}

Dagaz.AI.isForced = function(design, board, move) {
  if (_.isUndefined(move.isForced)) {
      move.isForced = false;
      var attacked = getAttacked(design, board, move);
      if (attacked.length > 0) {
          if (attacked.length <= MAX_FORCED_FACTOR) {
              move.isForced = true;
          }
          return move.isForced;
      }
      // TODO:

  }
  return move.isForced;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      _.each(getAttacked(design, board, move), function(frame) {
          if (frame.type == 0) {
              move.failed = true;
          }
      });
  });
  CheckInvariants(board);
}

})();
