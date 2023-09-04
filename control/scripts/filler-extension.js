(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "filler-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
      return Dagaz.Model.posToString(move.actions[0][1][0]);
  }
  return "";
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = []; var e = []; var ec = null;
  _.each(design.allPositions(), function (pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 6) return;
      if (piece.player > 2) return;
      if (piece.player == board.player) {
          f.push(pos);
      } else {
          e.push(pos);
          ec = +piece.type;
      }
  });
  var colors = []; var edge = [];
  _.each(f, function(pos) {
      _.each(design.allDirections(), function(dir) {
           var p = design.navigate(board.player, pos, dir);
           if (p === null) return;
           var piece = board.getPiece(p);
           if (piece === null) return;
           if (piece.player < 3) return;
           edge.push(p);
           if (_.indexOf(colors, +piece.type) >= 0) return;
           colors.push(+piece.type);
      });
  });
  var ko = [];
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var c = +pos;
      if (board.player > 1) {
          c -= 7;
      }
      var piece = null;
      _.each(edge, function(p) {
          if (piece !== null) return;
          var target = board.getPiece(p);
          if (target === null) return;
          if (target.player < 3) return;
          if (target.type != c) return;
          piece = target.changeOwner(board.player);
      });
      if ((_.indexOf(colors, c) < 0) || ((c == ec) && (board.parent !== null)) || (piece === null)) {
          ko.push(pos);
          move.failed = true;
          return;
      }
      var gr = [];
      _.each(f, function(pos) {
          gr.push(pos);
      });
      _.each(edge, function(p) {
          var target = board.getPiece(p);
          if (target === null) return;
          if (target.player < 3) return;
          if (target.type != piece.type) return;
          gr.push(p);
      });
      for (var i = 0; i < gr.length; i++) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(board.player, gr[i], dir);
               if ((p === null) || (_.indexOf(gr, p) >= 0)) return;
               var target = board.getPiece(p);
               if (target === null) return;
               if (target.type != piece.type) return;
               gr.push(p);
          });
      }
      _.each(gr, function(p) {
          move.movePiece(p, p, piece);
      });
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
