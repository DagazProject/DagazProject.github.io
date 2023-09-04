(function() {

Dagaz.Model.passForcedDraw = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tablan-dices") {
     checkVersion(design, name, value);
  }
}

var getDice = function(design, board, player) {
  var r = 0;
  for (var pos = 0; pos < 4; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.type == 1)) {
           r++;
       }
  }
  if (r == 1) return 1;
  if (r == 4) return 4;
  if (r == 0) return 6;
  return 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dice = getDice(design, board, board.player);
  _.each(board.moves, function(move) {
      if (move.mode == 0) return;
      if ((move.mode != dice) && (move.mode != dice * 2)) {
           move.failed = true;
           return;
      }
  });
  CheckInvariants(board);
}

})();
