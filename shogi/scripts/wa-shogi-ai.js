"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;
Dagaz.Model.WIDTH         = 11;
Dagaz.Model.HEIGHT        = 11;
Dagaz.AI.RESERVE_SIZE     = 2;
Dagaz.AI.STALMATED        = true;
Dagaz.AI.USE_HIST_TABLE   = false;
Dagaz.AI.NO_DROPS         = false;

Dagaz.AI.PIECE_MASK       = 0x3F;
Dagaz.AI.TYPE_MASK        = 0x1F;
Dagaz.AI.PLAYERS_MASK     = 0x60;
Dagaz.AI.COUNTER_SIZE     = 4;
Dagaz.AI.TYPE_SIZE        = 5;
Dagaz.AI.VECTORDELTA_SIZE = 512;

Dagaz.AI.colorBlack       = 0x40;
Dagaz.AI.colorWhite       = 0x20;

Dagaz.AI.WHITE_PROM       = 0x40;
Dagaz.AI.BLACK_PROM       = 0xA0;

var pieceEmpty            = 0x00;
var pieceSparrowPawn      = 0x01;
var pieceSwoopingOwl      = 0x02;
var pieceStruttingCrow    = 0x03;
var pieceClimbingMonkey   = 0x04;
var pieceFlyingGoose      = 0x05;
var pieceFlyingCock       = 0x06;
var pieceBlindDog         = 0x07;
var pieceViolentStag      = 0x08;
var pieceViolentStagP     = 0x09;
var pieceViolentWolf      = 0x0A;
var pieceViolentWolfP     = 0x0B;
var pieceGoldenBird       = 0x0C;
var pieceRoamingBoar      = 0x0D;
var pieceHeavenlyHorse    = 0x0E;
var pieceBearsEyes        = 0x0F;
var piecePloddingOx       = 0x10;
var pieceTreacherousFox   = 0x11;
var pieceTreacherousFoxP  = 0x12;
var pieceOxcart           = 0x13;
var pieceLiberatedHorse   = 0x14;
var pieceRunningRabbit    = 0x15;
var pieceSwallowsWings    = 0x16;
var pieceSwallowsWingsP   = 0x17;
var pieceRaidingFalcon    = 0x18;
var pieceCloudEagle       = 0x19;
var pieceCloudEagleP      = 0x1A;
var pieceFlyingFalcon     = 0x1B;
var pieceFlyingFalconP    = 0x1C;
var pieceGlidingSwallow   = 0x1D;
var pieceTenaciousFalcon  = 0x1E;
var pieceCraneKing        = 0x1F;
var pieceNo               = 0x80;

const moveflagPromotion   = 0x10000000;

var g_moveUndoStack       = new Array();

const RESERVE_SIZE        = 100;
var g_reserve = new Array(RESERVE_SIZE);

// Evaulation variables
var g_mobUnit;

var materialTable = [0, 100, 300, 310, 400, 410, 410, 500, 510, 510, 600, 600, 600, 700, 700, 800, 800, 900, 900, 1000, 1200, 1500, 2000, 2000, 2400, 2800, 2800, 4100, 4100, 5000, 6200, 600000];
var inHandTable   = [0, 200, 600, 620, 800, 820, 820, 1000, 1020, 0, 1200, 0, 0, 0, 0, 0, 0, 1800, 0, 2000, 2400, 3000, 4000, 0, 0, 5600, 0, 8200, 0, 0, 0, 0];

var g_seeValues = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 12, 13, 50,
                   0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 12, 13, 50];

Dagaz.AI.pieceAdj = [
[    0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0
]];

var pieceSquareAdj = new Array(32);
var flipTable = new Array(256);

var g_vectorDelta   = new Array(Dagaz.AI.VECTORDELTA_SIZE);

var g_deltaOffset   = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 2, 2, 4, 6, 6, 1, 1, 0, 2, 0];
var g_pawnDeltas    = [-16];
var g_owlDeltas     = [-16, 15, 17];
var g_monkeyDeltas  = [-17, -16, -15, 16];
var g_cockDeltas    = [-17, -15, -1, 1];
var g_dogDeltas     = [-17, -15, -1, 1, 16];
var g_stagDeltas    = [-17, -16, -15, 15, 17];
var g_wolfDeltas    = [-17, -16, -15, -1, 1, 16];
var g_boarDeltas    = [-17, -16, -15, -1, 1, 15, 17];
var g_heavyDeltas   = [-33, -31, 31, 33];
var g_kingDeltas    = [-17, -16, -15, -1, 1, 15, 16, 17];
var g_foxDeltas     = [-17, -16, -15, -34, -32, -30, 17, 16, 15, 34, 32, 30];
var g_horseDeltas   = [16, -16];
var g_rabbitDeltas  = [-17, -15, 15, 16, 17, -16];
var g_wingsDeltas   = [16, -16, -1, 1];
var g_raidingDeltas = [-17, -15, -1, 1, -16, 16];
var g_eagleDeltas   = [-17, -15, -1, 1, 15, 17, -16, 16];
var g_flyingDeltas  = [-16, -17, -15, 15, 17];
var g_glidingDeltas = [-16, -1, 1, 16];
var g_falconDeltas  = [-1, 1, -17, -16, -15, 15, 16, 17];

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

function FormatReserve(square) {
    var letters = ['X', 'Y', 'Z', 'T'];
    return letters[square % (2 * Dagaz.AI.RESERVE_SIZE)] + (Dagaz.Model.HEIGHT - ((square / (2 * Dagaz.AI.RESERVE_SIZE)) | 0));
}

Dagaz.AI.FormatMove = function(move) {
    var result;
    var from = move & 0xFF;
    if (from != 0) {
        result = FormatSquare(from) + FormatSquare((move >> 8) & 0xFF);
    } else {
        from = (move >> 16) & 0xFF;
        result = FormatReserve(from) + FormatSquare((move >> 8) & 0xFF);
    }
    return result;
}

