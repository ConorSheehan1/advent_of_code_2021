const { transpose } = require("./utils");

// https://stackoverflow.com/a/1053865/6305204
function mode(array) {
    if (array.length == 0) return null;
    var modeMap = {};
    var maxEl = array[0],
        maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null) modeMap[el] = 1;
        else modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    // tie breaks should return 1
    if (modeMap["0"] === modeMap["1"]) {
        return "1";
    }
    return maxEl;
}

const part2Filter = (pool, filterFunc) => {
    let ans = "";
    let i = 0;
    const numLength = pool[0].length;
    while (i < numLength && pool.length > 1) {
        const bits = pool.map((num) => num[i]);
        const targetBit = filterFunc(bits);
        ans += targetBit;
        i++;
        pool = pool.filter((num) => num.startsWith(ans));
    }
    return pool[0];
};

const part1 = (binaryNumbers) => {
    let gammaRate = "";
    let epsilonRate = "";
    let matrix = binaryNumbers.map((binaryNumber) => binaryNumber.split(""));
    let transposed = transpose(matrix);
    for (arr of transposed) {
        const mostCommon = mode(arr);
        // since binary can assume least common is opposite of most common
        const leastCommon = mostCommon === "1" ? "0" : "1";
        gammaRate += mostCommon;
        epsilonRate += leastCommon;
    }
    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

const part2 = (binaryNumbers) => {
    const o2Rating = part2Filter(binaryNumbers, (bits) => mode(bits));
    const co2Rating = part2Filter(binaryNumbers, (bits) =>
        mode(bits) === "1" ? "0" : "1"
    );
    return parseInt(o2Rating, 2) * parseInt(co2Rating, 2);
};

module.exports = {
    part1,
    part2,
};
