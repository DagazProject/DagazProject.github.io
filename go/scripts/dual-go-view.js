(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dual-go-view") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  var val = null;
  if (model) {
      val = model.getValue(0);
  }
  if ((val !== null) && (val > 0)) {
      var sx = x + 42;
      if (val < 100) {
          sx = x + 36;
      }
      if (val < 10) {
          sx = x + 29;
      }
      var sy = y + 16;
      while (val > 0) {
          var name = "Black";
          if (model.type > 0) {
              name = "White";
          }
          name = name + (val % 10);
          var r = view.piece[name];
          if (r) {
              sx -= r.dx + 1;
              ctx.drawImage(r.h, sx, sy, r.dx, r.dy);
          }
          val = (val / 10) | 0;
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var v = 1;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var val = +piece.getValue(0);
      if (val === null) return;
      if (val >= v) v = val + 1;
  });
  _.each(board.moves, function(move) {
       if (!move.isDropMove()) return;
       var piece = move.actions[0][2][0];
       move.actions[0][2] = [ piece.setValue(0, v) ];
  });
  CheckInvariants(board);
}

})();
