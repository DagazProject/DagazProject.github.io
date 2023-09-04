(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klondike-setup") {
     checkVersion(design, name, value);
  }
}

var createPieces = function(design) {
  var r = [];
  for (t = 0; t < 13; t++) {
      for (p = 1; p <= 4; p++) {
          r.push(Dagaz.Model.createPiece(t * 2, p));
      }
  }
  return r;
}

var without = function(avail, ix) {
  var r = [];
  for (var i = 0; i < avail.length; i++) {
      if (i != ix) r.push(avail[i]);
  }
  return r;
}

var addPiece = function(board, pos, f, avail) {
  var ix = 0;
  if (avail.length > 1) {
      ix = _.random(0, avail.length - 1);
  }
  var piece = avail[ix];
  if (f) piece = piece.promote(+piece.type + 1);
  board.setPiece(pos + 7, piece);
  return without(avail, ix);
}

var shuffle = function(avail) {
  var r = [];
  while (avail.length > 0) {
      var ix = 0;
      if (avail.length > 1) {
          ix = _.random(0, avail.length - 1);
      }
      r.push(avail[ix]);
      avail = without(avail, ix);
  }
  return r;
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

Dagaz.Model.setup = function(board) {
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var design = Dagaz.Model.design;
  var avail  = createPieces(design);
  var o = 0;
  for (var y = 0; y < 7; y++, o++) {
       var f = true;
       for (var x = o; x < 7; x++) {
            var pos = y * 7 + x;
            avail = addPiece(board, pos, f, avail);
            f = false;
       }
  }
  var piece = board.getPiece(0);
  if (piece !== null) {
      avail = _.map(avail, function(piece) {
          return piece.promote(+piece.type + 1);
      });
      avail = shuffle(avail);
      piece = piece.setValue(0, avail);
      board.setPiece(0, piece);
  }
}

})();
