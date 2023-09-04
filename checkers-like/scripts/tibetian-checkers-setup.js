(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tibetian-checkers-setup") {
     checkVersion(design, name, value);
  }
}

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-kanji", "");
  } else {
      return str;
  }
}

var badName = function(str) {
  var result = str.match(/[?&]game=([^&*]*)/);
  if (result) {
      return result[1] != getName();
  } else {
      return true;
  }
}

var getCookie = function() {
  var result = localStorage.getItem('dagaz.setup');
  if (result) {
      if (badName(result)) return "";
      return "?setup=" + result;
  } else {
      return "";
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
      str = getCookie();
      result = str.match(/[?&]setup=([^&]*)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
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

var addPiece = function(board, piece, positions) {
  if (positions.length == 0) return;
  var pos = positions[0];
  if (positions.length > 1) {
      var ix = _.random(0, positions.length - 1);
      var pos = positions[ix];
      positions = _.without(positions, pos);
  } else {
      positions = [];
  }
  board.setPiece(pos, piece);
  return positions;
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board) {
  if (getSetup()) {
      setup(board);
      return;
  }
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var design = Dagaz.Model.design;
  var positions = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 1)) {
          board.setPiece(pos, null);
          return;
      }
      positions.push(pos);
  });
  var n = (positions.length / 2) | 0;
  var piece = Dagaz.Model.createPiece(0, 1);
  for (var i = 0; i < n; i++) {
      positions = addPiece(board, piece, positions);
  }
  piece = Dagaz.Model.createPiece(0, 2);
  for (var i = 0; i < n; i++) {
      positions = addPiece(board, piece, positions);
  }
}

})();
