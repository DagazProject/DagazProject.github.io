(function() {

var koMode = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "fangqi-extension") {
     if (value == "ko") koMode = true;
  } else {
     checkVersion(design, name, value);
  }
}

var incForm = function(board, player, pos, empty, dx, dy, zPart) {
  var v = 0;
  var z = Dagaz.Model.getZobristHash();
  var x = Dagaz.Model.getX(pos);
  var y = Dagaz.Model.getY(pos);
  if ((x + dx < 0) || (x + dx + 1 >= Dagaz.Model.WIDTH))  return 0;
  if ((y + dy < 0) || (y + dy + 1 >= Dagaz.Model.HEIGHT)) return 0;
  for (var i = 0; i < 2; i++) {
       for (var j = 0; j < 2; j++) {
            var p = (y + dy + i) * Dagaz.Model.WIDTH + x + dx + j;
            if (p != pos) {
                if ((empty !== null) && (p == empty)) return 0;
                var piece = board.getPiece(p);
                if (piece === null) return 0;
                if (piece.player != player) return 0;
            }
            v = z.update(v, player, 0, p);
            if (!_.isUndefined(zPart)) {
                if (_.isUndefined(zPart.positions)) {
                    zPart.positions = [];
                }
                if (_.indexOf(zPart.positions, p) < 0) zPart.positions.push(p);
            }
       }
  }
  if (!_.isUndefined(zPart)) {
      zPart.push(v);
  }
  return 1;
}

Dagaz.Model.calcForms = function(board, player, pos, empty, zPart) {
  var r = 0;
  r += incForm(board, player, pos, empty, -1, -1, zPart);
  r += incForm(board, player, pos, empty, -1,  0, zPart);
  r += incForm(board, player, pos, empty,  0, -1, zPart);
  r += incForm(board, player, pos, empty,  0,  0, zPart);
  return r;
}

Dagaz.Model.addForm = function(board, player, pos) {
  return 0;
}

var changeValue = function(design, board, player, add, move) {
  var c = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      c += incForm(board, player, pos, null, 0, 0);
      c += Dagaz.Model.addForm(board, player, pos);
  });
  if (add > 0) c += add;
  if ((add < 0) && (c == 0)) c = -add;
  move.addValue(player, c);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
          var empty = null;
          var pos = move.actions[0][1][0];
          if (move.isSimpleMove()) {
              empty = move.actions[0][0][0];
              var zPart = [];
              var c = Dagaz.Model.calcForms(board, board.player, pos, empty, zPart);
              if (c > 0) {
                  move.zPartial = zPart;
                  if (koMode && _.isUndefined(move.failed) && !_.isUndefined(board.parent) && (board.parent !== null)) {
                      var b = board.parent;
                      while (!_.isUndefined(b.move) && !_.isUndefined(b.parent) && (b.parent !== null)) {
                          if ((b.player != board.player) && !_.isUndefined(b.move.zPartial)) {
                              if (_.intersection(b.move.zPartial, move.zPartial).length == move.zPartial.length) {
                                  Dagaz.Model.addKo(board, move, zPart);
                                  move.failed = true;
                              }
                              break;
                          }
                          b = b.parent;
                      }
                  }
                  var avail = Dagaz.Model.calcAvail(design, board, design.nextPlayer(board.player));
                  if (avail < c) c = avail;
                  if (c > 0) {
                      move.addValue(board.player, c);
                  }
              }
          }
          if (move.isDropMove()) {
              var cnt = 0;
              _.each(design.allPositions(), function(p) {
                  if (board.getPiece(p) === null) cnt++;
              });
              if (cnt == 1) {
                  var b = board.apply(move);
                  changeValue(design, b, 1, Dagaz.Model.C1, move);
                  changeValue(design, b, 2, Dagaz.Model.C2, move);
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
