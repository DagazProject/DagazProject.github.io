(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sahkku-dice") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.mode == 0) || (move.mode == 5)) return;
      if (move.actions.length == 0) return;
      var c = 0;
      for (var pos = 0; pos < 3; pos++) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.type > 0)) {
               var v = piece.getValue(0);
               if ((piece.type > 0) && ((v === null) || (v > 0))) {
                   if ((v === null) && (piece.type > c)) c = +piece.type;
                   if (v > c) c = v;
               }
               if ((v === null) && (piece !== null) && (piece.type == move.mode)) {
                   move.capturePiece(pos);
                   return;
               }
           }
      }
      if (c > 0) {
          var piece = board.getPiece(move.actions[0][0][0]);
          if ((piece !== null) && (piece.type == 4)) {
              if (c == 1) {                
                  var p = null;
                  for (var pos = 0; pos < 3; pos++) {
                       piece = board.getPiece(pos);
                       if ((p === null) && (piece !== null) && (piece.type > 0)) {
                           var v = piece.getValue(0);
                           if (v !== null) {
                               if (v == 1) p = pos;
                           } else {
                               if (piece.type == 1) p = pos;
                           }
                       }
                  }
                  if (p !== null) {
                       for (var pos = 0; pos < 3; pos++) {
                            piece = board.getPiece(pos);
                            if ((pos != p) && (piece !== null)) move.movePiece(pos, pos, piece.setValue(0, null));
                       }
                       move.capturePiece(p);
                  }
                  p = design.navigate(board.player, move.actions[0][1][0], 5);
                  while (p !== null) {
                      piece = board.getPiece(p);
                      if ((piece !== null) && (piece.player != board.player)) {
                          move.capturePiece(p);
                      }
                      p = design.navigate(board.player, p, 5);
                  }
                  _.each(design.allPositions(), function(p) {
                      var piece = board.getPiece(p);
                      if ((piece !== null) && (piece.type == 6)) move.capturePiece(p);
                  });
              } else {
                  for (var pos = 0; pos < 3; pos++) {
                       piece = board.getPiece(pos);
                       if ((piece !== null) && (piece.type > 0)) {
                           var v = piece.getValue(0);
                           if (v === null) {
                               move.movePiece(pos, pos, piece.setValue(0, piece.type - 1));
                           } else {
                               move.movePiece(pos, pos, piece.setValue(0, v - 1));
                           }
                       }
                  }
              }
              return;
          }
      }
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
