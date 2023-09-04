(function() {

Dagaz.AI.AI_FRAME     = 3000;
Dagaz.AI.REP_DEEP     = 30;
Dagaz.AI.MAX_QS_LEVEL = 4;
Dagaz.AI.MAX_AB_VARS  = 1000;
Dagaz.AI.MAX_QS_VARS  = 50;
Dagaz.AI.STALEMATE    = 0;

var penalty = [
  [   0,   0,   0,   0,   0,   0,   0,   0,
    -25, 105, 135, 270, 270, 135, 105, -25,
    -80,   0,  30, 176, 176,  30,   0, -80,
    -85,  -5,  25, 175, 175,  25,  -5, -85,
    -90, -10,  20, 125, 125,  20, -10, -90,
    -95, -15,  15,  75,  75,  15, -15, -95, 
   -100, -20,  10,  70,  70,  10, -20,-100, 
      0,   0,   0,   0,   0,   0,   0,   0 ],
  [   0,   0,   0,   0,   0,   0,   0,   0,
    -25, 105, 135, 270, 270, 135, 105, -25,
    -80,   0,  30, 176, 176,  30,   0, -80,
    -85,  -5,  25, 175, 175,  25,  -5, -85,
    -90, -10,  20, 125, 125,  20, -10, -90,
    -95, -15,  15,  75,  75,  15, -15, -95, 
   -100, -20,  10,  70,  70,  10, -20,-100, 
      0,   0,   0,   0,   0,   0,   0,   0 ],
  [ -60, -30, -10,  20,  20, -10, -30, -60,
     40,  70,  90, 120, 120,  90,  70,  40,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60,
    -60, -30, -10,  20,  20, -10, -30, -60 ],
  [-200,-100, -50, -50, -50, -50,-100,-200,
   -100,   0,   0,   0,   0,   0,   0,-100,
    -50,   0,  60,  60,  60,  60,   0, -50,
    -50,   0,  30,  60,  60,  30,   0, -50,
    -50,   0,  30,  60,  60,  30,   0, -50,
    -50,   0,  30,  30,  30,  30,   0, -50,
   -100,   0,   0,   0,   0,   0,   0,-100,
   -200, -50, -25, -25, -25, -25, -50,-200 ],
  [ -50, -50, -25, -10, -10, -25, -50, -50,
    -50, -25, -10,   0,   0, -10, -25, -50,
    -25, -10,   0,  25,  25,   0, -10, -25,
    -10,   0,  25,  40,  40,  25,   0, -10,
    -10,   0,  25,  40,  40,  25,   0, -10,
    -25, -10,   0,  25,  25,   0, -10, -25,
    -50, -25, -10,   0,   0, -10, -25, -50,
    -50, -50, -25, -10, -10, -25, -50, -50 ],
  [ -50, -50, -25, -10, -10, -25, -50, -50,
    -50, -25, -10,   0,   0, -10, -25, -50,
    -25, -10,   0,  25,  25,   0, -10, -25,
    -10,   0,  25,  40,  40,  25,   0, -10,
    -10,   0,  25,  40,  40,  25,   0, -10,
    -25, -10,   0,  25,  25,   0, -10, -25,
    -50, -25, -10,   0,   0, -10, -25, -50,
    -50, -50, -25, -10, -10, -25, -50, -50 ],
  [  50, 150, -25,-125,-125, -25, 150,  50,
     50, 150, -25,-125,-125, -25, 150,  50,
     50, 150, -25,-125,-125, -25, 150,  50,
     50, 150, -25,-125,-125, -25, 150,  50,
     50, 150, -25,-125,-125, -25, 150,  50,
     50, 150, -25,-125,-125, -25, 150,  50,
     50, 150, -25,-125,-125, -25, 150,  50,
    150, 250,  75, -25, -25,  75, 250, 150 ]
];

Dagaz.AI.getPrice = function(design, piece, pos) {
  var r = design.price[piece.type];
  if ((pos >= 16) && (pos < 80) && (piece.type > 0)) {
      if (piece.player == 1) {
          r += penalty[+piece.type - 1][pos - 16];
      } else {
          r += penalty[+piece.type - 1][79 - pos];
      }
  }
  return r;
}

Dagaz.AI.isMajorPiece = function(type) {
  if (type < 3) return false;
  if (type > 6) return false;
  return true;
}

var buildMobility = function(design, board, player, pos, dir, value) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  if (board.getPiece(p) !== null) return;
  board.mobility[player - 1] += value;
}

var buildStep = function(design, board, player, pos, dir, value) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return;
  if (board.getPiece(p) === null) {
      board.mobility[player - 1] += value;
  }
  if (board.player != player) {
      if (_.isUndefined(board.attackers[p])) {
          board.attackers[p] = [];
      }
      board.attackers[p].push(pos);
  } else {
      if (_.isUndefined(board.defenders[p])) {
          board.defenders[p] = [];
      }
      board.defenders[p].push(pos);
  }
}

