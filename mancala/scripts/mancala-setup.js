(function() {

Dagaz.Controller.persistense = "setup";

var checkVersion = Dagaz.Model.checkVersion;
var cnt = 0;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "mancala-setup") {
      cnt = +value;
  } else {
      checkVersion(design, name, value);
  }
}

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-alt", "");
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

var getGlobal = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]global=([;\d]+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]global=([;\d]+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

function Pattern(exec) {
    this.exec = exec;
    this.then = function (transform) {
        return new Pattern(function (str, pos) {
            var r = exec(str, pos);
            return r && { res: transform(r.res), end: r.end };
        });
    };
}

function txt(text) {
    return new Pattern(function (str, pos) {
        if (str.substr(pos, text.length) == text)
            return { res: text, end: pos + text.length };
    });
}

function rgx(regexp) {
    return new Pattern(function (str, pos) {
        var m = regexp.exec(str.slice(pos));
        if (m && m.index == 0)
            return { res: m[0], end: pos + m[0].length };
    });
}

function opt(pattern) {
    return new Pattern(function (str, pos) {
        return pattern.exec(str, pos) || { res: void 0, end: pos };
    });
}

function seq(patterns) {
    return new Pattern(function (str, pos) {
        var i, r, end = pos, res = [];
        for (i = 0; i < patterns.length; i++) {
            r = patterns[i].exec(str, end);
            if (!r) return;
            res.push(r.res);
            end = r.end;
        }
        return { res: res, end: end };
    });
}

function rep(pattern, separator) {
    var separated = !separator ? pattern :
        seq([separator, pattern]).then(function(r) {return r[1];});
    return new Pattern(function (str, pos) {
        var res = [], end = pos, r = pattern.exec(str, end);
        while (r && r.end > end) {
            res.push(r.res);
            end = r.end;
            r = separated.exec(str, end);
        }
        return { res: res, end: end };
    });
}

var num  = rgx(/-?\d+/);

var attr = seq([
    txt('='), num
]).then(function(r) {return r[1];});

var parm = seq([
    num, txt(':'), num, opt(rep(attr))
]).then(function(r) {return {
    type:   r[0],
    player: r[2],
    attrs:  r[3]
};});

var term = seq([
    opt(parm), txt(';')
]).then(function(r) {return r[0];});

var conf = rep(term);

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  if (setup) {
      var r = conf.exec(setup, 0);
      if (r.end > 0) {
          _.each(design.allPositions(), function(pos) {
              var piece = null;
              var cnt   = 0;
              if ((pos < r.res.length) && !_.isUndefined(r.res[pos])) {
                  var type = r.res[pos].type;
                  var player = r.res[pos].player;
                  piece = Dagaz.Model.createPiece(type, player);
                  for (var i = 0; i < r.res[pos].attrs.length; i++) {
                       piece = piece.setValue(i, +r.res[pos].attrs[i]);
                       cnt += +r.res[pos].attrs[i];
                  }
              }
              if (cnt != 0) {
                  board.setPiece(pos, piece);
              } else {
                  board.setPiece(pos, null);
              }
          });
          var turn = getTurn(init);
          if (turn) {
              board.turn   = +turn;
              board.player = design.currPlayer(board.turn);
          }
          var g = getGlobal();
          if (g) {
              Dagaz.Model.setGlobal(design, board, g);
          }
      }
      board.noInitial = true;
  } else {
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == 0)) {
              piece = piece.setValue(0, cnt);
              board.setPiece(pos, piece);
          }
      });
  }
}

Dagaz.Model.getGlobal = function(design, board) {
  var r = "";
  var k = _.keys(board.values);
  if (k.length > 0) {
     for (var i = 0; i <= _.max(k); i++) {
          var v = board.getValue(i);
          if (v !== null) {
              r = r + v;
          }
          r = r + ";";
     }
  }
  return r;
}

Dagaz.Model.setGlobal = function(design, board, str) {
  var ix = 0; var n = null;
  for (var i = 0; i < str.length; i++) {
       if (str[i] == ';') {
           if (n !== null) {
               board.setValue(ix, n);
           }
           n = null;
           ix++;
       } else {
           if (n !== null) {
               n = n * 10;
           } else {
               n = 0;
           }
           n += +str[i];
       }
  }
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "";
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          str = str + piece.type + ":" + piece.player;
          for (var i = 0; i < 10; i++) {
               var value = piece.getValue(i);
               if (value === null) break;
               str = str + "=" + value;
          }
      }
      str = str + ";";
  });
  str = str + ";&turn=" + board.turn;
  var g = Dagaz.Model.getGlobal(design, board);
  if (g != "") {
      str = str + "&global=" + g;
  }
  if (Dagaz.Controller.persistense == "setup") {
      var s = str + "&game=" + getName() + "*";
      localStorage.setItem('dagaz.setup', s);
  }
  return "?setup=" + str;
}

var clearGame = Dagaz.Controller.clearGame;

Dagaz.Controller.clearGame = function() {
   localStorage.setItem('dagaz.setup', '');
   if (!_.isUndefined(clearGame)) {
       clearGame();
   }
}

})();
