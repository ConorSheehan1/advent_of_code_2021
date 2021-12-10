const fs = require("fs");
const { sum } = require("lodash");

const part1 = (numbers) => {
    // use sliding window to count number of times number increase
    let numIncreases = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            numIncreases += 1;
        }
    }
    return numIncreases;
};

const part2 = (numbers) => {
    let sumIncreased = 0;
    for (let i = 0; i < numbers.length - 3; i++) {
        const firstSum = sum(numbers.slice(i, i + 3));
        const secondSum = sum(numbers.slice(i + 1, i + 4));
        if (secondSum > firstSum) {
            sumIncreased += 1;
        }
    }
    return sumIncreased;
};

const data = fs.readFileSync("./data/day1_input.txt", "utf8");
const parsedData = data.split("\n").map((n) => parseInt(n));
console.log(`Part1: ${part1(parsedData)}`);
console.log(`Part2: ${part2(parsedData)}`);

module.exports = {
    part1,
    part2,
};
