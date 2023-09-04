(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pilare-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = null;
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if (piece === null) return;
      var v = piece.getValue(1);
      if (v === null) return;
      pos = p;
  });
  if (pos !== null) {
      Dagaz.View.getView().current = [pos];
      _.each(board.moves, function(m) {
          if (m.actions.length > 0) {
               if (m.actions[0][0][0] != pos) {
                   m.failed = true;
                   return;
               }
               if (m.actions[0][1][0] == board.lastf) {
                   m.failed = true;
                   return;
               }
          }
      });
  }
  CheckInvariants(board);
}

})();
