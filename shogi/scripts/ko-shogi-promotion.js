(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "ko-shogi-promotion") {
      promote[ 22 ] = 21; // Clerk -> Master at arms
      promote[ 24 ] = 23; // Staff officer -> Banner and drums
      promote[ 20 ] = 19; // Aide de camp -> Quartermaster
      promote[ 17 ] = 16; // Aide -> Town brigade
      promote[ 15 ] = 14; // Staff -> Village brigade
      promote[ 13 ] = 12; // Chief of staff -> Vice commander
      promote[ 11 ] = 10; // Engineer -> Poison flame
      promote[  9 ] =  8; // Taoist Priest -> Twelve-mile fog
      promote[  7 ] =  6; // Spiritual monk -> Immaculate light
      promote[  5 ] =  4; // Advance guard -> Heaven's vengeance
      promote[ 39 ] =  1; // Middle troop -> Governor
      promote[ 36 ] = 35; // Drum -> Thunderclap
      promote[ 38 ] = 37; // Banner -> Roaming assault
      promote[ 34 ] = 33; // Sentry -> Centuria
      promote[ 32 ] = 31; // Millenary -> Dragon ascending
      promote[ 30 ] = 29; // Quartermaster -> Tiger wing
      promote[ 28 ] = 27; // Centuria -> War hawk
      promote[ 26 ] = 25; // Rear guard -> Earth's vengeance
      promote[ 48 ] = 47; // European cannon -> Chariot of the Gods
      promote[ 46 ] = 45; // Long bow -> Longbow cavalryman
      promote[ 44 ] = 43; // Crossbow -> Crossbow cavalryman
      promote[ 42 ] = 41; // Cannon -> Gun carriage
      promote[ 52 ] = 51; // Cavalryman -> Cavalry
      promote[ 50 ] = 49; // Cavalry -> Winged horse
      promote[  3 ] =  2; // Pawn -> Patrol unit
      promote[ 64 ] =  2; // Pawn -> Patrol unit
      promote[ 54 ] = 53; // Patrol unit -> Commissar
      promote[ 62 ] = 61; // Shield -> Shield unit
      promote[ 58 ] = 57; // Shield unit -> Imperial base
      promote[ 60 ] = 59; // Chariot ->  Chariot unit 
      promote[ 56 ] = 55; // Chariot unit -> Millenary
      promote[ 63 ] = 53; // Vanguard -> Commissar
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var promoted = null;
      var action   = null;
      if ((move.actions.length > 0) && (move.actions[0][0] !== null)) {
          var action   = move.actions[0];
          var pos      = action[0][0];
          var piece    = board.getPiece(pos);
          if (move.actions[0][1] !== null) {
              var target = action[1][0];
              var enemy  = board.getPiece(target);
              if (!_.isUndefined(promote[piece.type])) {
                  if (design.inZone(0, board.player, pos)) {
                      promoted = piece.promote(promote[piece.type]);
                  }
                  if (_.indexOf([9, 7, 48, 46, 44, 42], +piece.type) < 0) { // Taoist priest, Spiritual monk, European cannon, Long bow, Crossbow, Cannon
                      _.each(move.actions, function(a) {
                          if ((a[0] !== null) && (a[1] !== null)) {
                              if (design.inZone(0, board.player, a[1][0])) {
                                  promoted = piece.promote(promote[piece.type]);
                              }
                              action = a;
                          }
                      });
                      if (piece.type == 22) { // Clerk
                          var f = true;
                          _.each(design.allPositions(), function(pos) {
                              if (!design.inZone(0, board.player, pos)) return;
                              var piece = board.getPiece(pos);
                              if ((piece === null) || (piece.player != board.player)) return;
                              if (_.indexOf([4, 25], +piece.type) < 0) return; // Heaven's vengeance, Earth's vengeance
                              f = false;
                          });
                          if (f) {
                              promoted = null;
                          }
                      }
                  }
              }
              if ((piece !== null) && (enemy !== null) && !_.isUndefined(promote[piece.type])) {
                  if ((_.indexOf([20, 17, 15, 13, 11, 39, 36, 38, 34, 3, 64, 62], +piece.type) >= 0) && // Step movers
                      (_.indexOf([18, 31, 37, 35, 0, 1, 39, 38], +enemy.type) >= 0)) { // Sumo wrestler, Dragon ascending, Roaming assault, Thunderclap, General, Governor, Middle troop, Banner
                      promoted = piece.promote(promote[piece.type]);
                  }
                  if ((piece.type == 52) && (enemy.type == 48)) { // Cavalryman x European cannon
                      promoted = piece.promote(promote[piece.type]);
                  }
                  if ((_.indexOf([22, 24, 5, 32, 30, 28, 26, 52, 54, 58, 60, 56, 63], +piece.type) >= 0) && // Clerk, Staff officer, Advance guard, Millenary, Quartermaster, Centuria, Rear guard, Cavalryman, Patrol unit, Shield unit, Chariot, Chariot unit, Vanguard
                      (_.indexOf([0, 1, 39, 38], +enemy.type) >= 0)) { // General, Governor, Middle troop, Banner
                      promoted = piece.promote(promote[piece.type]);
                  }
              }
              if (piece.type == 50) { // Cavalry
                  _.each(move.actions, function(a) {
                      if ((a[0] !== null) && (a[1] !== null)) {
                          var enemy = board.getPiece(a[1][0]);
                          if ((enemy !== null) && (enemy.player != board.player) && (_.indexOf([0, 1, 39, 38], +enemy.type) >= 0)) { // General, Governor, Middle troop, Banner
                              promoted = piece.promote(promote[piece.type]);
                          }
                          action = a;
                      }
                  });
              }
              if ((enemy !== null) && (enemy.type == 36)) { // Drum
                  _.each(design.allPositions(), function(pos) {
                       var piece = board.getPiece(pos);
                       if (piece === null) return;
                       if (piece.player == board.player) return;
                       if (piece.type == 3) { // Pawn
                           move.movePiece(pos, pos, piece.promote(64));
                       }
                  });
              }
              if ((enemy !== null) && (enemy.type == 9)) { // Taoist Priest
                  _.each(design.allPositions(), function(pos) {
                       var piece = board.getPiece(pos);
                       if (piece === null) return;
                       if (piece.player == board.player) return;
                       var promoted = null;
                       if (piece.type == 37) { // Roaming assault
                           promoted = piece.promote(38); // Banner
                       }
                       if (piece.type == 35) { // Thunderclap
                           promoted = piece.promote(36); // Drum
                       }
                       if (promoted !== null) {
                           move.movePiece(pos, pos, promoted);
                       }
                  });
              }
          }
      }
      if ((promoted !== null) && (_.indexOf([36, 38], +piece.type) >= 0)) { // Banner, Drum
          var f = true;
          _.each(design.allPositions(), function(pos) {
              var piece = board.getPiece(pos);
              if (piece === null) return;
              if (piece.player != board.player) return;
              if (_.indexOf([8, 9], +piece.type) < 0) return; // Taoist Priest, Twelve-mile fog
              f = false;
          });
          if (f) {
              promoted = null;
          }
      }
      if ((promoted !== null) && (action !== null)) {
          action[2] = [ promoted ];
          if ((piece.type == 22) && (promoted.type == 21)) { // Clerk -> Master at arms
              _.each(design.allPositions(), function(pos) {
                   var piece = board.getPiece(pos);
                   if (piece !== null) {
                       if ((piece.player == board.player) && (_.indexOf([5, 26], +piece.type) >= 0)) {
                           move.movePiece(pos, pos, piece.promote(promote[piece.type]));
                       }
                       if ((piece.player != board.player) && (piece.type == 10)) {
                           move.capturePiece(pos);
                       }
                   }
              });
          }
      }
  });
  CheckInvariants(board);
}

})();
