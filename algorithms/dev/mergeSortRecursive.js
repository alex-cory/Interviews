/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param  {Array} items The array to sort.
 * @return {Array}       The sorted array.
 */
function mergeSort(items){

  if (items.length < 2) {
    return items;
  }

  var middle = Math.floor(items.length / 2),
     left    = items.slice(0, middle),
     right   = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges to arrays in order based on their natural
 * relationship.
 * @param  {Array} left  The first array to merge.
 * @param  {Array} right The second array to merge.
 * @return {Array}       The merged array.
 */
function merge(left, right){
  var result  = [],
      il      = 0,
      ir      = 0;

  while (il < left.length && ir < right.length){
    if (left[il] < right[ir]){
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

// Test Case
// var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
// console.log(mergeSort(list));
