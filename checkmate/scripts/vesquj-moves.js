(function() {

Dagaz.View.SHIFT_X = 1;
Dagaz.View.SHIFT_Y = 1;

var isInternal = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "vesquj-moves") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("President");
  if (king === null) return 1;
  board.generate(design);
  if (board.moves.length == 0) return 1;
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!isInternal) {
      var king = null;
      var positions = [];
      _.each(design.allPositions(), function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player != board.player) return;
          if (piece.type == 5) {
              king = p;
          } else {
              positions.push(p);
          }
      });
      var b = board.copy();
      b.player = design.nextPlayer(board.player);
      isInternal = true;
      b.generateInternal(b, false);
      isInternal = false;
      var attacked = [];
      var attacker = [];
      _.each(b.moves, function(m) {
          if (!m.isSimpleMove()) return;
          attacked.push(m.actions[0][1][0]);
          if (m.actions[0][1][0] != king) return;
          attacker.push(m.actions[0][0][0]);
      });
      if (_.indexOf(attacked, +king) >= 0) {
          var moves = [];
          if (king !== null) {
              var piece = board.getPiece(king);
              if (piece !== null) {
                 _.each(positions, function(pos) {
                     if (_.indexOf(attacked, +pos) >= 0) return;
                     var target = board.getPiece(pos);
                     if (target === null) return;
                     var m = Dagaz.Model.createMove(0);
                     m.movePiece(king, pos, piece);
                     m.movePiece(pos, king, target);
                     moves.push(m);
                 });
              }
          }
          console.log(attacker);
          if (attacker.length == 1) {
              _.each(board.moves, function(m) {
                  if (!m.isSimpleMove()) return;
                  if (m.actions[0][1][0] != attacker[0]) return;
                  moves.push(m);
              });
          }
          board.moves = moves;
      }
  }
  CheckInvariants(board);
}

})();
