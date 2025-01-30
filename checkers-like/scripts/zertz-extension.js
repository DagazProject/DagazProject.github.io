(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "zertz-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.getDestination = function(design, board, player, zone) {
  for (var pos = 0; pos < design.positions.length; pos++) {
       if (design.inZone(zone, player, pos) && (board.getPiece(pos) === null)) {
           return pos;
       }
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      var actions = [];
      var a = null;
      for (var i = 0; i < move.actions.length; i++) {
           if ((move.actions[i][0] !== null) && (move.actions[i][1] === null)) {
               a = move.actions[i];
               var piece = board.getPiece(a[0][0]);
               if (piece !== null) {
                   var dst = Dagaz.Model.getDestination(design, board, board.player, +piece.type + 1);
                   if (dst !== null) {
                       a[1] = [dst];
                       a[2] = [piece.changeOwner(board.player)];
                   }
               }
           } else {
               actions.push(move.actions[i]);
               if (a !== null) {
                   actions.push(a);
                   a = null;
               }
           }
      }
      move.actions = actions;
      if (board.turn == 0) {
          move.goTo(2);
      } else {
          move.goTo(0);
      }
  });
  CheckInvariants(board);
}

})();
