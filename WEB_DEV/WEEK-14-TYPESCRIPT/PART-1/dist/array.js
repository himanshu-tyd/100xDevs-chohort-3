"use strict";
const postive = [2, 3, 2, 2];
function maxArray(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxArray([3, 2, 1]));
