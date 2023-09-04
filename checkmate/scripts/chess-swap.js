(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-swap") {
      checkVersion(design, name, value);
  }
}

var PostProcessing = Dagaz.Model.PostProcessing;

Dagaz.Model.PostProcessing = function(board, moves) {
  var design = Dagaz.Model.design;
  _.each(moves, function(move) {
      if (move.mode == 2) {
          var src = move.actions[0][1][0];
          var dst = move.actions[0][0][0];
          var piece = board.getPiece(src);
          if (piece === null) return;
          move.movePiece(src, dst, piece);
      }
  });
  if (!_.isUndefined(PostProcessing)) {
      PostProcessing(board, moves);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(src) {
      var piece = board.getPiece(src);
      if (piece === null) return;
      if (piece.player != board.player) return;
      _.each(design.allPositions(), function(dst) {
          if (src == dst) return;
          var target = board.getPiece(dst);
          if (target === null) return;
          if (piece.type == target.type) return;
          if (target.player != board.player) return;
          var move = Dagaz.Model.createMove(1);
          move.movePiece(src, dst, piece);
          if ((target.type == 0) && design.inZone(0, piece.player, src)) {
              move.failed = true;
          } else if ((piece.type == 0) && design.inZone(0, piece.player, dst)) {
              move.mode = 2;
              var pieces = [];
              pieces.push(piece.promote(design.getPieceType("Bishop")));
              pieces.push(piece.promote(design.getPieceType("Knight")));
              pieces.push(piece.promote(design.getPieceType("Rook")));
              pieces.push(piece.promote(design.getPieceType("Queen")));
              move.actions[0][2] = pieces;
          } else {
              move.movePiece(dst, src, target);
          }
          board.moves.push(move);
      });
  });
  CheckInvariants(board);
}

})();
