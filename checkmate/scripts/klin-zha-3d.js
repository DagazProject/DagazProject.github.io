Dagaz.View.TARGET_FLAT  = true;
Dagaz.View.TARGET_LARGE = true;

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

function p(name) {
  return Dagaz.Model.stringToPos(name);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("kagga");
    design.addDirection("v");
    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ee");
    design.addDirection("ww");
    design.addDirection("ve");
    design.addDirection("vw");
    design.addDirection("ev");
    design.addDirection("wv");
    design.addDirection("xv");
    design.addDirection("wedge");

    design.addPlayer("Gold", [0, 1, 3, 2, 5, 4, 9, 8, 7, 6, 10, 11]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addTurn(1, 2);
/*  design.addTurn(1, 2);
    design.addTurn(1, 2);
    design.addTurn(1, 2);
    design.addTurn(1, 2);
    design.addTurn(1, 2);
    design.addTurn(1, 2);
    design.addTurn(1, 2);
    design.addTurn(1, 2);*/
    design.addTurn(2, 2);
/*  design.addTurn(2, 2);
    design.addTurn(2, 2);
    design.addTurn(2, 2);
    design.addTurn(2, 2);
    design.addTurn(2, 2);
    design.addTurn(2, 2);
    design.addTurn(2, 2);
    design.addTurn(2, 2);
    design.addTurn(1, 0);
    design.addTurn(2, 0);*/
    design.repeatMark();
    design.addTurn(1, 1);
    design.addTurn(2, 1);

    design.addPosition("A19", [-1, 4, 0, 0, 0, 0, 6, 2, 0, 0, 1, 12]);
    design.addPosition("A19V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("B18", [0, 8, 0, 2, 4, 0, 10, 6, -2, 0, 1, 10]);
    design.addPosition("B18V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("B19", [0, -4, -2, 2, 0, 0, 0, 0, 10, 6, 1, 8]);
    design.addPosition("B19V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("B29", [0, 8, -2, 0, 0, -4, 10, 6, 0, -6, 1, 6]);
    design.addPosition("B29V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("C17", [0, 12, 0, 2, 4, 0, 14, 10, -6, 0, 1, 0]);
    design.addPosition("C17V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("C18", [0, -8, -2, 2, 4, 0, -6, 0, 14, 10, 1, 0]);
    design.addPosition("C18V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("C28", [0, 12, -2, 2, 4, -4, 14, 10, -6, -10, 1, 0]);
    design.addPosition("C28V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("C29", [0, -8, -2, 2, 0, -4, 0, -10, 14, 10, 1, 0]);
    design.addPosition("C29V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("C39", [0, 12, -2, 0, 0, -4, 14, 10, 0, -10, 1, 0]);
    design.addPosition("C39V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("D16", [0, 16, 0, 2, 4, 0, 18, 14, -10, 0, 1, 0]);
    design.addPosition("D16V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("D17", [0, -12, -2, 2, 4, 0, -10, 0, 18, 14, 1, 0]);
    design.addPosition("D17V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("D27", [0, 16, -2, 2, 4, -4, 18, 14, -10, -14, 1, 0]);
    design.addPosition("D27V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("D28", [0, -12, -2, 2, 4, -4, -10, -14, 18, 14, 1, 0]);
    design.addPosition("D28V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("D38", [0, 16, -2, 2, 4, -4, 18, 14, -10, -14, 1, 0]);
    design.addPosition("D38V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("D39", [0, -12, -2, 2, 0, -4, 0, -14, 18, 14, 1, 0]);
    design.addPosition("D39V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("D49", [0, 16, -2, 0, 0, -4, 18, 14, 0, -14, 1, 0]);
    design.addPosition("D49V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E15", [0, 20, 0, 2, 4, 0, 22, 18, -14, 0, 1, 0]);
    design.addPosition("E15V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E16", [0, -16, -2, 2, 4, 0, -14, 0, 22, 18, 1, 0]);
    design.addPosition("E16V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E26", [0, 20, -2, 2, 4, -4, 22, 18, -14, -18, 1, 0]);
    design.addPosition("E26V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E27", [0, -16, -2, 2, 4, -4, -14, -18, 22, 18, 1, 0]);
    design.addPosition("E27V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E37", [0, 20, -2, 2, 4, -4, 22, 18, -14, -18, 1, 0]);
    design.addPosition("E37V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E38", [0, -16, -2, 2, 4, -4, -14, -18, 22, 18, 1, 0]);
    design.addPosition("E38V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E48", [0, 20, -2, 2, 4, -4, 22, 18, -14, -18, 1, 0]);
    design.addPosition("E48V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E49", [0, -16, -2, 2, 0, -4, 0, -18, 22, 18, 1, 0]);
    design.addPosition("E49V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("E59", [0, 20, -2, 0, 0, -4, 22, 18, 0, -18, 1, 0]);
    design.addPosition("E59V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F14", [0, 24, 0, 2, 4, 0, 26, 22, -18, 0, 1, 0]);
    design.addPosition("F14V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F15", [0, -20, -2, 2, 4, 0, -18, 0, 26, 22, 1, 0]);
    design.addPosition("F15V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F25", [0, 24, -2, 2, 4, -4, 26, 22, -18, -22, 1, 0]);
    design.addPosition("F25V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F26", [0, -20, -2, 2, 4, -4, -18, -22, 26, 22, 1, 0]);
    design.addPosition("F26V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F36", [0, 24, -2, 2, 4, -4, 26, 22, -18, -22, 1, 0]);
    design.addPosition("F36V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F37", [0, -20, -2, 2, 4, -4, -18, -22, 26, 22, 1, 0]);
    design.addPosition("F37V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F47", [0, 24, -2, 2, 4, -4, 26, 22, -18, -22, 1, 0]);
    design.addPosition("F47V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F48", [0, -20, -2, 2, 4, -4, -18, -22, 26, 22, 1, 0]);
    design.addPosition("F48V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F58", [0, 24, -2, 2, 4, -4, 26, 22, -18, -22, 1, 0]);
    design.addPosition("F58V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F59", [0, -20, -2, 2, 0, -4, 0, -22, 26, 22, 1, 0]);
    design.addPosition("F59V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("F69", [0, 24, -2, 0, 0, -4, 26, 22, 0, -22, 1, 0]);
    design.addPosition("F69V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G13", [0, 28, 0, 2, 4, 0, 30, 26, -22, 0, 1, 0]);
    design.addPosition("G13V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G14", [0, -24, -2, 2, 4, 0, -22, 0, 30, 26, 1, 0]);
    design.addPosition("G14V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G24", [0, 28, -2, 2, 4, -4, 30, 26, -22, -26, 1, 0]);
    design.addPosition("G24V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G25", [0, -24, -2, 2, 4, -4, -22, -26, 30, 26, 1, 0]);
    design.addPosition("G25V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G35", [0, 28, -2, 2, 4, -4, 30, 26, -22, -26, 1, 0]);
    design.addPosition("G35V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G36", [0, -24, -2, 2, 4, -4, -22, -26, 30, 26, 1, 0]);
    design.addPosition("G36V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G46", [0, 28, -2, 2, 4, -4, 30, 26, -22, -26, 1, 0]);
    design.addPosition("G46V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G47", [0, -24, -2, 2, 4, -4, -22, -26, 30, 26, 1, 0]);
    design.addPosition("G47V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G57", [0, 28, -2, 2, 4, -4, 30, 26, -22, -26, 1, 0]);
    design.addPosition("G57V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G58", [0, -24, -2, 2, 4, -4, -22, -26, 30, 26, 1, 0]);
    design.addPosition("G58V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G68", [0, 28, -2, 2, 4, -4, 30, 26, -22, -26, 1, 0]);
    design.addPosition("G68V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G69", [0, -24, -2, 2, 0, -4, 0, -26, 30, 26, 1, 0]);
    design.addPosition("G69V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("G79", [0, 28, -2, 0, 0, -4, 30, 26, 0, -26, 1, 0]);
    design.addPosition("G79V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H12", [0, 32, 0, 2, 4, 0, 34, 30, -26, 0, 1, 4]);
    design.addPosition("H12V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H13", [0, -28, -2, 2, 4, 0, -26, 0, 34, 30, 1, 0]);
    design.addPosition("H13V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H23", [0, 32, -2, 2, 4, -4, 34, 30, -26, -30, 1, 0]);
    design.addPosition("H23V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H24", [0, -28, -2, 2, 4, -4, -26, -30, 34, 30, 1, 0]);
    design.addPosition("H24V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H34", [0, 32, -2, 2, 4, -4, 34, 30, -26, -30, 1, 0]);
    design.addPosition("H34V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H35", [0, -28, -2, 2, 4, -4, -26, -30, 34, 30, 1, 0]);
    design.addPosition("H35V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H45", [0, 32, -2, 2, 4, -4, 34, 30, -26, -30, 1, 0]);
    design.addPosition("H45V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H46", [0, -28, -2, 2, 4, -4, -26, -30, 34, 30, 1, 0]);
    design.addPosition("H46V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H56", [0, 32, -2, 2, 4, -4, 34, 30, -26, -30, 1, 0]);
    design.addPosition("H56V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H57", [0, -28, -2, 2, 4, -4, -26, -30, 34, 30, 1, 0]);
    design.addPosition("H57V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H67", [0, 32, -2, 2, 4, -4, 34, 30, -26, -30, 1, 0]);
    design.addPosition("H67V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H68", [0, -28, -2, 2, 4, -4, -26, -30, 34, 30, 1, 0]);
    design.addPosition("H68V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H78", [0, 32, -2, 2, 4, -4, 34, 30, -26, -30, 1, 0]);
    design.addPosition("H78V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H79", [0, -28, -2, 2, 0, -4, 0, -30, 34, 30, 1, 0]);
    design.addPosition("H79V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("H89", [0, 32, -2, 0, 0, -4, 34, 30, 0, -30, 1, -4]);
    design.addPosition("H89V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I11", [0, 0, 0, 2, 4, 0, 0, 0, -30, 0, 1, -26]);
    design.addPosition("I11V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I12", [0, -32, -2, 2, 4, 0, -30, 0, 0, 0, 1, -28]);
    design.addPosition("I12V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I22", [0, 0, -2, 2, 4, -4, 0, 0, -30, -34, 1, -30]);
    design.addPosition("I22V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I23", [0, -32, -2, 2, 4, -4, -30, -34, 0, 0, 1, 0]);
    design.addPosition("I23V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I33", [0, 0, -2, 2, 4, -4, 0, 0, -30, -34, 1, 0]);
    design.addPosition("I33V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I34", [0, -32, -2, 2, 4, -4, -30, -34, 0, 0, 1, 0]);
    design.addPosition("I34V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I44", [0, 0, -2, 2, 4, -4, 0, 0, -30, -34, 1, 0]);
    design.addPosition("I44V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I45", [0, -32, -2, 2, 4, -4, -30, -34, 0, 0, 1, 0]);
    design.addPosition("I45V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I55", [0, 0, -2, 2, 4, -4, 0, 0, -30, -34, 1, 0]);
    design.addPosition("I55V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I56", [0, -32, -2, 2, 4, -4, -30, -34, 0, 0, 1, 0]);
    design.addPosition("I56V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I66", [0, 0, -2, 2, 4, -4, 0, 0, -30, -34, 1, 0]);
    design.addPosition("I66V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I67", [0, -32, -2, 2, 4, -4, -30, -34, 0, 0, 1, 0]);
    design.addPosition("I67V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I77", [0, 0, -2, 2, 4, -4, 0, 0, -30, -34, 1, 0]);
    design.addPosition("I77V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I78", [0, -32, -2, 2, 4, -4, -30, -34, 0, 0, 1, 0]);
    design.addPosition("I78V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I88", [0, 0, -2, 2, 4, -4, 0, 0, -30, -34, 1, -34]);
    design.addPosition("I88V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I89", [0, -32, -2, 2, 0, -4, 0, -34, 0, 0, 1, -36]);
    design.addPosition("I89V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("I99", [0, 0, -2, 0, 0, -4, 0, 0, 0, -34, 1, -38]);
    design.addPosition("I99V", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);

    design.addZone("board-zone", 1, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161]);
    design.addZone("board-zone", 2, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161]);
    design.addZone("wedge", 1, [13, 103, 123]);
    design.addZone("wedge", 2, [13, 103, 123]);
    design.addZone("dishonor", 1, [1, 3, 5, 7, 99, 127, 129, 131, 133, 157, 159, 161]);
    design.addZone("dishonor", 2, [1, 3, 5, 7, 99, 127, 129, 131, 133, 157, 159, 161]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	4);	// $5
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	5);	// $6
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	6);	// $7
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	6);	// $7
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	7);	// $8
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	8);	// $9
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PROMOTE,	2);	// Vanguard-carrier
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.JUMP,	5);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PROMOTE,	1);	// Vanguard
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PROMOTE,	4);	// Power-Vanguard-carrier
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.JUMP,	5);
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PROMOTE,	4);	// Power-Vanguard-carrier
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.JUMP,	5);
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PROMOTE,	3);	// Power-Vanguard
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PROMOTE,	3);	// Power-Vanguard
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	6);
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PROMOTE,	6);	// Lancer-carrier
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.JUMP,	5);
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.IF,	6);
    design.addCommand(11, ZRF.PARAM,	2);	// $3
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.PROMOTE,	6);	// Lancer-carrier
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.JUMP,	5);
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PARAM,	2);	// $3
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	6);
    design.addCommand(12, ZRF.PARAM,	3);	// $4
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PROMOTE,	6);	// Lancer-carrier
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.JUMP,	5);
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.PROMOTE,	5);	// Lancer
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.PROMOTE,	5);	// Lancer
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.PARAM,	2);	// $3
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.PROMOTE,	5);	// Lancer
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	6);
    design.addCommand(16, ZRF.PARAM,	1);	// $2
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.PROMOTE,	8);	// Fencer-carrier
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.JUMP,	5);
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.PARAM,	1);	// $2
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.IF,	6);
    design.addCommand(17, ZRF.PARAM,	2);	// $3
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.PROMOTE,	8);	// Fencer-carrier
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.JUMP,	5);
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.PARAM,	1);	// $2
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.PARAM,	2);	// $3
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(18, ZRF.FUNCTION,	0);	// not
    design.addCommand(18, ZRF.IF,	6);
    design.addCommand(18, ZRF.PARAM,	3);	// $4
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.PROMOTE,	8);	// Fencer-carrier
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.JUMP,	5);
    design.addCommand(18, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(18, ZRF.FUNCTION,	0);	// not
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.PROMOTE,	7);	// Fencer
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.PARAM,	1);	// $2
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.PROMOTE,	7);	// Fencer
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.PARAM,	1);	// $2
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.PARAM,	2);	// $3
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.PROMOTE,	7);	// Fencer
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.PARAM,	1);	// $2
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.IF,	6);
    design.addCommand(22, ZRF.PARAM,	2);	// $3
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.PROMOTE,	10);	// Swift-carrier
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.JUMP,	5);
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.PARAM,	1);	// $2
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.PARAM,	2);	// $3
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.IF,	6);
    design.addCommand(23, ZRF.PARAM,	3);	// $4
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.PROMOTE,	10);	// Swift-carrier
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.JUMP,	5);
    design.addCommand(23, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end

    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	0);	// $1
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.PARAM,	1);	// $2
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.PARAM,	2);	// $3
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.PARAM,	3);	// $4
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	0);	// not
    design.addCommand(24, ZRF.IF,	6);
    design.addCommand(24, ZRF.PARAM,	4);	// $5
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.PROMOTE,	10);	// Swift-carrier
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.JUMP,	5);
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	0);	// not
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.PARAM,	1);	// $2
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.PROMOTE,	9);	// Swift
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.PARAM,	1);	// $2
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.PARAM,	2);	// $3
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.PROMOTE,	9);	// Swift
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.PARAM,	1);	// $2
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.PARAM,	2);	// $3
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.PARAM,	3);	// $4
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.PROMOTE,	9);	// Swift
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.PARAM,	1);	// $2
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.PARAM,	2);	// $3
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.IF,	6);
    design.addCommand(28, ZRF.PARAM,	3);	// $4
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.PROMOTE,	12);	// Flier-carrier
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.JUMP,	5);
    design.addCommand(28, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.PARAM,	1);	// $2
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.PARAM,	2);	// $3
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.PARAM,	3);	// $4
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	0);	// not
    design.addCommand(29, ZRF.IF,	6);
    design.addCommand(29, ZRF.PARAM,	4);	// $5
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.PROMOTE,	12);	// Flier-carrier
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.JUMP,	5);
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	0);	// not
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.PARAM,	1);	// $2
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.PARAM,	2);	// $3
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.PARAM,	3);	// $4
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.PARAM,	4);	// $5
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.IF,	6);
    design.addCommand(30, ZRF.PARAM,	5);	// $6
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.PROMOTE,	12);	// Flier-carrier
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.JUMP,	5);
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.PARAM,	1);	// $2
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.PARAM,	2);	// $3
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.PARAM,	3);	// $4
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.PARAM,	4);	// $5
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.PARAM,	5);	// $6
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.IF,	6);
    design.addCommand(31, ZRF.PARAM,	6);	// $7
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.PROMOTE,	12);	// Flier-carrier
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.JUMP,	5);
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end

    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	0);	// $1
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.PARAM,	1);	// $2
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.PARAM,	2);	// $3
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.PROMOTE,	11);	// Flier
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end

    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	0);	// $1
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.PARAM,	1);	// $2
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.PARAM,	2);	// $3
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.PARAM,	3);	// $4
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.PROMOTE,	11);	// Flier
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	28);	// end

    design.addCommand(34, ZRF.FUNCTION,	24);	// from
    design.addCommand(34, ZRF.PARAM,	0);	// $1
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.PARAM,	1);	// $2
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.PARAM,	2);	// $3
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.PARAM,	3);	// $4
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.PARAM,	4);	// $5
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.PROMOTE,	11);	// Flier
    design.addCommand(34, ZRF.FUNCTION,	25);	// to
    design.addCommand(34, ZRF.FUNCTION,	28);	// end

    design.addCommand(35, ZRF.FUNCTION,	24);	// from
    design.addCommand(35, ZRF.PARAM,	0);	// $1
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.PARAM,	1);	// $2
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.PARAM,	2);	// $3
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.PARAM,	3);	// $4
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.PARAM,	4);	// $5
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.PARAM,	5);	// $6
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.PROMOTE,	11);	// Flier
    design.addCommand(35, ZRF.FUNCTION,	25);	// to
    design.addCommand(35, ZRF.FUNCTION,	28);	// end

    design.addCommand(36, ZRF.FUNCTION,	24);	// from
    design.addCommand(36, ZRF.PARAM,	0);	// $1
    design.addCommand(36, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(36, ZRF.FUNCTION,	25);	// to
    design.addCommand(36, ZRF.FUNCTION,	28);	// end

    design.addCommand(37, ZRF.FUNCTION,	24);	// from
    design.addCommand(37, ZRF.PARAM,	0);	// $1
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.PARAM,	1);	// $2
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	25);	// to
    design.addCommand(37, ZRF.FUNCTION,	28);	// end

    design.addPiece("Goal", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [1, 10, 10, 1, 10], 1);
    design.addMove(0, 1, [3, 10, 10, 3, 10], 1);
    design.addMove(0, 1, [2, 10, 10, 2, 10], 1);
    design.addMove(0, 2, [1, 3, 10, 10, 1, 3, 10], 1);
    design.addMove(0, 2, [3, 3, 10, 10, 3, 3, 10], 1);
    design.addMove(0, 2, [3, 1, 10, 10, 3, 1, 10], 1);
    design.addMove(0, 2, [1, 2, 10, 10, 1, 2, 10], 1);
    design.addMove(0, 2, [2, 2, 10, 10, 2, 2, 10], 1);
    design.addMove(0, 2, [2, 1, 10, 10, 2, 1, 10], 1);
    design.addMove(0, 3, [1, 3, 1, 10, 10, 1, 3, 1, 10], 1);
    design.addMove(0, 3, [3, 3, 3, 10, 10, 3, 3, 3, 10], 1);
    design.addMove(0, 3, [3, 1, 3, 10, 10, 3, 1, 3, 10], 1);
    design.addMove(0, 3, [1, 2, 1, 10, 10, 1, 2, 1, 10], 1);
    design.addMove(0, 3, [2, 2, 2, 10, 10, 2, 2, 2, 10], 1);
    design.addMove(0, 3, [2, 1, 2, 10, 10, 2, 1, 2, 10], 1);
    design.addMove(0, 3, [1, 3, 3, 10, 10, 1, 3, 3, 10], 1);
    design.addMove(0, 3, [3, 3, 1, 10, 10, 3, 3, 1, 10], 1);
    design.addMove(0, 3, [3, 1, 2, 10, 10, 3, 1, 2, 10], 1);
    design.addMove(0, 3, [1, 2, 2, 10, 10, 1, 2, 2, 10], 1);
    design.addMove(0, 3, [2, 2, 1, 10, 10, 2, 2, 1, 10], 1);
    design.addMove(0, 3, [2, 1, 3, 10, 10, 2, 1, 3, 10], 1);

    design.addPiece("Vanguard", 1);
    design.addDrop(1, 0, [], 2);
    design.addMove(1, 4, [1, 10], 1);
    design.addMove(1, 4, [3, 10], 1);
    design.addMove(1, 4, [2, 10], 1);

    design.addPiece("Vanguard-carrier", 2);
    design.addMove(2, 5, [1], 1);
    design.addMove(2, 5, [3], 1);
    design.addMove(2, 5, [2], 1);

    design.addPiece("Power-Vanguard", 3);
    design.addDrop(3, 0, [], 2);
    design.addMove(3, 6, [1, 10], 1);
    design.addMove(3, 6, [3, 10], 1);
    design.addMove(3, 6, [2, 10], 1);
    design.addMove(3, 7, [1, 3, 10], 1);
    design.addMove(3, 7, [3, 3, 10], 1);
    design.addMove(3, 7, [3, 1, 10], 1);
    design.addMove(3, 7, [1, 2, 10], 1);
    design.addMove(3, 7, [2, 2, 10], 1);
    design.addMove(3, 7, [2, 1, 10], 1);

    design.addPiece("Power-Vanguard-carrier", 4);
    design.addMove(4, 8, [1], 1);
    design.addMove(4, 8, [3], 1);
    design.addMove(4, 8, [2], 1);
    design.addMove(4, 9, [1, 3], 1);
    design.addMove(4, 9, [3, 3], 1);
    design.addMove(4, 9, [3, 1], 1);
    design.addMove(4, 9, [1, 2], 1);
    design.addMove(4, 9, [2, 2], 1);
    design.addMove(4, 9, [2, 1], 1);

    design.addPiece("Lancer", 5);
    design.addDrop(5, 0, [], 2);
    design.addMove(5, 10, [1, 10], 1);
    design.addMove(5, 10, [3, 10], 1);
    design.addMove(5, 10, [2, 10], 1);
    design.addMove(5, 11, [1, 3, 10], 1);
    design.addMove(5, 11, [3, 3, 10], 1);
    design.addMove(5, 11, [3, 1, 10], 1);
    design.addMove(5, 11, [1, 2, 10], 1);
    design.addMove(5, 11, [2, 2, 10], 1);
    design.addMove(5, 11, [2, 1, 10], 1);
    design.addMove(5, 12, [1, 3, 1, 10], 1);
    design.addMove(5, 12, [3, 3, 3, 10], 1);
    design.addMove(5, 12, [3, 1, 3, 10], 1);
    design.addMove(5, 12, [1, 2, 1, 10], 1);
    design.addMove(5, 12, [2, 2, 2, 10], 1);
    design.addMove(5, 12, [2, 1, 2, 10], 1);

    design.addPiece("Lancer-carrier", 6);
    design.addMove(6, 13, [1], 1);
    design.addMove(6, 13, [3], 1);
    design.addMove(6, 13, [2], 1);
    design.addMove(6, 14, [1, 3], 1);
    design.addMove(6, 14, [3, 3], 1);
    design.addMove(6, 14, [3, 1], 1);
    design.addMove(6, 14, [1, 2], 1);
    design.addMove(6, 14, [2, 2], 1);
    design.addMove(6, 14, [2, 1], 1);
    design.addMove(6, 15, [1, 3, 1], 1);
    design.addMove(6, 15, [3, 3, 3], 1);
    design.addMove(6, 15, [3, 1, 3], 1);
    design.addMove(6, 15, [1, 2, 1], 1);
    design.addMove(6, 15, [2, 2, 2], 1);
    design.addMove(6, 15, [2, 1, 2], 1);

    design.addPiece("Fencer", 7);
    design.addDrop(7, 0, [], 2);
    design.addMove(7, 16, [1, 10], 1);
    design.addMove(7, 16, [3, 10], 1);
    design.addMove(7, 16, [2, 10], 1);
    design.addMove(7, 17, [1, 3, 10], 1);
    design.addMove(7, 17, [3, 3, 10], 1);
    design.addMove(7, 17, [3, 1, 10], 1);
    design.addMove(7, 17, [1, 2, 10], 1);
    design.addMove(7, 17, [2, 2, 10], 1);
    design.addMove(7, 17, [2, 1, 10], 1);
    design.addMove(7, 18, [1, 3, 1, 10], 1);
    design.addMove(7, 18, [3, 3, 3, 10], 1);
    design.addMove(7, 18, [3, 1, 3, 10], 1);
    design.addMove(7, 18, [1, 2, 1, 10], 1);
    design.addMove(7, 18, [2, 2, 2, 10], 1);
    design.addMove(7, 18, [2, 1, 2, 10], 1);
    design.addMove(7, 18, [1, 3, 3, 10], 1);
    design.addMove(7, 18, [3, 3, 1, 10], 1);
    design.addMove(7, 18, [3, 1, 2, 10], 1);
    design.addMove(7, 18, [1, 2, 2, 10], 1);
    design.addMove(7, 18, [2, 2, 1, 10], 1);
    design.addMove(7, 18, [2, 1, 3, 10], 1);

    design.addPiece("Fencer-carrier", 8);
    design.addMove(8, 19, [1], 1);
    design.addMove(8, 19, [3], 1);
    design.addMove(8, 19, [2], 1);
    design.addMove(8, 20, [1, 3], 1);
    design.addMove(8, 20, [3, 3], 1);
    design.addMove(8, 20, [3, 1], 1);
    design.addMove(8, 20, [1, 2], 1);
    design.addMove(8, 20, [2, 2], 1);
    design.addMove(8, 20, [2, 1], 1);
    design.addMove(8, 21, [1, 3, 1], 1);
    design.addMove(8, 21, [3, 3, 3], 1);
    design.addMove(8, 21, [3, 1, 3], 1);
    design.addMove(8, 21, [1, 2, 1], 1);
    design.addMove(8, 21, [2, 2, 2], 1);
    design.addMove(8, 21, [2, 1, 2], 1);
    design.addMove(8, 21, [1, 3, 3], 1);
    design.addMove(8, 21, [3, 3, 1], 1);
    design.addMove(8, 21, [3, 1, 2], 1);
    design.addMove(8, 21, [1, 2, 2], 1);
    design.addMove(8, 21, [2, 2, 1], 1);
    design.addMove(8, 21, [2, 1, 3], 1);

    design.addPiece("Swift", 9);
    design.addDrop(9, 0, [], 2);
    design.addMove(9, 22, [1, 3, 10], 1);
    design.addMove(9, 22, [3, 3, 10], 1);
    design.addMove(9, 22, [3, 1, 10], 1);
    design.addMove(9, 22, [1, 2, 10], 1);
    design.addMove(9, 22, [2, 2, 10], 1);
    design.addMove(9, 22, [2, 1, 10], 1);
    design.addMove(9, 23, [1, 3, 1, 10], 1);
    design.addMove(9, 23, [3, 3, 3, 10], 1);
    design.addMove(9, 23, [3, 1, 3, 10], 1);
    design.addMove(9, 23, [1, 2, 1, 10], 1);
    design.addMove(9, 23, [2, 2, 2, 10], 1);
    design.addMove(9, 23, [2, 1, 2, 10], 1);
    design.addMove(9, 23, [1, 3, 3, 10], 1);
    design.addMove(9, 23, [3, 3, 1, 10], 1);
    design.addMove(9, 23, [3, 1, 2, 10], 1);
    design.addMove(9, 23, [1, 2, 2, 10], 1);
    design.addMove(9, 23, [2, 2, 1, 10], 1);
    design.addMove(9, 23, [2, 1, 3, 10], 1);
    design.addMove(9, 24, [1, 2, 1, 2, 10], 1);
    design.addMove(9, 24, [1, 2, 1, 3, 10], 1);
    design.addMove(9, 24, [1, 2, 2, 2, 10], 1);
    design.addMove(9, 24, [1, 2, 2, 1, 10], 1);
    design.addMove(9, 24, [1, 3, 1, 2, 10], 1);
    design.addMove(9, 24, [1, 3, 1, 3, 10], 1);
    design.addMove(9, 24, [1, 3, 3, 1, 10], 1);
    design.addMove(9, 24, [1, 3, 3, 3, 10], 1);
    design.addMove(9, 24, [2, 1, 2, 2, 10], 1);
    design.addMove(9, 24, [2, 1, 2, 1, 10], 1);
    design.addMove(9, 24, [2, 1, 3, 1, 10], 1);
    design.addMove(9, 24, [2, 1, 3, 3, 10], 1);
    design.addMove(9, 24, [2, 2, 1, 2, 10], 1);
    design.addMove(9, 24, [2, 2, 1, 3, 10], 1);
    design.addMove(9, 24, [2, 2, 2, 2, 10], 1);
    design.addMove(9, 24, [2, 2, 2, 1, 10], 1);
    design.addMove(9, 24, [3, 3, 1, 2, 10], 1);
    design.addMove(9, 24, [3, 3, 1, 3, 10], 1);
    design.addMove(9, 24, [3, 3, 3, 3, 10], 1);
    design.addMove(9, 24, [3, 3, 3, 1, 10], 1);
    design.addMove(9, 24, [3, 1, 2, 2, 10], 1);
    design.addMove(9, 24, [3, 1, 2, 1, 10], 1);
    design.addMove(9, 24, [3, 1, 3, 3, 10], 1);
    design.addMove(9, 24, [3, 1, 3, 1, 10], 1);

    design.addPiece("Swift-carrier", 10);
    design.addMove(10, 25, [1, 3], 1);
    design.addMove(10, 25, [3, 3], 1);
    design.addMove(10, 25, [3, 1], 1);
    design.addMove(10, 25, [1, 2], 1);
    design.addMove(10, 25, [2, 2], 1);
    design.addMove(10, 25, [2, 1], 1);
    design.addMove(10, 26, [1, 3, 1], 1);
    design.addMove(10, 26, [3, 3, 3], 1);
    design.addMove(10, 26, [3, 1, 3], 1);
    design.addMove(10, 26, [1, 2, 1], 1);
    design.addMove(10, 26, [2, 2, 2], 1);
    design.addMove(10, 26, [2, 1, 2], 1);
    design.addMove(10, 26, [1, 3, 3], 1);
    design.addMove(10, 26, [3, 3, 1], 1);
    design.addMove(10, 26, [3, 1, 2], 1);
    design.addMove(10, 26, [1, 2, 2], 1);
    design.addMove(10, 26, [2, 2, 1], 1);
    design.addMove(10, 26, [2, 1, 3], 1);
    design.addMove(10, 27, [1, 2, 1, 2], 1);
    design.addMove(10, 27, [1, 2, 1, 3], 1);
    design.addMove(10, 27, [1, 2, 2, 2], 1);
    design.addMove(10, 27, [1, 2, 2, 1], 1);
    design.addMove(10, 27, [1, 3, 1, 2], 1);
    design.addMove(10, 27, [1, 3, 1, 3], 1);
    design.addMove(10, 27, [1, 3, 3, 1], 1);
    design.addMove(10, 27, [1, 3, 3, 3], 1);
    design.addMove(10, 27, [2, 1, 2, 2], 1);
    design.addMove(10, 27, [2, 1, 2, 1], 1);
    design.addMove(10, 27, [2, 1, 3, 1], 1);
    design.addMove(10, 27, [2, 1, 3, 3], 1);
    design.addMove(10, 27, [2, 2, 1, 2], 1);
    design.addMove(10, 27, [2, 2, 1, 3], 1);
    design.addMove(10, 27, [2, 2, 2, 2], 1);
    design.addMove(10, 27, [2, 2, 2, 1], 1);
    design.addMove(10, 27, [3, 3, 1, 2], 1);
    design.addMove(10, 27, [3, 3, 1, 3], 1);
    design.addMove(10, 27, [3, 3, 3, 3], 1);
    design.addMove(10, 27, [3, 3, 3, 1], 1);
    design.addMove(10, 27, [3, 1, 2, 2], 1);
    design.addMove(10, 27, [3, 1, 2, 1], 1);
    design.addMove(10, 27, [3, 1, 3, 3], 1);
    design.addMove(10, 27, [3, 1, 3, 1], 1);

    design.addPiece("Flier", 11);
    design.addDrop(11, 0, [], 2);
    design.addMove(11, 28, [1, 3, 1, 10], 1);
    design.addMove(11, 28, [3, 3, 3, 10], 1);
    design.addMove(11, 28, [3, 1, 3, 10], 1);
    design.addMove(11, 28, [1, 2, 1, 10], 1);
    design.addMove(11, 28, [2, 2, 2, 10], 1);
    design.addMove(11, 28, [2, 1, 2, 10], 1);
    design.addMove(11, 29, [1, 3, 1, 3, 10], 1);
    design.addMove(11, 29, [3, 3, 3, 3, 10], 1);
    design.addMove(11, 29, [3, 1, 3, 1, 10], 1);
    design.addMove(11, 29, [1, 2, 1, 2, 10], 1);
    design.addMove(11, 29, [2, 2, 2, 2, 10], 1);
    design.addMove(11, 29, [2, 1, 2, 1, 10], 1);
    design.addMove(11, 30, [1, 3, 1, 3, 1, 10], 1);
    design.addMove(11, 30, [3, 3, 3, 3, 3, 10], 1);
    design.addMove(11, 30, [3, 1, 3, 1, 3, 10], 1);
    design.addMove(11, 30, [1, 2, 1, 2, 1, 10], 1);
    design.addMove(11, 30, [2, 2, 2, 2, 2, 10], 1);
    design.addMove(11, 30, [2, 1, 2, 1, 2, 10], 1);
    design.addMove(11, 31, [1, 3, 1, 3, 1, 3, 10], 1);
    design.addMove(11, 31, [3, 3, 3, 3, 3, 3, 10], 1);
    design.addMove(11, 31, [3, 1, 3, 1, 3, 1, 10], 1);
    design.addMove(11, 31, [1, 2, 1, 2, 1, 2, 10], 1);
    design.addMove(11, 31, [2, 2, 2, 2, 2, 2, 10], 1);
    design.addMove(11, 31, [2, 1, 2, 1, 2, 1, 10], 1);

    design.addPiece("Flier-carrier", 12);
    design.addMove(12, 32, [1, 3, 1], 1);
    design.addMove(12, 32, [3, 3, 3], 1);
    design.addMove(12, 32, [3, 1, 3], 1);
    design.addMove(12, 32, [1, 2, 1], 1);
    design.addMove(12, 32, [2, 2, 2], 1);
    design.addMove(12, 32, [2, 1, 2], 1);
    design.addMove(12, 33, [1, 3, 1, 3], 1);
    design.addMove(12, 33, [3, 3, 3, 3], 1);
    design.addMove(12, 33, [3, 1, 3, 1], 1);
    design.addMove(12, 33, [1, 2, 1, 2], 1);
    design.addMove(12, 33, [2, 2, 2, 2], 1);
    design.addMove(12, 33, [2, 1, 2, 1], 1);
    design.addMove(12, 34, [1, 3, 1, 3, 1], 1);
    design.addMove(12, 34, [3, 3, 3, 3, 3], 1);
    design.addMove(12, 34, [3, 1, 3, 1, 3], 1);
    design.addMove(12, 34, [1, 2, 1, 2, 1], 1);
    design.addMove(12, 34, [2, 2, 2, 2, 2], 1);
    design.addMove(12, 34, [2, 1, 2, 1, 2], 1);
    design.addMove(12, 35, [1, 3, 1, 3, 1, 3], 1);
    design.addMove(12, 35, [3, 3, 3, 3, 3, 3], 1);
    design.addMove(12, 35, [3, 1, 3, 1, 3, 1], 1);
    design.addMove(12, 35, [1, 2, 1, 2, 1, 2], 1);
    design.addMove(12, 35, [2, 2, 2, 2, 2, 2], 1);
    design.addMove(12, 35, [2, 1, 2, 1, 2, 1], 1);

    design.addPiece("Blockader", 13);
    design.addDrop(13, 0, [], 2);
    design.addMove(13, 36, [1], 1);
    design.addMove(13, 36, [3], 1);
    design.addMove(13, 36, [2], 1);
    design.addMove(13, 37, [1, 3], 1);
    design.addMove(13, 37, [1, 2], 1);
    design.addMove(13, 37, [3, 3], 1);
    design.addMove(13, 37, [2, 2], 1);
    design.addMove(13, 37, [3, 1], 1);
    design.addMove(13, 37, [2, 1], 1);

    design.setup("Gold", "Vanguard", p('A19'));
    design.setup("Green", "Vanguard", p('I99'));
}

