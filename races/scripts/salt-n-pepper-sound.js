(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "salt-n-pepper-sound") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg");
    Dagaz.Controller.addSound(1, "../sounds/slide.ogg");
    Dagaz.Controller.addSound(2, "../sounds/slide.ogg");
    Dagaz.Controller.addSound(3, "../sounds/slide.ogg");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var sound  = 0;
  var b = board;
  if (!_.isUndefined(b.move) && (b.parent !== null)) {
      if (b.move.isPass()) b = b.parent;
      if (!_.isUndefined(b.move)) {
          sound = b.move.sound + 1;
          if (sound > 3) sound = 0;
      }
  }
  _.each(board.moves, function(move) {
      move.sound = sound;
  });
  CheckInvariants(board);
}

})();
