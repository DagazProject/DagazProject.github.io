Dagaz.Controller.persistense = "setup";

(function() {

var LETTERS = ['P', 'p', 'K', 'k', 'G', 'g'];

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
  return r;
}

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
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("WhiteMan"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("BlackMan"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("WhiteKing"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("BlackKing"), 2);
  if (c == 'G') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 1);
  if (c == 'g') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 2);
  return null;
}

var getTail = function(setup, pos, piece) {
  var s = '';
  for (var i = pos + 1; i < setup.length; i++) {
       if (setup[i] == ']') break;
       if (setup[i] != '[') {
           if (i == pos + 1) break;
           var t = setup[i].toLowerCase() == 'k' ? 2 : 0;           
           if ((setup[i] == 'p') || (setup[i] == 'k')) t++;
           if (setup[i].toLowerCase() == 'g') t = 4;
           s = s + t;
       }
  }
  return s;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var data = getSetup(init);
  var player = 1;
  if (data) {
      var d = data.split('-');
      var setup = d[0];
      board.clear();
      var pos = 0;
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   pos += +c;
               } else {
                   var piece = createPiece(design, c);
                   var t = getTail(setup, i, piece);
                   if (t) {
                       piece = piece.setValue(0, t.split("").reverse().join(""));
                       i += t.length + 2;
                   }
                   board.setPiece(pos, piece);
                   pos++;
               }
               if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) break;
           }
      }
      var global = d[1];
      if (global) {
          var r = global.match(/(\w\d)(\w\d)/);
          if (r) {
              board.setValue(0, Dagaz.Model.stringToPos(r[2]));
              board.setValue(1, Dagaz.Model.stringToPos(r[1]));
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
  var r = LETTERS[piece.type];
  if (piece.type > 3) {
      if (piece.player > 1) r = 'g';
          else r = 'G';
  }
  var v = piece.getValue(0);
  if (v !== null) {
      var s = '';
      for (var i = 0; i < v.length; i++) {
           var t = v[i];
           s = s + LETTERS[t];
      }
      if (s) {
           r = r + '[' + s.split("").reverse().join("") + ']';
      }
  }
  return r;
}

var getGlobal = function(design, board) {
  var to = board.getValue(0);
  var from = board.getValue(1);
  var r = '-';
  if ((from !== null) && (to !== null)) {
      r = r + Dagaz.Model.posToString(from, design) + Dagaz.Model.posToString(to, design);
  }
  return r;
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
  str += getGlobal(design, board);
  if (board.turn == 0) {
      str += "-w";
  } else {
      str += "-b";
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
