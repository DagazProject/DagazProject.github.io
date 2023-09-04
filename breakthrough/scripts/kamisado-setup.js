(function() {

var checkVersion = Dagaz.Model.checkVersion;
var percent = 0;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "kamisado-setup") {
      percent = +value;
  } else {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (_.random(0, 100) < percent)) {
          piece = piece.promote(+piece.type + 1);
          board.setPiece(pos, piece);
      }
  });
}

})();
