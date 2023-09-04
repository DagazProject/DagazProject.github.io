(function() {

var cnt = 18;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "mine-setup") {
      cnt = +value;
  } else {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.play)) {
    Dagaz.Controller.addSound(0, "../sounds/on.wav", true);
    Dagaz.Controller.addSound(1, "../sounds/shoot.wav", true);
    Dagaz.Controller.addSound(2, "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/shoot.wav", true);
}

var countNeighbors = function(design, board, pos, empty, setup) {
  var r = 0;
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(board.player, pos, dir);
      if (p !== null) {
          if (p == empty) return;
          if (_.indexOf(setup, p) >= 0) r++;
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (board.parent === null) {
      var setup = [];
      for (var i = 0; i < cnt; i++) {
          var pos = _.random(0, design.positions.length - 1);
          if (_.indexOf(setup, pos) < 0) setup.push(pos);
      }
      _.each(board.moves, function(move) {
          if (move.isDropMove()) {
              var pos = move.actions[0][1][0];
              var t = countNeighbors(design, board, pos, pos, setup);
              move.dropPiece(pos, Dagaz.Model.createPiece(t, 1));
              if (t == 0) {
                  var group = [ pos ];
                  for (var i = 0; i < group.length; i++) {
                      if (i > 0) {
                          if (_.indexOf(setup, group[i]) >= 0) continue;
                          t = countNeighbors(design, board, group[i], pos, setup);
                          move.dropPiece(group[i], Dagaz.Model.createPiece(t, 1));
                          if (t > 0) continue;
                      }
                      _.each(design.allDirections(), function(dir) {
                          var p = design.navigate(board.player, group[i], dir);
                          if ((p !== null) && (_.indexOf(group, p) < 0)) group.push(p);
                      });
                  }
              }
              _.each(setup, function(p) {
                  if (p == pos) return;
                  move.dropPiece(p, Dagaz.Model.createPiece(9, 1));
              });
          }
      });
  }
  CheckInvariants(board);
}

})();
