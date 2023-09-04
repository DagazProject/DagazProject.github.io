(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qxo-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.View.getDropPieces = function(design, board, pos) {
  var t = 0;
  while ((t < Dagaz.Model.PIECE_CNT) && (board.reserve[t][board.player] == 0)) {
      t++;
  }
  return [ Dagaz.Model.createPiece(t, board.player) ];
}

var decReserve = function(piece, move) {
  move.actions.push([ null, null, [{
      exec: function(board) {
          if (!_.isUndefined(board.reserve) &&
              !_.isUndefined(board.reserve[piece.type]) && 
              !_.isUndefined(board.reserve[piece.type][piece.player]) &&
              (board.reserve[piece.type][piece.player] > 0)) {
              board.reserve[piece.type][piece.player]--;
          }
      }
  }], 1]);
}

var isUniq = function(design, board, piece) {
  var r = true;
  _.each(design.allPositions(), function(pos) {
      var p = board.getPiece(pos);
      if ((p !== null) && (p.type == piece.type) && (p.player == piece.player)) r = false;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!_.isUndefined(board.move) && (board.move.mode == 10)) {
      board.moves = [];
  } else {
      _.each(board.moves, function(move) {
          if (move.isDropMove() && _.isUndefined(move.failed)) {
              var pos   = move.actions[0][1][0];
              var piece = move.actions[0][2][0];
              var p = design.navigate(1, pos, 8);
              while (p !== null) {
                  if (board.getPiece(p) === null) {
                      decReserve(piece, move);
                      move.actions[0][2][0] = [Dagaz.Model.createPiece(Dagaz.Model.PIECE_CNT * 2, board.player)];
                      var piece = piece.promote(+piece.type + Dagaz.Model.PIECE_CNT);
                      move.dropPiece(p, piece);
                      move.capturePiece(pos);
                      if (isUniq(design, board, piece)) {
                          move.mode = 10;
                      }
                      return;
                  }
                  p = design.navigate(1, p, 8);
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
