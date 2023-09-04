(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rithmomachia-siege") {
      checkVersion(design, name, value);
  }
}

var checkDirection = function(design, board, player, pos, dir, dirs, move) {
  var p = design.navigate(1, pos, dir);
  if (p === null) return;
  var piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player == player) return;
  for (var i = 0; i < dirs.length; i++) {
       var q = design.navigate(1, p, dirs[i]);
       if (q !== null) {
           var x = board.getPiece(q);
           if (x === null) return;
           if (x.player != player) return;
       }
  }
  if (Dagaz.Model.isP(piece.type)) {
      var player = piece.player;
     _.each(design.allPositions(), function(p) {
          if (!design.inZone(0, player, p)) return;
          if (board.getPiece(p) === null) return;
          move.capturePiece(p);
     });
  }
  move.capturePiece(p);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      var pos = move.actions[0][1][0];
      var b = board.apply(move);
      checkDirection(design, b, board.player, pos, 0, [0, 2, 5], move);
      checkDirection(design, b, board.player, pos, 1, [1, 3, 4], move);
      checkDirection(design, b, board.player, pos, 2, [2, 0, 6], move);
      checkDirection(design, b, board.player, pos, 3, [3, 1, 7], move);
      checkDirection(design, b, board.player, pos, 4, [4, 1, 7], move);
      checkDirection(design, b, board.player, pos, 5, [5, 0, 6], move);
      checkDirection(design, b, board.player, pos, 6, [6, 2, 5], move);
      checkDirection(design, b, board.player, pos, 7, [7, 3, 4], move);
  });
  CheckInvariants(board);
}

})();
