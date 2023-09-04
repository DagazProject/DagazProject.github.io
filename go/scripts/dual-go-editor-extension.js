(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dual-go-editor-extension") {
     checkVersion(design, name, value);
  }
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + "?setup="; 
  var b = 0; var w = 0;
  var prev = null; var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if ((piece !== null) && (piece.type < 2)) {
          if (piece.type == 0) { b++; } else { w++; }
          var player = +piece.type + 1;
          s = s + "0:" + player;
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
  go(url);
}

})();
