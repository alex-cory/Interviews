/**
 * Your company built an in-house calendar tool called HiCal. You want to add 
 * a feature to see the times in a day when everyone is available.  To do this,
 * you’ll need to know when any team is having a meeting. In HiCal, a meeting 
 * is stored as a tuple of integers (start_time, end_time). These integers 
 * represent the number of 30-minute blocks past 9:00am
 *
 * For example: 
 *    (2, 3) # meeting from 10:00 – 10:30 am 
 *    (6, 9) # meeting from 12:00 – 1:30 pm 
 *
 * Write a function condense_meeting_times() that takes an array of meeting time 
 * ranges and returns an array of condensed ranges.  
 *
 * For example, given: 
 *    [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)] 
 *
 * your function would return: 
 *    [(0, 1), (3, 8), (9, 12)] 
 * 
 * Do not assume the meetings are in order. The meeting times are coming from 
 * multiple teams.  
 *
 * In this case the possibilities for start_time and end_time are bounded by 
 * the number of 30-minute slots in a day. But soon you plan to refactor HiCal 
 * to store times as Unix timestamps (which are big numbers). Write something 
 * that's efficient even when we can't put a nice upper bound on the numbers 
 * representing our time ranges.
 */


/**
 * Logic Before Starting:
 *
 * sort by start time
 * if A.end < B.start
 *    add A to reducedTimes
 * if A.end >= B.start and A.start < B.start
 *    add {start: A.start, end: B.end}
 * if A.end >= B.start and A.start >= B.start
 *    add {start: B.start, end: B.end}
 */

var meeting_times = [[0,1], [3,5], [4,8], [10,12], [9,10]]; // test case 1
// var meeting_times = [[1,2], [2,3]]; // test case 2
// var meeting_times = [[1,10], [2,3], [3,5]]; // test case 3
var reduced_times = [];

/**
 * Second Attempt
 */
var merge_ranges = function (meeting_times) {

  // sort meeting times
  meeting_times.sort( function (a,b) {
    return a[0] - b[0];
  });

  var prev_start = meeting_times[0][0];
  var prev_end = meeting_times[0][1];

  for (var i in meeting_times) {
    var curr_start = meeting_times[i][0];
    var curr_end = meeting_times[i][1];
    var last_reduced_time = reduced_times[reduced_times.length -1] || [];

    if (curr_start <= prev_end) {
      prev_end = Math.max(prev_end, curr_end);
    } else {
      reduced_times.push([prev_start, prev_end]);
      prev_start = curr_start;
      prev_end = curr_end;
    }
  }
  reduced_times.push([prev_start, prev_end]);
}
merge_ranges(meeting_times);

console.log(reduced_times);

/**
 * First Attempt
 *
 * Functionally works, but not optimal.
 * Time Complexity: On
 * Space Complexity: 
 */
// meeting_times.sort( function (a,b) {
//   return a[0] - b[0];
// });
// var b = 0;
// for (var a  = 0; a < meeting_times.length; a++) {
//   // b = a + 1;
//   var current = meeting_times[a];
//   var current_start = current[0];
//   var current_end = current[1];
//
//   if (a < meeting_times.length -1) {
//     var next = meeting_times[a + 1];
//     var next_start = meeting_times[a+1][0];
//     var next_end = meeting_times[a+1][0];;
//
//     var last_reduced = reducedTimes[reducedTimes.length -1];
//     var smallest_start = Math.min(current[0], next[0]);
//     var largest_end = Math.max(current[1], next[1]);
//
//     if (reducedTimes.length > 0) {
//
//       // combine 2 current
//       if (current_end >= next_start) {
//         // swap with last reduced
//         if (last_reduced[1] > smallest_start) {
//           last_reduced[0] = last_reduced[0] < smallest_start ? last_reduced[0] : smallest_start;
//           last_reduced[1] = last_reduced[1] < largest_end ? largest_end : last_reduced[1];
//         // push to reduced
//         } else {
//           reducedTimes.push([smallest_start, largest_end]);
//         }
//       // add
//       } else if (current_end < next_start) {
//         // swap with last reduced
//         if (current_end >= last_reduced[0]) {
//           last_reduced[0] = last_reduced[0] < current_start ? last_reduced[0] : current_start;
//           last_reduced[1] = last_reduced[1] < current_end ? current_end : last_reduced[1];
//         // push to reduced
//         } else if (current_start < last_reduced[0]){
//           reducedTimes.push(current);
//         }
//       }
//
//     // 1st round 
//     } else if (reducedTimes.length == 0) {
//       if (current_end < next_start) {
//         reducedTimes.push(current);
//       } else if (current_end >= next_start) {
//         reducedTimes.push([smallest_start, largest_end]);
//       }
//     }
//   }
// }
//
// console.log(reducedTimes);


