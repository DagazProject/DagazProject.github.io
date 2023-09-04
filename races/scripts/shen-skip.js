(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shen-skip") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.turn == 3) || (board.turn == 7) || (board.turn == 12)) {
      _.each(board.moves, function(move) {
           if (!_.isUndefined(move.failed)) return;
           var b = board.apply(move);
           b.generate();
           if (b.moves.length == 0) {
               _.each(design.allPositions(), function(pos) {
                   var piece = board.getPiece(pos);
                   if ((piece !== null) && (piece.type < 2)) {
                       move.capturePiece(pos);
                   }
               });
               if (board.turn == 7) {
                   move.goTo(9);
               } else {
                   move.goTo(4);
               }
           }
      });
  }
  CheckInvariants(board);
}

})();
