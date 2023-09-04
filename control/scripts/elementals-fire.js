(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "elementals-fire") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 2) return;
      var pos = move.actions[0][0][0];
      var x = Dagaz.Model.getX(pos);
      var y = Dagaz.Model.getY(pos);
      pos = move.actions[0][1][0];
      var ix = move.actions[0][2][0].type % 4;
      var dx = Math.sign(Dagaz.Model.getX(pos) - x);
      var dy = Math.sign(Dagaz.Model.getY(pos) - y);
      var inc = (dy * Dagaz.Model.WIDTH) + dx;
      var dir = design.findDirection(pos - inc, pos);
      if (dir === null) return;
      var p = design.navigate(1, pos, dir);
      while (p !== null) {
          var piece = board.getPiece(p);
          if (piece === null) break;
          if (piece.player == board.player) break;
          if ((piece.type % 4) == ix) break;
          move.capturePiece(p);
          move.sound = 11;
          p = design.navigate(1, p, dir);
      }
  });
  CheckInvariants(board);
}

})();
