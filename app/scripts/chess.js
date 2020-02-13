(function() {

var step = function(ctx, params) {
    if (ctx.go(params, 0) && !ctx.isFriend()) {
        ctx.end();
    }
}

var pawnShift = function(ctx, params) {
    if (ctx.go(params, 0) && ctx.isEmpty()) {
        if (ctx.inZone(0)) {
            ctx.promote(4);
        }    
        ctx.end();
    }
}

var pawnLeap = function(ctx, params) {
    if (ctx.go(params, 0) && ctx.isEnemy()) {
        if (ctx.inZone(0)) {
            ctx.promote(4);
        }    
        ctx.end();
    }
}

var pawnJump = function(ctx, params) {
    if (ctx.go(params, 0) && 
        ctx.isEmpty() && 
        ctx.inZone(1) && 
        ctx.go(params, 0) && 
        ctx.isEmpty()) {
        ctx.end();
    }
}

var enPassant = function(ctx, params) {
    if (ctx.go(params, 0) &&
        ctx.isEnemy() &&
        ctx.isPiece(0)) {
        ctx.capture();
        if (ctx.go(params, 1)) {
            ctx.put();
            if (ctx.go(params, 1) &&
                ctx.isLastFrom()) {
                ctx.end();
            }
        }
    }
}

var jump = function(ctx, params) {
    if (ctx.go(params, 0) && 
        ctx.go(params, 1) && 
       !ctx.isFriend()) {
        ctx.end();
    }
}

var slide = function(ctx, params) {
    while (ctx.go(params, 0)) {
        if (ctx.isFriend()) break;
        ctx.end();
        if (!ctx.isEmpty()) break;
    }
}

var O_O = function(ctx, params) {
    if (ctx.go(params, 0) &&
        ctx.isEmpty() &&
        ctx.go(params, 0) &&
        ctx.isEmpty()) {
        ctx.put();
        if (ctx.go(params, 0) &&
            ctx.isFriend() &&
            ctx.isPiece(1)) {
            ctx.take();
            if (ctx.go(params, 1) &&
                ctx.go(params, 1)) {
                ctx.end();
            }
        }
    }
}

var O_O_O = function(ctx, params) {
    if (ctx.go(params, 0) &&
        ctx.isEmpty() &&
        ctx.go(params, 0) &&
        ctx.isEmpty()) {
        ctx.put();
        if (ctx.go(params, 0) &&
            ctx.isEmpty() &&
            ctx.go(params, 0) &&
            ctx.isFriend() &&
            ctx.isPiece(1)) {
            ctx.take();
            if (ctx.go(params, 1) &&
                ctx.go(params, 1) &&
                ctx.go(params, 1)) {
                ctx.end();
            }
        }
    }
}

games.model.BuildDesign = function(design) {
    design.checkVersion("smart-moves", "false");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 4, 5, 2, 3, 7, 6]);

    design.addPosition("a8", [0, 1, 8, 0, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("c8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("d8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("e8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("f8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("g8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("h8", [-1, 0, 8, 0, 0, 0, 7, 0]);
    design.addPosition("a7", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h7", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a6", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h6", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a5", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h5", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a4", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h4", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a3", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h3", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a2", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h2", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a1", [0, 1, 0, -7, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("h1", [-1, 0, 0, 0, -8, 0, 0, -9]);

    design.addZone("last-rank", 1, ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"]);
    design.addZone("last-rank", 2, ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]);
    design.addZone("third-rank", 1, ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"]);
    design.addZone("third-rank", 2, ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"]);

    design.addPiece("Pawn", 0, 2);
    design.addMove(0, pawnShift, [4], 0);
    design.addMove(0, pawnJump, [4], 0);
    design.addMove(0, pawnLeap, [7], 0);
    design.addMove(0, pawnLeap, [3], 0);
    design.addMove(0, enPassant, [1, 4], 0);
    design.addMove(0, enPassant, [0, 4], 0);

    design.addPiece("Rook", 1, 10);
    design.addMove(1, slide, [4], 0);
    design.addMove(1, slide, [2], 0);
    design.addMove(1, slide, [0], 0);
    design.addMove(1, slide, [1], 0);

    design.addPiece("Knight", 2, 6);
    design.addMove(2, jump, [4, 7], 0);
    design.addMove(2, jump, [4, 3], 0);
    design.addMove(2, jump, [2, 6], 0);
    design.addMove(2, jump, [2, 5], 0);
    design.addMove(2, jump, [0, 7], 0);
    design.addMove(2, jump, [0, 6], 0);
    design.addMove(2, jump, [1, 3], 0);
    design.addMove(2, jump, [1, 5], 0);

    design.addPiece("Bishop", 3, 6);
    design.addMove(3, slide, [7], 0);
    design.addMove(3, slide, [6], 0);
    design.addMove(3, slide, [3], 0);
    design.addMove(3, slide, [5], 0);

    design.addPiece("Queen", 4, 18);
    design.addMove(4, slide, [4], 0);
    design.addMove(4, slide, [2], 0);
    design.addMove(4, slide, [0], 0);
    design.addMove(4, slide, [1], 0);
    design.addMove(4, slide, [7], 0);
    design.addMove(4, slide, [6], 0);
    design.addMove(4, slide, [3], 0);
    design.addMove(4, slide, [5], 0);

    design.addPiece("King", 5, 1000);
    design.addMove(5, step, [4], 0);
    design.addMove(5, step, [2], 0);
    design.addMove(5, step, [0], 0);
    design.addMove(5, step, [1], 0);
    design.addMove(5, step, [7], 0);
    design.addMove(5, step, [6], 0);
    design.addMove(5, step, [3], 0);
    design.addMove(5, step, [5], 0);
    design.addMove(5, O_O, [1, 0], 1);
    design.addMove(5, O_O_O, [0, 1], 1);

    design.setup("White", "Pawn", ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"]);
    design.setup("White", "Rook", ["a1", "h1"]);
    design.setup("White", "Knight", ["b1", "g1"]);
    design.setup("White", "Bishop", ["c1", "f1"]);
    design.setup("White", "Queen", ["d1"]);
    design.setup("White", "King", ["e1"]);
    design.setup("Black", "Pawn", ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"]);
    design.setup("Black", "Rook", ["a8", "h8"]);
    design.setup("Black", "Knight", ["b8", "g8"]);
    design.setup("Black", "Bishop", ["c8", "f8"]);
    design.setup("Black", "Queen", ["d8"]);
    design.setup("Black", "King", ["e8"]);
}

games.view.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
}

})();
