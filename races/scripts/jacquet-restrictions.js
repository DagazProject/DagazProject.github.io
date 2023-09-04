(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "jacquet-restrictions") {
      checkVersion(design, name, value);
  }
}

var checkTraps = function(design, board, player) {
  var c = 0;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(8, player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type > 0) return;
      var q = design.navigate(player, pos, 5);
      if (q === null) return;
      piece = board.getPiece(q);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type > 0) return;
      c++;
  });
  return c > 2;
}

var checkMiddle = function(design, board, player) {
  var f = false;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(9, player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type > 0) return;
      var q = design.navigate(player, pos, 5);
      if (q === null) return;
      if (board.getPiece(q) === null) return;
      q = design.navigate(player, q, 5);
      if (q === null) return;
      if (board.getPiece(q) === null) return;
      f = true;
  });
  return f;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      if (checkTraps(design, b, board.player) || checkMiddle(design, b, board.player)) {
          move.failed = true;
      }      
  });
  CheckInvariants(board);
}

})();
