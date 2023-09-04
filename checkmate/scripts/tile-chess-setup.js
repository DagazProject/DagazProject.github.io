(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tile-chess-setup") {
      checkVersion(design, name, value);
  }
}

var getSeed = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&](seed|sid)=([^&]*)/);
  if (result) {
      return result[2];
  } else {
      return "" + _.random(0, 10000);
  }
}

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "");
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

var homePositions = function(offset) {
  var r = [];
  for (var i = 0; i < 16; i++) {
      r.push(i + offset);
  }
  return r;
}

var availPositions = function(board) {
  var r = [];
  for (var pos = 0; pos < 64; pos++) {
       if (board.getPiece(pos) === null) {
           r.push(pos);
       }
  }
  return r;
}

var addPieces = function(board, type, cnt, positions) {
  for (var i = 0; i < cnt; i++) {
       var ix = 0;
       if (positions.length > 1) ix = _.random(0, positions.length - 1);
       var pos = positions[ix];
       var player = (pos >= 32) ? 1 : 2;
       var piece = Dagaz.Model.createPiece(type, player);
       board.setPiece(pos, piece);
       positions = _.without(positions, pos);
  }
  return positions;
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  if (getSetup(init)) {
      setup(board, init);
      return;
  }
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var design = Dagaz.Model.design;
  var positions = homePositions(0);
  positions = addPieces(board, 4, 4, positions);
  positions = homePositions(48);
  positions = addPieces(board, 4, 4, positions);
  positions = availPositions(board);
  positions = addPieces(board, 4, 8, positions);
  positions = addPieces(board, 3, 12, positions);
  positions = addPieces(board, 2, 12, positions);
  positions = addPieces(board, 1, 12, positions);
  positions = addPieces(board, 0, 12, positions);
}

})();
