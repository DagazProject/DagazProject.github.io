(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "magyar-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isPass()) return -1;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          if (a[1] === null) {
              r += 100;
          } else {
              if (a[0][0] == a[1][0]) r += 10;
          }
      }
  });
  return r;
}

var getPrice = function(piece) {
  var r = 10;
  var v = piece.getValue(0);
  while ((v !== null) && (v != "")) {
      if (+v.substr(v.length - 1, 1) != piece.player) break;
      v = v.substr(0, v.length - 1);
      r += 10;
  }
  return r;
}

var isAttackedDir = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  p = design.navigate(0, pos, dir);
  if (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  p -= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT;
  return board.getPiece(p) !== null;
}

var isAttacked = function(design, board, player, pos) {
  return isAttackedDir(design, board, player, pos, design.getDirection("w"))  ||
         isAttackedDir(design, board, player, pos, design.getDirection("nw")) ||
         isAttackedDir(design, board, player, pos, design.getDirection("ne")) ||
         isAttackedDir(design, board, player, pos, design.getDirection("e"))  ||
         isAttackedDir(design, board, player, pos, design.getDirection("se")) ||
         isAttackedDir(design, board, player, pos, design.getDirection("sw"));
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 1)) {
          var price = getPrice(piece);
          if (isAttacked(design, board, piece.player, pos)) {
              price = (price / 2) | 0;
          }
          if (piece.player == player) {
              r += price;
          } else {
              r -= price;
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 1)) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 1) {
      return 1;
  }
  if (friends < 1) {
      return -1;
  }
  return checkGoals(design, board, player);
}

})();
