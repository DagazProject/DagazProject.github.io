(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chaturaji-promotion") {
      checkVersion(design, name, value);
  }
}

var getType = function(design, board, player, pos) {
  var r = null;
  if (design.inZone(3, player, pos)) r = 6;
  if (design.inZone(4, player, pos)) r = 7;
  if (design.inZone(5, player, pos)) r = 8;
  if (design.inZone(6, player, pos)) r = 4;
  if (r !== null) {
      _.each(design.allPositions(), function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player != player) return;
          if (piece.type != r) return;
          r = null;
      });
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 5) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 5) return;
      pos = move.actions[0][1][0];
      if (!design.inZone(0, board.player, pos)) return;
      var type = getType(design, board, board.player, pos);
      if (type === null) return;
      move.actions[0][2] = [ piece.promote(type) ];
  });
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type != 5) return;
      if (!design.inZone(0, piece.player, pos)) return;
      var type = getType(design, board, board.player, pos);
      if (type !== null) {
          var move = Dagaz.Model.createMove(5);
//        move.mode = 1;         
          move.movePiece(pos, pos, piece.promote(type));
          board.moves.push(move);
      }
  });
  CheckInvariants(board);
}

})();
