(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "elementals-stone") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 4) return;
      var f = false;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          var piece = board.getPiece(a[0][0]);
          if (piece === null) return;
          if (f) move.sound = 12;
          f = true;
          var v = piece.getValue(0);
          if (!v) return;
          piece = piece.setValue(0, 0);
          a[2] = [piece];
      });
  });
  CheckInvariants(board);
}

})();
