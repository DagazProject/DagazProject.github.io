(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dragonchess-dragon") {
     checkVersion(design, name, value);
  }
}

var checkTarget = function(design, board, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) return;
  if (piece.player == board.player) return;
  var move = Dagaz.Model.createMove(0);
  move.capturePiece(pos);
  board.moves.push(move);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(2, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 19) return;
      if (piece.player != board.player) return;
      var p = design.navigate(piece.player, pos, 9);
      if (p === null) return;
      checkTarget(design, board, p);
      _.each([1, 3, 4, 7], function(dir) {
          var q = design.navigate(piece.player, p, dir);
          if (q === null) return;
          checkTarget(design, board, q);
      });
  });
  CheckInvariants(board);
}

})();
