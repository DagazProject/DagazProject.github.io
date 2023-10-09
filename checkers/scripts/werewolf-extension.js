(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "werewolf-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) return;
      if (move.actions.length != 2) return;
      if (move.actions[1][0] === null) return;
      if (move.actions[1][1] === null) return;
      var pos = move.actions[1][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      piece = piece.changeOwner(design.nextPlayer(board.player));
      if ((piece.type != 0) && design.inZone(0, piece.player, move.actions[1][1][0])) {
          piece = piece.promote(1);
      }
      move.actions[1][2] = [piece];
  });
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 0) return;
      if (design.inZone(0, piece.player, move.actions[0][1][0])) {
          piece = piece.promote(1);
          move.actions[0][2] = [piece];
      }
  });
  CheckInvariants(board);
}

})();
