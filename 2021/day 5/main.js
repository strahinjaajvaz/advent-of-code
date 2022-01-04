const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((row) =>
    row.split(" -> ").map((point) => {
      let [x, y] = point.split(",");
      return { x, y };
    })
  );

function* range(start, stop) {
  for (let i = start; i < stop; i++) {
    yield i;
  }
}

// solution one
(function task1() {
  let map = new Map();
  for (let [{ x: x1, y: y1 }, { x: x2, y: y2 }] of input) {
    let xMin = Math.min(x1, x2);
    let xMax = Math.max(x1, x2);
    let yMin = Math.min(y1, y2);
    let yMax = Math.max(y1, y2);

    if (x1 === x2) {
      for (let y of range(yMin, yMax + 1)) {
        map.set(`${x1}_${y}`, (map.get(`${x1}_${y}`) || 0) + 1);
      }
    } else if (y1 === y2) {
      for (let x of range(xMin, xMax + 1)) {
        map.set(`${x}_${y1}`, (map.get(`${x}_${y1}`) || 0) + 1);
      }
    }
  }

  let count = 0;
  for (let [key, value] of map) {
    if (value >= 2) count++;
  }

  console.log(`Anser 1: ${count}`);
})();

// solution two
(function task1() {
  let map = new Map();
  for (let [{ x: x1, y: y1 }, { x: x2, y: y2 }] of input) {
    let xMin = Math.min(x1, x2);
    let xMax = Math.max(x1, x2);
    let yMin = Math.min(y1, y2);
    let yMax = Math.max(y1, y2);

    if (x1 === x2) {
      for (let y of range(yMin, yMax + 1)) {
        map.set(`${x1}_${y}`, (map.get(`${x1}_${y}`) || 0) + 1);
      }
    } else if (y1 === y2) {
      for (let x of range(xMin, xMax + 1)) {
        map.set(`${x}_${y1}`, (map.get(`${x}_${y1}`) || 0) + 1);
      }
    } else {
      let m = (y2 - y1) / (x2 - x1);
      let c = y1 - m * x1;
      for (let x of range(xMin, xMax + 1)) {
        let y = m * x + c;
        map.set(`${x}_${y}`, (map.get(`${x}_${y}`) || 0) + 1);
      }
    }
  }

  let count = 0;
  for (let [key, value] of map) {
    if (value >= 2) count++;
  }

  console.log(`Anser 2: ${count}`);
})();
