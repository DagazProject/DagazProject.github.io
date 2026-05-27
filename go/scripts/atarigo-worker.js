"use strict";

importScripts('../../underscore/underscore-min.js');

const WORK_OFFSET = 256;
const MAX_MOVES   = 100;

const g_board     = new Int16Array(WORK_OFFSET * 2);
const g_moves     = new Int16Array(MAX_MOVES);
let   g_stat      = [];

let   g_width     = 9;
let   g_height    = 9;
let   g_player    = 1;
let   g_movecnt   = 0;

function Configure(data) {
   const r = data.match(/\s*([^\s=]+)\s*=\s*(\d+)/);
   if (r) {
       if (r[1] == 'WIDTH')  g_width  = +r[2];
       if (r[1] == 'HEIGHT') g_height = +r[2];
       if (r[1] == 'PLAYER') g_player = (r[2] == 1) ? 1 : -1;
   }
}

function MakeMove(move) {
   let   dame  = [];
   const group = [move];
   const enemy = [];
   for (let dir = 0; dir < 4; dir++) {
       const pos = Navigate(move, dir, WORK_OFFSET);
       if (pos === null) continue;
       if (g_board[pos] == 0) {
           dame.push[pos];
           continue;
       }
       if (g_board[pos] * g_player > 0) {
           group.push(pos);
           continue;
       }
       if (g_board[pos] * g_player == -1) {
           dame.push[pos];
           Capture(pos);
           continue;
       }
       enemy.push(pos);
   }
   if (group.length == 1) {
       g_board[move] = dame.length * g_player;
       return true;
   }
   dame = [];
   for (let ix = 0; ix < group.length; ix++) {
       const p = group[ix];
       for (let d = 0; d < 4; d++) {
           const q = Navigate(p, d, WORK_OFFSET);
           if (q === null) continue;
           if (_.indexOf(group, q) >= 0) continue;
           if (g_board[q] == 0) {
               if (_.indexOf(dame, q) < 0) {
                   dame.push(q);
               }
               continue;
           }
           if (g_board[q] * g_player < 0) continue;
           group.push(q);
       }
   }
   if (dame.length == 0) return false;
   for (let ix = 0; ix < group.length; ix++) {
       g_board[group[ix]] = dame.length * g_player;
   }
   for (let ix = 0; ix < enemy.length; ix++) {
       const info = GetGroupInfo(enemy[ix]);
       for (let i = 0; i < info.g.length; i++) {
           g_board[info.g[i]] = info.d;
       }
   }
   return true;
}

function GetGroupInfo(pos) {
   const group = [pos];
   const player = g_board[pos];
   const dame = [];
   if (player == 0) return [];
   for (let ix = 0; ix < group.length; ix++) {
       const p = group[ix];
       for (let d = 0; d < 4; d++) {
           const q = Navigate(p, d, WORK_OFFSET);
           if (q === null) continue;
           if (_.indexOf(group, q) >= 0) continue;
           if (g_board[q] == 0) {
               if (_.indexOf(dame, q) < 0) dame.push(q);
               continue;
           }
           if (g_board[q] * player < 0) continue;
           group.push(q);
       }
   }
   return {
     g: group,
     d: dame.length * player
   };
}

function Capture(pos) {
   const info = GetGroupInfo(pos);
   for (let ix = 0; ix < info.g.length; ix++) {
       g_board[info.g[ix]] = 0;
   }
}

function Init() {
   for (let pos = 0; pos < g_width * g_height; pos++) {
       g_board[pos + WORK_OFFSET] = g_board[pos];
   }
}

function GetMoves() {
   g_movecnt = 0;
   for (let i = 0; i < g_stat.length; i++) {
       for (let j = 0; j < g_stat[i].dame.length; j++) {
           g_moves[g_movecnt] = g_stat[i].dame[j];
           g_movecnt++;
       }
   }
}

function GetForcedMoves() {
   g_movecnt = 0;
   if (g_stat.length == 0) {
       const row = _.random(2, g_height - 3);
       const col = _.random(2, g_width - 3);
       g_moves[g_movecnt] = MakeSquare(row, col);
       g_movecnt++;
       return;
   }
   for (let i = 0; i < g_stat.length; i++) {
       if ((g_stat[i].player < 0) && (g_stat[i].dame.length == 1)) {
           g_moves[g_movecnt] = g_stat[i].dame[0];
           g_movecnt++;
       }
   }
   for (let i = 0; i < g_stat.length; i++) {
       if ((g_stat[i].player > 0) && (g_stat[i].dame.length == 1)) {
           g_moves[g_movecnt] = g_stat[i].dame[0];
           g_movecnt++;
       }
   }
}

function Prepare() {
   for (let ix = 0; ix < g_stat.length; ix++) {
       const s = g_stat[ix];
       for (let i = 0; i < s.group.length; i++) {
           g_board[s.group[i]] = s.player * s.dame.length;
       }
   }
}

