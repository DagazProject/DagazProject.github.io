(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "senet-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed) || (move.mode == 0)) return;
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              move.movePiece(pos, move.actions[0][0][0], piece);
          }
          if (design.inZone(7, board.player, pos)) {
              move.capturePiece(pos);
          }
      }
  });
  CheckInvariants(board);
}

})();
