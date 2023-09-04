(function() {

var inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "escalation-invariant") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!inProgress) {
      _.each(board.moves, function(move) {
          if (!_.isUndefined(move.failed)) return;
          var b = board.apply(move);
          inProgress = true;
          b.generate(design);
          inProgress = false;
          _.each(b.moves, function(m) {
              if (!m.isSimpleMove()) return;
              var pos = m.actions[0][1][0];
              var piece = b.getPiece(pos);
              if (piece === null) return;
              if (piece.type == 0) {
                  move.failed = true;
              }
          });
      });
  }
  CheckInvariants(board);
}

})();
