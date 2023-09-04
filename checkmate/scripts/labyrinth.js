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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("se");  // 0
    design.addDirection("s");   // 1
    design.addDirection("sw");  // 2
    design.addDirection("e");   // 3
    design.addDirection("w");   // 4
    design.addDirection("ne");  // 5
    design.addDirection("nw");  // 6
    design.addDirection("n");   // 7
    design.addDirection("nr");  // 8
    design.addDirection("sr");  // 9
    design.addDirection("er");  // 10
    design.addDirection("wr");  // 11
    design.addDirection("ner"); // 12
    design.addDirection("swr"); // 13
    design.addDirection("nwr"); // 14
    design.addDirection("ser"); // 15
    design.addDirection("nner");// 16
    design.addDirection("sswr");// 17
    design.addDirection("nnwr");// 18
    design.addDirection("sser");// 19
    design.addDirection("neer");// 20
    design.addDirection("swwr");// 21
    design.addDirection("nwwr");// 22
    design.addDirection("seer");// 23

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1, 1, 8, 4, 11, 2, 5, 15, 14, 17, 16, 19, 18, 21, 20, 23, 22]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);

    design.addPosition("a12", [13, 12, 0, 1, 0, 0, 0, 0, 0, 12, 1, 0, 0, 0, 0, 13, 0, 0, 0, 25, 0, 0, 0, 0]);
    design.addPosition("b12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("c12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("d12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, -1, 0, 11, 0, 13, 0, 0, 0, 25, 0, 0, 0, 14]);
    design.addPosition("e12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, -1, 0, 11, 0, 13, 0, 0, 0, 25, 0, 10, 0, 0]);
    design.addPosition("f12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 0, 0, 10, 0, 0]);
    design.addPosition("g12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("h12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, -1, 0, 11, 0, 13, 0, 0, 0, 25, 0, 0, 0, 14]);
    design.addPosition("i12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, -1, 0, 11, 0, 13, 0, 0, 0, 25, 0, 10, 0, 14]);
    design.addPosition("j12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, -1, 0, 11, 0, 13, 0, 23, 0, 0, 0, 10, 0, 14]);
    design.addPosition("k12", [13, 12, 11, 1, -1, 0, 0, 0, 0, 12, 1, -1, 0, 11, 0, 13, 0, 0, 0, 0, 0, 10, 0, 0]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, 0, 0, 0, 12, 0, -1, 0, 11, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12, -12, 12, 1, 0, -11, 0, 0, 13, 0, 0, 0, 25, 0, 0, 0, 14]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, 0, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 0, -13, 13, 0, 0, 0, 25, 0, 0, -14, 0]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 23, 0, 0, 0, 0, -14, 0]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 13, 0, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 0, -13, 13, 0, 0, 0, 25, -10, 0, -14, 0]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 0, 0, 23, 0, 0, -10, 0, -14, 0]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 11, -13, 0, 0, 0, 0, 0, 0, 10, -14, 0]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 0, -1, 0, 0, -13, 0, 0, 0, 0, 0, 0, 10, -14, 0]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12, -12, 12, 1, 0, -11, 0, 0, 13, -23, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, 0, 11, -13, 13, 0, 0, -25, 25, 0, 0, 0, 14]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, 0, 11, -13, 13, 0, 0, 0, 25, 0, 10, -14, 0]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 25, 0, 10, -14, 0]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, 0, 13, -23, 23, -25, 25, 0, 0, 0, 0]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 23, -25, 25, 0, 0, -14, 0]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, 0, 0, 0, 0, 13, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, -13, 13, -23, 23, -25, 25, -10, 0, 0, 0]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, -11, 11, -13, 0, -23, 23, -25, 25, 0, 0, -14, 0]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, 0, 0, 0, 0, 13, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [13, 12, 0, 1, 0, -11, 0, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("b9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 13, 0, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("c9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 0, -13, 13, 0, 0, -25, 25, 0, 0, -14, 14]);
    design.addPosition("d9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, 0, 23, 0, 25, 0, 0, -14, 0]);
    design.addPosition("e9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 11, 0, 13, -23, 23, -25, 25, 0, 0, 0, 14]);
    design.addPosition("f9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, 0, 23, -25, 25, 0, 10, 0, 0]);
    design.addPosition("g9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 11, 0, 13, 0, 23, 0, 25, 0, 0, 0, 14]);
    design.addPosition("h9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, 0, 23, 0, 25, 0, 10, 0, 0]);
    design.addPosition("i9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 11, 0, 13, -23, 23, -25, 25, 0, 0, 0, 14]);
    design.addPosition("j9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, -23, 23, -25, 25, 0, 10, 0, 0]);
    design.addPosition("k9", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 11, 0, 13, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("l9", [0, 12, 11, 0, -1, 0, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 23, 0, 0, 0, 10, 0, 0]);
    design.addPosition("a8", [13, 12, 0, 1, 0, -11, 0, -12, 0, 12, 1, 0, 0, 0, 0, 13, 0, 0, 0, 25, 0, 0, 0, 0]);
    design.addPosition("b8", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("c8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 1, -11, 0, -13, 13, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("d8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 1, -11, 11, -13, 13, 0, 0, -25, 25, -10, 0, -14, 14]);
    design.addPosition("e8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 1, -11, 11, -13, 13, -23, 23, 0, 25, -10, 10, -14, 14]);
    design.addPosition("f8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 1, -11, 11, -13, 13, 0, 23, -25, 25, -10, 10, -14, 14]);
    design.addPosition("g8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 1, -11, 11, -13, 13, -23, 23, 0, 25, -10, 10, -14, 14]);
    design.addPosition("h8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 1, -11, 11, -13, 13, 0, 23, -25, 25, -10, 10, -14, 14]);
    design.addPosition("i8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 1, -11, 11, -13, 13, -23, 23, 0, 0, -10, 10, -14, 14]);
    design.addPosition("j8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 11, -13, 13, 0, 0, -25, 25, -10, 10, -14, 14]);
    design.addPosition("k8", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 0, 0, 25, 0, 10, -14, 0]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 23, -25, 0, 0, 10, -14, 0]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12, -12, 12, 1, 0, -11, 0, 0, 13, 0, 0, 0, 25, 0, 0, 0, 14]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 13, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 23, -25, 25, -10, 0, -14, 14]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 23, -25, 0, -10, 10, -14, 14]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 0, -25, 25, -10, 10, -14, 14]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 23, -25, 25, -10, 10, -14, 0]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 11, -13, 0, -23, 0, -25, 0, -10, 10, -14, 14]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 13, -23, 0, -25, 0, -10, 10, -14, 14]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 0, -13, 13, -23, 0, -25, 25, 0, 0, -14, 0]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 23, -25, 0, 0, 0, -14, 0]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12, -12, 12, 1, 0, -11, 0, 0, 13, -23, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, 0, 11, -13, 13, 0, 0, -25, 25, 0, 0, 0, 14]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, 0, 11, -13, 13, 0, 0, 0, 25, -10, 10, -14, 14]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, -11, 11, 0, 13, 0, 23, 0, 25, -10, 10, -14, 14]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 23, -25, 25, -10, 10, 0, 0]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, -11, 11, -13, 0, -23, 23, -25, 25, 0, 10, -14, 0]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, -13, 13, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 0, -25, 0, 0, 0, -14, 14]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, 0, 11, -13, 13, 0, 0, 0, 25, 0, 10, -14, 0]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 25, 0, 10, -14, 0]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, -13, 13, -23, 0, -25, 0, 0, 0, 0, 0]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 0, -25, 0, 0, 0, -14, 0]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, 0, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 0, -13, 13, 0, 0, 0, 25, -10, 0, -14, 14]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, 0, 23, 0, 0, -10, 0, -14, 14]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 0, -25, 25, 0, 10, -14, 14]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, -23, 23, -25, 25, 0, 10, -14, 0]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 13, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 0, -13, 13, 0, 0, -25, 25, 0, 0, -14, 14]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, 0, 23, 0, 25, 0, 0, -14, 0]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, -25, 0, 0, 0, 0, 0]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 0, -1, 0, 0, -13, 0, 0, 0, -25, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12, 0, 12, 1, 0, 0, 0, 0, 13, 0, 0, 0, 25, 0, 0, 0, 0]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, 0, 13, -23, 23, -25, 25, -10, 0, 0, 0]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, -11, 11, -13, 0, -23, 23, -25, 25, 0, 0, -14, 0]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, -13, 13, -23, 0, -25, 0, 0, 0, 0, 14]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, 0, 11, -13, 13, 0, 0, -25, 25, 0, 0, -14, 14]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, 0, 11, -13, 13, 0, 0, 0, 25, 0, 10, -14, 0]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 1, 0, 10, -14, 0]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, -13, 13, -23, 0, -25, 0, 0, 0, 0, 14]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, 0, 11, -13, 13, 0, 0, -25, 25, 0, 0, -14, 14]);
    design.addPosition("k4", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, 0, 11, -13, 13, 0, 23, 0, 25, 0, 10, -14, 0]);
    design.addPosition("l4", [0, 12, 11, 0, -1, 0, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 23, 0, 0, 0, 10, -14, 0]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12, -12, 12, 1, 0, -11, 0, 0, 13, 0, 0, 0, 25, 0, 0, 0, 14]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, 0, 23, 0, 25, 0, 0, 0, 0]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 11, 0, 13, -23, 23, -25, 25, 0, 0, 0, 14]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 13, -23, 23, -25, 25, 0, 10, 0, 0]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 13, 0, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 0, -13, 13, 0, 0, -25, 25, 0, 0, -14, 0]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 23, 0, 0, 0, 0, -14, 0]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("j3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 13, 0, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("k3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, 0, 23, -25, 25, 0, 0, -14, 0]);
    design.addPosition("l3", [0, 12, 11, 0, -1, 0, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 23, 0, 0, 0, 10, -14, 0]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12, -12, 12, 1, 0, -11, 0, 0, 13, -23, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, 0, 0, -25, 0, -10, 0, 0, 14]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 0, 0, 0, 0, 10, -14, 14]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, 0, 11, -13, 13, 0, 0, -25, 0, 0, 10, -14, 14]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, 0, 11, -13, 13, 0, 0, 0, 0, 0, 10, -14, 0]);
    design.addPosition("f2", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 0, -1, 0, 11, 0, 0, 0, 0, 0, 0, 0, 10, -14, 0]);
    design.addPosition("g2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, 0, -11, 0, -13, 13, -23, 0, -25, 0, 0, 0, 0, 0]);
    design.addPosition("h2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 0, -25, 0, 0, 0, -14, 0]);
    design.addPosition("i2", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, 0, 0, 0, 0, 13, 0, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("j2", [13, 12, 11, 1, -1, -11, -13, -12, 0, 12, 1, -1, -11, 11, 0, 13, 0, 0, 0, 0, -10, 0, 0, 14]);
    design.addPosition("k2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 12, 1, -1, -11, 11, -13, 13, -23, 0, -25, 0, 0, 10, 0, 0]);
    design.addPosition("l2", [0, 12, 11, 0, -1, 0, -13, -12, -12, 12, 0, -1, 0, 11, -13, 0, 0, 0, -25, 0, 0, 10, -14, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, 0, 0, -10, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, 0, 0, -25, 0, -10, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, -23, 0, -25, 0, -10, 0, -14, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, 0, 0, -25, 0, -10, 0, -14, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, 0, 0, -25, 0, 0, 0, -14, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 0, -1, 0, 0, -13, 0, 0, 0, 0, 0, 0, 0, -14, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, -23, 0, -25, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 0, -1, 0, 0, -13, 0, 0, 0, -25, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, 0, -11, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, 0, 0, 0, 0, -10, 0, 0, 0]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 0, 1, -1, -11, 0, -13, 0, -23, 0, -25, 0, 0, 0, -14, 0]);
    design.addPosition("l1", [0, 0, 0, 0, -1, 0, -13, -12, -12, 0, 0, -1, 0, 0, -13, 0, 0, 0, -25, 0, 0, 0, -14, 0]);

    design.addZone("third-rank", 1, [108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]);
    design.addZone("third-rank", 2, [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 300);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 2, [6], 0);
    design.addMove(0, 2, [5], 0);
    design.addMove(0, 3, [3, 7, 7], 0);
    design.addMove(0, 3, [4, 7, 7], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 4, [8, 8], 1);
    design.addMove(1, 4, [9, 9], 1);
    design.addMove(1, 4, [11, 11], 1);
    design.addMove(1, 4, [10, 10], 1);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 5, [18], 2);
    design.addMove(2, 5, [16], 2);
    design.addMove(2, 5, [17], 2);
    design.addMove(2, 5, [19], 2);
    design.addMove(2, 5, [22], 2);
    design.addMove(2, 5, [21], 2);
    design.addMove(2, 5, [20], 2);
    design.addMove(2, 5, [23], 2);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 4, [14, 14], 3);
    design.addMove(3, 4, [13, 13], 3);
    design.addMove(3, 4, [12, 12], 3);
    design.addMove(3, 4, [15, 15], 3);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 4, [8, 8], 4);
    design.addMove(4, 4, [9, 9], 4);
    design.addMove(4, 4, [11, 11], 4);
    design.addMove(4, 4, [10, 10], 4);
    design.addMove(4, 4, [14, 14], 4);
    design.addMove(4, 4, [13, 13], 4);
    design.addMove(4, 4, [12, 12], 4);
    design.addMove(4, 4, [15, 15], 4);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 5, [8], 5);
    design.addMove(5, 5, [9], 5);
    design.addMove(5, 5, [11], 5);
    design.addMove(5, 5, [10], 5);
    design.addMove(5, 5, [14], 5);
    design.addMove(5, 5, [13], 5);
    design.addMove(5, 5, [12], 5);
    design.addMove(5, 5, [15], 5);

    design.setup("White", "Pawn", 122);
    design.setup("White", "Pawn", 123);
    design.setup("White", "Pawn", 124);
    design.setup("White", "Pawn", 125);
    design.setup("White", "Pawn", 126);
    design.setup("White", "Pawn", 127);
    design.setup("White", "Pawn", 128);
    design.setup("White", "Pawn", 129);
    design.setup("White", "Rook", 134);
    design.setup("White", "Rook", 141);
    design.setup("White", "Knight", 135);
    design.setup("White", "Knight", 140);
    design.setup("White", "Bishop", 136);
    design.setup("White", "Bishop", 139);
    design.setup("White", "Queen", 137);
    design.setup("White", "King", 138);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Rook", 2);
    design.setup("Black", "Rook", 9);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Knight", 8);
    design.setup("Black", "Bishop", 4);
    design.setup("Black", "Bishop", 7);
    design.setup("Black", "Queen", 5);
    design.setup("Black", "King", 6);
}

Dagaz.View.configure = function(view) {

    var b = view.root.addRegion(0, 0, 604, 604);
    b.addBoard("WhiteBoard", [0]);
    b.addBoard("BlackBoard", [1]);
    var g = b.addGrid(2, 2, 50, 50);
    g.addScale("a/b/c/d/e/f/g/h/i/j/k/l", 50, 0);
    g.addScale("12/11/10/9/8/7/6/5/4/3/2/1", 0, 50);
    g.addTurns(0, [0]);
    g.addTurns(1, [1]);

    view.addPiece(["WhitePawn", "BlackPawn"], Dagaz.View.drawPawn);
    view.addPiece(["WhiteKnight", "WhiteBishop", "WhiteRook", "WhiteQueen", "WhiteKing", "BlackKnight", "BlackBishop", "BlackRook", "BlackQueen", "BlackKing"]);
}
