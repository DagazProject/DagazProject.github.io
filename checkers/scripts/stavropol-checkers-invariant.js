(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stavropol-checkers-invariant") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) {
          _.each(move.actions, function(a) {
               if ((a[0] !== null) && (a[1] !== null)) {
                   var piece = board.getPiece(a[0][0]);
                   if ((piece !== null) && (piece.player == board.player)) f = true;
               }
          });
      }
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (!move.isSimpleMove()) {
              _.each(move.actions, function(a) {
                   if ((a[0] !== null) && (a[1] !== null)) {
                       var piece = board.getPiece(a[0][0]);
                       if ((piece !== null) && (piece.player != board.player)) move.failed = true;
                   }
              });
          }
      });
  }
  CheckInvariants(board);
}

})();
