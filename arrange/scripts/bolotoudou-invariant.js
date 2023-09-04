(function() {

var strongMode = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "bolotoudou-invariant") {
      if (value == "strong") strongMode = true;
  } else {
      checkVersion(design, name, value);
  }
}

var lineNeighbors = function(design, board, player, pos, dir, ort, targets) {
  var t = design.navigate(player, pos, ort);
  if (t !== null) {
      var piece = board.getPiece(t);
      if ((piece !== null) && (piece.player != player)) targets.push(t);
  }
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  t = design.navigate(player, p, ort);
  if (t !== null) {
      var piece = board.getPiece(t);
      if ((piece !== null) && (piece.player != player)) targets.push(t);
  }
  var p = design.navigate(player, p, dir);
  if (p === null) return;
  t = design.navigate(player, p, ort);
  if (t !== null) {
      var piece = board.getPiece(t);
      if ((piece !== null) && (piece.player != player)) targets.push(t);
  }
}

var middleNeighbors = function(design, board, player, pos, dir, ort, targets) {
  var t = design.navigate(player, pos, ort);
  if (t !== null) {
      var piece = board.getPiece(t);
      if ((piece !== null) && (piece.player != player)) targets.push(t);
  }
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  t = design.navigate(player, p, ort);
  if (t !== null) {
      var piece = board.getPiece(t);
      if ((piece !== null) && (piece.player != player)) targets.push(t);
  }
  var p = design.navigate(0, pos, dir);
  if (p === null) return;
  t = design.navigate(player, p, ort);
  if (t !== null) {
      var piece = board.getPiece(t);
      if ((piece !== null) && (piece.player != player)) targets.push(t);
  }
}

var getTargets = function(design, board, player, pos, targets) {
  var n = design.getDirection("n"); var w = design.getDirection("w");
  var s = design.getDirection("s"); var e = design.getDirection("e");
  if (Dagaz.Model.isLine(design, board, player, pos, n)) {
      lineNeighbors(design, board, player, pos, n, w, targets);
      lineNeighbors(design, board, player, pos, n, e, targets);
  }
  if (Dagaz.Model.isLine(design, board, player, pos, s)) {
      lineNeighbors(design, board, player, pos, s, w, targets);
      lineNeighbors(design, board, player, pos, s, e, targets);
  }
  if (Dagaz.Model.isLine(design, board, player, pos, w)) {
      lineNeighbors(design, board, player, pos, w, n, targets);
      lineNeighbors(design, board, player, pos, w, s, targets);
  }
  if (Dagaz.Model.isLine(design, board, player, pos, e)) {
      lineNeighbors(design, board, player, pos, e, n, targets);
      lineNeighbors(design, board, player, pos, e, s, targets);
  }
  if (Dagaz.Model.isMiddle(design, board, player, pos, n)) {
      middleNeighbors(design, board, player, pos, n, w, targets);
      middleNeighbors(design, board, player, pos, n, e, targets);
  }
  if (Dagaz.Model.isMiddle(design, board, player, pos, w)) {
      middleNeighbors(design, board, player, pos, w, n, targets);
      middleNeighbors(design, board, player, pos, w, s, targets);
  }
}

var getLastMove = function(board) {
  if (_.isUndefined(board.parent) || (board.parent === null)) return null;
  var b = board.parent;
  if (_.isUndefined(b.move)) return null;
  var move = b.move;
  if (move.actions.length < 2) return null;
  if ((move.actions[0][0] === null) || (move.actions[0][1] !== null)) return null;
  return move;
}

var getLastBoard = function(board) {
  if (_.isUndefined(board.parent) || (board.parent === null)) return null;
  var b = board.parent;
  if (_.isUndefined(b.parent) || (b.parent === null)) return null;
  var b = b.parent;
  if (_.isUndefined(b.move) || !b.move.isPass()) return null;
  if (_.isUndefined(b.parent) || (b.parent === null)) return null;
  var b = b.parent;
  if (_.isUndefined(b.move) || (b.move.mode !== 2)) return null;
  return b;
}

