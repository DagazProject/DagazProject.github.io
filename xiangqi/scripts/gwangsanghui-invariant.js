(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gwangsanghui-invariant") {
     checkVersion(design, name, value);
  }
}

var isOpposite = function(design, board, king) {
  var pos = null;
  var player = null;
  _.each(design.allPositions(), function(p) {
      if (design.inZone(0, board.player, p)) {
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.player != board.player) && (piece.type == king)) {
              pos = p;
              player = piece.player;
          }
      }
  });
  if (pos !== null) {
      var n = design.getDirection("n");
      var p = design.navigate(player, pos, n);
      while (p !== null) {
          var piece = board.getPiece(p);
          if (piece !== null) {
              if (piece.type == king) {
                  return true;
              }
              break;
          }
          p = design.navigate(player, p, n);
      }
  }
  return false;
}

var isDraw = function(design, board, king) {
  if (board.parent === null) return false;
  if (isOpposite(design, board, king)) {
      return isOpposite(design, board.parent, king);
  }
  return false;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  if (isDraw(design, board, king)) {
      return 0;
  }
  var friends = 0;
  var enemies = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == king)) {
          if (piece.player == player) {
              friends++;
          } else {
              enemies++;
          }
      }
  });
  if (enemies == 0) {
      return 1;
  }
  if (friends == 0) {
      return -1;
  }
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var c  = design.getPieceType("Cannon");
  var ec = design.getPieceType("EastCannon");
  var wc = design.getPieceType("WestCannon");
  if (board.parent === null) {
      _.each(board.moves, function(m) {
          if ((m.actions.length == 1) && (m.actions[0][0] !== null)) {
               var pos   = m.actions[0][0];
               var piece = board.getPiece(pos);
               if ((piece !== null) && ((piece.type == c) || (piece.type == ec) || (piece.type == wc))) {
                   m.failed = true;
               }
          }
      });
  }
  var fw = design.getPieceType("Forward");
  var bw = design.getPieceType("Backward");
  _.each(board.moves, function(m) {
      if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
          var pos = m.actions[0][1][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) &&
             ((piece.type == fw) || (piece.type == bw))) {
             m.capturePiece(pos);
          }
      }
  });
  CheckInvariants(board);
}

})();
