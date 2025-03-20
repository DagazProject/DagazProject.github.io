"use strict";

(function() {

var getDir = function() {
  var url = window.location.search.toString();
  var result = url.match(/[?&]dir=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return null;
  }
}

function isPresent(g, p, q) {
  for (var i = 0; i < g.length; i++) {
      if ((g[i].from == p) && (g[i].to == q)) return true;
      if ((g[i].from == q) && (g[i].to == p)) return true;
  }
  return false;
}

var augBoard = Dagaz.View.augBoard;

Dagaz.View.augBoard = function(view) {
  var design = Dagaz.Controller.app.design;
  var dir = getDir();
  if (dir !== null) {
      var dirs = dir.split(',');
      dirs = _.map(dirs, function(d) {
          if (design.getDirection(d) !== null) {
              return design.getDirection(d);
          }
          return +d;
      });
  }
  var group = [];
  _.each(design.allPositions(), function(p) {
      _.each(design.allDirections(), function(d) {
           if ((dir !== null) && (_.indexOf(dirs, d) < 0)) return;
           var q = design.navigate(1, p, d);
           if (q === null) return;
           if (isPresent(group, p, q)) return;
           group.push({
              from: p,
              to: q
           });
           var t = design.navigate(0, q, d);
           view.addDir(p, q, (t === null) || (t != p));
      });
  });
  if (!_.isUndefined(augBoard)) {
      augBoard(view);
  }
}

})();
