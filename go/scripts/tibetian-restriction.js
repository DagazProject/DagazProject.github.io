(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tibetian-restriction") {
     checkVersion(design, name, value);
  }
}

var checkDirections = function(design, board, pos, f, r, l, positions) {
  var p = design.navigate(1, pos, f);
  if (p === null) return;
  if (_.indexOf(positions, p) < 0) positions.push(p);
  var q = design.navigate(1, p, r);
  if ((q !== null) && (_.indexOf(positions, q) < 0)) positions.push(q);
  p = design.navigate(1, p, f);
  if (p === null) return;
  if (_.indexOf(positions, p) < 0) positions.push(p);
  q = design.navigate(1, p, r);
  if ((q !== null) && (_.indexOf(positions, q) < 0)) positions.push(q);
  q = design.navigate(1, p, l);
  if ((q !== null) && (_.indexOf(positions, q) < 0)) positions.push(q);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var init = [];
  _.each(design.allPositions(), function (pos) {
      if (!design.inZone(0, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 1) return;
      init.push(pos);
  });
  if (!_.isUndefined(board.move) && board.move.isDropMove()) {
      init.push(board.move.actions[0][1][0]);
  }
  var positions = [];
  _.each(init, function(pos) {
      checkDirections(design, board, pos, 3, 1, 2, positions); // n e w
      checkDirections(design, board, pos, 1, 0, 3, positions); // e s n
      checkDirections(design, board, pos, 0, 2, 1, positions); // s w e
      checkDirections(design, board, pos, 2, 3, 0, positions); // w n s
  });
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      if (_.indexOf(positions, pos) >= 0) return;
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
