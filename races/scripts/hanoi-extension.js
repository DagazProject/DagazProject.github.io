(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hanoi-extension") {
      checkVersion(design, name, value);
  }
}

var getValue = function(board, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) return 0;
  return (+piece.type / 2) | 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(m) {
      if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
          var p = design.navigate(board.player, m.actions[0][0][0], 0);
          if ((p !== null) && (board.getPiece(p) !== null)) {
              m.failed = true;
          }
          p = design.navigate(board.player, m.actions[0][1][0], 1);
          if (p !== null) {
              var a = getValue(board, m.actions[0][0][0]);
              var b = getValue(board, p);
              if (a >= b) {
                  m.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
