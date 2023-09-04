(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mine-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.PKM = function(view, positions) {
  if (positions) {       
      var app = view.controller;
      var pos = positions[0];
      if (!_.isUndefined(pos)) {
          var piece = app.board.getPiece(pos);
          if ((piece !== null) && (piece.type != 9)) return;
          if (_.isUndefined(app.board.ko)) {
              app.board.ko = [];
          }
          if (_.indexOf(app.board.ko, pos) < 0) {
              app.board.ko.push(pos);
          } else {
              app.board.ko = _.without(app.board.ko, pos);
          }
          view.markPositions(Dagaz.View.markType.KO, app.board.ko);
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (board.parent !== null) {
      _.each(board.moves, function(move) {
          if (move.isDropMove()) {
              var pos = move.actions[0][1][0];
              var piece = board.getPiece(pos);
              if (piece !== null) {
                  if (piece.type == 9) {
                      piece = piece.promote(10);
                      move.dropPiece(pos, piece);
                      move.sound = 1;
                      _.each(design.allPositions(), function(p) {
                          if (p == pos) return;
                          var piece = board.getPiece(p);
                          if ((piece !== null) && (piece.type == 9)) {
                              piece = piece.promote(11);
                              move.dropPiece(p, piece);
                          }
                      });
                  } else {
                      move.failed = true;
                  }
              } else {
                  var cnt = 0;
                  _.each(design.allDirections(), function(dir) {
                      var p = design.navigate(board.player, pos, dir);
                      if (p !== null) {
                          var piece = board.getPiece(p);
                          if ((piece !== null) && (piece.type >= 9)) cnt++;
                      }
                  });
                  move.dropPiece(pos, Dagaz.Model.createPiece(cnt, 1));
                  if (cnt == 0) {
                      var group = [ pos ];
                      for (var i = 0; i < group.length; i++) {
                           if (board.getPiece(group[i]) !== null) continue;
                           if (i > 0) {
                               cnt = 0;
                               _.each(design.allDirections(), function(dir) {
                                   var p = design.navigate(board.player, group[i], dir);
                                   if (p !== null) {
                                       var piece = board.getPiece(p);
                                       if ((piece !== null) && (piece.type > 8)) cnt++;
                                   }
                               });
                               move.dropPiece(group[i], Dagaz.Model.createPiece(cnt, 1));
                           }
                           if (cnt > 0) continue;
                           _.each(design.allDirections(), function(dir) {
                               var p = design.navigate(board.player, group[i], dir);
                               if ((p !== null) && (_.indexOf(group, p) < 0)) {
                                   group.push(p);
                               }
                           });
                      }
                  }
              }
          }
      });
  }
  if (!_.isUndefined(board.parent) && (board.parent !== null) && !_.isUndefined(board.parent.ko)) {
      ko = [];
      _.each(board.parent.ko, function(pos) {
           var piece = board.getPiece(pos);
           if ((piece === null) || (piece.type > 8)) {
               ko.push(pos);
           }
      });
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
