(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "renju-editor-extension") {
     checkVersion(design, name, value);
  }
}

var getLine = function(design, board, type, pos, dir) {
  var r = 0;
  var p = design.navigate(board.player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) break;
      if (piece.type != type) break;
      p = design.navigate(board.player, p, dir);
      r++;
  }
  return r;
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + "?setup="; 
  var b = 0; var w = 0;
  var prev = null; var cnt = 0;
  var dirs   = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          if (piece.type == 0) { b++; } else { w++; }
          var player = +piece.type + 1;
          s = s + "0:" + player;
          for (var ix = 0; ix < 4; ix++) {
               var vl = 1;
               vl += getLine(design, board, piece.type, pos, dirs[ix]);
               vl += getLine(design, board, piece.type, pos, dirs[ix + 4]);
               s = s + "=" + vl;
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
