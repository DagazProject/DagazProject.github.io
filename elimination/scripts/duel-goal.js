(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "duel-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.View.showPieceHint = function(view, ctx, piece) {
  var design = Dagaz.Model.design;
  var pos = Dagaz.Model.stringToPos("X1");
  if (pos === null) return;
  var frame = view.pos[pos];
  if (!frame) return;
  var r = view.piece[piece.name + " Hint"];
  if (!r) return;
  ctx.drawImage(r.h, frame.x, frame.y, r.dx, r.dy);
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0; var eg = false; var fg = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 0) return;
      if (piece.player != player) {
          if (design.inZone(0, piece.player, pos)) eg = true;
          e++;
      } else {
          if (design.inZone(0, piece.player, pos)) fg = true;
          f++;
      }
  });
  if (fg || (e == 0)) return 1;
  if (eg || (f == 0)) return -1;
  return checkGoals(design, board, player);
}

})();
