(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tablan-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = 0;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (!move.isSimpleMove()) return;
      cnt++;
  });
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      if (design.inZone(0, board.player, pos) && (board.getPiece(pos) !== null)) {
          move.failed = true;
          return;
      }
      if ((cnt <= 1) && (_.indexOf([1, 4, 6], move.mode) >= 0) && (_.indexOf([0, 6, 12], board.turn) >= 0)) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
