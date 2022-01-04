const fs = require("fs");
let input = fs.readFileSync("./input.txt", "utf-8").split("\n").map(Number);

// solution one
(function task1(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      count++;
    }
  }

  console.log(`Answer 1: ${count}`);
})(input);

// solution two
(function task1(arr, windowSize) {
  const mArr = [];

  for (let i = 0; arr[i + windowSize - 1]; i++) {
    const sumForWindow = arr[i] + arr[i + 1] + arr[i + 2];
    mArr.push(sumForWindow);
  }

  let count = 0;
  for (let i = 1; i < mArr.length; i++) {
    if (mArr[i] > mArr[i - 1]) {
      count++;
    }
  }

  console.log(`Answer 2: ${count}`);
})(input, 3);
