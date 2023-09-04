(function() {

var getSetup = function() {
  var str = window.location.search.toString();
  var re  = /^[?&]setup=(.*)$/;
  str = str.replace(re, "$1");
  var result = [];
  if (str) {
      var type = 0;
      for (var i = 0; i < str.length; i++) {
           var c = str.charCodeAt(i);
           if (c >= "A".charCodeAt(0)) {
               c -= "A".charCodeAt(0);
               for (var j = 0; j < c; j++) {
                    result.push(type);
               }
           }
           if (type == 0) {
               type = 1;
           } else {
               type = 0;
           }
      }
  }
  return result;
}

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  var setup  = getSetup();
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (setup.length == 0) {
              if (_.random(0, 100) < 50) {
                  piece = piece.promote(+piece.type + 1);
                  board.setPiece(pos, piece);
              }
          } else {
              if (setup.length > 0) {
                  var type = setup.shift();
                  piece = piece.promote(type);
                  board.setPiece(pos, piece);
              }
          }
      }
  });
}

})();
