let NOISE_FACTOR        = 5;

const PIECE_MASK        = 0x1F;
const TYPE_MASK         = 0xF;
const PLAYERS_MASK      = 0x30;
const COUNTER_SIZE      = 4;
const TYPE_SIZE         = 4;
const VECTORDELTA_SIZE  = 512;

const colorBlack        = 0x20;
const colorWhite        = 0x10;

const pieceEmpty        = 0x00;
const piecePawn         = 0x01;
const pieceKnight       = 0x02;
const pieceSilver       = 0x03;
const piecePawnP        = 0x04;
const pieceKnightP      = 0x05;
const pieceSilverP      = 0x06;
const pieceLanceP       = 0x07;
const pieceGold         = 0x08;
const pieceLance        = 0x09;
const pieceBishop       = 0x0A;
const pieceRook         = 0x0B;
const pieceBishopP      = 0x0C;
const pieceRookP        = 0x0D;
const pieceKing         = 0x0E;
const pieceNo           = 0x80;

const moveflagPromotion = 0x10000000;

STALMATED               = true;

const g_vectorDelta = new Array(VECTORDELTA_SIZE);

function GetFen() {
    let result = "";
    for (let row = 0; row < g_height; row++) {
        if (row != 0) result += '/';
        let empty = 0;
        for (let col = 0; col < g_width; col++) {
            const piece = g_board[MakeSquare(row, col)];
            if (piece == 0) {
                empty++;
            } else {
                if (empty != 0) 
                    result += empty;
                empty = 0;
                const pieceChar = [" ", "p", "t", "s", "e", "g", "b", "h", "r", "d", "k"][(piece & TYPE_MASK)];
                result += ((piece & colorWhite) != 0) ? pieceChar.toUpperCase() : pieceChar;
            }
        }
        if (empty != 0) {
            result += empty;
        }
    }
    result += g_toMove == colorWhite ? " w" : " b";
    return result;
}

function GetMoveSAN(move, validMoves) {
	const from = move & 0xFF;
	const to = (move >> 8) & 0xFF;
	
	const pieceType = g_board[from] & 0x7;
	const result = ["", "", "T", "S", "E", "G", "B", "H", "R", "D", "K"][pieceType];
	
	let dupe = false, rowDiff = true, colDiff = true;
	if (validMoves == null) {
            validMoves = ShogiGenerateValidMoves();
	}
	for (let i = 0; i < validMoves.length; i++) {
		const moveFrom = validMoves[i] & 0xFF;
		const moveTo = (validMoves[i] >> 8) & 0xFF; 
		if (moveFrom != from &&
			moveTo == to &&
			(g_board[moveFrom] & 0x7) == pieceType) {
			dupe = true;
			if ((moveFrom & 0xF0) == (from & 0xF0)) {
				rowDiff = false;
			}
			if ((moveFrom & 0x0F) == (from & 0x0F)) {
				colDiff = false;
			}
		}
	}
	
	if (dupe) {
		if (colDiff) {
			result += FormatSquare(from).charAt(0);
		} else if (rowDiff) {
			result += FormatSquare(from).charAt(1);
		} else {
			result += FormatSquare(from);
		}
	} else if (pieceType == piecePawn && (g_board[to] != 0)) {
		result += FormatSquare(from).charAt(0);
	}
	
	result += FormatSquare(to);
	
	MakeMove(move);
	if (g_inCheck) {
	    result += ShogiGenerateValidMoves().length == 0 ? "#" : "+";
	}
	UnmakeMove(move);

	return result;
}

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    return letters[(square & 0xF) - 4] + (((g_height + 1) - (square >> 4)) + 1);
}

function FormatReserve(square) {
    const letters = (RESERVE_SIZE == 2) ? ['X', 'Y', 'Z', 'T'] : ['X', 'Y', 'Z', 'U', 'V', 'W'];
    return letters[square % (2 * RESERVE_SIZE)] + (g_height - ((square / (2 * RESERVE_SIZE)) | 0));
}

function FormatMove(move) {
    let result;
    const from = move & 0xFF;
    if (from != 0) {
        result = FormatSquare(from) + FormatSquare((move >> 8) & 0xFF);
    } else {
        from = (move >> 16) & 0xFF;
        result = FormatReserve(from) + FormatSquare((move >> 8) & 0xFF);
    }
    if (move & moveflagPromotion) {
        result = result + '+';
    }
    return result;
}

const RESERVE_SIZE = 20;
const g_reserve = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const materialTable = [0,  87, 254, 371, 530, 500, 489, 482, 447, 235,  571,  647,  832,  955, 600000];
const inHandTable   = [0, 174, 508, 742, 617, 754, 960, 717, 894, 470, 1142, 1294, 1403, 1602, 600000];

const g_seeValues = [0, 1, 2, 3, 4, 4, 4, 4, 4, 6, 6, 6, 7, 7, 900, 0,
                   0, 1, 2, 3, 4, 4, 4, 4, 4, 6, 6, 6, 7, 7, 900, 0];

const g_pawnDeltas   = [-16];
const g_knightDeltas = [-31, -33];
const g_silverDeltas = [-16, -15, -17, 15, 17];
const g_goldDeltas   = [-15, -17, -1, +1, -16, +16];
const g_bishopDeltas = [-15, -17, 15, 17];
const g_rookDeltas   = [-1, +1, -16, +16];
const g_kingDeltas   = [-1, +1, -16, +16, -15, +15, -17, +17];

