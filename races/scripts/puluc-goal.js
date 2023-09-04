(function() {

var bonus = [9, 17, 19, 16, 14, 6, 3, 1];
var penalty = [25, 38, 25, 6,  6];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "puluc-goal") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(1, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(10, "../sounds/dice.wav", true);
}

var getState = function(design, board, player, pos) {
  var f = 0; var e = 0; var p = 0; var c = false;
  for (; pos !== null; pos = design.navigate(player, pos, 0)) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           if (piece.player == player) {
               f++;
           } else {
               e++;
           }
           if ((board.lastt == pos) && (p != 0) && (p != player)) c = true;
           p = piece.player;
       }
  }
  return {
       player:  p,
       friends: f,
       enemies: e,
       capture: c
  };
}

var getBonus = function(state, ix, player) {
  var r = 0;
  for (var i = 0; i < bonus.length; i++) {
       if (ix + i >= state.length - 1) break;
       if ((state[ix + i].player > 0) && (state[ix + i].player != player)) {
           r += bonus[i];
       }
  }
  return r;
}

var getPenalty = function(state, ix, player) {
  var r = 0;
  for (var i = 0; i < penalty.length; i++) {
       if (ix + i >= state.length) break;
       if ((state[ix + i].player > 0) && (state[ix + i].player != player)) {
           r += penalty[i];
       }
  }
  return r;
}

Dagaz.AI.eval = function(design, board, player) {
  var r = 0;
  var pos = Dagaz.Model.stringToPos("a1");
  if (player != 1) {
      pos = Dagaz.Model.stringToPos("a11");
  }
  var state = [];
  while (pos !== null) {
      state.push(getState(design, board, player, pos));
      pos = design.navigate(player, pos, 2);
      if ((pos !== null) && design.inZone(1, player, pos)) break;
  }
  var cnt = 0;
  for (var i = 0; i < state.length; i++) {
       if (state[i].player > 0) {
           if (state[i].player == player) {
               r += 100 - (state[i].friends * 10);
               r += state[i].enemies * 100;
               r += getBonus(state, i, player);
               if (i > 0) {
                   r -= getPenalty(state, i, player);
               }
               cnt += state[i].enemies;
           } else {
               cnt += state[i].friends;
           }
           if (state[i].capture) {
               r += 5000;
           }
       }
  }
  r += (5 - cnt) * 1000;
  console.log("Move: " + board.move.toString() + ", eval = " + r);
  return r;
}

})();
