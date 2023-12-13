(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "anathem-resurrect") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (_.indexOf([6, 3], +move.mode) < 0) return;
      var captured = [];
      _.each(move.actions, function (a) {
          if (a[1] !== null) return;
          var piece = board.getPiece(a[0][0]);
          if (piece === null) return;
          var t = +piece.type;
          if (_.indexOf([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], +piece.type) >= 0) t--;
          captured.push(t + 2);
      });
      if (captured.length > 0) {
          var piece = Dagaz.Model.createPiece(36, 2);
          _.each(design.allPositions(), function(pos) {
              var point = board.getPiece(pos);
              if (point === null) return;
              if (_.indexOf(captured, +point.type) < 0) return;
              move.dropPiece(pos, piece);
          });
      }
  });
  CheckInvariants(board);
}

})();