function Mobility(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var enemy = color ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite
    var mobUnit = color ? g_mobUnit[0] : g_mobUnit[1];

    // SparrowPawn mobility
    mob = 0;
    pieceIdx = (color | pieceSparrowPawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // SwoopingOwl mobility
    mob = 0;
    pieceIdx = (color | pieceSwoopingOwl) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // StruttingCrow mobility
    mob = 0;
    pieceIdx = (color | pieceStruttingCrow) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // ClimbingMonkey mobility
    mob = 0;
    pieceIdx = (color | pieceClimbingMonkey) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // FlyingGoose mobility
    mob = 0;
    pieceIdx = (color | pieceFlyingGoose) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // FlyingCock mobility
    mob = 0;
    pieceIdx = (color | pieceFlyingCock) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // BlindDog mobility
    mob = 0;
    pieceIdx = (color | pieceBlindDog) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 20 * mob;

    // ViolentStag mobility
    mob = 0;
    pieceIdx = (color | pieceViolentStag) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // ViolentStagP mobility
    mob = 0;
    pieceIdx = (color | pieceViolentStagP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // ViolentWolf mobility
    mob = 0;
    pieceIdx = (color | pieceViolentWolf) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // ViolentWolfP mobility
    mob = 0;
    pieceIdx = (color | pieceViolentWolfP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // GoldenBird mobility
    mob = 0;
    pieceIdx = (color | pieceGoldenBird) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 17]];
            mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 17]];
            mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // RoamingBoar mobility
    mob = 0;
    pieceIdx = (color | pieceRoamingBoar) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        } else {
            mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        }
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // HeavenlyHorse mobility
    mob = 0;
    pieceIdx = (color | pieceHeavenlyHorse) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from - 31]];
        mob += mobUnit[Dagaz.AI.g_board[from - 33]];
        mob += mobUnit[Dagaz.AI.g_board[from + 31]];
        mob += mobUnit[Dagaz.AI.g_board[from + 33]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // BearsEyes mobility
    mob = 0;
    pieceIdx = (color | pieceBearsEyes) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // PloddingOx mobility
    mob = 0;
    pieceIdx = (color | piecePloddingOx) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        mob += mobUnit[Dagaz.AI.g_board[from - 1]];
        mob += mobUnit[Dagaz.AI.g_board[from + 1]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // TreacherousFox mobility
    mob = 0;
    pieceIdx = (color | pieceTreacherousFox) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        mob += mobUnit[Dagaz.AI.g_board[from - 32]];
        mob += mobUnit[Dagaz.AI.g_board[from + 32]];
        mob += mobUnit[Dagaz.AI.g_board[from - 34]];
        mob += mobUnit[Dagaz.AI.g_board[from + 34]];
        mob += mobUnit[Dagaz.AI.g_board[from - 30]];
        mob += mobUnit[Dagaz.AI.g_board[from + 30]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 30 * mob;

    // TreacherousFoxP mobility
    mob = 0;
    pieceIdx = (color | pieceTreacherousFoxP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from - 16]];
        mob += mobUnit[Dagaz.AI.g_board[from + 16]];
        mob += mobUnit[Dagaz.AI.g_board[from - 17]];
        mob += mobUnit[Dagaz.AI.g_board[from + 17]];
        mob += mobUnit[Dagaz.AI.g_board[from - 15]];
        mob += mobUnit[Dagaz.AI.g_board[from + 15]];
        mob += mobUnit[Dagaz.AI.g_board[from - 32]];
        mob += mobUnit[Dagaz.AI.g_board[from + 32]];
        mob += mobUnit[Dagaz.AI.g_board[from - 34]];
        mob += mobUnit[Dagaz.AI.g_board[from + 34]];
        mob += mobUnit[Dagaz.AI.g_board[from - 30]];
        mob += mobUnit[Dagaz.AI.g_board[from + 30]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 30 * mob;

    // Oxcart mobility
    mob = 0;
    pieceIdx = (color | pieceOxcart) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 35 * mob;

    // LiberatedHorse mobility
    mob = 0;
    pieceIdx = (color | pieceLiberatedHorse) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from + 16; if (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from - 16; if (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 35 * mob;

    // RunningRabbit mobility
    mob = 0;
    pieceIdx = (color | pieceRunningRabbit) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from + 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from - 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        to = from - 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 35 * mob;

    // SwallowsWings mobility
    mob = 0;
    pieceIdx = (color | pieceSwallowsWings) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1; while (Dagaz.AI.g_board[to] == 0) { to--; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1; while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 35 * mob;

    // SwallowsWingsP mobility
    mob = 0;
    pieceIdx = (color | pieceSwallowsWingsP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1; while (Dagaz.AI.g_board[to] == 0) { to--; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1; while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 35 * mob;

    // RaidingFalcon mobility
    mob = 0;
    pieceIdx = (color | pieceRaidingFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            to = from - 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from - 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            to = from + 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
            to = from + 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // CloudEagle mobility
    mob = -2;
    pieceIdx = (color | pieceCloudEagle) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // CloudEagleP mobility
    mob = -2;
    pieceIdx = (color | pieceCloudEagleP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // FlyingFalcon mobility
    mob = -2;
    pieceIdx = (color | pieceFlyingFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            to = from - 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            to = from + 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // FlyingFalconP mobility
    mob = -2;
    pieceIdx = (color | pieceFlyingFalconP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == Dagaz.AI.colorWhite) {
            to = from - 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        } else {
            to = from + 16; if (Dagaz.AI.g_board[to] & enemy) mob++;
        }
        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // GlidingSwallow mobility
    mob = -2;
    pieceIdx = (color | pieceGlidingSwallow) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 1; while (Dagaz.AI.g_board[to] == 0) { to --; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1; while (Dagaz.AI.g_board[to] == 0) { to ++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 45 * mob;

    // TenaciousFalcon mobility
    mob = -3;
    pieceIdx = (color | pieceTenaciousFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1; if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 45 * mob;

    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var mobility = Mobility(Dagaz.AI.colorWhite) - Mobility(0);
    if (Dagaz.AI.g_toMove == 0) {
        // Black
        curEval -= mobility;
    }
    else {
        curEval += mobility;
    }
    return curEval;
}

Dagaz.AI.ScoreMove = function(move) {
    var moveTo = (move >> 8) & 0xFF;
    var captured = Dagaz.AI.g_board[moveTo] & Dagaz.AI.TYPE_MASK;
    var from = move & 0xFF;
    var piece;
    if (from != 0) {
        piece = Dagaz.AI.g_board[from];
    } else {
        var slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
    }
    var score;
    if (captured != pieceEmpty) {
        var pieceType = piece & Dagaz.AI.TYPE_MASK;
        score = (captured << 5) - pieceType;
    } /*else {
        score = Dagaz.AI.historyTable[piece & Dagaz.AI.PIECE_MASK][moveTo];
    }*/
    return score;
}

Dagaz.AI.IsHashMoveValid = function(hashMove) {
    return false;
}

Dagaz.AI.isNoZugzwang = function() {
    return true;
}

function MakeTable(table) {
    var result = new Array(256);
    for (var i = 0; i < 256; i++) {
        result[i] = 0;
    }
    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
        for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            result[MakeSquare(row, col)] = table[row * Dagaz.Model.WIDTH + col];
        }
    }
    return result;
}

function onBoard(target) {
  if (target < 0) return false;
  if ((target & 0xF0) >= 0xB0) return false;
  if ((target & 0x0F) >= 0x0B) return false;
  return true;
}

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {

  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = MakeSquare(row, col);
            flipTable[square] = MakeSquare((Dagaz.Model.HEIGHT - 1) - row, col);
       }
  }

  pieceSquareAdj[pieceEmpty]           = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceSparrowPawn]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceSwoopingOwl]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceStruttingCrow]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceClimbingMonkey]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceFlyingGoose]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceFlyingCock]      = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceBlindDog]        = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceViolentStag]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceViolentStagP]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceViolentWolf]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceViolentWolfP]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceGoldenBird]      = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceRoamingBoar]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceHeavenlyHorse]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceBearsEyes]       = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[piecePloddingOx]      = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceTreacherousFox]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceTreacherousFoxP] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceOxcart]          = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceLiberatedHorse]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceRunningRabbit]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceSwallowsWings]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceSwallowsWingsP]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceRaidingFalcon]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceCloudEagle]      = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceCloudEagleP]     = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceFlyingFalcon]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceFlyingFalconP]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceGlidingSwallow]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceTenaciousFalcon] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceCraneKing]       = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);

  var pieceDeltas = [[], g_pawnDeltas, g_owlDeltas, g_owlDeltas, g_monkeyDeltas, g_monkeyDeltas, g_cockDeltas, g_dogDeltas, g_stagDeltas, g_stagDeltas, g_wolfDeltas, g_wolfDeltas, g_wolfDeltas, g_boarDeltas, g_heavyDeltas, g_kingDeltas, g_kingDeltas, g_foxDeltas, g_foxDeltas, g_pawnDeltas, g_horseDeltas, g_rabbitDeltas, g_wingsDeltas, g_wingsDeltas, g_raidingDeltas, g_eagleDeltas, g_eagleDeltas, g_flyingDeltas, g_flyingDeltas, g_glidingDeltas, g_falconDeltas, g_kingDeltas];

  for (var i = 0; i < Dagaz.AI.VECTORDELTA_SIZE; i++) {
      g_vectorDelta[i] = new Object();
      g_vectorDelta[i].delta = 0;
      g_vectorDelta[i].pieceMask = new Array(2);
      g_vectorDelta[i].pieceMask[0] = 0;
      g_vectorDelta[i].pieceMask[1] = 0;
  }

  // Initialize the vector delta table    
  for (var row = 0; row < (Dagaz.Model.HEIGHT << 4); row += 0x10) {
      for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
           var square = row | col;
           for (var i = pieceSparrowPawn; i <= pieceCraneKing; i++) {
                for (var dir = 0; dir < pieceDeltas[i].length; dir++) {
                     var delta = pieceDeltas[i][dir];
                     var target = square + delta;
                     var cnt = 1;
                     while (onBoard(target)) {
                         var index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
                         g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << i);
                         var flip = -1;
                         if (square < target) flip = 1;
                         if ((square & 0xF0) == (target & 0xF0)) {
                             // On the same row
                             g_vectorDelta[index].delta = flip * 1;
                         } else if ((square & 0x0F) == (target & 0x0F)) {
                             // On the same column
                             g_vectorDelta[index].delta = flip * 16;
                         } else if ((square % 15) == (target % 15)) {
                             g_vectorDelta[index].delta = flip * 15;
                         } else if ((square % 17) == (target % 17)) {
                             g_vectorDelta[index].delta = flip * 17;
                         }
                         if (i == pieceCraneKing) break;
                         if (i < pieceOxcart) break;
                         if (dir < g_deltaOffset[i]) break;
                         if (i == pieceHeavenlyHorse) {
                             g_vectorDelta[index].delta = pieceDeltas[i][dir];
                             break;
                         }
                         if ((i == pieceLiberatedHorse) && (cnt == 2) && (dir == 0)) break;
                         if ((_.indexOf([pieceCloudEagle, pieceCloudEagleP], i) >= 0) && (cnt == 3) && (dir < 2)) break
                         target += delta;
                         cnt++;
                     }
                     delta = -delta;
                     target = square + delta;
                     cnt = 1;
                     while (onBoard(target)) {
                         var index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
                         g_vectorDelta[index].pieceMask[0] |= (1 << i);
                         var flip = -1;
                         if (square < target) flip = 1;
                         if ((square & 0xF0) == (target & 0xF0)) {
                             // On the same row
                             g_vectorDelta[index].delta = flip * 1;
                         } else if ((square & 0x0F) == (target & 0x0F)) {
                             // On the same column
                             g_vectorDelta[index].delta = flip * 16;
                         } else if ((square % 15) == (target % 15)) {
                             g_vectorDelta[index].delta = flip * 15;
                         } else if ((square % 17) == (target % 17)) {
                             g_vectorDelta[index].delta = flip * 17;
                         }
                         if (i == pieceCraneKing) break;
                         if (i < pieceOxcart) break;
                         if (dir < g_deltaOffset[i]) break;
                         if (i == pieceHeavenlyHorse) {
                             g_vectorDelta[index].delta = pieceDeltas[i][dir];
                             break;
                         }
                         if ((i == pieceLiberatedHorse) && (cnt == 2) && (dir == 0)) break;
                         if ((_.indexOf([pieceCloudEagle, pieceCloudEagleP], i) >= 0) && (cnt == 3) && (dir < 2)) break
                         target += delta;
                         cnt++;
                     }
                }
           }
      }
  }

  InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (var i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        var enemy = i == 0 ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
        var friend = i == 0 ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][pieceNo] = 0;
        g_mobUnit[i][enemy  | pieceSparrowPawn]     = 1;
        g_mobUnit[i][enemy  | pieceSwoopingOwl]     = 1;
        g_mobUnit[i][enemy  | pieceStruttingCrow]   = 1;
        g_mobUnit[i][enemy  | pieceClimbingMonkey]  = 1;
        g_mobUnit[i][enemy  | pieceFlyingGoose]     = 1;
        g_mobUnit[i][enemy  | pieceFlyingCock]      = 1;
        g_mobUnit[i][enemy  | pieceBlindDog]        = 1;
        g_mobUnit[i][enemy  | pieceViolentStag]     = 2;
        g_mobUnit[i][enemy  | pieceViolentStagP]    = 2;
        g_mobUnit[i][enemy  | pieceViolentWolf]     = 2;
        g_mobUnit[i][enemy  | pieceViolentWolfP]    = 2;
        g_mobUnit[i][enemy  | pieceGoldenBird]      = 2;
        g_mobUnit[i][enemy  | pieceRoamingBoar]     = 2;
        g_mobUnit[i][enemy  | pieceHeavenlyHorse]   = 3;
        g_mobUnit[i][enemy  | pieceBearsEyes]       = 3;
        g_mobUnit[i][enemy  | piecePloddingOx]      = 3;
        g_mobUnit[i][enemy  | pieceTreacherousFox]  = 4;
        g_mobUnit[i][enemy  | pieceTreacherousFoxP] = 4;
        g_mobUnit[i][enemy  | pieceOxcart]          = 4;
        g_mobUnit[i][enemy  | pieceLiberatedHorse]  = 4;
        g_mobUnit[i][enemy  | pieceRunningRabbit]   = 4;
        g_mobUnit[i][enemy  | pieceSwallowsWings]   = 4;
        g_mobUnit[i][enemy  | pieceSwallowsWingsP]  = 4;
        g_mobUnit[i][enemy  | pieceRaidingFalcon]   = 4;
        g_mobUnit[i][enemy  | pieceCloudEagle]      = 5;
        g_mobUnit[i][enemy  | pieceCloudEagleP]     = 5;
        g_mobUnit[i][enemy  | pieceFlyingFalcon]    = 5;
        g_mobUnit[i][enemy  | pieceFlyingFalconP]   = 5;
        g_mobUnit[i][enemy  | pieceGlidingSwallow]  = 5;
        g_mobUnit[i][enemy  | pieceTenaciousFalcon] = 6;
        g_mobUnit[i][enemy  | pieceCraneKing]       = 9;
        g_mobUnit[i][friend | pieceSparrowPawn]     = 0;
        g_mobUnit[i][friend | pieceSwoopingOwl]     = 0;
        g_mobUnit[i][friend | pieceStruttingCrow]   = 0;
        g_mobUnit[i][friend | pieceClimbingMonkey]  = 0;
        g_mobUnit[i][friend | pieceFlyingGoose]     = 0;
        g_mobUnit[i][friend | pieceFlyingCock]      = 0;
        g_mobUnit[i][friend | pieceBlindDog]        = 0;
        g_mobUnit[i][friend | pieceViolentStag]     = 0;
        g_mobUnit[i][friend | pieceViolentStagP]    = 0;
        g_mobUnit[i][friend | pieceViolentWolf]     = 0;
        g_mobUnit[i][friend | pieceViolentWolfP]    = 0;
        g_mobUnit[i][friend | pieceGoldenBird]      = 0;
        g_mobUnit[i][friend | pieceRoamingBoar]     = 0;
        g_mobUnit[i][friend | pieceHeavenlyHorse]   = 0;
        g_mobUnit[i][friend | pieceBearsEyes]       = 0;
        g_mobUnit[i][friend | piecePloddingOx]      = 0;
        g_mobUnit[i][friend | pieceTreacherousFox]  = 0;
        g_mobUnit[i][friend | pieceTreacherousFoxP] = 0;
        g_mobUnit[i][friend | pieceOxcart]          = 0;
        g_mobUnit[i][friend | pieceLiberatedHorse]  = 0;
        g_mobUnit[i][friend | pieceRunningRabbit]   = 0;
        g_mobUnit[i][friend | pieceSwallowsWings]   = 0;
        g_mobUnit[i][friend | pieceSwallowsWingsP]  = 0;
        g_mobUnit[i][friend | pieceRaidingFalcon]   = 0;
        g_mobUnit[i][friend | pieceCloudEagle]      = 0;
        g_mobUnit[i][friend | pieceCloudEagleP]     = 0;
        g_mobUnit[i][friend | pieceFlyingFalcon]    = 0;
        g_mobUnit[i][friend | pieceFlyingFalconP]   = 0;
        g_mobUnit[i][friend | pieceGlidingSwallow]  = 0;
        g_mobUnit[i][friend | pieceTenaciousFalcon] = 0;
        g_mobUnit[i][friend | pieceCraneKing]       = 0;
    }
}

