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
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("CraneKing"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("CraneKing"), 2);
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("SparrowPawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("SparrowPawn"), 2);
  if (c == 'W') return Dagaz.Model.createPiece(design.getPieceType("ViolentWolf"), 1);
  if (c == 'w') return Dagaz.Model.createPiece(design.getPieceType("ViolentWolf"), 2);
  if (c == 'V') return Dagaz.Model.createPiece(design.getPieceType("ViolentWolfP"), 1);
  if (c == 'v') return Dagaz.Model.createPiece(design.getPieceType("ViolentWolfP"), 2);
  if (c == 'S') return Dagaz.Model.createPiece(design.getPieceType("ViolentStag"), 1);
  if (c == 's') return Dagaz.Model.createPiece(design.getPieceType("ViolentStag"), 2);
  if (c == 'T') return Dagaz.Model.createPiece(design.getPieceType("ViolentStagP"), 1);
  if (c == 't') return Dagaz.Model.createPiece(design.getPieceType("ViolentStagP"), 2);
  if (c == 'G') return Dagaz.Model.createPiece(design.getPieceType("FlyingGoose"), 1);
  if (c == 'g') return Dagaz.Model.createPiece(design.getPieceType("FlyingGoose"), 2);
  if (c == 'C') return Dagaz.Model.createPiece(design.getPieceType("FlyingCock"), 1);
  if (c == 'c') return Dagaz.Model.createPiece(design.getPieceType("FlyingCock"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("StruttingCrow"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("StruttingCrow"), 2);
  if (c == 'O') return Dagaz.Model.createPiece(design.getPieceType("SwoopingOwl"), 1);
  if (c == 'o') return Dagaz.Model.createPiece(design.getPieceType("SwoopingOwl"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("BlindDog"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("BlindDog"), 2);
  if (c == 'M') return Dagaz.Model.createPiece(design.getPieceType("ClimbingMonkey"), 1);
  if (c == 'm') return Dagaz.Model.createPiece(design.getPieceType("ClimbingMonkey"), 2);
  if (c == 'X') return Dagaz.Model.createPiece(design.getPieceType("Oxcart"), 1);
  if (c == 'x') return Dagaz.Model.createPiece(design.getPieceType("Oxcart"), 2);
  if (c == 'H') return Dagaz.Model.createPiece(design.getPieceType("LiberatedHorse"), 1);
  if (c == 'h') return Dagaz.Model.createPiece(design.getPieceType("LiberatedHorse"), 2);
  if (c == 'L') return Dagaz.Model.createPiece(design.getPieceType("SwallowsWings"), 1);
  if (c == 'l') return Dagaz.Model.createPiece(design.getPieceType("SwallowsWings"), 2);
  if (c == 'A') return Dagaz.Model.createPiece(design.getPieceType("SwallowsWingsP"), 1);
  if (c == 'a') return Dagaz.Model.createPiece(design.getPieceType("SwallowsWingsP"), 2);
  if (c == 'F') return Dagaz.Model.createPiece(design.getPieceType("FlyingFalcon"), 1);
  if (c == 'f') return Dagaz.Model.createPiece(design.getPieceType("FlyingFalcon"), 2);
  if (c == 'D') return Dagaz.Model.createPiece(design.getPieceType("FlyingFalconP"), 1);
  if (c == 'd') return Dagaz.Model.createPiece(design.getPieceType("FlyingFalconP"), 2);
  if (c == 'E') return Dagaz.Model.createPiece(design.getPieceType("CloudEagle"), 1);
  if (c == 'e') return Dagaz.Model.createPiece(design.getPieceType("CloudEagle"), 2);
  if (c == 'I') return Dagaz.Model.createPiece(design.getPieceType("CloudEagleP"), 1);
  if (c == 'i') return Dagaz.Model.createPiece(design.getPieceType("CloudEagleP"), 2);
  if (c == 'J') return Dagaz.Model.createPiece(design.getPieceType("TreacherousFox"), 1);
  if (c == 'j') return Dagaz.Model.createPiece(design.getPieceType("TreacherousFox"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("TreacherousFoxP"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("TreacherousFoxP"), 2);
  if (c == 'U') return Dagaz.Model.createPiece(design.getPieceType("RunningRabbit"), 1);
  if (c == 'u') return Dagaz.Model.createPiece(design.getPieceType("RunningRabbit"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("TenaciousFalcon"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("TenaciousFalcon"), 2);
  if (c == 'Y') return Dagaz.Model.createPiece(design.getPieceType("BearsEyes"), 1);
  if (c == 'y') return Dagaz.Model.createPiece(design.getPieceType("BearsEyes"), 2);
  if (c == 'Z') return Dagaz.Model.createPiece(design.getPieceType("RoamingBoar"), 1);
  if (c == 'z') return Dagaz.Model.createPiece(design.getPieceType("RoamingBoar"), 2);
  if (c == '!') return Dagaz.Model.createPiece(design.getPieceType("RaidingFalcon"), 1);
  if (c == '$') return Dagaz.Model.createPiece(design.getPieceType("RaidingFalcon"), 2);
  if (c == '(') return Dagaz.Model.createPiece(design.getPieceType("GlidingSwallow"), 1);
  if (c == ')') return Dagaz.Model.createPiece(design.getPieceType("GlidingSwallow"), 2);
  if (c == '[') return Dagaz.Model.createPiece(design.getPieceType("HeavenlyHorse"), 1);
  if (c == ']') return Dagaz.Model.createPiece(design.getPieceType("HeavenlyHorse"), 2);
  if (c == '{') return Dagaz.Model.createPiece(design.getPieceType("PloddingOx"), 1);
  if (c == '}') return Dagaz.Model.createPiece(design.getPieceType("PloddingOx"), 2);
  if (c == '~') return Dagaz.Model.createPiece(design.getPieceType("GoldenBird"), 1);
  if (c == '^') return Dagaz.Model.createPiece(design.getPieceType("GoldenBird"), 2);
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
  var r = '.';
  if (piece.type == design.getPieceType("CraneKing"))       r = 'K';
  if (piece.type == design.getPieceType("SparrowPawn"))     r = 'P';
  if (piece.type == design.getPieceType("ViolentWolf"))     r = 'W';
  if (piece.type == design.getPieceType("ViolentWolfP"))    r = 'V';
  if (piece.type == design.getPieceType("ViolentStag"))     r = 'S';
  if (piece.type == design.getPieceType("ViolentStagP"))    r = 'T';
  if (piece.type == design.getPieceType("FlyingGoose"))     r = 'G';
  if (piece.type == design.getPieceType("FlyingCock"))      r = 'C';
  if (piece.type == design.getPieceType("StruttingCrow"))   r = 'R';
  if (piece.type == design.getPieceType("SwoopingOwl"))     r = 'O';
  if (piece.type == design.getPieceType("BlindDog"))        r = 'B';
  if (piece.type == design.getPieceType("ClimbingMonkey"))  r = 'M';
  if (piece.type == design.getPieceType("Oxcart"))          r = 'X';
  if (piece.type == design.getPieceType("LiberatedHorse"))  r = 'H';
  if (piece.type == design.getPieceType("SwallowsWings"))   r = 'L';
  if (piece.type == design.getPieceType("SwallowsWingsP"))  r = 'A';
  if (piece.type == design.getPieceType("FlyingFalcon"))    r = 'F';
  if (piece.type == design.getPieceType("FlyingFalconP"))   r = 'D';
  if (piece.type == design.getPieceType("CloudEagle"))      r = 'E';
  if (piece.type == design.getPieceType("CloudEagleP"))     r = 'I';
  if (piece.type == design.getPieceType("TreacherousFox"))  r = 'J';
  if (piece.type == design.getPieceType("TreacherousFoxP")) r = 'N';
  if (piece.type == design.getPieceType("RunningRabbit"))   r = 'U';
  if (piece.type == design.getPieceType("TenaciousFalcon")) r = 'Q';
  if (piece.type == design.getPieceType("BearsEyes"))       r = 'Y';
  if (piece.type == design.getPieceType("RoamingBoar"))     r = 'Z';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  if (piece.type == design.getPieceType("RaidingFalcon"))   r = (piece.player == 1) ? '!' : '$' ;
  if (piece.type == design.getPieceType("GlidingSwallow"))  r = (piece.player == 1) ? '(' : ')' ;
  if (piece.type == design.getPieceType("HeavenlyHorse"))   r = (piece.player == 1) ? '[' : ']' ;
  if (piece.type == design.getPieceType("PloddingOx"))      r = (piece.player == 1) ? '{' : '}' ;
  if (piece.type == design.getPieceType("GoldenBird"))      r = (piece.player == 1) ? '~' : '^' ;
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
