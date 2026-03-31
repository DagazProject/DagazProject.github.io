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
   // TODO:

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
