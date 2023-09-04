(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "wa-shogi-promotion") {
      promote[16] = 23; // Flying Falcon -> Tenacious Falcon
      promote[22] = 21; // Running Rabbit -> Treacherous fox
      promote[ 2] = 24; // Violent Wolf -> Bear's Eyes
      promote[ 4] = 25; // Violent Stag -> Roaming Boar
      promote[10] =  3; // Blind Dog -> Violent Wolf
      promote[11] =  5; // Climbing Monkey -> Violent Stag
      promote[ 6] = 15; // Flying Goose -> Swallow's Wings
      promote[ 7] = 26; // Flying Cock -> Raiding Falcon
      promote[14] = 27; // Swallow's Wings -> Gliding Swallow
      promote[ 8] = 17; // Strutting Crow -> Flying Falcon
      promote[ 9] = 19; // Swooping Owl -> Cloud Eagle
      promote[13] = 28; // Liberated Horse -> Heavenly Horse
      promote[12] = 29; // Oxcart -> Plodding Ox
      promote[ 1] = 30; // Sparrow Pawn -> Golden Bird
      checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  for (var i = 0; i < move.actions.length; i++) {
      var a = move.actions[i];
      if (a[0] === null) continue;
      if (a[1] === null) continue;
      r = Dagaz.Model.posToString(a[0][0]) + Dagaz.Model.posToString(a[1][0]);
      break;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos    = move.actions[0][0][0];
          var target = move.actions[0][1][0];
          if ((design.inZone(1, board.player, pos) || design.inZone(1, board.player, target)) && design.inZone(0, board.player, pos)) {
              var isForced = false;
              var piece = board.getPiece(pos);
              if ((piece !== null) && !_.isUndefined(promote[+piece.type])) {
                   var promoted = piece.promote(promote[+piece.type]);
                   move.actions[0][2] = [ promoted ];
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
