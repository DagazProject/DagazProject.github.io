(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "altai-shatra-ko") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.parent !== null) && !_.isUndefined(board.parent.move) && board.parent.move.isSimpleMove()) {
      var src = board.parent.move.actions[0][0][0];
      var dst = board.parent.move.actions[0][1][0];
      _.each(board.moves, function(move) {
          if (!move.isSimpleMove()) return;
          var pos = move.actions[0][0][0];
          if (pos != dst) return;
          var piece = board.getPiece(pos);
          if ((piece === null) || (piece.type != 0)) return;
          pos = move.actions[0][1][0];
          if (pos == src) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
