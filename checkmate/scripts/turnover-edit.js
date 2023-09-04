(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "turnover-edit") {
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
  var fen = '8/8/8/8/8/8/8/8';
  var setup = Dagaz.Model.getSetup(design, board);
  var result = setup.match(/[?&]setup=([^&]*)/);
  if (result) {
      fen = result[1];
  }
  url = url + '?t=' + board.turn + '&r=' + getRef() + '&setup=' + fen; 
  go(url);
}

})();
