(function() {

var isExtended = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dakon-restrictions") {
      if (value == "extended") isExtended = true;
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var forced = null;
  var isAnak = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (+piece.getValue(0) < 0)) {
          forced = piece.player;
          isAnak = !design.inZone(1, board.player, pos);
      }
  });
  if (forced !== null) {
      _.each(board.moves, function(move) {
          if ((isAnak || isExtended) && (forced != board.player)) {
              move.failed = true;
              return;
          } else {
              if (isAnak && (move.actions.length > 0)) {
                  var pos = move.actions[0][0][0];
                  var piece = board.getPiece(pos);
                  if ((piece === null) || (+piece.getValue(0) >= 0)) {
                      move.failed = true;
                      return;
                  }
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
