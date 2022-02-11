const { expect } = require("chai");
const fs = require("fs");
const { part1, part2 } = require("../src/day5.js");

const data = fs.readFileSync("./data/day5_test_input.txt", "utf8");
const rawLines = data.split("\n");

describe("day5", function () {
    describe("part1", function () {
        it("should return 5", function () {
            expect(part1(rawLines)).to.equal(5);
        });
    });
    // describe("part2", function () {
    //     it("should return 1", function () {
    //         expect(part2(rawLines)).to.equal(1);
    //     });
    // });
});
