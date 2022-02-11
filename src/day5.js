const parseCoords = (rawLines) => {
    const validCoords = [];
    for (line of rawLines) {
        const [startLine, endLine] = line.split(" -> ");
        const [x1, y1] = startLine.split(",");
        const [x2, y2] = endLine.split(",");
        // only keep straight lines
        if (x1 === x2 || y1 === y2) {
            validCoords.push([x1, y1, x2, y2]);
        }
    }
    return validCoords;
};

const covertStartCoordsToFullLines = (coords) => {
    const allLinePoints = [];
    for (coord of coords) {
        const [x1, y1, x2, y2] = coord;
        if (x1 === x2) {
            // vertical line
            for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
                allLinePoints.push([x1, i]);
            }
        } else {
            // horizontal line
            for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
                allLinePoints.push([i, y1]);
            }
        }
    }
    return allLinePoints;
};

const findOverlappingPoints = (allPoints) => {
    const seenPoints = [];
    const overlappingPoints = [];
    for (coord of allPoints) {
        const strCoord = coord.join(",");
        if (
            seenPoints.includes(strCoord) &&
            !overlappingPoints.includes(strCoord)
        ) {
            overlappingPoints.push(strCoord);
        }
        seenPoints.push(strCoord);
    }
    return overlappingPoints;
};

const part1 = (rawLines) => {
    const coords = parseCoords(rawLines);
    const allLinePoints = covertStartCoordsToFullLines(coords);
    const overlappingPoints = findOverlappingPoints(allLinePoints);
    return overlappingPoints.length;
};

const part2 = () => {};

module.exports = {
    part1,
    part2,
};
