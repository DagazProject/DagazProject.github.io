(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "retrograde-chess-extension") {
     checkVersion(design, name, value);
  }
}

var addDrops = function(board, pos, types, mode) {
  var moves = [];
  _.each(types, function(t) {
      var p = Dagaz.Model.createPiece(t, board.player);
      var m = Dagaz.Model.createMove(3);
      m.dropPiece(pos, p);
      m.goTo(board.turn);
      if (mode == 1) {
          moves.push(m);
      } else {
          board.moves.push(m);
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
}

var getTypes = function(design, board) {
  var cnt = [8, 2, 2, 2, 1, 1];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      cnt[piece.type]--;
  });
  var r = [];
  for (var t = 0; t < 5; t++) {
      if (cnt[t] > 0) r.push(t);
  }
  return r;
}

var checkDir = function(design, board, player, pos, dir, target) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  return p == target;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.parent !== null) && !_.isUndefined(board.move) && board.move.isSimpleMove()) {
      var pos = board.move.actions[0][0][0];
      var types = getTypes(design, board);
      if (design.inZone(0, board.parent.player, pos) || design.inZone(2, board.parent.player, pos)) {
          types = _.without(types, 0);
      }
      var piece = board.move.actions[0][2][0];
      if ((piece.type != 0) || (board.move.mode == 1)) {
          var target = null; var mode = board.move.mode;
          if (design.inZone(0, board.parent.player, pos) && (_.indexOf([3, 4], +piece.type) >= 0)) {
              if (checkDir(design, board, board.parent.player, pos, 0, target) ||
                  checkDir(design, board, board.parent.player, pos, 2, target)) {
                  mode = 1;
              } else {
                  target = null;
              }
          }
          addDrops(board, pos, types, mode, target);
      }
  }
  _.each(board.moves, function(move) {
      if ((board.parent !== null) && !_.isUndefined(board.move) && (board.move.mode == 4)) {
          if (move.mode != 2) {
              move.failed = true;
              return;
          }
      }
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = move.actions[0][2][0];
          if (!design.inZone(0, board.player, pos)) return;
          if (_.indexOf([3, 4], +piece.type) < 0) return;
          var target = move.actions[0][1][0];
          if (!checkDir(design, board, board.player, pos, 0, target) &&
              !checkDir(design, board, board.player, pos, 2, target)) return;
          move.actions[0][2].push(piece.promote(0));
          move.mode = 3;
      }
  });
  CheckInvariants(board);
}

})();
