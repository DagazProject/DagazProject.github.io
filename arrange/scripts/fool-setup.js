(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-setup") {
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

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-advisor", "");
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
      return result;
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

var getTurn = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]turn=(\d+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]turn=(\d+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

function createPiece(board, pos, player, avail) {
  var ix = 0;
  if (avail.length > 1) {
      ix = _.random(0, avail.length - 1);
  }
  var t = avail[ix];
  var piece = Dagaz.Model.createPiece(t, player);
  board.setPiece(pos, piece);
  return _.without(avail, t);
}

var commonSetup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  if (setup) {
      commonSetup(board, init);
  } else {
      var avail = _.range(36);
      _.each([24, 26, 28, 30, 32, 34], function(pos) {
          avail = createPiece(board, pos, 1, avail);
      });
      _.each([40, 46, 52, 58, 64, 70], function(pos) {
          avail = createPiece(board, pos, 2, avail);
      });
      _.each([41, 47, 53, 59, 65, 71], function(pos) {
          avail = createPiece(board, pos, 3, avail);
      });
      avail = createPiece(board, 88, 1, avail);
      _.each([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], function(pos) {
          avail = createPiece(board, pos, 4, avail);
      });
  }
}

})();
