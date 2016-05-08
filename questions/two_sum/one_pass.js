/**
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 *
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {number[]}
 */
function twoSum(nums, target) {
  var map = []
  var currNum
  var compliment
  for (var i = 0; i < nums.length; i++) {
    currNum = nums[i]
    compliment = target - currNum
    if (map[compliment]) {
      var currNumIndex = i
      var complimentIndex = map[compliment]
      console.log([currNumIndex, complimentIndex]);
      return // [map[compliment], i];
    }
    map[currNum] = i
  }
  console.log('There were no matches :(');
}

// [       [
//  0: 0,    0: 9,
//  8: 1,    1: 1,
//  2: 2,    2: 7,
//  6: 3,    3: 3,
//  1: 4     4: 8
// ]       ]
 var nums = [9, 1, 7, 3, 8]
 twoSum(nums, 9)