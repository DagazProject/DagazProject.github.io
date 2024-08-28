(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dragon-eyes-setup") {
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

var getSetup = function() {
  var str = window.location.search.toString();
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

var addPiece = function(board, type, player, avail) {
  var ix = 0;
  if (avail.length > 1) {
      ix = _.random(0, avail.length - 1);
  }
  board.setPiece(avail[ix], Dagaz.Model.createPiece(type, player));
  return _.without(avail, avail[ix]);
}

var getAvailPositions = function(design) {
  var r = [];
  for (var pos = 0; pos < design.positions.length; pos++) {
      if (design.isKilledPos(pos)) continue;
      if (design.inZone(0, 1, pos)) continue;
      r.push(pos);
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
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var design = Dagaz.Model.design;
  var avail  = getAvailPositions(design);
  for (var i = 0; i < 42; i++) {
      avail = addPiece(board, 0, 1, avail);
      avail = addPiece(board, 0, 2, avail);
  }
}

})();
