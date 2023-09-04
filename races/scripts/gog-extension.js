(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gog-extension") {
     checkVersion(design, name, value);
  }
}

var challenge = function(attacker, target) {
  if (attacker == target) {
      if (attacker == 14) {
          return 1;
      } else {
          return 0;
      }
  }
  if (attacker == 13) {
      if (target == 12) {
          return -1;
      } else {
          return 1;
      }
  }
  if (target == 13) {
      if (attacker == 12) {
          return 1;
      } else {
          return -1;
      }
  }
  if (attacker > target) return -1;
  return 1;
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
                          move.actions[0][2] = [ target ];
                      } else {
                          move.capturePiece(pos);
                      }
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
