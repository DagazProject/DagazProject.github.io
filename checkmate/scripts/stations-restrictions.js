(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stations-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (move.mode == 0) {
          // n: CRNE, CRNW, CTN, DNNE, DNNW, DNS, DNSE, DNSW, DSS, FTS
          if (_.indexOf([8, 9, 12, 2, 3, 4, 5, 6, 11, 18], +piece.type) >= 0) move.failed = true;
      }
      if (move.mode == 1) {
          // s: CRNE, CRNW, CTN, DNN, DNNE, DNNW, DNSE, DNSW, DSN, FTN
          if (_.indexOf([8, 9, 12, 1, 2, 3, 5, 6, 10, 15], +piece.type) >= 0) move.failed = true;
      }
      if (move.mode == 2) {
          // ne: CRN, CRNW, CTNE, DNN, DNNW, DNS, DNSE, DNSW, DSN, FTSW
          if (_.indexOf([7, 9, 13, 1, 3, 4, 5, 6, 10, 19], +piece.type) >= 0) move.failed = true;
      }
      if (move.mode == 3) {
          // sw: CRN, CRNW, CTNE, DNN, DNNE, DNNW, DNS, DNSE, DSS, FTNE
          if (_.indexOf([7, 9, 13, 1, 2, 3, 4, 5, 11, 17], +piece.type) >= 0) move.failed = true;
      }
      if (move.mode == 4) {
          // nw: CRN, CRNE, CTNW, DNN, DNNE, DNS, DNSE, DNSW, DSN, FTSE
          if (_.indexOf([7, 8, 14, 1, 2, 4, 5, 6, 10, 20], +piece.type) >= 0) move.failed = true;
      }
      if (move.mode == 5) {
          // se: CRN, CRNE, CTNW, DNN, DNNE, DNNW, DNS, DNSW, DSS, FTNW
          if (_.indexOf([7, 8, 14, 1, 2, 3, 4, 6, 11, 16], +piece.type) >= 0) move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
