const fs = require("fs");

const dayNumber = process.argv[2];
const { part1, part2 } = require(`./day${dayNumber}.js`);

const data = fs.readFileSync(`./data/day${dayNumber}_input.txt`, "utf8");
const rawLines = data.split("\n");
console.log(`Part1: ${part1(rawLines)}`);
console.log(`Part2: ${part2(rawLines)}`);
