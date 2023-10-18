(function() {

var isForced = false;
var width    = 0;

var MATERIAL_FACTOR = 10;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "mancala-goal") {
      isForced = (value == "forced");
      if (value | 0 > 0) {
          width = value | 0;
      }
  } else {
      checkVersion(design, name, value);
  }
}

var getReserve = function(design, board, player, dir) {
  var pos = design.navigate(player, 0, dir);
  if (pos !== null) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          return piece.getValue(0);
      }
  }
  return 0;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  r += getReserve(design, board, player, 2) * MATERIAL_FACTOR;
  r -= getReserve(design, board, player, 3) * MATERIAL_FACTOR;
  for (var pos = design.positions.length - 3; pos >= 0; pos--) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           if (piece.player == player) {
               r++;
           } else {
               r--;
           }
       }
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return 1;
}

var checkCycle = function(board) {
  var s = []; var pos = width;
  for (var ix = 0; ix < width; ix++, pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var v = piece.getValue(0);
           if ((v !== null) && (v == 1)) s.push(ix);
       }
  } pos = width - 1;
  for (var ix = width; ix < width * 2; ix++, pos--) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var v = piece.getValue(0);
           if ((v !== null) && (v == 1)) s.push(ix);
       }
  }
  return (s.length == 2) && (s[1] - s[0] == width);
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var fr = getReserve(design, board, player, 2);
  var er = getReserve(design, board, player, 3);
  if (fr > Dagaz.Model.WIN_CNT) return 1;
  if (er > Dagaz.Model.WIN_CNT) return -1;
  var fc = 0; var ec = 0;
  for (var pos = design.positions.length - 3; pos >= 0; pos--) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var value = piece.getValue(0);
           if (value !== null) {
               if (piece.player == board.player) {
                   fc += value;
               } else {
                   ec += value;
               }
           }
       }
  }
/*if ((width > 0) && checkCycle(board)) {
      if (fr > er) return 1;
      if (fr < er) return -1;
      return 0;
  }*/
  if (!isForced && (fc == 0)) {
      if (board.player == player) {
          er += ec;
      } else {
          fr += ec;
      }
      if (fr > er) return 1;
      if (fr < er) return -1;
      return 0;
  }
  return checkGoals(design, board, player);
}

})();
