Dagaz.Controller.persistense = "setup";

var WIDTH  = 11;
var HEIGHT = 10;

(function() {

Dagaz.Model.moveToString = function(move) {
  var r = ""; var t = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if ((r == "") && (a[0] != null)) {
          r = r + Dagaz.Model.posToString(a[0][0]);
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          t = a[2][0].getType();
      }
  });
  if (t.length > 0) {
      r = r + " " + t;
  }
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
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'C') return Dagaz.Model.createPiece(design.getPieceType("RookK"), 1);
  if (c == 'c') return Dagaz.Model.createPiece(design.getPieceType("RookK"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'H') return Dagaz.Model.createPiece(design.getPieceType("KnightK"), 1);
  if (c == 'h') return Dagaz.Model.createPiece(design.getPieceType("KnightK"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 2);
  if (c == 'E') return Dagaz.Model.createPiece(design.getPieceType("BishopK"), 1);
  if (c == 'e') return Dagaz.Model.createPiece(design.getPieceType("BishopK"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 2);
  if (c == 'A') return Dagaz.Model.createPiece(design.getPieceType("Angel"), 1);
  if (c == 'a') return Dagaz.Model.createPiece(design.getPieceType("Angel"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("King"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("King"), 2);
  return null;
}

var checkPassant = function(design, board, pos, delta) {
  pos += delta;
  if (design.inZone(1, 1, pos) || design.inZone(1, 2, pos)) {
      pos += delta;
  }
  var piece = board.getPiece(pos);
  if (piece !== null) {
      board.lastt = pos;
  } else {
      board.lastf = pos;
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
                   var piece = createPiece(design, c);
                   board.setPiece(pos, piece);
                   pos++;
               }
               if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) break;
           }
      }
      var r = setup.match(/\+[wb]\+([a-k]\d+)/);
      if (r) {
          var pos = Dagaz.Model.stringToPos(r[1], design);
          if (pos !== null) {
              checkPassant(design, board, pos, +11);
              checkPassant(design, board, pos, -11);
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
  if (piece.type == design.getPieceType("Pawn"))    r = 'P';
  if (piece.type == design.getPieceType("Rook"))    r = 'R';
  if (piece.type == design.getPieceType("RookK"))   r = 'C';
  if (piece.type == design.getPieceType("Knight"))  r = 'N';
  if (piece.type == design.getPieceType("KnightK")) r = 'H';
  if (piece.type == design.getPieceType("Bishop"))  r = 'B';
  if (piece.type == design.getPieceType("BishopK")) r = 'E';
  if (piece.type == design.getPieceType("Queen"))   r = 'Q';
  if (piece.type == design.getPieceType("Angel"))   r = 'A';
  if (piece.type == design.getPieceType("King"))    r = 'K';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

var getEnPassant = function(design, board) {
  var r = "";
  if (board.lastt) {
      var piece = board.getPiece(board.lastt);
      if (piece === null) return r;
      if (piece.type != 0) return r;
      var pos = design.navigate(piece.player, board.lastt, 1);
      if (pos === null) return r;
      if (board.getPiece(pos) !== null) return r;
      var p = design.navigate(piece.player, pos, 1);
      if (p === null) return r;
      if (p != board.lastf) {
          var p = design.navigate(piece.player, p, 1);
          if (p === null) return r;
      }
      if (p == board.lastf) r = Dagaz.Model.posToString(pos, design);
  }
  return r;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0;
  for (var pos = 0; pos < WIDTH * HEIGHT; pos++) {
       if (k >= WIDTH) {
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
      str += "+w+";
  } else {
      str += "+b+";
  }
  str += getEnPassant(design, board);
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
