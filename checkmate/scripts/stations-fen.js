Dagaz.Controller.persistense = "setup";

Dagaz.Model.SIZE = 61;

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
  if (c == 'A') return Dagaz.Model.createPiece(design.getPieceType("ST"), 1);
  if (c == 'a') return Dagaz.Model.createPiece(design.getPieceType("ST"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("DNN"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("DNN"), 2);
  if (c == 'C') return Dagaz.Model.createPiece(design.getPieceType("DNNE"), 1);
  if (c == 'c') return Dagaz.Model.createPiece(design.getPieceType("DNNE"), 2);
  if (c == 'D') return Dagaz.Model.createPiece(design.getPieceType("DNNW"), 1);
  if (c == 'd') return Dagaz.Model.createPiece(design.getPieceType("DNNW"), 2);
  if (c == 'E') return Dagaz.Model.createPiece(design.getPieceType("DNS"), 1);
  if (c == 'e') return Dagaz.Model.createPiece(design.getPieceType("DNS"), 2);
  if (c == 'F') return Dagaz.Model.createPiece(design.getPieceType("DNSE"), 1);
  if (c == 'f') return Dagaz.Model.createPiece(design.getPieceType("DNSE"), 2);
  if (c == 'G') return Dagaz.Model.createPiece(design.getPieceType("DNSW"), 1);
  if (c == 'g') return Dagaz.Model.createPiece(design.getPieceType("DNSW"), 2);
  if (c == 'H') return Dagaz.Model.createPiece(design.getPieceType("CRN"), 1);
  if (c == 'h') return Dagaz.Model.createPiece(design.getPieceType("CRN"), 2);
  if (c == 'I') return Dagaz.Model.createPiece(design.getPieceType("CRNE"), 1);
  if (c == 'i') return Dagaz.Model.createPiece(design.getPieceType("CRNE"), 2);
  if (c == 'J') return Dagaz.Model.createPiece(design.getPieceType("CRNW"), 1);
  if (c == 'j') return Dagaz.Model.createPiece(design.getPieceType("CRNW"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("DSN"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("DSN"), 2);
  if (c == 'L') return Dagaz.Model.createPiece(design.getPieceType("DSS"), 1);
  if (c == 'l') return Dagaz.Model.createPiece(design.getPieceType("DSS"), 2);
  if (c == 'M') return Dagaz.Model.createPiece(design.getPieceType("CTN"), 1);
  if (c == 'm') return Dagaz.Model.createPiece(design.getPieceType("CTN"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("CTNE"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("CTNE"), 2);
  if (c == 'O') return Dagaz.Model.createPiece(design.getPieceType("CTNW"), 1);
  if (c == 'o') return Dagaz.Model.createPiece(design.getPieceType("CTNW"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("FTN"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("FTN"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("FTNW"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("FTNW"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("FTNE"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("FTNE"), 2);
  if (c == 'S') return Dagaz.Model.createPiece(design.getPieceType("FTS"), 1);
  if (c == 's') return Dagaz.Model.createPiece(design.getPieceType("FTS"), 2);
  if (c == 'T') return Dagaz.Model.createPiece(design.getPieceType("FTSW"), 1);
  if (c == 't') return Dagaz.Model.createPiece(design.getPieceType("FTSW"), 2);
  if (c == 'U') return Dagaz.Model.createPiece(design.getPieceType("FTSE"), 1);
  if (c == 'u') return Dagaz.Model.createPiece(design.getPieceType("FTSE"), 2);
  return null;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  var player = 1;
  if (setup) {
      var r = setup.match(/\+([-aA]+)\+[wb]/);
      board.clear();
      var pos = 0;
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   pos += +c;
               } else {
                   var piece = createPiece(design, c);
                   if (r && (piece.type == 0)) {
                       if (_.indexOf(r[1], c) < 0) piece = piece.setValue(0, 1);
                   }
                   board.setPiece(pos, piece);
                   pos++;
               }
               if (pos >= Dagaz.Model.SIZE) break;
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
  if (piece.type == design.getPieceType("ST"))   r = 'A';
  if (piece.type == design.getPieceType("DNN"))  r = 'B';
  if (piece.type == design.getPieceType("DNNE")) r = 'C';
  if (piece.type == design.getPieceType("DNNW")) r = 'D';
  if (piece.type == design.getPieceType("DNS"))  r = 'E';
  if (piece.type == design.getPieceType("DNSE")) r = 'F';
  if (piece.type == design.getPieceType("DNSW")) r = 'G';
  if (piece.type == design.getPieceType("CRN"))  r = 'H';
  if (piece.type == design.getPieceType("CRNE")) r = 'I';
  if (piece.type == design.getPieceType("CRNW")) r = 'J';
  if (piece.type == design.getPieceType("DSN"))  r = 'K';
  if (piece.type == design.getPieceType("DSS"))  r = 'L';
  if (piece.type == design.getPieceType("CTN"))  r = 'M';
  if (piece.type == design.getPieceType("CTNE")) r = 'N';
  if (piece.type == design.getPieceType("CTNW")) r = 'O';
  if (piece.type == design.getPieceType("FTN"))  r = 'P';
  if (piece.type == design.getPieceType("FTNW")) r = 'Q';
  if (piece.type == design.getPieceType("FTNE")) r = 'R';
  if (piece.type == design.getPieceType("FTS"))  r = 'S';
  if (piece.type == design.getPieceType("FTSW")) r = 'T';
  if (piece.type == design.getPieceType("FTSE")) r = 'U';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0; var castling = '';
  for (var pos = 0; pos < Dagaz.Model.SIZE; pos++) {
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
           var x = getPieceNotation(design, piece);
           if ((piece.type == 0) && (piece.getValue(0) === null)) {
               castling = castling + x;
           }
           str += x;
       }
       if (design.navigate(1, pos, 0) === null) {
           if (c > 0) {
               str += c;
           }
           c = 0;
           str += '/';
       }
  }
  if (c > 0) {
      str += c;
  }
  if (castling == '') {
      str += "+-";
  } else {
      str += "+" + castling;
  }
  if (board.turn == 0) {
      str += "+w";
  } else {
      str += "+b";
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
