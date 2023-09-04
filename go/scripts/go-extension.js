(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "go-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
      return Dagaz.Model.posToString(move.actions[0][1][0]);
  }
  return "";
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

var expand = function(design, board, player, group, dame, captured) {
   for (var i = 0; i < group.length; i++) {
        var pos = group[i];
        _.each(design.allDirections(), function(dir) {
            var p = design.navigate(player, pos, dir);
            if (p !== null) {
                var piece = board.getPiece(p);
                if (piece !== null) {
                    if ((piece.player == player) && (_.indexOf(group, p) < 0)) {
                        group.push(p);
                    }
                    if (!_.isUndefined(captured) && (_.indexOf(captured, p) >= 0)) {
                        if (_.indexOf(dame, p) < 0) dame.push(p);
                    }
                } else {
                    if (_.indexOf(dame, p) < 0) dame.push(p);
                }
            }
        });
   }
}

var capture = function(move, group) {
   _.each(group, function(pos) {
        move.capturePiece(pos);
   });
}

var change = function(move, board, group, dame, stop) {
   _.each(group, function(pos) {
        if (pos == stop) return;
        var piece = board.getPiece(pos);
        if (piece !== null) {
            piece = piece.setValue(0, dame);
            move.movePiece(pos, pos, piece);
        }
   });
}

var getPlayer = function(board, pos, stop) {
   var r = board.player;
   if (pos != stop) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           r = piece.player;
       } else {
           r = null;
       }
   }
   return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length == 1) && (move.actions[0][1] !== null) && (move.actions[0][2] !== null)) {
           var pos  = move.actions[0][1][0];
           var captured = []; var group = []; 
           var enemies  = []; var dame  = [ pos ];
           _.each(design.allDirections(), function(dir) {
               var p = design.navigate(board.player, pos, dir);
               if ((p !== null) && (_.indexOf(enemies, p) < 0)) {
                   var piece = board.getPiece(p);
                   if (piece !== null) {
                       if (piece.getValue(0) === null) {
                           move.failed = true;
                           return;
                       }
                       var value = +piece.getValue(0);
                       if (piece.player == board.player) {
                           group.push(p);
                       } else {
                           if (value <= 1) {
                               captured.push(p);
                               expand(design, board, piece.player, captured, []);
                               _.each(captured, function(q) {
                                    enemies.push(q);
                               });
                               dame.push(p);
                           }
                       }
                   } else {
                       dame.push(p);
                   }
               }
           });
           expand(design, board, board.player, group, dame);
           if (captured.length > 0) {
               capture(move, captured);
           } else {
               if (dame.length <= 1) {
                   move.failed = true;
                   return;
               }
           }
           var piece = move.actions[0][2][0].setValue(0, dame.length - 1);
           move.actions[0][2] = [ piece ];
           var done = [];
           _.each(design.allPositions(), function(p) {
                if (_.indexOf(done, p) >= 0) return;
                var player = getPlayer(board, p, pos);
                if (player === null) return;
                var dame = []; var group = [p];
                for (var i = 0; i < group.length; i++) {
                     _.each(design.allDirections(), function(dir) {
                          var q = design.navigate(1, group[i], dir);
                          if ((q === null) || (_.indexOf(group, q) >= 0)) return;
                          var x = getPlayer(board, q, pos);
                          if ((x === null) || (_.indexOf(captured, q) >= 0)) {
                              if (_.indexOf(dame, q)) dame.push(q);
                              return;
                          }
                          if (x != player) return;
                          group.push(q);
                     });
                }
                change(move, board, group, dame.length, pos);
           });
      }
  });
  CheckInvariants(board);
}

})();
