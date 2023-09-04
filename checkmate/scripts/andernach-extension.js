(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "andernach-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 5) return;
      pos = move.actions[0][1][0];
      piece = board.getPiece(pos);
      if (piece === null) return;
      var pieces = [];
      _.each(move.actions[0][2], function(p) {
          pieces.push(p.changeOwner(piece.player));
      });
      if (pieces.length == 0) return;
      move.actions[0][2] = pieces;
  });
  CheckInvariants(board);
}

})();
