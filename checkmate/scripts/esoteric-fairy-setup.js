(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "esoteric-fairy-setup") {
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
      return result[1].replace("-board", "").replace("-ai", "").replace("-kanji", "").replace("-opened", "");
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

var addPiece = function(board, type, player, avail) {
  var ix = 0;
  if (avail.length > 1) {
      ix = _.random(0, avail.length - 1);
  }
  board.setPiece(avail[ix], Dagaz.Model.createPiece(type, player));
  return _.without(avail, avail[ix]);
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

var addPiece = function(board, type, player, cnt, avail) {
  for (;cnt > 0; cnt--) {
     var ix = 0;
     if (avail.length > 1) {
         ix = _.random(0, avail.length - 1);
     }
     board.setPiece(avail[ix], Dagaz.Model.createPiece(type, player));
     avail = _.without(avail, avail[ix]);
  }
  return avail;
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
  var avail  = _.filter(design.allPositions(), function(pos) {
      return design.inZone(1, 1, pos);
  });
  avail = addPiece(board,  1, 1, 9, avail); avail = addPiece(board,  1, 2, 9, avail);
  avail = addPiece(board,  3, 1, 4, avail); avail = addPiece(board,  3, 2, 4, avail);
  avail = addPiece(board,  5, 1, 4, avail); avail = addPiece(board,  5, 2, 4, avail);
  avail = addPiece(board,  7, 1, 6, avail); avail = addPiece(board,  7, 2, 6, avail);
  avail = addPiece(board,  9, 1, 6, avail); avail = addPiece(board,  9, 2, 6, avail);
  avail = addPiece(board, 11, 1, 6, avail); avail = addPiece(board, 11, 2, 6, avail);
  avail = addPiece(board, 13, 1, 1, avail); avail = addPiece(board, 13, 2, 1, avail);
}

})();
