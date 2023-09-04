(function() {

var row = 8;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "checkers-setup") {     
      checkVersion(design, name, value);
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

var getSetup = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "";
  }
}

var getX = function(pos) {
  return pos % row;
}

var getY = function(pos) {
  return (pos / row) | 0;
}

var notValid = function(pos, player) {
  if (getY(pos) % 2 == 0) {
      if (getX(pos) % 2 == 0) return true;
  } else {
      if (getX(pos) % 2 != 0) return true;
  }
  if (player == 2) {
      var x = getX(pos);
      var y = 7 - getY(pos);
      return x == y;
  }
  return false;
}

var isAttacked = function(a, positions) {
  var r = false;
  _.each(positions, function(b) {
      if (Math.abs(getX(a) - getX(b)) == Math.abs(getY(a) - getY(b))) {
          r = true;
      }
  });
  return r;
}

var isDanger = function(design, board, pos, player) {
  var r = false;
  if (player == 1) return r;
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(0, pos, dir);
      if (p === null) return;
      if (board.getPiece(p) !== null) return;
      p = design.navigate(1, pos, dir);
      while (p !== null) {
          if (board.getPiece(p) !== null) {
              r = true;
              return;
          }
          p = design.navigate(1, p, dir);
      }
  });
  return r;
}

var setup = Dagaz.Model.setup;

Dagaz.Model.setup = function(board, init) {
  if (getSetup(init)) {
      setup(board, init);
      return;
  }
  var seed = getSeed();
  console.log("Seed: " + seed);
  Math.seedrandom(seed);
  var design = Dagaz.Model.design;
  var cnt = design.positions.length;
  row = Math.sqrt(cnt) | 0;
  var positions = [];
  if (!_.isUndefined(design.reserve)) {
      _.each(_.keys(design.reserve), function(type) {
          _.each(_.keys(design.reserve[type]), function(player) {
               var piece = Dagaz.Model.createPiece(+type, +player);
               for (var i = 0; i < design.reserve[type][player]; i++) {
                    var pos = _.random(0, cnt - 1);
                    while (notValid(pos, +player) || (_.indexOf(positions, pos) >= 0) || isDanger(design, board, pos, +player)) {
                        pos = _.random(0, cnt - 1);
                    }
                    board.setPiece(pos, Dagaz.Model.createPiece(+type, +player));
                    positions.push(pos);
               }
          });
      });
  }
}

})();
