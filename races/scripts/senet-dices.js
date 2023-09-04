(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "senet-dices") {
      checkVersion(design, name, value);
  }
}

var getDices = function(design, board) {
  var r = 0;
  for (var pos = 0; pos < 4; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.type == 1)) r++;
  }
  if (r == 0) r = 5;
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 0) return;
      if (move.isSimpleMove()) {
          var mode = getDices(design, board);
          if (move.mode !== mode) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
