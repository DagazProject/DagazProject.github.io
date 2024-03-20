(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "duel-setup") {
      checkVersion(design, name, value);
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

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  if (getSetup(init)) {
      setup(board, init);
      return;
  }
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      if (board.getPiece(pos) !== null) return;
      for (var player = 1; player < 3; player++) {
           if (design.inZone(1, player, pos)) {
               var piece = Dagaz.Model.createPiece(_.random(1, 24), +player);
               board.setPiece(pos, piece);
           }
      }
  });
}

})();
