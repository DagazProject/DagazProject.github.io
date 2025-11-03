Dagaz.Controller.persistense = "setup";

Dagaz.Model.MINI_WIDTH  = 4;
Dagaz.Model.MINI_HEIGHT = 4;
Dagaz.Model.WIDTH       = 8;
Dagaz.Model.HEIGHT      = 8;

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
  if (c == 'X') return Dagaz.Model.createPiece(design.getPieceType("Platform"), 1);
  if (c == 'x') return Dagaz.Model.createPiece(design.getPieceType("Platform"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("King"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("King"), 2);
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
  var fen    = getSetup(init);
  var player = 1;
  if (fen) {
      board.clear();
      var chunks = fen.split('+');
      var setup  = chunks[0];
      var pos = Dagaz.Model.MINI_WIDTH * Dagaz.Model.MINI_HEIGHT;
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
               if (i >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) break;
           }
      }
      var setup = chunks[1];
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
               if (pos >= Dagaz.Model.MINI_WIDTH * Dagaz.Model.MINI_HEIGHT) break;
           }
      }
      var r = chunks[3].match(/([kqKQ-]{1,4})/);
      if (r) {
          var mask = r[1];
          if (mask == '-') mask = '----';
          checkCastling(board, 79, mask[0]);
          checkCastling(board, 72, mask[1]);
          checkCastling(board, 23, mask[2]);
          checkCastling(board, 16, mask[3]);
      }
      var r = chunks[4].match(/\+[kqKQ-]{1,4}\+([a-h]\d+)/);
      if (r) {
          var pos = Dagaz.Model.stringToPos(r[1], design);
          checkPassant(board, pos + 8);
          checkPassant(board, pos - 8);
      }
      var turn = getTurn(init);
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
  }
}

var getPieceNotation = function(design, piece) {
  var r = '';
  if (piece.type == design.getPieceType("Platform")) r = 'X';
  if (piece.type == design.getPieceType("Pawn"))     r = 'P';
  if (piece.type == design.getPieceType("Rook"))     r = 'R';
  if (piece.type == design.getPieceType("Knight"))   r = 'N';
  if (piece.type == design.getPieceType("Bishop"))   r = 'B';
  if (piece.type == design.getPieceType("Queen"))    r = 'Q';
  if (piece.type == design.getPieceType("King"))     r = 'K';
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
  if (isMoved(design, board, 76, 5)) {
      r += "--";
  } else {
      if (isMoved(design, board, 79, 1)) {
          r += "-";
      } else {
          r += "K";
      }
      if (isMoved(design, board, 72, 1)) {
          r += "-";
      } else {
          r += "Q";
      }
  }
  if (isMoved(design, board, 20, 5)) {
      r += "--";
  } else {
      if (isMoved(design, board, 23, 1)) {
          r += "-";
      } else {
          r += "k";
      }
      if (isMoved(design, board, 16, 1)) {
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
      if (piece.type != 0) return r;
      var pos = design.navigate(piece.player, board.lastt, 2);
      if (pos === null) return r;
      if (!design.inZone(1, piece.player, pos)) return r;
      if (board.getPiece(pos) !== null) return r;
      var p = design.navigate(piece.player, pos, 2);
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
       var piece = board.getPiece(+pos + 16);
       if (piece === null) {
           var p = design.navigate(1, +pos + 16, 9);
           if (p !== null && board.getPiece(p) === null) {
               if (c > 0) {
                   str += c;
                   c = 0;
               }
               str += '.';
           } else {
               if (c > 8) {
                   str += c;
                   c = 0;
               }
               c++;
           }
       } else {
           if (c > 0) {
               str += c;
               c = 0;
           }
           str += getPieceNotation(design, piece);
       }
  }
  if (c > 0) {
      str += c;
  }
  str += "+";
  k = 0; c = 0;
  for (var pos = 0; pos < Dagaz.Model.MINI_WIDTH * Dagaz.Model.MINI_HEIGHT; pos++) {
       if (k >= Dagaz.Model.MINI_WIDTH) {
           if (c > 0) {
               str += c;
           }
           str += "/";
           k = 0;
           c = 0;
       }
       k++;
       var piece = board.getPiece(+pos);
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
