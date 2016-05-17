/**
 * This function will return true if the array it's called on contains ANY of 
 * the search terms.
 */
Array.prototype.contains = function () {
  var mid_index = Math.floor(this.length / 2);
  var args = Array.prototype.slice.call(arguments);

  return (args.length > 1 ? 
         args.contains(this[mid_index]) :
         args[0] == this[mid_index]
         )    // if the mid-number equals the search term, TRUE, otherwise FALSE
         || this.length > 1           // OR:  if the array is empty, FALSE, otherwise
            && args.map(term => {
                  this.splice(           //      take out the appropriate half
                      (mid_index + 1) * (term > this[mid_index]),
                      mid_index
                     ).contains(term)
                  }).contains(true);    // run again on the appropriate half

}

var myarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Try to minify this function more! I dare you. ;p
 */
// Array.prototype.containsAll = function () {
//   var mid_index = Math.floor(this.length / 2);
//   var args = Array.prototype.slice.call(arguments);
//
//   return (args.length > 1 ? 
//          args.contains(this[mid_index]) :
//          args[0] == this[mid_index]
//          )    // if the mid-number equals the search term, TRUE, otherwise FALSE
//          || this.length > 1           // OR:  if the array is empty, FALSE, otherwise
//             && !args.map(term => {
//                   this.splice(           //      take out the appropriate half
//                       (mid_index + 1) * (term > this[mid_index]),
//                       mid_index
//                      ).containsAll(term)
//                   }).contains(false);    // run again on the appropriate half
//
// }
// Testers Single
// console.log('Bad:', myarray.contains(11));
// console.log('Good:', myarray.contains(1));
// Testers Single
// console.log('Bad None Except 1:', myarray.containsAll(1, 12, 13, 14));
// console.log('Bad Contains None:', myarray.containsAll(11, 12, 13, 14));
// console.log('Good Muliple:', myarray.containsAll(1, 2, 3, 4));



// Testers Single
// console.log('Bad:', myarray.contains(11));
// console.log('Good:', myarray.contains(1));
// Testers Single
// console.log('Bad Muliple:', myarray.contains(11, 12, 13, 14));
// console.log('Good Muliple:', myarray.contains(1, 2, 3, 4));
