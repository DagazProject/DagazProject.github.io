(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rpns-extension") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 5) return;
      if (piece.player != player) {
          e++;
      } else {
          f++;
      }
  });
  if (e < 1) return 1;
  if (f < 1) return -1;
  return checkGoals(design, board, player);
}

var isBetter = function(a, b, f) {
  if (a == 1) {
      if (f && (a == b)) return true;
      return b == 2;
  }
  if (a == 2) {
      if (f && (a == b)) return true;
      return b == 3;
  }
  if (a == 3) {
      if (f && (a == b)) return true;
      return b == 1;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var p = move.actions[0][0][0];
      var piece = board.getPiece(p);
      if (piece === null) return;
      var q = move.actions[0][1][0];
      var target = board.getPiece(q);
      if (target === null) return;
      var v = design.price[+target.type] % 10;
      if (!isBetter(move.mode, v, (piece.type >= 12) || (target.type <= 5))) {
          move.failed = true;
          return;
      }
      if (target.type % 2) return;
      var d = design.findDirection(p, q);
      if (d === null) {
          move.failed = true;
          return;
      }
      var pos = design.navigate(1, q, d);
      if (pos === null) return;
      if (board.getPiece(pos) !== null) return;
      move.movePiece(q, pos, target.promote(+target.type + 1));
  });
  CheckInvariants(board);
}

})();
