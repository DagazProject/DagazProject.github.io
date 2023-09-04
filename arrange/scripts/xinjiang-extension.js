(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "xinjiang-extension") {
     checkVersion(design, name, value);
  }
}

var isFilled = function(board, player, pos, empty) {
  if ((empty !== null) && (pos == empty)) return false;
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  return piece.player == player;
}

var isVector = function(design, board, player, pos, dir) {
  var r = 0;
  while (isFilled(board, player, pos, null)) {
      r++;
      pos = design.navigate(player, pos, dir);
      if (pos === null) break;
  }
  return r == 7;
}

var isLine = function(design, board, player, pos, empty, dir, zPart) {
  var z = Dagaz.Model.getZobristHash();
  var v = z.update(0, player, 0, pos);
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (!isFilled(board, player, p, empty)) return false;
      v = z.update(v, player, 0, p);
      p = design.navigate(player, p, dir);
  }
  p = design.navigate(0, pos, dir);
  while (p !== null) {
      if (!isFilled(board, player, p, empty)) return false;
      v = z.update(v, player, 0, p);
      if (!_.isUndefined(zPart)) {
          if (_.isUndefined(zPart.positions)) {
              zPart.positions = [];
          }
          if (_.indexOf(zPart.positions, p) < 0) zPart.positions.push(p);
      }
      p = design.navigate(0, p, dir);
  }
  if (!_.isUndefined(zPart)) {
      zPart.push(v);
  }
  return true;
}

Dagaz.Model.addForm = function(board, player, pos) {
  var r = 0;
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var e = design.getDirection("e");
  if (isVector(design, board, player, pos, n)) r += 3;
  if (isVector(design, board, player, pos, e)) r += 3;
  return r;
}

var calcForms = Dagaz.Model.calcForms;

Dagaz.Model.calcForms = function(board, player, pos, empty, zPart) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var e = design.getDirection("e");
  var r = calcForms(board, player, pos, empty, zPart);
  if (isLine(design, board, player, pos, empty, n, zPart)) r += 3;
  if (isLine(design, board, player, pos, empty, e, zPart)) r += 3;
  return r;
}

Dagaz.Model.addKo = function(board, move, zPart) {
  var positions = [];
  if (move.isDropMove()) {
      positions = [ move.actions[0][1][0] ];
  } else {
      if (!_.isUndefined(zPart) && !_.isUndefined(zPart.positions)) {
          positions = zPart.positions;
      }
  }
  _.each(positions, function(pos) {
       if (_.isUndefined(board.ko)) {
           board.ko = [];
       }
       if (_.indexOf(board.ko, pos) < 0) {
           board.ko.push(pos);
       }
  });
}

})();