function Analyze() {
   g_stat = [];
   for (let row = 0; row < g_height; row++) {
       for (let col = 0; col < g_width; col++) {
            const done = [];
            const p = MakeSquare(row, col);
            if (_.indexOf(done, p) >= 0) continue;           
            const player = (g_board[p] > 0) ? 1 : -1;
            if (player == 0) continue;
            const group = [p]; const dame = [];
            for (let ix = 0; ix < group.length; ix++) {
                 const pos = group[ix];
                 done.push(pos);
                 for (let dir = 0; dir < 4; dir++) {
                     const q = Navigate(pos, dir);
                     if ((q !== null) && (_.indexOf(done, q) < 0)) {
                         done.push(q);
                         const v = g_board[p];
                         if (v == 0) {
                             dame.push(q);
                             continue;
                         }
                         if (v * player > 0) {
                             group.push(q);
                         }
                     }
                 }
            }
            g_stat.push({
                 player: player,
                 group:  group,
                 dame:   dame
            });
       }
   }
   Prepare();
   Init();
}

function InitializeFromFen(fen) {
   const chunks = fen.split(' ');

   let row = 0;
   let col = 0;

   const pieces = chunks[0];
   for (let i = 0; i < pieces.length; i++) {
        const c = pieces.charAt(i);
        if (c == '/') {
            row++;
            col = 0;
            if (row >= g_height) break;
        } else {
            if (c >= '0' && c <= '9') {
                for (let j = 0; j < parseInt(c); j++) {
                    g_board[MakeSquare(row, col)] = 0;
                    col++;
                }
            } else {
                let piece = 0;
                switch (c) {
                    case 'b':
                    case 'B':
                       piece = -g_player;
                       break;
                    case 'w':
                    case 'W':
                       piece = g_player;
                       break;
                }
                g_board[MakeSquare(row, col)] = piece;
                col++;
            }
        }
   }
   Analyze();
}

function Navigate(pos, dir, offset) {
   if (_.isUndefined(offset)) offset = 0;
   pos -= offset;
   const row = (pos / g_width) | 0;
   const col = pos % g_width;
   switch (dir) {
      case 0: // n
         if (row <= 0) return null;
         return MakeSquare(row - 1, col, offset);
      case 1: // e
         if (col >= g_width - 1) return null;
         return MakeSquare(row, col + 1, offset);
      case 2: // s
         if (row >= g_height - 1) return null;
         return MakeSquare(row + 1, col, offset);
      case 3: // w
         if (col <= 0) return null;
         return MakeSquare(row, col - 1, offset);
   }
   return null;
}

function MakeSquare(row, col, offset) {
   if (_.isUndefined(offset)) offset = 0;
   return row * g_width + col + offset;
}

function GetMoveFromString(str) {
    // преобразует строку типа "a1" в индекс клетки
    const col = str.charCodeAt(0) - 'a'.charCodeAt(0);
    const row = parseInt(str.substr(1)) - 1;
    if (row >= 0 && row < g_height && col >= 0 && col < g_width) {
        return row * g_width + col;
    }
    return -1;
}

function cloneState(state) {
    return {
        board: new Int16Array(state.board),
        player: state.player,
        movecnt: state.movecnt
    };
}

// Перемешивание массива (Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function applyMove(state, move) {
    const newBoard = new Int16Array(state.board);
    const oldBoard = g_board;
    const oldPlayer = g_player;
    const oldMovecnt = g_movecnt;

    g_board = newBoard;
    g_player = state.player;
    g_movecnt = state.movecnt;

    const success = MakeMove(move);

    g_board = oldBoard;
    g_player = oldPlayer;
    g_movecnt = oldMovecnt;

    if (!success) return null;

    return {
        board: newBoard,
        player: -state.player,
        movecnt: state.movecnt + 1
    };
}

// Случайная симуляция от заданного состояния, возвращает победителя (1, -1 или 0)
function simulate(state) {
    let curState = cloneState(state);
    const maxMoves = MAX_MOVES;

    while (curState.movecnt < maxMoves) {
        // собираем все пустые клетки
        const empty = [];
        for (let i = 0; i < g_width * g_height; i++) {
            if (curState.board[i] === 0) empty.push(i);
        }
        if (empty.length === 0) break;

        shuffleArray(empty);
        let moved = false;
        for (let idx = 0; idx < empty.length; idx++) {
            const move = empty[idx];
            const next = applyMove(curState, move);
            if (next !== null) {
                curState = next;
                moved = true;
                break;
            }
        }
        if (!moved) break; // нет легальных ходов
    }

    // проверка, есть ли легальные ходы у текущего игрока
    let hasLegal = false;
    for (let i = 0; i < g_width * g_height; i++) {
        if (curState.board[i] === 0) {
            if (applyMove(curState, i) !== null) {
                hasLegal = true;
                break;
            }
        }
    }
    if (!hasLegal) {
        // текущий игрок не может ходить -> побеждает противник
        return -curState.player;
    }
    return 0; // ничья (лимит ходов или нет победителя)
}

