Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 19;
Dagaz.Model.HEIGHT = 19;

(function() {

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

var createPiece = function(design, player, c) {
  if (c == 'X') return null;
  if ((c == 'b') || (c == 'B')) {
      player = (player == 1) ? 2 : 1;
  }
  return Dagaz.Model.createPiece(0, player);
}

var getPieceNotation = function(design, player, piece, cap) {
  if (cap) {
      if (piece.player == player) return 'W';
      return 'B';
  }
  if (piece.player == player) return 'w';
  return 'b';
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  if (setup) {
      board.clear();
      var turn = getTurn(init);
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
      var pos = 0; var ko = [];
      for (var i = 0; i < setup.length; i++) { 
           var c = setup[i];
//         if (c == 'X') ko.push(pos);
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   pos += +c;
               } else {
                   var piece = createPiece(design, board.player, c);
                   board.setPiece(pos, piece);
                   if ((c == 'W') || (c == 'B')) board.lastt = pos;
                   pos++;
               }
               if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) break;
           }
      }
      if (ko.length > 0) board.ko = ko;
  }
}

var getCapture = function(move) {
  var r = null;
  _.each(move.actions, function(a) {
      if ((a[1] === null) && (a[0] !== null)) r = a[0][0];
  });
  return r;
}

var getKo = function(design, board) {
  if (_.isUndefined(board.move)) return null;
  if (board.move.actions.length != 2) return null;
  return getCapture(board.move);
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0; var ko = getKo(design, board);
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
       if ((ko !== null) && (pos == ko)) {
           if (c > 0) {
               str += c;
           }
           c = 0;
           str += 'X';
           continue;
       }
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
           str += getPieceNotation(design, board.player, piece, board.lastt == pos);
       }
  }
  if (c > 0) {
      str += c;
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
