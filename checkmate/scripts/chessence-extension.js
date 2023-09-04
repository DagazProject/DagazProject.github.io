(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chessence-extension") {
      checkVersion(design, name, value);
  }
}

var getX = function(pos) {
  return pos % 8;
}

var getY = function(pos) {
  return (pos / 8) | 0;
}

var notFriend = function(design, board, player, pos, dir) {
  var x = board.getPiece(pos);
  if (x === null) return true;
  var p = design.navigate(player, pos, dir);
  if (p === null) return true;
  if (design.inZone(0, player, p)) return true;
  var piece = board.getPiece(p);
  if (piece === null) return true;
  return piece.player != x.player;
}

var showPiece = Dagaz.View.showPiece;

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  var n   = design.getDirection("n");   var w   = design.getDirection("w");
  var s   = design.getDirection("s");   var e   = design.getDirection("e");
  var nw  = design.getDirection("nw");  var sw  = design.getDirection("sw");
  var ne  = design.getDirection("ne");  var se  = design.getDirection("se");
  var nnw = design.getDirection("nnw"); var ssw = design.getDirection("ssw");
  var nne = design.getDirection("nne"); var sse = design.getDirection("sse");
  var wwn = design.getDirection("wwn"); var wws = design.getDirection("wws");
  var een = design.getDirection("een"); var ees = design.getDirection("ees");
  if (model.type > 0) {
      var str = 'RBN';
      if (notFriend(design, board, model.player, pos, n) &&
          notFriend(design, board, model.player, pos, s) &&
          notFriend(design, board, model.player, pos, w) &&
          notFriend(design, board, board.player, pos, e)) {
          str = str.replace('R', '');
      }
      if (notFriend(design, board, model.player, pos, nw) &&
          notFriend(design, board, model.player, pos, se) &&
          notFriend(design, board, model.player, pos, sw) &&
          notFriend(design, board, board.player, pos, ne)) {
          str = str.replace('B', '');
      }
      if (notFriend(design, board, model.player, pos, nnw) &&
          notFriend(design, board, model.player, pos, nne) &&
          notFriend(design, board, model.player, pos, ssw) &&
          notFriend(design, board, model.player, pos, sse) &&
          notFriend(design, board, model.player, pos, wwn) &&
          notFriend(design, board, model.player, pos, een) &&
          notFriend(design, board, model.player, pos, wws) &&
          notFriend(design, board, model.player, pos, ees)) {
          str = str.replace('N', '');
      }
      var r = view.piece[model.getOwner() + str];
      if (r) {
          ctx.drawImage(r.h, x, y, r.dx, r.dy);
          return;
      }
  }
  showPiece(view, ctx, frame, pos, piece, model, x, y);
}

var Extension = Dagaz.Model.Extension;

Dagaz.Model.Extension = function(board) {
  var design = Dagaz.Model.design;
  var n   = design.getDirection("n");   var w   = design.getDirection("w");
  var s   = design.getDirection("s");   var e   = design.getDirection("e");
  var nw  = design.getDirection("nw");  var sw  = design.getDirection("sw");
  var ne  = design.getDirection("ne");  var se  = design.getDirection("se");
  var nnw = design.getDirection("nnw"); var ssw = design.getDirection("ssw");
  var nne = design.getDirection("nne"); var sse = design.getDirection("sse");
  var wwn = design.getDirection("wwn"); var wws = design.getDirection("wws");
  var een = design.getDirection("een"); var ees = design.getDirection("ees");
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length > 0;
    })
   .each(function(move) {
       _.chain(move.actions)
        .filter(function(action) {
             return (action[0] !== null) && (action[1] !== null);
         })
        .each(function(action) {
             var pos = action[0][0];
             if (design.inZone(0, board.player, pos)) return;
             var fx  = getX(action[0][0]); var fy = getY(action[0][0]);
             var tx  = getX(action[1][0]); var ty = getY(action[1][0]);
             if ((fx == tx) || (fy == ty)) {
                 if (notFriend(design, board, board.player, pos, n) &&
                     notFriend(design, board, board.player, pos, s) &&
                     notFriend(design, board, board.player, pos, w) &&
                     notFriend(design, board, board.player, pos, e)) {
                     move.failed = true;
                 }
                 return;
             }
             if (Math.abs(tx - fx) == Math.abs(ty - fy)) {
                 if (notFriend(design, board, board.player, pos, nw) &&
                     notFriend(design, board, board.player, pos, se) &&
                     notFriend(design, board, board.player, pos, sw) &&
                     notFriend(design, board, board.player, pos, ne)) {
                     move.failed = true;
                 }
                 return;
             }
             if (notFriend(design, board, board.player, pos, nnw) &&
                 notFriend(design, board, board.player, pos, nne) &&
                 notFriend(design, board, board.player, pos, ssw) &&
                 notFriend(design, board, board.player, pos, sse) &&
                 notFriend(design, board, board.player, pos, wwn) &&
                 notFriend(design, board, board.player, pos, een) &&
                 notFriend(design, board, board.player, pos, wws) &&
                 notFriend(design, board, board.player, pos, ees)) {
                 move.failed = true;
             }
         });
    });
  Extension(board);
}

})();
