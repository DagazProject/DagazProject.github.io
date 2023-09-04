Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 5;

(function() {

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if ((r == "") && (a[0] != null)) {
          r = r + Dagaz.Model.posToString(a[0][0]);
      }
      if ((a[1] !== null) && (a[0][0] != a[1][0])) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
  });
  var c = ""; var n = 0;
  _.each(move.actions, function(a) {
      if (a[1] !== null) return;
      if (n >= a[3]) return;
      c = c + Dagaz.Model.posToString(a[0][0]);
      n = a[3];
  });
  if (c.length > 0) {
      r = r + "x" + c;
  }
  return r;
}

Dagaz.Model.getNote = Dagaz.Model.moveToString;

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "");
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

var getTurn = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]turn=(\d+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]turn=(\d+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var createPiece = function(design, c) {
  if ((Dagaz.AI.veloPlayer !== null) && (Dagaz.AI.veloPlayer == 2)) {
     if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Stone"), 2);
     if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Stone"), 1);
  }
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Stone"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Stone"), 2);
  return null;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  var player = 1;
  if (setup) {
      board.clear();
      var pos = 0;
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   pos += +c;
               } else {
                   var piece = createPiece(design, c);
                   board.setPiece(pos, piece);
                   pos++;
               }
               if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) break;
           }
      }
      var turn = getTurn(init);
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
  }
}

var getPieceNotation = function(design, piece) {
  if ((Dagaz.AI.veloPlayer !== null) && (Dagaz.AI.veloPlayer == 2)) {
      if (piece.player == 1) return 'p'; else return 'P';
  }
  if (piece.player == 1) return 'P'; else return 'p';
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0;
  for (var pos = 0; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos++) {
       if (k >= Dagaz.Model.WIDTH) {
           if (c > 0) {
               str += c;
           }
           str += "/";
           k = 0;
           c = 0;
       }
       k++;
       var piece = board.getPiece(pos);
       if (piece === null) {
           if (c > 8) {
               str += c;
               c = 0;
           }
           c++;
       } else {
           if (c > 0) {
               str += c;
           }
           c = 0;
           str += getPieceNotation(design, piece);
       }
  }
  if (c > 0) {
      str += c;
  }
  if (board.turn == 0) {
      str += " w";
  } else {
      str += " b";
  }
  if (Dagaz.Controller.persistense == "setup") {
      var s = str + "&game=" + getName() + "*";
      localStorage.setItem('dagaz.setup', s);
  }
  return str;
}

var clearGame = Dagaz.Controller.clearGame;

Dagaz.Controller.clearGame = function() {
   localStorage.setItem('dagaz.setup', '');
   if (!_.isUndefined(clearGame)) {
       clearGame();
   }
}

})();
