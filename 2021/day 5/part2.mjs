let rawInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

let parsedInput = rawInput.split("\n").map((s) => {
  let row = s.split(" -> ");
  let [x1, y1] = row[0].split(",").map(Number);
  let [x2, y2] = row[1].split(",").map(Number);

  let m;
  if (x1 === x2 || y1 === y2) {
    m = null;
  } else m = calGradient({ x1, x2, y1, y2 });

  return { m, x1, y1, x2, y2 };
});

function calGradient({ x1, x2, y1, y2 }) {
  return (y2 - y1) / (x2 - x1);
}

let markedPoints = new Map();
function walk({ m, x1, y1, x2, y2 }) {
  let minX = Math.min(x1, x2);
  let minY = Math.min(y1, y2);
  let maxX = Math.max(x1, x2);
  let maxY = Math.max(y1, y2);
  m;
  if (m) {
  } else if (x1 === x2) {
  } else if (y1 === y2) {
  } else {
    throw Error("Nope possible");
  }
}

for (let row of parsedInput) {
  row;
}

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let i of range(1, 5)) {
  console.log(i);
}

// todo
