(function() {

Dagaz.Model.passForcedDraw = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ur-dice") {
     checkVersion(design, name, value);
  }
}

var getDice = function(design, board, player) {
  var r = 0;
  for (var pos = 0; pos < 3; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.type == 1)) {
           r++;
       }
  }
  if (r == 0) {
      r = 4;
  }
  return r;
}

var clearDices = function(design, board, player, move) {
  for (var pos = 0; pos < 3; pos++) {
      if (board.getPiece(pos) !== null) {
          move.capturePiece(pos);
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dice = getDice(design, board, board.player);
  _.each(board.moves, function(move) {
      if ((move.mode >= 1) && (move.mode <= 4)) {
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
