(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "jacquet-courier") {
      checkVersion(design, name, value);
  }
}

var checkInHome = function(design, board, player) {
  var c = 0; var h = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type > 0) return;
      if (!design.inZone(7, player, pos)) c++;
      if (design.inZone(0, player, pos)) h++;
  });
  return (c > 0) && (h < 1);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = checkInHome(design, board, board.player);
  if (f) {
      _.each(board.moves, function(move) {
          if (move.mode < 1) return;
          if (move.mode > 6) return;
          if (move.actions.length == 0) return;
          if (move.actions[0][0] === null) return;
          if (move.actions[0][1] === null) return;
          var pos = move.actions[0][0][0];
          if (design.inZone(7, board.player, pos)) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
