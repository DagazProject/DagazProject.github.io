(function() {

Dagaz.View.MARK_R = 0;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mahjong-extension") {
     checkVersion(design, name, value);
  }
}

var getDirs = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]easy=[yY]/);
  if (result) {
     return [0, 1, 2, 3];
  } else {
     return [1, 2];
  }
}

var isBadMove = function(design, board, pos) {
  var p = pos + Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT;
  if (p < design.positions.length) {
      if (board.getPiece(p) !== null) return true;
  }
  var r = true;
  _.each(getDirs(), function(dir) {
      var p = design.navigate(1, pos, dir);
      if ((p === null) || (board.getPiece(p) === null)) {
          r = false;
      }
  });
  return r;
}

Dagaz.Controller.skip = function(board) {
  var design = Dagaz.Model.design;
  var r = false;
  _.each(design.allPositions(), function (pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = piece.getValue(0);
          if ((v !== null) && (v > 0)) {
              r = true;
          }
      }
  });
  return r;
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

var notPair = function(design, board, pos, type) {
  var r = true;
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if ((p != pos) && (piece !== null) && (piece.type == type) && !isBadMove(design, board, p))  {
          r = false;
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = move.actions[0][0][0];
      if (isBadMove(design, board, pos)) {
          move.failed = true;
          return;
      }
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var f = true;
          if (!_.isUndefined(board.move)) {
              var p = board.move.actions[0][0][0];             
              var t = board.getPiece(p);
              if (p == pos) {
                  move.failed = true;
                  return;
              }
              if ((t !== null) && (t.type == piece.type)) {
                  move.capturePiece(p);
                  f = false;
              }
          }
          if (f) {
              if (notPair(design, board, pos, piece.type)) {
                  move.failed = true;
                  return;
              }
              piece = piece.setValue(0, 1);
              move.actions = [];
              move.movePiece(pos, pos, piece);
              if (!_.isUndefined(board.move)) {
                  pos = board.move.actions[0][0][0];
                  piece = board.getPiece(pos);
                  if (piece !== null) {
                      piece = piece.setValue(0, 0);
                      move.movePiece(pos, pos, piece);
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
