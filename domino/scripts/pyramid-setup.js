(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pyramid-setup") {
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

var getSeed = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]seed=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "" + _.random(0, 10000);
  }
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
  var pieces = [];
  for (var i = 0; i < 28; i++) {
       pieces.push(i);
  }
  _.each(design.allPositions(), function(pos) {
       if (!design.inZone(0, 1, pos)) return;
       var ix = 0;
       if (pieces.length > 1) {
           ix = _.random(0, pieces.length - 1);
       }
       var piece = Dagaz.Model.createPiece(pieces[ix], 1);
       if (design.inZone(1, 1, pos)) {
           piece = piece.changeOwner(2);
       }
       board.setPiece(pos, piece);
       if (pieces.length > 1) {
           pieces = _.without(pieces, pieces[ix]);
       }
  });
}

})();
