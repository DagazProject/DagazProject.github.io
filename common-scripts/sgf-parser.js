(function() {

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

function term(end, esc) {
    return new Pattern(function (str, pos) {
       var f = false;
       for (var i = pos; i < str.length; i++) {
           if (str.charAt(i) == esc) {
               f = true;
               continue;
           }
           if (!f && (str.charAt(i) == end)) {
               return { res: str.substr(pos, (i - pos)), end: i };
           }
           f = false;
       }
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

function any(patterns) {
    return new Pattern(function (str, pos) {
        for (var r, i = 0; i < patterns.length; i++)
            if (r = patterns[i].exec(str, pos))
                return r;
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

var wsp = rgx(/\s+/);

var arg = seq([txt('['),
              term(']', '\\'),
              txt(']')
          ])
         .then(function(r) {return r[1];});

var name = rgx(/\w[\w\d]*/);
var cmd = seq([opt(txt(';')), opt(wsp),
              name, opt(wsp),
              rep(arg, opt(wsp))
          ])
         .then(function(r) {return {name: r[2], arg: r[4]};});

var subseq = new Pattern(function(str, pos) {return sgf.exec(str, pos);});

var sgf = seq([txt('('), opt(wsp),
              rep(any([cmd, subseq]), opt(wsp)),
              txt(')')
          ])
         .then(function(r) {return r[2];});

Dagaz.Model.parseSgf = function(text) {
    var r = sgf.exec(text, 0);
    if (r) {
        return r.res;
    }
}

})();
