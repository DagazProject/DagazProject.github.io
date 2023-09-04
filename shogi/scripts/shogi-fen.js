Dagaz.Controller.persistense = "setup";

Dagaz.AI.RESERVE_SIZE = 2;

(function() {

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-kanji", "");
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
  if (c == 'G') return Dagaz.Model.createPiece(design.getPieceType("Gold"), 1);
  if (c == 'g') return Dagaz.Model.createPiece(design.getPieceType("Gold"), 2);
  if (c == 'S') return Dagaz.Model.createPiece(design.getPieceType("Silver"), 1);
  if (c == 's') return Dagaz.Model.createPiece(design.getPieceType("Silver"), 2);
  if (c == 'E') return Dagaz.Model.createPiece(design.getPieceType("SilverP"), 1);
  if (c == 'e') return Dagaz.Model.createPiece(design.getPieceType("SilverP"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'W') return Dagaz.Model.createPiece(design.getPieceType("KnightP"), 1);
  if (c == 'w') return Dagaz.Model.createPiece(design.getPieceType("KnightP"), 2);
  if (c == 'L') return Dagaz.Model.createPiece(design.getPieceType("Lance"), 1);
  if (c == 'l') return Dagaz.Model.createPiece(design.getPieceType("Lance"), 2);
  if (c == 'I') return Dagaz.Model.createPiece(design.getPieceType("LanceP"), 1);
  if (c == 'i') return Dagaz.Model.createPiece(design.getPieceType("LanceP"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 2);
  if (c == 'H') return Dagaz.Model.createPiece(design.getPieceType("BishopP"), 1);
  if (c == 'h') return Dagaz.Model.createPiece(design.getPieceType("BishopP"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'D') return Dagaz.Model.createPiece(design.getPieceType("RookP"), 1);
  if (c == 'd') return Dagaz.Model.createPiece(design.getPieceType("RookP"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 2);
  if (c == 'T') return Dagaz.Model.createPiece(design.getPieceType("PawnP"), 1);
  if (c == 't') return Dagaz.Model.createPiece(design.getPieceType("PawnP"), 2);
  return null;
}

var toBoard = function(pos) {
  var y = (pos / Dagaz.Model.WIDTH) | 0;
  var x = (pos % Dagaz.Model.WIDTH) + (Dagaz.AI.RESERVE_SIZE + 1);
  return y * (Dagaz.Model.WIDTH + 2 * (Dagaz.AI.RESERVE_SIZE + 1)) + x;
}

var toReserve = function(pos) {
  var y = (pos / (Dagaz.AI.RESERVE_SIZE * 2)) | 0;
  var x = pos % (Dagaz.AI.RESERVE_SIZE * 2);
  if (x > (Dagaz.AI.RESERVE_SIZE - 1)) x += Dagaz.Model.WIDTH + 2;
  return y * (Dagaz.Model.WIDTH + 2 * (Dagaz.AI.RESERVE_SIZE + 1)) + x;
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
               if (pos >= (Dagaz.AI.RESERVE_SIZE * 2) * Dagaz.Model.HEIGHT) break;
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
  if (piece.type == design.getPieceType("King"))    r = 'K';
  if (piece.type == design.getPieceType("Pawn"))    r = 'P';
  if (piece.type == design.getPieceType("PawnP"))   r = 'T';
  if (piece.type == design.getPieceType("Silver"))  r = 'S';
  if (piece.type == design.getPieceType("SilverP")) r = 'E';
  if (piece.type == design.getPieceType("Knight"))  r = 'N';
  if (piece.type == design.getPieceType("KnightP")) r = 'W';
  if (piece.type == design.getPieceType("Lance"))   r = 'L';
  if (piece.type == design.getPieceType("LanceP"))  r = 'I';
  if (piece.type == design.getPieceType("Gold"))    r = 'G';
  if (piece.type == design.getPieceType("Bishop"))  r = 'B';
  if (piece.type == design.getPieceType("BishopP")) r = 'H';
  if (piece.type == design.getPieceType("Rook"))    r = 'R';
  if (piece.type == design.getPieceType("RookP"))   r = 'D';
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
  str += '-';
  k = 0; c = 0;
  for (var pos = 0; pos < (Dagaz.AI.RESERVE_SIZE * 2) * Dagaz.Model.HEIGHT; pos++) {
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
