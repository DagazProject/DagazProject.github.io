(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "musketeers-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  board.generate();
  if (board.moves.length == 0) {
      if (player == 1) {
          return -1;
      } else {
          return 1;
      }
  }
  var list = _.chain(design.allPositions())
   .filter(function(pos) {
       var piece = board.getPiece(pos);
       if (piece === null) return false;
       return (+piece.type > 0);
    })
   .map(function(pos) {
       return {
           x: pos % 5,
           y: (pos / 5) | 0
       };
    }).value();
  if (_.chain(list)
       .map(function(p) {
           return p.x;
        })
       .uniq().size().value() == 1) return -1;
  if (_.chain(list)
       .map(function(p) {
           return p.y;
        })
       .uniq().size().value() == 1) return -1;
  return checkGoals(design, board, player);
}

})();
