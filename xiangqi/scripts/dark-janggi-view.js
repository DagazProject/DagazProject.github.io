(function() {

Dagaz.Model.invisible    = [];
Dagaz.Model.invisibleOld = [];

var doneFlag = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dark-janggi-view") {
      checkVersion(design, name, value);
  }
}

var checkStep = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  var piece = board.getPiece(p);
  var piece = board.getPiece(p);
  if (piece === null) {
     if (player == 1) visible.push(p);
  } else {
     if (piece.player != player) visible.push(p);
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

var checkKnightJump = function(design, board, player, pos, o, d, visible) {
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

var checkShoot = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      p = design.navigate(player, p, dir);
      if (piece !== null) {
          if (piece.type == 4) return;
          break;
      }
  }
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if ((piece.player != player) && (piece.type != 4)) {
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
          if (piece.type == 4) return;
          break;
      }
  }
  while (p !== null) {
      if (!design.inZone(zone, player, p)) return;
      var piece = board.getPiece(p);
      if (piece !== null) {
          if ((piece.player != player) && (piece.type != 4)) {
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
              checkStep(design, board, piece.player, pos, n, visible);
              checkStep(design, board, piece.player, pos, w, visible);
              checkStep(design, board, piece.player, pos, e, visible);
              checkStepZone(design, board, piece.player, pos, nw, 1, visible);
              checkStepZone(design, board, piece.player, pos, ne, 1, visible);
          }
          if (piece.type == 1) {
              checkKnightJump(design, board, piece.player, pos, n, nw, visible);
              checkKnightJump(design, board, piece.player, pos, n, ne, visible);
              checkKnightJump(design, board, piece.player, pos, s, sw, visible);
              checkKnightJump(design, board, piece.player, pos, s, se, visible);
              checkKnightJump(design, board, piece.player, pos, w, nw, visible);
              checkKnightJump(design, board, piece.player, pos, w, sw, visible);
              checkKnightJump(design, board, piece.player, pos, e, ne, visible);
              checkKnightJump(design, board, piece.player, pos, e, se, visible);
              checkStep(design, board, piece.player, pos, n, visible);
              checkStep(design, board, piece.player, pos, e, visible);
              checkStep(design, board, piece.player, pos, w, visible);
              checkStep(design, board, piece.player, pos, s, visible);
          }
          if (piece.type == 2) {
              checkElephantJump(design, board, piece.player, pos, n, nw, visible);
              checkElephantJump(design, board, piece.player, pos, n, ne, visible);
              checkElephantJump(design, board, piece.player, pos, s, sw, visible);
              checkElephantJump(design, board, piece.player, pos, s, se, visible);
              checkElephantJump(design, board, piece.player, pos, w, nw, visible);
              checkElephantJump(design, board, piece.player, pos, w, sw, visible);
              checkElephantJump(design, board, piece.player, pos, e, ne, visible);
              checkElephantJump(design, board, piece.player, pos, e, se, visible);
              checkStep(design, board, piece.player, pos, n, visible);
              checkStep(design, board, piece.player, pos, e, visible);
              checkStep(design, board, piece.player, pos, w, visible);
              checkStep(design, board, piece.player, pos, s, visible);
          }
          if (piece.type == 3) {
              checkSlide(design, board, piece.player, pos, n, visible);
              checkSlide(design, board, piece.player, pos, e, visible);
              checkSlide(design, board, piece.player, pos, w, visible);
              checkSlide(design, board, piece.player, pos, s, visible);
              checkSlideZone(design, board, piece.player, pos, nw, 1, visible);
              checkSlideZone(design, board, piece.player, pos, ne, 1, visible);
              checkSlideZone(design, board, piece.player, pos, sw, 1, visible);
              checkSlideZone(design, board, piece.player, pos, se, 1, visible);
          }
          if (piece.type == 4) {
              checkShoot(design, board, piece.player, pos, n, visible);
              checkShoot(design, board, piece.player, pos, e, visible);
              checkShoot(design, board, piece.player, pos, w, visible);
              checkShoot(design, board, piece.player, pos, s, visible);
              checkShootZone(design, board, piece.player, pos, nw, 1, visible);
              checkShootZone(design, board, piece.player, pos, ne, 1, visible);
              checkShootZone(design, board, piece.player, pos, sw, 1, visible);
              checkShootZone(design, board, piece.player, pos, se, 1, visible);
          }
          if ((piece.type == 5) || (piece.type == 6)) {
              checkStepZone(design, board, piece.player, pos,  n, 0, visible);
              checkStepZone(design, board, piece.player, pos,  e, 0, visible);
              checkStepZone(design, board, piece.player, pos,  w, 0, visible);
              checkStepZone(design, board, piece.player, pos,  s, 0, visible);
              checkStepZone(design, board, piece.player, pos, nw, 1, visible);
              checkStepZone(design, board, piece.player, pos, ne, 1, visible);
              checkStepZone(design, board, piece.player, pos, sw, 1, visible);
              checkStepZone(design, board, piece.player, pos, se, 1, visible);
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
          ctx.globalAlpha = 0.7;
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
