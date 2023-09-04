(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dafang-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  if (move.actions[0][0] !== null) r = r + Dagaz.Model.posToString(move.actions[0][0][0]);
  if (move.actions[0][1] !== null) r = r + Dagaz.Model.posToString(move.actions[0][1][0]);
  return r;
}

var checkSquare = function(design, board, player, pos, f, s, empty) {
  var p = design.navigate(1, pos, f);
  if ((p === null) || (p == empty)) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != player) return 0;
  p = design.navigate(1, p, s);
  if ((p === null) || (p == empty)) return 0;
  piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != player) return 0;
  var p = design.navigate(1, pos, s);
  if ((p === null) || (p == empty)) return 0;
  piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != player) return 0;
  return 1;
}

var checkLine = function(design, board, player, pos, f, s, d, empty) {
  var r = 1;
  var p = design.navigate(1, pos, f);
  while (p !== null) {
      if (p == empty) return 0;
      var piece = board.getPiece(p);
      if (piece === null) return 0;
      if (piece.player != player) return 0;
      p = design.navigate(1, p, f);
      r++;
  }
  p = design.navigate(1, pos, s);
  while (p !== null) {
      if (p == empty) return 0;
      var piece = board.getPiece(p);
      if (piece === null) return 0;
      if (piece.player != player) return 0;
      p = design.navigate(1, p, s);
      r++;
  }
  if (r < d) return 0;
  return r - d;
}

var onBoard = function(design, board, pos, f, s) {
  if (design.navigate(1, pos, f) === null) return true;
  if (design.navigate(1, pos, s) === null) return true;
  return false;
}

Dagaz.Model.calcScore = function(design, board, player, pos, empty) {
  var score = 0;
  score += checkSquare(design, board, player, pos, 7, 3, empty); // n e
  score += checkSquare(design, board, player, pos, 3, 1, empty); // e s
  score += checkSquare(design, board, player, pos, 1, 4, empty); // s w
  score += checkSquare(design, board, player, pos, 4, 7, empty); // w n
  score += checkLine(design, board, player, pos, 6, 0, 2, empty); // nw se
  score += checkLine(design, board, player, pos, 2, 5, 2, empty); // sw ne
  score += checkLine(design, board, player, pos, 7, 1, onBoard(design, board, pos, 4, 3) ? 4 : 3, empty); // n s
  score += checkLine(design, board, player, pos, 4, 3, onBoard(design, board, pos, 7, 1) ? 4 : 3, empty); // w e
  return score;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isCaptureMove()) return;
      var pos = null; var empty = null;
      _.each(move.actions, function(a) {
          if (a[1] === null) return;
          pos = a[1][0];
          if (a[0] === null) return;
          if (empty === null) {
              empty = a[0][0];
          }
      });
      if (pos === null) return;
      var score = Dagaz.Model.calcScore(design, board, board.player, pos, empty);
      if ((board.reserve[0][1] == 0) && (board.reserve[0][2] == 1)) {
          score++;
          move.setValue(design.nextPlayer(board.player) - 1, 1);
      }
      var cnt = 0;
      _.each(design.allPositions(), function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) return;
          if (Dagaz.Model.calcScore(design, board, piece.player, p, empty) > 0) return;
          cnt++;
      });
      if (score > cnt) score = cnt;
      if (score > 0) {
          move.addValue(board.player - 1, score);
          move.goTo(board.turn);
      }
  })
  CheckInvariants(board);
}

})();
