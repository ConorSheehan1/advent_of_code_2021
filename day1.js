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

module.exports = {
    part1,
    part2,
};
