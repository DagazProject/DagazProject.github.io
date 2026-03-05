(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-capture") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.isLine = function(design, board, player, pos, dir, empty, zPart) {
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
      var moves = [];
      for (var pos = 0; pos < Dagaz.Model.START_POS; pos++) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           if (piece.player == board.player) continue;
           var m = Dagaz.Model.createMove(0);
           m.capturePiece(pos);
           m.setValue(0, cnt - 1);
           if (cnt > 1) {
               m.goTo(board.turn);
           }
           moves.push(m);
      }
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
         var zPart = [];
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
             move.setValue(0, cnt);
             move.goTo(board.turn);
         }
      });
  }
  CheckInvariants(board);
}

})();