function Mobility(color) {
    let result = 0;
    let from, to, mob, pieceIdx;

    const enemy = color ? colorBlack : colorWhite
    const mobUnit = color ? g_mobUnit[0] : g_mobUnit[1];

    // Pawn mobility
    mob = 0;
    pieceIdx = (color | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 16]];
        } else {
            mob += mobUnit[g_board[from + 16]];
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // Knight mobility
    mob = 0;
    pieceIdx = (color | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 31]];
            mob += mobUnit[g_board[from - 33]];
        } else {
            mob += mobUnit[g_board[from + 31]];
            mob += mobUnit[g_board[from + 33]];
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // Silver mobility
    mob = 0;
    pieceIdx = (color | pieceSilver) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 16]];
        } else {
            mob += mobUnit[g_board[from + 16]];
        }
        mob += mobUnit[g_board[from - 17]];
        mob += mobUnit[g_board[from + 17]];
        mob += mobUnit[g_board[from - 15]];
        mob += mobUnit[g_board[from + 15]];
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // Gold mobility
    mob = 0;
    pieceIdx = (color | pieceGold) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 17]];
            mob += mobUnit[g_board[from - 15]];
        } else {
            mob += mobUnit[g_board[from + 17]];
            mob += mobUnit[g_board[from + 15]];
        }
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // PawnP mobility
    mob = 0;
    pieceIdx = (color | piecePawnP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 17]];
            mob += mobUnit[g_board[from - 15]];
        } else {
            mob += mobUnit[g_board[from + 17]];
            mob += mobUnit[g_board[from + 15]];
        }
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // SilverP mobility
    mob = 0;
    pieceIdx = (color | pieceSilverP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 17]];
            mob += mobUnit[g_board[from - 15]];
        } else {
            mob += mobUnit[g_board[from + 17]];
            mob += mobUnit[g_board[from + 15]];
        }
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // KnightP mobility
    mob = -2;
    pieceIdx = (color | pieceKnightP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 17]];
            mob += mobUnit[g_board[from - 15]];
        } else {
            mob += mobUnit[g_board[from + 17]];
            mob += mobUnit[g_board[from + 15]];
        }
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // LanceP mobility
    mob = -2;
    pieceIdx = (color | pieceLanceP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 17]];
            mob += mobUnit[g_board[from - 15]];
        } else {
            mob += mobUnit[g_board[from + 17]];
            mob += mobUnit[g_board[from + 15]];
        }
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // Lance mobility
    mob = -4;
    pieceIdx = (color | pieceLance) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            to = from - 16; while (g_board[to] == 0) { to -= 16; mob++; } if (g_board[to] & enemy) mob++;
        } else {
            to = from + 16; while (g_board[to] == 0) { to += 16; mob++; } if (g_board[to] & enemy) mob++;
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Bishop mobility
    mob = -4;
    pieceIdx = (color | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; while (g_board[to] == 0) { to -= 17; mob++;}  if (g_board[to] & enemy) mob++;
        to = from + 17; while (g_board[to] == 0) { to += 17; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 15; while (g_board[to] == 0) { to += 15; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 15; while (g_board[to] == 0) { to -= 15; mob++; } if (g_board[to] & enemy) mob++;
        from = g_pieceList[pieceIdx++];
    }
    result += 44 * mob;

    // BishopP mobility
    mob = 0;
    pieceIdx = (color | pieceBishopP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; while (g_board[to] == 0) { to -= 17; mob++;}  if (g_board[to] & enemy) mob++;
        to = from + 17; while (g_board[to] == 0) { to += 17; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 15; while (g_board[to] == 0) { to += 15; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 15; while (g_board[to] == 0) { to -= 15; mob++; } if (g_board[to] & enemy) mob++;
        from = g_pieceList[pieceIdx++];
    }
    result += 44 * mob;

    // Rook mobility
    mob = -4;
    pieceIdx = (color | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (g_board[to] == 0) { to--; mob++;}  if (g_board[to] & enemy) mob++;
        to = from + 1;  while (g_board[to] == 0) { to++; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 16; while (g_board[to] == 0) { to += 16; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 16; while (g_board[to] == 0) { to -= 16; mob++; } if (g_board[to] & enemy) mob++;
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // RookP mobility
    mob = 0;
    pieceIdx = (color | pieceRookP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (g_board[to] == 0) { to--; mob++;}  if (g_board[to] & enemy) mob++;
        to = from + 1;  while (g_board[to] == 0) { to++; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 16; while (g_board[to] == 0) { to += 16; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 16; while (g_board[to] == 0) { to -= 16; mob++; } if (g_board[to] & enemy) mob++;
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    return result;
}

function DropMobility(piece, from) {
    const color = piece & colorWhite;
    const enemy = color ? colorBlack : colorWhite;
    const mobUnit = color ? g_mobUnit[0] : g_mobUnit[1];

    let mob = 0;
    let to;
    
    if ((piece & TYPE_MASK) == piecePawn) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 16]];
        } else {
            mob += mobUnit[g_board[from + 16]];
        }
    }

    if ((piece & TYPE_MASK) == pieceKnight) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 31]];
            mob += mobUnit[g_board[from - 33]];
        } else {
            mob += mobUnit[g_board[from + 31]];
            mob += mobUnit[g_board[from + 33]];
        }
    }

    if ((piece & TYPE_MASK) == pieceSilver) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 16]];
        } else {
            mob += mobUnit[g_board[from + 16]];
        }
        mob += mobUnit[g_board[from - 17]];
        mob += mobUnit[g_board[from + 17]];
        mob += mobUnit[g_board[from - 15]];
        mob += mobUnit[g_board[from + 15]];
    }

    if ((piece & TYPE_MASK) == pieceGold) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 17]];
            mob += mobUnit[g_board[from - 15]];
        } else {
            mob += mobUnit[g_board[from + 17]];
            mob += mobUnit[g_board[from + 15]];
        }
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
    }

    if ((piece & TYPE_MASK) == pieceLance) {
        if (color == colorWhite) {
            to = from - 16; while (g_board[to] == 0) { to -= 16; } if (g_board[to] & enemy) mob++;
        } else {
            to = from + 16; while (g_board[to] == 0) { to += 16; } if (g_board[to] & enemy) mob++;
        }
    }

    if ((piece & TYPE_MASK) == pieceBishop) {
        to = from - 17; while (g_board[to] == 0) { to -= 17; } if (g_board[to] & enemy) mob++;
        to = from + 17; while (g_board[to] == 0) { to += 17; } if (g_board[to] & enemy) mob++;
        to = from + 15; while (g_board[to] == 0) { to += 15; } if (g_board[to] & enemy) mob++;
        to = from - 15; while (g_board[to] == 0) { to -= 15; } if (g_board[to] & enemy) mob++;
    }

    if ((piece & TYPE_MASK) == pieceRook) {
        to = from - 1;  while (g_board[to] == 0) { to--; }     if (g_board[to] & enemy) mob++;
        to = from + 1;  while (g_board[to] == 0) { to++; }     if (g_board[to] & enemy) mob++;
        to = from + 16; while (g_board[to] == 0) { to += 16; } if (g_board[to] & enemy) mob++;
        to = from - 16; while (g_board[to] == 0) { to -= 16; } if (g_board[to] & enemy) mob++;
    }

    return mob;
}

