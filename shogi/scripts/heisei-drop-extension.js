(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "heisei-drop-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
          var piece = board.getPiece(a[1][0]);
          if (piece !== null) {
              r += design.price[piece.type];
          }
      }
  });
  return r;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = design.price[piece.type];
              if (!design.inZone(1, piece.player, pos)) {
                  v = 1;
              }
              if (!Dagaz.AI.isFriend(board.player, piece.player)) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (!Dagaz.AI.isFriend(player, board.player)) {
      r = -r;
  }
  return r;
}

var isFriendNeighbour = function(design, board, player, pos) {
  var r = false;
  _.each(design.allDirections(), function(dir) {
      if (dir == 6) return;
      var p = design.navigate(player, pos, dir);
      if (p !== null) {
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.player == player)) {
              r = true;
          }
      }
  });
  return r;
}

var clearReserve = function(design, board, except, move) {
  _.each(design.allPositions(), function(pos) {
       if (!design.inZone(1, board.player, pos) && (pos != except)) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.player == board.player)) {
               move.capturePiece(pos);
           }
       }
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          if (!design.inZone(1, board.player, pos)) {
              pos = move.actions[0][1][0];
              if (isFriendNeighbour(design, board, board.player, pos)) {
                  clearReserve(design, board, pos, move);
              } else {
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
