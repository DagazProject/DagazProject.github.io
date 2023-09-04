(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "makadaidaishogi-invariant") {
      checkVersion(design, name, value);
  }
}

var addPos = function(list, pos) {
  if (_.indexOf(list, pos) < 0) {
      list.push(pos);
  }
}

var checkStep = function(cover, design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  if (board.player != player) {
      addPos(cover.attacked, p);
  } else {
      addPos(cover.defended, p);
  }
}

var checkLeap2 = function(cover, design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  p = design.navigate(player, p, dir);
  if (p === null) return;
  if (board.player != player) {
      addPos(cover.attacked, p);
  } else {
      addPos(cover.defended, p);
  }
}

var checkLeap3 = function(cover, design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  p = design.navigate(player, p, dir);
  if (p === null) return;
  p = design.navigate(player, p, dir);
  if (p === null) return;
  if (board.player != player) {
      addPos(cover.attacked, p);
  } else {
      addPos(cover.defended, p);
  }
}

var checkSlide = function(cover, design, board, player, pos, dir, cnt) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  while (p !== null) {
      if (!_.isUndefined(cnt)) {
          if (cnt <= 0) break;
          cnt--;
      }
      if (board.player != player) {
          addPos(cover.attacked, p);
      } else {
          addPos(cover.defended, p);
      }
      if (board.getPiece(p) !== null) break;
      p = design.navigate(player, p, dir);
  }
}

var checkHook = function(cover, design, board, player, pos, dir, alt) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  while (p !== null) {
      if (board.player != player) {
          addPos(cover.attacked, p);
      } else {
          addPos(cover.defended, p);
      }
      if (board.getPiece(p) !== null) break;
      checkSlide(cover, design, board, player, p, alt);
      p = design.navigate(player, p, dir);
  }
}

