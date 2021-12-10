const fs = require("fs");

const part1 = (moves) => {
    let horizontalPosition = 0;
    let depthPosition = 0;
    // note `for in` is for enumeration
    for (move of moves) {
        const [direction, value] = move.split(" ");
        if (direction === "up") {
            depthPosition -= parseInt(value);
        } else if (direction === "down") {
            depthPosition += parseInt(value);
        } else if (direction === "forward") {
            horizontalPosition += parseInt(value);
        } else if (direction === "back") {
            horizontalPosition -= parseInt(value);
        } else {
            throw Error(`Unknown direction ${direction}`);
        }
    }
    return horizontalPosition * depthPosition;
};

const part2 = (moves) => {
    let aim = 0;
    let horizontalPosition = 0;
    let depthPosition = 0;
    for (move of moves) {
        const [direction, value] = move.split(" ");
        if (direction === "up") {
            aim -= parseInt(value);
        } else if (direction === "down") {
            aim += parseInt(value);
        } else if (direction === "forward") {
            horizontalPosition += parseInt(value);
            depthPosition += aim * parseInt(value);
        } else if (direction === "back") {
            horizontalPosition -= parseInt(value);
        } else {
            throw Error(`Unknown direction ${direction}`);
        }
    }
    return horizontalPosition * depthPosition;
};

const data = fs.readFileSync("./data/day2_input.txt", "utf8");
const parsedData = data.split("\n");
console.log(`Part1: ${part1(parsedData)}`);
console.log(`Part2: ${part2(parsedData)}`);

module.exports = {
    part1,
    part2,
};
