Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH     = 7;
Dagaz.Model.HEIGHT    = 7;

Dagaz.AI.RESERVE_SIZE = 2;

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
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 2);
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

var toBoard = function(pos) {
  return pos;
}

var toReserve = function(pos) {
  var y = (pos / (Dagaz.AI.RESERVE_SIZE * 2)) | 0;
  var x = pos % (Dagaz.AI.RESERVE_SIZE * 2);
  var r = y * Dagaz.AI.RESERVE_SIZE + (x % Dagaz.AI.RESERVE_SIZE);
  if (x > (Dagaz.AI.RESERVE_SIZE - 1)) {
      r += 2 * Dagaz.Model.HEIGHT;
  }
  return r + Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  var player = 1;
  if (setup) {
      board.clear();
      var chunks = setup.split('+');
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
               if (pos >= Dagaz.AI.RESERVE_SIZE * 2 * Dagaz.Model.HEIGHT) break;
           }
      }
      setup = chunks[3];
      var r = setup.match(/([kqKQ-]{1,4})/);
      if (r) {
          var mask = r[1];
          if (mask == '-') mask = '----';
          checkCastling(board, 48, mask[0]);
          checkCastling(board, 42, mask[1]);
          checkCastling(board,  6, mask[2]);
          checkCastling(board,  0, mask[3]);
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
  if (piece.type == design.getPieceType("Pawn"))   r = 'P';
  if (piece.type == design.getPieceType("Rook"))   r = 'R';
  if (piece.type == design.getPieceType("Knight")) r = 'N';
  if (piece.type == design.getPieceType("Bishop")) r = 'B';
  if (piece.type == design.getPieceType("King"))   r = 'K';
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
  var r = "";
  if (isMoved(design, board, 45, 4)) {
      r += "--";
  } else {
      if (isMoved(design, board, 48, 1)) {
          r += "-";
      } else {
          r += "K";
      }
      if (isMoved(design, board, 42, 1)) {
          r += "-";
      } else {
          r += "Q";
      }
  }
  if (isMoved(design, board, 3, 4)) {
      r += "--";
  } else {
      if (isMoved(design, board, 6, 1)) {
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
       if (design.isKilledPos(toBoard(pos))) {
           if (c > 0) {
               str += c;
           }
           c = 0;
           str += 'X';
       } else {
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
  }
  if (c > 0) {
      str += c;
  }
  str += '+';
  k = 0; c = 0;
  for (var pos = 0; pos < 2 * Dagaz.AI.RESERVE_SIZE * Dagaz.Model.HEIGHT; pos++) {
       if (k >= (Dagaz.AI.RESERVE_SIZE * 2)) {
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
      str += "+w+";
  } else {
      str += "+b+";
  }
  str += getCastling(design, board);
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