var checkPiece = function(design, board, piece, pos, cover) {
  if (_.indexOf([0, 2, 3, 5, 6, 7, 8, 12, 17, 26, 28, 32, 36, 46, 47, 49, 51, 55, 56, 58, 64, 66, 68, 70, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 7); // n
  if (_.indexOf([0, 3, 5, 6, 7, 8, 12, 17, 21, 28, 36, 43, 44, 45, 47, 49, 50, 51, 53, 56, 58, 62, 66, 70, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 11); // s
  if (_.indexOf([3, 5, 10, 12, 17, 21, 23, 28, 32, 36, 43, 49, 53, 55, 56, 70, 74, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 1); // e
  if (_.indexOf([3, 5, 10, 12, 17, 21, 23, 28, 32, 36, 43, 49, 53, 55, 56, 70, 72, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 13); // w
  if (_.indexOf([3, 5, 9, 13, 24, 30, 32, 34, 41, 43, 45, 51, 53, 55, 56, 60, 62, 64, 66, 68, 70, 72, 74, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 4); // nw
  if (_.indexOf([3, 5, 9, 13, 24, 30, 32, 34, 41, 43, 45, 51, 53, 55, 56, 60, 62, 64, 66, 68, 70, 72, 74, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 14); // ne
  if (_.indexOf([9, 13, 26, 30, 34, 41, 45, 47, 49, 50, 51, 53, 55, 56, 68, 72, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 9); // se
  if (_.indexOf([9, 13, 26, 30, 34, 41, 45, 47, 49, 50, 51, 53, 55, 56, 68, 74, 76, 38, 39, 25], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 0); // sw

  if (_.indexOf([18, 75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 5); // n2L
  if (_.indexOf([18, 75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 8); // n2R
  if (_.indexOf([75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 6); // s2L
  if (_.indexOf([75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 10); // s2R
  if (_.indexOf([75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 12); // e2B
  if (_.indexOf([75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 2); // e2T
  if (_.indexOf([75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 3); // w2B
  if (_.indexOf([75, 38, 39], +piece.type) >= 0) checkStep(cover, design, board, piece.player, pos, 15); // w2T

  if (_.indexOf([17, 34, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 7); // n
  if (_.indexOf([17, 34, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 11); // s
  if (_.indexOf([34, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 1); // e
  if (_.indexOf([34, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 13); // w
  if (_.indexOf([31, 36, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 4); // nw
  if (_.indexOf([31, 36, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 14); // ne
  if (_.indexOf([36, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 9); // se
  if (_.indexOf([36, 73, 75, 38, 39, 25], +piece.type) >= 0) checkLeap2(cover, design, board, piece.player, pos, 0); // sw

  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 7); // n
  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 11); // s
  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 1); // e
  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 13); // w
  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 4); // nw
  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 14); // ne
  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 9); // se
  if (_.indexOf([73, 25], +piece.type) >= 0) checkLeap3(cover, design, board, piece.player, pos, 0); // sw

  if (_.indexOf([1, 4, 10, 13, 16, 27, 37, 40, 44, 48, 50, 52, 57, 59, 65, 67, 69, 71, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 7); // n
  if (_.indexOf([1, 4, 10, 13, 16, 30, 33, 37, 40, 46, 48, 52, 54, 59, 63, 67, 71, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 11); // s
  if (_.indexOf([4, 8, 9, 13, 16, 29, 31, 33, 35, 54, 71, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 1); // e
  if (_.indexOf([4, 8, 9, 13, 16, 29, 31, 33, 35, 54, 17, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 13); // w
  if (_.indexOf([6, 11, 12, 16, 29, 31, 33, 42, 44, 46, 50, 52, 54, 61, 63, 65, 67, 69, 71, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 4); // nw
  if (_.indexOf([7, 11, 12, 16, 29, 31, 33, 42, 44, 46, 50, 52, 54, 61, 63, 65, 67, 69, 71, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 14); // ne
  if (_.indexOf([6, 11, 12, 16, 27, 29, 31, 42, 44, 46, 48, 52, 54, 69, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 9); // se
  if (_.indexOf([7, 11, 12, 16, 27, 29, 31, 42, 44, 46, 48, 52, 54, 69, 73, 75], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 0); // sw

  if (_.indexOf([19, 35, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 7, 2); // n
  if (_.indexOf([19, 35, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 11, 2); // s
  if (_.indexOf([19, 37, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 1, 2); // e
  if (_.indexOf([19, 37, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 13, 2); // w
  if (_.indexOf([20, 22, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 4, 2); // nw
  if (_.indexOf([20, 22, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 14, 2); // ne
  if (_.indexOf([20, 22, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 9, 2); // se
  if (_.indexOf([20, 22, 39], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 0, 2); // sw

  if (_.indexOf([21, 23, 35, 37], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 4, 3); // nw
  if (_.indexOf([21, 23, 35, 37], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 14, 3); // ne
  if (_.indexOf([23, 35, 37], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 9, 3); // se
  if (_.indexOf([23, 35, 37], +piece.type) >= 0) checkSlide(cover, design, board, piece.player, pos, 0, 3); // sw

  if (+piece.type == 24) {
      checkSlide(cover, design, board, piece.player, pos, 7, 3); // n
      checkSlide(cover, design, board, piece.player, pos, 11, 3); // s
      checkSlide(cover, design, board, piece.player, pos, 1, 3); // e
      checkSlide(cover, design, board, piece.player, pos, 13, 3); // w
  }
  if (+piece.type == 22) {
      checkSlide(cover, design, board, piece.player, pos, 7, 5); // n
      checkSlide(cover, design, board, piece.player, pos, 11, 5); // s
      checkSlide(cover, design, board, piece.player, pos, 1, 5); // e
      checkSlide(cover, design, board, piece.player, pos, 13, 5); // w
  }
  if (+piece.type == 14) {
      checkHook(cover, design, board, piece.player, pos, 4, 14); // nw, ne
      checkHook(cover, design, board, piece.player, pos, 4, 0); // nw, sw
      checkHook(cover, design, board, piece.player, pos, 14, 4); // ne, nw
      checkHook(cover, design, board, piece.player, pos, 14, 9); // ne, se
      checkHook(cover, design, board, piece.player, pos, 9, 14); // se, ne
      checkHook(cover, design, board, piece.player, pos, 9, 0); // se, sw
      checkHook(cover, design, board, piece.player, pos, 0, 4); // sw, nw
  }
  if (+piece.type == 15) {
      checkHook(cover, design, board, piece.player, pos, 7, 13); // n, w
      checkHook(cover, design, board, piece.player, pos, 7, 1); // n, e
      checkHook(cover, design, board, piece.player, pos, 11, 13); // s, w
      checkHook(cover, design, board, piece.player, pos, 11, 1); // s, e
      checkHook(cover, design, board, piece.player, pos, 1, 7); // e, n
      checkHook(cover, design, board, piece.player, pos, 1, 11); // e, s
      checkHook(cover, design, board, piece.player, pos, 13, 7); // w, n
      checkHook(cover, design, board, piece.player, pos, 13, 11); // w, s
  }
}

var createCover = function() {
  return {
     attacked:  [],
     defended:  []
  }
}

Dagaz.Model.getCover = function(design, board, player) {
  if (_.isUndefined(board.cover)) {
      board.cover = createCover();
      for (var pos = 0; pos < design.positions.length; pos++) {
           var piece = board.getPiece(pos);
           if (piece !== null) {
               if ((player === null) || (piece.player == player)) {
                   checkPiece(design, board, piece, pos, board.cover);
               }
           }
      }
  }
  return board.cover;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var prince = null; var king = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == board.player)) {
          if (+piece.type == 56) prince = pos;
          if (+piece.type >= 76) king = pos;
      }
  });
  var p = prince;
  if (king !== null) {
      p = king;
  }
  var b = null;
  if (p !== null) {
      b = board.copy();
      b.setPiece(p, null);
  }
  if ((king !== null) && (prince !== null)) {
      p = null;
  }
  _.each(board.moves, function(move) {
      if (!_.isUndefined(Dagaz.AI.IN_PROGRESS)) return;
      if (move.isSimpleMove() && (b !== null)) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (+piece.type == 77) {
              var player = board.player;
              if ((prince === null) || (king === null)) {
                  player = null;
              }
              var c = Dagaz.Model.getCover(design, b, player);
              if ((_.indexOf(c.defended, move.actions[0][1][0]) < 0) ||
                  (_.indexOf(c.attacked, move.actions[0][1][0]) >= 0)) {
                  move.failed = true;
              }
          }
          if ((+piece.type == 56) || (+piece.type == 76)) {
              if ((prince !== null) && (king !== null)) return;
              var c = Dagaz.Model.getCover(design, b, design.nextPlayer(board.player));
              if (_.indexOf(c.attacked, move.actions[0][1][0]) >= 0) {
                  move.failed = true;
              }
          }
      }
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (p !== null)) {
          if (p === move.actions[0][0][0]) return;
          var x = board.apply(move);
          var c = Dagaz.Model.getCover(design, x, x.player);
          if (_.indexOf(c.defended, p) >= 0) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
