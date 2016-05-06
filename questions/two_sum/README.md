Two Sum
=======
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.



Brute Force
-----------
[![](../../assets/run_code.png)](https://repl.it/COEo)
```js
function twoSum(nums, target) {
  var numA
  var numB
  console.log('Your array: ',  nums);

  for (var i = 0; i < nums.length; i++) {
    numA = nums[i]
    for (var j = i + 1; j < nums.length; j++) {
      numbB = nums[j]
      if (target == numA + numbB) {
          console.log('Answer: ', [i, j]);
          return // [i, j]
      }
    }
  }
  console.log('Answer: No two sum solution :(');
}
```

One Pass
--------
[![](../../assets/run_code.png)](https://repl.it/COFU)
```js
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
      console.log('Answer:', [currNumIndex, complimentIndex])
      return // [currNumIndex, complimentIndex]
    }
    map[currNum] = i
  }
  console.log('There were no matches :(')
}
```
ToDo:
 - [ ] finish understanding one pass solution
 - [ ] complete and understand recursive solution
 
