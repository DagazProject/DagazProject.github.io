(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dafang-priority") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (move.isDropMove()) f = true;
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (move.isSimpleMove()) move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
