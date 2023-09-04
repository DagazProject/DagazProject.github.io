(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mahjong-setup") {
     checkVersion(design, name, value);
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

var isBadDir = function(design, board, pos, dir) {
  var p = design.navigate(1, pos, dir);
  if ((p !== null) && design.inZone(0, 1, p)) {
      if (board.getPiece(p) !== null) return false;
      p = design.navigate(1, p, dir);
  }
  while ((p !== null) && design.inZone(0, 1, p)) {
      if (board.getPiece(p) !== null) return true;
      p = design.navigate(1, p, dir);
  }
  return false;
}

var isBadPosition = function(design, board, pos) {
  if (board.getPiece(pos) !== null) return true;
  if (isBadDir(design, board, pos, 1) || isBadDir(design, board, pos, 2)) return true;
  if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) {
      pos -= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT;
      if (board.getPiece(pos) === null) return true;
  }
  return false;
}

var getPositions = function(design, board) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 1, pos)) {
          if (isBadPosition(design, board, pos)) return;
          r.push(pos);
      }
  });
  return r;
}

var isBadSetup = function(design, board) {
  var r = false;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 1, pos) && (board.getPiece(pos) === null)) {
          r = true;
      }
  });
  return r;
}

Dagaz.Model.setup = function(board) {
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var design = Dagaz.Model.design;
  while (isBadSetup(design, board)) {
      _.each(design.allPositions(), function(pos) {
          board.setPiece(pos, null);
      });
      var positions = getPositions(design, board);
      while (positions.length > 1) {
          var piece = Dagaz.Model.createPiece(_.random(0, 36), 1);
          var ix = _.random(0, positions.length - 1);
          var pos = positions[ix];
          board.setPiece(pos, piece);
          positions = _.without(positions, pos);
          while ((piece !== null) && (positions.length > 0)) {
              if (positions.length > 1) {
                  ix = _.random(0, positions.length - 1);
              } else {
                  ix = 0
              }
              pos = positions[ix];
              if (isBadDir(design, board, pos, 1) || isBadDir(design, board, pos, 2)) continue;
              board.setPiece(pos, piece);
              piece = null;
          }
          positions = getPositions(design, board);
      }
  }
}

})();
