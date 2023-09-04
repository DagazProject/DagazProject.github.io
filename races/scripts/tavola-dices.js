(function() {

var isFuzzy = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tavola-dices") {
      checkVersion(design, name, value);
  }
}

var isPermited = function(design, board, move, value, alt) {
  if (move.mode == value) return true;
  if (alt === null) return false;
  return (value > alt) && (move.mode == alt);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var inHome = true;
  if (isFuzzy) {
      _.each(design.allPositions(), function(pos) {
          if (!inHome) return;
          var piece = board.getPiece(pos);
          if ((piece === null) || (piece.type > 0) || (piece.player != board.player)) return;
          if (!design.inZone(0, piece.player, pos)) inHome = false;
      });
  }
  var alt = null;
  if (inHome && isFuzzy) {
      var pos = design.navigate(board.player, 0, 10);
      for (var ix = 6; pos !== null; ix--) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.player == board.player)) {
               alt = ix;
               break;
           }
           pos = design.navigate(board.player, pos, 14);
      }
  }
  _.each(board.moves, function(move) {
      if ((move.mode > 0) && (move.mode < 7)) {
          for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
               var piece = board.getPiece(pos);
               if ((piece !== null) && isPermited(design, board, move, piece.type, alt)) {
                   var v = piece.getValue(0);
                   if ((v !== null) && (v > 1)) {
                        piece = piece.setValue(0, v - 1);
                        move.movePiece(pos, pos, piece);
                   } else {
                        move.capturePiece(pos);
                   }
                   return;
               }
          }
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
