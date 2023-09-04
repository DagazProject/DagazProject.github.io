(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "filler-dark") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dark = []; var pattern = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 9) return;
      dark.push(pos);
      pattern = piece;
  });
  if (pattern !== null) {
      var group = [];
      _.each(dark, function(pos) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(1, pos, dir);
               if (p === null) return;
               if (_.indexOf(dark, p) >= 0) return;
               if (_.indexOf(group, p) >= 0) return;
               var piece = board.getPiece(p);
               if (piece === null) return;
               if (piece.type >= 7) return;
               group.push(p);
          });
      });
      var init = [];
      _.each(group, function(pos) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(1, pos, dir);
               if (p === null) return;
               var piece = board.getPiece(p);
               if (piece === null) return;
               if (piece.type >= 10) {
                   init.push(p);
               }
          });
      });
      var f = false;
      while (init.length > 0) {
          var pos = init.pop();
          var start = board.getPiece(pos);
          if (start !== null) {
              var done = [pos];
              _.each(design.allDirections(), function(dir) {
                  var p = design.navigate(1, pos, dir);
                  if ((p === null) || (_.indexOf(done, p) >= 0)) return;
                  var piece = board.getPiece(p);
                  if ((piece === null) || (piece.player < 3)) return;
                  if ((start.type == 11) && (piece.type != 9)) return;
                  var g = [p];
                  for (var i = 0; i < g.length; i++) {
                      _.each(design.allDirections(), function(d) {
                           var q = design.navigate(1, g[i], d);
                           if ((q === null) || (_.indexOf(done, q) >= 0)) return;
                           var x = board.getPiece(q);
                           if ((x === null) || (x.player < 3)) return;
                           if (x.type != piece.type) return;
                           done.push(q);
                           g.push(q);
                      });
                  }
              });
              done = _.union(done, group);
              done = _.union(done, dark);
              f = true;
              if (start.type == 10) {
                  var pieces = [];
                  for (var i = 0; i < 7; i++) {
                       pieces.push(Dagaz.Model.createPiece(i, 3));
                  }
                  _.each(board.moves, function(move) {
                      _.each(done, function(pos) {
                          move.movePiece(pos, pos, pieces[_.random(6)]);
                      });
                      move.sound = 10;
                  });
              }
              if (start.type == 11) {
                  var wall = Dagaz.Model.createPiece(8, 3);
                  _.each(board.moves, function(move) {
                      _.each(done, function(pos) {
                          move.movePiece(pos, pos, wall);
                      });
                      move.sound = 11;
                  });
              }
          }
      }
      if (f) return;
      _.each(board.moves, function(move) {
          _.each(group, function(pos) {
               move.movePiece(pos, pos, pattern);
          });
      });
  }
  CheckInvariants(board);
}

})();