var checkLine = function(design, board, player, pos, target, dir, left, right, positions) {
  var isFound = false;
  var t = design.navigate(player, pos, left);
  if ((t !== null) && (t == target)) isFound = true;
  t = design.navigate(player, pos, right);
  if ((t !== null) && (t == target)) isFound = true;
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player)) return;
  t = design.navigate(player, p, left);
  if ((t !== null) && (t == target)) isFound = true;
  t = design.navigate(player, p, right);
  if ((t !== null) && (t == target)) isFound = true;
  var q = design.navigate(player, p, dir);
  if (q === null) return;
  var piece = board.getPiece(q);
  if ((piece === null) || (piece.player != player)) return;
  t = design.navigate(player, q, left);
  if ((t !== null) && (t == target)) isFound = true;
  t = design.navigate(player, q, right);
  if ((t !== null) && (t == target)) isFound = true;
  if (isFound) {
      positions.push(p);
      positions.push(q);
  }
}

var checkMiddle = function(design, board, player, pos, target, dir, left, right, positions) {
  var isFound = false;
  var t = design.navigate(player, pos, left);
  if ((t !== null) && (t == target)) isFound = true;
  t = design.navigate(player, pos, right);
  if ((t !== null) && (t == target)) isFound = true;
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player)) return;
  t = design.navigate(player, p, left);
  if ((t !== null) && (t == target)) isFound = true;
  t = design.navigate(player, p, right);
  if ((t !== null) && (t == target)) isFound = true;
  var q = design.navigate(0, pos, dir);
  if (q === null) return;
  var piece = board.getPiece(q);
  if ((piece === null) || (piece.player != player)) return;
  t = design.navigate(player, q, left);
  if ((t !== null) && (t == target)) isFound = true;
  t = design.navigate(player, q, right);
  if ((t !== null) && (t == target)) isFound = true;
  if (isFound) {
      positions.push(p);
      positions.push(q);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = Dagaz.Model.design;
  var moves   = [];
  var targets = null;
  var n = design.getDirection("n"); var w = design.getDirection("w");
  var s = design.getDirection("s"); var e = design.getDirection("e");
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove() && !move.isDropMove()) {
          if (!_.isUndefined(board.move) && board.move.isPass()) {
              if (!_.isUndefined(board.parent) && (board.parent !== null)) {
                  var b = board.parent;
                  if (!_.isUndefined(b.move) && b.move.isSimpleMove()) {
                      if (targets === null) {
                          var pos = b.move.actions[0][1][0];
                          targets = [];
                          getTargets(design, b, board.player, pos, targets);
                      }
                  }
              }
              if ((targets !== null) && (_.indexOf(targets, move.actions[0][0][0]) >= 0)) {
                  moves.push(move);
              }
          }
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
      return;
  }
  var isPass = false;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          if (!_.isUndefined(board.move) && !_.isUndefined(board.parent) && (board.parent !== null) && (board.move.mode == 2)) {
              if (targets === null) {
                  var pos = board.move.actions[0][1][0];
                  targets = [];
                  getTargets(design, board, board.parent.player, pos, targets);
              }
              if (targets.length > 0) {
                  move.failed = true;
                  isPass = true;
              }
              return;
          }
          if (strongMode) {
              var m = getLastMove(board);
              if (m !== null) {
                  var t = m.actions[0][0][0];
                  var b = getLastBoard(board);
                  if (b !== null) {
                      var p = b.move.actions[0][1][0];
                      var positions = [ p ];
                      checkLine(design,   b, board.player, p, t, n, w, e, positions);
                      checkLine(design,   b, board.player, p, t, s, w, e, positions);
                      checkLine(design,   b, board.player, p, t, w, n, s, positions);
                      checkLine(design,   b, board.player, p, t, e, n, s, positions);
                      checkMiddle(design, b, board.player, p, t, n, w, e, positions);
                      checkMiddle(design, b, board.player, p, t, w, n, s, positions);
                      if (_.indexOf(positions, move.actions[0][0][0]) < 0) {
                          move.failed = true;
                      }
                  }
              }
          }
      }      
      if (!move.isSimpleMove() && !move.isDropMove()) {
          move.failed = true;
      }
  });
  if (isPass) {
      board.moves.push(Dagaz.Model.createMove(1));
  }
  CheckInvariants(board);
}

})();
