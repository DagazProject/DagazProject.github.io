(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-add") {
      checkVersion(design, name, value);
  }
}

function getPlayer(turn) {
  if (turn == 1) {
      return 3;
  } else if (turn == 7) {
      return 2;
  } else {
      return null;
  }
}

function getAvail(board) {
  for (var pos = 80; pos < 88; pos++) {
       if (board.getPiece(pos) === null) return pos;
  }
  return null;
}

function getRanks(board) {
  var r = [];
  for (var pos = 80; pos < 88; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       r.push((piece.type / 4) | 0);
  }
  return r;
}

function getSrc(board, player, ranks) {
  for (var pos = 20; pos < 80; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != player) continue;
       if (_.indexOf(ranks, (piece.type / 4) | 0) < 0) continue;
       return pos;
  }
  return null;
}

function getCnt(board, player) {
  var r = 0;
  for (var pos = 20; pos < 80; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != player) continue;
       r++;
  }
  for (var pos = 80; pos < 88; pos++) {
       if (board.getPiece(pos) === null) continue;
       if (board.getPiece(+pos + 8) !== null) continue;
       r--;
  }
  return r;
}

function getMoveRank(board, move) {
  for (var i = 0; i < move.actions; i++) {
       var a = move.actions[0];
       if (a[0] === null) continue;
       if (a[1] === null) continue;
       var piece = board.getPiece(a[0][0]);
       if (piece === null) continue;
       return (piece.type / 4) | 0;
  }
  return -1;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var player = getPlayer(board.turn);
  if (player !== null) {
      var cnt = getCnt(board, board.player);
      var dst = getAvail(board);
      if ((dst !== null) && (cnt > 0)) {
          var ranks = getRanks(board);
          _.each(board.moves, function(move) {
              if (move.mode != 1) return;
              if (move.actions[0][2] === null) return;
              ranks.push(getMoveRank(board, move));
              var src = getSrc(board, player, ranks);
              if (src !== null) {
                  var p = board.getPiece(src);
                  if (p !== null) {
                      move.movePiece(src, dst, p.changeOwner(1));
                  }
              }
              ranks.pop();
          });
      }
  }
  CheckInvariants(board);
}

})();
