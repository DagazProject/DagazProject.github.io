(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.moveToString = function(move) {
  var r = "";
  for (var i = 0; i < move.actions.length; i++) {
      var a = move.actions[i];
      if (a[0] === null) continue;
      if (a[1] === null) continue;
      r = Dagaz.Model.posToString(a[0][0]) + Dagaz.Model.posToString(a[1][0]);
      if ((a[2] !== null) && (move.mode > 0) && (a[2][0].type == move.mode)) {
          r = r + '+';
      }
      break;
  }
  return r;
}

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "mini-shogi-promotion") {
      promote[ 2] = 3; // Silver
      promote[ 4] = 5; // Bishop
      promote[ 6] = 7; // Rook
      promote[ 8] = 9; // Pawn
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
           var isForced = false;
           var from     = move.actions[0][0][0];
           var to       = move.actions[0][1][0];
           var piece    = board.getPiece(from);
           if ((piece !== null) && !_.isUndefined(promote[piece.type]) && design.inZone(0, board.player, from)) {
               if (design.inZone(1, board.player, from) ||
                   design.inZone(1, board.player, to)) {
                   if (piece.type > 2) {
                       isForced    = true;
                   }
                   var promoted    = piece.promote(promote[piece.type]);
                   var action      = [];
                   action[0]       = move.actions[0][0];
                   action[1]       = move.actions[0][1];
                   action[2]       = isForced ? [ promoted ] : [ piece, promoted ];
                   action[3]       = move.actions[0][3];
                   move.actions[0] = action;
                   move.mode = promoted.type;
               }
           }
      }
  });
  CheckInvariants(board);
}

})();
