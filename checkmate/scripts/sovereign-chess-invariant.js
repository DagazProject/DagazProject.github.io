(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sovereign-chess-invariant") {
     checkVersion(design, name, value);
  }
}

var checkDirection = function(design, board, colors, pos, dir, leapers, riders) {
  var c = 8;
  var p = design.navigate(1, pos, dir); c--;
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (_.indexOf(colors.enemy, piece.player) < 0) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(1, p, dir); c--;
      if (p === null) return false;
      if (c < 0) return false;
      piece = board.getPiece(p);
  }
  if (_.indexOf(colors.enemy, piece.player) < 0) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, colors, pos, o, d, knight) {
  var p = design.navigate(1, pos, o);
  if (p === null) return false;
  p = design.navigate(1, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (_.indexOf(colors.enemy, piece.player) >= 0) && (piece.type == knight);
}

Dagaz.Model.checkPositions = function(design, board, colors, positions) {
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight");
  var bishop = design.getPieceType("Bishop");
  var queen  = design.getPieceType("Queen");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, colors, pos, n,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, colors, pos, s,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, colors, pos, w,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, colors, pos, e,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, colors, pos, nw, [king, pawn], [bishop, queen])) return true;
       if (checkDirection(design, board, colors, pos, ne, [king, pawn], [bishop, queen])) return true;
       if (checkDirection(design, board, colors, pos, sw, [king], [bishop, queen])) return true;
       if (checkDirection(design, board, colors, pos, se, [king], [bishop, queen])) return true;
       if (checkLeap(design, board, colors, pos, n, nw, knight)) return true;
       if (checkLeap(design, board, colors, pos, n, ne, knight)) return true;
       if (checkLeap(design, board, colors, pos, s, sw, knight)) return true;
       if (checkLeap(design, board, colors, pos, s, se, knight)) return true;
       if (checkLeap(design, board, colors, pos, w, nw, knight)) return true;
       if (checkLeap(design, board, colors, pos, w, sw, knight)) return true;
       if (checkLeap(design, board, colors, pos, e, ne, knight)) return true;
       if (checkLeap(design, board, colors, pos, e, se, knight)) return true;
  }
  return false;
}

var getColors = function(board) {
  var p = board.player;
  var f = board.getValue(p);
  if (f === null) f = p;
  if (p == 1) {
      p = 2;
  } else {
      p = 1;
  }
  var e = board.getValue(p);
  if (e === null) e = p;
  return {
      friend: [f],
      enemy:  [e]
  };
}

var getRestrictions = function(design, board, pos, dir, move) {
  var r = [pos];
  var p = design.navigate(1, pos, dir);
  while (p !== null) {
      if (board.getPiece(p) !== null) break;
      r.push(p);
      if ((p == move.actions[0][1][0]) || (p == move.actions[1][1][0])) return r;
      p = design.navigate(1, p, dir);
  }
  return [];
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var p = board.getValue(player);
  if (p === null) {
      p = player;
  }
  var f = null; var e = null;
  _.each(_.range(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 5) return;
      if (piece.player == p) {
          f = pos;
      } else {
          e = pos;
      }
  });
  if (e === null) return 1;
  if (f === null) return -1;
  board.generate(design);
  if (board.moves.length == 0) {
      var c = getColors(board);
      Dagaz.Model.expandColors(design, board, c.friend, c.enemy);
      Dagaz.Model.expandColors(design, board, c.enemy, c.friend);
      if (Dagaz.Model.checkPositions(design, board, c, [f])) return 1;
      return 0;
  }
  return checkGoals(design, board, player);
}

var copy = function(a) {
  var r = [];
  _.each(a, function(x) {
      r.push(x);
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var c = getColors(board);
  var king = null;
  _.each(_.range(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT), function(pos) {
      if (king !== null) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (_.indexOf(c.friend, piece.player) < 0) return;
      if (piece.type != 5) return;
      king = pos;
  });
  if ((king !== null) && (c.enemy.length > 0)) {
      _.each(board.moves, function(move) {
           if (move.actions.length < 1) return;
           if (move.actions[0][0] == null) return;
           if (move.actions[0][1] == null) return;
           var pos = king;
           if (move.actions[0][0][0] == pos) {
               pos = move.actions[0][1][0];
           }
           if (design.inZone(c.enemy[0], 1, pos)) return;
           var positions = [pos];
           if (move.mode == 1) {
               positions = _.union(getRestrictions(design, board, king, 3, move),  // e
                                   getRestrictions(design, board, king, 4, move)); // w
               positions.push(pos);
           }
           var b = board.apply(move);
           var x = {
               friend: copy(c.friend),
               enemy:  copy(c.enemy)
           };
           Dagaz.Model.expandColors(design, b, x.friend, x.enemy);
           Dagaz.Model.expandColors(design, b, x.enemy, x.friend);
           b.turn = board.turn;
           b.player = board.player;
           if (Dagaz.Model.checkPositions(design, b, x, positions)) {
               move.failed = true;
           }
      });
  }
  CheckInvariants(board);
}

})();
