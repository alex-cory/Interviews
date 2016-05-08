/**
 * Time Complexity:  O(n²)
 * Space Complexity: O(1)
 *
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {number[]}
 */
function twoSum(nums, target) {
  var firstNum
  var sedondNum
  for (var i = 0; i < nums.length; i++) {
    firstNum = nums[i]
    for (var j = i + 1; j < nums.length; j++) {
      sedondNum = nums[j]
      // console.log('Does target:' + target + ' = firstNum:' + firstNum + ' + sedondNum: ' + sedondNum + '?');
      if (target == firstNum + sedondNum) {
          console.log('Answer: ', [i, j]);
          return // [i, j]
      }
    }
  }
  console.log('Answer: No two sum solution :(');
}

var nums = [9, 1, 7, 3, 8]
console.log('Your array: ',  nums);
twoSum(nums, 9)