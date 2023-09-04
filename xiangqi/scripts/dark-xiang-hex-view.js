(function() {

Dagaz.Model.invisible    = [];
Dagaz.Model.invisibleOld = [];

var doneFlag = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dark-xiang-hex-view") {
      checkVersion(design, name, value);
  }
}

var checkStep = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
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

var checkElephantJump = function(design, board, player, pos, dir, zone, visible) {
  if (!design.inZone(zone, player, pos)) return;
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  if (board.getPiece(p) !== null) return;
  p = design.navigate(player, p, dir);
  if (p === null) return;
  if (!design.inZone(zone, player, p)) return;
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

var checkShoot = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((player == 1) && (piece === null)) visible.push(p);
      p = design.navigate(player, p, dir);
      if (piece !== null) break;
  }
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player != player) {
              visible.push(p);
          }
          return;
      }
//    if (player == 1) visible.push(p);
      p = design.navigate(player, p, dir);
  }
}

Dagaz.Model.Done = function(design, board) {
  var visible = [];
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  var nnw = design.getDirection("nnw"); var ssw = design.getDirection("ssw");
  var nne = design.getDirection("nne"); var sse = design.getDirection("sse");
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.type == 0) { // Soldier
              checkStep(design, board, piece.player, pos, n, visible);
              checkStepZone(design, board, piece.player, pos, nw, 2, visible);
              checkStepZone(design, board, piece.player, pos, ne, 2, visible);
              checkStepZone(design, board, piece.player, pos, w, 2, visible);
              checkStepZone(design, board, piece.player, pos, e, 2, visible);
          }
          if (piece.type == 1) { // Horse
              checkKnightJump(design, board, piece.player, pos, n, nnw, visible);
              checkKnightJump(design, board, piece.player, pos, n, nne, visible);
              checkKnightJump(design, board, piece.player, pos, s, ssw, visible);
              checkKnightJump(design, board, piece.player, pos, s, sse, visible);
              checkKnightJump(design, board, piece.player, pos, nw, nnw, visible);
              checkKnightJump(design, board, piece.player, pos, nw, w, visible);
              checkKnightJump(design, board, piece.player, pos, ne, nne, visible);
              checkKnightJump(design, board, piece.player, pos, ne, e, visible);
              checkKnightJump(design, board, piece.player, pos, sw, ssw, visible);
              checkKnightJump(design, board, piece.player, pos, sw, w, visible);
              checkKnightJump(design, board, piece.player, pos, se, sse, visible);
              checkKnightJump(design, board, piece.player, pos, se, e, visible);
              checkStep(design, board, piece.player, pos, n, visible);
              checkStep(design, board, piece.player, pos, s, visible);
              checkStep(design, board, piece.player, pos, nw, visible);
              checkStep(design, board, piece.player, pos, ne, visible);
              checkStep(design, board, piece.player, pos, sw, visible);
              checkStep(design, board, piece.player, pos, se, visible);
          }
          if (piece.type == 2) { // Elephant
              checkElephantJump(design, board, piece.player, pos, nnw, 1, visible);
              checkElephantJump(design, board, piece.player, pos, nne, 1, visible);
              checkElephantJump(design, board, piece.player, pos, ssw, 1, visible);
              checkElephantJump(design, board, piece.player, pos, sse, 1, visible);
              checkElephantJump(design, board, piece.player, pos, w, 1, visible);
              checkElephantJump(design, board, piece.player, pos, e, 1, visible);
              checkStepZone(design, board, piece.player, pos, nnw, 1, visible);
              checkStepZone(design, board, piece.player, pos, nne, 1, visible);
              checkStepZone(design, board, piece.player, pos, ssw, 1, visible);
              checkStepZone(design, board, piece.player, pos, sse, 1, visible);
              checkStepZone(design, board, piece.player, pos, w, 1, visible);
              checkStepZone(design, board, piece.player, pos, e, 1, visible);
          }
          if (piece.type == 3) { // Chariot
              checkSlide(design, board, piece.player, pos, n, visible);
              checkSlide(design, board, piece.player, pos, s, visible);
              checkSlide(design, board, piece.player, pos, ne, visible);
              checkSlide(design, board, piece.player, pos, nw, visible);
              checkSlide(design, board, piece.player, pos, se, visible);
              checkSlide(design, board, piece.player, pos, sw, visible);
          }
          if (piece.type == 4) { // Cannon
              checkShoot(design, board, piece.player, pos, n, visible);
              checkShoot(design, board, piece.player, pos, s, visible);
              checkShoot(design, board, piece.player, pos, ne, visible);
              checkShoot(design, board, piece.player, pos, nw, visible);
              checkShoot(design, board, piece.player, pos, se, visible);
              checkShoot(design, board, piece.player, pos, sw, visible);
          }
          if (piece.type == 5) { // Mandarin
              checkStepZone(design, board, piece.player, pos, nnw, 0, visible);
              checkStepZone(design, board, piece.player, pos, nne, 0, visible);
              checkStepZone(design, board, piece.player, pos, ssw, 0, visible);
              checkStepZone(design, board, piece.player, pos, sse, 0, visible);
              checkStepZone(design, board, piece.player, pos, w, 0, visible);
              checkStepZone(design, board, piece.player, pos, e, 0, visible);
          }
          if (piece.type == 6) { // General
              checkStepZone(design, board, piece.player, pos, n, 0, visible);
              checkStepZone(design, board, piece.player, pos, s, 0, visible);
              checkStepZone(design, board, piece.player, pos, ne, 0, visible);
              checkStepZone(design, board, piece.player, pos, nw, 0, visible);
              checkStepZone(design, board, piece.player, pos, se, 0, visible);
              checkStepZone(design, board, piece.player, pos, sw, 0, visible);
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
      if (design.isKilledPos(pos)) return;
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
  var design = Dagaz.Model.design;
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
