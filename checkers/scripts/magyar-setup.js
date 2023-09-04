(function() {

Dagaz.Controller.persistense = "setup";

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "magyar-setup") {
     checkVersion(design, name, value);
  }
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

var num  = rgx(/\d+/);
var str  = rgx(/[^=;+]+/);

var attr = seq([
    txt('='), str
]).then(function(r) {return r[1];});

var quan = seq([
    txt('+'), num
]).then(function(r) {return r[1];});

var parm = seq([
    num, txt(':'), num, opt(rep(attr))
]).then(function(r) {return {
    type:   r[0],
    player: r[2],
    attrs:  r[3]
};});

var term = seq([
    opt(parm), opt(quan), txt(';')
]).then(function(r) {return {
    body:   r[0],
    quan:   r[1]
};});

var conf = rep(term);

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  var setup  = getSetup();
  if (setup) {
      var r = conf.exec(setup, 0);
      if (r.end > 0) {
          var pos = 0;
          for (var ix = 0; ix < r.res.length; ix++, pos++) {
              if (pos >= design.positions.length) break;
              var piece = null;
              if ((ix < r.res.length) && !_.isUndefined(r.res[ix].body)) {
                  var type = r.res[ix].body.type;
                  var player = r.res[ix].body.player;
                  piece = Dagaz.Model.createPiece(type, player);
                  for (var i = 0; i < r.res[ix].body.attrs.length; i++) {
                       piece = piece.setValue(i, r.res[ix].body.attrs[i]);
                  }
              }
              board.setPiece(pos, piece);
              if (!_.isUndefined(r.res[ix].quan)) {
                  var cnt = +r.res[ix].quan;
                  for (var i = 0; i < cnt; i++) {
                       pos++;
                       if (pos >= design.positions.length) break;
                       board.setPiece(pos, piece);
                  }
              }
          }
          var turn = getTurn();
          if (turn) {
              board.turn   = +turn;
              board.player = design.currPlayer(board.turn);
          }
      }
  }
}

var checkEdge = function(design, board, z, f) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      if ((r >= 0) && (r < 2)) {
          var piece = board.getPiece(pos);
          if (design.inZone(f, board.player, pos) && (piece !== null)) {
              r = -1;
              return;
          }
          if (design.inZone(z, board.player, pos) && (piece !== null)) {
              r++;
          }
      }
  });
  return r > 1;
}

var getShift = function(design, board) {
  var r = 0;
  if (checkEdge(design, board, 0, 3)) r += Dagaz.Model.WIDTH - 1;
  if (checkEdge(design, board, 2, 1)) r -= Dagaz.Model.WIDTH - 1;
  if (checkEdge(design, board, 4, 7)) r++;
  if (checkEdge(design, board, 6, 5)) r--;
  return r;
}

Dagaz.Model.getSetup = function(design, board, offset) {
  var str = ""; var prev = null; var cnt = 0;
  if (!_.isUndefined(offset) && (offset > 0)) {
      str = ";+" + offset + ";";
  }
  _.each(design.allPositions(), function(pos) {
      if (offset < 0) {
          offset++;
          return;
      }
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          s = s + piece.type + ":" + piece.player;
          for (var i = 0; i < 10; i++) {
               var value = piece.getValue(i);
               if (value === null) break;
               s = s + "=" + value;
          }
      }
      if ((prev === null) || (prev != s)) {
          if (prev !== null) {
              str = str + prev;
              if (cnt > 0) {
                  str = str + "+" + cnt;
              }
              str = str + ";";
          }
          prev = s;
          cnt = 0;
      } else {
          cnt++;
      }
  });
  str = str + prev;
  if (cnt > 0) {
      str = str + "+" + cnt;
  }
  str = str + ";&turn=" + board.turn;
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

Dagaz.Model.continue = function(design, board, str) {
  return Dagaz.Model.getSetup(design, board, getShift(design, board));
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (getShift(design, board) != 0) {
      return 0;
  }
  return checkGoals(design, board, player);
}

})();
