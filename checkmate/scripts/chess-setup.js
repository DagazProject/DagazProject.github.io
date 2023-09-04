(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-setup") {
      checkVersion(design, name, value);
  }
}

var getSetup = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "";
  }
}

var isSame = function(a, b) {
  var row = (a / 8) | 0;
  if (row % 2 != 0) {
      a++;
  }
  row = (b / 8) | 0;
  if (row % 2 != 0) {
      b++;
  }
  return (a + b) % 2 == 0;
}

var notValid = function(design, board, pos, piece) {
  if (board.getPiece(pos) !== null) return true;
  var bishop = design.getPieceType("Bishop");
  if (piece.type == bishop) {
      var p = Dagaz.Model.findPiece(design, board, piece.player, bishop);
      if ((p !== null) && isSame(pos, p)) {
          return true;
      }
  }
  return Dagaz.Model.checkPositions(design, board, piece.player, [ pos ]);
}

var getPosition = function(design, board, piece, positions) {
  var ix = _.random(0, positions.length - 1);
  while (notValid(design, board, positions[ix], piece)) {
      ix = _.random(0, positions.length - 1);
  }
  return positions[ix];
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  if (getSetup(init)) {
      setup(board, init);
      return;
  }
  var design = Dagaz.Model.design;
  var positions = _.range(64);
  if (!_.isUndefined(design.reserve)) {
      _.each(_.keys(design.reserve), function(type) {
          _.each(_.keys(design.reserve[type]), function(player) {
               var piece = Dagaz.Model.createPiece(+type, +player);
               for (var i = 0; i < design.reserve[type][player]; i++) {
                    var pos = getPosition(design, board, piece, positions);
                    board.setPiece(pos, piece);
                    positions = _.without(positions, pos);
               }
          });
      });
  }
}

})();
