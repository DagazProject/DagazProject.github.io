(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stratego-setup") {
      checkVersion(design, name, value);
  }
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

var locFlag = function(design, positions) {
  var range = _.filter(positions, function(pos) {
      return design.navigate(1, pos, 3) === null;
  });
  if (range.length == 0) return null;
  var ix = _.random(0, range.length - 1);
  return range[ix];
}

var addPiece = function(design, board, type, positions) {
  if (positions.length == 0) return [];
  if (positions.length > 1) {
      var ix = _.random(0, positions.length - 1);
      board.setPiece(positions[ix], Dagaz.Model.createPiece(type, 2));
      return _.without(positions, positions[ix]);
  } else {
      board.setPiece(positions[0], Dagaz.Model.createPiece(type, 2));
      return [];
  }
}

var addPieces = function(design, board, type, cnt, positions) {
  for (;(cnt > 0) && (positions.length > 0); cnt--) {
      positions = addPiece(design, board, type, positions);
  }
  return positions;
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board) {
  if (getSetup()) {
      setup(board);
      return;
  }
  var design = Dagaz.Model.design;
  var positions = _.filter(design.allPositions(), function(pos) {
      return design.inZone(0, 2, pos);
  });
  var flag = locFlag(design, positions);
  if (flag !== null) {
      board.setPiece(flag, Dagaz.Model.createPiece(0, 2));
      positions = _.without(positions, flag);
      var cnt = 6;
      _.each(design.allDirections(), function(dir) {
          var pos = design.navigate(1, flag, dir);
          if ((pos !== null) && (_.indexOf(positions, pos) >= 0)) {
              board.setPiece(pos, Dagaz.Model.createPiece(11, 2));
              positions = _.without(positions, pos);
              cnt--;
          }
      });
      positions = addPieces(design, board, 11, cnt, positions);
      positions = addPieces(design, board,  1,   1, positions);
      positions = addPieces(design, board,  2,   8, positions);
      positions = addPieces(design, board,  3,   5, positions);
      positions = addPieces(design, board,  4,   4, positions);
      positions = addPieces(design, board,  5,   4, positions);
      positions = addPieces(design, board,  6,   4, positions);
      positions = addPieces(design, board,  7,   3, positions);
      positions = addPieces(design, board,  8,   2, positions);
      positions = addPieces(design, board,  9,   1, positions);
      positions = addPieces(design, board, 10,   1, positions);
  }
}

})();
