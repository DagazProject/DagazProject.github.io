(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "evoluchess-shoot") {
     checkVersion(design, name, value);
  }
}

var shoot = function(design, board, pos, piece, dir, type) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return;
  var target = board.getPiece(p);
  if (target === null) return;
  if (target.player != board.player) return;
  if (target.type != type) return;
  p = design.navigate(board.player, p, dir);
  while (p !== null) {
      target = board.getPiece(p);
      if ((target === null) || ((target.player != board.player) && (target.type != 6))) {
          var move = Dagaz.Model.createMove(2);
          move.movePiece(pos, p, piece);
          board.moves.push(move);
      }
      p = design.navigate(board.player, p, dir);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type == 2) {
          shoot(design, board, pos, piece, 7, 6);
      }
      if (piece.type == 4) {
          shoot(design, board, pos, piece, 5, 4);
          shoot(design, board, pos, piece, 6, 4);
      }
  });
  CheckInvariants(board);
}

})();
