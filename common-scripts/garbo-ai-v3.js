"use strict";

(function() {

Dagaz.AI.g_maxply       = 10;
Dagaz.AI.g_timeout      = 3000;
Dagaz.Model.WIDTH       = 8;
Dagaz.Model.HEIGHT      = 8;
Dagaz.AI.NOISE_FACTOR   = 0;
Dagaz.AI.Q_SEARCH_LIMIT = -20;
Dagaz.AI.Q_SEARCH_ARITY = 100;
Dagaz.AI.STALMATED      = true;
Dagaz.AI.INC_CHECK_PLY  = true;

Dagaz.AI.PIECE_MASK     = 0x0F;
Dagaz.AI.TYPE_MASK      = 0x07;
Dagaz.AI.PLAYERS_MASK   = 0x18;
Dagaz.AI.COUNTER_SIZE   = 4;
Dagaz.AI.TYPE_SIZE      = 3;

Dagaz.AI.colorBlack     = 0x10;
Dagaz.AI.colorWhite     = 0x08;

Dagaz.AI.g_board = new Array(256);
Dagaz.AI.g_toMove = 0;

Dagaz.AI.g_baseEval    = 0;
Dagaz.AI.g_hashKeyLow  = 0;
Dagaz.AI.g_hashKeyHigh = 0;
Dagaz.AI.g_inCheck     = false;

Dagaz.AI.g_zobristLow = 0;
Dagaz.AI.g_zobristHigh = 0;
Dagaz.AI.g_zobristBlackLow = 0;
Dagaz.AI.g_zobristBlackHigh = 0;

Dagaz.AI.g_moveCount = 0;

Dagaz.AI.g_move50 = 0;
Dagaz.AI.g_repMoveStack = new Array();

var g_hashSize = 1 << 22;
var g_hashMask = g_hashSize - 1;
var g_hashTable;
var g_killers;

var hashflagAlpha = 1;
var hashflagBeta  = 2;
var hashflagExact = 3;

Dagaz.AI.g_pieceIndex = new Array(256);
Dagaz.AI.g_pieceList  = new Array(2 * 16 * 64);
Dagaz.AI.g_pieceCount = new Array(2 * 16);

var once       = true;
var inProgress = false;
var resultMove = null;
var player     = null;

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "external") || (type == "smart") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var g_startTime;
var g_nodeCount;
var g_qNodeCount;
var g_searchValid;
var g_globalPly = 0;

var minEval = -2000000;
var maxEval = +2000000;

var minMateBuffer = minEval + 2000;
var maxMateBuffer = maxEval - 2000;

function HashEntry(lock, value, flags, hashDepth, bestMove, globalPly) {
    this.lock = lock;
    this.value = value;
    this.flags = flags;
    this.hashDepth = hashDepth;
    this.bestMove = bestMove;
}

function Search(finishMoveCallback, maxPly, finishPlyCallback) {
    var lastEval;
    var alpha = minEval;
    var beta = maxEval;
    
    g_globalPly++;
    g_nodeCount = 0;
    g_qNodeCount = 0;
    g_searchValid = true;
    
    var bestMove = 0;
    var value;
    
    g_startTime = (new Date()).getTime();

    var i;
    for (i = 1; i <= maxPly && g_searchValid; i++) {
        var tmp = AlphaBeta(i, 0, alpha, beta);
        if (!g_searchValid) break;

        value = tmp;

        if (value > alpha && value < beta) {
            alpha = value - 500;
            beta = value + 500;

            if (alpha < minEval) alpha = minEval;
            if (beta > maxEval) beta = maxEval;
        } else if (alpha != minEval) {
            alpha = minEval;
            beta = maxEval;
            i--;
        }

        if (g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask] != null) {
            bestMove = g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask].bestMove;
        }

        if (finishPlyCallback != null) {
            finishPlyCallback(bestMove, value, (new Date()).getTime() - g_startTime, i);
        }
    }

    if (finishMoveCallback != null) {
        finishMoveCallback(bestMove, value, (new Date()).getTime() - g_startTime, i - 1);
    }
}

