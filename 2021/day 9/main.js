const fs = require("fs");
let input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((row) => row.split("").map(Number));

let adjecentCell = (x, y) => [
  [x, y - 1],
  [x, y + 1],
  [x - 1, y],
  [x + 1, y],
];

function allNeighboursSmaller(board, r, c) {
  let val = board[r][c];
  let smaller = true;
  for (let [x, y] of adjecentCell(r, c)) {
    if (board[x]?.[y] && val < board[x][y]) {
      continue;
    } else if (board[x]?.[y] !== undefined) {
      smaller = false;
      break;
    }
  }
  return smaller ? val + 1 : 0;
}

(function task1() {
  let sum = 0;
  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input[r].length; c++) {
      sum += allNeighboursSmaller(input, r, c);
    }
  }

  console.log(`Answer 1: ${sum}`);
})();
