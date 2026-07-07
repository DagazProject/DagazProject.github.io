(function() {

const LAYOUTS = [
   [[24, 26, 28, 30, 32, 34, 36], [22, 24, 26, 28, 30, 32, 34, 36, 38], [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]],
   [[40, 46, 52, 58, 64, 70, 76], [40, 44, 48, 52, 56, 60, 64, 68, 72, 76], [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78]],
   [[41, 47, 53, 59, 65, 71, 77], [41, 45, 49, 53, 57, 61, 65, 69, 73, 77], [41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79]]
];

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

function isCovered(board) {
  for (var pos = 80; pos < 88; pos++) {
       if (board.getPiece(+pos + 8) === null) return false;
  }
  return true;
}

function getCount(board) {
  var cnt = 0;
  for (var pos = 0; pos < 80; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       cnt++;
  }
  return cnt;
}

function getLayout(board) {
  var cnt = getCount(board);
  for (var pos = 80; pos < 96; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       cnt++;
  }
  var l = LAYOUTS[board.player - 1];
  for (var i = 0; i < l.length; i++) {
       if (l[i].length >= cnt) return l[i];
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var src = 20; src < 80; src++) {
       var piece = board.getPiece(src);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       for (var dst = 80; dst < 88; dst++) {
            var target = board.getPiece(dst);
            if (target === null) continue;
            if (board.getPiece(dst + 8) !== null) continue;
            var m = Dagaz.Model.createMove(1, 11);
            var f = false;
            if ((piece.type % 4) == (target.type % 4)) {
                f = piece.type > target.type;
            } else {
                f = (piece.type % 4) == getTrump(board, m);
            }
            if (!f) continue;
            m.movePiece(src, dst + 8, piece.changeOwner(1));
            m.goTo(board.turn);
            board.moves.push(m);
       }
  }
  for (var src = 80; src < 96; src++) {
       var piece = board.getPiece(src);
       if (piece === null) continue;
       var layout = getLayout(board);
       if (layout === null) continue;
       var m = Dagaz.Model.createMove(1, 10);
       var cnt = getCount(board);
       m.movePiece(src, layout[cnt], piece.changeOwner(board.player));
       var ix = 0;
       for (var pos = 0; pos < 80; pos++) {
            piece = board.getPiece(pos);
            if (piece === null) continue;
            if (piece.player != board.player) continue;
            if (pos == layout[ix]) {
                ix++;
                continue;
            }
            m.movePiece(pos, layout[ix++], piece.changeOwner(board.player));
       }
       ix = cnt + 1;
       for (var pos = 80; pos < 96; pos++) {
            if (pos == src) continue;
            piece = board.getPiece(pos);
            if (piece === null) continue;
            m.movePiece(pos, layout[ix++], piece.changeOwner(board.player));
       }
       board.moves.push(m);
  }
  CheckInvariants(board);
}

})();
