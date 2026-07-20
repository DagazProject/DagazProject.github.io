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

function calcUncovered(board) {
  var r = 0;
  for (var pos = 80; pos < 88; pos++) {
       if (board.getPiece(pos) === null) continue;
       if (board.getPiece(+pos + 8) === null) r++;
  }
  return r;
}

Dagaz.Model.getAvail = function(board) {
  for (var pos = 80; pos < 88; pos++) {
       if (board.getPiece(pos) === null) return pos;
  }
  return null;
}

Dagaz.Model.getRanks = function(board) {
  var r = [];
  for (var pos = 80; pos < 96; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       r.push((piece.type / 4) | 0);
  }
  return r;
}

Dagaz.Model.getSrc = function(board, player, ranks) {
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
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (a[0] === null) continue;
       if (a[1] === null) continue;
       if (a[2] !== null) {
           piece = a[2][0];
           return (piece.type / 4) | 0;
       }
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
      var dst = Dagaz.Model.getAvail(board);
      if ((dst !== null) && (cnt > 0)) {
          var ranks = Dagaz.Model.getRanks(board);
          _.each(board.moves, function(move) {
              if (move.mode != 1) return;
              if (move.actions[0][2] === null) return;
              ranks.push(getMoveRank(board, move));
              var src = Dagaz.Model.getSrc(board, player, ranks);
              if (src !== null) {
                  var p = board.getPiece(src);
                  if (p !== null) {
                      move.movePiece(src, dst, p.changeOwner(1));
                      move.goTo(board.turn);
                      move.checked = true;
                  }
              }
              ranks.pop();
          });
      }
  }
  var c = calcUncovered(board);
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      if (!_.isUndefined(move.checked)) return;
      if (c == 1) {
          if (board.turn == 1) {
              move.goTo(9);
          } else if (board.turn == 4) {
              move.goTo(10);
          } else {
              move.goTo(board.turn);
          }
      } else {
          move.goTo(board.turn);
      }
  });
  CheckInvariants(board);
}

})();
