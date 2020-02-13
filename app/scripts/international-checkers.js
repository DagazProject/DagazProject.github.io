(function() {

var shiftMan = function(ctx, params) {
    if (ctx.go(params, 0) && ctx.isEmpty()) {
        ctx.end();
    }
}

var jumpMan = function(ctx, params) {
    if (ctx.go(params, 0) && ctx.isEnemy()) {
        ctx.capture();
        if (ctx.go(params, 0) && ctx.isEmpty()) {
            ctx.end(1);
        }
    }
}

var shiftKing = function(ctx, params) {
    while (ctx.go(params, 0) && ctx.isEmpty()) {
        ctx.end();
    }
}

var jumpKing = function(ctx, params) {
    while (ctx.go(params, 0)) {
        if (!ctx.isEmpty()) break;
    }
    if (ctx.isEnemy()) {
        ctx.capture();
        while (ctx.go(params, 0) && ctx.isEmpty()) {
            ctx.end(2);
        }
    }
}

var contKing = function(ctx, params) {
    while (ctx.go(params, 0)) {
        if (!ctx.isEmpty()) break;
        if (ctx.isLastFrom()) return;
    }
    if (ctx.isEnemy()) {
        ctx.capture();
        while (ctx.go(params, 0) && ctx.isEmpty()) {
            ctx.end(2);
        }
    }
}

games.model.BuildDesign = function(design) {
    design.checkVersion("smart-moves", "true");
    design.checkVersion("maximal-captures", "true");
    design.checkVersion("deferred-captures", "true");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("ne"); // 2
    design.addDirection("nw"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [3, 2, 1, 0]);

    design.addPosition("a10", [11, 0, 0, 0]);
    design.addPosition("b10", [11, 9, 0, 0]);
    design.addPosition("c10", [11, 9, 0, 0]);
    design.addPosition("d10", [11, 9, 0, 0]);
    design.addPosition("e10", [11, 9, 0, 0]);
    design.addPosition("f10", [11, 9, 0, 0]);
    design.addPosition("g10", [11, 9, 0, 0]);
    design.addPosition("h10", [11, 9, 0, 0]);
    design.addPosition("i10", [11, 9, 0, 0]);
    design.addPosition("j10", [0, 9, 0, 0]);
    design.addPosition("a9", [11, 0, -9, 0]);
    design.addPosition("b9", [11, 9, -9, -11]);
    design.addPosition("c9", [11, 9, -9, -11]);
    design.addPosition("d9", [11, 9, -9, -11]);
    design.addPosition("e9", [11, 9, -9, -11]);
    design.addPosition("f9", [11, 9, -9, -11]);
    design.addPosition("g9", [11, 9, -9, -11]);
    design.addPosition("h9", [11, 9, -9, -11]);
    design.addPosition("i9", [11, 9, -9, -11]);
    design.addPosition("j9", [0, 9, 0, -11]);
    design.addPosition("a8", [11, 0, -9, 0]);
    design.addPosition("b8", [11, 9, -9, -11]);
    design.addPosition("c8", [11, 9, -9, -11]);
    design.addPosition("d8", [11, 9, -9, -11]);
    design.addPosition("e8", [11, 9, -9, -11]);
    design.addPosition("f8", [11, 9, -9, -11]);
    design.addPosition("g8", [11, 9, -9, -11]);
    design.addPosition("h8", [11, 9, -9, -11]);
    design.addPosition("i8", [11, 9, -9, -11]);
    design.addPosition("j8", [0, 9, 0, -11]);
    design.addPosition("a7", [11, 0, -9, 0]);
    design.addPosition("b7", [11, 9, -9, -11]);
    design.addPosition("c7", [11, 9, -9, -11]);
    design.addPosition("d7", [11, 9, -9, -11]);
    design.addPosition("e7", [11, 9, -9, -11]);
    design.addPosition("f7", [11, 9, -9, -11]);
    design.addPosition("g7", [11, 9, -9, -11]);
    design.addPosition("h7", [11, 9, -9, -11]);
    design.addPosition("i7", [11, 9, -9, -11]);
    design.addPosition("j7", [0, 9, 0, -11]);
    design.addPosition("a6", [11, 0, -9, 0]);
    design.addPosition("b6", [11, 9, -9, -11]);
    design.addPosition("c6", [11, 9, -9, -11]);
    design.addPosition("d6", [11, 9, -9, -11]);
    design.addPosition("e6", [11, 9, -9, -11]);
    design.addPosition("f6", [11, 9, -9, -11]);
    design.addPosition("g6", [11, 9, -9, -11]);
    design.addPosition("h6", [11, 9, -9, -11]);
    design.addPosition("i6", [11, 9, -9, -11]);
    design.addPosition("j6", [0, 9, 0, -11]);
    design.addPosition("a5", [11, 0, -9, 0]);
    design.addPosition("b5", [11, 9, -9, -11]);
    design.addPosition("c5", [11, 9, -9, -11]);
    design.addPosition("d5", [11, 9, -9, -11]);
    design.addPosition("e5", [11, 9, -9, -11]);
    design.addPosition("f5", [11, 9, -9, -11]);
    design.addPosition("g5", [11, 9, -9, -11]);
    design.addPosition("h5", [11, 9, -9, -11]);
    design.addPosition("i5", [11, 9, -9, -11]);
    design.addPosition("j5", [0, 9, 0, -11]);
    design.addPosition("a4", [11, 0, -9, 0]);
    design.addPosition("b4", [11, 9, -9, -11]);
    design.addPosition("c4", [11, 9, -9, -11]);
    design.addPosition("d4", [11, 9, -9, -11]);
    design.addPosition("e4", [11, 9, -9, -11]);
    design.addPosition("f4", [11, 9, -9, -11]);
    design.addPosition("g4", [11, 9, -9, -11]);
    design.addPosition("h4", [11, 9, -9, -11]);
    design.addPosition("i4", [11, 9, -9, -11]);
    design.addPosition("j4", [0, 9, 0, -11]);
    design.addPosition("a3", [11, 0, -9, 0]);
    design.addPosition("b3", [11, 9, -9, -11]);
    design.addPosition("c3", [11, 9, -9, -11]);
    design.addPosition("d3", [11, 9, -9, -11]);
    design.addPosition("e3", [11, 9, -9, -11]);
    design.addPosition("f3", [11, 9, -9, -11]);
    design.addPosition("g3", [11, 9, -9, -11]);
    design.addPosition("h3", [11, 9, -9, -11]);
    design.addPosition("i3", [11, 9, -9, -11]);
    design.addPosition("j3", [0, 9, 0, -11]);
    design.addPosition("a2", [11, 0, -9, 0]);
    design.addPosition("b2", [11, 9, -9, -11]);
    design.addPosition("c2", [11, 9, -9, -11]);
    design.addPosition("d2", [11, 9, -9, -11]);
    design.addPosition("e2", [11, 9, -9, -11]);
    design.addPosition("f2", [11, 9, -9, -11]);
    design.addPosition("g2", [11, 9, -9, -11]);
    design.addPosition("h2", [11, 9, -9, -11]);
    design.addPosition("i2", [11, 9, -9, -11]);
    design.addPosition("j2", [0, 9, 0, -11]);
    design.addPosition("a1", [0, 0, -9, 0]);
    design.addPosition("b1", [0, 0, -9, -11]);
    design.addPosition("c1", [0, 0, -9, -11]);
    design.addPosition("d1", [0, 0, -9, -11]);
    design.addPosition("e1", [0, 0, -9, -11]);
    design.addPosition("f1", [0, 0, -9, -11]);
    design.addPosition("g1", [0, 0, -9, -11]);
    design.addPosition("h1", [0, 0, -9, -11]);
    design.addPosition("i1", [0, 0, -9, -11]);
    design.addPosition("j1", [0, 0, 0, -11]);

    design.addZone("promotion", 2, ["a1", "c1", "e1", "g1", "i1"]);
    design.addZone("promotion", 1, ["b10", "d10", "f10", "h10", "j10"]);

    design.addPriority(1);			// jump-type
    design.addPriority(0);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, jumpMan, [3], 1);
    design.addMove(0, jumpMan, [0], 1);
    design.addMove(0, jumpMan, [2], 1);
    design.addMove(0, jumpMan, [1], 1);
    design.addMove(0, shiftMan, [2], 0);
    design.addMove(0, shiftMan, [3], 0);

    design.addPiece("King", 1, 100);
    design.addMove(1, jumpKing, [3], 1);
    design.addMove(1, jumpKing, [0], 1);
    design.addMove(1, jumpKing, [2], 1);
    design.addMove(1, jumpKing, [1], 1);
    design.addMove(1, contKing, [3], 2);
    design.addMove(1, contKing, [0], 2);
    design.addMove(1, contKing, [2], 2);
    design.addMove(1, contKing, [1], 2);
    design.addMove(1, shiftKing, [3], 0);
    design.addMove(1, shiftKing, [0], 0);
    design.addMove(1, shiftKing, [2], 0);
    design.addMove(1, shiftKing, [1], 0);

    design.setup("White", "Man", ["a1", "c1", "e1", "g1", "i1", "b2", "d2", "f2", "h2", "j2", "a3", "c3", "e3", "g3", "i3", "b4", "d4", "f4", "h4", "j4"]);
    design.setup("Black", "Man", ["b10", "d10", "f10", "h10", "j10", "a9", "c9", "e9", "g9", "i9", "b8", "d8", "f8", "h8", "j8", "a7", "c7", "e7", "g7", "i7"]);
}

games.view.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a10", 2, 2, 50, 50);
    view.defPosition("b10", 52, 2, 50, 50);
    view.defPosition("c10", 102, 2, 50, 50);
    view.defPosition("d10", 152, 2, 50, 50);
    view.defPosition("e10", 202, 2, 50, 50);
    view.defPosition("f10", 252, 2, 50, 50);
    view.defPosition("g10", 302, 2, 50, 50);
    view.defPosition("h10", 352, 2, 50, 50);
    view.defPosition("i10", 402, 2, 50, 50);
    view.defPosition("j10", 452, 2, 50, 50);
    view.defPosition("a9", 2, 52, 50, 50);
    view.defPosition("b9", 52, 52, 50, 50);
    view.defPosition("c9", 102, 52, 50, 50);
    view.defPosition("d9", 152, 52, 50, 50);
    view.defPosition("e9", 202, 52, 50, 50);
    view.defPosition("f9", 252, 52, 50, 50);
    view.defPosition("g9", 302, 52, 50, 50);
    view.defPosition("h9", 352, 52, 50, 50);
    view.defPosition("i9", 402, 52, 50, 50);
    view.defPosition("j9", 452, 52, 50, 50);
    view.defPosition("a8", 2, 102, 50, 50);
    view.defPosition("b8", 52, 102, 50, 50);
    view.defPosition("c8", 102, 102, 50, 50);
    view.defPosition("d8", 152, 102, 50, 50);
    view.defPosition("e8", 202, 102, 50, 50);
    view.defPosition("f8", 252, 102, 50, 50);
    view.defPosition("g8", 302, 102, 50, 50);
    view.defPosition("h8", 352, 102, 50, 50);
    view.defPosition("i8", 402, 102, 50, 50);
    view.defPosition("j8", 452, 102, 50, 50);
    view.defPosition("a7", 2, 152, 50, 50);
    view.defPosition("b7", 52, 152, 50, 50);
    view.defPosition("c7", 102, 152, 50, 50);
    view.defPosition("d7", 152, 152, 50, 50);
    view.defPosition("e7", 202, 152, 50, 50);
    view.defPosition("f7", 252, 152, 50, 50);
    view.defPosition("g7", 302, 152, 50, 50);
    view.defPosition("h7", 352, 152, 50, 50);
    view.defPosition("i7", 402, 152, 50, 50);
    view.defPosition("j7", 452, 152, 50, 50);
    view.defPosition("a6", 2, 202, 50, 50);
    view.defPosition("b6", 52, 202, 50, 50);
    view.defPosition("c6", 102, 202, 50, 50);
    view.defPosition("d6", 152, 202, 50, 50);
    view.defPosition("e6", 202, 202, 50, 50);
    view.defPosition("f6", 252, 202, 50, 50);
    view.defPosition("g6", 302, 202, 50, 50);
    view.defPosition("h6", 352, 202, 50, 50);
    view.defPosition("i6", 402, 202, 50, 50);
    view.defPosition("j6", 452, 202, 50, 50);
    view.defPosition("a5", 2, 252, 50, 50);
    view.defPosition("b5", 52, 252, 50, 50);
    view.defPosition("c5", 102, 252, 50, 50);
    view.defPosition("d5", 152, 252, 50, 50);
    view.defPosition("e5", 202, 252, 50, 50);
    view.defPosition("f5", 252, 252, 50, 50);
    view.defPosition("g5", 302, 252, 50, 50);
    view.defPosition("h5", 352, 252, 50, 50);
    view.defPosition("i5", 402, 252, 50, 50);
    view.defPosition("j5", 452, 252, 50, 50);
    view.defPosition("a4", 2, 302, 50, 50);
    view.defPosition("b4", 52, 302, 50, 50);
    view.defPosition("c4", 102, 302, 50, 50);
    view.defPosition("d4", 152, 302, 50, 50);
    view.defPosition("e4", 202, 302, 50, 50);
    view.defPosition("f4", 252, 302, 50, 50);
    view.defPosition("g4", 302, 302, 50, 50);
    view.defPosition("h4", 352, 302, 50, 50);
    view.defPosition("i4", 402, 302, 50, 50);
    view.defPosition("j4", 452, 302, 50, 50);
    view.defPosition("a3", 2, 352, 50, 50);
    view.defPosition("b3", 52, 352, 50, 50);
    view.defPosition("c3", 102, 352, 50, 50);
    view.defPosition("d3", 152, 352, 50, 50);
    view.defPosition("e3", 202, 352, 50, 50);
    view.defPosition("f3", 252, 352, 50, 50);
    view.defPosition("g3", 302, 352, 50, 50);
    view.defPosition("h3", 352, 352, 50, 50);
    view.defPosition("i3", 402, 352, 50, 50);
    view.defPosition("j3", 452, 352, 50, 50);
    view.defPosition("a2", 2, 402, 50, 50);
    view.defPosition("b2", 52, 402, 50, 50);
    view.defPosition("c2", 102, 402, 50, 50);
    view.defPosition("d2", 152, 402, 50, 50);
    view.defPosition("e2", 202, 402, 50, 50);
    view.defPosition("f2", 252, 402, 50, 50);
    view.defPosition("g2", 302, 402, 50, 50);
    view.defPosition("h2", 352, 402, 50, 50);
    view.defPosition("i2", 402, 402, 50, 50);
    view.defPosition("j2", 452, 402, 50, 50);
    view.defPosition("a1", 2, 452, 50, 50);
    view.defPosition("b1", 52, 452, 50, 50);
    view.defPosition("c1", 102, 452, 50, 50);
    view.defPosition("d1", 152, 452, 50, 50);
    view.defPosition("e1", 202, 452, 50, 50);
    view.defPosition("f1", 252, 452, 50, 50);
    view.defPosition("g1", 302, 452, 50, 50);
    view.defPosition("h1", 352, 452, 50, 50);
    view.defPosition("i1", 402, 452, 50, 50);
    view.defPosition("j1", 452, 452, 50, 50);
}

})();
