(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stations-invariant") {
      checkVersion(design, name, value);
  }
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkDir = function(design, board, player, pos, dir, types) {
  var isStep = true;
  var p = design.navigate(1, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return false;
          if (isStep && (piece.type == 0)) return true;
          return _.indexOf(types, +piece.type) >= 0;
      }
      p = design.navigate(1, p, dir);
      isStep = false;
  }
  return false;
}

var checkPosition = function(design, board, player, pos) {
  return checkDir(design, board, player, pos, 0, [8, 9, 12, 2, 3, 4, 5, 6, 11, 18]) || // n
         checkDir(design, board, player, pos, 1, [8, 9, 12, 1, 2, 3, 5, 6, 10, 15]) || // s
         checkDir(design, board, player, pos, 2, [7, 9, 13, 1, 3, 4, 5, 6, 10, 19]) || // ne
         checkDir(design, board, player, pos, 3, [7, 9, 13, 1, 2, 3, 4, 5, 11, 17]) || // sw
         checkDir(design, board, player, pos, 4, [7, 8, 14, 1, 2, 4, 5, 6, 10, 20]) || // nw
         checkDir(design, board, player, pos, 5, [7, 8, 14, 1, 2, 3, 4, 6, 11, 16]);   // se

}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = findPiece(design, board, board.player, 0);
  if (pos !== null) {
      var piece = board.getPiece(pos);
      if (piece.getValue(0) === null) {
          _.each(design.allPositions(), function(p) {
              if (design.isKilledPos(p)) return;
              if (board.getPiece(p) !== null) return;
              var move = Dagaz.Model.createMove(6);
              move.movePiece(pos, p, piece.setValue(0, 1));
              board.moves.push(move);
          });
      }
  }
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = findPiece(design, b, board.player, 0);
      if (pos === null) {
          move.failed = true;
          return;
      }
      if (checkPosition(design, b, board.player, pos)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
