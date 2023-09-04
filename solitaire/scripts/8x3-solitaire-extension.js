(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "8x3-solitaire-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = 0;
  var f = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
         if (piece.type == 1) {
             cnt++;
         } else {
             f = true;
         }
      }
  });
  if (!f) return -1;
  if (cnt == 0) return 1;
  return checkGoals(design, board, player); 
}

})();
