(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-go-edit") {
     checkVersion(design, name, value);
  }
}

var getRef = function() {
  var str = window.location.toString();;
  var result = str.match(/\/([^\/.]+\.html?)/);
  if (result) {
      str = result[1];
  }
  return str;
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + '?r=' + getRef() + '&setup='; 
  var prev = null; var cnt = 0;
  var r = [5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          var t = +piece.player - 1 + (piece.type * 2);
          s = s + t + ":1";
          if (t >= 2) {
              r[t - 2]--;
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
  url = url + "&reserve=500,500,"+r[0]+","+r[1]+","+r[2]+","+r[3]+","+r[4]+","+r[5]+
              ","+r[6]+","+r[7]+","+r[8]+","+r[9]+","+r[10]+","+r[11]+","+r[12]+","+r[13]+",";
  go(url);
}

})();
