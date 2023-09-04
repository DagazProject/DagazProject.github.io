(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "suff-exchange") {
      checkVersion(design, name, value);
  }
}

var isFailed = function(design, board) {
  if (_.isUndefined(board.isFailed)) {
      var f = 0; var e = 0; var r = false;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (design.inZone(2, board.player, pos)) {
                  r = true;
              } else {
                  if (!design.inZone(1, board.player, pos)) {
                      if (piece.player == board.player) {
                          f++;
                      } else {
                          e++;
                      }
                  }
              }
          }
      });
      if ((f < 6) || (e < 6)) r = true;
      board.isFailed = r;
  }
  return board.isFailed;
}

var getFriendList = function(design, board, except, type) {
  var friendList = [];
  _.each(design.allPositions(), function(pos) {
      if ((friendList.length < 5) && (pos != except) && !design.inZone(1, board.player, pos)) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == board.player) && (piece.type == type)) {
              friendList.push(pos);
          }
      }
  });
  if (friendList.length < 5) {
      _.each(design.allPositions(), function(pos) {
          if ((friendList.length < 5) && (pos != except) && !design.inZone(1, board.player, pos) && (_.indexOf(friendList, pos) < 0)) {
              var piece = board.getPiece(pos);
              if ((piece !== null) && (piece.player == board.player)) {
                  friendList.push(pos);
              }
          }
      });
  }
  return friendList;
}

var getEnemyList = function(design, board, type) {
  var enemyList = [];
  _.each(design.allPositions(), function(pos) {
      if ((enemyList.length < 6) && !design.inZone(1, board.player, pos)) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player != board.player) && (piece.type == type)) {
              enemyList.push(pos);
          }
      }
  });
  if (enemyList.length < 6) {
      _.each(design.allPositions(), function(pos) {
          if ((enemyList.length < 6) && !design.inZone(1, board.player, pos) && (_.indexOf(enemyList, pos) < 0)) {
              var piece = board.getPiece(pos);
              if ((piece !== null) && (piece.player != board.player)) {
                  enemyList.push(pos);
              }
          }
      });
  }
  return enemyList;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 2) {
          if (isFailed(design, board)) {
              move.failed = true;
              return;
          }
          var pos   = move.actions[0][0][0];
          var start = board.getPiece(pos);
          var list  = getFriendList(design, board, pos, +start.type);
          pos = design.navigate(board.player, pos, 10);
          while ((pos !== null) && (list.length > 0)) {
              var p = list.pop();
              pos = design.navigate(board.player, pos, 10);
              move.movePiece(p, pos, board.getPiece(p));
          }
          list = getEnemyList(design, board, +start.type);
          pos  = Dagaz.Model.stringToPos("p17");
          if (board.player == 2) {
               pos = Dagaz.Model.stringToPos("b1");
          }
          while ((pos !== null) && (list.length > 0)) {
              var p = list.shift();
              move.movePiece(p, pos, board.getPiece(p));
              pos = design.navigate(board.player, pos, 10);
          }
      }
  });
  CheckInvariants(board);
}

})();
