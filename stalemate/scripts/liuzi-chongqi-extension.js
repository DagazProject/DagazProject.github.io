(function() {

Dagaz.AI.AI_FRAME     = 1000;
Dagaz.Model.showBlink = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "liuzi-chongqi-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = 1;
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 1) {
      return 1;
  }
  if (friends < 1) {
      return -1;
  }
  return checkGoals(design, board, player);
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var checkStep = function(design, board, player, pos, d, o, move) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  var piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player != player) return;
  var q = design.navigate(player, p, o);
  if (q !== null) {
      piece = board.getPiece(q);
      if ((piece !== null) && (piece.player == player)) return;
  }
  p = design.navigate(player, pos, d);
  if (p === null) return;
  piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player == player) return;
  q = design.navigate(player, p, d);
  if (q !== null) {
      piece = board.getPiece(q);
      if (piece !== null) return;
  }
  move.capturePiece(p);
}

var checkLeap = function(design, board, player, pos, d, o, move) {
  var q = design.navigate(player, pos, o);
  if (q !== null) {
      var piece = board.getPiece(q);
      if ((piece !== null) && (piece.player == player)) return;
  }
  var p = design.navigate(player, pos, d);
  if (p === null) return;
  piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player != player) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player == player) return;
  q = design.navigate(player, p, d);
  if (q !== null) {
      piece = board.getPiece(q);
      if (piece !== null) return;
  }
  move.capturePiece(p);
}

var checkDir = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return true;
  return board.getPiece(p) === null;
}

var checkMiddle = function(design, board, player, pos, d, o, move) {
  if (!checkDir(design, board, player, pos, d)) return;
  if (!checkDir(design, board, player, pos, o)) return;
  var p = design.navigate(player, pos, d);
  var q = design.navigate(player, pos, o);
  if ((p === null) || (q === null)) return;
  move.capturePiece(p);
  move.capturePiece(q);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var b = board.apply(move);
      checkStep(design, b, board.player, pos, 0, 1, move);
      checkStep(design, b, board.player, pos, 1, 0, move);
      checkStep(design, b, board.player, pos, 2, 3, move);
      checkStep(design, b, board.player, pos, 3, 2, move);
      checkLeap(design, b, board.player, pos, 0, 1, move);
      checkLeap(design, b, board.player, pos, 1, 0, move);
      checkLeap(design, b, board.player, pos, 2, 3, move);
      checkLeap(design, b, board.player, pos, 3, 2, move);
  });
  var c = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      c++;
  });
  if (c == 1) {
      _.each(board.moves, function(move) {
          if (!move.isSimpleMove()) return;
          var pos = move.actions[0][1][0];
          checkMiddle(design, board, board.player, pos, 0, 1, move);
          checkMiddle(design, board, board.player, pos, 2, 3, move);
      });
  }
  CheckInvariants(board);
}

})();
