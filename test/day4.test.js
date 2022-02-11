const { expect } = require("chai");
const fs = require("fs");
const { part1, part2 } = require("../src/day4.js");

const data = fs.readFileSync("./data/day4_test_input.txt", "utf8");
const rawLines = data.split("\n");

describe("day4", function () {
    describe("part1", function () {
        it("should return 4512", function () {
            expect(part1(rawLines)).to.equal(4512);
        });
    });
    describe("part2", function () {
        it("should return", function () {
            expect(part2(rawLines)).to.equal(1924);
        });
    });
});
