(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "apocalypse-promotion") {
     checkVersion(design, name, value);
  }
}

var getPiece = function(design, board, move) {
  if (move.isSimpleMove()) {
      return board.getPiece(move.actions[0][0][0]);
  } else {
      return null;
  }
}

var countPieces = function(design, board, type, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
          r++;
      }
  });
  return r;
}

var checkPromotion = function(design, board, move, piece, opponent) {
  var knight = design.getPieceType("Knight");
  var limit  = 2 - countPieces(design, board, knight, piece.player);
  if ((opponent.actions[0][1] !== null) && (move.actions[0][0] !== null) && (opponent.actions[0][1][0] !== move.actions[0][0][0])) {
      var target = board.getPiece(opponent.actions[0][1][0]);
      if ((target !== null) && (target.type == knight) && (target.player == piece.player)) {
          limit++;
      }
  }
  if ((move.actions[0][2] !== null) && (move.actions[0][2][0].type != piece.type) && (limit <= 0)) {
       move.actions[0][2] = [ piece ];
  }
}

Dagaz.Model.join = function(design, board, a, b) {
  var x = getPiece(design, board, a);
  var y = getPiece(design, board, b);
  if ((x !== null) && (y !== null)) {
      var r = Dagaz.Model.createMove();
      r.protected = [];
      checkPromotion(design, board, a, x, b);
      checkPromotion(design, board, b, y, a);
      var p = a.actions[0][1][0];
      var q = b.actions[0][1][0];
      if ((p == q) && (+x.type > +y.type)) {
          r.actions.push(b.actions[0]);
          r.actions.push(a.actions[0]);
      } else {
          r.actions.push(a.actions[0]);
          r.actions.push(b.actions[0]);
      }
      if (p == q) {
          if (+x.type > +y.type) {
              r.actions[0][2] = [ Dagaz.Model.createPiece(2, 2) ];
              r.protected.push(x.player);
              r.captured = p;
          } else {
              if (+x.type == +y.type) {
                  r.actions[0][2] = [ Dagaz.Model.createPiece(2, 1) ];
                  r.actions[1][2] = [ Dagaz.Model.createPiece(2, 1) ];
                  r.capturePiece(p);
              } else {
                  r.actions[0][2] = [ Dagaz.Model.createPiece(2, 1) ];
                  r.protected.push(y.player);
                  r.captured = p;
              }
          }
      }
      return r;
  } else {
      return a;
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var knight  = design.getPieceType("Knight");
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == knight)) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 1) {
      if (enemies == friends) {
          return 0;
      } else {
          return 1;
      }
  }
  if (friends < 1) {
      return -1;
  }
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove() && (move.mode == 0)) {
          var pos = design.navigate(board.player, move.actions[0][1][0], n);
          if (pos === null) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
