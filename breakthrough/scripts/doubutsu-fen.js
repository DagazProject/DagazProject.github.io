Dagaz.Controller.persistense = "none";

Dagaz.Model.WIDTH  = 3;
Dagaz.Model.HEIGHT = 4;

(function() {

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
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("King"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("King"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Za"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Za"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Sang"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Sang"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Jang"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Jang"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("Hu"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("Hu"), 2);
  return null;
}

var toBoard = function(pos) {
  var y = (pos / Dagaz.Model.WIDTH) | 0;
  var x = (pos % Dagaz.Model.WIDTH) + 1;
  return y * (Dagaz.Model.WIDTH + 2) + x;
}

var toReserve = function(pos) {
  var y = (pos / 2) | 0;
  var x = pos % 2;
  if (x > 0) x += Dagaz.Model.WIDTH;
  return y * (Dagaz.Model.WIDTH + 2) + x;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  var player = 1;
  if (setup) {
      board.clear();
      var chunks = setup.split('-');
      var setup = chunks[0];
      var pos = 0; 
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   pos += +c;
               } else {
                   var piece = createPiece(design, c);
                   board.setPiece(toBoard(pos), piece);
                   pos++;
               }
               if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) break;
           }
      }
      setup = chunks[1]; pos = 0; 
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   pos += +c;
               } else {
                   var piece = createPiece(design, c);
                   board.setPiece(toReserve(pos), piece);
                   pos++;
               }
               if (pos >= 2 * Dagaz.Model.HEIGHT) break;
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
  var r = 'X';
  if (piece.type == design.getPieceType("King")) r = 'K';
  if (piece.type == design.getPieceType("Sang")) r = 'B';
  if (piece.type == design.getPieceType("Jang")) r = 'R';
  if (piece.type == design.getPieceType("Hu"))   r = 'Q';
  if (piece.type == design.getPieceType("Za"))   r = 'P';
  if (piece.player > 1) {
      return r.toLowerCase();
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
       var piece = board.getPiece(toBoard(pos));
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
  str += '-';
  k = 0; c = 0;
  for (var pos = 0; pos < 2 * Dagaz.Model.HEIGHT; pos++) {
       if (k >= 2) {
           if (c > 0) {
               str += c;
           }
           str += "/";
           k = 0;
           c = 0;
       }
       k++;
       var piece = board.getPiece(toReserve(pos));
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
