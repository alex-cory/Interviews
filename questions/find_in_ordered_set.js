/**
 * Find in Ordered Set:
 *
 * Suppose we had an array of n integers in sorted order. How quickly could 
 * we check if a given integer is in the array?
 */
var myarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Try to minify this function more! I dare you. ;p
 */
Array.prototype.contains=function(s){var i=Math.floor(this.length/2);return this[i]==s||this.length>1&&this.splice((i+1)*(s>this[i]),i).contains(s)}

  // return Array.prototype.slice.call(arguments).indexOf(this[mid_index]) > -1    // if the mid-number equals the search term, TRUE, otherwise FALSE
  //        || this.length > 1           // OR:  if the array is empty, FALSE, otherwise
  //           && Array.prototype.slice.call(arguments).map(term => {
  //                 this.splice(           //      take out the appropriate half
  //                     (mid_index + 1) * (term > this[mid_index]),
  //                     mid_index
  //                    ).contains(term)
  //                 }).indexOf(true) > -1;    // run again on the appropriate half
// Array.prototype.contains = function (search) {
//   var mid_index = Math.floor(this.length / 2);
//
//   return this[mid_index] == search    // if the mid-number equals the search term, TRUE, otherwise FALSE
//          || this.length > 1           // OR:  if the array is empty, FALSE, otherwise
//             && this.splice(           //      take out the appropriate half
//                   (mid_index + 1) * (search > this[mid_index]),
//                    mid_index
//                ).contains(search);    // run again on the appropriate half
// }
console.log('Bad:', myarray.contains(11));
console.log('Good:', myarray.contains(1));

// function is_in_array(array, search) {
//   var mid_index = Math.floor(array.length / 2);
//
// return array[mid_index] === search || 
//        array.length > 1 &&
//        is_in_array(
//          array.splice(
//            (search > array[mid_index]) ? mid_index + 1 : 0,
//            mid_index
//          ),
//          search
//        );
// return array.length === 1 ? array[0] === search : 
//        array[mid_index] === search ? true :
//        is_in_array(
//          array.splice(
//            (search > array[mid_index]) ? mid_index + 1 : 0,
//            mid_index
//          ),
//          search
//        );
//
//
//   if (array[mid_index] === search) {
//     return true;
//
//   // the search term is not present and it's the last num in array to check
//   } else if (array.length === 1) {
//     return false;
//
//   } else if (search > array[mid_index]) {
//     var topHalf = array.splice(mid_index + 1, mid_index); // returns bottom half
//     return is_in_array(topHalf, search);
//
//   } else if (search < array[mid_index]) {
//     var bottomHalf = array.splice(0, mid_index); // removes bottom  half, returns bottom, leaves array as top half
//     return is_in_array(bottomHalf, search);
//   }
// }
// // is_in_array(myarray, 1);
// console.log(is_in_array(myarray, 1));
