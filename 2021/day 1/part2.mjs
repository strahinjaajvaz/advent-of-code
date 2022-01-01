import { createRequire } from "module";
const require = createRequire(import.meta.url);
const nums = require("../challenge 2/data.json");

import { numberOfTimesArrayIncreases } from "./part1.mjs";

function slidingWindowSum(arr, windowSize) {
  const mArr = [];

  for (let i = 0; arr[i + windowSize - 1]; i++) {
    const sumForWindow = arr[i] + arr[i + 1] + arr[i + 2];
    mArr.push(sumForWindow);
  }
  return mArr;
}

const slidingArr = slidingWindowSum(nums, 3);
const count = numberOfTimesArrayIncreases(slidingArr);
console.log(count);
