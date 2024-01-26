(function() {

var restricted    = false;
var enemyGoals    = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "tafl-extension") {
      if (value == "restricted") {
          restricted = true;
      }
      if (value == "goals") {
          enemyGoals = true;
      }
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length == 1;
    })
   .each(function(move) {
       var pos = move.actions[0][1][0];
       _.each(design.allDirections(), function(dir) {
           var e = design.navigate(board.player, pos, dir);
           if (e !== null) {
               var piece = board.getPiece(e);
               if ((piece !== null) && (piece.player != board.player) && (piece.type == 0)) {
                   var p = design.navigate(board.player, e, dir);
                   if (p !== null) {
                       piece = board.getPiece(p);
                       if (((piece !== null) && (piece.player == board.player)) || 
                          (design.inZone(0, board.player, p) && (piece === null))) {
                           move.capturePiece(e);
                       }
                       if (design.inZone(1, board.player, p)) {
                           move.capturePiece(e);
                       }
                   }
               }
           }
       });
       if (restricted) {
           var from = move.actions[0][0][0];
           if (!design.inZone(2, board.player, from) && design.inZone(2, board.player, pos)) {
               move.failed = true;
           }
       }
    });
  CheckInvariants(board);
}

})();