var SetHash = Dagaz.AI.SetHash;

Dagaz.AI.SetHash = function() {
    var result = SetHash();
    for (var i = 0; i < RESERVE_SIZE; i++) {
        var piece = g_reserve[i];
        if ((piece & Dagaz.AI.PLAYERS_MASK) && (piece & Dagaz.AI.TYPE_MASK)) {
            result.hashKeyLow ^= Dagaz.AI.g_zobristLow[i][piece & Dagaz.AI.PIECE_MASK];
            result.hashKeyHigh ^= Dagaz.AI.g_zobristHigh[i][piece & Dagaz.AI.PIECE_MASK];
        }
    }
    return result;
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split('-');
    
    for (var i = 0; i < 256; i++) 
        Dagaz.AI.g_board[i] = pieceNo;

    for (var i = 0; i < RESERVE_SIZE; i++) 
        g_reserve[i] = pieceEmpty;
    
    var row = 0;
    var col = 0;

    var pieces = chunks[0];
    for (var i = 0; i < pieces.length; i++) {
        var c = pieces.charAt(i);
        if (c == '/') {
            row++;
            col = 0;
        } else {
            if (c >= '0' && c <= '9') {
                for (var j = 0; j < parseInt(c); j++) {
                    Dagaz.AI.g_board[MakeSquare(row, col)] = 0;
                    col++;
                }
            } else {
                var isBlack = (c >= 'a' && c <= 'z') || (_.indexOf(['$', ')', ']', '}', '^'], c) >= 0);
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (c >= 'A' && c <= 'Z') 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= pieceSparrowPawn;
                        break;
                    case 'o':
                        piece |= pieceSwoopingOwl;
                        break;
                    case 'r':
                        piece |= pieceStruttingCrow;
                        break;
                    case 'm':
                        piece |= pieceClimbingMonkey;
                        break;
                    case 'g':
                        piece |= pieceFlyingGoose;
                        break;
                    case 'c':
                        piece |= pieceFlyingCock;
                        break;
                    case 'b':
                        piece |= pieceBlindDog;
                        break;
                    case 's':
                        piece |= pieceViolentStag;
                        break;
                    case 't':
                        piece |= pieceViolentStagP;
                        break;
                    case 'w':
                        piece |= pieceViolentWolf;
                        break;
                    case 'v':
                        piece |= pieceViolentWolfP;
                        break;
                    case '~':
                        piece |= pieceGoldenBird;
                        break;
                    case '^':
                        piece |= pieceGoldenBird;
                        break;
                    case 'z':
                        piece |= pieceRoamingBoar;
                        break;
                    case '[':
                        piece |= pieceHeavenlyHorse;
                        break;
                    case ']':
                        piece |= pieceHeavenlyHorse;
                        break;
                    case 'y':
                        piece |= pieceBearsEyes;
                        break;
                    case '{':
                        piece |= piecePloddingOx;
                        break;
                    case '}':
                        piece |= piecePloddingOx;
                        break;
                    case 'j':
                        piece |= pieceTreacherousFox;
                        break;
                    case 'n':
                        piece |= pieceTreacherousFoxP;
                        break;
                    case 'x':
                        piece |= pieceOxcart;
                        break;
                    case 'h':
                        piece |= pieceLiberatedHorse;
                        break;
                    case 'u':
                        piece |= pieceRunningRabbit;
                        break;
                    case 'l':
                        piece |= pieceSwallowsWings;
                        break;
                    case 'a':
                        piece |= pieceSwallowsWingsP;
                        break;
                    case '!':
                        piece |= pieceRaidingFalcon;
                        break;
                    case '$':
                        piece |= pieceRaidingFalcon;
                        break;
                    case 'e':
                        piece |= pieceCloudEagle;
                        break;
                    case 'i':
                        piece |= pieceCloudEagleP;
                        break;
                    case 'f':
                        piece |= pieceFlyingFalcon;
                        break;
                    case 'd':
                        piece |= pieceFlyingFalconP;
                        break;
                    case '(':
                        piece |= pieceGlidingSwallow;
                        break;
                    case ')':
                        piece |= pieceGlidingSwallow;
                        break;
                    case 'q':
                        piece |= pieceTenaciousFalcon;
                        break;
                    case 'k':
                        piece |= pieceCraneKing;
                        break;
                }
                if (piece & Dagaz.AI.TYPE_MASK) {
                    Dagaz.AI.g_board[MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }
 
    var ix = 0;
    pieces = chunks[1];
    for (var i = 0; i < pieces.length; i++) {
        var c = pieces.charAt(i);
        if (c == '/') continue;
            if (c >= '0' && c <= '9') {
                for (var j = 0; j < parseInt(c); j++) {
                    g_reserve[ix] = pieceEmpty;
                    ix++;
                }
            } else {
                var isBlack = (c >= 'a' && c <= 'z') || (_.indexOf(['!', '$', '(', ')', '[', ']', '{', '}', '~', '^'], c) >= 0);
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (c >= 'A' && c <= 'Z') 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= pieceSparrowPawn;
                        break;
                    case 'o':
                        piece |= pieceSwoopingOwl;
                        break;
                    case 'r':
                        piece |= pieceStruttingCrow;
                        break;
                    case 'm':
                        piece |= pieceClimbingMonkey;
                        break;
                    case 'g':
                        piece |= pieceFlyingGoose;
                        break;
                    case 'c':
                        piece |= pieceFlyingCock;
                        break;
                    case 'b':
                        piece |= pieceBlindDog;
                        break;
                    case 's':
                        piece |= pieceViolentStag;
                        break;
                    case 't':
                        piece |= pieceViolentStagP;
                        break;
                    case 'w':
                        piece |= pieceViolentWolf;
                        break;
                    case 'v':
                        piece |= pieceViolentWolfP;
                        break;
                    case '~':
                        piece |= pieceGoldenBird;
                        break;
                    case '^':
                        piece |= pieceGoldenBird;
                        break;
                    case 'z':
                        piece |= pieceRoamingBoar;
                        break;
                    case '[':
                        piece |= pieceHeavenlyHorse;
                        break;
                    case ']':
                        piece |= pieceHeavenlyHorse;
                        break;
                    case 'y':
                        piece |= pieceBearsEyes;
                        break;
                    case '{':
                        piece |= piecePloddingOx;
                        break;
                    case '}':
                        piece |= piecePloddingOx;
                        break;
                    case 'j':
                        piece |= pieceTreacherousFox;
                        break;
                    case 'n':
                        piece |= pieceTreacherousFoxP;
                        break;
                    case 'x':
                        piece |= pieceOxcart;
                        break;
                    case 'h':
                        piece |= pieceLiberatedHorse;
                        break;
                    case 'u':
                        piece |= pieceRunningRabbit;
                        break;
                    case 'l':
                        piece |= pieceSwallowsWings;
                        break;
                    case 'a':
                        piece |= pieceSwallowsWingsP;
                        break;
                    case '!':
                        piece |= pieceRaidingFalcon;
                        break;
                    case '$':
                        piece |= pieceRaidingFalcon;
                        break;
                    case 'e':
                        piece |= pieceCloudEagle;
                        break;
                    case 'i':
                        piece |= pieceCloudEagleP;
                        break;
                    case 'f':
                        piece |= pieceFlyingFalcon;
                        break;
                    case 'd':
                        piece |= pieceFlyingFalconP;
                        break;
                    case '(':
                        piece |= pieceGlidingSwallow;
                        break;
                    case ')':
                        piece |= pieceGlidingSwallow;
                        break;
                    case 'q':
                        piece |= pieceTenaciousFalcon;
                        break;
                    case 'k':
                        piece |= pieceCraneKing;
                        break;
                }
                if (piece & Dagaz.AI.TYPE_MASK) {
                    g_reserve[ix] = piece;
                }
                ix++;
        }
    }

    Dagaz.AI.InitializePieceList();
    
    Dagaz.AI.g_toMove = chunks[2].charAt(0) == 'w' ? Dagaz.AI.colorWhite : 0;
    var them = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    
    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][flipTable[i]];
            Dagaz.AI.g_baseEval -= materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        }
    }
    for (var i = 0; i < RESERVE_SIZE; i++) {
        if (g_reserve[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += materialTable[g_reserve[i] & Dagaz.AI.TYPE_MASK];
        } else if (g_reserve[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= materialTable[g_reserve[i] & Dagaz.AI.TYPE_MASK];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    Dagaz.AI.g_move50 = 0;
    var kingPos = Dagaz.AI.g_pieceList[(Dagaz.AI.g_toMove | pieceCraneKing) << Dagaz.AI.COUNTER_SIZE];
    Dagaz.AI.g_inCheck = false;
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, them);
    }

    // Check for king capture (invalid FEN)
    kingPos = Dagaz.AI.g_pieceList[(them | pieceCraneKing) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, Dagaz.AI.g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }

    // Checkmate/stalemate
    if (GenerateValidMoves().length == 0) {
        return Dagaz.AI.g_inCheck ? 'Checkmate' : 'Stalemate';
    } 

    return '';
}

function GetSlot() {
    for (var i = 0; i < RESERVE_SIZE; i++) {
        if (g_reserve[i] == pieceEmpty) return i;
    }
    return null;
}

function UndoHistory(inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured, slot) {
    this.inCheck = inCheck;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
    this.slot = slot;
}

Dagaz.AI.MakeMove = function(move) {
    var slot = GetSlot();
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 
    
    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = Dagaz.AI.g_board[to];
    var piece = Dagaz.AI.g_board[from];

    if (captured && (slot === null)) {
        return false;
    }

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured, slot);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        var newPiece = captured & (~Dagaz.AI.PLAYERS_MASK);
        newPiece |= Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceGoldenBird) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceSparrowPawn;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceCloudEagleP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceSwoopingOwl;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceFlyingFalconP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceStruttingCrow;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceViolentStagP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceClimbingMonkey;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceSwallowsWingsP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceFlyingGoose;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceRaidingFalcon) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceFlyingCock;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceViolentWolfP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceBlindDog;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceRoamingBoar) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceViolentStag;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceBearsEyes) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceViolentWolf;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == piecePloddingOx) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceOxcart;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceHeavenlyHorse) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceLiberatedHorse;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceTreacherousFoxP) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceRunningRabbit;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceGlidingSwallow) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceSwallowsWings;
        }
        if ((captured & Dagaz.AI.TYPE_MASK) == pieceTenaciousFalcon) {
             newPiece &= ~Dagaz.AI.TYPE_MASK;
             newPiece |= pieceFlyingFalcon;
        }

        g_reserve[slot] = newPiece;
        Dagaz.AI.g_baseEval += inHandTable[newPiece & Dagaz.AI.TYPE_MASK];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[slot][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[slot][newPiece & Dagaz.AI.PIECE_MASK];

        // Remove our piece from the piece list
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceCount[capturedType]--;
        var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
        Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? flipTable[to] : to];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    if (from == 0) {
        slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
        Dagaz.AI.g_baseEval -= inHandTable[piece & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[slot][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[slot][piece & Dagaz.AI.PIECE_MASK];

        var pieceType = piece & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[pieceType];
        Dagaz.AI.g_pieceList[(pieceType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pieceType]] = to;
        Dagaz.AI.g_pieceCount[pieceType]++;

        g_reserve[slot] = 0;
    } else {
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[from] : from];

        // Move our piece in the piece list
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
        Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if ((piece & Dagaz.AI.TYPE_MASK) == pieceSwoopingOwl) newPiece |= pieceCloudEagleP;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceStruttingCrow)  newPiece |= pieceFlyingFalconP;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceClimbingMonkey) newPiece |= pieceViolentStagP;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceFlyingGoose)    newPiece |= pieceSwallowsWingsP;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceFlyingCock)     newPiece |= pieceRaidingFalcon;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceBlindDog)       newPiece |= pieceViolentWolfP;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceViolentStag)    newPiece |= pieceRoamingBoar;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceViolentWolf)    newPiece |= pieceBearsEyes;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceOxcart)         newPiece |= piecePloddingOx;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceLiberatedHorse) newPiece |= pieceHeavenlyHorse;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceRunningRabbit)  newPiece |= pieceTreacherousFoxP;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceSwallowsWings)  newPiece |= pieceGlidingSwallow;
           else if ((piece & Dagaz.AI.TYPE_MASK) == pieceFlyingFalcon)   newPiece |= pieceTenaciousFalcon;
           else newPiece |= pieceGoldenBird;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];
        
        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
        Dagaz.AI.g_baseEval -= materialTable[piece & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += materialTable[newPiece & Dagaz.AI.TYPE_MASK];

        var pawnType = piece & Dagaz.AI.PIECE_MASK;
        var promoteType = newPiece & Dagaz.AI.PIECE_MASK;

        Dagaz.AI.g_pieceCount[pawnType]--;

        var lastPawnSquare = Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pawnType]];
        Dagaz.AI.g_pieceIndex[lastPawnSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPawnSquare]] = lastPawnSquare;
        Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pawnType]] = 0;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[promoteType];
        Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
        Dagaz.AI.g_pieceCount[promoteType]++;
    } else {
        Dagaz.AI.g_board[to] = piece;
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
    }

    if (from != 0) {
        Dagaz.AI.g_board[from] = pieceEmpty;
    }

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    var kingPos = Dagaz.AI.g_pieceList[(pieceCraneKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        Dagaz.AI.UnmakeMove(move);
        return false;
    }

    Dagaz.AI.g_inCheck = false;
    kingPos = Dagaz.AI.g_pieceList[(pieceCraneKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
        if (Dagaz.AI.g_inCheck && (from == 0) && ((piece & Dagaz.AI.TYPE_MASK) == pieceSparrowPawn)) {
            if (GenerateValidMoves().length == 0) {
                Dagaz.AI.UnmakeMove(move);
                return false;
            }
        }
    }

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    
    Dagaz.AI.g_moveCount--;
    Dagaz.AI.g_inCheck = g_moveUndoStack[Dagaz.AI.g_moveCount].inCheck;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;
    
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;
    
    var flags = move & 0xFF000000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var slot = g_moveUndoStack[Dagaz.AI.g_moveCount].slot;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;

    var piece = Dagaz.AI.g_board[to];

    if (flags & moveflagPromotion) {
        piece = Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK);
        if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceCloudEagleP) piece |= pieceSwoopingOwl;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceFlyingFalconP)   piece |= pieceStruttingCrow;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceViolentStagP)    piece |= pieceClimbingMonkey;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceSwallowsWingsP)  piece |= pieceFlyingGoose;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceRaidingFalcon)   piece |= pieceFlyingCock;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceViolentWolfP)    piece |= pieceBlindDog;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceRoamingBoar)     piece |= pieceViolentStag;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceBearsEyes)       piece |= pieceViolentWolf;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == piecePloddingOx)      piece |= pieceOxcart;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceHeavenlyHorse)   piece |= pieceLiberatedHorse;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceTreacherousFoxP) piece |= pieceRunningRabbit;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceGlidingSwallow)  piece |= pieceSwallowsWings;
           else if ((Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK) == pieceTenaciousFalcon) piece |= pieceFlyingFalcon;
           else piece |= pieceSparrowPawn;

        Dagaz.AI.g_board[from] = piece;

        var pawnType = Dagaz.AI.g_board[from] & Dagaz.AI.PIECE_MASK;
        var promoteType = Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK;

        Dagaz.AI.g_pieceCount[promoteType]--;

        var lastPromoteSquare = Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[promoteType]];
        Dagaz.AI.g_pieceIndex[lastPromoteSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPromoteSquare]] = lastPromoteSquare;
        Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[promoteType]] = 0;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[pawnType];
        Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
        Dagaz.AI.g_pieceCount[pawnType]++;
    } else {
        if (from == 0) {
            g_reserve[(move >> 16) & 0xFF] = Dagaz.AI.g_board[to];
            var capturedType = Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK;
            Dagaz.AI.g_pieceCount[capturedType]--;
            var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
            Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[to];
            Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
            Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;
        } else {
            Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
        }
    }

    Dagaz.AI.g_board[to] = captured;

    if (from != 0) {
        // Move our piece in the piece list
        Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;
    }

    if (captured) {
        g_reserve[slot] = 0;
        // Restore our piece to the piece list
        var captureType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[captureType];
        Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = to;
        Dagaz.AI.g_pieceCount[captureType]++;
    }
}

