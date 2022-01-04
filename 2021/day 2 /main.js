const fs = require("fs");
let input = fs.readFileSync("./input.txt", "utf-8").split("\n");

// solution one
(function task1(instructions) {
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
    }
  }

  console.log(`Anser 1: ${horizontal * depth}`);
})(input);

// solution two
(function task1(instructions) {
  let aim = 0,
    horizontalPosition = 0,
    depth = 0;

  for (let instrction of instructions) {
    const [direction, value] = instrction.split(" ");
    const displacement = Number(value);
    if (direction === "forward") {
      horizontalPosition += displacement;
      depth += aim * displacement;
    } else if (direction === "up") {
      aim -= displacement;
    } else if (direction === "down") {
      aim += displacement;
    }
  }
  console.log(`Answer 2: ${depth * horizontalPosition}`);
})(input);
