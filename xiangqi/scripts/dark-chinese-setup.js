Dagaz.Controller.persistense = "setup";

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

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
  });
  return r;
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

var getSeed = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&](seed|sid)=([^&]*)/);
  if (result) {
      return result[2];
  } else {
      return "" + _.random(0, 10000);
  }
}

var createPiece = function(design, c) {
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Soldier"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Soldier"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Horse"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Horse"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Elephant"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Elephant"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Chariot"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Chariot"), 2);
  if (c == 'A') return Dagaz.Model.createPiece(design.getPieceType("Mandarin"), 1);
  if (c == 'a') return Dagaz.Model.createPiece(design.getPieceType("Mandarin"), 2);
  if (c == 'C') return Dagaz.Model.createPiece(design.getPieceType("Cannon"), 1);
  if (c == 'c') return Dagaz.Model.createPiece(design.getPieceType("Cannon"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("General"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("General"), 2);
  if (c == 'X') return Dagaz.Model.createPiece(design.getPieceType("UnknownSoldier"), 1);
  if (c == 'x') return Dagaz.Model.createPiece(design.getPieceType("UnknownSoldier"), 2);
  if (c == 'Y') return Dagaz.Model.createPiece(design.getPieceType("UnknownHorse"), 1);
  if (c == 'y') return Dagaz.Model.createPiece(design.getPieceType("UnknownHorse"), 2);
  if (c == 'Z') return Dagaz.Model.createPiece(design.getPieceType("UnknownElephant"), 1);
  if (c == 'z') return Dagaz.Model.createPiece(design.getPieceType("UnknownElephant"), 2);
  if (c == 'T') return Dagaz.Model.createPiece(design.getPieceType("UnknownChariot"), 1);
  if (c == 't') return Dagaz.Model.createPiece(design.getPieceType("UnknownChariot"), 2);
  if (c == 'U') return Dagaz.Model.createPiece(design.getPieceType("UnknownMandarin"), 1);
  if (c == 'u') return Dagaz.Model.createPiece(design.getPieceType("UnknownMandarin"), 2);
  if (c == 'V') return Dagaz.Model.createPiece(design.getPieceType("UnknownCannon"), 1);
  if (c == 'v') return Dagaz.Model.createPiece(design.getPieceType("UnknownCannon"), 2);
  return null;
}

var getPositions = function(design, player) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(8, player, pos)) {
          r.push(pos);
      }
  });
  return r;
}

var addPiece = function(design, board, player, type, positions) {
  if (positions.length == 0) return [];
  if (positions.length > 1) {
      var ix = _.random(0, positions.length - 1);
      board.setPiece(positions[ix], Dagaz.Model.createPiece(type, player));
      return _.without(positions, positions[ix]);
  } else {
      board.setPiece(positions[0], Dagaz.Model.createPiece(type, player));
      return [];
  }
}

var addPieces = function(design, board, player, type, cnt, positions) {
  for (;(cnt > 0) && (positions.length > 0); cnt--) {
      positions = addPiece(design, board, player, type, positions);
  }
  return positions;
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
      var turn = getTurn(init);
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
  } else {
      var seed = getSeed();
      console.log("Seed: " + seed);
      Math.seedrandom(seed);
      var design = Dagaz.Model.design;
      var positions = getPositions(design, 1);
      positions = addPieces(design, board, 1,  7, 5, positions);
      positions = addPieces(design, board, 1,  8, 2, positions);
      positions = addPieces(design, board, 1,  9, 2, positions);
      positions = addPieces(design, board, 1, 10, 2, positions);
      positions = addPieces(design, board, 1, 11, 2, positions);
      positions = addPieces(design, board, 1, 12, 2, positions);
      positions = getPositions(design, 2);
      positions = addPieces(design, board, 2,  7, 5, positions);
      positions = addPieces(design, board, 2,  8, 2, positions);
      positions = addPieces(design, board, 2,  9, 2, positions);
      positions = addPieces(design, board, 2, 10, 2, positions);
      positions = addPieces(design, board, 2, 11, 2, positions);
      positions = addPieces(design, board, 2, 12, 2, positions);
  }
}

var getPieceNotation = function(design, piece) {
  var r ='1';
  if (piece.type == design.getPieceType("UnknownSoldier"))  r = 'X';
  if (piece.type == design.getPieceType("UnknownHorse"))    r = 'Y';
  if (piece.type == design.getPieceType("UnknownElephant")) r = 'Z';
  if (piece.type == design.getPieceType("UnknownChariot"))  r = 'T';
  if (piece.type == design.getPieceType("UnknownMandarin")) r = 'U';
  if (piece.type == design.getPieceType("UnknownCannon"))   r = 'V';
  if (piece.type == design.getPieceType("Soldier"))         r = 'P';
  if (piece.type == design.getPieceType("Horse"))           r = 'N';
  if (piece.type == design.getPieceType("Elephant"))        r = 'B';
  if (piece.type == design.getPieceType("Chariot"))         r = 'R';
  if (piece.type == design.getPieceType("Mandarin"))        r = 'A';
  if (piece.type == design.getPieceType("Cannon"))          r = 'C';
  if (piece.type == design.getPieceType("General"))         r = 'K';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

InitializeFromFen = Dagaz.AI.InitializeFromFen;

Dagaz.AI.InitializeFromFen = function(fen) {
  var r = ''; var pos = 0;
  var chunks = fen.split(' ');
  var pieces = chunks[0];
  for (var i = 0; i < pieces.length; i++) {
       var c = pieces.charAt(i);
       var ix = _.indexOf(['/', '1', '2', '3', '4', '5', '6', '7', '8', '9'], c);
       if (ix >= 0) {
           r = r + c;
           pos += ix;
       } else if (_.indexOf(['x', 'X', 'y', 'Y', 'z', 'Z', 't', 'T', 'u', 'U', 'v', 'V'], c) >= 0) {
           var isBlack = c >= 'a' && c <= 'z';
           if (_.indexOf([54, 56, 58, 60, 62, 27, 29, 31, 33, 35], pos) >= 0) {
               r = r + (isBlack ? 'p' : 'P');
           } else
           if (_.indexOf([82, 88, 1, 7], pos) >= 0) {
               r = r + (isBlack ? 'n' : 'N');
           } else
           if (_.indexOf([83, 87, 2, 6], pos) >= 0) {
               r = r + (isBlack ? 'b' : 'B');
           } else
           if (_.indexOf([81, 89, 0, 8], pos) >= 0) {
               r = r + (isBlack ? 'r' : 'R');
           } else
           if (_.indexOf([84, 86, 3, 5], pos) >= 0) {
               r = r + (isBlack ? 'a' : 'A');
           } else
           if (_.indexOf([64, 70, 19, 25], pos) >= 0) {
               r = r + (isBlack ? 'c' : 'C');
           } else {
               r = r + '0';
           }
           pos++;
       } else {
           r = r + c;
           pos++;
       }
  }
  return InitializeFromFen(r + ' ' + chunks[1]);
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
      str += " w";
  } else {
      str += " b";
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