function Evaluate() {
    let curEval = g_baseEval;
    let mobility = Mobility(colorWhite) - Mobility(0);
    if (g_toMove == 0) {
        // Black
        curEval -= mobility;
    }
    else {
        curEval += mobility;
    }
    return curEval;
}

function ScoreMove(move) {
    const moveTo = (move >> 8) & 0xFF;
    const captured = g_board[moveTo] & TYPE_MASK;
    const from = move & 0xFF;
    let piece;
    if (from != 0) {
        piece = g_board[from];
    } else {
        const slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
        score = DropMobility(piece, moveTo);
        return score;
    }
    let score;
    if (captured != pieceEmpty) {
        const pieceType = piece & TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = historyTable[piece & PIECE_MASK][moveTo];
    }
    return score;
}

function IsHashMoveValid(hashMove) {
    return false;
}

function isNoZugzwang() {
    return true;
}

function ResetGame() {
  CommonResetGame();

  pieceSquareAdj[pieceEmpty]   = MakeTable(emptyAdj);
  pieceSquareAdj[piecePawn]    = MakeTable(pawnAdj);
  pieceSquareAdj[piecePawnP]   = MakeTable(goldAdj);
  pieceSquareAdj[pieceKnight]  = MakeTable(knightAdj);
  pieceSquareAdj[pieceKnightP] = MakeTable(goldAdj);
  pieceSquareAdj[pieceLance]   = MakeTable(lanceAdj);
  pieceSquareAdj[pieceLanceP]  = MakeTable(goldAdj);
  pieceSquareAdj[pieceSilver]  = MakeTable(silverAdj);
  pieceSquareAdj[pieceSilverP] = MakeTable(goldAdj);
  pieceSquareAdj[pieceGold]    = MakeTable(goldAdj);
  pieceSquareAdj[pieceBishop]  = MakeTable(bishopAdj);
  pieceSquareAdj[pieceRook]    = MakeTable(rookAdj);
  pieceSquareAdj[pieceBishopP] = MakeTable(bishopPAdj);
  pieceSquareAdj[pieceRookP]   = MakeTable(rookPAdj);
  pieceSquareAdj[pieceKing]    = MakeTable(kingAdj);

  const pieceDeltas = [[], g_pawnDeltas, g_knightDeltas, g_silverDeltas, g_goldDeltas, g_goldDeltas, g_goldDeltas, g_goldDeltas, g_goldDeltas, g_pawnDeltas, g_bishopDeltas, g_rookDeltas, g_kingDeltas, g_kingDeltas, g_kingDeltas];

  for (let i = 0; i < VECTORDELTA_SIZE; i++) {
      g_vectorDelta[i] = new Object();
      g_vectorDelta[i].delta = 0;
      g_vectorDelta[i].pieceMask = new Array(2);
      g_vectorDelta[i].pieceMask[0] = 0;
      g_vectorDelta[i].pieceMask[1] = 0;
  }

  // Initialize the vector delta table    
  for (let row = 0; row < (g_height << 4); row += 0x10) {
      for (let col = 0; col < g_width; col++) {
           const square = row | col;
           for (let i = piecePawn; i <= pieceKing; i++) {
                for (let dir = 0; dir < pieceDeltas[i].length; dir++) {
                     const delta = pieceDeltas[i][dir];
                     let target = square + delta;
                     while (onBoard(target)) {
                         const index = square - target + (VECTORDELTA_SIZE >> 1);
                         g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << i);
                         let flip = -1;
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
                         if (i < pieceLance) {
                             g_vectorDelta[index].delta = delta;
                             break;
                         }
                         if ((i == pieceBishopP) && (dir < 4)) {
                             g_vectorDelta[index].delta = delta;
                             break;
                         }
                         if ((i == pieceRookP) && (dir >= 4)) {
                             g_vectorDelta[index].delta = delta;
                             break;
                         }
                         if (i == pieceKing)
                             break;
                         target += delta;
                     }
                     delta = -delta;
                     let target = square + delta;
                     while (onBoard(target)) {
                         const index = square - target + (VECTORDELTA_SIZE >> 1);
                         g_vectorDelta[index].pieceMask[0] |= (1 << i);
                         let flip = -1;
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
                         if (i < pieceLance) {
                             g_vectorDelta[index].delta = delta;
                             break;
                         }
                         if ((i == pieceBishopP) && (dir < 4)) {
                             g_vectorDelta[index].delta = delta;
                             break;
                         }
                         if ((i == pieceRookP) && (dir >= 4)) {
                             g_vectorDelta[index].delta = delta;
                             break;
                         }
                         if (i == pieceKing)
                             break;
                         target += delta;
                     }
                }
           }
      }
  }
  InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (let i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        const enemy = i == 0 ? colorBlack : colorWhite;
        const friend = i == 0 ? colorWhite : colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][pieceNo] = 0;
        g_mobUnit[i][enemy  | piecePawn]   = 1;
        g_mobUnit[i][enemy  | pieceKnight] = 1;
        g_mobUnit[i][enemy  | pieceSilver] = 2;
        g_mobUnit[i][enemy  | piecePawnP]  = 2;
        g_mobUnit[i][enemy  | pieceKnightP]= 2;
        g_mobUnit[i][enemy  | pieceSilverP]= 2;
        g_mobUnit[i][enemy  | pieceLanceP] = 2;
        g_mobUnit[i][enemy  | pieceGold]   = 2;
        g_mobUnit[i][enemy  | pieceLance]  = 2;
        g_mobUnit[i][enemy  | pieceBishop] = 2;
        g_mobUnit[i][enemy  | pieceRook]   = 3;
        g_mobUnit[i][enemy  | pieceBishopP]= 3;
        g_mobUnit[i][enemy  | pieceRookP]  = 3;
        g_mobUnit[i][enemy  | pieceKing]   = 9;
        g_mobUnit[i][friend | piecePawn]   = 0;
        g_mobUnit[i][friend | pieceKnight] = 0;
        g_mobUnit[i][friend | pieceSilver] = 0;
        g_mobUnit[i][friend | piecePawnP]  = 0;
        g_mobUnit[i][friend | pieceKnightP]= 0;
        g_mobUnit[i][friend | pieceSilverP]= 0;
        g_mobUnit[i][friend | pieceLanceP] = 0;
        g_mobUnit[i][friend | pieceGold]   = 0;
        g_mobUnit[i][friend | pieceLance]  = 0;
        g_mobUnit[i][friend | pieceBishop] = 0;
        g_mobUnit[i][friend | pieceRook]   = 0;
        g_mobUnit[i][friend | pieceBishopP]= 0;
        g_mobUnit[i][friend | pieceRookP]  = 0;
        g_mobUnit[i][friend | pieceKing]   = 0;
    }
}

