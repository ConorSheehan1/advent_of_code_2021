const { expect } = require("chai");
const { part1, part2 } = require("../src/day1.js");
const testData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("day1", function () {
    describe("part1", function () {
        it("should return 7", function () {
            expect(part1(testData)).to.equal(7);
        });
    });
    describe("part2", function () {
        it("should return 5", function () {
            expect(part2(testData)).to.equal(5);
        });
    });
});
