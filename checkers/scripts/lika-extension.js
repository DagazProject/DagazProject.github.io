(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "lika-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) return;
      var actions = [];
      var captured = null;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] !== null) {
             actions.push(a);
             if (captured !== null) {
                 piece = board.getPiece(captured);
                 if (piece !== null) {
                     actions.push([[captured], [captured], [piece.changeOwner(board.player)], a[3]]);
                 }
             }
             captured = null;
          } else {
             captured = a[0][0];
          }
      });
      move.actions = actions;
  });
  CheckInvariants(board);
}

})();
