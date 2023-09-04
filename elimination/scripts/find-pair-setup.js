(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "find-pair-setup") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.play)) {
    Dagaz.Controller.addSound(Dagaz.Sounds.move, "../sounds/off.wav");
    Dagaz.Controller.addSound(Dagaz.Sounds.drop, "../sounds/page.wav");
    Dagaz.Controller.addSound(Dagaz.Sounds.win,  "../sounds/win.wav");
}

var getAvail = function(design, board) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      if (board.getPiece(pos) === null) {
          r.push(pos);
      }
  });
  return r;
}

var addPiece = function(board, type, player, avail) {
  var ix = 0;
  if (avail.length > 1) {
      ix = _.random(0, avail.length - 1);
  }
  board.setPiece(avail[ix], Dagaz.Model.createPiece(type, player));
  return _.without(avail, avail[ix]);
}

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  var avail = getAvail(design, board);
  for (var player = 1; player <= 4; player++) {
       for (var type = 12; type <= 36; type += 2) {
            avail = addPiece(board, type, player, avail);
       }
  }
  avail = addPiece(board, 10, 5, avail); 
  addPiece(board, 10, 5, avail);
}

})();
