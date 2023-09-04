(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "go-19x19-editor-extension") {
     checkVersion(design, name, value);
  }
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url, turn) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + "?turn=" + turn + "&setup="; 
  for (let row = 0; row < Dagaz.Model.HEIGHT; row++) {
      if (row != 0) url += '/';
      let empty = 0;
      for (let col = 0; col < Dagaz.Model.WIDTH; col++) {
           let piece = board.getPiece(row * Dagaz.Model.WIDTH + col);
           if (piece === null) {
               if (empty > 8) {
                   url += empty;
                   empty = 0;
               }
               empty++;
           } else {
               if (empty != 0) url += empty;
               empty = 0;
               if (piece.type == turn) {
                   url += 'w';
               } else {
                   url += 'b';
               }
           }
      }
      if (empty != 0) {
          url += empty;
      }
  }
  go(url);
}

var DIR_NAMES   = {
    "PageUp":    "u",
    "PageDown":  "d"
};

var onkeyup = window.onkeyup;

window.onkeyup = function(event) {
  var name = DIR_NAMES[event.key];
  if (_.isUndefined(event.key)) {
      name = DIR_NAMES[event.keyIdentifier];
  }
  var app = Dagaz.Controller.app;
  if (name == 'd') {
      app.mouseWheel(app.view, -1);
  }
  if  (name == 'u') {
      app.mouseWheel(app.view, 1);
  }
  if (onkeyup) {
      onkeyup(event);
  }
}

})();
