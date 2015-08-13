/**
 * I have an array stock_prices_yesterday where:
 * 
 * The indices are the time in minutes past trade opening time, which was 9:30am 
 * local time.
 *
 *  - The values are the price in dollars of Apple stock at that time.
 *  - For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.
 * 
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Question:
 *
 * Write an efficient algorithm for computing the best profit I could have made from 
 * 1 purchase and 1 sale of 1 Apple stock yesterday.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 
 * No "shorting"—you must buy before you sell. You may not buy and sell in the same 
 * time step (at least 1 minute must pass).
 *
 * It is not sufficient to simply take the difference between the highest price and 
 * the lowest price, because the highest price may come before the lowest price. 
 * You must buy before you sell.
 *
 * What if the stock value goes down all day? In that case, the best profit will 
 * be negative.
 * 
 * You can do this in O(n) time and O(1) space!
 *
 * From: [Interview Cake](http://bit.ly/1KUV1aM)
 */

/**
 * Logic Before Starting:
 * 
 * 
 */
// var stock_prices_yesterday = [489, 497, 488, 492, 502, 505, 514, 492, 518]; // test case 1: 30
// var stock_prices_yesterday = [518, 497, 488, 492, 502, 505, 514, 487, 489]; // test case 2: 26
var stock_prices_yesterday = [599, 397, 488, 542, 502, 505, 614, 492, 489]; // test case 3: 217
var the_max_profit = get_max_profit(stock_prices_yesterday);
console.log(the_max_profit);


function get_max_profit(stock_prices) {
  var overall_max_profit = 0;
  var curr_min = stock_prices[0];
  var curr_max = stock_prices[0];

  for (var i = 1; i < stock_prices.length; i++) {

    if (stock_prices[i] < curr_min) {
      curr_min = stock_prices[i];
      curr_max = stock_prices[i];
    }

    if (stock_prices[i] > curr_max) {
      curr_max = stock_prices[i];
      overall_max_profit = Math.max(curr_max - curr_min, overall_max_profit);
    }

  } 

  return overall_max_profit;
}

/**
 * First Attempt
 *
 * Time Complexity: O(n)
 * Space Complexity: 2O(n)
 *
 * Incorrect because the highest price may be before the lowest price.
 */
// function get_max_profit(stock_prices) {
//   var overall_max_profit = 0;
//   var curr_max_profit = 0;
//   var curr_min = stock_prices[0];
//   var curr_max = stock_prices[0];
//
//   for (var i = 1; i < stock_prices.length; i++) {
//
//     if (stock_prices[i] < curr_min) {
//       curr_min = stock_prices[i];
//       curr_max = stock_prices[i];
//     }
//
//     if (stock_prices[i] > curr_max) {
//       curr_max = stock_prices[i];
//       curr_max_profit = curr_max - curr_min;
//       overall_max_profit = Math.max(curr_max_profit, overall_max_profit);
//     }
//
//   } 
//
//   return overall_max_profit;
// }



/**
 * Best Solution:
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
// function get_max_profit(stock_prices_yesterday) {
//
//   // make sure we have at least 2 prices
//   if (stock_prices_yesterday.length < 2) {
//     console.log('Getting a profit requires at least 2 prices');
//   }
//
//   // we'll greedily update min_price and max_profit, so we initialize
//   // them to the first price and the first possible profit
//   var min_price = stock_prices_yesterday[0];
//   var max_profit = stock_prices_yesterday[1] - stock_prices_yesterday[0];
//
//   for (var i in stock_prices_yesterday) {
//     var current_price = stock_prices_yesterday[i];
//
//     // skip the first (0th) time
//     // we can't sell at the first time, since we must buy first,
//     // and we can't buy and sell at the same time!
//     // if we took this out, we'd try to buy /and/ sell at time 0.
//     // this would give a profit of 0, which is a problem if our
//     // max_profit is supposed to be /negative/--we'd return 0!
//     if (i !== 0) {
//       // see what our profit would be if we bought at the
//       // min price and sold at the current price
//       var potential_profit = current_price - min_price;
//
//       // update max_profit if we can do better
//       max_profit = Math.max(max_profit, potential_profit);
//
//       // update min_price so it's always
//       // the lowest price we've seen so far
//       min_price  = Math.min(min_price, current_price);
//     }
//   }
//   return max_profit;
// }
