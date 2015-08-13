/**
 * Logic Before:
 * Divide by 1st denomination
 *  if the result has no remainder
 *    then increment count of ways
 *  otherwise
 *    then divide the remainder
 *
 * Test Cases:
 * 1. all lowest denominations
 * 2. highest to lowest denominations
 * 3. multiple ways to do highest to lowest
 */

// var theAmmount = 16;
// var theDenoms = [1, 5, 10];
var theAmmount = 34;
var theDenoms = [25, 5, 10, 1];


console.log(number_of_ways(theAmmount, theDenoms));

function number_of_ways(ammount, coins, curr_total, coin_index) {
  curr_total = curr_total || 0;
  coin_index = coin_index || 0;

  var total_for_this_branch = 0;

  for (var i = coin_index; i < coins.length; i++) {

    var curr_coin = coins[i];
    var potential_total = curr_coin + curr_total;

    if (potential_total === ammount) {
      total_for_this_branch++
    } else if (potential_total < ammount) {
      // add the new coin to the total
      total_for_this_branch += number_of_ways(ammount, coins, curr_total + curr_coin, i);
    }
  }

  return total_for_this_branch;
}

/**
 * Way 2:
 * Spit out the count
 */
// function number_of_ways(ammount, coins) {
//
//   var count = 0;
//
//   function recurse(curr_total, coin_index) {
//
//     for (var i = coin_index; i < coins.length; i++) {
//
//       var curr_coin = coins[i];
//       var potential_total = curr_coin + curr_total;
//
//       if (potential_total === ammount) {
//         count++
//       } else if (potential_total < ammount) {
//         // add the new coin to the total
//         recurse(curr_total + curr_coin, i);
//       }
//     }
//   }
//   recurse(0, 0);
//
//   return count;
// }

/**
 * Way 1:
 * You can spit out the possibilities
 */
// function number_of_ways(ammount, coins) {
//
//   var count = 0;
//   coins.sort(function(a,b) {
//     return b - a;
//   });
//
//   function recurse(ways) {
//
//     // adding the coin values in the `ways` array
//     var prior_total = ways.length ? ways.reduce(function(runningTotal, currNum) { return runningTotal + currNum; }) : 0;
//
//     // start the index 
//     var index_where_to_start_coin_possibilities = ways.length ? coins.indexOf(ways[ways.length - 1]) : 0;
//
//     for (var i = index_where_to_start_coin_possibilities; i < coins.length; i++) {
//
//       var curr_coin = coins[i];
//       var potential_total = curr_coin + prior_total;
//       // creating new array to pass a new array into the recursive function again
//       // var newWays = ways.slice(0);
//
//       // newWays.push(coins[i]);
//
//       if (potential_total === ammount) {
//         count++
//         // console.log('Ways:', newWays);
//       } else if (potential_total < ammount) {
//         // add the new coin to the total
//
//         recurse(ways.concat(curr_coin));
//       }
//     }
//   }
//   recurse([]);
//
//   console.log(count);
// }
