(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "amazons-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = move.actions[2][1][0];
      var piece = Dagaz.Model.createPiece(1, board.player);
      move.dropPiece(pos, piece, 2);
  });
  CheckInvariants(board);
}

})();
