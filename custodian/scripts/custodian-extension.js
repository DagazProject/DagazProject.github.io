(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "custodian-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(m) {
      if ((m.actions.length > 0) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
          var captured = [];
          _.each(m.actions, function(a) {
              if ((a[0] !== null) && (a[1] === null)) {
                  captured.push(a[0][0]);
              }
          });
          var pos = m.actions[0][1][0];
          _.each(design.allDirections(), function(d) {
              var e = design.navigate(board.player, pos, d);
              if ((e !== null) && (_.indexOf(captured, e) < 0)) {
                  var piece = board.getPiece(e);
                  if ((piece !== null) && (piece.player != board.player)) {
                      var f = design.navigate(board.player, e, d);
                      if (f !== null) {
                          piece = board.getPiece(f);
                          if ((piece !== null) && (piece.player == board.player)) {
                              m.capturePiece(e);
                          }
                      }
                  }
              }
          });
      }
  });
  CheckInvariants(board);
}

})();
