(function() {

var strictMode = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "three-crowns-extension") {
      strictMode = (value == "strict");
  } else {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var isEq = function(a, b) {
  if (!strictMode && (b == 0)) {
      return true;
  } else {
      return a == b;
  }
}

var isLineDir = function(design, board, player, pos, type, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece == null) || (piece.player != player) || !isEq(+piece.type, type)) return false;
  p = design.navigate(player, p, dir);
  if (p !== null) {
      piece = board.getPiece(p);
      if ((piece !== null) && (piece.player == player) && isEq(+piece.type, type)) {
          return true;
      }
  }
  p = design.navigate(0, pos, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player == player) && isEq(+piece.type, type);
}

var isLine = function(design, board, player, pos, type) {
  return isLineDir(design, board, player, pos, type, design.getDirection("n"))  ||
         isLineDir(design, board, player, pos, type, design.getDirection("s"))  ||
         isLineDir(design, board, player, pos, type, design.getDirection("w"))  ||
         isLineDir(design, board, player, pos, type, design.getDirection("e"))  ||
         isLineDir(design, board, player, pos, type, design.getDirection("nw")) ||
         isLineDir(design, board, player, pos, type, design.getDirection("sw")) ||
         isLineDir(design, board, player, pos, type, design.getDirection("ne")) ||
         isLineDir(design, board, player, pos, type, design.getDirection("se"));
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var pos = board.lastt;
  var piece = board.getPiece(pos);
  if ((piece !== null) && (piece.type == 1) && isLine(design, board, piece.player, pos, +piece.type)) {
      if (piece.player == player) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

var Extension = Dagaz.Model.Extension;

Dagaz.Model.Extension = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(m) {
     if ((m.actions.length > 0) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
         var piece = board.getPiece(m.actions[0][0][0]);
         if (piece !== null) {
             var actions = [];
             var last = null;
             var prom = null;
             _.each(m.actions, function(a) {
                 if (a[0] !== null) {
                     if (a[1] !== null) {
                         last = a;
                         actions.push(a);
                     } else {
                         var p = board.getPiece(a[0][0]);
                         if ((p !== null) && (p.type == 1) && (board.lastt != a[0][0])) {
                             prom = a;
                         } else {
                            actions.push(a);
                         }
                     }
                 }
             });
             if (prom !== null) {
                 var p = board.getPiece(prom[0][0]);
                 prom[1] = [ prom[0][0] ];
                 prom[2] = [ p.promote(0) ];
                 actions.push(prom);
             }
             m.actions = actions;
             if ((piece.type == 0) && (last !== null) && isLine(design, board.apply(m), board.player, last[1][0], 0)) {
                 last[2] = [ piece.promote(1) ];
             }
         } else {
             m.failed = true;
         }
     } else {
         m.failed = true;
     }
  });
  Extension(board);
}

})();
