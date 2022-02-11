const { expect } = require("chai");
const fs = require("fs");
const { part1, part2 } = require("../src/day__n__.js");

const data = fs.readFileSync("./data/day__n___test_input.txt", "utf8");
const rawLines = data.split("\n");

describe("day__n__", function () {
    describe("part1", function () {
        it("should return 1", function () {
            expect(part1(rawLines)).to.equal(1);
        });
    });
    describe("part2", function () {
        it("should return 1", function () {
            expect(part2(rawLines)).to.equal(1);
        });
    });
});
