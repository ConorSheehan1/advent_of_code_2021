const { expect } = require("chai");
const { part1, part2 } = require("../day2.js");

const testData = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
];

describe("day1", function () {
    describe("part1", function () {
        it("should return 150", function () {
            expect(part1(testData)).to.equal(150);
        });
    });
    describe("part2", function () {
        it("should return 900", function () {
            expect(part2(testData)).to.equal(900);
        });
    });
});
