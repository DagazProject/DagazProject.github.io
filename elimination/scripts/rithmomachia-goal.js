(function() {

Dagaz.Model.WIDTH = 8;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rithmomachia-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (Dagaz.Model.isP(piece.type)) return;
              var v = design.price[piece.type];
              if (board.player != piece.player) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(ai, design, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (board.player != player) {
      r = -r;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var ec = 0; var es = 0; var fc = 0; var fs = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (Dagaz.Model.isP(piece.type)) return;
      if (player == piece.player) {
          fs += design.price[piece.type];
          fc++;
      } else {
          es += design.price[piece.type];
          ec++;
      }
  });
  if (fc <= 9) return -1;
  if (ec <= 9) return 1;
  if (design.playerNames[player] == "White") {
      if (fs <= 328) return -1;
      if (es <= 433) return 1;
  } else {
      if (fs <= 433) return -1;
      if (es <= 328) return 1;
  }
  return checkGoals(design, board, player);
}

})();