class MCTSNode {
    constructor(state, parent = null, move = null) {
        this.state = state;          // {board, player, movecnt}
        this.parent = parent;
        this.move = move;            // ход, приведший к этому узлу
        this.children = [];
        this.visits = 0;
        this.wins = 0;
        // непросмотренные ходы – все пустые клетки
        this.untriedMoves = [];
        for (let i = 0; i < g_width * g_height; i++) {
            if (state.board[i] === 0) this.untriedMoves.push(i);
        }
    }

    isFullyExpanded() {
        return this.untriedMoves.length === 0;
    }

    isTerminal() {
        // терминальный, если нет легальных ходов для текущего игрока
        for (let i = 0; i < g_width * g_height; i++) {
            if (this.state.board[i] === 0) {
                if (applyMove(this.state, i) !== null) return false;
            }
        }
        return true;
    }
}

function selectBestChild(node, C) {
    let bestValue = -Infinity;
    let bestChild = null;
    const logParent = Math.log(node.visits);
    for (const child of node.children) {
        const exploit = child.wins / child.visits;
        const explore = C * Math.sqrt(logParent / child.visits);
        const ucb = exploit + explore;
        if (ucb > bestValue) {
            bestValue = ucb;
            bestChild = child;
        }
    }
    return bestChild;
}

function expand(node) {
    while (node.untriedMoves.length > 0) {
        const moveIndex = Math.floor(Math.random() * node.untriedMoves.length);
        const move = node.untriedMoves[moveIndex];
        // удаляем этот ход из списка
        node.untriedMoves[moveIndex] = node.untriedMoves[node.untriedMoves.length - 1];
        node.untriedMoves.pop();

        const newState = applyMove(node.state, move);
        if (newState !== null) {
            const child = new MCTSNode(newState, node, move);
            node.children.push(child);
            return child;
        }
    }
    return null;
}

function backpropagate(node, winner) {
    while (node !== null) {
        node.visits++;
        if (winner === node.state.player) {
            node.wins++;
        }
        node = node.parent;
    }
}

function mcts(rootState, timeLimitMs) {
    const root = new MCTSNode(cloneState(rootState));
    const startTime = Date.now();
    const C = Math.sqrt(2);

    while (Date.now() - startTime < timeLimitMs) {
        let node = root;
        // Selection
        while (!node.isTerminal() && node.isFullyExpanded()) {
            node = selectBestChild(node, C);
            if (!node) break;
        }
        if (!node || node.isTerminal()) {
            // Симуляция прямо из терминального узла
            const winner = simulate(node ? node.state : root.state);
            backpropagate(node || root, winner);
            continue;
        }
        // Expansion
        const child = expand(node);
        if (!child) {
            // Не удалось расширить – узел, видимо, терминальный
            const winner = simulate(node.state);
            backpropagate(node, winner);
            continue;
        }
        // Simulation
        const winner = simulate(child.state);
        // Backpropagation
        backpropagate(child, winner);
    }

    // Выбор лучшего хода из корня (по количеству посещений)
    let bestMove = null;
    let bestVisits = -1;
    for (const child of root.children) {
        if (child.visits > bestVisits) {
            bestVisits = child.visits;
            bestMove = child.move;
        }
    }
    return bestMove;
}

function FinishMoveLocalTesting(move) {
    if (move === undefined || move === null) return;
    MakeMove(move);
    g_player = -g_player;
    g_movecnt++;
    Analyze();
    // оповестим основную программу о сделанном ходе (опционально)
    self.postMessage("move " + move);
}

function FinishPlyCallback() {
    // коллбэк после каждого хода (можно оставить пустым)
}

function Search(callback, maxDepth, plyCallback) {
    // ограничение времени: 500 мс (можно настроить)
    const timeLimit = 500;
    const currentState = {
        board: new Int16Array(g_board),
        player: g_player,
        movecnt: g_movecnt
    };
    const bestMove = mcts(currentState, timeLimit);
    if (bestMove !== null && callback) {
        callback(bestMove);
    }
    if (plyCallback) plyCallback();
}

self.onmessage = function (e) {
    if (e.data.match("^config") == "config") {
        Configure(e.data.substr(7, e.data.length - 7));
    } else if (e.data.match("^position") == "position") {
        ResetGame();
        const result = InitializeFromFen(e.data.substr(9, e.data.length - 9));
        if (result.length != 0) {
            self.postMessage("message " + result);
        }
    } else if (e.data.match("^search") == "search") {
        g_timeout = parseInt(e.data.substr(7, e.data.length - 7), 10);
        Search(FinishMoveLocalTesting, 99, FinishPlyCallback);
    } else if (e.data == "analyze") {
        g_timeout = 99999999999;
        Search(null, 99, FinishPlyCallback);
    } else {
        MakeMove(GetMoveFromString(e.data));
    }
}
