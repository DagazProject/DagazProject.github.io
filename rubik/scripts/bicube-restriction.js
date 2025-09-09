(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bicube-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var positions = [];
      var ids = [];
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          var pos = a[0][0];
          positions.push(+pos);
          var piece = board.getPiece(pos);
          if (piece === null) return;
          var v = piece.getValue(0);
          if (v === null) return;
          ids.push(+v);
      });
      _.each(design.allPositions(), function(pos) {
          if (_.indexOf(positions, +pos) >= 0) return;
          var piece = board.getPiece(pos);
          if (piece === null) return;
          var v = piece.getValue(0);
          if (v === null) return;
          if (_.indexOf(ids, +v) < 0) return;
          move.failed = true;
      });
  });
  CheckInvariants(board);
}

})();
