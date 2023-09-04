(function() {

var once = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "chess-go-drops-mobile") {
      if (value == "once") once = true;
  } else {
      checkVersion(design, name, value);
  }
}

var noMoves = function(board, pos) {
  if (pos < Dagaz.Model.WIDTH * Dagaz.Model.WIDTH) return false;
  if (!board) return true;
  var r = true;
  _.each(board.moves, function(move) {
      if (move.actions.length == 0) return;
      if (move.actions[0][0] === null) return;
      if (pos == move.actions[0][0][0]) r = false;
  });
  return r;
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var f = false;
  var board = Dagaz.Controller.app.board;
  if (noMoves(board, pos)) {
      ctx.save();
      ctx.globalAlpha = 0.3;
      f = true;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (f) {
      ctx.restore();
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var size = Dagaz.Model.WIDTH * Dagaz.Model.WIDTH;
  var positions = []; var f = false;
  for (var pos = 0; pos < size; pos++) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == board.player)) {
          if (piece.type == 7) f = true;
          if (piece.type == 0) positions.push(pos);
      }
  }
  if (positions.length > 0) {
      for (var pos = size; pos < design.positions.length; pos++) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.player == board.player)) {
                if (f || (piece.type == 7)) {
                    _.each(positions, function(p) {
                         var move = Dagaz.Model.createMove(0);
                         if (piece.type == 7) move.mode = 1;
                         move.movePiece(pos, p, piece);
                         if (once && (_.indexOf([4, 5], +piece.type) >= 0)) {
                             for (var q = size; q < design.positions.length; q++) {
                                  if (q != pos) {
                                      var target = board.getPiece(q);
                                      if ((target !== null) && (target.player == board.player) && (_.indexOf([4, 5], +target.type) >= 0)) {
                                           move.capturePiece(q);
                                      }
                                  }
                             }
                         }
                         board.moves.push(move);
                    });
                }
           }
      }
  }
  var moves = [];
  if (!_.isUndefined(board.move) && (board.move.mode == 1)) {
      _.each(board.moves, function(move) {
           if (move.mode == 1) {
               moves.push(move);
           }
      });
  }
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