function ShogiSetHash() {
    let result = SetHash();
    for (let i = 0; i < RESERVE_SIZE; i++) {
        const piece = g_reserve[i];
        if ((piece & PLAYERS_MASK) && (piece & TYPE_MASK)) {
            result.hashKeyLow ^= g_zobristLow[i][piece & PIECE_MASK];
            result.hashKeyHigh ^= g_zobristHigh[i][piece & PIECE_MASK];
        }
    }
    return result;
}

function InitializeFromFen(fen) {
    const chunks = fen.split('-');
    
    for (let i = 0; i < 256; i++) 
        g_board[i] = pieceNo;

    for (let i = 0; i < RESERVE_SIZE; i++) 
        g_reserve[i] = pieceEmpty;
    
    let row = 0;
    let col = 0;

    const pieces = chunks[0];
    for (let i = 0; i < pieces.length; i++) {
        const c = pieces.charAt(i);
        if (c == '/') {
            row++;
            col = 0;
        } else {
            if (c >= '0' && c <= '9') {
                for (let j = 0; j < parseInt(c); j++) {
                    g_board[MakeSquare(row, col)] = 0;
                    col++;
                }
            } else {
                const isBlack = c >= 'a' && c <= 'z';
                const piece = isBlack ? colorBlack : colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 't':
                        piece |= piecePawnP;
                        break;
                    case 'l':
                        piece |= pieceLance;
                        break;
                    case 'i':
                        piece |= pieceLanceP;
                        break;
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'w':
                        piece |= pieceKnightP;
                        break;
                    case 's':
                        piece |= pieceSilver;
                        break;
                    case 'e':
                        piece |= pieceSilverP;
                        break;
                    case 'g':
                        piece |= pieceGold;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'h':
                        piece |= pieceBishopP;
                        break;
                    case 'd':
                        piece |= pieceRookP;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                if (piece & TYPE_MASK) {
                    g_board[MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }
 
    let ix = 0;
    pieces = chunks[1];
    for (let i = 0; i < pieces.length; i++) {
        const c = pieces.charAt(i);
        if (c == '/') continue;
            if (c >= '0' && c <= '9') {
                for (let j = 0; j < parseInt(c); j++) {
                    g_reserve[ix] = pieceEmpty;
                    ix++;
                }
            } else {
                const isBlack = c >= 'a' && c <= 'z';
                const piece = isBlack ? colorBlack : colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 't':
                        piece |= piecePawnP;
                        break;
                    case 'l':
                        piece |= pieceLance;
                        break;
                    case 'i':
                        piece |= pieceLanceP;
                        break;
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'w':
                        piece |= pieceKnightP;
                        break;
                    case 's':
                        piece |= pieceSilver;
                        break;
                    case 'e':
                        piece |= pieceSilverP;
                        break;
                    case 'g':
                        piece |= pieceGold;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'h':
                        piece |= pieceBishopP;
                        break;
                    case 'd':
                        piece |= pieceRookP;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                if (piece & TYPE_MASK) {
                    g_reserve[ix] = piece;
                }
                ix++;
        }
    }

    InitializePieceList();
    
    g_toMove = chunks[2].charAt(0) == 'w' ? colorWhite : 0;
    const them = colorWhite - g_toMove;
    
    let hashResult = ShogiSetHash();
    g_hashKeyLow = hashResult.hashKeyLow;
    g_hashKeyHigh = hashResult.hashKeyHigh;

    g_baseEval = 0;
    for (let i = 0; i < 256; i++) {
        if (g_board[i] & colorWhite) {
            g_baseEval += pieceSquareAdj[g_board[i] & TYPE_MASK][i];
            g_baseEval += materialTable[g_board[i] & TYPE_MASK];
        } else if (g_board[i] & colorBlack) {
            g_baseEval -= pieceSquareAdj[g_board[i] & TYPE_MASK][flipTable[i]];
            g_baseEval -= materialTable[g_board[i] & TYPE_MASK];
        }
    }
    for (let i = 0; i < RESERVE_SIZE; i++) {
        if (g_reserve[i] & colorWhite) {
            g_baseEval += inHandTable[g_reserve[i] & TYPE_MASK];
        } else if (g_reserve[i] & colorBlack) {
            g_baseEval -= inHandTable[g_reserve[i] & TYPE_MASK];
        }
    }
    if (!g_toMove) g_baseEval = -g_baseEval;

    g_move50 = 0;
    const kingPos = g_pieceList[(g_toMove | pieceKing) << COUNTER_SIZE];
    g_inCheck = false;
    if (kingPos != 0) {
        g_inCheck = IsSquareAttackable(kingPos, them);
    }

    // Check for king capture (invalid FEN)
    kingPos = g_pieceList[(them | pieceKing) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }

    // Checkmate/stalemate
    if (ShogiGenerateValidMoves().length == 0) {
        return g_inCheck ? 'Checkmate' : 'Stalemate';
    } 

    return '';
}

function GetSlot() {
    for (let i = 0; i < RESERVE_SIZE; i++) {
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

function MakeMove(move) {
    const slot = GetSlot();
    const me = g_toMove >> TYPE_SIZE;
    const otherColor = colorWhite - g_toMove; 
    
    const flags = move & 0xFF000000;
    const to = (move >> 8) & 0xFF;
    const from = move & 0xFF;
    const captured = g_board[to];
    const piece = g_board[from];

    if (captured && (slot === null)) {
        return false;
    }

    g_moveUndoStack[g_moveCount] = new UndoHistory(g_inCheck, g_baseEval, g_hashKeyLow, g_hashKeyHigh, g_move50, captured, slot);
    g_moveCount++;

    if (captured) {
        const newPiece = captured & (~PLAYERS_MASK);
        newPiece |= g_toMove ? colorWhite : colorBlack;
        if ((captured & TYPE_MASK) == piecePawnP) {
             newPiece &= ~TYPE_MASK;
             newPiece |= piecePawn;
        }
        if ((captured & TYPE_MASK) == pieceKnightP) {
             newPiece &= ~TYPE_MASK;
             newPiece |= pieceKnight;
        }
        if ((captured & TYPE_MASK) == pieceLanceP) {
             newPiece &= ~TYPE_MASK;
             newPiece |= pieceLance;
        }
        if ((captured & TYPE_MASK) == pieceSilverP) {
             newPiece &= ~TYPE_MASK;
             newPiece |= pieceSilver;
        }
        if ((captured & TYPE_MASK) == pieceBishopP) {
             newPiece &= ~TYPE_MASK;
             newPiece |= pieceBishop;
        }
        if ((captured & TYPE_MASK) == pieceRookP) {
             newPiece &= ~TYPE_MASK;
             newPiece |= pieceRook;
        }
        g_reserve[slot] = newPiece;
        g_baseEval += inHandTable[newPiece & TYPE_MASK];

        g_hashKeyLow ^= g_zobristLow[slot][newPiece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[slot][newPiece & PIECE_MASK];

        // Remove our piece from the piece list
        const capturedType = captured & PIECE_MASK;
        g_pieceCount[capturedType]--;
        const lastPieceSquare = g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]];
        g_pieceIndex[lastPieceSquare] = g_pieceIndex[to];
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]] = 0;

        g_baseEval += materialTable[captured & TYPE_MASK];
        g_baseEval += pieceSquareAdj[captured & TYPE_MASK][me ? flipTable[to] : to];

        g_hashKeyLow ^= g_zobristLow[to][capturedType];
        g_hashKeyHigh ^= g_zobristHigh[to][capturedType];
        g_move50 = 0;
    }

    if (from == 0) {
        slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
        g_baseEval -= inHandTable[piece & TYPE_MASK];
        g_hashKeyLow ^= g_zobristLow[slot][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[slot][piece & PIECE_MASK];

        const pieceType = piece & PIECE_MASK;
        g_pieceIndex[to] = g_pieceCount[pieceType];
        g_pieceList[(pieceType << COUNTER_SIZE) | g_pieceCount[pieceType]] = to;
        g_pieceCount[pieceType]++;

        g_reserve[slot] = 0;
    } else {
        g_hashKeyLow ^= g_zobristLow[from][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[from][piece & PIECE_MASK];
        g_baseEval -= pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[from] : from];

        // Move our piece in the piece list
        g_pieceIndex[to] = g_pieceIndex[from];
        g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[to]] = to;
    }

    g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
    g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
    g_hashKeyLow ^= g_zobristBlackLow;
    g_hashKeyHigh ^= g_zobristBlackHigh;

    if (flags & moveflagPromotion) {
        const newPiece = piece & (~TYPE_MASK);
        if ((piece & TYPE_MASK) == pieceSilver) newPiece |= pieceSilverP;
           else if ((piece & TYPE_MASK) == pieceKnight) newPiece |= pieceKnightP;
           else if ((piece & TYPE_MASK) == pieceLance) newPiece |= pieceLanceP;
           else if ((piece & TYPE_MASK) == pieceBishop) newPiece |= pieceBishopP;
           else if ((piece & TYPE_MASK) == pieceRook) newPiece |= pieceRookP;
           else newPiece |= piecePawnP;

        g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
        g_board[to] = newPiece;
        g_hashKeyLow ^= g_zobristLow[to][newPiece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][newPiece & PIECE_MASK];
        
        g_baseEval += pieceSquareAdj[newPiece & TYPE_MASK][me == 0 ? flipTable[to] : to];
        g_baseEval -= materialTable[piece & TYPE_MASK];
        g_baseEval += materialTable[newPiece & TYPE_MASK];

        const pawnType = piece & PIECE_MASK;
        const promoteType = newPiece & PIECE_MASK;

        g_pieceCount[pawnType]--;

        const lastPawnSquare = g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]];
        g_pieceIndex[lastPawnSquare] = g_pieceIndex[to];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[lastPawnSquare]] = lastPawnSquare;
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]] = 0;
        g_pieceIndex[to] = g_pieceCount[promoteType];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[promoteType]++;
    } else {
        g_board[to] = piece;
        g_baseEval += pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[to] : to];
    }

    if (from != 0) {
        g_board[from] = pieceEmpty;
    }

    g_toMove = otherColor;
    g_baseEval = -g_baseEval;

    const kingPos = g_pieceList[(pieceKing | (colorWhite - g_toMove)) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        UnmakeMove(move);
        return false;
    }

    g_inCheck = false;
    kingPos = g_pieceList[(pieceKing | g_toMove) << COUNTER_SIZE];
    if (kingPos != 0) {
        g_inCheck = IsSquareAttackable(kingPos, colorWhite - g_toMove);
        if (g_inCheck && (from == 0) && ((piece & TYPE_MASK) == piecePawn)) {
            if (ShogiGenerateValidMoves().length == 0) {
                UnmakeMove(move);
                return false;
            }
        }
    }

    g_repMoveStack[g_moveCount - 1] = g_hashKeyLow;
    g_move50++;

    return true;
}

