(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shen-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.mode >= 1) && (move.mode <= 5)) {
           var action = null;
           _.each(move.actions, function(a) {
               if ((a[0] !== null) && (a[1] !== null)) {
                   action = a;
               }
           });
           if (action !== null) {
               var pos = action[1][0];
               if (design.inZone(0, board.player, action[1][0])) {
                   while (pos !== null) {
                       if (board.getPiece(pos) === null) break;
                       pos = design.navigate(board.player, pos, 3);
                   }
                   if (pos === null) {
                       move.failed = true;
                       return;
                   }
                   action[1] = [pos];
                   var player = design.nextPlayer(board.player);
                   var pos = design.navigate(player, move.actions[0][1][0], 1);
                   var p = pos;
                   while (pos !== null) {
                       if (board.getPiece(pos) !== null) break;
                       pos = design.navigate(player, pos, 0);
                   }
                   if ((pos === null) || (p === null)) {
                       move.failed = true;
                       return;
                   }
                   var enemy = pos;
                   var found = false;
                   pos = design.navigate(player, pos, 0);
                   while (pos !== null) {
                       if (board.getPiece(pos) !== null) {
                           found = true;
                           break;
                       }
                       pos = design.navigate(player, pos, 0);
                   }
                   move.capturePiece(enemy);
                   if (!found) {
                       pos = p;
                       p = design.navigate(player, p, 3);
                       while (p !== null) {
                           if (board.getPiece(p) !== null) break;
                           p = design.navigate(player, p, 3);
                       }
                       if (p !== null) {
                           move.movePiece(p, pos, board.getPiece(p));
                       }
                   }
               } else {
                   if ((board.getPiece(pos) !== null) && (pos != move.actions[0][0][0])) {
                       move.failed = true;
                       return;
                   }
               }
           }
      }
  });
  CheckInvariants(board);
}

})();
