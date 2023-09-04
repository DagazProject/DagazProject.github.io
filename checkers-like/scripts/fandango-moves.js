(function() {

Dagaz.AI.PROMOTE_ON_THE_FLY = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fanorona-moves") {
     checkVersion(design, name, value);
  }
}

var checkDual = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  var t = design.navigate(board.player, p, dir);
  if (t === null) return false;
  var piece = board.getPiece(t);
  if (piece === null) return false;
  if (piece.player == board.player) return false;
  t = design.navigate(board.player, pos, design.opposite(dir));
  if (t === null) return false;
  piece = board.getPiece(t);
  if (piece === null) return false;
  return piece.player != board.player;
}

var calcDual = function(stack, n) {
  var r = 1;
  for (var i = 0; i <= n; i++) {
      if (stack[i].isDual) r++;
  }
  return r;
}

var genCaptures = function(design, board, pos, piece, isReversed, history, stack, restricted, promoted, cnt) {
  if (_.isUndefined(cnt)) cnt = 0;
  _.each(_.isUndefined(promoted) && (piece.type == 0) ? [3, 4, 5, 6, 7] : design.allDirections(), function(dir) {
      if (!_.isUndefined(restricted) && (restricted == dir)) return;
      var p = design.navigate(board.player, pos, dir);
      if (p === null) return;
      if (_.indexOf(history, p) >= 0) return;
      if (board.getPiece(p) !== null) return;
      var t = design.navigate(board.player, p, dir);
      if (isReversed) {
          t = design.navigate(board.player, pos, design.opposite(dir));
      }
      if (t === null) return;
      var x = board.getPiece(t);
      if (x === null) return;
      if (x.player == board.player) return;
      history.push(p);
      var s = {
          from: pos,
          to: p,
          isDual: checkDual(design, board, pos, dir),
          capturing: [],
          undo: []
      };
      while ((x !== null) && (x.player != board.player)) {
          s.capturing.push(t);
          s.undo.push({
              pos: t,
              piece: board.getPiece(t)
          });
          board.setPiece(t, null);
          t = design.navigate(board.player, t, isReversed ? design.opposite(dir) : dir);
          if (t === null) break;
          x = board.getPiece(t);
      }
      stack.push(s);
      if ((piece.type == 0) && design.inZone(0, piece.player, p)) {
            promoted = piece.promote(1);
      }
      var m = Dagaz.Model.createMove(0);
      for (var i = 0; i < stack.length; i++) {
          var rn = calcDual(stack, i - 1);
          var x = piece;
          if (!_.isUndefined(promoted) && (i >= stack.length - 1 /*- cnt*/)) {
              x = promoted;
          }
          m.movePiece(stack[i].from, stack[i].to, x, i + rn);
          rn = calcDual(stack, i);
          _.each(stack[i].capturing, function(t) {
               m.capturePiece(t, i + rn);
          });
      }
      board.moves.push(m);
      if (!_.isUndefined(promoted)) cnt++;
      if (Dagaz.AI.PROMOTE_ON_THE_FLY || _.isUndefined(promoted)) {
          genCaptures(design, board, p, piece, false, history, stack, dir, promoted, cnt);
          genCaptures(design, board, p, piece, true, history, stack, dir, promoted, cnt);
      }
      _.each(s.undo, function(u) {
          board.setPiece(u.pos, u.piece);
      });
      stack.pop();
      history.pop();
  });
}

var isEq = function(a, b) {
  if ((a[0] !== null) && (b[0] === null)) return false;
  if ((a[0] === null) && (b[0] !== null)) return false;
  if ((a[0] !== null) && (a[0][0] != b[0][0])) return false;
  if ((a[1] !== null) && (b[1] === null)) return false;
  if ((a[1] === null) && (b[1] !== null)) return false;
  if ((a[1] !== null) && (a[1][0] != b[1][0])) return false;
  return true;
}

var checkPrefix = function(a, b) {
  if (a.length <= b.length) return false;
  for (var i = 0; i < b.length; i++) {
       if (!isEq(a[i], b[i])) return false;
  }
  return true;
}

var isPrefix = function(board, move) {
  var r = false;
  _.each(board.moves, function(m) {
      if (checkPrefix(m.actions, move.actions)) r = true;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  board.moves = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      genCaptures(design, board, pos, piece, false, [pos], []);
      genCaptures(design, board, pos, piece, true, [pos], []);
  });
  if (board.moves.length == 0) {
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.player != board.player) return;
          _.each(piece.type == 0 ? [5, 6] : design.allDirections(), function(dir) {
              var p = design.navigate(board.player, pos, dir);
              if (p === null) return;
              if (board.getPiece(p) !== null) return;
              if ((piece.type == 0) && design.inZone(0, piece.player, p)) {
                  piece = piece.promote(1);
              }
              var m = Dagaz.Model.createMove(1);
              m.movePiece(pos, p, piece);
              board.moves.push(m);
          });
      });
  }
  if (!Dagaz.Model.passPartial) {
      _.each(board.moves, function(move) {
          if (isPrefix(board, move)) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