function UnmakeMove(move) {
    g_toMove = colorWhite - g_toMove;
    g_baseEval = -g_baseEval;
    
    g_moveCount--;
    g_inCheck = g_moveUndoStack[g_moveCount].inCheck;
    g_baseEval = g_moveUndoStack[g_moveCount].baseEval;
    g_hashKeyLow = g_moveUndoStack[g_moveCount].hashKeyLow;
    g_hashKeyHigh = g_moveUndoStack[g_moveCount].hashKeyHigh;
    g_move50 = g_moveUndoStack[g_moveCount].move50;
    
    const otherColor = colorWhite - g_toMove;
    const me = g_toMove >> TYPE_SIZE;
    const them = otherColor >> TYPE_SIZE;
    
    const flags = move & 0xFF000000;
    const captured = g_moveUndoStack[g_moveCount].captured;
    const slot = g_moveUndoStack[g_moveCount].slot;
    const to = (move >> 8) & 0xFF;
    const from = move & 0xFF;

    const piece = g_board[to];

    if (flags & moveflagPromotion) {
        piece = g_board[to] & (~TYPE_MASK);
        if ((g_board[to] & TYPE_MASK) == pieceSilverP) piece |= pieceSilver;
           else if ((g_board[to] & TYPE_MASK) == pieceKnightP) piece |= pieceKnight;
           else if ((g_board[to] & TYPE_MASK) == pieceLanceP) piece |= pieceLance;
           else if ((g_board[to] & TYPE_MASK) == pieceBishopP) piece |= pieceBishop;
           else if ((g_board[to] & TYPE_MASK) == pieceRookP) piece |= pieceRook;
           else piece |= piecePawn;

        g_board[from] = piece;

        const pawnType = g_board[from] & PIECE_MASK;
        const promoteType = g_board[to] & PIECE_MASK;

        g_pieceCount[promoteType]--;

        const lastPromoteSquare = g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]];
        g_pieceIndex[lastPromoteSquare] = g_pieceIndex[to];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[lastPromoteSquare]] = lastPromoteSquare;
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]] = 0;
        g_pieceIndex[to] = g_pieceCount[pawnType];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[pawnType]++;
    } else {
        if (from == 0) {
            g_reserve[(move >> 16) & 0xFF] = g_board[to];
            const capturedType = g_board[to] & PIECE_MASK;
            g_pieceCount[capturedType]--;
            const lastPieceSquare = g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]];
            g_pieceIndex[lastPieceSquare] = g_pieceIndex[to];
            g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
            g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]] = 0;
        } else {
            g_board[from] = g_board[to];
        }
    }

    g_board[to] = captured;

    if (from != 0) {
        // Move our piece in the piece list
        g_pieceIndex[from] = g_pieceIndex[to];
        g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[from]] = from;
    }

    if (captured) {
        g_reserve[slot] = 0;
        // Restore our piece to the piece list
        const captureType = captured & PIECE_MASK;
        g_pieceIndex[to] = g_pieceCount[captureType];
        g_pieceList[(captureType << COUNTER_SIZE) | g_pieceCount[captureType]] = to;
        g_pieceCount[captureType]++;
    }
}

