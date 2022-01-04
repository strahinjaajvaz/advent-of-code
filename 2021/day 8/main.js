const fs = require("fs");
let input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((row) => {
    console.log(row);
    let [rawPattern, rawOutput] = row.split(" | ");

    let pattern = rawPattern.split(" ");
    let output = rawOutput.split(" ");

    return { pattern, output };
  });

(function task1() {
  let count = 0;
  for (let { output } of input) {
    count += output.reduce((acc, cur) => {
      let length = cur.length;
      if (length === 2 || length === 3 || length === 4 || length === 7) {
        acc++;
      }
      return acc;
    }, 0);
  }
  console.log(`Answer 1: ${count}`);
})();

//  0:      1:      2:      3:      4:
//  aaaa    ....    aaaa    aaaa    ....
// b    c  .    c  .    c  .    c  b    c
// b    c  .    c  .    c  .    c  b    c
//  ....    ....    dddd    dddd    dddd
// e    f  .    f  e    .  .    f  .    f
// e    f  .    f  e    .  .    f  .    f
//  gggg    ....    gggg    gggg    ....

//   5:      6:      7:      8:      9:
//  aaaa    aaaa    aaaa    aaaa    aaaa
// b    .  b    .  .    c  b    c  b    c
// b    .  b    .  .    c  b    c  b    c
//  dddd    dddd    ....    dddd    dddd
// .    f  e    f  .    f  e    f  .    f
// .    f  e    f  .    f  e    f  .    f
//  gggg    gggg    ....    gggg    gggg

/**
 * 0 => a b c e f g
 * 1 => b f
 * 2 => a c d e g
 * 3 => a c d f g
 * 4 => b c d f
 * 5 => a b d f g
 * 6 => a b d e f g
 * 7 => a c f
 * 8 => a b c d e f g
 * 9 => a b c d f g
 */

/**
be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce
 */

function getMapOfLengthToNumber() {}

(function task2() {
  let count = 0;
  for (let { pattern, output } of input) {
  }
  console.log(`Answer 1: ${count}`);
})();
