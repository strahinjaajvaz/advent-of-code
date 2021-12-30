import { createRequire } from "module";
const require = createRequire(import.meta.url);
const binaryDiagnostics = require("./data.json");

function calculateGammaAndEpsilonRate(arr) {
  const map = new Map();

  for (const data of arr) {
    for (let i = 0; i < data.length; i++) {
      let obj = map.get(i) || {};

      if (obj[Number(data[i])]) {
        obj[Number(data[i])] += 1;
      } else obj[Number(data[i])] = 1;

      map.set(i, obj);
    }
  }

  let gamma = "";
  let epsilon = "";

  for (let [_, data] of map) {
    let zeros = data["0"];
    let ones = data["1"];

    if (zeros > ones) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
  }

  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

calculateGammaAndEpsilonRate(binaryDiagnostics);
