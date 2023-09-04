(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "redstone-capturing") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      var done = []; var f = false;
      var isSuicide = true;
      var stone = move.actions[0][2][0];
      board.setPiece(pos, stone);
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if ((p === null) || (_.indexOf(done, p) >= 0)) return;
          var piece = board.getPiece(p);
          if (piece === null) {
              isSuicide = false;
              return;
          }
          if (piece.player > 2) return;
          if (piece.player == board.player) isSuicide = false;
          var group = [p]; var dame = [];
          for (var i = 0; i < group.length; i++) {
               _.each(design.allDirections(), function(dir) {
                    var q = design.navigate(board.player, group[i], dir);
                    if ((q === null) || (_.indexOf(group, q) >= 0)) return;
                    var x = board.getPiece(q);
                    if (x === null) {
                        if (_.indexOf(dame, q)) dame.push(q);
                        return;
                    }
                    if (x.player != piece.player) return;
                    group.push(q);
               });
          }
          if (dame.length == 0) {
               f = true;
               _.each(group, function(p) {
                    if (p == pos) return;
                    move.capturePiece(p);
               });
          }
          done = _.union(done, group);
      });
      board.setPiece(pos, null);
      if (f) {
          move.actions[0][2] = [stone.changeOwner(3)];
      }
      if (isSuicide) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
