(function() {

var BONUS    = 10;
var MAXVALUE = 1000;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "nubia-extension") {
     checkVersion(design, name, value);
  }
}

var bonus = function(design, board, pos, player, dir) {
  var r = 0;
  var f = false;
  var p = design.navigate(0, pos, dir);
  if (p !== null) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != player)) {
          f = true;
      }
  }
  p = design.navigate(player, pos, dir);
  if (f && (p !== null) && (board.getPiece(p) === null)) {
      r += BONUS;
  }  
  while ((p !== null) && (board.getPiece(p) === null)) {
      if (design.inZone(0, player, p)) {
          return MAXVALUE;
      }
      p = design.navigate(player, p, dir);
  }
  return r;
}

var price = function(design, board, pos, player) {
  var r = 1;
  _.each(design.allDirections(), function(dir) {
      r += bonus(design, board, pos, player, dir);
  });
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = price(design, board, pos, piece.player);
          if (piece.player != player) {
              v = -1;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
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

var getX = function(pos) {
  return pos % 8;
}

var getY = function(pos) {
  return (pos / 8) | 0;
}

var sign = function(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var src = move.actions[0][0][0];
          var dst = move.actions[0][1][0];
          var dx  = sign(getX(dst) - getX(src));
          var dy  = sign(getY(dst) - getY(src));
          dst = src + (dy * 8) + dx;
          var dir = design.findDirection(src, dst);
          if (dir !== null) {
              var pos = design.navigate(0, src, dir);
              if (pos !== null) {
                  var piece = board.getPiece(pos);
                  if ((piece !== null) && (piece.player != board.player)) {
                      move.capturePiece(pos);
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
