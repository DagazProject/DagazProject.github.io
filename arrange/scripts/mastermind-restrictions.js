(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mastermind-restrictions") {
     checkVersion(design, name, value);
  }
}

var isBadPosition = function(design, board, pos) {
  var p = design.navigate(1, pos, 0);
  if (p === null) return false;
  var q = design.navigate(1, p, 1);
  if (q !== null) {
      p = q;
  }
  while (p !== null) {
      if (board.getPiece(p) === null) return true;
      p = design.navigate(1, p, 2);
  }
  return board.getPiece(p) !== null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      if (isBadPosition(design, board, pos)) {
          move.failed = true;
          return;
      }
      ko.push(pos);
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
