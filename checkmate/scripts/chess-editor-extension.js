(function() {

Dagaz.Model.TO_CHAR = 'PpRrNnBbQqKk';

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-editor-extension") {
     checkVersion(design, name, value);
  }
}

var getUrl = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]r=([^&]*)/);
  if (result) {
      return result[1];
  }
  return 'chess-board.htm';
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
  var t = getTurn();
  if (Dagaz.Model.checkTurn) {
      t = Dagaz.Model.checkTurn(t, url);
  }
  url = url + '?turn=' + t + '&setup='; 
  var k = 0; var c = 0;
  for (var pos = 0; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos++) {
       if (k >= Dagaz.Model.WIDTH) {
           if (c > 0) {
               url += c;
           }
           url += "/";
           k = 0;
           c = 0;
       }
       k++;
       if (design.isKilledPos(pos)) {
           if (c > 0) {
               url += c;
           }
           c = 0;
           url += 'X';
       } else {
           var piece = board.getPiece(pos);
           if (piece === null) {
               if (c > 8) {
                   url += c;
                   c = 0;
               }
               c++;
           } else {
               if (c > 0) {
                   url += c;
               }
               c = 0;
               url += Dagaz.Model.TO_CHAR[piece.type];
           }
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
