(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qxo-priority") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var mode = null;
  _.each(board.moves, function(move) {
      if (move.mode < Dagaz.Model.PIECE_CNT) {
          if ((mode === null) || (move.mode < mode)) {
              mode = move.mode;
          }
      }
  });
  if (mode !== null) {
      _.each(board.moves, function(move) {
          if ((move.mode > mode) && (move.mode != Dagaz.Model.PIECE_CNT)) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
