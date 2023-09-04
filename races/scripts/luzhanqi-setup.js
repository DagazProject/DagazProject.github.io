(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "luzhanqi-setup") {
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
      if (board.getPiece(pos) !== null) return;
      return design.inZone(4, 2, pos);
  });
  positions = addPieces(design, board, 0, 1, positions);
  positions = addPieces(design, board, 1, 1, positions);
  positions = addPieces(design, board, 2, 2, positions);
  positions = addPieces(design, board, 3, 2, positions);
  positions = addPieces(design, board, 4, 2, positions);
  positions = addPieces(design, board, 5, 2, positions);
  positions = addPieces(design, board, 6, 3, positions);
  positions = addPieces(design, board, 7, 3, positions);
  positions = addPieces(design, board, 8, 3, positions);
  positions = addPieces(design, board, 9, 2, positions);
}

})();
