/**
 * A selection sort implementation in JavaScript. The array
 * is sorted in-place.
 * @param  {Array} items An array of items to sort.
 * @return {Array}       The sorted array.
 */
function selectionSort(items){

  for (var i = 0; i < items.length; i++){

    // Set minimum to this position.
    var min = i;

    // Check the rest of the array to see if anything is smaller.
    for (var j = i + 1; j < items.length; j++){
      if (items[j] < items[min]){
        min = j;
      }
    }

    // If the minimum isn't in the position, swap it.
    if (i !== min){

      // Swap the items.
      var temp = items[i];
      items[i] = items[min];
      items[min] = temp;
    }
  }

  return items;
}
// Test Case
// var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
// console.log(selectionSort(list));
