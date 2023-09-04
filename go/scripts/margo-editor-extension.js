(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "margo-editor-extension") {
     checkVersion(design, name, value);
  }
}

var isLocked = function(design, board, type, pos, dir) {
  var dirs = [];
  if (dir == 0) dirs = [4, 6];
  if (dir == 1) dirs = [4, 8];
  if (dir == 2) dirs = [6, 10];
  if (dir == 3) dirs = [8, 10];
  if (dirs.length == 0) return false;
  var r = true;
  _.each(dirs, function(d) {
      if (!r) return;
      var p = design.navigate(1, pos, d);
      if (p === null) return;
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.type == type)) r = false;     
  });
  return r;
}

var getValue = function(design, board, type, pos, type) {
  var r = 0;
  var g = [ pos ];
  for (var i = 0; i < g.length; i++) {
      _.each(design.allDirections(), function(dir) {
           var p = design.navigate(1, g[i], dir);
           if ((p !== null) && (_.indexOf(g, p) < 0)) {
               var piece = board.getPiece(p);
               if (piece === null) {
                   r++;
               } else {
                   if (piece.type != type) return;
                   if (isLocked(design, board, piece.type, g[i], dir)) return;
                   g.push(p);
               }
           }
      });
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
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          if (piece.type == 0) { b++; } else { w++; }
          var player = +piece.type + 1;
          s = s + "0:" + player;
          s = s + "=" + getValue(design, board, pos, piece.type);
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
