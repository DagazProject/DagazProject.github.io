(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "ko-shogi-engineer") {
      promote[ 11 ] = 10; // Engineer -> Poison flame
      promote[ 48 ] = 47; // European cannon -> Chariot of the Gods
      promote[ 42 ] = 41; // Cannon -> Gun carriage
      promote[ 62 ] = 61; // Shield -> Shield unit
      promote[ 58 ] = 57; // Shield unit -> Imperial base
      promote[ 60 ] = 59; // Chariot ->  Chariot unit 
      promote[ 56 ] = 55; // Chariot unit -> Millenary
  } else {
      checkVersion(design, name, value);
  }
}

var checkUnit = function(design, board, player, pos, except, dir, move) {
  var p = design.navigate(player, pos, dir);
  if ((p === null) || (p == except)) return;
  var piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player != player) return;
  if (_.isUndefined(promote[piece.type])) return;
  var promoted = piece.promote(promote[piece.type]);
  move.movePiece(p, p, promoted);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var nw = design.getDirection("nw");
  var e = design.getDirection("e"); var ne = design.getDirection("ne");
  var w = design.getDirection("w"); var sw = design.getDirection("sw");
  var s = design.getDirection("s"); var se = design.getDirection("se");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == 11)) {
              p = move.actions[0][1][0];
              checkUnit(design, board, board.player, p, pos, n, move);
              checkUnit(design, board, board.player, p, pos, e, move);
              checkUnit(design, board, board.player, p, pos, w, move);
              checkUnit(design, board, board.player, p, pos, s, move);
              checkUnit(design, board, board.player, p, pos, nw, move);
              checkUnit(design, board, board.player, p, pos, ne, move);
              checkUnit(design, board, board.player, p, pos, sw, move);
              checkUnit(design, board, board.player, p, pos, se, move);
          }
      }
  });
  CheckInvariants(board);
}

})();
