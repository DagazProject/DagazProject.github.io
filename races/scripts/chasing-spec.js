(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chasing-spec") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var c = 0;
  for (var pos = 0; pos < 24; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.player == board.player)) c++;
  }
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
      if (move.mode == 7) return;
      if (c > 1) {
          if (move.mode > 7) move.failed = true;
          return;
      }
      if (move.mode < 7) {
          move.failed = true;
          return;
      }
      for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           var v = piece.getValue(0);
           if (v === null) continue;
           if (v < 1) continue;
           v = (piece.type == 1) ? 8 : 9;
           if (v != move.mode) continue;
           move.capturePiece(pos);
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
