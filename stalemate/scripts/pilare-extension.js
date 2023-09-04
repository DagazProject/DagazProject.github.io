(function() {

var blink = 1;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pilare-extension") {
     checkVersion(design, name, value);
  }
}

var getValue = function(piece, ix) {
  var r = null;
  var v = piece.getValue(ix);
  if (v !== null) {
      r = [];
      _.each(v, function(x) {
          if (x > 0) {
              r.push(x);
          }
      });
  }
  return r;
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var dx = 0;
  var value = [];
  if (model) {      
      var v = getValue(model, 0);
      if (v !== null) {
          _.each(v, function(x) {
               value.push(x);
          });
      }
      v = getValue(model, 1);
      if (v !== null) {
          value.push(0);
          value.push(0);
          _.each(v, function(x) {
               value.push(x);
          });
      }
      value.push(+model.player);
  }
  if (Dagaz.Model.showBlink && (_.indexOf(view.current, pos) >= 0)) {
      dx = blink;
      blink = -blink;
  }
  if (value !== null) {
      var s = value.length * 7;
      if (s > 15) s = 15;
      y += s;
      while (value.length > 0) {
          var player = value.shift();
          if (player > 0) {
              var p = view.piece["Gray Stone"];
              if (player == 1) {
                  p = view.piece["Red Stone"];
              } else if (player == 2) {
                  p = view.piece["White Stone"];
              }
              ctx.drawImage(p.h, x + dx, y, piece.dx, piece.dy);
          }
          y -= 7;
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) {
              move.failed = true;
              return;
          }
          var stack = getValue(piece, 1);
          if (stack === null) {
              stack = getValue(piece, 0);
              if (stack === null) {
                  stack = [];
              }
          } else {
              var tail = getValue(piece, 0);
              if ((tail === null) || (tail.length == 0)) {
                  move.failed = true;
                  return;
              }
              var t = tail.pop();
              move.dropPiece(pos, piece.changeOwner(t).setValue(0, tail).setValue(1, null));
          }
          pos = move.actions[0][1][0];
          var target = board.getPiece(pos);
          var tail = [];
          if (target !== null) {
              var tail = getValue(target, 0);
              if (tail === null) {
                  tail = [];
              }
              tail.push(+target.player);
          }
          if (stack.length > 0) {
              tail.push(stack.shift());
          } else {
              stack = null;
          }
          piece = piece.setValue(0, tail).setValue(1, stack);
          move.actions[0][2] = [ piece ];
      }
  });
  CheckInvariants(board);
}

})();
