(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dtc-reserve") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type < 6) return;
      if (piece.type == 11) return;
      var v = piece.getValue(0);
      if ((v === null) || (v < 1)) return;
      _.each(design.allPositions(), function(p) {
           var target = board.getPiece(p);
           if (target === null) return;
           if (target.player != board.player) return;
           if (target.type >= 6) return;
           if (target.getValue(0) !== null) return;
           var m = Dagaz.Model.createMove(0);
           m.movePiece(pos, p, target.setValue(0, (board.player - 1) * 10 + (piece.type - 6)));
           m.movePiece(pos, pos, piece.setValue(0, v - 1));
           board.moves.push(m);
      });
  });
  CheckInvariants(board);
}

})();
