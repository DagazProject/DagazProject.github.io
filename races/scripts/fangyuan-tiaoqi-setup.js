(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fangyuan-tiaoqi-setup") {
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

var getPositions = function(design, player) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(0, player, pos)) return;
      r.push(pos);
  });
  return r;
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
  for (p = 1; p < 3; p++) {
       var positions = getPositions(design, design.nextPlayer(p));
       for (t = 0; t < 2; t++) {
            var piece = Dagaz.Model.createPiece(t, p);
            for (var i = 0; i < design.reserve[t][p]; i++) {
                 var ix = 0;
                 if (positions.length > 1) {
                     ix = _.random(0, positions.length - 1);
                 }
                 board.setPiece(positions[ix], piece);
                 positions = _.without(positions, positions[ix]);
            }
       }
  }
}

})();
