(function() {

var PATTERN = [
  3, 1, 4, 2, 5, 6, 0, 0,
  6, 5, 0, 0, 1, 3, 2, 4,
  2, 0, 0, 6, 4, 1, 3, 5,
  5, 4, 2, 3, 0, 0, 6, 1,
  4, 2, 3, 1, 0, 0, 5, 6,
  1, 3, 5, 4, 6, 2, 0, 0,
  0, 6, 1, 0, 3, 5, 4, 2,
  0, 0, 6, 5, 2, 4, 1, 3
];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "litter-setup") {
      checkVersion(design, name, value);
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

var getSeed = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&](seed|sid)=([^&]*)/);
  if (result) {
      return result[2];
  } else {
      return "" + _.random(0, 10000);
  }
}

var shuffle = function() {
  var r = [];
  var x = [0, 1, 2, 3, 4, 5, 6, 7];
  while (x.length > 0) {
      var ix = 0;
      if (x.length > 1) {
          ix = _.random(0, x.length - 1);
      }
      r.push(x[ix]);
      x = _.without(x, x[ix]);
  }
  return r;
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  var s = getSetup(init);
  if (s) {
      setup(board, init);
      return;
  }
  var design = Dagaz.Model.design;
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var X = shuffle(); var Y = shuffle();
  for (var i = 0; i < 8; i++) {
       var player = 1;
       if (i < 4) player = 2;
       for (var j = 0; j < 8; j++) {
            var type = PATTERN[Y[i] * 8 + X[j]];
            var piece = Dagaz.Model.createPiece(type, player);
            board.setPiece(i * 8 + j, piece);
       }
  }
}

})();
