import { createRequire } from "module";
const require = createRequire(import.meta.url);
const nums = require("./data.json");

export function numberOfTimesArrayIncreases(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      count++;
    }
  }
  console.log(count); // 1301
  return count;
}

numberOfTimesArrayIncreases(nums);
