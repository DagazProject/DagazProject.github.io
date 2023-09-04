(function() {

Dagaz.View.KO_ALPHA = 0.3;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "uxo-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = null;
  if (!_.isUndefined(board.move)) {
      pos = design.navigate(board.player, board.move.actions[0][1][0], 9);
  }
  if ((pos !== null) && (board.getPiece(pos) === null)) {
      _.each(board.moves, function(move) {
          var p = design.navigate(board.player, move.actions[0][1][0], 8);       
          if ((p !== null) && (p != pos)) {
              move.failed = true;
          }
      });
      board.ko = [pos];
  }
  _.each(board.moves, function(move) {
      var p = design.navigate(board.player, move.actions[0][1][0], 8);       
      if ((p !== null) && (board.getPiece(p) !== null)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
