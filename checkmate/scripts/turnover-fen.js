Dagaz.Controller.persistense = "none";

Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

(function() {

var PIECES = "xrbqpxnkXRBQPXNK";

Dagaz.Model.moveToString = function(move) {
  var a = null;
  for (var i = 0; i < move.actions.length; i++) {
      if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
           a = move.actions[i];
           break;
      }
  }
  return Dagaz.Model.posToString(a[0][0]).substring(0, 2) + Dagaz.Model.posToString(a[1][0]).substring(0, 2);
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

var setPiece = function(design, board, pos, v) {
  var player = (v & 8) ? 1 : 2;
  var m = 1;
  for (var t = 2; t >= 0; t--) {
      if (pos === null) break;
      if (m & v) {
          var piece = Dagaz.Model.createPiece(t, player);
          board.setPiece(pos, piece);
      }
      pos = design.navigate(1, pos, 9);
      m = m << 1;
  }
}

var getPiece = function(design, board, pos) {
  var r = 0;
  for (var m = 1; m < 8; m = m << 1) {
      if (pos === null) break;
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r |= m;
          if (piece.player == 1) r |= 8;
      }
      pos = design.navigate(1, pos, 9);
  }
  return r;
}

var transpose = function(pos) {
  var x = Dagaz.Model.getX(pos);
  var y = Dagaz.Model.getY(pos);
  return (x * Dagaz.Model.WIDTH) + y;
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
                   var ix = _.indexOf(PIECES, c);
                   if (ix >= 0) {
                       setPiece(design, board, transpose(pos), ix);
                   }
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

var getPieceNotation = function(v) {
  var r = PIECES[v & 7];
  if (v & 8) {
      return r.toUpperCase();
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
       var v = getPiece(design, board, transpose(pos));
       if (v == 0) {
           c++;
       } else {
           if (c > 0) {
               str += c;
           }
           c = 0;
           str += getPieceNotation(v);
       }
  }
  if (c > 0) {
      str += c;
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
