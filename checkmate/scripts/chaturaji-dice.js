(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chaturaji-dice") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = true;
  _.each(board.moves, function(move) {      
      if (!_.isUndefined(move.failed)) return;
      if ((move.mode < 2) || (move.mode > 5)) return;
      for (var pos = Dagaz.Model.stringToPos("x1"); pos < design.positions.length; pos++) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (design.price[piece.type] == move.mode)) {
               f = false;
               move.capturePiece(pos);
               return;
           }
      }
      move.failed = true;
  });
  if (f) {
      _.each(board.moves, function(move) {
           if (move.mode != 1) return;
           move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
