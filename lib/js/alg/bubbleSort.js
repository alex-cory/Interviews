/**
 * Bubble Sort:
 * A bubble sort implementation in JavaScript. The array
 * is sorted in-place.
 *
 * Resources:
 * - Visualize: http://bit.ly/1KdAivY

 * @param  {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function bubbleSort(items){

  for (var i = 0; i < items.length; i++){

    for (var j = 0; j < items.length - i; j++){

      if (items[j] > items[j+1]){
        var temp = items[j];
        items[j] = items[j+1];
        items[j+1] = temp;
      }
    }
  }

  return items;
}

// Test Case
// var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
// console.log(bubbleSort(list));
