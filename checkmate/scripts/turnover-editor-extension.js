(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "turnover-editor-extension") {
     checkVersion(design, name, value);
  }
}

var getUrl = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]r=([^&]*)/);
  if (result) {
      return result[1];
  }
  return 'turnover-board.htm';
}

var getTurn = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]t=(\d+)/);
  if (result) {
      return result[1];
  }
  return 0;
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  if (!url) {
       url = getUrl();
  }
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  var fen = '8/8/8/8/8/8/8/8';
  var setup = Dagaz.Model.getSetup(design, board);
  var result = setup.match(/[?&]setup=([^&]*)/);
  if (result) {
      fen = result[1];
  }
  url = url + '?turn=' + getTurn() + '&setup=' + fen; 
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
