(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bizingo-extension") {
      checkVersion(design, name, value);
  }
}

var isAttacked = function(design, board, pos, piece) {
  if (piece.player == board.player) return false;
  var filled = []; var empty = [];
  var s = 0; var c = 0; var n = -1;
  _.each([4, 6, 8, 9], function(dir) {
      var p = design.navigate(board.player, pos, dir);
      if (p === null) {
          n++;
          return;
      }
      var x = board.getPiece(p);
      if (x === null) {
          empty.push(p);
          return;
      }
      filled.push(p);
      if (x.type > 0) c++;
      s++;
  });
  if (s + n < 2) return false;
  _.each(empty, function(q) {
      _.each([0, 1, 2, 3, 5, 7], function(dir) {
           var p = design.navigate(board.player, q, dir);
           if (p === null) return;
           var x = board.getPiece(p);
           if (x === null) return;
           if (x.type > 0) c++;
           s++;
      });
  });
  if ((piece.type > 0) || (n > 0)) {
      if (c == 0) return false;
  }
  return s + n >= 3;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[piece.type];
          if (isAttacked(design, board, pos, piece)) {
              v = 0;
          }
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1; var p = null;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null) && (p === null)) {
          p = a[1][0];
      }
      if ((a[0] !== null) && (a[1] === null)) {
          if ((p !== null) && (a[0][0] == p)) return -100;
          var piece = board.getPiece(a[0][0]);
          if (piece !== null) {
              r += design.price[piece.type] * 10;
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              e++;
          } else {
              f++;
          }
      }
  });
  if (e < 3) return 1;
  if (f < 3) return -1;
  return checkGoals(design, board, player);
}

var isCaptured = function(design, board, player, pos, dirs, enemy) {
  var s = 0; var c = 0; var n = -1;
  _.each(dirs, function(dir) {
      var p = design.navigate(player, pos, dir);
      if (p === null) {
          n++;
          return;
      }
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.type > 0) c++;
      s++;
  });
  if ((!_.isUndefined(enemy) && (enemy.type > 0)) || (n > 0)) {
      if (c == 0) return false;
  }
  return s + n >= 3;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dirs = [4, 6, 8, 9];
  _.each(board.moves, function(move) {
      var pos = move.actions[0][1][0];
      var b = board.apply(move);
      var f = true;
      _.each(dirs, function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (isCaptured(design, b, board.player, p, dirs, piece)) {
              move.capturePiece(p);
              f = false;
          }
      });
      if (f && isCaptured(design, b, board.player, pos, dirs)) {
          move.capturePiece(pos);
      }
  });
  CheckInvariants(board);
}

})();
