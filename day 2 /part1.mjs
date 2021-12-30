import { createRequire } from "module";
const require = createRequire(import.meta.url);
const instructions = require("./data.json");

function dive(instructions) {
  let horizontal = 0,
    depth = 0;

  for (let instruction of instructions) {
    const [direction, value] = instruction.split(" ");

    if (direction === "forward") {
      horizontal += Number(value);
    } else if (direction === "down") {
      depth += Number(value);
    } else if (direction === "up") {
      depth -= Number(value);
    } else {
      throw new Error("Can't happen");
    }
  }

  console.log(horizontal, depth, horizontal * depth);

  return horizontal * depth;
}

dive(instructions);