function QSearch(alpha, beta, ply, depth) {
    g_qNodeCount++;

    var realEval = Dagaz.AI.g_inCheck ? (minEval + 10) : Dagaz.AI.Evaluate();
    
    if (realEval >= beta) 
        return realEval;

    if (realEval > alpha)
        alpha = realEval;

    if (!g_searchValid) return realEval;
    if (ply < Dagaz.AI.Q_SEARCH_LIMIT) {
        if (_.isUndefined(Dagaz.AI.player) || (Dagaz.AI.player == Dagaz.AI.g_toMove)) return realEval;
    }

    if ((g_nodeCount & 127) == 127) {
        if ((new Date()).getTime() - g_startTime > Dagaz.AI.g_timeout) {
            // Time cutoff
            g_searchValid = false;
            return beta - 1;
        }
    }

    var moves = new Array();
    var moveScores = new Array();
    var wasInCheck = Dagaz.AI.g_inCheck;

    if (wasInCheck) {
        moves = Dagaz.AI.GenerateAllMoves();
    } else {
        moves = Dagaz.AI.GenerateCaptureMoves();
    }

    if (Dagaz.AI.QScoreMove) {
        for (var i = 0; i < moves.length; i++) {
            moveScores[i] = Dagaz.AI.QScoreMove(moves[i]);
        }
    }

    for (var i = 0; i < moves.length; i++) {
        if (Dagaz.AI.Q_SEARCH_ARITY && (i >= Dagaz.AI.Q_SEARCH_ARITY)) break;

        if (Dagaz.AI.QScoreMove) {
            var bestMove = i;
            for (var j = moves.length - 1; j > i; j--) {
                if (moveScores[j] > moveScores[bestMove]) {
                    bestMove = j;
                }
            }

            var tmpMove = moves[i];
            moves[i] = moves[bestMove];
            moves[bestMove] = tmpMove;
            
            var tmpScore = moveScores[i];
            moveScores[i] = moveScores[bestMove];
            moveScores[bestMove] = tmpScore;
        }

        if (!Dagaz.AI.MakeMove(moves[i])) {
            continue;
        }

        var value = -QSearch(-beta, -alpha, ply - 1, depth + 1);
        
        Dagaz.AI.UnmakeMove(moves[i]);

        if (value > realEval) {
            if (value >= beta) 
                return value;
            
            if (value > alpha)
                alpha = value;
            
            realEval = value;
        }
    }

    return realEval;
}

function StoreHash(value, flags, ply, move, depth) {
    if (value >= maxMateBuffer)
        value += depth;
    else if (value <= minMateBuffer)
        value -= depth;
    g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask] = new HashEntry(Dagaz.AI.g_hashKeyHigh, value, flags, ply, move);
}

function IsRepDraw() {
    var stop = Dagaz.AI.g_moveCount - 1 - Dagaz.AI.g_move50;
    stop = stop < 0 ? 0 : stop;
    for (var i = Dagaz.AI.g_moveCount - 5; i >= stop; i -= 2) {
        if (Dagaz.AI.g_repMoveStack[i] == Dagaz.AI.g_hashKeyLow)
            return true;
    }
    return false;
}

function offset(n) {
  var r = '';
  while (n > 0) {
      r = r + ' ';
      n--;
  }
  return r;
}

function AlphaBeta(ply, depth, alpha, beta) {
    if (ply <= 0) {
        if (_.isUndefined(Dagaz.AI.player) || (Dagaz.AI.player == Dagaz.AI.g_toMove)) 
            return QSearch(alpha, beta, 0, depth + 1);
    }

    g_nodeCount++;
    if ((g_nodeCount & 127) == 127) {
        if ((new Date()).getTime() - g_startTime > Dagaz.AI.g_timeout) {
            // Time cutoff
            g_searchValid = false;
            return beta - 1;
        }
    }

    if (depth > 0 && IsRepDraw()) return 0;

    // Mate distance pruning
    var oldAlpha = alpha;
    alpha = alpha < minEval + depth * 10 ? alpha : minEval + depth * 10;
    beta = beta > maxEval - (depth + 1) * 10 ? beta : maxEval - (depth + 1) * 10;
    if (alpha >= beta)
       return alpha;

    var hashMove = null;
    var hashFlag = hashflagAlpha;
    var hashNode = g_hashTable[Dagaz.AI.g_hashKeyLow & g_hashMask];
    if (hashNode != null && hashNode.lock == Dagaz.AI.g_hashKeyHigh) {
        hashMove = hashNode.bestMove;
    }

    var inCheck  = Dagaz.AI.g_inCheck;

    var moveMade = false;
    var realEval = minEval;

    var movePicker = new MovePicker(hashMove, depth, g_killers[depth][0], g_killers[depth][1]);

    for (;;) {
        var currentMove = movePicker.nextMove();
        if (currentMove == 0) {
            break;
        }

        var plyToSearch = ply - 1;

        if (!Dagaz.AI.MakeMove(currentMove)) {
            continue;
        }

        if (Dagaz.AI.g_inCheck && Dagaz.AI.INC_CHECK_PLY) {
            // Check extensions
            if (depth < Dagaz.AI.CHECK_EXT_LIMIT) plyToSearch++;
        }

        var w = 0;
        if (Dagaz.AI.NOISE_FACTOR && (depth == 0)) {
            w = _.random(0, Dagaz.AI.NOISE_FACTOR);
        }

        var value = w - AlphaBeta(plyToSearch, depth + 1, -beta, -alpha);
        moveMade = true;

        Dagaz.AI.UnmakeMove(currentMove);

        if (!g_searchValid) {
            return alpha;
        }

        if (value > realEval) {
            if (value >= beta) {
                StoreHash(value, hashflagBeta, ply, currentMove, depth);
                return value;
            }
            if (value > oldAlpha) {
                hashFlag = hashflagExact;
                alpha = value;
            }

            realEval = value;
            hashMove = currentMove;
        }
    }

    if (!moveMade) {
        // If we have no valid moves it's either stalemate or checkmate
        if (Dagaz.AI.g_inCheck || Dagaz.AI.STALMATED) 
            // Checkmate.
            return minEval + depth * 10;
        else 
            // Stalemate
            return 0;
    }

    StoreHash(realEval, hashFlag, ply, hashMove, depth);
    return realEval;
}

