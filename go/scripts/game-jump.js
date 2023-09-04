(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "game-jump") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 2) return;
      var actions = [];
      var piece = null; var pos = null;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) {
              pos = a[0][0];
              piece = board.getPiece(pos);
          } else {
              actions.push([ [a[0][0]], [a[1][0]], [board.getPiece(a[0][0])], a[3] ]);
              if (piece !== null) {
                  if (piece.type == 0) {
                      piece = piece.promote(1);
                  } else {
                      piece = piece.promote(2);
                  }
                  actions.push([ [pos], [pos], [piece], a[3] ]);
                  piece = null;
              }
          }
      });
      move.actions = actions;
  });
  CheckInvariants(board);
}

})();
