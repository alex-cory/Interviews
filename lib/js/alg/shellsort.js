/**
 * A shell sort implementation in JavaScript. The array
 * is sorted in-place.
 * @param  {Array} items An array of items to sort.
 * @return {Array}       The sorted array.
 */
function shellSort (items) {

  for (var h = items.length; h = parseInt(h / 2);) {

    for (var i = h; i < items.length; i++) {

      var k = items[i];

      for (var j = i; j >= h && k < items[j - h]; j -= h) {

        items[j] = items[j - h];
        items[j] = k;
      }
    }
  }
  return items;
}


// Test Case
var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
console.log(shellSort(list));
function shellSort(items) {

  var gap  = Math.floor(items.length / 2);

  while(gap > 0) {

    for(var i = gap; i < items.length; i++) {

      var temp = items[i];
      j = i;

      while(j >= gap && items[j - gap] > temp) {
        items[j] = items[j - gap];
        j -= gap;
      }

      items[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return items;
}

/**
 * Implementation 2
 */
// var shellSort = function( list ) {
//   var gap = Math.floor( list.length / 2 );
//
//   while( gap > 0 ) {
//     for( i = gap; i < list.length; i++ ) {
//       temp = list[i];
//       for( j = i; j >= gap && list[j - gap] > temp; j -= gap ) {
//         list[j] = list[j - gap];
//       }
//       list[j] = temp;
//     }
//
//     gap = Math.floor( gap / 2 );
//   }
//
//   return list;
// };
