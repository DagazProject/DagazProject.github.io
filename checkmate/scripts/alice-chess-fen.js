Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

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
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 2);
  if (c == 'S') return Dagaz.Model.createPiece(design.getPieceType("MirroredPawn"), 1);
  if (c == 's') return Dagaz.Model.createPiece(design.getPieceType("MirroredPawn"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'A') return Dagaz.Model.createPiece(design.getPieceType("MirroredRook"), 1);
  if (c == 'a') return Dagaz.Model.createPiece(design.getPieceType("MirroredRook"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'L') return Dagaz.Model.createPiece(design.getPieceType("MirroredKnight"), 1);
  if (c == 'l') return Dagaz.Model.createPiece(design.getPieceType("MirroredKnight"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 2);
  if (c == 'E') return Dagaz.Model.createPiece(design.getPieceType("MirroredBishop"), 1);
  if (c == 'e') return Dagaz.Model.createPiece(design.getPieceType("MirroredBishop"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 2);
  if (c == 'F') return Dagaz.Model.createPiece(design.getPieceType("MirroredQueen"), 1);
  if (c == 'f') return Dagaz.Model.createPiece(design.getPieceType("MirroredQueen"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("King"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("King"), 2);
  if (c == 'G') return Dagaz.Model.createPiece(design.getPieceType("MirroredKing"), 1);
  if (c == 'g') return Dagaz.Model.createPiece(design.getPieceType("MirroredKing"), 2);
  return null;
}

var checkCastling = function(board, pos, m) {
  if (m != '-') return;
  piece = board.getPiece(pos);
  if (piece === null) return;
  piece.setValue(0, true);
}

var checkPassant = function(board, pos) {
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
      var r = setup.match(/\+([kqKQ-]{1,4})\+/);
      if (r) {
          var mask = r[1];
          if (mask == '-') mask = '----';
          checkCastling(board, 63, mask[0]);
          checkCastling(board, 56, mask[1]);
          checkCastling(board,  7, mask[2]);
          checkCastling(board,  0, mask[3]);
      }
      var r = setup.match(/\+[kqKQ-]{1,4}\+([a-h]\d+)/);
      if (r) {
          var pos = Dagaz.Model.stringToPos(r[1], design);
          if (pos !== null) {
              checkPassant(board, pos + 8);
              checkPassant(board, pos - 8);
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
  if (piece.type == design.getPieceType("Pawn"))            r = 'P';
  if (piece.type == design.getPieceType("MirroredPawn"))    r = 'S';
  if (piece.type == design.getPieceType("Rook"))            r = 'R';
  if (piece.type == design.getPieceType("MirroredRook"))    r = 'A';
  if (piece.type == design.getPieceType("Knight"))          r = 'N';
  if (piece.type == design.getPieceType("MirroredKnight"))  r = 'L';
  if (piece.type == design.getPieceType("Bishop"))          r = 'B';
  if (piece.type == design.getPieceType("MirroredBishop"))  r = 'E';
  if (piece.type == design.getPieceType("Queen"))           r = 'Q';
  if (piece.type == design.getPieceType("MirroredQueen"))   r = 'F';
  if (piece.type == design.getPieceType("King"))            r = 'K';
  if (piece.type == design.getPieceType("MirroredKing"))    r = 'G';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

var isMoved = function(design, board, pos, type) {
  var piece = board.getPiece(pos);
  if (piece === null) return true;
  if (piece.type != type) return true;
  return piece.getValue(0) !== null;
}

var getCastling = function(design, board) {
  if ((Dagaz.Model.WIDTH != 8) || (Dagaz.Model.HEIGHT != 8)) return "----";
  var r = "";
  if (isMoved(design, board, 60, 5)) {
      r += "--";
  } else {
      if (isMoved(design, board, 63, 1)) {
          r += "-";
      } else {
          r += "K";
      }
      if (isMoved(design, board, 56, 1)) {
          r += "-";
      } else {
          r += "Q";
      }
  }
  if (isMoved(design, board, 4, 5)) {
      r += "--";
  } else {
      if (isMoved(design, board, 7, 1)) {
          r += "-";
      } else {
          r += "k";
      }
      if (isMoved(design, board, 0, 1)) {
          r += "-";
      } else {
          r += "q";
      }
  }
  return r;
}

var getEnPassant = function(design, board) {
  var r = "+-";
  if (board.lastt) {
      var piece = board.getPiece(board.lastt);
      if (piece === null) return r;
      if (piece.type > 1) return r;
      var pos = design.navigate(piece.player, board.lastt, 1);
      if (pos === null) return r;
      if (board.getPiece(pos) !== null) return r;
      var p = design.navigate(piece.player, pos, 1);
      if (p === null) return r;
      if (p == board.lastf) r = "+" + Dagaz.Model.posToString(pos, design);
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
  str += getCastling(design, board);
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
