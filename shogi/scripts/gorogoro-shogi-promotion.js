(function() {

var promote = [];
var isAllForced = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "gorogoro-shogi-promotion") {
      promote[ 1] = 2; // Chick
      promote[ 3] = 4; // Cat
      if (value == "forced") isAllForced = true;
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      for (var i = 0; i < move.actions.length; i++) {
           if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
               var isForced = isAllForced;
               var from     = move.actions[i][0][0];
               var to       = move.actions[i][1][0];
               var piece    = board.getPiece(from);
               if ((piece !== null) && !_.isUndefined(promote[piece.type]) && design.inZone(0, board.player, from)) {
                   if (design.inZone(1, board.player, from) ||
                       design.inZone(1, board.player, to)) {
                       if (piece.type == 1) {
                           isForced    = true; //design.navigate(board.player, to, 1) === null;
                       }
                       var promoted    = piece.promote(promote[piece.type]);
                       var action      = [];
                       action[0]       = move.actions[i][0];
                       action[1]       = move.actions[i][1];
                       action[2]       = isForced ? [ promoted ] : [ piece, promoted ];
                       action[3]       = move.actions[i][3];
                       move.actions[i] = action;
                   }
               }
               break;
           }
      }
  });
  CheckInvariants(board);
}

})();
