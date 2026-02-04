Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH   = 9;
Dagaz.Model.SIZE    = 81;
Dagaz.Model.RESERVE = 10;

(function() {

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-2d", "");
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
  var result = str.match(/[?&]setup=([^&\-]*)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]setup=([^&\-]*)/);
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
  if (c == 'G') return Dagaz.Model.createPiece(design.getPieceType("Goal"), 1);
  if (c == 'g') return Dagaz.Model.createPiece(design.getPieceType("Goal"), 2);
  if (c == 'V') return Dagaz.Model.createPiece(design.getPieceType("Vanguard"), 1);
  if (c == 'v') return Dagaz.Model.createPiece(design.getPieceType("Vanguard"), 2);
  if (c == 'U') return Dagaz.Model.createPiece(design.getPieceType("VanguardCarrier"), 1);
  if (c == 'u') return Dagaz.Model.createPiece(design.getPieceType("VanguardCarrier"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("PowerVanguard"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("PowerVanguard"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("PowerVanguardCarrier"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("PowerVanguardCarrier"), 2);
  if (c == 'L') return Dagaz.Model.createPiece(design.getPieceType("Lancer"), 1);
  if (c == 'l') return Dagaz.Model.createPiece(design.getPieceType("Lancer"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("LancerCarrier"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("LancerCarrier"), 2);
  if (c == 'F') return Dagaz.Model.createPiece(design.getPieceType("Fencer"), 1);
  if (c == 'f') return Dagaz.Model.createPiece(design.getPieceType("Fencer"), 2);
  if (c == 'C') return Dagaz.Model.createPiece(design.getPieceType("FencerCarrier"), 1);
  if (c == 'c') return Dagaz.Model.createPiece(design.getPieceType("FencerCarrier"), 2);
  if (c == 'S') return Dagaz.Model.createPiece(design.getPieceType("Swift"), 1);
  if (c == 's') return Dagaz.Model.createPiece(design.getPieceType("Swift"), 2);
  if (c == 'A') return Dagaz.Model.createPiece(design.getPieceType("SwiftCarrier"), 1);
  if (c == 'a') return Dagaz.Model.createPiece(design.getPieceType("SwiftCarrier"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Flier"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Flier"), 2);
  if (c == 'X') return Dagaz.Model.createPiece(design.getPieceType("FlierCarrier"), 1);
  if (c == 'x') return Dagaz.Model.createPiece(design.getPieceType("FlierCarrier"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Blockader"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Blockader"), 2);
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
  if (piece.type == design.getPieceType("Goal"))                 r = 'G';
  if (piece.type == design.getPieceType("Vanguard"))             r = 'V';
  if (piece.type == design.getPieceType("VanguardCarrier"))      r = 'U';
  if (piece.type == design.getPieceType("PowerVanguard"))        r = 'P';
  if (piece.type == design.getPieceType("PowerVanguardCarrier")) r = 'Q';
  if (piece.type == design.getPieceType("Lancer"))               r = 'L';
  if (piece.type == design.getPieceType("LancerCarrier"))        r = 'R';
  if (piece.type == design.getPieceType("Fencer"))               r = 'F';
  if (piece.type == design.getPieceType("FencerCarrier"))        r = 'C';
  if (piece.type == design.getPieceType("Swift"))                r = 'S';
  if (piece.type == design.getPieceType("SwiftCarrier"))         r = 'A';
  if (piece.type == design.getPieceType("Flier"))                r = 'N';
  if (piece.type == design.getPieceType("FlierCarrier"))         r = 'X';
  if (piece.type == design.getPieceType("Blockader"))            r = 'B';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0; 
  var n = 1; var w = Dagaz.Model.WIDTH;
  for (var pos = 0; pos < Dagaz.Model.SIZE; pos++) {
       if (k >= w) {
           if (c > 0) {
               str += c;
           }
           str += "/";
           n--;
           if (n == 0) {
               w--;
               n = 2;
           }
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
  str += '/';
  var k = 0; var c = 0; 
  var n = 2; var w = Dagaz.Model.RESERVE;
  for (; pos < design.positions.length; pos++) {
       if (k >= w) {
           if (c > 0) {
               str += c;
           }
           str += "/";
           n--;
           if (n == 0) {
               w--;
               n = 2;
           }
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
