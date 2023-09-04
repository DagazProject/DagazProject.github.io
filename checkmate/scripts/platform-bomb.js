(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "platform-bomb") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var down   = design.getDirection("down");
  var up     = design.getDirection("up");
  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
     _.each(move.actions, function(action) {
         if ((action[0] !== null) && (action[1] === null)) {
             var pos = action[0][0];
             var piece = board.getPiece(pos);
             if ((piece !== null) && (piece.type != 2)) return;
             var p = design.navigate(board.player, pos, down);
             var fuse = true;
             while (p !== null) {
                 var piece = board.getPiece(p);
                 if ((p != pos) && (piece !== null)) {
                     if ((piece.player == board.player) && (piece.type == king)) {
                         move.failed = true;
                     }
                     if (piece.player != board.player) {
                         fuse = false;
                     }
                     move.capturePiece(p);
                 }
                 p = design.navigate(board.player, p, up);
             }
             if (fuse) {
                 move.failed = true;
             }
         }
     });
  });
  CheckInvariants(board);
}

})();
