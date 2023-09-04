(function() {

Dagaz.Controller.persistense = "setup";
Dagaz.Controller.saveLastTo  = false;

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
      return "?setup=" + result;
  } else {
      return "";
  }
}

var getSetup = function() {
  var str = window.location.search.toString();
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

var getTurn = function() {
  var str = window.location.search.toString();
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
  var result = str.match(/[?&]seed=(\d+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]seed=(\d+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var getLast = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]last=(\d+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]last=(\d+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var getNum = function(c) {
  if ((c >= "0".charCodeAt(0)) && (c <= "9".charCodeAt(0))) {
      return c - "0".charCodeAt(0);
  }
  if ((c >= "A".charCodeAt(0)) && (c <= "Z".charCodeAt(0))) {
      return c - "A".charCodeAt(0) + 10;
  }
  return null;
}

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  var setup  = getSetup();
  var player = 1;
  if (setup) {
      setup = setup + ";";
      board.clear();
      var type = null;
      var pos  = null;
      for (var i = 0; i < setup.length; i++) {
           var c = setup.charCodeAt(i);
           if (c == "-".charCodeAt(0)) {
               player++;
               continue;
           }
           if (c == ";".charCodeAt(0)) {
               if ((type === null) || (pos === null)) break;
               var piece = Dagaz.Model.createPiece(type, player);
               board.setPiece(pos, piece);
               type = null;
               pos  = null;
           }
           var n = getNum(c);
           if (type === null) {
               type = n;
               continue;
           }
           if (pos === null) {
               pos = n;
           } else {
               pos *= 36;
               pos += n;
           }
      }
      var turn = getTurn();
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
      var last = getLast();
      if (last) {
          board.lastt = +last;
      }
  }
}

var toChar = function(n) {
  if (n < 10) {
      return String.fromCharCode("0".charCodeAt(0) + n);
  } else {
      return String.fromCharCode("A".charCodeAt(0) + n - 10);
  }
}

var toStr = function(n) {
  var r = "";
  if (n == 0) return "0";
  while (n > 0) {
      r = toChar(n % 36) + r;
      n = (n / 36) | 0;
  }
  return r;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "";
  for (var player = 1; player < design.playerNames.length; player++) {
      if (str != "") str = str + "-";
      _.each(design.allPositions(), function(pos) {
            var piece = board.getPiece(pos);
            if ((piece !== null) && (piece.player == player)) {
                str = str + toChar(piece.type);
                str = str + toStr(pos);
                str = str + ";";
            }
      });
  }
  str = str + ";&turn=" + board.turn;
  if (!_.isUndefined(Dagaz.Controller.seed)) {
      str = str + "&seed=" + Dagaz.Controller.seed;
  }
  if (Dagaz.Controller.saveLastTo && !_.isUndefined(board.lastt)) {
      str = str + "&last=" + board.lastt;
  }
  if (Dagaz.Controller.persistense == "setup") {
      var s = str + "&game=" + getName() + "*";
      localStorage.setItem('dagaz.setup', s);
  }
  return "?setup=" + str;
}

var getSetupSelector = Dagaz.Model.getSetupSelector;

Dagaz.Model.getSetupSelector = function(val) {
  if (Dagaz.Controller.randomized && _.isUndefined(Dagaz.Controller.seed)) {
      Dagaz.Controller.seed = getSeed();
      if (!Dagaz.Controller.seed) {
          Dagaz.Controller.seed = _.random(0, 10000);
      }
      console.log("Seed: " + Dagaz.Controller.seed);
      Math.seedrandom(+Dagaz.Controller.seed);
  }
  return getSetupSelector(val);
}

var clearGame = Dagaz.Controller.clearGame;

Dagaz.Controller.clearGame = function() {
   localStorage.setItem('dagaz.setup', '');
   if (!_.isUndefined(clearGame)) {
       clearGame();
   }
}

})();
