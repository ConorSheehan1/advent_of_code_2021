const fs = require("fs");
const { transpose } = require("./utils");

const parseData = (lines) => {
    const numbersToDraw = lines[0].split(",").map(v => parseInt(v));
    let boards = [];
    for (line of lines.slice(1, lines.length)) {
        if (line === '') {
            boards.push([]);
        } else {
            const boardNums = line.split(" ").filter(v => v !== "").map(n => parseInt(n));
            // ref not updating here
            // boards.slice(-1).push(boardNums);
            boards[boards.length - 1].push(boardNums);
        }
    }
    return {
        numbersToDraw,
        boards
    };
};

const bingo = ({ numbersToDraw, boards }) => {
    const transposedBoards = boards.map(board => transpose(board));
    for (let i = boards[0][0].length; i < numbersToDraw.length; i++) {
        const numbersDrawn = numbersToDraw.slice(0, i);
        for (board of boards) {
            for (row of board) {
                if (row.every(n => numbersDrawn.includes(n))) {
                    return { board, numbersDrawn }
                }
            }
        }
        for (transposedBoard of transposedBoards) {
            for (column of transposedBoard) {
                if (column.every(n => numbersDrawn.includes(n))) {
                    return { board: transposedBoard, numbersDrawn }
                }
            }
        }
    }
};

const calculateScore = ({ board, numbersDrawn }) => {
    let total = 0;
    for (row of board) {
        for (number of row) {
            if (!numbersDrawn.includes(number)) {
                total += number
            }
        }
    }
    return total * numbersDrawn.slice(-1);
}

const part1 = (rawLines) => {
    const { numbersToDraw, boards } = parseData(rawLines);
    const { board, numbersDrawn } = bingo({ numbersToDraw, boards });
    return calculateScore({ board, numbersDrawn });
};

const part2 = () => {
    // const { numbersToDraw, boards } = parseData(rawLines);
    // while (boards.length > 1) {
    //     const { board, numbersDrawn } = bingo({ numbersToDraw, boards });
    // }
};

// TODO: extract every day to main function, run from cli with num as arg, avoid running full during tests.
const data = fs.readFileSync("./data/day4_input.txt", "utf8");
const rawLines = data.split("\n");
console.log(`Part1: ${part1(rawLines)}`);
console.log(`Part2: ${part2(rawLines)}`);

module.exports = {
    part1,
    part2,
};
