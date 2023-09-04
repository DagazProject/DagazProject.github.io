(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shen-restrictions") {
     checkVersion(design, name, value);
  }
}

var getDice = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(3, player, pos)) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.type == 1) {
              r++;
          }
      }
  });
  if (r == 0) {
      r = 5;
  }
  return r;
}

var clearDices = function(design, board, player, move) {
  _.each(design.allPositions(), function(pos) {
      if ((design.inZone(3, 1, pos) || design.inZone(3, 2, pos)) && (board.getPiece(pos) !== null)) {
          move.capturePiece(pos);
      }
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dice = getDice(design, board, board.player);
  _.each(board.moves, function(move) {
      if ((move.mode >= 1) && (move.mode <= 5)) {
           if (move.mode != dice){
               move.failed = true;
               return;
           }
           clearDices(design, board, board.player, move);
      }
  });
  CheckInvariants(board);
}

})();
