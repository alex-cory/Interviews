/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param  {Array} items The array to sort.
 * @return {Array}       The sorted array.
 */
function mergeSort(items){

    // Terminal condition - don't need to do anything for arrays with 0 or 1 items
    if (items.length < 2) {
        return items;
    }

    var work = [],
        i,
        len;

    for (i=0, len=items.length; i < len; i++){
        work.push([items[i]]);
    }
    work.push([]);  // In case of odd number of items.

    for (var lim=len; lim > 1; lim = Math.floor((lim+1)/2)){
        for (var j=0,k=0; k < lim; j++, k+=2){
            work[j] = merge(work[k], work[k+1]);
        }
        work[j] = [];  //in case of odd number of items
    }

    return work[0];
}

/**
 * Merges to arrays in order based on their natural
 * relationship.
 * @param  {Array} left  The first array to merge.
 * @param  {Array} right The second array to merge.
 * @return {Array}       The merged array.
 */
function merge(left, right){
    var result = [];

    while (left.length > 0 && right.length > 0){
        if (left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    result = result.concat(left).concat(right);

    // Make sure remaining arrays are empty.
    left.splice(0, left.length);
    right.splice(0, right.length);

    return result;
}
// Test Case
// var list = [91,82,73,46,55,46,7,8,92,10,1,123,13,314,5,16,7,18,19,2,21,12,23,24,35,26,17,28];
// console.log(mergeSort(list));
