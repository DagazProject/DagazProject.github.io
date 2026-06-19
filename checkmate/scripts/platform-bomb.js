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
  var bomb   = design.getPieceType("Bomb");
  var none   = design.getPieceType("None");
  _.each(board.moves, function(move) {
     if (move.actions[0][0] === null) return;
     if (move.actions[0][1] === null) return;
     var pos = move.actions[0][1][0];
     var piece = board.getPiece(pos);
     if (piece === null) return;
     if (piece.type != bomb) return;
     piece = board.getPiece(move.actions[0][0][0]);
     if ((piece !== null) && !_.isUndefined(none)) {
         move.actions[0][2] = [ piece.promote(none) ];
     }
     var p = design.navigate(board.player, pos, down);
     while (p !== null) {
         var piece = board.getPiece(p);
         if (piece !== null) {
             move.capturePiece(p);
         }
         p = design.navigate(board.player, p, up);
     }
     move.sound = 11;
  });
  CheckInvariants(board);
}

})();
