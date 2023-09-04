(function() {

Dagaz.Model.invisible    = [];
Dagaz.Model.invisibleOld = [];

var doneFlag = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dark-gwangsanghui-view") {
      checkVersion(design, name, value);
  }
}

var checkStep = function(design, board, player, pos, dir, n, visible) {
  for (;n > 0; n--) {
      var p = design.navigate(player, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece === null) {
         if (player == 1) visible.push(p);
      } else {
         if (piece.player != player) visible.push(p);
         break;
      }
  }
}

var checkStepZone = function(design, board, player, pos, dir, zone, visible) {
  if (!design.inZone(zone, player, pos)) return;
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  if (!design.inZone(zone, player, p)) return;
  var piece = board.getPiece(p);
  if (piece === null) {
     if (player == 1) visible.push(p);
  } else {
     if (piece.player != player) visible.push(p);
  }
}

var checkHorseJump = function(design, board, player, pos, o, d, visible) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  if (board.getPiece(p) !== null) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  var piece = board.getPiece(p);
  if (piece === null) {
     if (player == 1) visible.push(p);
  } else {
     if (piece.player != player) visible.push(p);
  }
}

var checkKillerJump = function(design, board, player, pos, o, d, visible) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  if (board.getPiece(p) !== null) return;
  p = design.navigate(player, p, o);
  if (p === null) return;
  var piece = board.getPiece(p);
  if (piece === null) {
     if (player == 1) visible.push(p);
  } else {
     if (piece.player != player) visible.push(p);
  }
}

var checkElephantJump = function(design, board, player, pos, o, d, visible) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  if (board.getPiece(p) !== null) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  var piece = board.getPiece(p);
  if (piece === null) {
     if (player == 1) visible.push(p);
  } else {
     if (piece.player != player) visible.push(p);
  }
}

var checkSlide = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player != player) {
              visible.push(p);
          }
          return;
      }
      if (player == 1) visible.push(p);
      p = design.navigate(player, p, dir);
  }
}

var checkSlideZone = function(design, board, player, pos, dir, zone, visible) {
  if (!design.inZone(zone, player, pos)) return;
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (!design.inZone(zone, player, p)) return;
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player != player) {
              visible.push(p);
          }
          return;
      }
      if (player == 1) visible.push(p);
      p = design.navigate(player, p, dir);
  }
}

var isCannon = function(type) {
  return (type == 14) || (type == 15) || (type == 16);
}

var checkShoot = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      p = design.navigate(player, p, dir);
      if (piece !== null) {
          if (isCannon(+piece.type)) return;
          break;
      }
  }
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if ((piece.player != player) && !isCannon(+piece.type)) {
              visible.push(p);
          }
          return;
      }
      if (player == 1) visible.push(p);
      p = design.navigate(player, p, dir);
  }
}

var checkShootZone = function(design, board, player, pos, dir, zone, visible) {
  if (!design.inZone(zone, player, pos)) return;
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (!design.inZone(zone, player, p)) return;
      var piece = board.getPiece(p);
      p = design.navigate(player, p, dir);
      if (piece !== null) {
          if (isCannon(+piece.type)) return;
          break;
      }
  }
  while (p !== null) {
      if (!design.inZone(zone, player, p)) return;
      var piece = board.getPiece(p);
      if (piece !== null) {
          if ((piece.player != player) && !isCannon(+piece.type)) {
              visible.push(p);
          }
          return;
      }
      if (player == 1) visible.push(p);
      p = design.navigate(player, p, dir);
  }
}

