(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gwangsanghui-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  var forward = design.getPieceType("Forward");
  var cnt = null;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != forward) return;
      pos = move.actions[0][1][0];
      piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != forward) return;
      var cnt = 0;
      _.each(design.allPositions(), function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return;
          cnt++;
      });
      if (cnt == 86) move.failed = true;
  });
  CheckInvariants(board);
}

})();
