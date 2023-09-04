(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chinese-capturing-setup") {
     checkVersion(design, name, value);
  }
}

var getSeed = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]seed=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return null;
  }
}

var getAvail = function(design) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 1, pos)) {
          r.push(pos);
      }
  });
  return r;
}

var without = function(avail, ix) {
  var r = [];
  for (var i = 0; i < avail.length; i++) {
      if (i != ix) r.push(avail[i]);
  }
  return r;
}

var addPiece = function(board, player, avail) {
  var ix = 0;
  if (avail.length > 1) {
      ix = _.random(0, avail.length - 1);
  }
  var pos = avail[ix];
  var piece = Dagaz.Model.createPiece(0, player);
  board.setPiece(pos, piece);
  return without(avail, ix);
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board) {
  var seed = getSeed();
  if (seed !== null) {
      if (seed == 0) {
          seed = _.random(0, 10000);
      }
      console.log("Seed: " + seed);
      var design = Dagaz.Model.design;
      var avail = getAvail(design);
      Math.seedrandom(seed);
      for (var player = 1; player <= 6; player++) {
           for (var i = 0; i < 6; i++) {
                avail = addPiece(board, player, avail);
           }
      }
      _.each(avail, function(pos) {
           board.setPiece(pos, null);
      });
  } else {
      setup(board);
  }
}

})();
