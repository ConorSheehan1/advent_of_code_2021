// https://stackoverflow.com/a/36164530/6305204
const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));

module.exports = {
    transpose,
};
