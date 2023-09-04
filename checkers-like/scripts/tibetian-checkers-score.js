(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tibetian-checkers-score") {
     checkVersion(design, name, value);
  }
}

var checkSquare = function(design, board, pos, f, s, empty) {
  var p = design.navigate(1, pos, f);
  if ((p === null) || (p == empty)) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != board.player) return 0;
  p = design.navigate(1, p, s);
  if ((p === null) || (p == empty)) return 0;
  piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != board.player) return 0;
  var p = design.navigate(1, pos, s);
  if ((p === null) || (p == empty)) return 0;
  piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != board.player) return 0;
  return 1;
}

var checkLine = function(design, board, pos, f, s, empty) {
  var p = design.navigate(1, pos, f);
  while (p !== null) {
      if (p == empty) return 0;
      var piece = board.getPiece(p);
      if (piece === null) return 0;
      if (piece.player != board.player) return 0;
      p = design.navigate(1, p, f);
  }
  p = design.navigate(1, pos, s);
  while (p !== null) {
      if (p == empty) return 0;
      var piece = board.getPiece(p);
      if (piece === null) return 0;
      if (piece.player != board.player) return 0;
      p = design.navigate(1, p, s);
  }
  return 2;
}

var calcCaptures = function(move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      if (a[1] !== null) return;
      r++;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player == board.player) return;
      cnt++;
  });
  _.each(board.moves, function(move) {
      if (move.mode == 3) return;
      var pos = null; var empty = null;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (empty === null) {
              empty = a[0][0];
          }
          pos = a[1][0];
      });
      if (pos === null) return;
      var score = 0;
      score += checkSquare(design, board, pos, 3, 1, empty); // n e
      score += checkSquare(design, board, pos, 1, 0, empty); // e s
      score += checkSquare(design, board, pos, 0, 2, empty); // s w
      score += checkSquare(design, board, pos, 2, 3, empty); // w n
      score += checkLine(design, board, pos, 3, 0, empty); // n s
      score += checkLine(design, board, pos, 1, 2, empty); // w e
      var c = cnt - calcCaptures(move);
      if (score > c) score = c;
      if (score > 0) {
          move.addValue(board.player - 1, score);
          move.goTo(board.turn);
      }
  });
  CheckInvariants(board);
}

})();
