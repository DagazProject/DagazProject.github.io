(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chasing-drops") {
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
  _.each(board.moves, function(move) {
      if (!move.isDropMove() || (move.mode != 0)) return;
      var val = null;
      for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
           var piece = board.getPiece(pos);
           if (piece !== null) {
               if (piece.player == board.player) {
                   val = piece.type;
               } else {
                   move.capturePiece(pos);
               }
           }
      }
      var piece = move.actions[0][2][0];
      if (val !== null) {
          if (piece.type == val) {
              if ((c > 1) || (val == 1) || (val == 6)) {
                  piece = piece.setValue(0, (val == 6) ? 2 : 1);
                  move.actions[0][2] = [piece];
                  for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
                       var piece = board.getPiece(pos);
                       if ((piece !== null) && (piece.player == board.player)) {
                            piece = piece.setValue(0, (val == 6) ? 2 : 1);
                            move.movePiece(pos, pos, piece);
                       }
                  }
              }
              if ((c == 1) && (val > 1) && (val < 6)) {
                   if (board.turn < 6) move.goTo(11);
                        else move.goTo(5);
              }
              return;
          }
      }
      if ((piece.type == 1) || (piece.type == 6)) {
          piece = piece.setValue(0, 1);
          move.actions[0][2] = [piece];
          return;
      }
  });
  CheckInvariants(board);
}

})();
