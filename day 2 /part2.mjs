import { createRequire } from "module";
const require = createRequire(import.meta.url);
const instructions = require("./data.json");

function aimDepth(arr) {
  let aim = 0,
    horizontalPosition = 0,
    depth = 0;

  for (let instrction of arr) {
    const [direction, value] = instrction.split(" ");
    const displacement = Number(value);
    if (direction === "forward") {
      horizontalPosition += displacement;
      depth += aim * displacement;
    } else if (direction === "up") {
      aim -= displacement;
    } else if (direction === "down") {
      aim += displacement;
    } else {
      throw new Error("Shouldn't happen");
    }
  }

  console.log(depth * horizontalPosition);

  return depth * horizontalPosition;
}

aimDepth(instructions);
