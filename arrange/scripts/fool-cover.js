(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-cover") {
      checkVersion(design, name, value);
  }
}

function getTrump(board, move) {
  var v = board.getValue(0);
  if (v !== null) {
      return v;
  }
  var piece = board.getPiece(96);
  if (piece === null) {
      return -1;
  }
  v = piece.type % 4;
  move.setValue(0, v);
  return v;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (src = 20; src < 80; src++) {
       var piece = board.getPiece(src);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       for (dst = 80; dst < 88; dst++) {
            var target = board.getPiece(dst);
            if (target === null) continue;
            if (board.getPiece(dst + 8) !== null) continue;
            var m = Dagaz.Model.createMove(1);
            var f = false;
            if ((piece.type % 4) == (target.type % 4)) {
                f = piece.type > target.type;
            } else {
                f = (piece.type % 4) == getTrump(board, m);
            }
            if (!f) continue;
            m.movePiece(src, dst + 8, piece.changeOwner(1));
            board.moves.push(m);
       }
  }
  CheckInvariants(board);
}

})();
