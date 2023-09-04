(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rithmomachia-restrictions") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.isC = function(t) {
  return t < 15;
}

Dagaz.Model.isT = function(t) {
  if (t >= 32) return false;
  return t >= 15;
}

Dagaz.Model.isS = function(t) {
  if (t >= 48) return false;
  return t >= 32;
}

Dagaz.Model.isP = function(t) {
  return t >= 48;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (!Dagaz.Model.isP(piece.type)) return;
      for (var ix = 0; ix < 6; ix++) {
           var t = piece.getValue(ix);
           if (t !== null) {
               if (Dagaz.Model.isC(t) && (move.mode == 0)) return;
               if (Dagaz.Model.isT(t) && (move.mode == 1)) return;
               if (Dagaz.Model.isS(t) && (move.mode == 2)) return;
           }
      }
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
