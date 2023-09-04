(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "magyar-ko") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!_.isUndefined(board.move) && board.move.isSimpleMove()) {
      var pos = board.move.actions[0][1][0];
      _.each(board.moves, function(move) {
          if (_.isUndefined(move.failed) && move.isSimpleMove()) {
              if (pos == move.actions[0][0][0]) move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
