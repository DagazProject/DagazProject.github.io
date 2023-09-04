(function() {

Dagaz.View.HINT_STEPS = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ur-promotion") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode < 1) return;
      if (move.mode > 4) return;
      if (!_.isUndefined(move.failed)) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var dir = 2;
      if (piece.type > 2) {
          dir = 4;
      }
      while (pos !== null) {
          if (design.inZone(1, board.player, pos) && (piece.type == 2)) {
              piece = piece.promote(3);
          }
          pos = design.navigate(board.player, pos, dir);
          if (pos == move.actions[0][1][0]) break;
          if (pos !== null) {
              var h = design.navigate(board.player, pos, 9);
              if (h !== null) {
                 if (_.isUndefined(move.hints)) {
                     move.hints = [];
                 }
                 move.hints.push(h);
              }
          }
      }
      move.actions[0][2] = [piece];
  });
  CheckInvariants(board);
}

})();
