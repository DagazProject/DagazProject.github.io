(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ur-pass") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.turn == 3) || (board.turn == 7)) {
      _.each(board.moves, function(move) {
           if (!_.isUndefined(move.failed)) return;
           var b = board.apply(move);
           b.generate();
           if (b.moves.length == 0) {
               if (board.turn == 3) {
                   move.goTo(5);
               } else {
                   move.goTo(1);
               }
           }
      });
  }
  CheckInvariants(board);
}

})();
