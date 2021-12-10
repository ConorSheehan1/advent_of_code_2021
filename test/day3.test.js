const { expect } = require("chai");
const { part1, part2 } = require("../day3.js");

const testData = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
];

describe("day3", function () {
    describe("part1", function () {
        it("should return 198", function () {
            expect(part1(testData)).to.equal(198);
        });
    });
    describe("part2", function () {
        it("should return 230", function () {
            expect(part2(testData)).to.equal(230);
        });
    });
});
