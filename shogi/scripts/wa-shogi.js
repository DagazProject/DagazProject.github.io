Dagaz.View.CHECK_CANVAS   = true;
Dagaz.View.SCALE_SIZE     = true;

Dagaz.Model.WIDTH         = 11;
Dagaz.Model.HEIGHT        = 11;

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
    design.checkVersion("promote-dialog", "remap");
    design.checkVersion("wa-shogi-promotion", "true");
    design.checkVersion("wa-shogi-extension", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("nx"); // 7
    design.addDirection("n");  // 8
    design.addDirection("sr"); // 9
    design.addDirection("nr"); // 10

    design.addPlayer("South", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("North", [6, 8, 5, 4, 3, 2, 0, 7, 1, 10, 9]);

    design.addPosition("X11", [18, 17, 0, 1, 0, 0, 0, 0, 0, 0, 18]);
    design.addPosition("Y11", [0, 17, 16, 0, -1, 0, 0, 0, 0, 0, -1]);
    design.addPosition("M11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a11", [18, 17, 0, 1, 0, 0, 0, 171, 0, 182, -2]);
    design.addPosition("b11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 181, -3]);
    design.addPosition("c11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 180, -4]);
    design.addPosition("d11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 179, -5]);
    design.addPosition("e11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 178, -6]);
    design.addPosition("f11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 177, -7]);
    design.addPosition("g11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 176, -8]);
    design.addPosition("h11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 175, -9]);
    design.addPosition("i11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 174, -10]);
    design.addPosition("j11", [18, 17, 16, 1, -1, 0, 0, 171, 0, 173, -11]);
    design.addPosition("k11", [0, 17, 16, 0, -1, 0, 0, 0, 0, 172, -12]);
    design.addPosition("N11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z11", [18, 17, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T11", [0, 17, 16, 0, -1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X10", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y10", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [18, 17, 0, 1, 0, -16, 0, -17, -17, 165, -19]);
    design.addPosition("b10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 164, -20]);
    design.addPosition("c10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 163, -21]);
    design.addPosition("d10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 162, -22]);
    design.addPosition("e10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 161, -23]);
    design.addPosition("f10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 160, -24]);
    design.addPosition("g10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 159, -25]);
    design.addPosition("h10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 158, -26]);
    design.addPosition("i10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 157, -27]);
    design.addPosition("j10", [18, 17, 16, 1, -1, -16, -18, -17, -17, 156, -28]);
    design.addPosition("k10", [0, 17, 16, 0, -1, 0, -18, -17, -17, 155, -29]);
    design.addPosition("N10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z10", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T10", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X9", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y9", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [18, 17, 0, 1, 0, -16, 0, -17, -17, 148, -36]);
    design.addPosition("b9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 147, -37]);
    design.addPosition("c9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 146, -38]);
    design.addPosition("d9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 145, -39]);
    design.addPosition("e9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 144, -40]);
    design.addPosition("f9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 143, -41]);
    design.addPosition("g9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 142, -42]);
    design.addPosition("h9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 141, -43]);
    design.addPosition("i9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 140, -44]);
    design.addPosition("j9", [18, 17, 16, 1, -1, -16, -18, -17, -17, 139, -45]);
    design.addPosition("k9", [0, 17, 16, 0, -1, 0, -18, -17, -17, 138, -46]);
    design.addPosition("N9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z9", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T9", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X8", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y8", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [18, 17, 0, 1, 0, -16, 0, -17, -17, 131, -53]);
    design.addPosition("b8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 130, -54]);
    design.addPosition("c8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 129, -55]);
    design.addPosition("d8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 128, -56]);
    design.addPosition("e8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 127, -57]);
    design.addPosition("f8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 126, -58]);
    design.addPosition("g8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 125, -59]);
    design.addPosition("h8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 124, -60]);
    design.addPosition("i8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 123, -61]);
    design.addPosition("j8", [18, 17, 16, 1, -1, -16, -18, -17, -17, 122, -62]);
    design.addPosition("k8", [0, 17, 16, 0, -1, 0, -18, -17, -17, 121, -63]);
    design.addPosition("N8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z8", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T8", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X7", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y7", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [18, 17, 0, 1, 0, -16, 0, -17, -17, 114, -70]);
    design.addPosition("b7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 113, -71]);
    design.addPosition("c7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 112, -72]);
    design.addPosition("d7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 111, -73]);
    design.addPosition("e7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 110, -74]);
    design.addPosition("f7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 109, -75]);
    design.addPosition("g7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 108, -76]);
    design.addPosition("h7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 107, -77]);
    design.addPosition("i7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 106, -78]);
    design.addPosition("j7", [18, 17, 16, 1, -1, -16, -18, -17, -17, 105, -79]);
    design.addPosition("k7", [0, 17, 16, 0, -1, 0, -18, -17, -17, 104, -80]);
    design.addPosition("N7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z7", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T7", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X6", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y6", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [18, 17, 0, 1, 0, -16, 0, -17, -17, 97, -87]);
    design.addPosition("b6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 96, -88]);
    design.addPosition("c6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 95, -89]);
    design.addPosition("d6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 94, -90]);
    design.addPosition("e6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 93, -91]);
    design.addPosition("f6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 92, -92]);
    design.addPosition("g6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 91, -93]);
    design.addPosition("h6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 90, -94]);
    design.addPosition("i6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 89, -95]);
    design.addPosition("j6", [18, 17, 16, 1, -1, -16, -18, -17, -17, 88, -96]);
    design.addPosition("k6", [0, 17, 16, 0, -1, 0, -18, -17, -17, 87, -97]);
    design.addPosition("N6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T6", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X5", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y5", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [18, 17, 0, 1, 0, -16, 0, -17, -17, 80, -104]);
    design.addPosition("b5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 79, -105]);
    design.addPosition("c5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 78, -106]);
    design.addPosition("d5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 77, -107]);
    design.addPosition("e5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 76, -108]);
    design.addPosition("f5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 75, -109]);
    design.addPosition("g5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 74, -110]);
    design.addPosition("h5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 73, -111]);
    design.addPosition("i5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 72, -112]);
    design.addPosition("j5", [18, 17, 16, 1, -1, -16, -18, -17, -17, 71, -113]);
    design.addPosition("k5", [0, 17, 16, 0, -1, 0, -18, -17, -17, 70, -114]);
    design.addPosition("N5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T5", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X4", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y4", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [18, 17, 0, 1, 0, -16, 0, -17, -17, 63, -121]);
    design.addPosition("b4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 62, -122]);
    design.addPosition("c4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 61, -123]);
    design.addPosition("d4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 60, -124]);
    design.addPosition("e4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 59, -125]);
    design.addPosition("f4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 58, -126]);
    design.addPosition("g4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 57, -127]);
    design.addPosition("h4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 56, -128]);
    design.addPosition("i4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 55, -129]);
    design.addPosition("j4", [18, 17, 16, 1, -1, -16, -18, -17, -17, 54, -130]);
    design.addPosition("k4", [0, 17, 16, 0, -1, 0, -18, -17, -17, 53, -131]);
    design.addPosition("N4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T4", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X3", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y3", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [18, 17, 0, 1, 0, -16, 0, -17, -17, 46, -138]);
    design.addPosition("b3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 45, -139]);
    design.addPosition("c3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 44, -140]);
    design.addPosition("d3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 43, -141]);
    design.addPosition("e3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 42, -142]);
    design.addPosition("f3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 41, -143]);
    design.addPosition("g3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 40, -144]);
    design.addPosition("h3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 39, -145]);
    design.addPosition("i3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 38, -146]);
    design.addPosition("j3", [18, 17, 16, 1, -1, -16, -18, -17, -17, 37, -147]);
    design.addPosition("k3", [0, 17, 16, 0, -1, 0, -18, -17, -17, 36, -148]);
    design.addPosition("N3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T3", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X2", [18, 17, 0, 1, 0, -16, 0, -17, -17, 0, 18]);
    design.addPosition("Y2", [0, 17, 16, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [18, 17, 0, 1, 0, -16, 0, -17, -17, 29, -155]);
    design.addPosition("b2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 28, -156]);
    design.addPosition("c2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 27, -157]);
    design.addPosition("d2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 26, -158]);
    design.addPosition("e2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 25, -159]);
    design.addPosition("f2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 24, -160]);
    design.addPosition("g2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 23, -161]);
    design.addPosition("h2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 22, -162]);
    design.addPosition("i2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 21, -163]);
    design.addPosition("j2", [18, 17, 16, 1, -1, -16, -18, -17, -17, 20, -164]);
    design.addPosition("k2", [0, 17, 16, 0, -1, 0, -18, -17, -17, 19, -165]);
    design.addPosition("N2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [18, 17, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T2", [0, 17, 16, 0, -1, 0, -18, -17, -17, -18, 0]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -16, 0, -17, -17, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -18, -17, -17, 0, -1]);
    design.addPosition("M1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -16, 0, -17, -17, 12, -172]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 11, -173]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 10, -174]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 9, -175]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 8, -176]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 7, -177]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 6, -178]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 5, -179]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 4, -180]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -16, -18, -17, -17, 3, -181]);
    design.addPosition("k1", [0, 0, 0, 0, -1, 0, -18, -17, -17, 2, -182]);
    design.addPosition("N1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -16, 0, -17, -17, 1, 0]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -18, -17, -17, -18, 0]);

    design.addZone("board-zone", 1, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183]);
    design.addZone("board-zone", 2, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183]);
    design.addZone("promotion-zone", 1, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]);
    design.addZone("promotion-zone", 2, [173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-13);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("CraneKing", 0, 600000);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("SparrowPawn", 1, 100);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 1, [173, 7], 1);

    design.addPiece("ViolentWolf", 2, 600);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 0, [1], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 1, [173, 7], 1);

    design.addPiece("ViolentWolfP", 3, 600);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [6], 0);
    design.addMove(3, 0, [5], 0);

    design.addPiece("ViolentStag", 4, 510);
    design.addMove(4, 0, [6], 0);
    design.addMove(4, 0, [5], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [8], 0);
    design.addMove(4, 1, [173, 7], 1);

    design.addPiece("ViolentStagP", 5, 510);
    design.addMove(5, 0, [6], 0);
    design.addMove(5, 0, [5], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [8], 0);

    design.addPiece("FlyingGoose", 6, 410);
    design.addMove(6, 0, [6], 0);
    design.addMove(6, 0, [5], 0);
    design.addMove(6, 0, [8], 0);
    design.addMove(6, 0, [1], 0);
    design.addMove(6, 1, [173, 7], 1);

    design.addPiece("FlyingCock", 7, 410);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 1, [173, 7], 1);

    design.addPiece("StruttingCrow", 8, 310);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [8], 0);
    design.addMove(8, 1, [173, 7], 1);

    design.addPiece("SwoopingOwl", 9, 300);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [8], 0);
    design.addMove(9, 1, [173, 7], 1);

    design.addPiece("BlindDog", 10, 500);
    design.addMove(10, 0, [6], 0);
    design.addMove(10, 0, [5], 0);
    design.addMove(10, 0, [4], 0);
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [1], 0);
    design.addMove(10, 1, [173, 7], 1);

    design.addPiece("ClimbingMonkey", 11, 400);
    design.addMove(11, 0, [6], 0);
    design.addMove(11, 0, [5], 0);
    design.addMove(11, 0, [8], 0);
    design.addMove(11, 0, [1], 0);
    design.addMove(11, 1, [173, 7], 1);

    design.addPiece("Oxcart", 12, 1000);
    design.addMove(12, 2, [8, 8], 0);
    design.addMove(12, 1, [173, 7], 1);

    design.addPiece("LiberatedHorse", 13, 1200);
    design.addMove(13, 2, [8, 8], 0);
    design.addMove(13, 0, [1], 0);
    design.addMove(13, 3, [1, 1], 0);
    design.addMove(13, 1, [173, 7], 1);

    design.addPiece("SwallowsWings", 14, 2000);
    design.addMove(14, 2, [3, 3], 0);
    design.addMove(14, 2, [4, 4], 0);
    design.addMove(14, 0, [8], 0);
    design.addMove(14, 0, [1], 0);
    design.addMove(14, 1, [173, 7], 1);

    design.addPiece("SwallowsWingsP", 15, 2000);
    design.addMove(15, 2, [3, 3], 0);
    design.addMove(15, 2, [4, 4], 0);
    design.addMove(15, 0, [8], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("FlyingFalcon", 16, 4100);
    design.addMove(16, 2, [6, 6], 0);
    design.addMove(16, 2, [5, 5], 0);
    design.addMove(16, 2, [2, 2], 0);
    design.addMove(16, 2, [0, 0], 0);
    design.addMove(16, 0, [8], 0);
    design.addMove(16, 1, [173, 7], 1);

    design.addPiece("FlyingFalconP", 17, 4100);
    design.addMove(17, 2, [6, 6], 0);
    design.addMove(17, 2, [5, 5], 0);
    design.addMove(17, 2, [2, 2], 0);
    design.addMove(17, 2, [0, 0], 0);
    design.addMove(17, 0, [8], 0);

    design.addPiece("CloudEagle", 18, 2800);
    design.addMove(18, 2, [8, 8], 0);
    design.addMove(18, 2, [1, 1], 0);
    design.addMove(18, 0, [4], 0);
    design.addMove(18, 0, [3], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [6], 0);
    design.addMove(18, 0, [5], 0);
    design.addMove(18, 3, [6, 6], 0);
    design.addMove(18, 3, [5, 5], 0);
    design.addMove(18, 4, [6, 6, 6], 0);
    design.addMove(18, 4, [5, 5, 5], 0);
    design.addMove(18, 1, [173, 7], 1);

    design.addPiece("CloudEagleP", 19, 2800);
    design.addMove(19, 2, [8, 8], 0);
    design.addMove(19, 2, [1, 1], 0);
    design.addMove(19, 0, [4], 0);
    design.addMove(19, 0, [3], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [6], 0);
    design.addMove(19, 0, [5], 0);
    design.addMove(19, 3, [6, 6], 0);
    design.addMove(19, 3, [5, 5], 0);
    design.addMove(19, 4, [6, 6, 6], 0);
    design.addMove(19, 4, [5, 5, 5], 0);

    design.addPiece("TreacherousFox", 20, 900);
    design.addMove(20, 0, [8], 0);
    design.addMove(20, 0, [1], 0);
    design.addMove(20, 0, [6], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [5], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 5, [8, 8], 0);
    design.addMove(20, 5, [1, 1], 0);
    design.addMove(20, 5, [6, 6], 0);
    design.addMove(20, 5, [2, 2], 0);
    design.addMove(20, 5, [5, 5], 0);
    design.addMove(20, 5, [0, 0], 0);
    design.addMove(20, 1, [173, 7], 1);

    design.addPiece("TreacherousFoxP", 21, 900);
    design.addMove(21, 0, [8], 0);
    design.addMove(21, 0, [1], 0);
    design.addMove(21, 0, [6], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [5], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 5, [8, 8], 0);
    design.addMove(21, 5, [1, 1], 0);
    design.addMove(21, 5, [6, 6], 0);
    design.addMove(21, 5, [2, 2], 0);
    design.addMove(21, 5, [5, 5], 0);
    design.addMove(21, 5, [0, 0], 0);

    design.addPiece("RunningRabbit", 22, 1500);
    design.addMove(22, 2, [8, 8], 0);
    design.addMove(22, 0, [1], 0);
    design.addMove(22, 0, [6], 0);
    design.addMove(22, 0, [5], 0);
    design.addMove(22, 0, [2], 0);
    design.addMove(22, 0, [0], 0);
    design.addMove(22, 1, [173, 7], 1);

    design.addPiece("TenaciousFalcon", 23, 6200);
    design.addMove(23, 2, [8, 8], 0);
    design.addMove(23, 2, [1, 1], 0);
    design.addMove(23, 2, [6, 6], 0);
    design.addMove(23, 2, [5, 5], 0);
    design.addMove(23, 2, [2, 2], 0);
    design.addMove(23, 2, [0, 0], 0);
    design.addMove(23, 0, [4], 0);
    design.addMove(23, 0, [3], 0);

    design.addPiece("BearsEyes", 24, 800);
    design.addMove(24, 0, [8], 0);
    design.addMove(24, 0, [6], 0);
    design.addMove(24, 0, [3], 0);
    design.addMove(24, 0, [5], 0);
    design.addMove(24, 0, [4], 0);
    design.addMove(24, 0, [2], 0);
    design.addMove(24, 0, [1], 0);
    design.addMove(24, 0, [0], 0);

    design.addPiece("RoamingBoar", 25, 700);
    design.addMove(25, 0, [8], 0);
    design.addMove(25, 0, [6], 0);
    design.addMove(25, 0, [3], 0);
    design.addMove(25, 0, [5], 0);
    design.addMove(25, 0, [4], 0);
    design.addMove(25, 0, [2], 0);
    design.addMove(25, 0, [0], 0);

    design.addPiece("RaidingFalcon", 26, 2400);
    design.addMove(26, 0, [4], 0);
    design.addMove(26, 0, [6], 0);
    design.addMove(26, 0, [3], 0);
    design.addMove(26, 0, [5], 0);
    design.addMove(26, 2, [8, 8], 0);
    design.addMove(26, 2, [1, 1], 0);

    design.addPiece("GlidingSwallow", 27, 5000);
    design.addMove(27, 2, [8, 8], 0);
    design.addMove(27, 2, [1, 1], 0);
    design.addMove(27, 2, [4, 4], 0);
    design.addMove(27, 2, [3, 3], 0);

    design.addPiece("HeavenlyHorse", 28, 700);
    design.addMove(28, 5, [8, 6], 0);
    design.addMove(28, 5, [8, 5], 0);
    design.addMove(28, 5, [1, 2], 0);
    design.addMove(28, 5, [1, 0], 0);

    design.addPiece("PloddingOx", 29, 800);
    design.addMove(29, 0, [8], 0);
    design.addMove(29, 0, [6], 0);
    design.addMove(29, 0, [3], 0);
    design.addMove(29, 0, [5], 0);
    design.addMove(29, 0, [4], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 0, [1], 0);
    design.addMove(29, 0, [0], 0);

    design.addPiece("GoldenBird", 30, 600);
    design.addMove(30, 0, [8], 0);
    design.addMove(30, 0, [6], 0);
    design.addMove(30, 0, [3], 0);
    design.addMove(30, 0, [5], 0);
    design.addMove(30, 0, [4], 0);
    design.addMove(30, 0, [1], 0);

    design.setup("South", "CraneKing", 178);
    design.setup("South", "SparrowPawn", 139);
    design.setup("South", "SparrowPawn", 140);
    design.setup("South", "SparrowPawn", 141);
    design.setup("South", "SparrowPawn", 125);
    design.setup("South", "SparrowPawn", 143);
    design.setup("South", "SparrowPawn", 144);
    design.setup("South", "SparrowPawn", 145);
    design.setup("South", "SparrowPawn", 129);
    design.setup("South", "SparrowPawn", 147);
    design.setup("South", "SparrowPawn", 148);
    design.setup("South", "SparrowPawn", 149);
    design.setup("South", "ViolentWolf", 177);
    design.setup("South", "ViolentStag", 179);
    design.setup("South", "FlyingGoose", 176);
    design.setup("South", "FlyingCock", 180);
    design.setup("South", "StruttingCrow", 175);
    design.setup("South", "SwoopingOwl", 181);
    design.setup("South", "BlindDog", 174);
    design.setup("South", "ClimbingMonkey", 182);
    design.setup("South", "Oxcart", 173);
    design.setup("South", "LiberatedHorse", 183);
    design.setup("South", "SwallowsWings", 161);
    design.setup("South", "FlyingFalcon", 157);
    design.setup("South", "CloudEagle", 165);
    design.setup("South", "TreacherousFox", 142);
    design.setup("South", "RunningRabbit", 146);
    design.setup("North", "CraneKing", 8);
    design.setup("North", "SparrowPawn", 37);
    design.setup("North", "SparrowPawn", 38);
    design.setup("North", "SparrowPawn", 39);
    design.setup("North", "SparrowPawn", 57);
    design.setup("North", "SparrowPawn", 41);
    design.setup("North", "SparrowPawn", 42);
    design.setup("North", "SparrowPawn", 43);
    design.setup("North", "SparrowPawn", 61);
    design.setup("North", "SparrowPawn", 45);
    design.setup("North", "SparrowPawn", 46);
    design.setup("North", "SparrowPawn", 47);
    design.setup("North", "ViolentWolf", 9);
    design.setup("North", "ViolentStag", 7);
    design.setup("North", "FlyingGoose", 10);
    design.setup("North", "FlyingCock", 6);
    design.setup("North", "StruttingCrow", 11);
    design.setup("North", "SwoopingOwl", 5);
    design.setup("North", "BlindDog", 12);
    design.setup("North", "ClimbingMonkey", 4);
    design.setup("North", "Oxcart", 13);
    design.setup("North", "LiberatedHorse", 3);
    design.setup("North", "SwallowsWings", 25);
    design.setup("North", "FlyingFalcon", 29);
    design.setup("North", "CloudEagle", 21);
    design.setup("North", "TreacherousFox", 44);
    design.setup("North", "RunningRabbit", 40);
}

Dagaz.View.configure = function(view) {
    view.defBoardSvg("Board", 144, 1, 847, 559);
    view.defPieceSvg("SouthCraneKing", "South CraneKing", 40, 46);
    view.defPieceSvg("NorthCraneKing", "North CraneKing", 40, 46);
    view.defPieceSvg("SouthSparrowPawn", "South SparrowPawn", 40, 46);
    view.defPieceSvg("NorthSparrowPawn", "North SparrowPawn", 40, 46);
    view.defPieceSvg("SouthViolentWolf", "South ViolentWolf", 40, 46);
    view.defPieceSvg("NorthViolentWolf", "North ViolentWolf", 40, 46);
    view.defPieceSvg("SouthViolentWolfP", "South ViolentWolfP", 40, 46);
    view.defPieceSvg("NorthViolentWolfP", "North ViolentWolfP", 40, 46);
    view.defPieceSvg("SouthViolentStag", "South ViolentStag", 40, 46);
    view.defPieceSvg("NorthViolentStag", "North ViolentStag", 40, 46);
    view.defPieceSvg("SouthViolentStagP", "South ViolentStagP", 40, 46);
    view.defPieceSvg("NorthViolentStagP", "North ViolentStagP", 40, 46);
    view.defPieceSvg("SouthFlyingGoose", "South FlyingGoose", 40, 46);
    view.defPieceSvg("NorthFlyingGoose", "North FlyingGoose", 40, 46);
    view.defPieceSvg("SouthFlyingCock", "South FlyingCock", 40, 46);
    view.defPieceSvg("NorthFlyingCock", "North FlyingCock", 40, 46);
    view.defPieceSvg("SouthStruttingCrow", "South StruttingCrow", 40, 46);
    view.defPieceSvg("NorthStruttingCrow", "North StruttingCrow", 40, 46);
    view.defPieceSvg("SouthSwoopingOwl", "South SwoopingOwl", 40, 46);
    view.defPieceSvg("NorthSwoopingOwl", "North SwoopingOwl", 40, 46);
    view.defPieceSvg("SouthBlindDog", "South BlindDog", 40, 46);
    view.defPieceSvg("NorthBlindDog", "North BlindDog", 40, 46);
    view.defPieceSvg("SouthClimbingMonkey", "South ClimbingMonkey", 40, 46);
    view.defPieceSvg("NorthClimbingMonkey", "North ClimbingMonkey", 40, 46);
    view.defPieceSvg("SouthOxcart", "South Oxcart", 40, 46);
    view.defPieceSvg("NorthOxcart", "North Oxcart", 40, 46);
    view.defPieceSvg("SouthLiberatedHorse", "South LiberatedHorse", 40, 46);
    view.defPieceSvg("NorthLiberatedHorse", "North LiberatedHorse", 40, 46);
    view.defPieceSvg("SouthSwallowsWings", "South SwallowsWings", 40, 46);
    view.defPieceSvg("NorthSwallowsWings", "North SwallowsWings", 40, 46);
    view.defPieceSvg("SouthSwallowsWingsP", "South SwallowsWingsP", 40, 46);
    view.defPieceSvg("NorthSwallowsWingsP", "North SwallowsWingsP", 40, 46);
    view.defPieceSvg("SouthFlyingFalcon", "South FlyingFalcon", 40, 46);
    view.defPieceSvg("NorthFlyingFalcon", "North FlyingFalcon", 40, 46);
    view.defPieceSvg("SouthFlyingFalconP", "South FlyingFalconP", 40, 46);
    view.defPieceSvg("NorthFlyingFalconP", "North FlyingFalconP", 40, 46);
    view.defPieceSvg("SouthCloudEagle", "South CloudEagle", 40, 46);
    view.defPieceSvg("NorthCloudEagle", "North CloudEagle", 40, 46);
    view.defPieceSvg("SouthCloudEagleP", "South CloudEagleP", 40, 46);
    view.defPieceSvg("NorthCloudEagleP", "North CloudEagleP", 40, 46);
    view.defPieceSvg("SouthTreacherousFox", "South TreacherousFox", 40, 46);
    view.defPieceSvg("NorthTreacherousFox", "North TreacherousFox", 40, 46);
    view.defPieceSvg("SouthTreacherousFoxP", "South TreacherousFoxP", 40, 46);
    view.defPieceSvg("NorthTreacherousFoxP", "North TreacherousFoxP", 40, 46);
    view.defPieceSvg("SouthRunningRabbit", "South RunningRabbit", 40, 46);
    view.defPieceSvg("NorthRunningRabbit", "North RunningRabbit", 40, 46);
    view.defPieceSvg("SouthTenaciousFalcon", "South TenaciousFalcon", 40, 46);
    view.defPieceSvg("NorthTenaciousFalcon", "North TenaciousFalcon", 40, 46);
    view.defPieceSvg("SouthBearsEyes", "South BearsEyes", 40, 46);
    view.defPieceSvg("NorthBearsEyes", "North BearsEyes", 40, 46);
    view.defPieceSvg("SouthRoamingBoar", "South RoamingBoar", 40, 46);
    view.defPieceSvg("NorthRoamingBoar", "North RoamingBoar", 40, 46);
    view.defPieceSvg("SouthRaidingFalcon", "South RaidingFalcon", 40, 46);
    view.defPieceSvg("NorthRaidingFalcon", "North RaidingFalcon", 40, 46);
    view.defPieceSvg("SouthGlidingSwallow", "South GlidingSwallow", 40, 46);
    view.defPieceSvg("NorthGlidingSwallow", "North GlidingSwallow", 40, 46);
    view.defPieceSvg("SouthHeavenlyHorse", "South HeavenlyHorse", 40, 46);
    view.defPieceSvg("NorthHeavenlyHorse", "North HeavenlyHorse", 40, 46);
    view.defPieceSvg("SouthPloddingOx", "South PloddingOx", 40, 46);
    view.defPieceSvg("NorthPloddingOx", "North PloddingOx", 40, 46);
    view.defPieceSvg("SouthGoldenBird", "South GoldenBird", 40, 46);
    view.defPieceSvg("NorthGoldenBird", "North GoldenBird", 40, 46);
 
    view.defPosition("X11", 15, 17, 48, 48);
    view.defPosition("Y11", 63, 17, 48, 48);
    view.defPosition("M11", 111, 17, 48, 48);
    view.defPosition("a11", 159, 17, 48, 48);
    view.defPosition("b11", 207, 17, 48, 48);
    view.defPosition("c11", 255, 17, 48, 48);
    view.defPosition("d11", 303, 17, 48, 48);
    view.defPosition("e11", 351, 17, 48, 48);
    view.defPosition("f11", 399, 17, 48, 48);
    view.defPosition("g11", 447, 17, 48, 48);
    view.defPosition("h11", 495, 17, 48, 48);
    view.defPosition("i11", 543, 17, 48, 48);
    view.defPosition("j11", 591, 17, 48, 48);
    view.defPosition("k11", 639, 17, 48, 48);
    view.defPosition("N11", 687, 17, 48, 48);
    view.defPosition("Z11", 735, 17, 48, 48);
    view.defPosition("T11", 783, 17, 48, 48);
    view.defPosition("X10", 15, 65, 48, 48);
    view.defPosition("Y10", 63, 65, 48, 48);
    view.defPosition("M10", 111, 65, 48, 48);
    view.defPosition("a10", 159, 65, 48, 48);
    view.defPosition("b10", 207, 65, 48, 48);
    view.defPosition("c10", 255, 65, 48, 48);
    view.defPosition("d10", 303, 65, 48, 48);
    view.defPosition("e10", 351, 65, 48, 48);
    view.defPosition("f10", 399, 65, 48, 48);
    view.defPosition("g10", 447, 65, 48, 48);
    view.defPosition("h10", 495, 65, 48, 48);
    view.defPosition("i10", 543, 65, 48, 48);
    view.defPosition("j10", 591, 65, 48, 48);
    view.defPosition("k10", 639, 65, 48, 48);
    view.defPosition("N10", 687, 65, 48, 48);
    view.defPosition("Z10", 735, 65, 48, 48);
    view.defPosition("T10", 783, 65, 48, 48);
    view.defPosition("X9", 15, 113, 48, 48);
    view.defPosition("Y9", 63, 113, 48, 48);
    view.defPosition("M9", 111, 113, 48, 48);
    view.defPosition("a9", 159, 113, 48, 48);
    view.defPosition("b9", 207, 113, 48, 48);
    view.defPosition("c9", 255, 113, 48, 48);
    view.defPosition("d9", 303, 113, 48, 48);
    view.defPosition("e9", 351, 113, 48, 48);
    view.defPosition("f9", 399, 113, 48, 48);
    view.defPosition("g9", 447, 113, 48, 48);
    view.defPosition("h9", 495, 113, 48, 48);
    view.defPosition("i9", 543, 113, 48, 48);
    view.defPosition("j9", 591, 113, 48, 48);
    view.defPosition("k9", 639, 113, 48, 48);
    view.defPosition("N9", 687, 113, 48, 48);
    view.defPosition("Z9", 735, 113, 48, 48);
    view.defPosition("T9", 783, 113, 48, 48);
    view.defPosition("X8", 15, 161, 48, 48);
    view.defPosition("Y8", 63, 161, 48, 48);
    view.defPosition("M8", 111, 161, 48, 48);
    view.defPosition("a8", 159, 161, 48, 48);
    view.defPosition("b8", 207, 161, 48, 48);
    view.defPosition("c8", 255, 161, 48, 48);
    view.defPosition("d8", 303, 161, 48, 48);
    view.defPosition("e8", 351, 161, 48, 48);
    view.defPosition("f8", 399, 161, 48, 48);
    view.defPosition("g8", 447, 161, 48, 48);
    view.defPosition("h8", 495, 161, 48, 48);
    view.defPosition("i8", 543, 161, 48, 48);
    view.defPosition("j8", 591, 161, 48, 48);
    view.defPosition("k8", 639, 161, 48, 48);
    view.defPosition("N8", 687, 161, 48, 48);
    view.defPosition("Z8", 735, 161, 48, 48);
    view.defPosition("T8", 783, 161, 48, 48);
    view.defPosition("X7", 15, 209, 48, 48);
    view.defPosition("Y7", 63, 209, 48, 48);
    view.defPosition("M7", 111, 209, 48, 48);
    view.defPosition("a7", 159, 209, 48, 48);
    view.defPosition("b7", 207, 209, 48, 48);
    view.defPosition("c7", 255, 209, 48, 48);
    view.defPosition("d7", 303, 209, 48, 48);
    view.defPosition("e7", 351, 209, 48, 48);
    view.defPosition("f7", 399, 209, 48, 48);
    view.defPosition("g7", 447, 209, 48, 48);
    view.defPosition("h7", 495, 209, 48, 48);
    view.defPosition("i7", 543, 209, 48, 48);
    view.defPosition("j7", 591, 209, 48, 48);
    view.defPosition("k7", 639, 209, 48, 48);
    view.defPosition("N7", 687, 209, 48, 48);
    view.defPosition("Z7", 735, 209, 48, 48);
    view.defPosition("T7", 783, 209, 48, 48);
    view.defPosition("X6", 15, 257, 48, 48);
    view.defPosition("Y6", 63, 257, 48, 48);
    view.defPosition("M6", 111, 257, 48, 48);
    view.defPosition("a6", 159, 257, 48, 48);
    view.defPosition("b6", 207, 257, 48, 48);
    view.defPosition("c6", 255, 257, 48, 48);
    view.defPosition("d6", 303, 257, 48, 48);
    view.defPosition("e6", 351, 257, 48, 48);
    view.defPosition("f6", 399, 257, 48, 48);
    view.defPosition("g6", 447, 257, 48, 48);
    view.defPosition("h6", 495, 257, 48, 48);
    view.defPosition("i6", 543, 257, 48, 48);
    view.defPosition("j6", 591, 257, 48, 48);
    view.defPosition("k6", 639, 257, 48, 48);
    view.defPosition("N6", 687, 257, 48, 48);
    view.defPosition("Z6", 735, 257, 48, 48);
    view.defPosition("T6", 783, 257, 48, 48);
    view.defPosition("X5", 15, 305, 48, 48);
    view.defPosition("Y5", 63, 305, 48, 48);
    view.defPosition("M5", 111, 305, 48, 48);
    view.defPosition("a5", 159, 305, 48, 48);
    view.defPosition("b5", 207, 305, 48, 48);
    view.defPosition("c5", 255, 305, 48, 48);
    view.defPosition("d5", 303, 305, 48, 48);
    view.defPosition("e5", 351, 305, 48, 48);
    view.defPosition("f5", 399, 305, 48, 48);
    view.defPosition("g5", 447, 305, 48, 48);
    view.defPosition("h5", 495, 305, 48, 48);
    view.defPosition("i5", 543, 305, 48, 48);
    view.defPosition("j5", 591, 305, 48, 48);
    view.defPosition("k5", 639, 305, 48, 48);
    view.defPosition("N5", 687, 305, 48, 48);
    view.defPosition("Z5", 735, 305, 48, 48);
    view.defPosition("T5", 783, 305, 48, 48);
    view.defPosition("X4", 15, 352, 48, 48);
    view.defPosition("Y4", 63, 352, 48, 48);
    view.defPosition("M4", 111, 352, 48, 48);
    view.defPosition("a4", 159, 352, 48, 48);
    view.defPosition("b4", 207, 352, 48, 48);
    view.defPosition("c4", 255, 352, 48, 48);
    view.defPosition("d4", 303, 352, 48, 48);
    view.defPosition("e4", 351, 352, 48, 48);
    view.defPosition("f4", 399, 352, 48, 48);
    view.defPosition("g4", 447, 352, 48, 48);
    view.defPosition("h4", 495, 352, 48, 48);
    view.defPosition("i4", 543, 352, 48, 48);
    view.defPosition("j4", 591, 352, 48, 48);
    view.defPosition("k4", 639, 352, 48, 48);
    view.defPosition("N4", 687, 352, 48, 48);
    view.defPosition("Z4", 735, 352, 48, 48);
    view.defPosition("T4", 783, 352, 48, 48);
    view.defPosition("X3", 15, 400, 48, 48);
    view.defPosition("Y3", 63, 400, 48, 48);
    view.defPosition("M3", 111, 400, 48, 48);
    view.defPosition("a3", 159, 400, 48, 48);
    view.defPosition("b3", 207, 400, 48, 48);
    view.defPosition("c3", 255, 400, 48, 48);
    view.defPosition("d3", 303, 400, 48, 48);
    view.defPosition("e3", 351, 400, 48, 48);
    view.defPosition("f3", 399, 400, 48, 48);
    view.defPosition("g3", 447, 400, 48, 48);
    view.defPosition("h3", 495, 400, 48, 48);
    view.defPosition("i3", 543, 400, 48, 48);
    view.defPosition("j3", 591, 400, 48, 48);
    view.defPosition("k3", 639, 400, 48, 48);
    view.defPosition("N3", 687, 400, 48, 48);
    view.defPosition("Z3", 735, 400, 48, 48);
    view.defPosition("T3", 783, 400, 48, 48);
    view.defPosition("X2", 15, 446, 48, 48);
    view.defPosition("Y2", 63, 446, 48, 48);
    view.defPosition("M2", 111, 446, 48, 48);
    view.defPosition("a2", 159, 446, 48, 48);
    view.defPosition("b2", 207, 446, 48, 48);
    view.defPosition("c2", 255, 446, 48, 48);
    view.defPosition("d2", 303, 446, 48, 48);
    view.defPosition("e2", 351, 446, 48, 48);
    view.defPosition("f2", 399, 446, 48, 48);
    view.defPosition("g2", 447, 446, 48, 48);
    view.defPosition("h2", 495, 446, 48, 48);
    view.defPosition("i2", 543, 446, 48, 48);
    view.defPosition("j2", 591, 446, 48, 48);
    view.defPosition("k2", 639, 446, 48, 48);
    view.defPosition("N2", 687, 446, 48, 48);
    view.defPosition("Z2", 735, 446, 48, 48);
    view.defPosition("T2", 783, 446, 48, 48);
    view.defPosition("X1", 15, 494, 48, 48);
    view.defPosition("Y1", 63, 494, 48, 48);
    view.defPosition("M1", 111, 494, 48, 48);
    view.defPosition("a1", 159, 494, 48, 48);
    view.defPosition("b1", 207, 494, 48, 48);
    view.defPosition("c1", 255, 494, 48, 48);
    view.defPosition("d1", 303, 494, 48, 48);
    view.defPosition("e1", 351, 494, 48, 48);
    view.defPosition("f1", 399, 494, 48, 48);
    view.defPosition("g1", 447, 494, 48, 48);
    view.defPosition("h1", 495, 494, 48, 48);
    view.defPosition("i1", 543, 494, 48, 48);
    view.defPosition("j1", 591, 494, 48, 48);
    view.defPosition("k1", 639, 494, 48, 48);
    view.defPosition("N1", 687, 494, 48, 48);
    view.defPosition("Z1", 735, 494, 48, 48);
    view.defPosition("T1", 783, 494, 48, 48);
}