Dagaz.View.configure = function(view) {
    view.defBoardTriangular(811, 702, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', 'rGoal', 'Bump');
    view.defPieceToken(0, 2, tokenPath, 'token.js', 'bGoal', 'Bump');
    view.defPieceToken(1, 1, tokenPath, 'token.js', 'rVanguard', 'Bump');
    view.defPieceToken(1, 2, tokenPath, 'token.js', 'bVanguard', 'Bump');
    view.defPieceToken(2, 1, tokenPath, 'token.js', 'rVanguardCarrier', 'Bump');
    view.defPieceToken(2, 2, tokenPath, 'token.js', 'bVanguardCarrier', 'Bump');
    view.defPieceToken(3, 1, tokenPath, 'token.js', 'rVanguardPower', 'Bump');
    view.defPieceToken(3, 2, tokenPath, 'token.js', 'bVanguardPower', 'Bump');
    view.defPieceToken(4, 1, tokenPath, 'token.js', 'rVanguardCarrierPower', 'Bump');
    view.defPieceToken(4, 2, tokenPath, 'token.js', 'bVanguardCarrierPower', 'Bump');
    view.defPieceToken(5, 1, tokenPath, 'token.js', 'rLancer', 'Bump');
    view.defPieceToken(5, 2, tokenPath, 'token.js', 'bLancer', 'Bump');
    view.defPieceToken(6, 1, tokenPath, 'token.js', 'rLancerCarrier', 'Bump');
    view.defPieceToken(6, 2, tokenPath, 'token.js', 'bLancerCarrier', 'Bump');
    view.defPieceToken(7, 1, tokenPath, 'token.js', 'rFencer', 'Bump');
    view.defPieceToken(7, 2, tokenPath, 'token.js', 'bFencer', 'Bump');
    view.defPieceToken(8, 1, tokenPath, 'token.js', 'rFencerCarrier', 'Bump');
    view.defPieceToken(8, 2, tokenPath, 'token.js', 'bFencerCarrier', 'Bump');
    view.defPieceToken(9, 1, tokenPath, 'token.js', 'rSwift', 'Bump');
    view.defPieceToken(9, 2, tokenPath, 'token.js', 'bSwift', 'Bump');
    view.defPieceToken(10, 1, tokenPath, 'token.js', 'rSwiftCarrier', 'Bump');
    view.defPieceToken(10, 2, tokenPath, 'token.js', 'bSwiftCarrier', 'Bump');
    view.defPieceToken(11, 1, tokenPath, 'token.js', 'rFlier', 'Bump');
    view.defPieceToken(11, 2, tokenPath, 'token.js', 'bFlier', 'Bump');
    view.defPieceToken(12, 1, tokenPath, 'token.js', 'rFlierCarrier', 'Bump');
    view.defPieceToken(12, 2, tokenPath, 'token.js', 'bFlierCarrier', 'Bump');
    view.defPieceToken(13, 1, tokenPath, 'token.js', 'rBlockader', 'Bump');
    view.defPieceToken(13, 2, tokenPath, 'token.js', 'bBlockader', 'Bump');

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "1989 Leonard B. Loyd, Jr", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("A19", 0, -303, 44, 33, 0);
    view.defPosition("A19V", 10, -321, 24, 17, 0);
    view.defPosition("B18", -45, -225, 44, 33, 0);
    view.defPosition("B18V", -35, -243, 24, 17, 0);
    view.defPosition("B19", 0, -267, 44, 33, 0);
    view.defPosition("B19V", 10, -233, 24, 17, 0);
    view.defPosition("B29", 45, -225, 44, 33, 0);
    view.defPosition("B29V", 55, -243, 24, 17, 0);
    view.defPosition("C17", -90, -147, 44, 33, 0);
    view.defPosition("C17V", -80, -165, 24, 17, 0);
    view.defPosition("C18", -45, -189, 44, 33, 0);
    view.defPosition("C18V", -35, -155, 24, 17, 0);
    view.defPosition("C28", 0, -147, 44, 33, 0);
    view.defPosition("C28V", 10, -165, 24, 17, 0);
    view.defPosition("C29", 45, -189, 44, 33, 0);
    view.defPosition("C29V", 55, -155, 24, 17, 0);
    view.defPosition("C39", 90, -147, 44, 33, 0);
    view.defPosition("C39V", 100, -165, 24, 17, 0);
    view.defPosition("D16", -135, -69, 44, 33, 0);
    view.defPosition("D16V", -125, -321, 24, 17, 0);
    view.defPosition("D17", -90, -111, 44, 33, 0);
    view.defPosition("D17V", -80, -77, 24, 17, 0);
    view.defPosition("D27", -45, -69, 44, 33, 0);
    view.defPosition("D27V", -35, -87, 24, 17, 0);
    view.defPosition("D28", 0, -111, 44, 33, 0);
    view.defPosition("D28V", 10, -77, 24, 17, 0);
    view.defPosition("D38", 45, -69, 44, 33, 0);
    view.defPosition("D38V", 55, -87, 24, 17, 0);
    view.defPosition("D39", 90, -111, 44, 33, 0);
    view.defPosition("D39V", 100, -77, 24, 17, 0);
    view.defPosition("D49", 135, -69, 44, 33, 0);
    view.defPosition("D49V", 145, -87, 24, 17, 0);
    view.defPosition("E15", -180, 9, 44, 33, 0);
    view.defPosition("E15V", -170, -9, 24, 17, 0);
    view.defPosition("E16", -135, -33, 44, 33, 0);
    view.defPosition("E16V", -125, 1, 24, 17, 0);
    view.defPosition("E26", -90, 9, 44, 33, 0);
    view.defPosition("E26V", -80, -9, 24, 17, 0);
    view.defPosition("E27", -45, -33, 44, 33, 0);
    view.defPosition("E27V", -35, 1, 24, 17, 0);
    view.defPosition("E37", 0, 9, 44, 33, 0);
    view.defPosition("E37V", 10, -9, 24, 17, 0);
    view.defPosition("E38", 45, -33, 44, 33, 0);
    view.defPosition("E38V", 55, 1, 24, 17, 0);
    view.defPosition("E48", 90, 9, 44, 33, 0);
    view.defPosition("E48V", 100, -9, 24, 17, 0);
    view.defPosition("E49", 135, -33, 44, 33, 0);
    view.defPosition("E49V", 145, 1, 24, 17, 0);
    view.defPosition("E59", 180, 9, 44, 33, 0);
    view.defPosition("E59V", 190, -9, 24, 17, 0);
    view.defPosition("F14", -225, 87, 44, 33, 0);
    view.defPosition("F14V", -215, 69, 24, 17, 0);
    view.defPosition("F15", -180, 45, 44, 33, 0);
    view.defPosition("F15V", -170, 79, 24, 17, 0);
    view.defPosition("F25", -135, 87, 44, 33, 0);
    view.defPosition("F25V", -125, 69, 24, 17, 0);
    view.defPosition("F26", -90, 45, 44, 33, 0);
    view.defPosition("F26V", -80, 79, 24, 17, 0);
    view.defPosition("F36", -45, 87, 44, 33, 0);
    view.defPosition("F36V", -35, 69, 24, 17, 0);
    view.defPosition("F37", 0, 45, 44, 33, 0);
    view.defPosition("F37V", 10, 79, 24, 17, 0);
    view.defPosition("F47", 45, 87, 44, 33, 0);
    view.defPosition("F47V", 55, 69, 24, 17, 0);
    view.defPosition("F48", 90, 45, 44, 33, 0);
    view.defPosition("F48V", 100, 79, 24, 17, 0);
    view.defPosition("F58", 135, 87, 44, 33, 0);
    view.defPosition("F58V", 145, 69, 24, 17, 0);
    view.defPosition("F59", 180, 45, 44, 33, 0);
    view.defPosition("F59V", 190, 79, 24, 17, 0);
    view.defPosition("F69", 225, 87, 44, 33, 0);
    view.defPosition("F69V", 235, 69, 24, 17, 0);
    view.defPosition("G13", -270, 165, 44, 33, 0);
    view.defPosition("G13V", -260, 147, 24, 17, 0);
    view.defPosition("G14", -225, 123, 44, 33, 0);
    view.defPosition("G14V", -215, 157, 24, 17, 0);
    view.defPosition("G24", -180, 165, 44, 33, 0);
    view.defPosition("G24V", -170, 147, 24, 17, 0);
    view.defPosition("G25", -135, 123, 44, 33, 0);
    view.defPosition("G25V", -125, 157, 24, 17, 0);
    view.defPosition("G35", -90, 165, 44, 33, 0);
    view.defPosition("G35V", -80, 147, 24, 17, 0);
    view.defPosition("G36", -45, 123, 44, 33, 0);
    view.defPosition("G36V", -35, 157, 24, 17, 0);
    view.defPosition("G46", 0, 165, 44, 33, 0);
    view.defPosition("G46V", 10, 147, 24, 17, 0);
    view.defPosition("G47", 45, 123, 44, 33, 0);
    view.defPosition("G47V", 55, 157, 24, 17, 0);
    view.defPosition("G57", 90, 165, 44, 33, 0);
    view.defPosition("G57V", 100, 147, 24, 17, 0);
    view.defPosition("G58", 135, 123, 44, 33, 0);
    view.defPosition("G58V", 145, 157, 24, 17, 0);
    view.defPosition("G68", 180, 165, 44, 33, 0);
    view.defPosition("G68V", 190, 147, 24, 17, 0);
    view.defPosition("G69", 225, 123, 44, 33, 0);
    view.defPosition("G69V", 235, 157, 24, 17, 0);
    view.defPosition("G79", 270, 165, 44, 33, 0);
    view.defPosition("G79V", 280, 147, 24, 17, 0);
    view.defPosition("H12", -315, 243, 44, 33, 0);
    view.defPosition("H12V", -305, 225, 24, 17, 0);
    view.defPosition("H13", -270, 201, 44, 33, 0);
    view.defPosition("H13V", -260, 235, 24, 17, 0);
    view.defPosition("H23", -225, 243, 44, 33, 0);
    view.defPosition("H23V", -215, 225, 24, 17, 0);
    view.defPosition("H24", -180, 201, 44, 33, 0);
    view.defPosition("H24V", -170, 235, 24, 17, 0);
    view.defPosition("H34", -135, 243, 44, 33, 0);
    view.defPosition("H34V", -125, 225, 24, 17, 0);
    view.defPosition("H35", -90, 201, 44, 33, 0);
    view.defPosition("H35V", -80, 235, 24, 17, 0);
    view.defPosition("H45", -45, 243, 44, 33, 0);
    view.defPosition("H45V", -35, 225, 24, 17, 0);
    view.defPosition("H46", 0, 201, 44, 33, 0);
    view.defPosition("H46V", 10, 235, 24, 17, 0);
    view.defPosition("H56", 45, 243, 44, 33, 0);
    view.defPosition("H56V", 55, 225, 24, 17, 0);
    view.defPosition("H57", 90, 201, 44, 33, 0);
    view.defPosition("H57V", 100, 235, 24, 17, 0);
    view.defPosition("H67", 135, 243, 44, 33, 0);
    view.defPosition("H67V", 145, 225, 24, 17, 0);
    view.defPosition("H68", 180, 201, 44, 33, 0);
    view.defPosition("H68V", 190, 235, 24, 17, 0);
    view.defPosition("H78", 225, 243, 44, 33, 0);
    view.defPosition("H78V", 235, 225, 24, 17, 0);
    view.defPosition("H79", 270, 201, 44, 33, 0);
    view.defPosition("H79V", 280, 235, 24, 17, 0);
    view.defPosition("H89", 315, 243, 44, 33, 0);
    view.defPosition("H89V", 325, 225, 24, 17, 0);
    view.defPosition("I11", -360, 321, 44, 33, 0);
    view.defPosition("I11V", -350, 303, 24, 17, 0);
    view.defPosition("I12", -315, 279, 44, 33, 0);
    view.defPosition("I12V", -305, 313, 24, 17, 0);
    view.defPosition("I22", -270, 321, 44, 33, 0);
    view.defPosition("I22V", -260, 303, 24, 17, 0);
    view.defPosition("I23", -225, 279, 44, 33, 0);
    view.defPosition("I23V", -215, 313, 24, 17, 0);
    view.defPosition("I33", -180, 321, 44, 33, 0);
    view.defPosition("I33V", -170, 303, 24, 17, 0);
    view.defPosition("I34", -135, 279, 44, 33, 0);
    view.defPosition("I34V", -125, 313, 24, 17, 0);
    view.defPosition("I44", -90, 321, 44, 33, 0);
    view.defPosition("I44V", -80, 303, 24, 17, 0);
    view.defPosition("I45", -45, 279, 44, 33, 0);
    view.defPosition("I45V", -35, 313, 24, 17, 0);
    view.defPosition("I55", 0, 321, 44, 33, 0);
    view.defPosition("I55V", 10, 303, 24, 17, 0);
    view.defPosition("I56", 45, 279, 44, 33, 0);
    view.defPosition("I56V", 55, 313, 24, 17, 0);
    view.defPosition("I66", 90, 321, 44, 33, 0);
    view.defPosition("I66V", 100, 303, 24, 17, 0);
    view.defPosition("I67", 135, 279, 44, 33, 0);
    view.defPosition("I67V", 145, 313, 24, 17, 0);
    view.defPosition("I77", 180, 321, 44, 33, 0);
    view.defPosition("I77V", 190, 303, 24, 17, 0);
    view.defPosition("I78", 225, 279, 44, 33, 0);
    view.defPosition("I78V", 235, 313, 24, 17, 0);
    view.defPosition("I88", 270, 321, 44, 33, 0);
    view.defPosition("I88V", 280, 303, 24, 17, 0);
    view.defPosition("I89", 315, 279, 44, 33, 0);
    view.defPosition("I89V", 325, 313, 24, 17, 0);
    view.defPosition("I99", 360, 321, 44, 33, 0);
    view.defPosition("I99V", 370, 303, 24, 17, 0);
}
