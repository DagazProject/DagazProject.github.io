(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "durer-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      _.each(design.allPositions(), function(p) {
          if (!design.inZone(0, board.player, p)) return;
          if (board.getPiece(p) !== null) return;
          var m = Dagaz.Model.createMove(0);
          m.movePiece(pos, p, piece);
          board.moves.push(m);
      });
  });
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var p = move.actions[0][0][0];
      var q = move.actions[0][1][0];
      var piece = board.getPiece(q);
      if (piece === null) return;
      move.movePiece(q, p, piece);
  });
  CheckInvariants(board);
}

})();
