Dagaz.View.CLEAR_KO  = true;
Dagaz.Model.NO_SOUND = true;

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");

    design.addDirection("down");  // 0
    design.addDirection("left");  // 1
    design.addDirection("right"); // 2
    design.addDirection("next");  // 3

    design.addPlayer("You", [0, 1, 2, 3]);
    design.addPlayer("Computer", [0, 1, 2, 3]);
    design.addTurn(1);

    design.addPosition("a8", [4, 0, 1, 0]);
    design.addPosition("b8", [4, 0, 1, 0]);
    design.addPosition("c8", [4, 0, 1, 0]);
    design.addPosition("d8", [4, 0, 0, 0]);
    design.addPosition("a7", [4, 0, 1, 32]);
    design.addPosition("b7", [4, -1, 1, 0]);
    design.addPosition("c7", [4, -2, 1, 0]);
    design.addPosition("d7", [4, -3, 0, 0]);
    design.addPosition("a6", [4, 0, 1, 32]);
    design.addPosition("b6", [4, -1, 1, 0]);
    design.addPosition("c6", [4, -2, 1, 0]);
    design.addPosition("d6", [4, -3, 0, 0]);
    design.addPosition("a5", [4, 0, 1, 32]);
    design.addPosition("b5", [4, -1, 1, 0]);
    design.addPosition("c5", [4, -2, 1, 0]);
    design.addPosition("d5", [4, -3, 0, 0]);
    design.addPosition("a4", [4, 0, 1, 32]);
    design.addPosition("b4", [4, -1, 1, 0]);
    design.addPosition("c4", [4, -2, 1, 0]);
    design.addPosition("d4", [4, -3, 0, 0]);
    design.addPosition("a3", [4, 0, 1, 32]);
    design.addPosition("b3", [4, -1, 1, 0]);
    design.addPosition("c3", [4, -2, 1, 0]);
    design.addPosition("d3", [4, -3, 0, 0]);
    design.addPosition("a2", [4, 0, 1, 32]);
    design.addPosition("b2", [4, -1, 1, 0]);
    design.addPosition("c2", [4, -2, 1, 0]);
    design.addPosition("d2", [4, -3, 0, 0]);
    design.addPosition("a1", [0, 0, 1, 32]);
    design.addPosition("b1", [0, -1, 1, 0]);
    design.addPosition("c1", [0, -2, 1, 0]);
    design.addPosition("d1", [0, -3, 0, 0]);
    design.addPosition("x16", [0, 0, 0, 0]);
    design.addPosition("y16", [0, 0, 0, 0]);
    design.addPosition("x15", [0, 0, 0, 0]);
    design.addPosition("y15", [0, 0, 0, 0]);
    design.addPosition("x14", [0, 0, 0, 1]);
    design.addPosition("y14", [0, 0, 0, 1]);
    design.addPosition("x13", [0, 0, 0, 1]);
    design.addPosition("y13", [0, 0, 0, 0]);
    design.addPosition("x12", [0, 0, 0, 1]);
    design.addPosition("y12", [0, 0, 0, 1]);
    design.addPosition("x11", [0, 0, 0, 1]);
    design.addPosition("y11", [0, 0, 0, 0]);
    design.addPosition("x10", [0, 0, 0, 1]);
    design.addPosition("y10", [0, 0, 0, 1]);
    design.addPosition("x9", [0, 0, 0, 1]);
    design.addPosition("y9", [0, 0, 0, 0]);
    design.addPosition("x8", [0, 0, 0, 1]);
    design.addPosition("y8", [0, 0, 0, 1]);
    design.addPosition("x7", [0, 0, 0, 1]);
    design.addPosition("y7", [0, 0, 0, 0]);
    design.addPosition("x6", [0, 0, 0, 1]);
    design.addPosition("y6", [0, 0, 0, 1]);
    design.addPosition("x5", [0, 0, 0, 1]);
    design.addPosition("y5", [0, 0, 0, 0]);
    design.addPosition("x4", [0, 0, 0, 1]);
    design.addPosition("y4", [0, 0, 0, 1]);
    design.addPosition("x3", [0, 0, 0, 1]);
    design.addPosition("y3", [0, 0, 0, 0]);
    design.addPosition("x2", [0, 0, 0, 1]);
    design.addPosition("y2", [0, 0, 0, 1]);
    design.addPosition("x1", [0, 0, 0, 1]);
    design.addPosition("y1", [0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3]);
    design.addZone("board-zone", 1, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("red", 0);
    design.addDrop(0, 0, [0], 0);

    design.addPiece("blue", 1);
    design.addDrop(1, 0, [1], 0);

    design.addPiece("green", 2);
    design.addDrop(2, 0, [2], 0);

    design.addPiece("yellow", 3);
    design.addDrop(3, 0, [3], 0);

    design.addPiece("purple", 4);
    design.addDrop(4, 0, [4], 0);

    design.addPiece("cyan", 5);
    design.addDrop(5, 0, [5], 0);

    design.addPiece("white", 6);
    design.addPiece("black", 7);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("Youred", "You red");
    view.defPiece("Computerred", "Computer red");
    view.defPiece("Youblue", "You blue");
    view.defPiece("Computerblue", "Computer blue");
    view.defPiece("Yougreen", "You green");
    view.defPiece("Computergreen", "Computer green");
    view.defPiece("Youyellow", "You yellow");
    view.defPiece("Computeryellow", "Computer yellow");
    view.defPiece("Youpurple", "You purple");
    view.defPiece("Computerpurple", "Computer purple");
    view.defPiece("Youcyan", "You cyan");
    view.defPiece("Computercyan", "Computer cyan");
    view.defPiece("Youwhite", "You white");
    view.defPiece("Youblack", "You black");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("x16", 210, 10, 10, 10);
    view.defPosition("y16", 235, 10, 10, 10);
    view.defPosition("x15", 210, 35, 10, 10);
    view.defPosition("y15", 235, 35, 10, 10);
    view.defPosition("x14", 210, 60, 10, 10);
    view.defPosition("y14", 235, 60, 10, 10);
    view.defPosition("x13", 210, 85, 10, 10);
    view.defPosition("y13", 235, 85, 10, 10);
    view.defPosition("x12", 210, 110, 10, 10);
    view.defPosition("y12", 235, 110, 10, 10);
    view.defPosition("x11", 210, 135, 10, 10);
    view.defPosition("y11", 235, 135, 10, 10);
    view.defPosition("x10", 210, 160, 10, 10);
    view.defPosition("y10", 235, 160, 10, 10);
    view.defPosition("x9", 210, 185, 10, 10);
    view.defPosition("y9", 235, 185, 10, 10);
    view.defPosition("x8", 210, 210, 10, 10);
    view.defPosition("y8", 235, 210, 10, 10);
    view.defPosition("x7", 210, 235, 10, 10);
    view.defPosition("y7", 235, 235, 10, 10);
    view.defPosition("x6", 210, 260, 10, 10);
    view.defPosition("y6", 235, 260, 10, 10);
    view.defPosition("x5", 210, 285, 10, 10);
    view.defPosition("y5", 235, 285, 10, 10);
    view.defPosition("x4", 210, 310, 10, 10);
    view.defPosition("y4", 235, 310, 10, 10);
    view.defPosition("x3", 210, 335, 10, 10);
    view.defPosition("y3", 235, 335, 10, 10);
    view.defPosition("x2", 210, 360, 10, 10);
    view.defPosition("y2", 235, 360, 10, 10);
    view.defPosition("x1", 210, 385, 10, 10);
    view.defPosition("y1", 235, 385, 10, 10);
}
