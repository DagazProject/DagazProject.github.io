(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "3d-klin-zha-drop") {
     checkVersion(design, name, value);
  }
}

var getZones = function(design, board) {
  var r = [1, 2, 3, 4];
  for (var zone = 1; zone < 5; zone++) {
      for (var pos = 0; pos < design.positions.length; pos++) {
           if (!design.inZone(zone, 1, pos)) continue;
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           if (piece.player == board.player) return [zone];
           r = _.without(r, zone);
      }
  }
  return r;
}

var inZones = function(design, dst, z) {
  for (var zone = 1; zone < 5; zone++) {
       if (_.indexOf(z, zone) < 0) continue;
       if (design.inZone(zone, 1, dst)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var mode = 1;
  var f = false;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(0, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 0) return;
      f = true;
  });
  if (f) {
    _.each(design.allPositions(), function(src) {
      if (!design.inZone(0, board.player, src)) return;
      var piece = board.getPiece(src);
      if (piece === null) return;
      if (piece.player != board.player) return;
      var z = getZones(design, board);
      _.each(design.allPositions(), function(dst) {
          if (design.inZone(0, board.player, dst)) return;
          if (!inZones(design, dst, z)) return;
          var target = board.getPiece(dst);
          if (target !== null) {
              if (piece.type != 0) return;
              if (target.player != board.player) return;
              if (target.type >= 9) return;
              if (mode == 2) return;
              var m = Dagaz.Model.createMove(0);
              m.movePiece(src, dst, piece.promote(+target.type + 1));
              m.movePiece(dst, src, target);
              board.moves.push(m);
              mode = 0;
          }
          if (piece.type == 0) return;
          var m = Dagaz.Model.createMove(2);
          m.movePiece(src, dst, piece);
          board.moves.push(m);
          mode = 2;
      });
    });
  }
  _.each(board.moves, function(move) {
      if (move.mode == mode) return;
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
