(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hawalis-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var forced = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (+piece.getValue(0) < 0)) {
          forced = piece.player;
      }
  });
  if ((forced !== null) && (forced != board.player)) {
      board.moves = [];
  } else {
      var moves = [];
      _.each(board.moves, function(move) {
          if (!_.isUndefined(move.failed)) return;
          if ((forced !== null) && (forced == board.player)) {
              var pos = move.actions[0][0][0];
              var piece = board.getPiece(pos);
              if (piece === null) return;
              var v = piece.getValue(0);
              if (v === null) return;
              if (v > 0) return;
          }
          if (move.mode == 0) {
              moves.push(move);
          }
      });
      if (moves.length > 0) {
          board.moves = moves;
      }
  }
  CheckInvariants(board);
}

})();
