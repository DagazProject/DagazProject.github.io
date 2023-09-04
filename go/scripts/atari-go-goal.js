(function() {

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "atari-go-goal") {
      checkVersion(design, name, value);
  }
}

var getPattern = function(board, x, y) {
  if ((x < 0) || (x >= Dagaz.Model.WIDTH))  return " ";
  if ((y < 0) || (y >= Dagaz.Model.HEIGHT)) return " ";
  var pos = y * Dagaz.Model.WIDTH + x;
  var piece = board.getPiece(pos);
  if (piece === null) return "0";
  var v = +piece.getValue(0);
  if (piece.player == board.player) {
      if (v === null) return "x";
      if (v == 1) return "a";
      if (v == 2) return "b";
      if (v == 3) return "c";
      if (v == 4) return "d";
      return "x";
  } else {
      if (v === null) return "X";
      if (v == 1) return "A";
      if (v == 2) return "B";
      if (v == 3) return "C";
      if (v == 4) return "D";
      return "X";
  }
}

Dagaz.AI.findPattern = function(pattern) {
  for (var i = 0; i < Dagaz.AI.Patterns.length; i++) {
      var result = pattern.match(Dagaz.AI.Patterns[i].re);
      if (result) {
          return Dagaz.AI.Patterns[i].price;
      }
  }
  return 0;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  var cnt = _.chain(board.pieces).compact().size().value();
  if (cnt == 0) {
      var pos = move.actions[0][1][0];
      if (pos == 40) {
          return 1;
      }
      return -1;
  }
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
      var p   = "";
      var f   = true;
      var pos = move.actions[0][1][0];
      var x   = Dagaz.Model.getX(pos);
      var y   = Dagaz.Model.getY(pos);
      for (var j = y - 2; j <= y + 2; j++) {
          for (var i = x - 2; i <= x + 2; i++) {
              var c = getPattern(board, i, j);
              if ((c !== " ") && (c !== "0")) f = false;
              p = p + c;
          }
      }
      if (f) return -1;
      v = Dagaz.AI.findPattern(p);
      if (v !== null) r = v;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (!_.isUndefined(board.move)) {
      var captures = _.filter(board.move.actions, function(a) {
          return (a[0] !== null) && (a[1] === null);
      });
      if (captures.length > 0) {
          if (board.player == player){
              return -1;
          } else {
              return 1;
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
