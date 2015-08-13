/**
 *
 */

/**
 * Logic Before Starting:
 *
 *
 */
var array = [1, 7, 3, 4];
var leftSums = [];

var newSum = 1;
var newRightSum = 1;

// [192, 96, 64, 48]

// [1, 2, 8, 48]
for (var i in array) {
  leftSums[i] = newSum;
  newSum *= array[i];
}

// [192, 48, 8, 1]
for (var i=array.length - 1; i >= 0; i--) {
  leftSums[i] *= newRightSum;
  newRightSum *= array[i];
}

console.log(leftSums);
