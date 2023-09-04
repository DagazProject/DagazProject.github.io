(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qxo-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = false; var e = false;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(1, 1, pos)) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              _.each(_.range(8), function(dir) {
                   var p = design.navigate(1, pos, dir);
                   if (p !== null) {
                       var x = board.getPiece(p);
                       if ((x !== null) && (x.player == piece.player)) {
                           p = design.navigate(1, p, dir);
                           if (p !== null) {
                               x = board.getPiece(p);
                               if ((x !== null) && (x.player == piece.player)) {
                                   if (piece.player == player) {
                                       f = true;
                                   } else {
                                       e = true;
                                   }
                               }
                           }
                       }
                   }
              });
          }
      }
  });
  if (f && e) return 0;
  if (f) return 1;
  if (e) return -1;
  return checkGoals(design, board, player);
}

})();