function IsSquareOnPieceLine(target, from) {
    var index = from - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var piece = Dagaz.AI.g_board[from];
    return (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) ? true : false;
}

function IsSquareAttackableFrom(target, from) {
    var index = from - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var piece = Dagaz.AI.g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
        do {
            from += inc;
            if (from == target) return true;
        } while (Dagaz.AI.g_board[from] == 0);
    }
    return false;
}

function IsSquareAttackable(target, color) {
    // Attackable by pawns?
    var inc = color ? -16 : 16;
    var pawn = (color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack) | pieceSparrowPawn;
    if (Dagaz.AI.g_board[target - inc] == pawn) return true;
    // Attackable by pieces?
    for (var i = pieceSwoopingOwl; i <= pieceCraneKing; i++) {
        var index = (color | i) << Dagaz.AI.COUNTER_SIZE;
        var square = Dagaz.AI.g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = Dagaz.AI.g_pieceList[++index];
        }
    }
    return false;
}

function GenerateMove(from, to, flags) {
    return from | (to << 8) | flags;
}

function GenerateDrop(to, slot) {
    return (to << 8) | (slot << 16);
}

function GenerateValidMoves() {
    var moveList = new Array();
    var allMoves = new Array();
    Dagaz.AI.GenerateCaptureMoves(allMoves, null);
    Dagaz.AI.GenerateAllMoves(allMoves);
    Dagaz.AI.GenerateDropMoves(allMoves, true);
    for (var i = allMoves.length - 1; i >= 0; i--) {     
        if (Dagaz.AI.MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            Dagaz.AI.UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

Dagaz.AI.GenerateAllMoves = function(moveStack) {
    var from, to, piece, pieceIdx, flags = 0;
    var inc = Dagaz.AI.g_toMove ? -16 : 16;

    // SparrowPawn quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceSparrowPawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // SwoopingOwl quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceSwoopingOwl) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // StruttingCrow quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceStruttingCrow) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ClimbingMonkey quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceClimbingMonkey) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingGoose quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingGoose) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingCock quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingCock) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // BlindDog quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceBlindDog) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentStag quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentStag) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentStagP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentStagP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentWolf quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentWolf) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentWolfP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentWolfP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // GoldenBird quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceGoldenBird) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RoamingBoar quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRoamingBoar) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // HeavenlyHorse quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceHeavenlyHorse) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 33; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 31; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 33; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 31; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // BearsEyes quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceBearsEyes) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // PloddingOx quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | piecePloddingOx) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // TreacherousFox quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceTreacherousFox) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 15; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 34; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 32 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 30; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 34; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 32 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 30; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // TreacherousFoxP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceTreacherousFoxP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 15; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 34; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 32 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 30; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 34; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 32 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 30; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Oxcart quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceOxcart) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             flags = 0;
             if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc; 
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // LiberatedHorse quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceLiberatedHorse) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             flags = 0;
             if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc; 
        }
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) {
             moveStack[moveStack.length] = GenerateMove(from, to, 0);
             to -= inc;
             if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RunningRabbit quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRunningRabbit) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             flags = 0;
             if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc; 
        }
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // SwallowsWings quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceSwallowsWings) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
	to = from + 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; 
        }
	to = from - 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; 
        }
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // SwallowsWingsP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceSwallowsWingsP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; 
        }
	to = from - 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; 
        }
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RaidingFalcon quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRaidingFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc; 
        }
	to = from - inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc; 
        }
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // CloudEagle quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceCloudEagle) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc; 
        }
	to = from - inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc; 
        }
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) {
             moveStack[moveStack.length] = GenerateMove(from, to, 0);
             to += inc + 1;
             if (Dagaz.AI.g_board[to] == 0) {
                 moveStack[moveStack.length] = GenerateMove(from, to, 0);
                 to += inc + 1;
                 if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) {
             moveStack[moveStack.length] = GenerateMove(from, to, 0);
             to += inc - 1;
             if (Dagaz.AI.g_board[to] == 0) {
                 moveStack[moveStack.length] = GenerateMove(from, to, 0);
                 to += inc - 1;
                 if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // CloudEagleP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceCloudEagleP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc; 
        }
	to = from - inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc; 
        }
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) {
             moveStack[moveStack.length] = GenerateMove(from, to, 0);
             to += inc + 1;
             if (Dagaz.AI.g_board[to] == 0) {
                 moveStack[moveStack.length] = GenerateMove(from, to, 0);
                 to += inc + 1;
                 if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) {
             moveStack[moveStack.length] = GenerateMove(from, to, 0);
             to += inc - 1;
             if (Dagaz.AI.g_board[to] == 0) {
                 moveStack[moveStack.length] = GenerateMove(from, to, 0);
                 to += inc - 1;
                 if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingFalcon quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
	to = from + inc - 1; while (Dagaz.AI.g_board[to] == 0) { 
             flags = 0;
             if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc - 1; 
        }
	to = from + inc + 1; while (Dagaz.AI.g_board[to] == 0) { 
             flags = 0;
             if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc + 1; 
        }
	to = from - (inc - 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc - 1; 
        }
	to = from - (inc + 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc + 1; 
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingFalconP quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingFalconP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
	to = from + inc - 1; while (Dagaz.AI.g_board[to] == 0) { 
             flags = 0;
             if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc - 1; 
        }
	to = from + inc + 1; while (Dagaz.AI.g_board[to] == 0) { 
             flags = 0;
             if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc + 1; 
        }
	to = from - (inc - 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc - 1; 
        }
	to = from - (inc + 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc + 1; 
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // GlidingSwallow quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceGlidingSwallow) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc; 
        }
	to = from - inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc; 
        }
	to = from + 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; 
        }
	to = from - 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; 
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // TenaciousFalcon quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceTenaciousFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc; 
        }
	to = from + inc + 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc + 1; 
        }
	to = from + inc - 1; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to += inc - 1; 
        }
	to = from - inc; while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc; 
        }
	to = from - (inc + 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc + 1; 
        }
	to = from - (inc - 1); while (Dagaz.AI.g_board[to] == 0) { 
             moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= inc - 1; 
        }
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // CraneKing quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceCraneKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

