(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pyramid-restrictions") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var val = null;
  if (model) {
      val = model.getValue(0);
  }
  if ((val !== null) && (val > 0)) {
      ctx.save();
      ctx.globalAlpha = 0.75;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (val !== null) {
      ctx.restore();
  }
}

var findPair = function(design, board) {
  var r = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var value = piece.getValue(0);
          if ((value !== null) && (value > 0)) {
              r = pos;
          }
      }
  });
  return r;
}

var notPair = function(design, board, pos) {
  var r = true;
  var piece = board.getPiece(pos);
  if (piece === null) return true;
  var s = design.price[piece.type] - 1;
  _.each(design.allPositions(), function(p) {
      if (p == pos) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player != 1) return;
      if (s + design.price[piece.type] - 1 == 12) r = false;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pair = findPair(design, board);
  _.each(board.moves, function(move) {
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) {
          move.failed = true;
      }
      var s = design.price[piece.type] - 1;
      if (pair !== null) {
          s += design.price[board.getPiece(pair).type] - 1;
      }
      if ((pair === null) || (s !== 12)) {
          move.actions = [];
          if (notPair(design, board, pos)) move.failed = true;
          piece = piece.setValue(0, 1);
          move.movePiece(pos, pos, piece);
          if (pair !== null) {
              piece = board.getPiece(pair);
              if (piece !== null) {
                  piece = piece.setValue(0, 0);
                  move.movePiece(pair, pair, piece);
              }
          }
      } else {
          move.mode = 1;
          move.capturePiece(pair);
      }
  });
  CheckInvariants(board);
}

})();
