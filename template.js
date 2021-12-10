const fs = require("fs");

const part1 = () => {};

const part2 = () => {};

const data = fs.readFileSync("./data/dayn_input.txt", "utf8");
const parsedData = data.split("\n");
console.log(`Part1: ${part1(parsedData)}`);
console.log(`Part2: ${part2(parsedData)}`);

module.exports = {
    part1,
    part2,
};
