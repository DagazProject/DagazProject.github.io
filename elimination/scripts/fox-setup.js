(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fox-setup") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  for (var i = 0; i < 8; i++) {
       var pos = _.random(0, design.positions.length - 1);
       var piece = board.getPiece(pos);
       while (piece !== null) {
           pos = _.random(0, design.positions.length - 1);
           piece = board.getPiece(pos);
       }
       board.setPiece(pos, Dagaz.Model.createPiece(9, 1));
  }
}

})();
