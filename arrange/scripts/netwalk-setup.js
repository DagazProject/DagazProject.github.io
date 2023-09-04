(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "netwalk-setup") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.play)) {
    Dagaz.Controller.addSound(0, "../sounds/on.wav", true);
    Dagaz.Controller.addSound(2,  "../sounds/win.wav", true);
}

var getSetup = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "";
  }
}

var getSeed = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]seed=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "" + _.random(0, 10000);
  }
}

var checkAround = function(design, board, pos) {
  var r = true;
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(1, pos, dir);
      if ((p === null) || (board.getPiece(p) !== null)) {
          r = false;
          return;
      }
  });
  return r;
}

var getMask = function(design, board, pos) {
  var neighbors = 0; var forbidden = 0;
  var dirs = [3, 1, 0, 2]; // n, e, s, w
  var mask = [1, 0, 3, 2]; // s, w, n, e
  while (dirs.length > 0) {
      neighbors = neighbors << 1;
      forbidden = forbidden << 1;
      var dir = dirs.shift();
      var m = 1 << mask.shift();
      var p = design.navigate(1, pos, dir);
      if (p !== null) {
          var piece = board.getPiece(p);
          if (piece !== null) {
              var flags = design.price[piece.type];
              if ((flags & m) == m) {
                  neighbors++;
              } else {
                  forbidden++;
              }
          }
      } else {
          forbidden++;
      }
  }
  return {
     n: neighbors,
     f: forbidden
  };
}

var getType = function(design, mask) {
  // 4 - если все соседи
  if (mask.n == 15) return 13;
  // 3 - точное соответсвие
  for (var t = 9; t < 13; t++) {
       if (design.price[t] == mask.n) return t;
  }
  // 3 - подходящие по 2 или 1 соседям (с учётом запретов)
  var types = []
  for (var t = 9; t < 13; t++) {
       if (((design.price[t] & mask.n) == mask.n) && ((design.price[t] & mask.f) == 0)) {
           types.push(t);
       }
  }
  if (types.length == 0) {
      // 2 - подходящие по 2 или 1 соседям (с учётом запретов)
      for (var t = 1; t < 9; t++) {
           if (((design.price[t] & mask.n) == mask.n) && ((design.price[t] & mask.f) == 0)) {
               types.push(t);
           }
      }
  }
  if (types.length > 0) {
      var ix = 0;
      if (types.length > 1) {
          ix = _.random(0, types.length - 1);
      }
      return types[ix];
  }
  // 1 - подходящие по одному соседу
  for (var t = 14; t < 18; t++) {
       if (design.price[t] == mask.n) return t;
  }
  return null;
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board) {
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  if (getSetup()) {
      setup(board);
      return;
  }
  var design = Dagaz.Model.design;
  var queue = [];
  var cnt = _.random(2, 5);
  var piece = Dagaz.Model.createPiece(0, 1);
  while (cnt > 0) {
      var pos = _.random(0, design.positions.length - 10);
      if ((board.getPiece(pos) === null) && checkAround(design, board, pos)) {
          board.setPiece(pos, piece);
          queue.push(pos);
          cnt--;
      }
  }
  while (queue.length > 0) {
      var pos = queue.shift();
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var flags = design.price[piece.type];
          var dirs  = [3, 1, 0, 2]; // n, e, s, w
          while (dirs.length > 0) {
              var dir = dirs.pop();
              if ((flags & 1) == 1) {
                  var p = design.navigate(1, pos, dir);
                  if ((p !== null) && (board.getPiece(p) === null)) {
                      var m = getMask(design, board, p);
                      var t = getType(design, m);
                      if (t !== null) {
                          board.setPiece(p, Dagaz.Model.createPiece(t, 1));
                          queue.push(p);
                      }
                  }
              }
              flags = flags >> 1;
          }
      }
  }
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var t = null;
          if ((piece.type >= 1) && (piece.type <= 4)) {
              t = _.random(1, 4);
          }
          if ((piece.type >= 5) && (piece.type <= 8)) {
              t = _.random(5, 8);
          }
          if ((piece.type >= 9) && (piece.type <= 12)) {
              t = _.random(9, 12);
          }
          if (t !== null) {
              board.setPiece(pos, piece.promote(t));
          }
      }
  });
}

var isSolved = function(design, board) {
  for (var pos = 0; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var flags = design.price[piece.type];
           var mask = getMask(design, board, pos);
           if (mask.n != flags) return false;
       }
  }
  return true;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (isSolved(design, board)) return 1;
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = move.actions[0][2][0];
      var b = board.apply(move);
      if (isSolved(design, b)) {
          _.each(design.allPositions(), function(p) {
              if (p == pos) return;
              var x = board.getPiece(p);
              if (x !== null) {
                  move.movePiece(p, p, x.promote(x.type + 18));
              }
          });
          move.actions[0][2] = [piece.promote(piece.type + 18)];
      }
  });
  CheckInvariants(board);
}

})();
