(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chasing-dices") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = 0;
  for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       var v = piece.getValue(0);
       if (v === null) continue;
       cnt += v;
  }
  _.each(board.moves, function(move) {
      if (move.mode == 0) return;
      if (move.mode >= 7) return;
      for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           if (piece.type != move.mode) continue;
           if (piece.player != board.player) continue;
           var v = piece.getValue(0);
           if (v === null) continue;
           if (v < 1) continue;
           if (v > 1) {
               piece = piece.setValue(0, v - 1);
               move.movePiece(pos, pos, piece);
           } else {
               move.capturePiece(pos);
           }
           if (cnt < 2) {
               if (board.turn <= 5) move.goTo(6);
                   else move.goTo(0);
           }
           return;
      }
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
