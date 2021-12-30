import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dinaryDiagnostics = require("./data.json");

// const temp = [
//   "00100",
//   "11110",
//   "10110",
//   "10111",
//   "10101",
//   "01111",
//   "00111",
//   "11100",
//   "10000",
//   "11001",
//   "00010",
//   "01010",
// ];

function lifeSupportRating(arr) {
  let oxgenRating = parseInt(calculateOxygenGeneratorRating(arr, 0)[0], 2);
  let c02rating = parseInt(calculateCO2ScrubberRating(arr, 0)[0], 2);

  console.log(oxgenRating * c02rating);
  return oxgenRating * c02rating;
}

function generateMap(arr, index) {
  let map = new Map();

  for (let data of arr) {
    let obj = map.get(index) || {};

    if (obj[Number(data[index])]) {
      obj[Number(data[index])] += 1;
    } else obj[Number(data[index])] = 1;

    map.set(index, obj);
  }

  return map;
}

function calculateOxygenGeneratorRating(arr, index) {
  if (arr.length === 1) return arr;

  let map = generateMap(arr, index);

  let filteredResults = arr.filter((item) => {
    let data = map.get(index);
    let filterOn = data["0"] > data["1"] ? "0" : "1";
    return item[index] === filterOn;
  });

  return calculateOxygenGeneratorRating(filteredResults, index + 1);
}

function calculateCO2ScrubberRating(arr, index) {
  if (arr.length === 1) return arr;

  let map = generateMap(arr, index);

  let filteredResults = arr.filter((item) => {
    let data = map.get(index);
    let filterOn = data["0"] > data["1"] ? "1" : "0";
    return item[index] === filterOn;
  });

  return calculateCO2ScrubberRating(filteredResults, index + 1);
}

lifeSupportRating(dinaryDiagnostics);
