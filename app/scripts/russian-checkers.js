(function() {

var shiftMan = function(ctx, params) {
    if (ctx.go(params, 0) && ctx.isEmpty()) {
        if (ctx.inZone(0)) {
            ctx.promote(1);
        }    
        ctx.end();
    }
}

var jumpMan = function(ctx, params) {
    if (ctx.go(params, 0) && ctx.isEnemy()) {
        ctx.capture();
        if (ctx.go(params, 0) && ctx.isEmpty()) {
            if (ctx.inZone(0)) {
                ctx.promote(1);
                ctx.end(1);
            } else {
                ctx.end(1);
            }
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
    design.checkVersion("deferred-captures", "true");

    design.addDirection("ne"); // 0
    design.addDirection("se"); // 1
    design.addDirection("sw"); // 2
    design.addDirection("nw"); // 3

    design.addPlayer("White", [2, 3, 0, 1]);
    design.addPlayer("Black", [2, 3, 0, 1]);

    design.addPosition("a8", [0, 9, 0, 0]);
    design.addPosition("b8", [0, 9, 7, 0]);
    design.addPosition("c8", [0, 9, 7, 0]);
    design.addPosition("d8", [0, 9, 7, 0]);
    design.addPosition("e8", [0, 9, 7, 0]);
    design.addPosition("f8", [0, 9, 7, 0]);
    design.addPosition("g8", [0, 9, 7, 0]);
    design.addPosition("h8", [0, 0, 7, 0]);
    design.addPosition("a7", [-7, 9, 0, 0]);
    design.addPosition("b7", [-7, 9, 7, -9]);
    design.addPosition("c7", [-7, 9, 7, -9]);
    design.addPosition("d7", [-7, 9, 7, -9]);
    design.addPosition("e7", [-7, 9, 7, -9]);
    design.addPosition("f7", [-7, 9, 7, -9]);
    design.addPosition("g7", [-7, 9, 7, -9]);
    design.addPosition("h7", [0, 0, 7, -9]);
    design.addPosition("a6", [-7, 9, 0, 0]);
    design.addPosition("b6", [-7, 9, 7, -9]);
    design.addPosition("c6", [-7, 9, 7, -9]);
    design.addPosition("d6", [-7, 9, 7, -9]);
    design.addPosition("e6", [-7, 9, 7, -9]);
    design.addPosition("f6", [-7, 9, 7, -9]);
    design.addPosition("g6", [-7, 9, 7, -9]);
    design.addPosition("h6", [0, 0, 7, -9]);
    design.addPosition("a5", [-7, 9, 0, 0]);
    design.addPosition("b5", [-7, 9, 7, -9]);
    design.addPosition("c5", [-7, 9, 7, -9]);
    design.addPosition("d5", [-7, 9, 7, -9]);
    design.addPosition("e5", [-7, 9, 7, -9]);
    design.addPosition("f5", [-7, 9, 7, -9]);
    design.addPosition("g5", [-7, 9, 7, -9]);
    design.addPosition("h5", [0, 0, 7, -9]);
    design.addPosition("a4", [-7, 9, 0, 0]);
    design.addPosition("b4", [-7, 9, 7, -9]);
    design.addPosition("c4", [-7, 9, 7, -9]);
    design.addPosition("d4", [-7, 9, 7, -9]);
    design.addPosition("e4", [-7, 9, 7, -9]);
    design.addPosition("f4", [-7, 9, 7, -9]);
    design.addPosition("g4", [-7, 9, 7, -9]);
    design.addPosition("h4", [0, 0, 7, -9]);
    design.addPosition("a3", [-7, 9, 0, 0]);
    design.addPosition("b3", [-7, 9, 7, -9]);
    design.addPosition("c3", [-7, 9, 7, -9]);
    design.addPosition("d3", [-7, 9, 7, -9]);
    design.addPosition("e3", [-7, 9, 7, -9]);
    design.addPosition("f3", [-7, 9, 7, -9]);
    design.addPosition("g3", [-7, 9, 7, -9]);
    design.addPosition("h3", [0, 0, 7, -9]);
    design.addPosition("a2", [-7, 9, 0, 0]);
    design.addPosition("b2", [-7, 9, 7, -9]);
    design.addPosition("c2", [-7, 9, 7, -9]);
    design.addPosition("d2", [-7, 9, 7, -9]);
    design.addPosition("e2", [-7, 9, 7, -9]);
    design.addPosition("f2", [-7, 9, 7, -9]);
    design.addPosition("g2", [-7, 9, 7, -9]);
    design.addPosition("h2", [0, 0, 7, -9]);
    design.addPosition("a1", [-7, 0, 0, 0]);
    design.addPosition("b1", [-7, 0, 0, -9]);
    design.addPosition("c1", [-7, 0, 0, -9]);
    design.addPosition("d1", [-7, 0, 0, -9]);
    design.addPosition("e1", [-7, 0, 0, -9]);
    design.addPosition("f1", [-7, 0, 0, -9]);
    design.addPosition("g1", [-7, 0, 0, -9]);
    design.addPosition("h1", [0, 0, 0, -9]);

    design.addZone("promotion", 2, ["a1", "c1", "e1", "g1"]);
    design.addZone("promotion", 1, ["b8", "d8", "f8", "h8"]);

    design.addPriority(1);			// jump-type
    design.addPriority(0);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, jumpMan, [3], 1);
    design.addMove(0, jumpMan, [0], 1);
    design.addMove(0, jumpMan, [2], 1);
    design.addMove(0, jumpMan, [1], 1);
    design.addMove(0, shiftMan, [3], 0);
    design.addMove(0, shiftMan, [0], 0);

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

    design.setup("White", "Man", ["a3", "c3", "e3", "g3", "b2", "d2", "f2", "h2", "a1", "c1", "e1", "g1"]);
    design.setup("Black", "Man", ["b8", "d8", "f8", "h8", "a7", "c7", "e7", "g7", "b6", "d6", "f6", "h6"]);
}

games.view.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
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
