(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-go-editor-extension") {
     checkVersion(design, name, value);
  }
}

var getUrl = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]r=([^&]*)/);
  if (result) {
      return result[1];
  }
  return 'chess-go-17x17-board.htm';
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  if (!url) {
       url = getUrl();
  }
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + "?setup="; 
  var b = 0; var w = 0;
  var prev = null; var cnt = 0;
  var r = [5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          var p = (piece.type % 2) + 1;
          if (p == 1) { b++; } else { w++; }
          var t = (piece.type / 2) | 0;
          s = s + t + ":" + p;
          if (piece.type >= 2) {
              r[piece.type - 2]--;
          }
      }
      if ((prev === null) || (prev != s)) {
          if (prev !== null) {
              url = url + prev;
              if (cnt > 0) {
                  url = url + "+" + cnt;
              }
              url = url + ";";
          }
          prev = s;
          cnt = 0;
      } else {
          cnt++;
      }
  });
  url = url + prev;
  if (cnt > 0) {
      url = url + "+" + cnt;
  }
  if (b == w + 1) {
      url = url + ";&turn=1";
  } else {
      url = url + ";&turn=0";
  }
  url = url + "&reserve=500,"+r[0]+","+r[2]+","+r[4]+","+r[6]+","+r[8]+","+r[10]+","+r[12]+","+
                      ";500,"+r[1]+","+r[3]+","+r[5]+","+r[7]+","+r[9]+","+r[11]+","+r[13]+",";
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
