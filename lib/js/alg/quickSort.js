/**
 * A quicksort implementation in JavaScript. The array
 * is sorted in place.
 *
 * Resources:
 * - CS in JS: http://bit.ly/1NlmT86
 *
 * @param  {Array} items An array of items to sort.
 * @return {Array}       The sorted array.
 */
function quickSort(items, left, right) {

  // Performance - don't sort an array with zero or one items.
  if (items.length > 1) {

    // Fix left and right values - might not be provided.
    var left    = typeof left != "number" ? 0 : left,
        right   = typeof right != "number" ? items.length - 1 : right,
        // Pivot value is middle item.
        pivot   = items[Math.floor((right + left) / 2)],
        // Starts from left and goes right to pivot index.
        i       = left,
        // Starts from right and goes left to pivot index.
        j       = right;

    // While the two indices don't match.
    while (i <= j) {

      // If the item on the left is less than the pivot, continue right.
      while (items[i] < pivot) {
        i++;
      }

      // If the item on the right is greater than the pivot, continue left.
      while (items[j] > pivot) {
        j--;
      }

      // If the two indices still don't match, swap the values.
      if (i <= j) {

        var temp = items[i];
        items[i] = items[j];
        items[j] = temp;

        // Change indices to continue loop.
        i++;
        j--;
      }
    }

    // Split up the entire array.
    var index = i;

    // If the returned index.
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }

  }

  return items;
}
// Test Case
// var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
// console.log(quickSort(list));
