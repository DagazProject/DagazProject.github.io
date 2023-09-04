(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "evoluchess-split") {
     checkVersion(design, name, value);
  }
}

var PostProcessing = Dagaz.Model.PostProcessing;

Dagaz.Model.PostProcessing = function(board, moves) {
  var design = Dagaz.Model.design;
  _.each(moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (move.actions[0][2] === null) return;
      if (move.actions[0][2].length != 1) return;
      if (move.actions[0][2][0].type != 1) return;
      if (move.actions[0][2][0].type == piece.type) return;
      move.dropPiece(pos, move.actions[0][2][0]);
  });
  if (!_.isUndefined(PostProcessing)) {
      PostProcessing(board, moves);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      if (!design.inZone(1, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if ((piece.type != 2) && (piece.type != 4)) return;
      var positions = [];
      var dirs = [1, 3, 4, 7];
      if (piece.type == 4) {
          dirs = [0, 2, 5, 6];
      }
      _.each(dirs, function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          positions.push(p);
      });
      pos = move.actions[0][1][0];
      if (_.indexOf(positions, +pos) < 0) return;
      if (board.getPiece(pos) !== null) return;
      move.actions[0][2] = [piece, piece.promote(1)];
  });
  CheckInvariants(board);
}

})();
