(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "escalation-setup") {
     checkVersion(design, name, value);
  }
}

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-kanji", "");
  } else {
      return str;
  }
}

var badName = function(str) {
  var result = str.match(/[?&]game=([^&*]*)/);
  if (result) {
      return result[1] != getName();
  } else {
      return true;
  }
}

var getCookie = function() {
  var result = localStorage.getItem('dagaz.setup');
  if (result) {
      if (badName(result)) return "";
      return "?setup=" + result;
  } else {
      return "";
  }
}

var getSetup = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]setup=([^&]*)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var change = function(design, board, layer, positions) {
  _.each(positions, function(name) {
      var pos = Dagaz.Model.stringToPos(name, design);
      if (pos === null) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = piece.getValue(0);
      if (v === null) {
          v = 0;
      }
      v += 1 << layer;
      board.setPiece(pos, piece.setValue(0, v));
  });
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  if (getSetup(init)) {
      setup(board, init);
      return;
  }
  var design = Dagaz.Model.design;
  change(design, board, 0, ["c2", "c7", "f2", "f7"]);
  change(design, board, 1, ["d2", "d7", "e2", "e7", "b1", "b8", "g1", "g8"]);
  change(design, board, 2, ["a1", "a8", "a2", "a7", "b2", "b7", "c1", "c8", "f1", "f8", "g2", "g7", "h1", "h8", "h2", "h7"]);
  change(design, board, 3, ["d1", "d8"]);
}

})();
