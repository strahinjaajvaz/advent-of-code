const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8").split(",").map(Number);

// solution one
(function task1(n) {
  let arr = Array(9).fill(0);
  input.forEach((num) => {
    arr[num] = (arr[num] || 0) + 1;
  });

  for (let i = 0; i < n; i++) {
    let val = arr.shift();
    arr = [...arr, val];
    arr[6] += val;
  }
  let count = arr.reduce((a, c) => a + c, 0);
  console.log(`Anser 1: ${count}`);
})(80);

// solution two
(function task2(n) {
  let arr = Array(9).fill(0);
  input.forEach((num) => {
    arr[num] = (arr[num] || 0) + 1;
  });

  for (let i = 0; i < n; i++) {
    let val = arr.shift();
    arr = [...arr, val];
    arr[6] += val;
  }
  let count = arr.reduce((a, c) => a + c, 0);
  console.log(`Anser 2: ${count}`);
})(256);
