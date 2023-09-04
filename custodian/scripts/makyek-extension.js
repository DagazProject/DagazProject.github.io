(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "makyek-extension") {
      checkVersion(design, name, value);
  }
}

var checkDirections = function(move, design, board, pos, d, o) {
  var a = design.navigate(board.player, pos, d);
  if (a !== null) {
      var p = board.getPiece(a);
      if ((p !== null) && (p.player != board.player)) {
          var b = design.navigate(board.player, pos, o);
          if (b !== null) {
              p = board.getPiece(b);
              if ((p !== null) && (p.player != board.player)) {
                  move.capturePiece(a);
                  move.capturePiece(b);
              }
          }
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  _.each(board.moves, function(m) {
      if ((m.actions.length > 0) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
          var captured = [];
          _.each(m.actions, function(a) {
              if ((a[0] !== null) && (a[1] === null)) {
                  captured.push(a[0][0]);
              }
          });
          var pos = m.actions[0][1][0];
          checkDirections(m, design, board, pos, n, s);
          checkDirections(m, design, board, pos, w, e);
      }
  });
  CheckInvariants(board);
}

})();
