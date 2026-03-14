(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "triangle-drop") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  for (var src = 9; src < design.positions.length; src++) {
       var piece = board.getPiece(src);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       for (var dst = 0; dst < 9; dst++) {
            if (board.getPiece(dst) !== null) continue;
            var m = Dagaz.Model.createMove(1);
            m.movePiece(src, dst, piece);
            board.moves.push(m);
            f = true;
       }
  }
  if (f) {
      _.each(board.moves, function(move) {
            if (move.mode == 1) return;
            move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
