(function() {

var checkVersion = Dagaz.Model.checkVersion;
var percent = 15;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "platform-setup") {
      percent = +value;
  } else {
      checkVersion(design, name, value);
  }
}

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-3d", "");
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
      return result;
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

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var s = getSetup(init);
  if (s != "") {
      setup(board, s);
      return;
  }
  var pawn   = design.getPieceType("Pawn");
  var bomb   = design.getPieceType("Bomb");
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == pawn) && (_.random(0, 100) < percent)) {
          piece = piece.promote(bomb);
          board.setPiece(pos, piece);
      }
  });
}

})();
