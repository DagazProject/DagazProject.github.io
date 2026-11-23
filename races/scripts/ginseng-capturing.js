(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ginseng-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = 0;
  _.each([280, 8, 136, 152], function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 0) return;
      cnt++;
  });
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) {
          piece = board.getPiece(move.actions[0][0][0]);
          if (piece === null) return;
          if (pos == 280) {
              if ((piece.type > 0) || (piece.player != 1)) {
                  move.failed = true;
                  return;
              }
          }
          if (pos == 8) {
              if ((piece.type > 0) || (piece.player != 2)) {
                  move.failed = true;
                  return;
              }
          }
          return;
      }
      if ((cnt > 0) || (_.indexOf([280, 8, 136, 152], +pos) >= 0)) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