Dagaz.AI.GenerateCaptureMoves = function(moveStack) {
    var from, to, piece, pieceIdx, flags = 0;
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var inc = Dagaz.AI.g_toMove ? -16 : 16;

    // SparrowPawn captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceSparrowPawn) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // SwoopingOwl captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceSwoopingOwl) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // StruttingCrow captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceStruttingCrow) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ClimbingMonkey captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceClimbingMonkey) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingGoose captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingGoose) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingCock captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingCock) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // BlindDog captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceBlindDog) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentStag captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentStag) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentStagP captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentStagP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentWolf captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentWolf) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // ViolentWolfP captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceViolentWolfP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // GoldenBird captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceGoldenBird) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RoamingBoar captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRoamingBoar) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // HeavenlyHorse captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceHeavenlyHorse) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 33; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 31; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 33; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 31; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // BearsEyes captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceBearsEyes) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // PloddingOx captures
    pieceIdx = (Dagaz.AI.g_toMove | piecePloddingOx) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // TreacherousFox captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceTreacherousFox) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 15; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 34; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 32; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 30; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 34; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 32; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 30; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // TreacherousFoxP captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceTreacherousFoxP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 15; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 34; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 32; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 30; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 34; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 32; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 30; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Oxcart captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceOxcart) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            flags = 0;
            if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // LiberatedHorse captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceLiberatedHorse) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            flags = 0;
            if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        else if (Dagaz.AI.g_board[to] == 0) {
            to -= inc;
            if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RunningRabbit captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRunningRabbit) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            flags = 0;
            if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
        to = from + inc - 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + inc + 1; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // SwallowsWings captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceSwallowsWings) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // SwallowsWingsP captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceSwallowsWingsP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // RaidingFalcon captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRaidingFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // CloudEagle captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceCloudEagle) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        else if (Dagaz.AI.g_board[to] == 0) {
             to += inc - 1;
             if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             else if (Dagaz.AI.g_board[to] == 0) {
                  to += inc - 1;
                  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        else if (Dagaz.AI.g_board[to] == 0) {
             to += inc + 1;
             if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             else if (Dagaz.AI.g_board[to] == 0) {
                  to += inc + 1;
                  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // CloudEagleP captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceCloudEagleP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        else if (Dagaz.AI.g_board[to] == 0) {
             to += inc - 1;
             if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             else if (Dagaz.AI.g_board[to] == 0) {
                  to += inc - 1;
                  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        else if (Dagaz.AI.g_board[to] == 0) {
             to += inc + 1;
             if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             else if (Dagaz.AI.g_board[to] == 0) {
                  to += inc + 1;
                  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
             }
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingFalcon captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingFalcon) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (Dagaz.AI.g_toMove) {
            if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
	to = from; do { to += inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            flags = 0;
            if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to += inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            flags = 0;
            if (Dagaz.AI.g_toMove) {
                 if ((to & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= Dagaz.AI.WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= Dagaz.AI.BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to -= inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // FlyingFalconP captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceFlyingFalconP) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to += inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // GlidingSwallow captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceGlidingSwallow) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // TenaciousFalcon captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceGlidingSwallow) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to += inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to += inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc + 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from; do { to -= inc - 1; } while (Dagaz.AI.g_board[to] == 0); 
        if (Dagaz.AI.g_board[to] & enemy) {
            moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // CraneKing captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceCraneKing) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc + 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc - 1; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - inc; 
        if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

Dagaz.AI.GenerateDropMoves = function(moveStack, force) {
   if (Dagaz.AI.NO_DROPS || !force) return;
   var friend = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
   for (var slot = 0; slot < RESERVE_SIZE; slot++) {
       var piece = g_reserve[slot];
       if ((piece & friend) == 0) continue;
       for (var to = 0; to < 256; to++) {
           if (Dagaz.AI.g_board[to] != 0) continue;
           if (_.indexOf([pieceSparrowPawn, pieceFlyingCock, pieceOxcart], piece & Dagaz.AI.TYPE_MASK) >= 0) {
               var row = to & 0xF0;
               if (row == ((Dagaz.Model.HEIGHT + 1) << 4) && !Dagaz.AI.g_toMove) continue;
               if (row == 0x20 && Dagaz.AI.g_toMove) continue;
               if ((piece & Dagaz.AI.TYPE_MASK) == pieceSparrowPawn) {
                   var isFound = false;
                   var ix = (Dagaz.AI.g_toMove | pieceSparrowPawn) << Dagaz.AI.COUNTER_SIZE;
                   var pawnPos = Dagaz.AI.g_pieceList[ix++];
                   while (pawnPos != 0) {
                       if ((pawnPos & 0xF) == (to & 0xF)) isFound = true;
                       pawnPos = Dagaz.AI.g_pieceList[ix++];
                   }
                   if (isFound) continue;
               }
           }
           moveStack[moveStack.length] = GenerateDrop(to, slot);
       }
   }
}

Dagaz.AI.See = function(move) {
    var from = move & 0xFF;
    var to = (move >> 8) & 0xFF;

    var fromPiece = Dagaz.AI.g_board[from];

    var fromValue = g_seeValues[fromPiece & Dagaz.AI.PIECE_MASK];
    var toValue = g_seeValues[Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK];

    if (fromValue <= toValue) {
        return true;
    }

    if (move >> 24) {
        // Castles, promotion, ep are always good
        return true;
    }

    var us = (fromPiece & Dagaz.AI.colorWhite) ? Dagaz.AI.colorWhite : 0;
    var them = Dagaz.AI.colorWhite - us;

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    var inc = (fromPiece & Dagaz.AI.colorWhite) ? -16 : 16; // Note: this is capture direction from to, so reversed from normal move direction
    if ((Dagaz.AI.g_board[to + inc] & Dagaz.AI.PIECE_MASK) == (pieceSparrowPawn | them)) {
        return false;
    }

    var themAttacks = new Array();

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    var captureDeficit = fromValue - toValue;

    // Slider attacks
    Dagaz.AI.g_board[from] = 0;
    for (var pieceType = pieceSwoopingOwl; pieceType <= pieceTenaciousFalcon; pieceType++) {
        if (SeeAddSliderAttacks(to, them, themAttacks, pieceType)) {
            if (captureDeficit > g_seeValues[pieceType]) {
                Dagaz.AI.g_board[from] = fromPiece;
                return false;
            }
        }
    }

    // Pawn defenses 
    // At this point, we are sure we are making a "losing" capture.  The opponent can not capture back with a 
    // pawn.  They cannot capture back with a minor/major and stand pat either.  So, if we can capture with 
    // a pawn, it's got to be a winning or equal capture. 
    if ((Dagaz.AI.g_board[to - inc] & Dagaz.AI.PIECE_MASK) == (pieceSparrowPawn | us)) {
        Dagaz.AI.g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceCraneKing);

    // Our attacks
    var usAttacks = new Array();
    for (var pieceType = pieceSwoopingOwl; pieceType <= pieceCraneKing; pieceType++) {
        SeeAddSliderAttacks(to, us, usAttacks, pieceType);
    }

    Dagaz.AI.g_board[from] = fromPiece;

    // We are currently winning the amount of material of the captured piece, time to see if the opponent 
    // can get it back somehow.  We assume the opponent can capture our current piece in this score, which 
    // simplifies the later code considerably. 
    var seeValue = toValue - fromValue;

    for (; ; ) {
        var capturingPieceValue = 1000;
        var capturingPieceIndex = -1;

        // Find the least valuable piece of the opponent that can attack the square
        for (var i = 0; i < themAttacks.length; i++) {
            if (themAttacks[i] != 0) {
                var pieceValue = g_seeValues[Dagaz.AI.g_board[themAttacks[i]] & Dagaz.AI.TYPE_MASK];
                if (pieceValue < capturingPieceValue) {
                    capturingPieceValue = pieceValue;
                    capturingPieceIndex = i;
                }
            }
        }

        if (capturingPieceIndex == -1) {
            // Opponent can't capture back, we win
            return true;
        }

        // Now, if seeValue < 0, the opponent is winning.  If even after we take their piece, 
        // we can't bring it back to 0, then we have lost this battle. 
        seeValue += capturingPieceValue;
        if (seeValue < 0) {
            return false;
        }

        var capturingPieceSquare = themAttacks[capturingPieceIndex];
        themAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);

        // Our turn to capture
        capturingPieceValue = 1000;
        capturingPieceIndex = -1;

        // Find our least valuable piece that can attack the square
        for (var i = 0; i < usAttacks.length; i++) {
            if (usAttacks[i] != 0) {
                var pieceValue = g_seeValues[Dagaz.AI.g_board[usAttacks[i]] & Dagaz.AI.TYPE_MASK];
                if (pieceValue < capturingPieceValue) {
                    capturingPieceValue = pieceValue;
                    capturingPieceIndex = i;
                }
            }
        }

        if (capturingPieceIndex == -1) {
            // We can't capture back, we lose :( 
            return false;
        }

        // Assume our opponent can capture us back, and if we are still winning, we can stand-pat 
        // here, and assume we've won. 
        seeValue -= capturingPieceValue;
        if (seeValue >= 0) {
            return true;
        }

        capturingPieceSquare = usAttacks[capturingPieceIndex];
        usAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);
    }
}

function SeeAddXrayAttack(target, square, us, usAttacks, themAttacks) {
    var index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var delta = -g_vectorDelta[index].delta;
    if (delta == 0) return;
    square += delta;
    while (Dagaz.AI.g_board[square] == 0) {
        square += delta;
    }
    if ((Dagaz.AI.g_board[square] & Dagaz.AI.PLAYERS_MASK) && IsSquareOnPieceLine(target, square)) {
        if ((Dagaz.AI.g_board[square] & Dagaz.AI.colorWhite) == us) {
            usAttacks[usAttacks.length] = square;
        } else {
            themAttacks[themAttacks.length] = square;
        }
    }
}

function SeeAddSliderAttacks(target, us, attacks, pieceType) {
    var pieceIdx = (us | pieceType) << Dagaz.AI.COUNTER_SIZE;
    var attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    var hit = false;
    while (attackerSq != 0) {
        if (IsSquareAttackableFrom(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
            hit = true;
        }
        attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    return hit;
}

})();
