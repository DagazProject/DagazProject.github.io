(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "retrograde-chess-editor-extension") {
     checkVersion(design, name, value);
  }
}

var toChar = function(n) {
  if (n < 10) {
      return String.fromCharCode("0".charCodeAt(0) + n);
  } else {
      return String.fromCharCode("A".charCodeAt(0) + n - 10);
  }
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + "?setup="; 
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type % 2 != 0) return;
      url = url + toChar((+piece.type / 2) | 0);
      url = url + Dagaz.Model.posToString(pos);
      url = url + ";";
  });
  url = url + "-";
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type % 2 == 0) return;
      url = url + toChar(((+piece.type - 1) / 2) | 0);
      url = url + Dagaz.Model.posToString(pos);
      url = url + ";";
  });
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