Dagaz.AI.ResetGame = function() {
    g_killers = new Array(128);
    for (var i = 0; i < 128; i++) {
        g_killers[i] = [0, 0];
    }

    g_hashTable = new Array(g_hashSize);

    Dagaz.AI.rand = new Dagaz.AI.MT(0x1badf00d);

    Dagaz.AI.g_zobristLow = new Array(256);
    Dagaz.AI.g_zobristHigh = new Array(256);
    for (var i = 0; i < 256; i++) {
        Dagaz.AI.g_zobristLow[i] = new Array(32);
        Dagaz.AI.g_zobristHigh[i] = new Array(32);
        for (var j = 0; j < 64; j++) {
            Dagaz.AI.g_zobristLow[i][j] = Dagaz.AI.rand.next(32);
            Dagaz.AI.g_zobristHigh[i][j] = Dagaz.AI.rand.next(32);
        }
    }
    Dagaz.AI.g_zobristBlackLow = Dagaz.AI.rand.next(32);
    Dagaz.AI.g_zobristBlackHigh = Dagaz.AI.rand.next(32);
}

Dagaz.AI.SetHash = function() {
    var result = new Object();
    result.hashKeyLow = 0;
    result.hashKeyHigh = 0;
    for (var i = 0; i < 256; i++) {
        var piece = Dagaz.AI.g_board[i];
        if (piece & Dagaz.AI.PLAYERS_MASK) {
            result.hashKeyLow ^= Dagaz.AI.g_zobristLow[i][piece & Dagaz.AI.PIECE_MASK]
            result.hashKeyHigh ^= Dagaz.AI.g_zobristHigh[i][piece & Dagaz.AI.PIECE_MASK]
        }
    }
    if (!Dagaz.AI.g_toMove) {
        result.hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
        result.hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    }
    return result;
}

Dagaz.AI.InitializePieceList = function() {
    for (var i = 0; i < 64; i++) {
        Dagaz.AI.g_pieceCount[i] = 0;
        for (var j = 0; j < 64; j++) {
            // 0 is used as the terminator for piece lists
            Dagaz.AI.g_pieceList[(i << Dagaz.AI.COUNTER_SIZE) | j] = 0;
        }
    }
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & 0x80) continue;
        Dagaz.AI.g_pieceIndex[i] = 0;
        if ((Dagaz.AI.g_board[i] & Dagaz.AI.PLAYERS_MASK) && (Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK)) {
            var piece = Dagaz.AI.g_board[i] & Dagaz.AI.PIECE_MASK;
            Dagaz.AI.g_pieceList[(piece << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[piece]] = i;
            Dagaz.AI.g_pieceIndex[i] = Dagaz.AI.g_pieceCount[piece];
            Dagaz.AI.g_pieceCount[piece]++;
        }
    }
}

Dagaz.AI.ScoreMove = function(move) {
    return 0;
}

Dagaz.AI.IsHashMoveValid = function(move) {
    return false;
}

