(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tenjiku-shogi-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var friends = 0;
  var enemies = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && ((piece.type == 32) || (piece.type == 33))) {
          if (piece.player == player) {
              friends++;
          } else {
              enemies++;
          }
      }
  });
  if (enemies == 0) {
      return 1;
  }
  if (friends == 0) {
      return -1;
  }
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var daemon = design.getPieceType("Fire-Demon");
  var none   = design.getPieceType("None");
  var dirs   = design.allDirections();
  for (var i = 0; i < board.moves.length; i++) {
       var move = board.moves[i];
       var action = null;
       for (var j = 0; j < move.actions.length; j++) {
            var a = move.actions[j];
            if ((a[0] !== null) && (a[1] !== null)) {
                 action = a;
            }
       }
       if (action !== null) {
            var isFired = false;
            var pos  = action[1][0];
            for (var k = 0; k < dirs.length; k++) {
                 var p = design.navigate(board.player, pos, dirs[k]);
                 if (p !== null) {
                     var piece = board.getPiece(p);
                     if ((piece !== null) && (piece.type == daemon) && (piece.player != board.player)) {
                         isFired = true;
                         break;
                     }
                 }
            }
            if (isFired) {
                action[2] = [ Dagaz.Model.createPiece(none, board.player) ];
                move.capturePiece(pos, action[3]);
            } else {
                if ((action[2] !== null) && (action[2][0].type == daemon)) {
                    for (var k = 0; k < dirs.length; k++) {
                         var p = design.navigate(board.player, pos, dirs[k]);
                         if (p !== null) {
                             var piece = board.getPiece(p);
                             if ((piece !== null) && (piece.player != board.player)) {
                                 move.capturePiece(p, action[3]);
                             }
                         }
                    }
                }
            }
       }
  }
  CheckInvariants(board);
}

})();
