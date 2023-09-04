(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-go-move") {
     checkVersion(design, name, value);
  }
}

var isLocked = function(design, board, player, pos, neighbour, enemy) {
  var r = true;
  _.each([1, 3, 4, 7], function(dir) {
      var p = design.navigate(player, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (p == neighbour) {
          piece = enemy;
      }
      if ((piece === null) || (piece.player == player)) r = false;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 2) return;
      var src = move.actions[0][0][0];
      var piece = board.getPiece(src);
      if (piece === null) return;
      var dst = move.actions[0][1][0];
      var target = board.getPiece(dst);
      if (piece.type == 6) {
          target = target.changeOwner(board.player);
      }
      if ((target !== null) && isLocked(design, board, target.player, src, dst, piece)) return;
      if (target === null) return;
      move.movePiece(dst, src, target);
  });
  CheckInvariants(board);
}

})();
