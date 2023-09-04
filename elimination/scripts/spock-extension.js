(function() {

Dagaz.AI.AI_FRAME         = 5000;
Dagaz.AI.MIN_DEEP         = 5;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "spock-extension") {
      checkVersion(design, name, value);
  }
}

var checkLeap = function(design, board, player, pos, o, d, cover) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  if (board.getPiece(p) === null) return;
  cover[p].push(pos);
}

var checkStep = function(design, board, player, pos, dir, types, cover) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  var piece = board.getPiece(p);
  while ((piece !== null) && (piece.player == player)) {
      p = design.navigate(player, p, dir);
      if (p === null) return;
      piece = board.getPiece(p);
  }
  if (piece !== null) {
      if (_.indexOf(types, +piece.type) < 0) return;
  }
  cover[p].push(pos);
}

var checkSlide = function(design, board, player, pos, dir, types, cover) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.player != player)) {
          if (piece !== null) {
              if (_.indexOf(types, +piece.type) < 0) return;
          }
          cover[p].push(pos);
          if (piece !== null) return;
      }
      p = design.navigate(player, p, dir);
  }
}

Dagaz.Model.GetCover = function(design, board) {
  if (_.isUndefined(board.cover)) {
      var n  = design.getDirection("n");  var w  = design.getDirection("w");
      var s  = design.getDirection("s");  var e  = design.getDirection("e");
      var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
      var ne = design.getDirection("ne"); var se = design.getDirection("se");
      board.cover = [];
      _.each(design.allPositions(), function(pos) {
           board.cover.push([]);
      });
      _.each(design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if (piece !== null) {
               if (piece.type == 0) {
                   checkLeap(design, board, piece.player, pos, n, nw, board.cover);
                   checkLeap(design, board, piece.player, pos, n, ne, board.cover);
                   checkLeap(design, board, piece.player, pos, s, sw, board.cover);
                   checkLeap(design, board, piece.player, pos, s, se, board.cover);
                   checkLeap(design, board, piece.player, pos, w, nw, board.cover);
                   checkLeap(design, board, piece.player, pos, w, sw, board.cover);
                   checkLeap(design, board, piece.player, pos, e, ne, board.cover);
                   checkLeap(design, board, piece.player, pos, e, se, board.cover);
               }
               if (piece.type == 1) {
                   checkStep(design, board, piece.player, pos, n,  [2, 3], board.cover);
                   checkStep(design, board, piece.player, pos, e,  [2, 3], board.cover);
                   checkStep(design, board, piece.player, pos, w,  [2, 3], board.cover);
                   checkStep(design, board, piece.player, pos, s,  [2, 3], board.cover);
                   checkStep(design, board, piece.player, pos, nw, [2, 3], board.cover);
                   checkStep(design, board, piece.player, pos, ne, [2, 3], board.cover);
                   checkStep(design, board, piece.player, pos, sw, [2, 3], board.cover);
                   checkStep(design, board, piece.player, pos, se, [2, 3], board.cover);
               }
               if (piece.type == 2) {
                   checkSlide(design, board, piece.player, pos, nw, [3, 4], board.cover);
                   checkSlide(design, board, piece.player, pos, ne, [3, 4], board.cover);
                   checkSlide(design, board, piece.player, pos, sw, [3, 4], board.cover);
                   checkSlide(design, board, piece.player, pos, se, [3, 4], board.cover);
               }
               if  (piece.type == 3) {
                   checkSlide(design, board, piece.player, pos, n,  [4, 0], board.cover);
                   checkSlide(design, board, piece.player, pos, e,  [4, 0], board.cover);
                   checkSlide(design, board, piece.player, pos, w,  [4, 0], board.cover);
                   checkSlide(design, board, piece.player, pos, s,  [4, 0], board.cover);
                   checkSlide(design, board, piece.player, pos, nw, [4, 0], board.cover);
                   checkSlide(design, board, piece.player, pos, ne, [4, 0], board.cover);
                   checkSlide(design, board, piece.player, pos, sw, [4, 0], board.cover);
                   checkSlide(design, board, piece.player, pos, se, [4, 0], board.cover);
               }
               if (piece.type == 4) {
                   checkSlide(design, board, piece.player, pos, n,  [0, 1], board.cover);
                   checkSlide(design, board, piece.player, pos, e,  [0, 1], board.cover);
                   checkSlide(design, board, piece.player, pos, w,  [0, 1], board.cover);
                   checkSlide(design, board, piece.player, pos, s,  [0, 1], board.cover);
               }
           }
      });
  }
  return board.cover;
}

var findSpock = function(design, board, player, pos, o, d) {
  var p = design.navigate(player, pos, o);
  if (p === null) return 0;
  p = design.navigate(player, p, d);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.type != 0) return 0;
  if (piece.player == player) {
      return 1;
  } else {
      return -1;
  }
}

var spockBalance = function(design, board, player, pos) {
  var r = 0;
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  r += findSpock(design, board, player, pos, n, nw);
  r += findSpock(design, board, player, pos, n, ne);
  r += findSpock(design, board, player, pos, s, sw);
  r += findSpock(design, board, player, pos, s, se);
  r += findSpock(design, board, player, pos, w, nw);
  r += findSpock(design, board, player, pos, w, sw);
  r += findSpock(design, board, player, pos, e, ne);
  r += findSpock(design, board, player, pos, e, se);
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[piece.type];
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
           var piece = board.getPiece(a[0][0]);
           var enemy = board.getPiece(a[1][0]);
           if ((enemy !== null) && (enemy.player == board.player) && (enemy.type == 0)) {
               return -1;
           }
           if ((piece !== null) && ((piece.type == 4) || (piece.type == 0))) {
               var l = 0;
               if (piece.type == 0) {
                   l = 1;
               }
               if (spockBalance(design, board, board.player, a[1][0]) < l) {
                   return -1;
               }
           }
           if (enemy !== null) {
               r += design.price[enemy.type];
           }
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var spock  = design.getPieceType("Spock");
  _.each(board.moves, function(m) {
      if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
           var pos = m.actions[0][0][0];
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.type == spock)) {
                var target = m.actions[0][1][0];
                var piece = board.getPiece(target);
                if (piece !== null) {
                    var type = +piece.type + 1;
                    if (type >= 5) {
                        type = 0;
                    }
                    piece = Dagaz.Model.createPiece(type, board.player);
                    m.dropPiece(pos, piece);
                }
           }
      }
  });
  CheckInvariants(board);
}

})();
