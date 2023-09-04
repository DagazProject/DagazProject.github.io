(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "adiuh-checkers-extension") {
      checkVersion(design, name, value);
  }
}

var isRestricted = function(design, player, pos, dir, from) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (p == from) return true;
      p = design.navigate(player, p, dir);
  }
  return false;
}

var isAttacked = function(design, board, player, pos, dir, isKing) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) {
      if (!isKing) return false;
      while (piece === null) {
          p = design.navigate(player, p, dir);
          if (p === null) return false;
          piece = board.getPiece(p);
      }
  }
  if (piece.player == player) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  return board.getPiece(p) === null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length < 2) {
          move.setValue(0, null);
          move.setValue(1, null);
          return;
      }
      from = null; to = null;
      _.each(move.actions, function(a) {
           if (a[0] === null) return;
           if (a[1] === null) return;
           if (a[0][0] == a[1][0]) return;
           if (from === null) from = a[0][0];
           to = a[1][0];
      });
      if (from === null) return;
      if (to === null) return;
      var piece = board.getPiece(from);
      if (piece === null) return;
      var b = board.apply(move);
      var f = false;
      var isKing = piece.type == 1;
      if (design.inZone(0, board.player, to)) {
          isKing = true;
      }
      _.each(design.allDirections(), function(dir) {
          if (f) return;
          if (isRestricted(design, board.player, to, dir, from)) return;
          if (!isAttacked(design, b, board.player, to, dir, isKing)) return;
          f = true;
      });
      if (f) {
          move.goTo(board.turn);
          move.setValue(0, to);
          move.setValue(1, from);
          if (piece.type == 1) {
              move.mode = 2;
          }
      } else {
          move.setValue(0, null);
          move.setValue(1, null);
          if ((piece.type == 1) && !design.inZone(0, board.player, to)) {
              _.each(move.actions, function(a) {
                  if (a[0] === null) return;
                  if (a[1] === null) return;
                  if (a[2] === null) return;
                  if (a[0][0] == a[1][0]) return;
                  var p = a[2][0];
                  var v = p.getValue(0);
                  p = p.promote(0);
                  if (v !== null) {
                      p = p.setValue(0, v);
                  }
                  a[2] = [p];
              });
          }
      }
  });
  CheckInvariants(board);
}

})();
