(function() {

Dagaz.View.DX    = 0;
Dagaz.View.DY    = 0;
Dagaz.View.MX    = 25;
Dagaz.View.SHIFT = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "selus-view") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/seed.ogg", true);
}

Dagaz.Model.getPieceType = function(piece) {
  var value = piece.getValue(0);
  if (value !== null) {
      return +value;
  }
  return 0;
}

var showPiece = Dagaz.View.showPiece;

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var val = null;
  if (model) {
      val = +model.getValue(0);
      if (val !== null) {
          val = Math.abs(val);
      }
  }
  if (val !== null) {
      if (model.type == 1) {
          showPiece(view, ctx, frame, pos, piece, model, x, y);
          x -= (frame.dx - piece.dx) / 2 | 0;
          y -= (frame.dy - piece.dy) / 2 | 0;
          piece = view.piece["South Seed"];
          x += (frame.dx - piece.dx) / 2 | 0;
          y += (frame.dy - piece.dy) / 2 | 0;
      }
      var dx = frame.dx; var dy = frame.dy;
      var cx = (dx / piece.dx) | 0;
      var cy = (dy / piece.dy) | 0;
      if (val > Dagaz.View.MX) {
          var r = view.piece["0"];
          if (r && (val < 100)) {
              var sx = x - (frame.dx - piece.dx) / 2 | 0;
              var sy = y;
              if (Dagaz.View.SHIFT) {
                  sy -= r.dy / 4 | 0;
              }
              sx += (frame.dx - r.dx * 2) / 2 | 0;
              r = view.piece[val / 10 | 0];
              if (r) {
                  ctx.drawImage(r.h, sx, sy, r.dx, r.dy);
              }
              sx += r.dx;
              if (Dagaz.View.SHIFT) {
                  sy += r.dy / 2 | 0;
              }
              r = view.piece[val % 10];
              if (r) {
                  ctx.drawImage(r.h, sx, sy, r.dx, r.dy);
              }
          }
      } else {
          var sx = x + Dagaz.View.DX - (dx - piece.dx) / 2 | 0;
          var sy = y + Dagaz.View.DY + (cy - 1) * piece.dy - (dy - piece.dy) / 2 | 0;
          var ov = 0;
          if (val > cx * cy) {
              ov = val - cx * cy;
              val = cx * cy;
          }
          for (var cn = 0; val > 0; val--) {
              ctx.drawImage(piece.h, sx, sy, piece.dx, piece.dy);
              if (cn < cx - 1) {
                  sx += piece.dx;
                  cn++;
              } else {
                  sx -= piece.dx * (cx - 1);
                  sy -= piece.dy;
                  cn = 0;
              }
          }
          var sx = x + Dagaz.View.DX - (dx - piece.dx) / 2 + (piece.dx / 2) | 0;
          var sy = y + Dagaz.View.DY + (cy - 1) * piece.dy - (dy - piece.dy) / 2 - (piece.dy / 2) | 0;
          for (var cn = 0; ov > 0; ov--) {
              ctx.drawImage(piece.h, sx, sy, piece.dx, piece.dy);
              if (cn < cx - 2) {
                  sx += piece.dx;
                  cn++;
              } else {
                  sx -= piece.dx * (cx - 2);
                  sy -= piece.dy;
                  cn = 0;
              }
          }
      }
  } else {
      showPiece(view, ctx, frame, pos, piece, model, x, y);
  }
}

})();