function MovePicker(hashMove, depth, killer1, killer2) {
    this.hashMove = hashMove;
    this.depth = depth;
    this.killer1 = killer1;
    this.killer2 = killer2;

    this.moves = Dagaz.AI.GenerateAllMoves();
    this.moveCount = 0;
    this.atMove = -1;
    this.moveScores = null;
    this.stage = 0;

    // DEBUG:
    this.stage = 3;

    this.nextMove = function () {
        if (++this.atMove == this.moveCount) {
            this.stage++;
            if (this.stage == 1) {
                if (this.hashMove != null && Dagaz.AI.IsHashMoveValid(hashMove)) {
                    this.moves[0] = hashMove;
                    this.moveCount = 1;
                }
                if (this.moveCount != 1) {
                    this.hashMove = null;
                    this.stage++;
                }
            }

            if (this.stage == 2) {
                if (Dagaz.AI.IsHashMoveValid(this.killer1) &&
                    this.killer1 != this.hashMove) {
                    this.moves[this.moves.length] = this.killer1;
                    this.moveCount = this.moves.length;
                } else {
                    this.killer1 = 0;
                    this.stage++;
                }
            }

            if (this.stage == 3) {
                if (Dagaz.AI.IsHashMoveValid(this.killer2) &&
                    this.killer2 != this.hashMove) {
                    this.moves[this.moves.length] = this.killer2;
                    this.moveCount = this.moves.length;
                } else {
                    this.killer2 = 0;
                    this.stage++;
                }
            }

            if (this.stage == 4) {
                this.moveCount = this.moves.length;
                this.moveScores = new Array(this.moveCount);
                // Move ordering
                for (var i = this.atMove; i < this.moveCount; i++) this.moveScores[i] = Dagaz.AI.ScoreMove(this.moves[i]);
                // No moves, onto next stage
                if (this.atMove == this.moveCount) this.stage++;
            }

            if (this.stage == 5)
                return 0;
        }

        var bestMove = this.atMove;
        for (var j = this.atMove + 1; j < this.moveCount; j++) {
            if (this.moveScores[j] > this.moveScores[bestMove]) {
                bestMove = j;
            }
        }

        if (bestMove != this.atMove) {
            var tmpMove = this.moves[this.atMove];
            this.moves[this.atMove] = this.moves[bestMove];
            this.moves[bestMove] = tmpMove;

            var tmpScore = this.moveScores[this.atMove];
            this.moveScores[this.atMove] = this.moveScores[bestMove];
            this.moveScores[bestMove] = tmpScore;
        }

        var candidateMove = this.moves[this.atMove];
        if ((this.stage > 1 && candidateMove == this.hashMove) ||
            (this.stage > 2 && candidateMove == this.killer1)  ||
            (this.stage > 3 && candidateMove == this.killer2)) {
            return this.nextMove();
        }

        return this.moves[this.atMove];
    }
}

function debugPlyCallback(bestMove, value, time, ply) {
    console.log(Dagaz.AI.FormatMove(bestMove) + ', v = ' + value + ', t = ' + time + ', ply = ' + ply);
}

var garbo = function(bestMove, value, timeTaken, ply) {
  resultMove = Dagaz.AI.FormatMove(bestMove);  
  inProgress = false;
  console.log('Garbo: ' + resultMove + ', value = ' + value + ', time = ' + timeTaken + ', ply = ' + ply);
  if (Dagaz.AI.callback) {
      Dagaz.AI.callback(resultMove);
  }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board  = board;
  inProgress = false;
  resultMove = null;
  player     = board.player;
  if (once) {
      Dagaz.AI.ResetGame();
      once = false;
  }
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  if (resultMove !== null) {
      var bestMove = null;
      _.each(moves, function(move) {
          if (move.toString().startsWith(resultMove)) {
              bestMove = move;
          }
      });
      if (bestMove !== null) {
          return {
              done: true,
              move: bestMove,
              time: Date.now() - ctx.timestamp,
              ai:  "garbo"
         };
      }
      if (this.parent) {
          return this.parent.getMove(ctx);
      }
  }
  if (inProgress) {
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "garbo"
      };
  }
  var setup = Dagaz.Model.getSetup(ctx.design, ctx.board);
  var result = setup.match(/[?&]setup=(.*)/);
  if (result) {
      inProgress = true;
      var fen = result[1];
      setTimeout(function () {
            var s = Dagaz.AI.InitializeFromFen(fen);
            if (s == '') {
                Search(garbo, Dagaz.AI.g_maxply, debugPlyCallback);
            } else {
                console.log(s);
            }
        }, 100);
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "garbo"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
