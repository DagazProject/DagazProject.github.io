(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gravity-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length < 1) return;
      if (move.actions[0][0] === null) return;
      if (move.actions[0][1] === null) return;
      var pos = move.actions[0][0][0];
      var p = design.navigate(board.player, pos, 3);
      if (p == move.actions[0][1][0]) {
          pos = p;
          p = design.navigate(board.player, p, 3);
      }
      while (p !== null) {
          var piece = board.getPiece(p);
          if (p == move.actions[0][1][0]) {
              piece = board.getPiece(pos);
          }
          if (piece === null) break;
          move.movePiece(p, pos, piece, 2);
          move.sound = 11;
          pos = p;
          p = design.navigate(board.player, pos, 3);
      }
  });
  CheckInvariants(board);
}

})();
