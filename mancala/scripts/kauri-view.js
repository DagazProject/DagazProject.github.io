(function() {

Dagaz.View.DX    = 0;
Dagaz.View.DY    = 0;
Dagaz.View.MX    = 16;
Dagaz.View.SHIFT = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "kauri-view") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/seed.ogg", true);
}

Dagaz.Model.getPieceType = function(piece) {
  return piece.getValue(1) * 10 + piece.getValue(0);
}

var showPiece = Dagaz.View.showPiece;

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var val = null;
  var kauri = 0;
  if (model) {
      val = +model.getValue(0);
      kauri = +model.getValue(1);
  }
  if (val !== null) {
      var dx = frame.dx; var dy = frame.dy;
      var cx = (dx / piece.dx) | 0;
      var cy = (dy / piece.dy) | 0;
      var sx = x + Dagaz.View.DX - (dx - piece.dx) / 2 | 0;
      var sy = y + Dagaz.View.DY + (cy - 1) * piece.dy - (dy - piece.dy) / 2 | 0;
      var ov = 0;
      var cn = 0;
      if (val + kauri > Dagaz.View.MX) {
          var r = view.piece["0"];
          if (r && (val < 100)) {
              sx = x - (frame.dx - piece.dx) / 2 | 0;
              sy = y;
              if (Dagaz.View.SHIFT) {
                  sy -= r.dy / 4 | 0;
              }
              sx += (frame.dx - r.dx * 2) / 2 | 0;
              r = view.piece[val / 10 | 0];
              if (r) {
                  ctx.drawImage(r.h, sx, sy - 5, r.dx, r.dy);
              }
              sx += r.dx;
              if (Dagaz.View.SHIFT) {
                  sy += r.dy / 2 | 0;
              }
              r = view.piece[val % 10];
              if (r) {
                  ctx.drawImage(r.h, sx, sy - 5, r.dx, r.dy);
              }
          }
          sx = x + Dagaz.View.DX - (dx - piece.dx) / 2 | 0;
          sy = y + Dagaz.View.DY + (cy - 1) * piece.dy - (dy - piece.dy) / 2 | 0;
      } else {
          for (; val > 0; val--) {
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
      }
      var r = view.piece["Kauri"];
      for (; kauri > 0; kauri--) {
          ctx.drawImage(r.h, sx, sy, piece.dx, piece.dy);
          if (cn < cx - 1) {
              sx += piece.dx;
              cn++;
          } else {
              sx -= piece.dx * (cx - 1);
              sy -= piece.dy;
              cn = 0;
          }
      }
  } else {
      showPiece(view, ctx, frame, pos, piece, model, x, y);
  }
}

})();
