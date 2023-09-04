(function() {

Dagaz.View.blink = [0, 1, 0, 0, 0, -1, 0, -1, 0, 0];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "lines-drops") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(1, "../sounds/steps.ogg", true);
    Dagaz.Controller.addSound(2, "../sounds/open.ogg", true);
}

Dagaz.View.showBoard = function(board, ctx) {
  var view = Dagaz.Controller.app.view;
  var score = board.getValue(0);
  if (score === null) {
      score = 0;
  }
  for (var pos = 89; pos >= 84; pos--) {
       var t = score % 10;
       var r = view.piece["You N" + t];
       var p = view.pos[pos];
       ctx.drawImage(r.h, p.x, p.y, r.dx, r.dy);
       score = (score / 10) | 0;
  }
}

var tryDir = function(design, board, player, pos, dir, type, group) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.type != type) return;
      group.push(p);
      p = design.navigate(player, p, dir);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;  
  _.each(board.moves, function(move) {
      if (move.mode != 4) return;
      var piece = move.actions[0][2][0];
      var notFound = true;
      for (var pos = 0; pos < 3; pos++) {
           var x = board.getPiece(pos);
           if ((x !== null) && (x.type == piece.type)) {
               move.capturePiece(pos);
               notFound = false;
               break;
           }
      }
      if (notFound) {
          move.failed = true;
          return;
      }
      if (!_.isUndefined(board.move) && (board.move.mode == 0) && board.move.isSimpleMove()) {
          var pos = board.move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          var captures = [];
          for (var dir = 1; dir <= 8; dir++) {
               var group = [pos];
               tryDir(design, board, 1, pos, dir, piece.type, group);
               tryDir(design, board, 0, pos, dir, piece.type, group);
               if (group.length >= 5) {
                   _.each(group, function(pos) {
                       if (_.indexOf(captures, pos) >= 0) return;
                       captures.push(pos);
                   });
               }
          }
          if (captures.length > 0) {
              move.actions = [];
              _.each(captures, function(pos) {
                 move.capturePiece(pos, 1);
              });
              move.goTo(6);
              move.addValue(0, captures.length * (captures.length - 4));
              move.sound = 2;
          }
      }
  });
  CheckInvariants(board);
}

})();
