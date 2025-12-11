Dagaz.View.TARGET_FLAT = true;

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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7
    design.addDirection("u");  // 8
    design.addDirection("d");  // 9

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1, 9, 8]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1, 8, 9]);

    design.addPosition("a24", [13, 12, 0, 1, 0, 0, 0, 0, 0, 96]);
    design.addPosition("b24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("c24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("d24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("e24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("f24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("g24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("h24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("i24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("j24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("k24", [13, 12, 11, 1, -1, 0, 0, 0, 0, 96]);
    design.addPosition("l24", [0, 12, 11, 0, -1, 0, 0, 0, 0, 96]);
    design.addPosition("a23", [13, 12, 0, 1, 0, -11, 0, -12, 0, 96]);
    design.addPosition("b23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("c23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("d23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("e23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("f23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("g23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("h23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("i23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("j23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("k23", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("l23", [0, 12, 11, 0, -1, 0, -13, -12, 0, 96]);
    design.addPosition("a22", [13, 12, 0, 1, 0, -11, 0, -12, 0, 96]);
    design.addPosition("b22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("c22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("d22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("e22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("f22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("g22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("h22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("i22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("j22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("k22", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("l22", [0, 12, 11, 0, -1, 0, -13, -12, 0, 96]);
    design.addPosition("a21", [13, 12, 0, 1, 0, -11, 0, -12, 0, 96]);
    design.addPosition("b21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("c21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("d21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("e21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("f21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("g21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("h21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("i21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("j21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("k21", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("l21", [0, 12, 11, 0, -1, 0, -13, -12, 0, 96]);
    design.addPosition("a20", [13, 12, 0, 1, 0, -11, 0, -12, 0, 96]);
    design.addPosition("b20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("c20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("d20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("e20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("f20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("g20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("h20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("i20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("j20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("k20", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("l20", [0, 12, 11, 0, -1, 0, -13, -12, 0, 96]);
    design.addPosition("a19", [13, 12, 0, 1, 0, -11, 0, -12, 0, 96]);
    design.addPosition("b19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("c19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("d19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("e19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("f19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("g19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("h19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("i19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("j19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("k19", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("l19", [0, 12, 11, 0, -1, 0, -13, -12, 0, 96]);
    design.addPosition("a18", [13, 12, 0, 1, 0, -11, 0, -12, 0, 96]);
    design.addPosition("b18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("c18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("d18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("e18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("f18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("g18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("h18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("i18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("j18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("k18", [13, 12, 11, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("l18", [0, 12, 11, 0, -1, 0, -13, -12, 0, 96]);
    design.addPosition("a17", [0, 0, 0, 1, 0, -11, 0, -12, 0, 96]);
    design.addPosition("b17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("c17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("d17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("e17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("f17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("g17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("h17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("i17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("j17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("k17", [0, 0, 0, 1, -1, -11, -13, -12, 0, 96]);
    design.addPosition("l17", [0, 0, 0, 0, -1, 0, -13, -12, 0, 96]);
    design.addPosition("a16", [13, 12, 0, 1, 0, 0, 0, 0, -96, 96]);
    design.addPosition("b16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("c16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("d16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("e16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("f16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("g16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("h16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("i16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("j16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("k16", [13, 12, 11, 1, -1, 0, 0, 0, -96, 96]);
    design.addPosition("l16", [0, 12, 11, 0, -1, 0, 0, 0, -96, 96]);
    design.addPosition("a15", [13, 12, 0, 1, 0, -11, 0, -12, -96, 96]);
    design.addPosition("b15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("c15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("d15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("e15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("f15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("g15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("h15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("i15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("j15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("k15", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("l15", [0, 12, 11, 0, -1, 0, -13, -12, -96, 96]);
    design.addPosition("a14", [13, 12, 0, 1, 0, -11, 0, -12, -96, 96]);
    design.addPosition("b14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("c14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("d14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("e14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("f14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("g14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("h14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("i14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("j14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("k14", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("l14", [0, 12, 11, 0, -1, 0, -13, -12, -96, 96]);
    design.addPosition("a13", [13, 12, 0, 1, 0, -11, 0, -12, -96, 96]);
    design.addPosition("b13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("c13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("d13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("e13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("f13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("g13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("h13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("i13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("j13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("k13", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("l13", [0, 12, 11, 0, -1, 0, -13, -12, -96, 96]);
    design.addPosition("a12", [13, 12, 0, 1, 0, -11, 0, -12, -96, 96]);
    design.addPosition("b12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("c12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("d12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("e12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("f12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("g12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("h12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("i12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("j12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("k12", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, -13, -12, -96, 96]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12, -96, 96]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12, -96, 96]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12, -96, 96]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12, -96, 96]);
    design.addPosition("a9", [0, 0, 0, 1, 0, -11, 0, -12, -96, 96]);
    design.addPosition("b9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("c9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("d9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("e9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("f9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("g9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("h9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("i9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("j9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("k9", [0, 0, 0, 1, -1, -11, -13, -12, -96, 96]);
    design.addPosition("l9", [0, 0, 0, 0, -1, 0, -13, -12, -96, 96]);
    design.addPosition("a8", [13, 12, 0, 1, 0, 0, 0, 0, -96, 0]);
    design.addPosition("b8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("c8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("d8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("e8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("f8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("g8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("h8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("i8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("j8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("k8", [13, 12, 11, 1, -1, 0, 0, 0, -96, 0]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, 0, 0, -96, 0]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12, -96, 0]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12, -96, 0]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12, -96, 0]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12, -96, 0]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12, -96, 0]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12, -96, 0]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12, -96, 0]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("k4", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("l4", [0, 12, 11, 0, -1, 0, -13, -12, -96, 0]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12, -96, 0]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("j3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("k3", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("l3", [0, 12, 11, 0, -1, 0, -13, -12, -96, 0]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12, -96, 0]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("f2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("g2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("h2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("i2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("j2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("k2", [13, 12, 11, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("l2", [0, 12, 11, 0, -1, 0, -13, -12, -96, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12, -96, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -11, -13, -12, -96, 0]);
    design.addPosition("l1", [0, 0, 0, 0, -1, 0, -13, -12, -96, 0]);

    design.addZone("l0-level", 1, [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287]);
    design.addZone("l0-level", 2, [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287]);
    design.addZone("l1-level", 1, [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191]);
    design.addZone("l1-level", 2, [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191]);
    design.addZone("l2-level", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]);
    design.addZone("l2-level", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]);
    design.addZone("last-rank", 1, [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107]);
    design.addZone("last-rank", 2, [180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	1);	// l1-level
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	3);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	2);	// Hero
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	3);	// last-rank
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	2);	// Hero
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	3);	// HeroDSE
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	4);	// HeroDSW
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	5);	// HeroDNE
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	6);	// HeroDNW
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	7);	// HeroUSE
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PROMOTE,	8);	// HeroUSW
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PROMOTE,	9);	// HeroUNE
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PROMOTE,	10);	// HeroUNW
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PROMOTE,	2);	// Hero
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	18);
    design.addCommand(14, ZRF.FORK,	3);
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	5);
    design.addCommand(14, ZRF.LITERAL,	21);	// Basilisk
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	2);	// $3
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.PARAM,	3);	// $4
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.JUMP,	-19);
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PROMOTE,	12);	// Unicorn
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.IN_ZONE,	1);	// l1-level
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	18);
    design.addCommand(16, ZRF.FORK,	3);
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end
    design.addCommand(16, ZRF.PARAM,	1);	// $2
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	5);
    design.addCommand(16, ZRF.LITERAL,	21);	// Basilisk
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	2);	// $3
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.PARAM,	3);	// $4
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.JUMP,	-19);
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.IN_ZONE,	1);	// l1-level
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(18, ZRF.FUNCTION,	0);	// not
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FORK,	3);
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	1);	// $2
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(18, ZRF.FUNCTION,	0);	// not
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.IN_ZONE,	1);	// l1-level
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.PARAM,	1);	// $2
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.PARAM,	1);	// $2
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.PARAM,	2);	// $3
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.IN_ZONE,	2);	// l2-level
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.IN_ZONE,	2);	// l2-level
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.IN_ZONE,	2);	// l2-level
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.PARAM,	1);	// $2
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.PARAM,	2);	// $3
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
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
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	0);	// not
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.PROMOTE,	18);	// Griffon
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.IN_ZONE,	1);	// l1-level
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.IN_ZONE,	0);	// l0-level
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.IN_ZONE,	0);	// l0-level
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	0);	// not
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FORK,	3);
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end
    design.addCommand(29, ZRF.PARAM,	1);	// $2
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	0);	// not
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.IN_ZONE,	0);	// l0-level
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.PARAM,	1);	// $2
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.PARAM,	1);	// $2
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PROMOTE,	22);	// Elemental
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end


    design.addPiece("King", 0, 600000);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [8], 0);
    design.addMove(0, 1, [9], 0);

    design.addPiece("Warrior", 1, 800);
    design.addMove(1, 2, [6], 0);
    design.addMove(1, 2, [5], 0);
    design.addMove(1, 3, [7], 0);

    design.addPiece("Hero", 2, 2000);
    design.addMove(2, 4, [6, 6], 0);
    design.addMove(2, 4, [5, 5], 0);
    design.addMove(2, 4, [2, 2], 0);
    design.addMove(2, 4, [0, 0], 0);
    design.addMove(2, 5, [8, 6], 0);
    design.addMove(2, 6, [8, 5], 0);
    design.addMove(2, 7, [8, 2], 0);
    design.addMove(2, 8, [8, 0], 0);
    design.addMove(2, 9, [9, 6], 0);
    design.addMove(2, 10, [9, 5], 0);
    design.addMove(2, 11, [9, 2], 0);
    design.addMove(2, 12, [9, 0], 0);

    design.addPiece("HeroDSE", 3, 1000);
    design.addMove(3, 13, [9, 0], 0);

    design.addPiece("HeroDSW", 4, 1000);
    design.addMove(4, 13, [9, 2], 0);

    design.addPiece("HeroDNE", 5, 1000);
    design.addMove(5, 13, [9, 5], 0);

    design.addPiece("HeroDNW", 6, 1000);
    design.addMove(6, 13, [9, 6], 0);

    design.addPiece("HeroUSE", 7, 1000);
    design.addMove(7, 13, [8, 0], 0);

    design.addPiece("HeroUSW", 8, 1000);
    design.addMove(8, 13, [8, 2], 0);

    design.addPiece("HeroUNE", 9, 1000);
    design.addMove(9, 13, [8, 5], 0);

    design.addPiece("HeroUNW", 10, 1000);
    design.addMove(10, 13, [8, 6], 0);

    design.addPiece("Oliphant", 11, 5000);
    design.addMove(11, 14, [7, 9, 8, 7], 0);
    design.addMove(11, 14, [3, 9, 8, 3], 0);
    design.addMove(11, 14, [4, 9, 8, 4], 0);
    design.addMove(11, 14, [1, 9, 8, 1], 0);

    design.addPiece("Unicorn", 12, 3350);
    design.addMove(12, 15, [7, 6], 0);
    design.addMove(12, 15, [7, 5], 0);
    design.addMove(12, 15, [1, 2], 0);
    design.addMove(12, 15, [1, 0], 0);
    design.addMove(12, 15, [4, 6], 0);
    design.addMove(12, 15, [4, 2], 0);
    design.addMove(12, 15, [3, 5], 0);
    design.addMove(12, 15, [3, 0], 0);

    design.addPiece("Thief", 13, 3450);
    design.addMove(13, 14, [6, 9, 8, 6], 0);
    design.addMove(13, 14, [5, 9, 8, 5], 0);
    design.addMove(13, 14, [2, 9, 8, 2], 0);
    design.addMove(13, 14, [0, 9, 8, 0], 0);

    design.addPiece("Cleric", 14, 1000);
    design.addMove(14, 1, [7], 0);
    design.addMove(14, 1, [1], 0);
    design.addMove(14, 1, [4], 0);
    design.addMove(14, 1, [3], 0);
    design.addMove(14, 1, [6], 0);
    design.addMove(14, 1, [2], 0);
    design.addMove(14, 1, [5], 0);
    design.addMove(14, 1, [0], 0);
    design.addMove(14, 1, [8], 0);
    design.addMove(14, 1, [9], 0);

    design.addPiece("Mage", 15, 9750);
    design.addMove(15, 16, [6, 9, 8, 6], 0);
    design.addMove(15, 16, [5, 9, 8, 5], 0);
    design.addMove(15, 16, [2, 9, 8, 2], 0);
    design.addMove(15, 16, [0, 9, 8, 0], 0);
    design.addMove(15, 16, [7, 9, 8, 7], 0);
    design.addMove(15, 16, [3, 9, 8, 3], 0);
    design.addMove(15, 16, [4, 9, 8, 4], 0);
    design.addMove(15, 16, [1, 9, 8, 1], 0);
    design.addMove(15, 17, [7], 0);
    design.addMove(15, 17, [3], 0);
    design.addMove(15, 17, [4], 0);
    design.addMove(15, 17, [1], 0);
    design.addMove(15, 18, [8, 8], 0);
    design.addMove(15, 18, [9, 9], 0);

    design.addPiece("Paladin", 16, 5500);
    design.addMove(16, 1, [7], 0);
    design.addMove(16, 1, [1], 0);
    design.addMove(16, 1, [4], 0);
    design.addMove(16, 1, [3], 0);
    design.addMove(16, 1, [6], 0);
    design.addMove(16, 1, [2], 0);
    design.addMove(16, 1, [5], 0);
    design.addMove(16, 1, [0], 0);
    design.addMove(16, 19, [7, 6], 0);
    design.addMove(16, 19, [7, 5], 0);
    design.addMove(16, 19, [1, 2], 0);
    design.addMove(16, 19, [1, 0], 0);
    design.addMove(16, 19, [4, 6], 0);
    design.addMove(16, 19, [4, 2], 0);
    design.addMove(16, 19, [3, 5], 0);
    design.addMove(16, 19, [3, 0], 0);
    design.addMove(16, 20, [8, 7, 7], 0);
    design.addMove(16, 20, [8, 1, 1], 0);
    design.addMove(16, 20, [8, 4, 4], 0);
    design.addMove(16, 20, [8, 3, 3], 0);
    design.addMove(16, 20, [9, 7, 7], 0);
    design.addMove(16, 20, [9, 1, 1], 0);
    design.addMove(16, 20, [9, 4, 4], 0);
    design.addMove(16, 20, [9, 3, 3], 0);
    design.addMove(16, 20, [8, 8, 7], 0);
    design.addMove(16, 20, [8, 8, 1], 0);
    design.addMove(16, 20, [8, 8, 4], 0);
    design.addMove(16, 20, [8, 8, 3], 0);
    design.addMove(16, 20, [9, 9, 7], 0);
    design.addMove(16, 20, [9, 9, 1], 0);
    design.addMove(16, 20, [9, 9, 4], 0);
    design.addMove(16, 20, [9, 9, 3], 0);

    design.addPiece("Sylph", 17, 600);
    design.addMove(17, 21, [6], 0);
    design.addMove(17, 21, [5], 0);
    design.addMove(17, 22, [7], 0);
    design.addMove(17, 22, [9], 0);
    design.addMove(17, 1, [8], 0);

    design.addPiece("Griffon", 18, 3500);
    design.addMove(18, 23, [7, 6, 6], 0);
    design.addMove(18, 23, [7, 5, 5], 0);
    design.addMove(18, 23, [1, 2, 2], 0);
    design.addMove(18, 23, [1, 0, 0], 0);
    design.addMove(18, 23, [4, 6, 6], 0);
    design.addMove(18, 23, [4, 2, 2], 0);
    design.addMove(18, 23, [3, 5, 5], 0);
    design.addMove(18, 23, [3, 0, 0], 0);
    design.addMove(18, 0, [6], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [5], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 24, [8, 6], 0);
    design.addMove(18, 24, [8, 5], 0);
    design.addMove(18, 24, [8, 2], 0);
    design.addMove(18, 24, [8, 0], 0);
    design.addMove(18, 24, [9, 6], 0);
    design.addMove(18, 24, [9, 5], 0);
    design.addMove(18, 24, [9, 2], 0);
    design.addMove(18, 24, [9, 0], 0);

    design.addPiece("Dragon", 19, 10000);
    design.addMove(19, 1, [7], 0);
    design.addMove(19, 1, [1], 0);
    design.addMove(19, 1, [4], 0);
    design.addMove(19, 1, [3], 0);
    design.addMove(19, 14, [6, 9, 8, 6], 0);
    design.addMove(19, 14, [5, 9, 8, 5], 0);
    design.addMove(19, 14, [2, 9, 8, 2], 0);
    design.addMove(19, 14, [0, 9, 8, 0], 0);

    design.addPiece("Dwarf", 20, 700);
    design.addMove(20, 25, [7], 0);
    design.addMove(20, 25, [3], 0);
    design.addMove(20, 25, [4], 0);
    design.addMove(20, 26, [6], 0);
    design.addMove(20, 26, [5], 0);
    design.addMove(20, 27, [8], 0);
    design.addMove(20, 25, [9], 0);

    design.addPiece("Basilisk", 21, 2000);
    design.addMove(21, 1, [7], 0);
    design.addMove(21, 1, [6], 0);
    design.addMove(21, 1, [5], 0);
    design.addMove(21, 25, [1], 0);

    design.addPiece("Elemental", 22, 1500);
    design.addMove(22, 28, [6], 0);
    design.addMove(22, 28, [5], 0);
    design.addMove(22, 28, [2], 0);
    design.addMove(22, 28, [0], 0);
    design.addMove(22, 29, [7, 7], 0);
    design.addMove(22, 29, [3, 3], 0);
    design.addMove(22, 29, [4, 4], 0);
    design.addMove(22, 29, [1, 1], 0);
    design.addMove(22, 30, [7, 8], 0);
    design.addMove(22, 30, [3, 8], 0);
    design.addMove(22, 30, [4, 8], 0);
    design.addMove(22, 30, [1, 8], 0);
    design.addMove(22, 31, [9, 7], 0);
    design.addMove(22, 31, [9, 3], 0);
    design.addMove(22, 31, [9, 4], 0);
    design.addMove(22, 31, [9, 1], 0);

    design.setup("White", "Sylph", 72);
    design.setup("White", "Sylph", 74);
    design.setup("White", "Sylph", 76);
    design.setup("White", "Sylph", 78);
    design.setup("White", "Sylph", 80);
    design.setup("White", "Sylph", 82);
    design.setup("White", "Griffon", 86);
    design.setup("White", "Griffon", 94);
    design.setup("White", "Dragon", 90);
    design.setup("White", "Dwarf", 265);
    design.setup("White", "Dwarf", 267);
    design.setup("White", "Dwarf", 269);
    design.setup("White", "Dwarf", 271);
    design.setup("White", "Dwarf", 273);
    design.setup("White", "Dwarf", 275);
    design.setup("White", "Basilisk", 278);
    design.setup("White", "Basilisk", 286);
    design.setup("White", "Elemental", 282);
    design.setup("White", "Warrior", 168);
    design.setup("White", "Warrior", 169);
    design.setup("White", "Warrior", 170);
    design.setup("White", "Warrior", 171);
    design.setup("White", "Warrior", 172);
    design.setup("White", "Warrior", 173);
    design.setup("White", "Warrior", 174);
    design.setup("White", "Warrior", 175);
    design.setup("White", "Warrior", 176);
    design.setup("White", "Warrior", 177);
    design.setup("White", "Warrior", 178);
    design.setup("White", "Warrior", 179);
    design.setup("White", "Oliphant", 180);
    design.setup("White", "Oliphant", 191);
    design.setup("White", "Unicorn", 181);
    design.setup("White", "Unicorn", 190);
    design.setup("White", "Hero", 182);
    design.setup("White", "Hero", 189);
    design.setup("White", "Thief", 183);
    design.setup("White", "Thief", 188);
    design.setup("White", "Cleric", 184);
    design.setup("White", "Mage", 185);
    design.setup("White", "Paladin", 187);
    design.setup("White", "King", 186);
    design.setup("Black", "Sylph", 12);
    design.setup("Black", "Sylph", 14);
    design.setup("Black", "Sylph", 16);
    design.setup("Black", "Sylph", 18);
    design.setup("Black", "Sylph", 20);
    design.setup("Black", "Sylph", 22);
    design.setup("Black", "Griffon", 2);
    design.setup("Black", "Griffon", 10);
    design.setup("Black", "Dragon", 6);
    design.setup("Black", "Dwarf", 205);
    design.setup("Black", "Dwarf", 207);
    design.setup("Black", "Dwarf", 209);
    design.setup("Black", "Dwarf", 211);
    design.setup("Black", "Dwarf", 213);
    design.setup("Black", "Dwarf", 215);
    design.setup("Black", "Basilisk", 194);
    design.setup("Black", "Basilisk", 202);
    design.setup("Black", "Elemental", 198);
    design.setup("Black", "Warrior", 108);
    design.setup("Black", "Warrior", 109);
    design.setup("Black", "Warrior", 110);
    design.setup("Black", "Warrior", 111);
    design.setup("Black", "Warrior", 112);
    design.setup("Black", "Warrior", 113);
    design.setup("Black", "Warrior", 114);
    design.setup("Black", "Warrior", 115);
    design.setup("Black", "Warrior", 116);
    design.setup("Black", "Warrior", 117);
    design.setup("Black", "Warrior", 118);
    design.setup("Black", "Warrior", 119);
    design.setup("Black", "Oliphant", 96);
    design.setup("Black", "Oliphant", 107);
    design.setup("Black", "Unicorn", 97);
    design.setup("Black", "Unicorn", 106);
    design.setup("Black", "Hero", 98);
    design.setup("Black", "Hero", 105);
    design.setup("Black", "Thief", 99);
    design.setup("Black", "Thief", 104);
    design.setup("Black", "Cleric", 100);
    design.setup("Black", "Mage", 101);
    design.setup("Black", "Paladin", 103);
    design.setup("Black", "King", 102);
}

Dagaz.View.configure = function(view) {
    const opacity = 0.7;

    view.defBoard3D(604, 404, 1, 130 -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board0", opacity);
    view.defBoard3D(604, 404, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board1", opacity);
    view.defBoard3D(604, 404, 1, -130 -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board2", opacity);

    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'king', white);
    view.defPieceModel(0, 2, modelPath, 'king', black);
    view.defPieceModel(1, 1, modelPath, 'corporal', white);
    view.defPieceModel(1, 2, modelPath, 'corporal', black);
    view.defPieceModel(2, 1, modelPath, 'admiral', white);
    view.defPieceModel(2, 2, modelPath, 'admiral', black);
    view.defPieceModel(3, 1, modelPath, 'admiral', white);
    view.defPieceModel(3, 2, modelPath, 'admiral', black);
    view.defPieceModel(4, 1, modelPath, 'admiral', white);
    view.defPieceModel(4, 2, modelPath, 'admiral', black);
    view.defPieceModel(5, 1, modelPath, 'admiral', white);
    view.defPieceModel(5, 2, modelPath, 'admiral', black);
    view.defPieceModel(6, 1, modelPath, 'admiral', white);
    view.defPieceModel(6, 2, modelPath, 'admiral', black);
    view.defPieceModel(7, 1, modelPath, 'admiral', white);
    view.defPieceModel(7, 2, modelPath, 'admiral', black);
    view.defPieceModel(8, 1, modelPath, 'admiral', white);
    view.defPieceModel(8, 2, modelPath, 'admiral', black);
    view.defPieceModel(9, 1, modelPath, 'admiral', white);
    view.defPieceModel(9, 2, modelPath, 'admiral', black);
    view.defPieceModel(10, 1, modelPath, 'admiral', white);
    view.defPieceModel(10, 2, modelPath, 'admiral', black);
    view.defPieceModel(11, 1, modelPath, 'mammoth', white);
    view.defPieceModel(11, 2, modelPath, 'mammoth', black);
    view.defPieceModel(12, 1, modelPath, 'unicorn', white);
    view.defPieceModel(12, 2, modelPath, 'unicorn', black);
    view.defPieceModel(13, 1, modelPath, 'lighthouse', white);
    view.defPieceModel(13, 2, modelPath, 'lighthouse', black);
    view.defPieceModel(14, 1, modelPath, 'cardinal', white);
    view.defPieceModel(14, 2, modelPath, 'cardinal', black);
    view.defPieceModel(15, 1, modelPath, 'marshall', white);
    view.defPieceModel(15, 2, modelPath, 'marshall', black);
    view.defPieceModel(16, 1, modelPath, 'crowned-knight', white);
    view.defPieceModel(16, 2, modelPath, 'crowned-knight', black);
    view.defPieceModel(17, 1, modelPath, 'pawn', white);
    view.defPieceModel(17, 2, modelPath, 'pawn', black);
    view.defPieceModel(18, 1, modelPath, 'griffin', white);
    view.defPieceModel(18, 2, modelPath, 'griffin', black);
    view.defPieceModel(19, 1, modelPath, 'dragon', white);
    view.defPieceModel(19, 2, modelPath, 'dragon', black);
    view.defPieceModel(20, 1, modelPath, 'huscarl', white);
    view.defPieceModel(20, 2, modelPath, 'huscarl', black);
    view.defPieceModel(21, 1, modelPath, 'rhino', white);
    view.defPieceModel(21, 2, modelPath, 'rhino', black);
    view.defPieceModel(22, 1, modelPath, 'star', white);
    view.defPieceModel(22, 2, modelPath, 'star', black);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "1985 Gary Gygax", true, Dagaz.Controller.open, 'https://en.wikipedia.org/wiki/Dragonchess');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'dragonchess.htm' : 'dragonchess-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'dragonchess-3d-board.htm' : 'dragonchess-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a24", -275, -175, 50, 50, 130);
    view.defPosition("b24", -225, -175, 50, 50, 130);
    view.defPosition("c24", -175, -175, 50, 50, 130);
    view.defPosition("d24", -125, -175, 50, 50, 130);
    view.defPosition("e24", -75, -175, 50, 50, 130);
    view.defPosition("f24", -25, -175, 50, 50, 130);
    view.defPosition("g24", 25, -175, 50, 50, 130);
    view.defPosition("h24", 75, -175, 50, 50, 130);
    view.defPosition("i24", 125, -175, 50, 50, 130);
    view.defPosition("j24", 175, -175, 50, 50, 130);
    view.defPosition("k24", 225, -175, 50, 50, 130);
    view.defPosition("l24", 275, -175, 50, 50, 130);
    view.defPosition("a23", -275, -125, 50, 50, 130);
    view.defPosition("b23", -225, -125, 50, 50, 130);
    view.defPosition("c23", -175, -125, 50, 50, 130);
    view.defPosition("d23", -125, -125, 50, 50, 130);
    view.defPosition("e23", -75, -125, 50, 50, 130);
    view.defPosition("f23", -25, -125, 50, 50, 130);
    view.defPosition("g23", 25, -125, 50, 50, 130);
    view.defPosition("h23", 75, -125, 50, 50, 130);
    view.defPosition("i23", 125, -125, 50, 50, 130);
    view.defPosition("j23", 175, -125, 50, 50, 130);
    view.defPosition("k23", 225, -125, 50, 50, 130);
    view.defPosition("l23", 275, -125, 50, 50, 130);
    view.defPosition("a22", -275, -75, 50, 50, 130);
    view.defPosition("b22", -225, -75, 50, 50, 130);
    view.defPosition("c22", -175, -75, 50, 50, 130);
    view.defPosition("d22", -125, -75, 50, 50, 130);
    view.defPosition("e22", -75, -75, 50, 50, 130);
    view.defPosition("f22", -25, -75, 50, 50, 130);
    view.defPosition("g22", 25, -75, 50, 50, 130);
    view.defPosition("h22", 75, -75, 50, 50, 130);
    view.defPosition("i22", 125, -75, 50, 50, 130);
    view.defPosition("j22", 175, -75, 50, 50, 130);
    view.defPosition("k22", 225, -75, 50, 50, 130);
    view.defPosition("l22", 275, -75, 50, 50, 130);
    view.defPosition("a21", -275, -25, 50, 50, 130);
    view.defPosition("b21", -225, -25, 50, 50, 130);
    view.defPosition("c21", -175, -25, 50, 50, 130);
    view.defPosition("d21", -125, -25, 50, 50, 130);
    view.defPosition("e21", -75, -25, 50, 50, 130);
    view.defPosition("f21", -25, -25, 50, 50, 130);
    view.defPosition("g21", 25, -25, 50, 50, 130);
    view.defPosition("h21", 75, -25, 50, 50, 130);
    view.defPosition("i21", 125, -25, 50, 50, 130);
    view.defPosition("j21", 175, -25, 50, 50, 130);
    view.defPosition("k21", 225, -25, 50, 50, 130);
    view.defPosition("l21", 275, -25, 50, 50, 130);
    view.defPosition("a20", -275, 25, 50, 50, 130);
    view.defPosition("b20", -225, 25, 50, 50, 130);
    view.defPosition("c20", -175, 25, 50, 50, 130);
    view.defPosition("d20", -125, 25, 50, 50, 130);
    view.defPosition("e20", -75, 25, 50, 50, 130);
    view.defPosition("f20", -25, 25, 50, 50, 130);
    view.defPosition("g20", 25, 25, 50, 50, 130);
    view.defPosition("h20", 75, 25, 50, 50, 130);
    view.defPosition("i20", 125, 25, 50, 50, 130);
    view.defPosition("j20", 175, 25, 50, 50, 130);
    view.defPosition("k20", 225, 25, 50, 50, 130);
    view.defPosition("l20", 275, 25, 50, 50, 130);
    view.defPosition("a19", -275, 75, 50, 50, 130);
    view.defPosition("b19", -225, 75, 50, 50, 130);
    view.defPosition("c19", -175, 75, 50, 50, 130);
    view.defPosition("d19", -125, 75, 50, 50, 130);
    view.defPosition("e19", -75, 75, 50, 50, 130);
    view.defPosition("f19", -25, 75, 50, 50, 130);
    view.defPosition("g19", 25, 75, 50, 50, 130);
    view.defPosition("h19", 75, 75, 50, 50, 130);
    view.defPosition("i19", 125, 75, 50, 50, 130);
    view.defPosition("j19", 175, 75, 50, 50, 130);
    view.defPosition("k19", 225, 75, 50, 50, 130);
    view.defPosition("l19", 275, 75, 50, 50, 130);
    view.defPosition("a18", -275, 125, 50, 50, 130);
    view.defPosition("b18", -225, 125, 50, 50, 130);
    view.defPosition("c18", -175, 125, 50, 50, 130);
    view.defPosition("d18", -125, 125, 50, 50, 130);
    view.defPosition("e18", -75, 125, 50, 50, 130);
    view.defPosition("f18", -25, 125, 50, 50, 130);
    view.defPosition("g18", 25, 125, 50, 50, 130);
    view.defPosition("h18", 75, 125, 50, 50, 130);
    view.defPosition("i18", 125, 125, 50, 50, 130);
    view.defPosition("j18", 175, 125, 50, 50, 130);
    view.defPosition("k18", 225, 125, 50, 50, 130);
    view.defPosition("l18", 275, 125, 50, 50, 130);
    view.defPosition("a17", -275, 175, 50, 50, 130);
    view.defPosition("b17", -225, 175, 50, 50, 130);
    view.defPosition("c17", -175, 175, 50, 50, 130);
    view.defPosition("d17", -125, 175, 50, 50, 130);
    view.defPosition("e17", -75, 175, 50, 50, 130);
    view.defPosition("f17", -25, 175, 50, 50, 130);
    view.defPosition("g17", 25, 175, 50, 50, 130);
    view.defPosition("h17", 75, 175, 50, 50, 130);
    view.defPosition("i17", 125, 175, 50, 50, 130);
    view.defPosition("j17", 175, 175, 50, 50, 130);
    view.defPosition("k17", 225, 175, 50, 50, 130);
    view.defPosition("l17", 275, 175, 50, 50, 130);

    view.defPosition("a16", -275, -175, 50, 50, 0);
    view.defPosition("b16", -225, -175, 50, 50, 0);
    view.defPosition("c16", -175, -175, 50, 50, 0);
    view.defPosition("d16", -125, -175, 50, 50, 0);
    view.defPosition("e16", -75, -175, 50, 50, 0);
    view.defPosition("f16", -25, -175, 50, 50, 0);
    view.defPosition("g16", 25, -175, 50, 50, 0);
    view.defPosition("h16", 75, -175, 50, 50, 0);
    view.defPosition("i16", 125, -175, 50, 50, 0);
    view.defPosition("j16", 175, -175, 50, 50, 0);
    view.defPosition("k16", 225, -175, 50, 50, 0);
    view.defPosition("l16", 275, -175, 50, 50, 0);
    view.defPosition("a15", -275, -125, 50, 50, 0);
    view.defPosition("b15", -225, -125, 50, 50, 0);
    view.defPosition("c15", -175, -125, 50, 50, 0);
    view.defPosition("d15", -125, -125, 50, 50, 0);
    view.defPosition("e15", -75, -125, 50, 50, 0);
    view.defPosition("f15", -25, -125, 50, 50, 0);
    view.defPosition("g15", 25, -125, 50, 50, 0);
    view.defPosition("h15", 75, -125, 50, 50, 0);
    view.defPosition("i15", 125, -125, 50, 50, 0);
    view.defPosition("j15", 175, -125, 50, 50, 0);
    view.defPosition("k15", 225, -125, 50, 50, 0);
    view.defPosition("l15", 275, -125, 50, 50, 0);
    view.defPosition("a14", -275, -75, 50, 50, 0);
    view.defPosition("b14", -225, -75, 50, 50, 0);
    view.defPosition("c14", -175, -75, 50, 50, 0);
    view.defPosition("d14", -125, -75, 50, 50, 0);
    view.defPosition("e14", -75, -75, 50, 50, 0);
    view.defPosition("f14", -25, -75, 50, 50, 0);
    view.defPosition("g14", 25, -75, 50, 50, 0);
    view.defPosition("h14", 75, -75, 50, 50, 0);
    view.defPosition("i14", 125, -75, 50, 50, 0);
    view.defPosition("j14", 175, -75, 50, 50, 0);
    view.defPosition("k14", 225, -75, 50, 50, 0);
    view.defPosition("l14", 275, -75, 50, 50, 0);
    view.defPosition("a13", -275, -25, 50, 50, 0);
    view.defPosition("b13", -225, -25, 50, 50, 0);
    view.defPosition("c13", -175, -25, 50, 50, 0);
    view.defPosition("d13", -125, -25, 50, 50, 0);
    view.defPosition("e13", -75, -25, 50, 50, 0);
    view.defPosition("f13", -25, -25, 50, 50, 0);
    view.defPosition("g13", 25, -25, 50, 50, 0);
    view.defPosition("h13", 75, -25, 50, 50, 0);
    view.defPosition("i13", 125, -25, 50, 50, 0);
    view.defPosition("j13", 175, -25, 50, 50, 0);
    view.defPosition("k13", 225, -25, 50, 50, 0);
    view.defPosition("l13", 275, -25, 50, 50, 0);
    view.defPosition("a12", -275, 25, 50, 50, 0);
    view.defPosition("b12", -225, 25, 50, 50, 0);
    view.defPosition("c12", -175, 25, 50, 50, 0);
    view.defPosition("d12", -125, 25, 50, 50, 0);
    view.defPosition("e12", -75, 25, 50, 50, 0);
    view.defPosition("f12", -25, 25, 50, 50, 0);
    view.defPosition("g12", 25, 25, 50, 50, 0);
    view.defPosition("h12", 75, 25, 50, 50, 0);
    view.defPosition("i12", 125, 25, 50, 50, 0);
    view.defPosition("j12", 175, 25, 50, 50, 0);
    view.defPosition("k12", 225, 25, 50, 50, 0);
    view.defPosition("l12", 275, 25, 50, 50, 0);
    view.defPosition("a11", -275, 75, 50, 50, 0);
    view.defPosition("b11", -225, 75, 50, 50, 0);
    view.defPosition("c11", -175, 75, 50, 50, 0);
    view.defPosition("d11", -125, 75, 50, 50, 0);
    view.defPosition("e11", -75, 75, 50, 50, 0);
    view.defPosition("f11", -25, 75, 50, 50, 0);
    view.defPosition("g11", 25, 75, 50, 50, 0);
    view.defPosition("h11", 75, 75, 50, 50, 0);
    view.defPosition("i11", 125, 75, 50, 50, 0);
    view.defPosition("j11", 175, 75, 50, 50, 0);
    view.defPosition("k11", 225, 75, 50, 50, 0);
    view.defPosition("l11", 275, 75, 50, 50, 0);
    view.defPosition("a10", -275, 125, 50, 50, 0);
    view.defPosition("b10", -225, 125, 50, 50, 0);
    view.defPosition("c10", -175, 125, 50, 50, 0);
    view.defPosition("d10", -125, 125, 50, 50, 0);
    view.defPosition("e10", -75, 125, 50, 50, 0);
    view.defPosition("f10", -25, 125, 50, 50, 0);
    view.defPosition("g10", 25, 125, 50, 50, 0);
    view.defPosition("h10", 75, 125, 50, 50, 0);
    view.defPosition("i10", 125, 125, 50, 50, 0);
    view.defPosition("j10", 175, 125, 50, 50, 0);
    view.defPosition("k10", 225, 125, 50, 50, 0);
    view.defPosition("l10", 275, 125, 50, 50, 0);
    view.defPosition("a9", -275, 175, 50, 50, 0);
    view.defPosition("b9", -225, 175, 50, 50, 0);
    view.defPosition("c9", -175, 175, 50, 50, 0);
    view.defPosition("d9", -125, 175, 50, 50, 0);
    view.defPosition("e9", -75, 175, 50, 50, 0);
    view.defPosition("f9", -25, 175, 50, 50, 0);
    view.defPosition("g9", 25, 175, 50, 50, 0);
    view.defPosition("h9", 75, 175, 50, 50, 0);
    view.defPosition("i9", 125, 175, 50, 50, 0);
    view.defPosition("j9", 175, 175, 50, 50, 0);
    view.defPosition("k9", 225, 175, 50, 50, 0);
    view.defPosition("l9", 275, 175, 50, 50, 0);

    view.defPosition("a8", -275, -175, 50, 50, -130);
    view.defPosition("b8", -225, -175, 50, 50, -130);
    view.defPosition("c8", -175, -175, 50, 50, -130);
    view.defPosition("d8", -125, -175, 50, 50, -130);
    view.defPosition("e8", -75, -175, 50, 50, -130);
    view.defPosition("f8", -25, -175, 50, 50, -130);
    view.defPosition("g8", 25, -175, 50, 50, -130);
    view.defPosition("h8", 75, -175, 50, 50, -130);
    view.defPosition("i8", 125, -175, 50, 50, -130);
    view.defPosition("j8", 175, -175, 50, 50, -130);
    view.defPosition("k8", 225, -175, 50, 50, -130);
    view.defPosition("l8", 275, -175, 50, 50, -130);
    view.defPosition("a7", -275, -125, 50, 50, -130);
    view.defPosition("b7", -225, -125, 50, 50, -130);
    view.defPosition("c7", -175, -125, 50, 50, -130);
    view.defPosition("d7", -125, -125, 50, 50, -130);
    view.defPosition("e7", -75, -125, 50, 50, -130);
    view.defPosition("f7", -25, -125, 50, 50, -130);
    view.defPosition("g7", 25, -125, 50, 50, -130);
    view.defPosition("h7", 75, -125, 50, 50, -130);
    view.defPosition("i7", 125, -125, 50, 50, -130);
    view.defPosition("j7", 175, -125, 50, 50, -130);
    view.defPosition("k7", 225, -125, 50, 50, -130);
    view.defPosition("l7", 275, -125, 50, 50, -130);
    view.defPosition("a6", -275, -75, 50, 50, -130);
    view.defPosition("b6", -225, -75, 50, 50, -130);
    view.defPosition("c6", -175, -75, 50, 50, -130);
    view.defPosition("d6", -125, -75, 50, 50, -130);
    view.defPosition("e6", -75, -75, 50, 50, -130);
    view.defPosition("f6", -25, -75, 50, 50, -130);
    view.defPosition("g6", 25, -75, 50, 50, -130);
    view.defPosition("h6", 75, -75, 50, 50, -130);
    view.defPosition("i6", 125, -75, 50, 50, -130);
    view.defPosition("j6", 175, -75, 50, 50, -130);
    view.defPosition("k6", 225, -75, 50, 50, -130);
    view.defPosition("l6", 275, -75, 50, 50, -130);
    view.defPosition("a5", -275, -25, 50, 50, -130);
    view.defPosition("b5", -225, -25, 50, 50, -130);
    view.defPosition("c5", -175, -25, 50, 50, -130);
    view.defPosition("d5", -125, -25, 50, 50, -130);
    view.defPosition("e5", -75, -25, 50, 50, -130);
    view.defPosition("f5", -25, -25, 50, 50, -130);
    view.defPosition("g5", 25, -25, 50, 50, -130);
    view.defPosition("h5", 75, -25, 50, 50, -130);
    view.defPosition("i5", 125, -25, 50, 50, -130);
    view.defPosition("j5", 175, -25, 50, 50, -130);
    view.defPosition("k5", 225, -25, 50, 50, -130);
    view.defPosition("l5", 275, -25, 50, 50, -130);
    view.defPosition("a4", -275, 25, 50, 50, -130);
    view.defPosition("b4", -225, 25, 50, 50, -130);
    view.defPosition("c4", -175, 25, 50, 50, -130);
    view.defPosition("d4", -125, 25, 50, 50, -130);
    view.defPosition("e4", -75, 25, 50, 50, -130);
    view.defPosition("f4", -25, 25, 50, 50, -130);
    view.defPosition("g4", 25, 25, 50, 50, -130);
    view.defPosition("h4", 75, 25, 50, 50, -130);
    view.defPosition("i4", 125, 25, 50, 50, -130);
    view.defPosition("j4", 175, 25, 50, 50, -130);
    view.defPosition("k4", 225, 25, 50, 50, -130);
    view.defPosition("l4", 275, 25, 50, 50, -130);
    view.defPosition("a3", -275, 75, 50, 50, -130);
    view.defPosition("b3", -225, 75, 50, 50, -130);
    view.defPosition("c3", -175, 75, 50, 50, -130);
    view.defPosition("d3", -125, 75, 50, 50, -130);
    view.defPosition("e3", -75, 75, 50, 50, -130);
    view.defPosition("f3", -25, 75, 50, 50, -130);
    view.defPosition("g3", 25, 75, 50, 50, -130);
    view.defPosition("h3", 75, 75, 50, 50, -130);
    view.defPosition("i3", 125, 75, 50, 50, -130);
    view.defPosition("j3", 175, 75, 50, 50, -130);
    view.defPosition("k3", 225, 75, 50, 50, -130);
    view.defPosition("l3", 275, 75, 50, 50, -130);
    view.defPosition("a2", -275, 125, 50, 50, -130);
    view.defPosition("b2", -225, 125, 50, 50, -130);
    view.defPosition("c2", -175, 125, 50, 50, -130);
    view.defPosition("d2", -125, 125, 50, 50, -130);
    view.defPosition("e2", -75, 125, 50, 50, -130);
    view.defPosition("f2", -25, 125, 50, 50, -130);
    view.defPosition("g2", 25, 125, 50, 50, -130);
    view.defPosition("h2", 75, 125, 50, 50, -130);
    view.defPosition("i2", 125, 125, 50, 50, -130);
    view.defPosition("j2", 175, 125, 50, 50, -130);
    view.defPosition("k2", 225, 125, 50, 50, -130);
    view.defPosition("l2", 275, 125, 50, 50, -130);
    view.defPosition("a1", -275, 175, 50, 50, -130);
    view.defPosition("b1", -225, 175, 50, 50, -130);
    view.defPosition("c1", -175, 175, 50, 50, -130);
    view.defPosition("d1", -125, 175, 50, 50, -130);
    view.defPosition("e1", -75, 175, 50, 50, -130);
    view.defPosition("f1", -25, 175, 50, 50, -130);
    view.defPosition("g1", 25, 175, 50, 50, -130);
    view.defPosition("h1", 75, 175, 50, 50, -130);
    view.defPosition("i1", 125, 175, 50, 50, -130);
    view.defPosition("j1", 175, 175, 50, 50, -130);
    view.defPosition("k1", 225, 175, 50, 50, -130);
    view.defPosition("l1", 275, 175, 50, 50, -130);
}
