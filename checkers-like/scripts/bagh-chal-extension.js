(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bagh-chal-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  if (move.actions.length > 1) {
      return 100 * move.actions.length;
  }
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) return;
          p = design.navigate(board.player, p, dir);
          if (p === null) return;
          if (board.getPiece(p) !== null) return;
          r += 10;
      });
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          f = true;
      }
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (!move.isDropMove()) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
