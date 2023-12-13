(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "anathem-point") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode > 0) return;
      var actions = []; var piece = null;
      var capture = null;
      _.each(move.actions, function (a) {
          if (a[1] === null) {
              capture = a[0][0];
              return;
          }
          if (piece === null) {
              piece = board.getPiece(a[0][0])
              piece = piece.promote(+piece.type + 2);
          }
          actions.push(a);
          actions.push([ [capture], [capture], [piece], a[3]]);
      });
      move.actions = actions;
  });
  CheckInvariants(board);
}

})();
