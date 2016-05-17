/**
 * Uses a binary search algorithm to locate a value in the specified array.
 *
 * Resources:
 * - Visualize: http://bit.ly/1guLpsy

 * @param  {Array}   items The array containing the item.
 * @param  {variant} value The value to search for.
 * @return {int}           The zero-based index of the value in the array or -1 if not found.
 */
export function binarySearch (items, search) {

  items.sort((a,b) => {
    return a-b;
  });

  var startIndex  = 0,
      stopIndex   = items.length - 1,
      middle      = Math.floor((stopIndex + startIndex)/2);

  while(items[middle] != search && startIndex < stopIndex){

    // Adjust search area.
    if (search < items[middle]){
      stopIndex = middle - 1;            
    } else if (search > items[middle]){
      startIndex = middle + 1;
    }

    // Recalculate middle.
    middle = Math.floor((stopIndex + startIndex)/2);    
  }

  // Make sure it's the right search.
  return (items[middle] != search) ? -1 : middle;
}
// Test Case
// var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
// console.log('Good:', binarySearch(list, 91));
// console.log('Bad:', binarySearch(list, 97));
