const fs = require("fs");
let [nums, ...boards] = fs.readFileSync("./input.txt", "utf-8").split("\n\n");
nums = nums.split(",").map(Number);
boards = boards.map((row) =>
  row.split("\n").map((cell) =>
    cell
      .split(" ")
      .filter((s) => s !== "")
      .map(Number)
  )
);

function* range(start, stop) {
  for (let i = start; i < stop; i++) {
    yield i;
  }
}

function check() {
  let markedBoard = Array(boards.length)
    .fill()
    .map(() =>
      Array(5)
        .fill()
        .map(() => Array(5).fill(false))
    );
  let first;
  let last;
  let marked = new Set();
  for (let num of nums) {
    for (let b of range(0, boards.length)) {
      for (let r of range(0, 5)) {
        for (let c of range(0, 5)) {
          if (num === boards[b][r][c]) {
            markedBoard[b][r][c] = true;
          }
        }
      }

      if (!marked.has(b)) {
        let won = false;
        for (let r of range(0, 5)) {
          let ok = true;
          for (let c of range(0, 5)) {
            if (!markedBoard[b][r][c]) {
              ok = false;
            }
          }
          if (ok) won = true;
        }
        for (let c of range(0, 5)) {
          let ok = true;
          for (let r of range(0, 5)) {
            if (!markedBoard[b][r][c]) {
              ok = false;
            }
          }
          if (ok) won = true;
        }

        if (won) {
          let sum = 0;
          for (let r of range(0, 5)) {
            for (let c of range(0, 5)) {
              if (!markedBoard[b][r][c]) {
                sum += boards[b][r][c];
              }
            }
          }
          if (!first) {
            first = sum * num;
          }
          last = sum * num;
          marked.add(b);
        }
      }
    }
  }

  return [first, last];
}

// solution one
(function task1() {
  let [answer] = check();
  console.log(`Anser 1: ${answer}`);
})();

// solution two
(function task1() {
  let [_, answer] = check();
  console.log(`Answer 2: ${answer}`);
})();
