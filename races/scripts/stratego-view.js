(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stratego-view") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == 0)) {
              _.each(design.allPositions(), function(p) {
                   if (p == move.actions[0][0][0]) return;
                   if (p == move.actions[0][1][0]) return;
                   var piece = board.getPiece(p);
                   if ((piece !== null) && (piece.type < 12)) {
                       move.movePiece(p, p, piece.promote(+piece.type + 12));
                   }
              });
          }
      }
  });
  CheckInvariants(board);
}

})();