var buildJump = function(design, board, player, pos, o, d, value) {
  var p = design.navigate(player, pos, o);
  if (p === null) return;
  p = design.navigate(player, p, d);
  if (p === null) return;
  if (board.getPiece(p) === null) {
      board.mobility[player - 1] += value;
  }
  if (board.player != player) {
      if (_.isUndefined(board.attackers[p])) {
          board.attackers[p] = [];
      }
      board.attackers[p].push(pos);
  } else {
      if (_.isUndefined(board.defenders[p])) {
          board.defenders[p] = [];
      }
      board.defenders[p].push(pos);
  }
}

var buildSlide = function(design, board, player, pos, dir, value) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (board.player != player) {
          if (_.isUndefined(board.attackers[p])) {
              board.attackers[p] = [];
          }
          board.attackers[p].push(pos);
      } else {
          if (_.isUndefined(board.defenders[p])) {
              board.defenders[p] = [];
          }
          board.defenders[p].push(pos);
      }
      if (board.getPiece(p) !== null) break;
      board.mobility[player - 1] += value;
      p = design.navigate(player, p, dir);
  }
}

var buildBoom = function(design, board, player, pos, d, u) {
  if (player == board.player) return;
  var p = design.navigate(player, pos, d);
  if (p === null) return;
  p = design.navigate(player, p, u);
  if (board.getPiece(p) === null) return;
  while (p !== null) {
      if (p != pos) {
          if (_.isUndefined(board.attackers[p])) {
              board.attackers[p] = [];
          }
          board.attackers[p].push(pos);
      }
      p = design.navigate(player, p, u);
  }
}

var buildCover = function(design, board) {
  board.attackers = []; 
  board.defenders = []; 
  board.mobility  = [0, 0];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) { // Platform
          buildMobility(design, board, piece.player, pos, 0, 100); // w
          buildMobility(design, board, piece.player, pos, 1, 100); // e
          buildMobility(design, board, piece.player, pos, 2, 100); // s
          buildMobility(design, board, piece.player, pos, 3, 100); // n
          return;
      }
      if (piece.type == 1) { // Pawn
          buildMobility(design, board, piece.player, pos, 3, 10); // n
          buildStep(design, board, piece.player, pos, 4, 10);     // ne
          buildStep(design, board, piece.player, pos, 7, 10);     // nw
          return;
      }
      if (piece.type == 2) { // Bomb
          buildMobility(design, board, piece.player, pos, 3, 10); // n
          buildBoom(design, board, piece.player, pos, 9, 8);      // down, up
          return;
      }
      if ((piece.type == 3) || (piece.type == 6)) { // Rook, Queen
          buildSlide(design, board, piece.player, pos, 0, 10);    // w
          buildSlide(design, board, piece.player, pos, 1, 10);    // e
          buildSlide(design, board, piece.player, pos, 2, 10);    // s
          buildSlide(design, board, piece.player, pos, 3, 10);    // n
          return;
      }
      if (piece.type == 4) { // Knight
          buildJump(design, board, piece.player, pos, 0, 6, 10);  // w, sw
          buildJump(design, board, piece.player, pos, 0, 7, 10);  // w, nw
          buildJump(design, board, piece.player, pos, 1, 4, 10);  // e, ne
          buildJump(design, board, piece.player, pos, 1, 5, 10);  // e, se
          buildJump(design, board, piece.player, pos, 2, 5, 10);  // s, se
          buildJump(design, board, piece.player, pos, 2, 6, 10);  // s, sw
          buildJump(design, board, piece.player, pos, 3, 4, 10);  // n, ne
          buildJump(design, board, piece.player, pos, 3, 7, 10);  // n, nw
          return;
      }
      if ((piece.type == 3) || (piece.type == 6)) { // Bishop, Queen
          buildSlide(design, board, piece.player, pos, 4, 10);    // ne
          buildSlide(design, board, piece.player, pos, 5, 10);    // se
          buildSlide(design, board, piece.player, pos, 6, 10);    // sw
          buildSlide(design, board, piece.player, pos, 7, 10);    // nw
          return;
      }
      if (piece.type == 7) { // King
          buildStep(design, board, piece.player, pos, 0, 10);     // w
          buildStep(design, board, piece.player, pos, 1, 10);     // e
          buildStep(design, board, piece.player, pos, 2, 10);     // s
          buildStep(design, board, piece.player, pos, 3, 10);     // n
          buildStep(design, board, piece.player, pos, 4, 10);     // ne
          buildStep(design, board, piece.player, pos, 5, 10);     // se
          buildStep(design, board, piece.player, pos, 6, 10);     // sw
          buildStep(design, board, piece.player, pos, 7, 10);     // nw
      }
  });
}

