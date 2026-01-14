(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klin-zha-split") {
     checkVersion(design, name, value);
  }
}


var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false; 
  var src = null;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(3, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) {
          f = true;
          return;
      }
      src = pos;
  });
  if (!f && (src !== null)) {
      _.each(board.moves, function(move) {
          if (!move.isSimpleMove()) return;
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (_.indexOf([0, 2, 4, 6, 8, 10, 12], +piece.type) < 0) return;
          var dst = move.actions[0][1][0];
          var m = Dagaz.Model.createMove(1);
          m.movePiece(src, dst, board.getPiece(src));
          m.movePiece(pos, pos, piece.promote(0));
          board.moves.push(m);
      });
  }
  CheckInvariants(board);
}

})();
