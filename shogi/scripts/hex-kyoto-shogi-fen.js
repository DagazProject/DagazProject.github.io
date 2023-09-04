Dagaz.Controller.persistense = "setup";

(function() {

const ABC = 'abcdefg';
const XYZ = 'XYZT';

Dagaz.Model.moveToString = function(move) {
  var r = "";
  for (var i = 0; i < move.actions.length; i++) {
      var a = move.actions[i];
      if (a[0] === null) continue;
      if (a[1] === null) continue;
      r = Dagaz.Model.posToString(a[0][0]) + Dagaz.Model.posToString(a[1][0]);
      break;
  }
  return r;
}

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
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'S') return Dagaz.Model.createPiece(design.getPieceType("Silver"), 1);
  if (c == 's') return Dagaz.Model.createPiece(design.getPieceType("Silver"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'T') return Dagaz.Model.createPiece(design.getPieceType("Tokin"), 1);
  if (c == 't') return Dagaz.Model.createPiece(design.getPieceType("Tokin"), 2);
  if (c == 'L') return Dagaz.Model.createPiece(design.getPieceType("Lance"), 1);
  if (c == 'l') return Dagaz.Model.createPiece(design.getPieceType("Lance"), 2);
  return null;
}

var toBoard = function(x, y) {
  return Dagaz.Model.stringToPos(ABC[x] + y);
}

var toReserve = function(x, y) {
  return Dagaz.Model.stringToPos(XYZ[x] + y);
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  var player = 1;
  if (setup) {
      board.clear();
      var chunks = setup.split('-');
      var setup = chunks[0];
      var x = 0; var y = 13;
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   x += +c;
               } else {
                   var piece = createPiece(design, c);
                   var pos = toBoard(x, y);
                   if (pos !== null) {
                       board.setPiece(pos, piece);
                   }
                   x++;
               }
           } else {
               x = 0;
               y--;
           }
      }
      setup = chunks[1];
      x = 0; y = 10;
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   x += +c;
               } else {
                   var piece = createPiece(design, c);
                   var pos = toReserve(x, y);
                   if (pos !== null) {
                       board.setPiece(pos, piece);
                   }
                   x++;
               }
           } else {
               x = 0;
               y--;
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
  if (piece.type == design.getPieceType("Gold"))    r = 'G';
  if (piece.type == design.getPieceType("Knight"))  r = 'N';
  if (piece.type == design.getPieceType("Silver"))  r = 'S';
  if (piece.type == design.getPieceType("Bishop"))  r = 'B';
  if (piece.type == design.getPieceType("Pawn"))    r = 'P';
  if (piece.type == design.getPieceType("Rook"))    r = 'R';
  if (piece.type == design.getPieceType("Tokin"))   r = 'T';
  if (piece.type == design.getPieceType("Lance"))   r = 'L';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var c = 0;
  for (var y = 13; y > 0; y--) {
       if (y < 13) str += '/';
       for (var x = 0; x < 7; x++) {
            var pos = toBoard(x, y);
            if ((pos !== null) && !design.isKilledPos(pos)) {
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
            } else {
                if (c > 0) {
                    str += c;
                }
                c = 0;
                str += "X";
            }
       }
       if (c > 0) {
           str += c;
       }
       c = 0;
  }
  str += '-';
  var c = 0;
  for (var y = 10; y > 0; y--) {
       if (y < 10) str += '/';
       for (var x = 0; x < 4; x++) {
            var pos = toReserve(x, y);
            if (pos !== null) {
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
            } else {
                str += "X";
            }
       }
       if (c > 0) {
           str += c;
       }
       c = 0;
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
