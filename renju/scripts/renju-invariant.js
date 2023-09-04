(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "renju-invariant") {
      checkVersion(design, name, value);
  }
}

var isFork = function(a) {
  if (a.length < 2) return false;
  if (a.length > 2) return true;
  if ((a[0] == 4) && (a[1] == 4)) return true;
  if ((a[0] == 3) && (a[1] == 3)) return true;
  return false;
}

var addKo = function(board, move) {
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
       pos = move.actions[0][1][0];
       if (_.isUndefined(board.ko)) {
           board.ko = [];
       }
       if (_.indexOf(board.ko, pos) < 0) {
           board.ko.push(pos);
       }
  }
}

var createPiece = function(player, ix, v) {
  return Dagaz.Model.createPiece(0, player).setValue(ix, v);
}

var findEmpty = function(design, board, pos, dir, ix) {
  var p = design.navigate(board.player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) {
          var q = design.navigate(board.player, p, dir);
          if (q === null) return { p: p, v: 0 };
          piece = board.getPiece(q);
          if ((piece === null) || (piece.player != board.player)) return { p: p, v: 0 };
          var v = piece.getValue(ix);
          if (v === null) return { p: p, v: 0 };
          return { p: p, v: +v };
      }
      if (piece.player != board.player) return null;
      p = design.navigate(board.player, p, dir);
  }
  return null;
}

var isFour = function(design, board, pos, ix, dirs) {
  var c = 0;
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  var v = +piece.getValue(ix);
  if (v === null) return false;
  var r = findEmpty(design, board, pos, dirs[ix], ix);
  if ((r !== null) && (v + r.v + 1 == 5)) {
      c++;
  }
  r = findEmpty(design, board, pos, dirs[ix + 4], ix);
  if ((r !== null) && (v + r.v + 1 == 5)) c++;
  return c;
}

var isThree = function(design, board, pos, ix, dirs, positions) {
  var c = 0;
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  var v = +piece.getValue(ix);
  if (v === null) return false;
  var r = findEmpty(design, board, pos, dirs[ix], ix);
  if ((r !== null) && (v + r.v + 1 == 4)) {
      board.setPiece(r.p, createPiece(board.player, ix, 4));
      if (isFour(design, board, r.p, ix, dirs) == 2) {
          if (!_.isUndefined(positions)) {
              positions.push(r.p);
          }
          c++;
      }
      board.setPiece(r.p, null);
  }
  if (c > 0) return true;
  r = findEmpty(design, board, pos, dirs[ix + 4], ix);
  if ((r !== null) && (v + r.v + 1 == 4)) {
      board.setPiece(r.p, createPiece(board.player, ix, 4));
      if (isFour(design, board, r.p, ix, dirs) == 2) { 
          if (!_.isUndefined(positions)) {
              positions.push(r.p);
          }
          c++;
      }
      board.setPiece(r.p, null);
  }
  return c > 0;
}

var isPseudoFoul = function(design, board, pos, piece) {
  var result = []; var dirs = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  board.setPiece(pos, piece);
  for (var ix = 0; ix < 4; ix++) {
       var v = +piece.getValue(ix);
       if (v > 5) {
           board.setPiece(pos, null);
           return true;
       }
       var r = isFour(design, board, pos, ix, dirs);
       if (r == 2) {
           board.setPiece(pos, null);
           return true;
       }
  }
  board.setPiece(pos, null);
  return false;
}

var isFoul = function(design, board, pos, piece) {
  var f = false;
  var result = []; var positions = []; var dirs = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  board.setPiece(pos, piece);
  for (var ix = 0; ix < 4; ix++) {
       var v = +piece.getValue(ix);
       if (v > 5) {
           board.setPiece(pos, null);
           return true;
       }
       var r = isFour(design, board, pos, ix, dirs);
       if ((r == 2) && (v < 4)) {
           f = true;
       }
       if (!f && (r > 0)) {
           result.push(4);
       } else if (isThree(design, board, pos, ix, dirs, positions)) result.push(3);
  }
  board.setPiece(pos, null);
  if (f || isFork(result)) {
      for (var i = 0; i < positions.length; i++) {
           var piece = Dagaz.Model.createPiece(0, board.player);
           for (var ix = 0; ix < 4; ix++) {
                var vl = 1;
                vl += Dagaz.Model.getLine(design, board, board.player, positions[i], dirs[ix], ix);
                vl += Dagaz.Model.getLine(design, board, 0, positions[i], dirs[ix], ix);
                piece = piece.setValue(ix, vl);
           }
           if (isPseudoFoul(design, board, positions[i], piece)) {
               return false;
           }
      }
      return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (board.player == 1) {
      _.each(board.moves, function(move) {          
          if (move.isPass()) return;
          var pos    = move.actions[0][1][0];
          var piece  = move.actions[0][2][0];
          if (isFoul(design, board, pos, piece)) {
              addKo(board, move);
              move.failed = true;
              return;
          }
      });
  }
  CheckInvariants(board);
}

})();
