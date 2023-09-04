(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "traverse-setup") {
      checkVersion(design, name, value);
  }
}

var getSetup = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "";
  }
}

var getTurn = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]turn=(\d+)/);
  if (result) {
      return result[1];
  } else {
      return "";
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

var getAvail = function(design, player) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(1, player, pos)) {
          r.push(pos);
      }
  });
  return r;
}

var addPiece = function(board, type, player, avail) {
  var ix = 0;
  if (avail.length > 1) {
      ix = _.random(0, avail.length - 1);
  }
  board.setPiece(avail[ix], Dagaz.Model.createPiece(type, player));
  return _.without(avail, avail[ix]);
}

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
          _.each(_.keys(board.reserve), function(t) {
              _.each(_.keys(board.reserve[t]), function(p) {
                  board.reserve[t][p] = 0;
              });
          });
      }
  } else {
      for (var player = 2; player <= 4; player++) {
           var avail = getAvail(design, player);
           avail = addPiece(board, 0, player, avail); avail = addPiece(board, 0, player, avail);
           avail = addPiece(board, 1, player, avail); avail = addPiece(board, 1, player, avail);
           avail = addPiece(board, 2, player, avail); avail = addPiece(board, 2, player, avail);
           avail = addPiece(board, 3, player, avail); avail = addPiece(board, 3, player, avail);
      }
  }
}

Dagaz.Model.getSetup = function(design, board) {
  var str = ""; var prev = null; var cnt = 0;
  _.each(design.allPositions(), function(pos) {
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
  return "?setup=" + str;
}

})();
