(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-capture") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.getMarked = function(board) {
  var cnt = board.getValue(0);
  var r = [];
  if ((cnt !== null) && (cnt > 0)) {
      board.generate(Dagaz.Model.design);
      _.each(board.moves, function(move) {
          _.each(move.actions, function(a) {
              if (a[0] === null) return;
              if (a[1] !== null) return;
              r.push(+a[0][0]);
          });
      });
  }
  return r;
}

Dagaz.Model.isLine = function(design, board, player, pos, dir, empty, zPart) {
  if (_.isUndefined(dir)) return false;
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  if ((empty !== null) && (p == empty)) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player != player) return false;
  var q = design.navigate(player, p, dir);
  if (q === null) return false;
  if ((empty !== null) && (q == empty)) return false;
  piece = board.getPiece(q);
  if (piece === null) return false;
  if (piece.player != player) return false;
  if (!_.isUndefined(zPart)) {
      var z = Dagaz.Model.getZobristHash();
      var v = 0;
      v = z.update(v, board.player, 0, pos);
      v = z.update(v, board.player, 0, p);
      v = z.update(v, board.player, 0, q);
      if (_.isUndefined(zPart.positions)) {
          zPart.positions = [];
      }
      if (_.indexOf(zPart.positions, pos) < 0) zPart.positions.push(pos);
      if (_.indexOf(zPart.positions, p)   < 0) zPart.positions.push(p);
      if (_.indexOf(zPart.positions, q)   < 0) zPart.positions.push(q);
      zPart.push(v);
  }
  return true;
}

Dagaz.Model.isMiddle = function(design, board, player, pos, dir, empty, zPart) {
  if (_.isUndefined(dir)) return false;
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  if ((empty !== null) && (p == empty)) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player != player) return false;
  var q = design.navigate(0, pos, dir);
  if (q === null) return false;
  if ((empty !== null) && (q == empty)) return false;
  piece = board.getPiece(q);
  if (piece === null) return false;
  if (piece.player != player) return false;
  if (!_.isUndefined(zPart)) {
      var z = Dagaz.Model.getZobristHash();
      var v = 0;
      v = z.update(v, board.player, 0, pos);
      v = z.update(v, board.player, 0, p);
      v = z.update(v, board.player, 0, q);
      if (_.isUndefined(zPart.positions)) {
          zPart.positions = [];
      }
      if (_.indexOf(zPart.positions, pos) < 0) zPart.positions.push(pos);
      if (_.indexOf(zPart.positions, p)   < 0) zPart.positions.push(p);
      if (_.indexOf(zPart.positions, q)   < 0) zPart.positions.push(q);
      zPart.push(v);
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dirs   = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  var cnt = board.getValue(0);
  if (cnt === null) cnt = 0;
  if (cnt > 0) {
      var restricted = [];
      var captured = [];
      for (var pos = 0; pos < Dagaz.Model.START_POS; pos++) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           if (piece.player == board.player) continue;
           var inLine = false;
           for (var i = 0; i < 8; i++) {
                if (Dagaz.Model.isLine(design, board, design.nextPlayer(board.player), pos, dirs[i], null)) {
                    inLine = true;
                }
           }
           for (var i = 0; i < 4; i++) {
                if (Dagaz.Model.isMiddle(design, board, design.nextPlayer(board.player), pos, dirs[i], null)) {
                    inLine = true;
                }
           }
           if (inLine) {
               restricted.push(pos);
           } else {
               captured.push(pos);
           }
      }
      if (captured.length == 0) {
          captured = restricted;
      }
      var moves = [];
      _.each(captured, function(pos) {
           var m = Dagaz.Model.createMove(0);
           m.capturePiece(pos);
           m.movePiece(pos, pos, piece);
           m.setValue(0, cnt - 1);
           if (cnt > 1) {
               m.goTo(board.turn);
           }
           moves.push(m);
      });
      board.moves = moves;
  } else {
      _.each(board.moves, function(move) {
         if (move.actions.length == 0) return;
         if (move.actions[0][1] === null) return;
         var pos = move.actions[0][1][0];
         var empty = null;
         if (move.actions[0][0] !== null) {
             empty = move.actions[0][0][0];
         }
         var zPart = []; cnt = 0;
         for (var i = 0; i < dirs.length; i++) {
              if (Dagaz.Model.isLine(design, board, board.player, pos, dirs[i], empty, zPart)) {
                  cnt++;
              }
         }
         for (var i = 0; i < 4; i++) {
              if (Dagaz.Model.isMiddle(design, board, board.player, pos, dirs[i], empty, zPart)) {
                  cnt++;
              }
         }
         if (cnt > 0) {
             move.zPartial = zPart;
             var b = board.parent;
             while ((b !== null) && !_.isUndefined(b.move) && !_.isUndefined(b.parent) && (b.parent !== null)) {
                  if ((b.player != board.player) && (b.move.mode > 0)) {
                      if (_.intersection(b.move.zPartial, move.zPartial).length == move.zPartial.length) {
                          move.failed = true;
                      }
                      break;
                  }
                  b = b.parent;
             }
             move.setValue(0, cnt);
             move.goTo(board.turn);
         }
      });
  }
  CheckInvariants(board);
}

})();
