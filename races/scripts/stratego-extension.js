(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stratego-extension") {
     checkVersion(design, name, value);
  }
}

var challenge = function(attacker, target) {
  if (attacker >= 12) attacker -= 12;
  if (target >= 12) target -= 12;
  if (target == 0) return 1;
  if ((attacker == 1) && (target == 10)) return 1;
  if ((attacker == 3) && (target == 11)) return 1;
  if (target == 11) return -1;
  if (attacker < target) return -1;
  if (target < attacker) return 1;
  return 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var attacker = board.getPiece(pos);
          if (attacker !== null) {
              pos = move.actions[0][1][0];
              var target = board.getPiece(pos);
              if (target !== null) {
                  var c = challenge(+attacker.type, +target.type);
                  if (c <= 0) {
                      if (c < 0) {
                          if (+target.type < 12) {
                              target = target.promote(+target.type + 12);
                          }
                          move.actions[0][2] = [ target ];
                      } else {
                          move.capturePiece(pos);
                      }
                  } else {
                      if (+attacker.type < 12) {
                          attacker = attacker.promote(+attacker.type + 12);
                          move.actions[0][2] = [ attacker ];
                      }
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
