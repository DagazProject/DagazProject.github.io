(function() {

var noFull = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dearth-extension") {
      noFull = (value == "no-full-capturing");
  } else {
      checkVersion(design, name, value);
  }
}

var noEnemies = function(design, board, player) {
  for (var pos = Dagaz.Model.stringToPos("X2") - 1; pos >= 0; pos--) {
       if (!design.inZone(0, player, pos) && (board.getPiece(pos) !== null)) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (noFull || noEnemies(design, board, board.player)) {
      var moves = [];
      _.each(board.moves, function(move) {
           if (_.isUndefined(move.failed)) {
               var b = board.apply(move);
               if (!noEnemies(design, b, board.player)) {
                   moves.push(move);
               }
           }
      });
      if (moves.length > 0) {
          board.moves = moves;
      }
  }
  CheckInvariants(board);
}

})();
