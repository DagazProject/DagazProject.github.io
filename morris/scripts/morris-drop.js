(function() {

Dagaz.Model.START_POS = 29;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-drop") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.isCapture = function(move) {
  if (move.actions.length != 2) return false;
  if (move.actions[0][0] === null) return false;
  if (move.actions[0][1] !== null) return false;
  if (move.actions[1][0] === null) return false;
  if (move.actions[1][1] === null) return false;
  return (move.actions[0][0][0] == move.actions[1][0][0]) &&
         (move.actions[1][0][0] == move.actions[1][1][0]);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (f) return;
      if (!Dagaz.Model.isCapture(move)) return;
      f = true;
  });
  var moves = [];
  for (var src = Dagaz.Model.START_POS; src < design.positions.length; src++) {
       var piece = board.getPiece(src);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       for (var dst = 0; dst < Dagaz.Model.START_POS; dst++) {
            if (board.getPiece(dst) !== null) continue;
            var m = Dagaz.Model.createMove(0);
            m.movePiece(src, dst, piece);
            moves.push(m);
       }
  }
  if (f || (moves.length > 0)) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
