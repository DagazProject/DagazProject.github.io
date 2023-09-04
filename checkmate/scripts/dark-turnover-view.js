(function() {

var positions = [135, 143, 151, 159, 167, 175, 183, 191, 134, 142, 150, 158, 166, 174, 182, 190, 133, 141, 149, 157, 165, 173, 181, 189, 132, 140, 148, 156, 164, 172, 180, 188, 131, 139, 147, 155, 163, 171, 179, 187, 130, 138, 146, 154, 162, 170, 178, 186, 129, 137, 145, 153, 161, 169, 177, 185, 128, 136, 144, 152, 160, 168, 176, 184];

Dagaz.Model.invisible    = [];
Dagaz.Model.invisibleOld = [];

var doneFlag = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dark-turnover-view") {
      checkVersion(design, name, value);
  }
}

var getPiece = function(design, board, pos) {
  var r = 0; var o = null; var t = 1;
  while (pos !== null) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           if (o === null) o = piece.player;
           r += t;
       }
       t = t * 2;
       pos = design.navigate(1, pos, 8);
  }
  if (o === null) return null;
  return {
      type: r,
      player: o
  };
}

var setVisible = function(design, pos, visible) {
  while (pos !== null) {
      visible.push(pos);
      pos = design.navigate(1, pos, 8);
  }
}

var checkStep = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  var piece = getPiece(design, board, p);
  if (piece === null) {
     if (player == 1) setVisible(design, p, visible);
  } else {
     if (piece.player != player) setVisible(design, p, visible);
  }
}

var checkCastle = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  var piece = getPiece(design, board, p);
  if (piece !== null) return;
  p = design.navigate(player, p, dir);
  if (p === null) return;
  piece = getPiece(design, board, p);
  if (piece === null) {
     if (player == 1) setVisible(design, p, visible);
  } else {
     if (piece.player != player) setVisible(design, p, visible);
  }
}

var checkKnight = function(design, board, player, pos, o, d, visible) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  var piece = getPiece(design, board, p);
  if (piece === null) {
     if (player == 1) setVisible(design, p, visible);
  } else {
     if (piece.player != player) setVisible(design, p, visible);
  }
}

var checkSlide = function(design, board, player, pos, dir, visible) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = getPiece(design, board, p);
      if (piece !== null) {
          if (piece.player != player) {
              setVisible(design, p, visible);
          }
          return;
      }
      if (player == 1) setVisible(design, p, visible);
      p = design.navigate(player, p, dir);
  }
}

Dagaz.Model.Done = function(design, board) {
  var visible = [];
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(positions, function(pos) {
      var piece = getPiece(design, board, pos);
      if (piece !== null) {
          if ((piece.type == 1) || (piece.type == 7)) {
              checkStep(design, board, piece.player, pos, n,  visible);
              checkStep(design, board, piece.player, pos, nw, visible);
              checkStep(design, board, piece.player, pos, ne, visible);
          }
          if (piece.type == 7) {
              checkCastle(design, board, piece.player, pos, n, visible);
          }
          if (piece.type == 3) {
              checkKnight(design, board, piece.player, pos, n, nw, visible);
              checkKnight(design, board, piece.player, pos, n, ne, visible);
              checkKnight(design, board, piece.player, pos, s, sw, visible);
              checkKnight(design, board, piece.player, pos, s, se, visible);
              checkKnight(design, board, piece.player, pos, w, nw, visible);
              checkKnight(design, board, piece.player, pos, w, sw, visible);
              checkKnight(design, board, piece.player, pos, e, ne, visible);
              checkKnight(design, board, piece.player, pos, e, se, visible);
          }
          if ((piece.type == 2) || (piece.type == 6)) {
              checkSlide(design, board, piece.player, pos, nw, visible);
              checkSlide(design, board, piece.player, pos, ne, visible);
              checkSlide(design, board, piece.player, pos, sw, visible);
              checkSlide(design, board, piece.player, pos, se, visible);
          }
          if ((piece.type == 4) || (piece.type == 6)) {
              checkSlide(design, board, piece.player, pos, n, visible);
              checkSlide(design, board, piece.player, pos, e, visible);
              checkSlide(design, board, piece.player, pos, w, visible);
              checkSlide(design, board, piece.player, pos, s, visible);
          }
      }
  });
  Dagaz.Model.invisibleOld = [];
  _.each(Dagaz.Model.invisible, function(p) {
      if (getPiece(design, board, p) === null) {
          Dagaz.Model.invisibleOld.push(p);
      }
  });
  Dagaz.Model.invisible = [];
  _.each(design.allPositions(), function(pos) {
      var piece = getPiece(design, board, pos);
      if ((piece !== null) && (_.indexOf(visible, pos) < 0)) {
          Dagaz.Model.invisible.push(pos);
      }
  });
  var ko = [];
  _.each(positions, function(pos) {
      if (_.indexOf(visible, pos) >= 0) return;
      var piece = getPiece(design, board, pos);
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
          ctx.globalAlpha = 0.5;
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
