(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "washington-extension") {
      checkVersion(design, name, value);
  }
}

var cont = Dagaz.Model.continue;

Dagaz.Model.continue = function(design, board, str) {
  var r = cont(design, board, str);
  if (r !== null) {
      if (!_.isUndefined(Dagaz.Model.getSetup)) {
          r = r + Dagaz.Model.getSetup(design, board);
      }
  }
  return r;
}

})();
