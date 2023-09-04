Dagaz.Controller.persistense = "setup";

(function() {

var LETTERS = "ABCDEFGHIJKabcdefghijk";

Dagaz.Model.moveToString = function(move) {
  var r = ""; f = false;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          f = true;
          return;
      }
      if (a[1] === null) return;
      r = Dagaz.Model.posToString(a[1][0]);
      if (f) r = r + '+';
  });
  return r;
}

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-advisor", "");
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
                   var ix = _.indexOf(LETTERS, c);
                   if (ix >= 0) {
                       var player = 1;
                       if (ix >= 11) {
                           player = 2;
                           ix -= 11;
                       }
                       var piece = Dagaz.Model.createPiece(0, player);
                       ix++;
                       for (; ix > 0; ix--) {
                           board.setPiece(pos, piece);
                           pos++;
                       }
                   }
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

function pieceNotation(c, p) {
  if (p == 0) return '' + c;
  c--;
  if (p > 1) c += 11;
  return LETTERS[c];
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0; var p = 0;
  for (var pos = 0; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos++) {
       if (k >= Dagaz.Model.WIDTH) {
           if (c > 0) {
               str += pieceNotation(c, p);
           }
           str += "/";
           k = 0;
           c = 0;
           p = 0;
       }
       k++;
       var piece = board.getPiece(pos);
       if (piece === null) {
           if ((p != 0) || ((c > 8) && (p == 0))) {
               str += pieceNotation(c, p);
               c = 0;
           }
           c++;
           p = 0;
       } else {
           if (p != piece.player) {
               if (c > 0) {
                   str += pieceNotation(c, p);
                   c = 0;
               }
               p = piece.player;
               c = 1;
           } else {
               c++;
           }
       }
  }
  if (c > 0) {
      str += pieceNotation(c, p);
  }
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
