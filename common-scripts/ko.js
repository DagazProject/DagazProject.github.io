(function() {

var checkVersion = Dagaz.Model.checkVersion;
var superKo = null;
var numKo = 1;
var asymmetric = false;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "ko") {
     if (value == "true") {
         superKo = 0;
     }
     if (value == "position") {
         superKo = 1;
     }
     if (value == "situation") {
         superKo = 2;
     }
     if (value == "asymmetric") {
         superKo = 2;
         asymmetric = true;
     }
     if (value == "3") {
         superKo = 2;
         numKo   = 2;
     }
  } else {
     checkVersion(design, name, value);
  }
}

var zplayer = Dagaz.Model.zplayer;

Dagaz.Model.zplayer = function(value, player) {
  if (superKo == 1) return value;
  return zplayer(value, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  if ((superKo !== null) && (!asymmetric || (board.player > 1))) {
      for (var i = 0; i < board.moves.length; i++) {
           var r = 0;
           var m = board.moves[i];
           var b = board.apply(m);
           if (superKo == 0) {
               if (board.parent) {
                   if (b.zSign == board.parent.zSign) {
                       r = 1;
                   }
               }
           } else {
               var p = b;
               while (p.parent) {
                   var q = p.parent;
                   if ((superKo == 1) || (q.player == b.player)) {
                       if (b.zSign == q.zSign) {
                           r++;
                           if ((numKo < 2) || (r >= numKo)) {
                               break;
                           }
                       }
                   }
                   p = q;
               }
           }
           if (r >= numKo) {
               if ((m.actions.length > 0) && (m.actions[0][1] !== null)) {
                   pos = m.actions[0][1][0];
                   if (_.isUndefined(board.ko)) {
                       board.ko = [];
                   }
                   if (_.indexOf(board.ko, pos) < 0) {
                       board.ko.push(pos);
                   }
               }
               m.failed = true;
           }
      }
  }
  CheckInvariants(board);
}

})();
