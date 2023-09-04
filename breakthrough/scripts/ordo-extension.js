(function() {

Dagaz.Model.WIDTH = 10;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ordo-extension") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var getRef = function() {
  var str = window.location.toString();;
  var result = str.match(/\/([^\/.]+\.html?)/);
  if (result) {
      str = result[1];
  }
  return str;
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + '?r=' + getRef() + '&setup='; 
  var prev = null; var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          var type = piece.player - 1;
          s = s + type + ":1";
      }
      if ((prev === null) || (prev != s)) {
          if (prev !== null) {
              url = url + prev;
              if (cnt > 0) {
                  url = url + "+" + cnt;
              }
              url = url + ";";
          }
          prev = s;
          cnt = 0;
      } else {
          cnt++;
      }
  });
  url = url + prev;
  if (cnt > 0) {
      url = url + "+" + cnt;
  }
  url = url + ";";
  go(url);
}

var sign = function(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}

Dagaz.Model.closure = function(board, move, group) {
  var design = board.game.design;
  var r = [];
  _.each(group, function(pos) {
      r.push(pos);
  });
  for (var i = 0; i < r.length; i++) {
      var pos = r[i];
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null) && (a[0][0] == pos)) {
               var target = a[1][0];
               var x   = Dagaz.Model.getX(pos);
               var y   = Dagaz.Model.getY(pos);
               var dx  = sign(Dagaz.Model.getX(target) - x);
               var dy  = sign(Dagaz.Model.getY(target) - y);
               var dir = design.findDirection(pos, pos + (dy * Dagaz.Model.WIDTH) + dx);
               if (dir !== null) {
                   while ((pos !== null) && (pos != target)) {
                       var piece = board.getPiece(pos);
                       if ((piece === null) || (piece.player != board.player)) break;
                       if (_.indexOf(r, pos) < 0) {
                           r.push(pos);
                       }
                       pos = design.navigate(board.player, pos, dir);
                   }
               }
          }
      });
  }
  return r;
}

var expand = function(design, board, player, group) {
  for (var i = 0; i < group.length; i++) {
      _.each(design.allDirections(), function(dir) {
           var p = design.navigate(player, group[i], dir);
           if ((p !== null) && (_.indexOf(group, p) < 0)) {
               var piece = board.getPiece(p);
               if ((piece !== null) && (piece.player == player)) {
                   group.push(p);
               }
           }
      });
  }
}

var isCoherence = function(design, board, player) {
  var r = true;
  var group = [];
  _.each(design.allPositions(), function(pos) {
      if (r) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == player)) {
              if (group.length == 0) {
                  group.push(pos);
                  expand(design, board, player, group);
              } else {
                  if (_.indexOf(group, pos) < 0) r = false;
              }
          }
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (f) return;
      if (move.mode == board.player) {
          f = true;
      }
  });
  if (f) {
      f = isCoherence(design, board, board.player);
  }
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      if (f && (move.mode == board.player)) {
          move.failed = true;
          return;
      }
      if (!isCoherence(design, b, board.player)) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