function IsSquareOnPieceLine(target, from) {
    const index = from - target + (VECTORDELTA_SIZE >> 1);
    const piece = g_board[from];
    return (g_vectorDelta[index].pieceMask[(piece >> TYPE_SIZE) & 1] & (1 << (piece & TYPE_MASK))) ? true : false;
}

function IsSquareAttackableFrom(target, from) {
    const index = from - target + (VECTORDELTA_SIZE >> 1);
    const piece = g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> TYPE_SIZE) & 1] & (1 << (piece & TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        const inc = g_vectorDelta[index].delta;
        do {
            from += inc;
            if (from == target) return true;
        } while (g_board[from] == 0);
    }
    return false;
}

function IsSquareAttackable(target, color) {
    // Attackable by pawns?
    const inc = color ? -16 : 16;
    const pawn = (color ? colorWhite : colorBlack) | piecePawn;
    if (g_board[target - inc] == pawn) return true;
    // Attackable by pieces?
    for (let i = pieceKnight; i <= pieceKing; i++) {
        const index = (color | i) << COUNTER_SIZE;
        const square = g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = g_pieceList[++index];
        }
    }
    return false;
}

function GenerateDrop(to, slot) {
    return (to << 8) | (slot << 16);
}

function ShogiGenerateValidMoves() {
    const moveList = new Array();
    const allMoves = new Array();
    GenerateCaptureMoves(allMoves, null);
    GenerateAllMoves(allMoves);
    GenerateDropMoves(allMoves, true);
    for (let i = allMoves.length - 1; i >= 0; i--) {     
        if (MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

function GenerateAllMoves(moveStack) {
    let from, to, piece, pieceIdx, flags = 0;
    const inc = g_toMove ? -16 : 16;

    // Pawn quiet moves
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = g_pieceList[pieceIdx++];
    }

    // Knight quiet moves
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (2 * inc - 1); 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + (2 * inc + 1); 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = g_pieceList[pieceIdx++];
    }

    // KnightP quiet moves
    pieceIdx = (g_toMove | pieceKnightP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // LanceP quiet moves
    pieceIdx = (g_toMove | pieceLanceP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // PawnP quiet moves
    pieceIdx = (g_toMove | piecePawnP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Silver quiet moves
    pieceIdx = (g_toMove | pieceSilver) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 17; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 15; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 17; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 15; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
	from = g_pieceList[pieceIdx++];
    }

    // SilverP quiet moves
    pieceIdx = (g_toMove | pieceSilverP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Gold quiet moves
    pieceIdx = (g_toMove | pieceGold) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Lance quiet moves
    pieceIdx = (g_toMove | pieceLance) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + inc; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += inc; 
        }
	from = g_pieceList[pieceIdx++];
    }

    // Bishop quiet moves
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to -= 15; 
        }
	to = from - 17; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to -= 17; 
        }
	to = from + 15; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += 15; 
        }
	to = from + 17; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += 17; 
        }
	from = g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 16; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to -= 16; 
        }
	to = from - 1; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to--; 
        }
	to = from + 16; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to += 16; 
        }
	to = from + 1; while (g_board[to] == 0) { 
             flags = 0;
             if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
             } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
             }
             moveStack[moveStack.length] = GenerateMove(from, to, flags); to++; 
        }
	from = g_pieceList[pieceIdx++];
    }

    // BishopP quiet moves
    pieceIdx = (g_toMove | pieceBishopP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
        to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // RookP quiet moves
    pieceIdx = (g_toMove | pieceRookP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
        to = from - 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // King quiet moves
    {
 	pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
	from = g_pieceList[pieceIdx];
	to = from - 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

function GenerateCaptureMoves(moveStack) {
    let from, to, piece, pieceIdx, flags = 0;
    const enemy = g_toMove ? colorBlack : colorWhite;
    const inc = g_toMove ? -16 : 16;

    // Pawn captures
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = g_pieceList[pieceIdx++];
    }

    // Knight captures
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (2 * inc - 1); 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + (2 * inc + 1); 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        from = g_pieceList[pieceIdx++];
    }

    // KnightP captures
    pieceIdx = (g_toMove | pieceKnightP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // LanceP captures
    pieceIdx = (g_toMove | pieceLanceP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // PawnP captures
    pieceIdx = (g_toMove | piecePawnP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Silver captures
    pieceIdx = (g_toMove | pieceSilver) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy)  moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 17; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy)  moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from - 15; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy)  moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 17; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy)  moveStack[moveStack.length] = GenerateMove(from, to, flags);
        to = from + 15; 
        flags = 0;
        if (g_toMove) {
            if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
        } else {
            if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
        }
        if (g_board[to] & enemy)  moveStack[moveStack.length] = GenerateMove(from, to, flags);
	from = g_pieceList[pieceIdx++];
    }

    // SilverP captures
    pieceIdx = (g_toMove | pieceSilverP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Gold captures
    pieceIdx = (g_toMove | pieceGold) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc - 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + (inc + 1); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Lance captures
    pieceIdx = (g_toMove | pieceLance) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to += inc; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	from = g_pieceList[pieceIdx++];
    }

    // Bishop captures
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to -= 17; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to += 15; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to += 17; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	from = g_pieceList[pieceIdx++];
    }

    // Rook captures
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 16; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to--; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to += 16; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	to = from; do { to++; } while (g_board[to] == 0); 
        if (g_board[to] & enemy) {
            flags = 0;
            if (g_toMove) {
                 if ((to & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) <= WHITE_PROM) flags = moveflagPromotion;
            } else {
                 if ((to & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
                 if ((from & 0xF0) >= BLACK_PROM) flags = moveflagPromotion;
            }
            moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
	from = g_pieceList[pieceIdx++];
    }

    // BishopP captures
    pieceIdx = (g_toMove | pieceBishopP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }
	
    // RookP captures
    pieceIdx = (g_toMove | pieceRookP) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // King captures
    {
	pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
	from = g_pieceList[pieceIdx];
	to = from - 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

function GenerateDropMoves(moveStack, force) {
   if (!force) return;
   const friend = g_toMove ? colorWhite : colorBlack;
   for (let slot = 0; slot < RESERVE_SIZE; slot++) {
       const piece = g_reserve[slot];
       if ((piece & friend) == 0) continue;
       for (let to = 0; to < 256; to++) {
           if (g_board[to] != 0) continue;
           if ((piece & TYPE_MASK) == pieceKnight) {
               const row = to & 0xF0;
               if (row >= BLACK_PROM && !g_toMove) continue;
               if (row <= WHITE_PROM && g_toMove) continue;
           }
           if (((piece & TYPE_MASK) == piecePawn) || ((piece & TYPE_MASK) == pieceLance)) {
               const row = to & 0xF0;
               if (row == ((Dagaz.Model.HEIGHT + 1) << 4) && !g_toMove) continue;
               if (row == 0x20 && g_toMove) continue;
               if ((piece & TYPE_MASK) == piecePawn) {
                   let isFound = false;
                   const ix = (g_toMove | piecePawn) << COUNTER_SIZE;
                   const pawnPos = g_pieceList[ix++];
                   while (pawnPos != 0) {
                       if ((pawnPos & 0xF) == (to & 0xF)) isFound = true;
                       pawnPos = g_pieceList[ix++];
                   }
                   if (isFound) continue;
               }
           }
           moveStack[moveStack.length] = GenerateDrop(to, slot);
       }
   }
}

function See(move) {
    const from = move & 0xFF;
    const to = (move >> 8) & 0xFF;

    const fromPiece = g_board[from];

    const fromValue = g_seeValues[fromPiece & PIECE_MASK];
    const toValue = g_seeValues[g_board[to] & PIECE_MASK];

    if (fromValue <= toValue) {
        return true;
    }

    if (move >> 24) {
        // Castles, promotion, ep are always good
        return true;
    }

    const us = (fromPiece & colorWhite) ? colorWhite : 0;
    const them = colorWhite - us;

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    const inc = (fromPiece & colorWhite) ? -16 : 16; // Note: this is capture direction from to, so reversed from normal move direction
    if ((g_board[to + inc] & PIECE_MASK) == (piecePawn | them)) {
        return false;
    }

    const themAttacks = new Array();

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    const captureDeficit = fromValue - toValue;

    // Slider attacks
    g_board[from] = 0;
    for (let pieceType = pieceKnight; pieceType <= pieceRookP; pieceType++) {
        if (SeeAddSliderAttacks(to, them, themAttacks, pieceType)) {
            if (captureDeficit > g_seeValues[pieceType]) {
                g_board[from] = fromPiece;
                return false;
            }
        }
    }

    // Pawn defenses 
    // At this point, we are sure we are making a "losing" capture.  The opponent can not capture back with a 
    // pawn.  They cannot capture back with a minor/major and stand pat either.  So, if we can capture with 
    // a pawn, it's got to be a winning or equal capture. 
    if ((g_board[to - inc] & PIECE_MASK) == (piecePawn | us)) {
        g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceKing);

    // Our attacks
    const usAttacks = new Array();
    for (let pieceType = pieceKnight; pieceType <= pieceKing; pieceType++) {
        SeeAddSliderAttacks(to, us, usAttacks, pieceType);
    }

    g_board[from] = fromPiece;

    // We are currently winning the amount of material of the captured piece, time to see if the opponent 
    // can get it back somehow.  We assume the opponent can capture our current piece in this score, which 
    // simplifies the later code considerably. 
    const seeValue = toValue - fromValue;

    for (; ; ) {
        let capturingPieceValue = 1000;
        let capturingPieceIndex = -1;

        // Find the least valuable piece of the opponent that can attack the square
        for (let i = 0; i < themAttacks.length; i++) {
            if (themAttacks[i] != 0) {
                const pieceValue = g_seeValues[g_board[themAttacks[i]] & TYPE_MASK];
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

        const capturingPieceSquare = themAttacks[capturingPieceIndex];
        themAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);

        // Our turn to capture
        capturingPieceValue = 1000;
        capturingPieceIndex = -1;

        // Find our least valuable piece that can attack the square
        for (let i = 0; i < usAttacks.length; i++) {
            if (usAttacks[i] != 0) {
                const pieceValue = g_seeValues[g_board[usAttacks[i]] & TYPE_MASK];
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
    const index = square - target + (VECTORDELTA_SIZE >> 1);
    const delta = -g_vectorDelta[index].delta;
    if (delta == 0) return;
    square += delta;
    while (g_board[square] == 0) {
        square += delta;
    }
    if ((g_board[square] & PLAYERS_MASK) && IsSquareOnPieceLine(target, square)) {
        if ((g_board[square] & colorWhite) == us) {
            usAttacks[usAttacks.length] = square;
        } else {
            themAttacks[themAttacks.length] = square;
        }
    }
}

function SeeAddSliderAttacks(target, us, attacks, pieceType) {
    const pieceIdx = (us | pieceType) << COUNTER_SIZE;
    const attackerSq = g_pieceList[pieceIdx++];
    let hit = false;
    while (attackerSq != 0) {
        if (IsSquareAttackableFrom(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
            hit = true;
        }
        attackerSq = g_pieceList[pieceIdx++];
    }
    return hit;
}
