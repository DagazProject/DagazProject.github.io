Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 7;

(function() {

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
  if (c == 'X') return Dagaz.Model.createPiece(design.getPieceType("Hole"), 1);
  if (c == 'x') return Dagaz.Model.createPiece(design.getPieceType("Hole"), 2);
  if (c == '1') return Dagaz.Model.createPiece(design.getPieceType("Platform"), 1);
  if (c == '2') return Dagaz.Model.createPiece(design.getPieceType("Platform"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("King"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("King"), 2);
  return null;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var fen    = getSetup(init);
  var player = 1;
  if (fen) {
      board.clear();
      var chunks = fen.split('+');
      var setup  = chunks[0];
      var start  = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT;
      var pos    = start;
      var color  = 1;
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   for (var j = 0; j < c; j++) {
                       piece = createPiece(design, color);
                       board.setPiece(pos - start, piece);
                       pos++;
                       color = (color == 1) ? 2 : 1;
                   }
               } else {
                   var piece = createPiece(design, c);
                   if ((c != 'x') && (c != 'X')) {
                       board.setPiece(pos, piece);
                       piece = createPiece(design, color);
                   }
                   board.setPiece(pos - start, piece);
                   pos++;
                   color = (color == 1) ? 2 : 1;
               }
               if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT * 2) break;
           }
      }
      var turn = getTurn(init);
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
          if (turn == 1) {
              var piece = Dagaz.Model.createPiece(6, 1);
              board.setPiece(98, piece);
          }
          if (turn == 3) {
              var piece = Dagaz.Model.createPiece(6, 2);
              board.setPiece(99, piece);
          }
      }
  }
}

var getPieceNotation = function(design, piece) {
  var r = '';
  if (piece.type == design.getPieceType("Hole"))   r = 'X';
  if (piece.type == design.getPieceType("Pawn"))   r = 'P';
  if (piece.type == design.getPieceType("Rook"))   r = 'R';
  if (piece.type == design.getPieceType("Knight")) r = 'N';
  if (piece.type == design.getPieceType("King"))   r = 'K';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

function getPiece(design, board, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) {
      var p = design.navigate(1, pos, 9);
      if (p === null) return null;
      piece = board.getPiece(p);
      if (piece === null) return null;
      if (piece.type != 0) return null;
  }
  return piece;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0;
  for (var pos = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT * 2; pos++) {
       if (k >= Dagaz.Model.WIDTH) {
           if (c > 0) {
               str += c;
           }
           str += "/";
           k = 0;
           c = 0;
       }
       k++;
       var piece = getPiece(design, board, pos);
       if (piece === null) {
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
      str += "+w";
  } else {
      str += "+b";
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
