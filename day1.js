const fs = require('fs');
const data = fs.readFileSync('./day1_input.txt', 'utf8');
const numbers = data.split('\n').map(n => parseInt(n));
// use sliding window to count number of times number increase
let numIncreases = 0;
for (let i=1; i<numbers.length; i++){
    if (numbers[i] > numbers[i-1]) {
        numIncreases += 1;
    }
}
console.log(numIncreases);