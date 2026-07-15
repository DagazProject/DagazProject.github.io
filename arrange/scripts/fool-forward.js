(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-forward") {
      checkVersion(design, name, value);
  }
}

function unCovered(board, cnt) {
  var r = null;
  for (var pos = 80; pos < 88; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           if (board.getPiece(+pos + 8) !== null) return null;
           r = (+piece.type / 4) | 0;
           if (cnt <= 0) return null;
           cnt--;
       }
  }
  return r;
}

function getAvail(board) {
  for (var pos = 80; pos < 88; pos++) {
       if (board.getPiece(pos) === null) return pos;
  }
  return null;
}

function nextTurn(board) {
  var r = +board.turn + 3;
  if (r > 8) r = 1;
  return r;
}

function nextPlayer(player) {
  var r = +player + 1;
  if (r > 3) r = 1;
  return r;
}

function getCnt(board, player) {
  var r = 0;
  for (var pos = 20; pos < 80; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != player) continue;
       r++;
  }
  return r;
}

function getTurn(player) {
  if (player == 1) {
      return 7;
  } else if (player == 2) {
      return 1;
  } else {
      return 4;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var player = nextPlayer(board.player);
  var cnt  = getCnt(board, player);
  var turn = null;
  if (cnt == 0) {
      player = nextPlayer(player);
      cnt  = getCnt(board, player);
      turn = getTurn(player);
  }
  var v = unCovered(board, cnt - 1);
  if (v !== null) {
      for (var src = 20; src < 80; src++) {
           var piece = board.getPiece(src);
           if (piece === null) continue;
           if (piece.player != board.player) continue;
           if (((piece.type / 4) | 0) != v) continue;
           var dst = getAvail(board);
           if (dst === null) continue;
           var m = Dagaz.Model.createMove(5, 11);
           m.movePiece(src, dst, piece.changeOwner(1));
           if (turn !== null) {
               m.goTo(turn);
           } else {
               m.goTo(nextTurn(board));
           }
           board.moves.push(m);
      }
  }
  CheckInvariants(board);
}

})();
