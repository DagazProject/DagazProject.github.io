(function() {

var extended = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dtc-extension") {
      if (value == "extended") extended = true;
  } else {
      checkVersion(design, name, value);
  }
}

var clone = function(move) {
  var m = Dagaz.Model.createMove(move.mode, move.sound);
  var s = move.actions[0][0][0];
  var d = move.actions[0][1][0];
  var p = move.actions[0][2][0];
  m.movePiece(s, d, p);
  return m;
}

var addReserve = function(design, board, player, type, move, cnt) {
  if (!cnt) cnt = 1;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type != +type + 6) return;
      var v = piece.getValue(0);
      if (v === null) { 
          v = 0;
      }
      move.movePiece(pos, pos, piece.setValue(0, v + cnt));
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      pos = move.actions[0][1][0];
      var target = board.getPiece(pos);
      if (target === null) return;
      var v = target.getValue(0);
      if (v !== null) {
          if (piece.getValue(0) !== null) {
              move.failed = true;
              return;
          }
          var player = ((v / 10) | 0) + 1;
          var type = v % 10;
          if ((target.player != board.player) && (player == board.player)) {
              addReserve(design, board, board.player, target.type, move);
              move.actions[0][2] = [piece.setValue(0, +type + (player - 1) * 10)];
              return;
          }
          if ((target.player != board.player) || (player != board.player)) {
              addReserve(design, board, player, type, move);
              v = null;
          }
      }
      if (target.type == 5) {
          if (target.player == board.player) {
              move.failed = true;
              return;
          }
          addReserve(design, board, board.player, 5, move);
          if (v !== null) {
              move.actions[0][2] = [piece.setValue(0, v)];
          }
          return;
      }
      if (v === null) {
          v = piece.getValue(0);
          if (v === null) {
              if (piece.getValue(0) !== null) {
                  addReserve(design, board, target.player, target.type, move);
              } else {
                  move.actions[0][2] = [piece.setValue(0, +target.type + (target.player - 1) * 10)];
              }
              return;
          } else if (target.player != board.player) {
              addReserve(design, board, target.player, target.type, move);
              return;
          }
      }
      if (v !== null) {
          var player = ((v / 10) | 0) + 1;
          if (player != board.player) return;
          var type = +target.type + (v % 10) + 2;
          if (extended && (piece.type < 5)) {
              for (var t = +target.type + 1; t < Math.min(type, 6); t++) {
                   var m = clone(move);
                   addReserve(design, board, board.player, type - t - 1, m);
                   m.actions[0][2] = [piece.setValue(0, (board.player - 1) * 10 + t - 1)];
                   moves.push(m);
              }
          }
          if (type > 6) {
              var t = type - 7;
              if ((type == 10) && (piece.type == 5)) {
                  addReserve(design, board, board.player, 4, move);
                  move.actions[0][2] = [piece.promote(5).setValue(0, (board.player - 1) * 10 + 4)];
                  return;
              }
              if (t == piece.type) {
                  addReserve(design, board, board.player, piece.type, move, 2);
              } else {
                  addReserve(design, board, board.player, t, move);
                  addReserve(design, board, board.player, piece.type, move);
              }
              move.actions[0][2] = [piece.promote(5)];
          } else {
              if (type == 6) {
                  addReserve(design, board, board.player, piece.type, move);
                  move.actions[0][2] = [piece.promote(5)];
              } else {
                  move.actions[0][2] = [piece.setValue(0, (board.player - 1) * 10 + type - 1)];
              }
          }
      }
  });
  _.each(moves, function(move) {
      board.moves.push(move);
  });
  CheckInvariants(board);
}

})();
