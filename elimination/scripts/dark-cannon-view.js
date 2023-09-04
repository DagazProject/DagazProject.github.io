(function() {

Dagaz.Model.invisible    = [];
Dagaz.Model.invisibleOld = [];

var doneFlag = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dark-cannon-view") {
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

var checkJump = function(design, board, player, pos, dir, visible) {
  var f = false;
  _.each(design.allDirections(), function(d) {
      if (f) return;
      var p = design.navigate(player, pos, d);
      if (p === null) return;
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != player)) f = true;
  });
  if (f) {
      var p = design.navigate(player, pos, dir);
      if ((p === null) || (board.getPiece(p) !== null)) return;
      p = design.navigate(player, p, dir);
      if ((p === null) || (board.getPiece(p) !== null)) return;
      piece = board.getPiece(p);
      if (piece === null) {
         if (player == 1) visible.push(p);
      } else {
         if (piece.player != player) visible.push(p);
      }
  }
}

var checkBack = function(design, board, player, pos, dir, op, visible) {
  var p = design.navigate(player, pos, op);
  if (p === null) return;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player) || (piece.type != 0)) return;
  p = design.navigate(player, p, op);
  if (p === null) return;
  piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player) || (piece.type != 0)) return;
  p = design.navigate(player, pos, dir);
  if (p === null) return;
  piece = board.getPiece(p);
  if (piece === null) {
     if (player == 1) visible.push(p);
  } else {
     if (piece.player != player) visible.push(p);
  }
}

var checkShoot = function(design, board, player, pos, dir, op, visible) {
  var p = design.navigate(player, pos, op);
  if (p === null) return;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player) || (piece.type != 0)) return;
  p = design.navigate(player, p, op);
  if (p === null) return;
  piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player) || (piece.type != 0)) return;
  p = design.navigate(player, pos, dir);
  if ((p === null) || (board.getPiece(p) !== null)) return;
  p = design.navigate(player, p, dir);
  if (p === null) return;
  piece = board.getPiece(p);
  if (piece === null) {
     if (player == 1) visible.push(p);
     p = design.navigate(player, p, dir);
     if (p === null) return;
     piece = board.getPiece(p);
     if (piece === null) {
        if (player == 1) visible.push(p);
     } else {
        if (piece.player != player) visible.push(p);
     }
  } else {
     if (piece.player != player) visible.push(p);
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
      if ((piece !== null) && (piece.type == 0)) {
          checkStep(design, board, piece.player, pos, n,  visible);
          checkStep(design, board, piece.player, pos, w,  visible);
          checkStep(design, board, piece.player, pos, e,  visible);
          checkStep(design, board, piece.player, pos, nw, visible);
          checkStep(design, board, piece.player, pos, ne, visible);
          checkJump(design, board, piece.player, pos, sw, visible);
          checkJump(design, board, piece.player, pos, se, visible);
          checkBack(design, board, piece.player, pos, s,  n,  visible);
          checkBack(design, board, piece.player, pos, sw, ne, visible);
          checkBack(design, board, piece.player, pos, se, nw, visible);
          checkShoot(design, board, piece.player, pos, s,  n,  visible);
          checkShoot(design, board, piece.player, pos, n,  s,  visible);
          checkShoot(design, board, piece.player, pos, w,  e,  visible);
          checkShoot(design, board, piece.player, pos, e,  w,  visible);
          checkShoot(design, board, piece.player, pos, nw, se, visible);
          checkShoot(design, board, piece.player, pos, se, nw, visible);
          checkShoot(design, board, piece.player, pos, ne, sw, visible);
          checkShoot(design, board, piece.player, pos, sw, ne, visible);
      }
      if (design.inZone(0, board.player, pos) && (board.getPiece(pos) === null)) {
          visible.push(pos);
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
