/**
 * Insertion Sort:
 * An insertion sort implementation in JavaScript. The
 * array is sorted in-place.
 *
 * Resources:
 * - Visualize: http://bit.ly/1Kdzmrr
 * @param  {Array} items An array of items to sort.
 * @return {Array}       The sorted array.
 */
function insertionSort(items) {

  var value,                  // the value currently being compared
      i,                      // index into unsorted section
      j;                      // index into sorted section

  for (i=0; i < items.length; i++) {
    // store the current value because it may shift later
    value = items[i];

    /*
     * Whenever the value in the sorted section is greater than the value
     * in the unsorted section, shift all items in the sorted section over
     * by one. This creates space in which to insert the value.
     */
    for (j=i-1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
    }

    items[j+1] = value;
  }

  return items;
}
// Test Case
// var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
// console.log(insertionSort(list));
