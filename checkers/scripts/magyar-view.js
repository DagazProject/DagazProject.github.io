(function() {

var showTiles = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "magyar-view") {
      if (value == "tiles") showTiles = true;
  } else {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.getMarked = function(self) {
  var result = [];
  if (showTiles) {
      _.each(self.moves, function(move) {
          if (move.isSimpleMove() && _.isUndefined(move.failed) && (move.actions[0][2] !== null) && (move.actions[0][2][0].type == 0)) {
              result.push(move.actions[0][0][0]);
          }
      });
  }
  return result;
}


Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var value = null;
  if (model) {
      value = model.getValue(0);
  }
  var isSaved = false;
  if ((value !== null) && (value != "")) {
      var stack = [];
      while (value > 0) {
          stack.push(+value.substr(value.length - 1, 1));
          value = value.substr(0, value.length - 1);
      }
      var s = stack.length * 5;
      if (s > 25) s = 25;
      y += s;
      while (stack.length > 0) {
          var player = stack.pop();
          var p = view.piece["White Stone"];
          if (player == 1) {
              p = view.piece["Red Stone"];
          }
          ctx.drawImage(p.h, x, y, piece.dx, piece.dy);
          y -= 10;
      }
  } else {
      if ((model.type == 0) && (_.indexOf(view.strike, pos) >= 0)) {
          ctx.save();
          ctx.globalAlpha = 0.5;
          isSaved = true;
      }
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

})();
