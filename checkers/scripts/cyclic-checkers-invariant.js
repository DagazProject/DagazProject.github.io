(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyclic-checkers-invariant") {
      checkVersion(design, name, value);
  }
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

var isPrefix = function(board, prefix, move) {
  if (prefix.actions.length > move.actions.length) return false;
  for (var i = 0; i < prefix.actions.length; i++) {
      if (!isEq(prefix.actions[i], move.actions[i])) return false;
      if (move.actions[i][1] === null) {
          if (move.actions[i][0] === null) return false;
          var piece = board.getPiece(move.actions[i][0][0]);
          if (piece === null) return false;
          if (piece.player == board.player) return false;
      }
  }
  return true;
}

var isBadMove = function(board, prefix, move, pn) {
  if (prefix.actions.length < move.actions.length) return false;
  var i = 0;
  for (; i < prefix.actions.length; i++) {
      if (prefix.actions[i][3] >= pn) break;
      if (!isEq(prefix.actions[i], move.actions[i])) return false;
  }
  if (prefix.actions[i][0] === null) return false;
  if (prefix.actions[i][1] !== null) return false;
  var piece = board.getPiece(prefix.actions[i][0][0]);
  if (piece === null) return false;
  return piece.player != board.player;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pn = 0;
      _.each(move.actions, function(a) {
          if (pn > 0) return;
          if (a[0] === null) return;
          if (a[1] !== null) return;
          var piece = board.getPiece(a[0][0]);
          if (piece === null) return;
          if (piece.player !== board.player) return;
          pn = a[3];
      });
      if (pn == 0) return;
      _.each(board.moves, function(prefix) {
          if (isBadMove(board, prefix, move, pn)) move.failed = true;
          if (isPrefix(board, prefix, move)) prefix.failed = true;
      });
  });
  CheckInvariants(board);
}

})();
