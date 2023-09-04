(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "oblong-pass") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = design.positions.length - 1;
  var cnt = 0;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (move.mode == 0) {
          var dice = design.price[move.actions[0][2][0].type];
          if (dice > 1) {
              var piece = Dagaz.Model.createPiece(12, board.player);
              move.dropPiece(pos, piece);
          }
      }
      if ((move.mode > 0) && (move.mode < 7)) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              move.capturePiece(pos);
          }
          cnt++;
      }
  });
  if (cnt == 0) {
      _.each(board.moves, function(move) {
          if (move.mode == 7) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