Dagaz.Model.Done = function(design, board) {
  var visible = [];
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.type == 0) {
              checkStep(design, board, piece.player, pos, n, 1, visible);
              checkStep(design, board, piece.player, pos, w, 1, visible);
              checkStep(design, board, piece.player, pos, e, 1, visible);
          }
          if (piece.type == 1) {
              checkStep(design, board, piece.player, pos, nw, 1, visible);
              checkStep(design, board, piece.player, pos, ne, 1, visible);
              checkStep(design, board, piece.player, pos, w, 1, visible);
              checkStep(design, board, piece.player, pos, e, 1, visible);
          }
          if ((piece.type == 2) || (piece.type == 3) || (piece.type == 4)) {
              checkStepZone(design, board, piece.player, pos,  n, 2, visible);
              checkStepZone(design, board, piece.player, pos,  e, 2, visible);
              checkStepZone(design, board, piece.player, pos,  w, 2, visible);
              checkStepZone(design, board, piece.player, pos,  s, 2, visible);
              checkStepZone(design, board, piece.player, pos, nw, 3, visible);
              checkStepZone(design, board, piece.player, pos, ne, 3, visible);
              checkStepZone(design, board, piece.player, pos, sw, 3, visible);
              checkStepZone(design, board, piece.player, pos, se, 3, visible);
          }
          if (piece.type == 5) {
              checkElephantJump(design, board, piece.player, pos, n, nw, visible);
              checkElephantJump(design, board, piece.player, pos, n, ne, visible);
              checkElephantJump(design, board, piece.player, pos, s, sw, visible);
              checkElephantJump(design, board, piece.player, pos, s, se, visible);
              checkElephantJump(design, board, piece.player, pos, w, nw, visible);
              checkElephantJump(design, board, piece.player, pos, w, sw, visible);
              checkElephantJump(design, board, piece.player, pos, e, ne, visible);
              checkElephantJump(design, board, piece.player, pos, e, se, visible);
          }
          if (piece.type == 6) {
              checkSlide(design, board, piece.player, pos, n, visible);
              checkSlide(design, board, piece.player, pos, e, visible);
              checkSlide(design, board, piece.player, pos, w, visible);
              checkSlide(design, board, piece.player, pos, s, visible);
          }
          if (piece.type == 7) {
              checkShoot(design, board, piece.player, pos, n, visible);
              checkShoot(design, board, piece.player, pos, e, visible);
              checkShoot(design, board, piece.player, pos, w, visible);
              checkShoot(design, board, piece.player, pos, s, visible);
          }
          if (piece.type == 8) {
              checkHorseJump(design, board, piece.player, pos, n, nw, visible);
              checkHorseJump(design, board, piece.player, pos, n, ne, visible);
              checkHorseJump(design, board, piece.player, pos, s, sw, visible);
              checkHorseJump(design, board, piece.player, pos, s, se, visible);
              checkHorseJump(design, board, piece.player, pos, w, nw, visible);
              checkHorseJump(design, board, piece.player, pos, w, sw, visible);
              checkHorseJump(design, board, piece.player, pos, e, ne, visible);
              checkHorseJump(design, board, piece.player, pos, e, se, visible);
          }
          if (piece.type == 9) {
              checkSlideZone(design, board, piece.player, pos, n, 4, visible);
              checkSlideZone(design, board, piece.player, pos, e, 4, visible);
              checkSlideZone(design, board, piece.player, pos, w, 4, visible);
              checkSlideZone(design, board, piece.player, pos, s, 4, visible);
          }
          if (piece.type == 10) {
              checkHorseJump(design, board, piece.player, pos, nw, nw, visible);
              checkHorseJump(design, board, piece.player, pos, ne, ne, visible);
              checkHorseJump(design, board, piece.player, pos, sw, sw, visible);
              checkHorseJump(design, board, piece.player, pos, se, se, visible);
          }
          if (piece.type == 11) {
              checkKillerJump(design, board, piece.player, pos, n, nw, visible);
              checkKillerJump(design, board, piece.player, pos, n, ne, visible);
              checkKillerJump(design, board, piece.player, pos, s, sw, visible);
              checkKillerJump(design, board, piece.player, pos, s, se, visible);
              checkKillerJump(design, board, piece.player, pos, w, nw, visible);
              checkKillerJump(design, board, piece.player, pos, w, sw, visible);
              checkKillerJump(design, board, piece.player, pos, e, ne, visible);
              checkKillerJump(design, board, piece.player, pos, e, se, visible);
          }
          if (piece.type == 12) {
              checkSlideZone(design, board, piece.player, pos, n, 5, visible);
              checkSlideZone(design, board, piece.player, pos, e, 5, visible);
              checkSlideZone(design, board, piece.player, pos, w, 5, visible);
              checkSlideZone(design, board, piece.player, pos, s, 5, visible);
          }
          if (piece.type == 13) {
              checkSlideZone(design, board, piece.player, pos, n, 6, visible);
              checkSlideZone(design, board, piece.player, pos, e, 6, visible);
              checkSlideZone(design, board, piece.player, pos, w, 6, visible);
              checkSlideZone(design, board, piece.player, pos, s, 6, visible);
          }
      }
  });
  Dagaz.Model.invisibleOld = [];
  _.each(Dagaz.Model.invisible, function(p) {
      if (board.getPiece(p) === null) {
          Dagaz.Model.invisibleOld.push(p);
      }
  });
  Dagaz.Model.invisible = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (_.indexOf(visible, pos) < 0)) {
          Dagaz.Model.invisible.push(pos);
      }
  });
  var ko = [];
  _.each(design.allPositions(), function(pos) {
      if (_.indexOf(visible, pos) >= 0) return;
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == 1)) return;
      ko.push(pos);
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
}

Dagaz.Controller.Done = function(board) {
  board.ko = [];
  doneFlag = true;
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y, setup) {
  var isSaved = false;
  if (!doneFlag && (_.indexOf(_.union(Dagaz.Model.invisible, Dagaz.Model.invisibleOld), setup.pos) >= 0)) {
      ctx.save();
      if (model.player == 1) {
          ctx.globalAlpha = 0.70;
      } else {
          ctx.globalAlpha = 0;
      }
      isSaved = true;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

})();
