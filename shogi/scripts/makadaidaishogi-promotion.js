(function() {

var promote  = [];
var promoted = [1, 3, 5, 27, 29, 31, 33, 35, 37, 39, 42, 44, 46, 48, 50, 52, 54, 56, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77];
var kings    = [55, 56, 76, 77];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "makadaidaishogi-promotion") {
      promote[ 0] =  1; // Go-Between -> Free-Goer
      promote[ 2] =  3; // Pawn -> Tokin
      promote[ 4] =  5; // Rook -> Gold-Promoted
      promote[ 6] =  5; // Left-Chariot -> Gold-Promoted
      promote[ 7] =  5; // Right-Chariot -> Gold-Promoted
      promote[ 8] =  5; // Side-Mover -> Gold-Promoted
      promote[ 9] =  5; // Side-Flyer -> Gold-Promoted
      promote[10] =  5; // Vertical-Mover -> Gold-Promoted
      promote[11] =  5; // Bishop -> Gold-Promoted
      promote[14] =  5; // Capricorn -> Gold-Promoted
      promote[15] =  5; // Hook-Mover -> Gold-Promoted
      promote[17] =  5; // Donkey -> Gold-Promoted
      promote[18] =  5; // Knight -> Gold-Promoted
      promote[19] =  5; // Violent-Ox -> Gold-Promoted
      promote[20] =  5; // Flying-Dragon -> Gold-Promoted
      promote[21] =  5; // Buddhist-Devil -> Gold-Promoted
      promote[22] =  5; // She-Devil -> Gold-Promoted
      promote[23] =  5; // Wrestler -> Gold-Promoted
      promote[24] =  5; // Guardian-of-the-Gods -> Gold-Promoted
      promote[25] =  5; // Lion-Dog -> Gold-Promoted
      promote[26] = 27; // Old-Rat -> Bat
      promote[28] = 29; // Angry-Boar -> Free-Boar
      promote[30] = 31; // Blind-Bear -> Free-Bear
      promote[32] = 33; // Evil-Wolf -> Free-Wolf
      promote[34] = 35; // Kylin -> Great-Dragon
      promote[36] = 37; // Phoenix -> Golden-Bird
      promote[38] = 39; // Lion -> Furious-Fiend
      promote[40] =  5; // Reverse-Chariot -> Gold-Promoted
      promote[41] = 42; // Cat-Sword -> Free-Cat
      promote[43] = 44; // Chinese-Cock -> Wizard-Stork
      promote[45] = 46; // Old-Monkey -> Mountain-Witch
      promote[47] = 48; // Coiled-Serpent -> Free-Serpent
      promote[49] = 50; // Reclining-Dragon -> Free-Dragon
      promote[51] = 52; // Ferocious-Leopard -> Free-Leopard
      promote[53] = 54; // Blind-Tiger -> Free-Tiger
      promote[55] = 56; // Drunk-Elephant -> Crown-Prince
      promote[57] =  5; // Lance -> Gold-Promoted
      promote[58] = 59; // Earth-General -> Free-Earth
      promote[60] = 61; // Stone-General -> Free-Stone
      promote[62] = 63; // Tile-General -> Free-Tile
      promote[64] = 65; // Iron-General -> Free-Iron
      promote[66] = 67; // Copper-General -> Free-Copper
      promote[68] = 69; // Silver-General -> Free-Silver
      promote[70] = 71; // Gold-General -> Free-Gold
      promote[72] = 73; // Deva -> Teaching-King
      promote[74] = 75; // Dark-Spirit -> Buddhist-Spirit
      promote[76] = 77; // King -> Emperor
  } else {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.Determinate = function(moves) {
  var r = [];
  _.each(moves, function(move) {
      var m = Dagaz.Model.createMove(move.mode);
      var f = false;
      _.each(move.actions, function(a) {
          if (f) return;
          if ((a[2] !== null) && (a[2].length == 2)) {
              m.actions.push([a[0], a[1], [a[2][1]], a[3]]);
              a[2] = [a[2][0]];
              f = true;
              return;
          }
          m.actions.push(a);
      });
      r.push(move);
  });
  return r;
}

Dagaz.Controller.SelectPiece = function(move, piece, part) {
  var f = false;
  var actions = [];
  _.each(move.actions, function(a) {
      if (f) return;
      actions.push(a);
      if ((a[3] != part) || (a[2] === null)) return;
      for (var i = 0; i < a[2].length; i++) {
           if (a[2][i].type == piece.type) {
               a[2] = [piece];
               if (i > 0) {
                   f = true;
               }
           }
      }
  });
  if (f) {
      move.actions = actions;
  }
  return f;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var piece = null;
      var f = false; var actions = [];
      _.each(move.actions, function(a) {
         if (f) return;
         actions.push(a);
         var prom = [];
         if (piece === null) {
             piece = board.getPiece(a[0][0]);
         }
         if (piece === null) return;
         var enemy = board.getPiece(a[1][0]);
         if ((enemy === null) || (a[1][0] == move.actions[0][0][0])) return;
         if (_.indexOf(promoted, +enemy.type) < 0) {
             prom.push(piece);
         }
         if (promote[+piece.type]) {
             prom.push(piece.promote(promote[+piece.type]));
         }
         if (_.indexOf(kings, +piece.type) < 0) {
             if (_.indexOf([72, 73], +enemy.type) >= 0) {
                 prom = [piece.promote(73)]; // Teaching-King
             }
             if (_.indexOf([74, 75], +enemy.type) >= 0) {
                 prom = [piece.promote(75)]; // Buddhist-Spirit
             }
         }
         if (prom.length > 0) {
             a[2] = prom;
         }
         if (prom.length == 1) f = true;
      });
      if (f) {
         move.actions = actions;
      }
  });
  CheckInvariants(board);
}

})();