var getAttackers = function(design, board, player, pos) {
  if (_.isUndefined(board.attackers)) {
      buildCover(design, board);
  }
  var r = null;
  if (board.player == player) {
      r = board.attackers;
  } else {
      r = board.defenders;
  }
  if (_.isUndefined(r[pos])) return null;
  return r[pos];
}

var getMobility = function(design, board, player) {
  if (_.isUndefined(board.mobility)) {
      buildCover(design, board);
  }
  return board.mobility[player - 1];
}

var isAttacked = function(design, board, player, pos) {
  return getAttackers(design, board, player, pos) !== null;
}

Dagaz.AI.see = function(design, board, move) {
  if (!move.isSimpleMove()) return false;
  var pos = move.actions[0][0][0];
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  if (piece.type == 0) return true;
  pos = move.actions[0][1][0];
  piece = board.getPiece(pos);
  if (piece === null) return false;
  if (isAttacked(design, board, piece.player, pos)) return false;
  return true;
}

Dagaz.AI.inCheck = function(design, board) {
  if (_.isUndefined(board.inCheck)) {
      board.inCheck = false;
      var king = null;
      for (var pos = 0; pos < design.positions.length; pos++) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == board.player) && (piece.type == 7)) {
              if (king !== null) return false;
              king = pos;
          }
      }
      if (king === null) return false;
      board.inCheck = isAttacked(design, board, board.player, king);
  }
  return board.inCheck;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r += Dagaz.AI.getPrice(design, piece, pos);
          piece = move.actions[0][2][0];
          r += (Dagaz.AI.getPrice(design, piece, pos) / 2) | 0;
          pos = move.actions[0][0][0];
          piece = board.getPiece(pos);
          if (piece !== null) {
              r -= Dagaz.AI.getPrice(design, piece, pos);
          }
      }
  }
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  if (_.isUndefined(board.completeEval)) {
      board.completeEval = 0;
      _.each(design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if (piece === null) return;
           var v = Dagaz.AI.getPrice(design, piece, pos);
           var attackers = getAttackers(design, board, piece.player, pos);
           if ((attackers !== null) && (attackers.length > 0)) {
               v = (v / 2) | 0;
           }
           if (piece.player == board.player) {
               board.completeEval += v;
           } else {
               board.completeEval -= v;
           }
      });
      board.completeEval += getMobility(design, board, player);
      board.completeEval -= getMobility(design, board, design.nextPlayer(player));
  }
  if (board.player == player) {
      return board.completeEval;
  } else {
      return -board.completeEval;
  }
}

})();
