/*Big-O Time

Video: http://bit.ly/1z1vfKv
Big-O Cheat Sheet: http://bigocheatsheet.com/#data-structures

Reasons To Learn:
- Communication with other devs
- Reasoning about your code
- Job interviews

Notes:

O(1)         Constant
O(N)         Linear
O(N^2)       Quadratic
O(log N)     Logarithmic
O(n log N)   .
O(2^n)       Exponential



Quiz:
Uppercase a string
    - O(n) Linear
Determine if an integer is even
    - O(1) Constant
Count the number of bits that are "1" in a 32 bit integer
    - O(1) Constant
Copy an Array
    - O(n) Linear
Insert an item into the middle of an array
    - O(n) Linear
Remove an item from an array
    - O(n) Linear
    - O(1) Constant    (if the item is at the end of the list)
Append an item to the end of an array
    - O(1) Constant
Remove duplicates from an array
    - O(n) Linear   (this is the best case)
    - O(n log N)
    - O(N^2) Quadratic
Insert an item into a linked list
    - O(1) Constant
Remove an item into a linked list
    - O(1) Constant
Find an item by index in a linked list
    - O(n) Linear
Append an item to the end of a linked list
    - O(1) Constant
Compute the checksum of strings in an array
    - O(n) Linear
Sort an array
    - O(N^2) Quadratic
*/


// O(1)     - going to execute in the same amount of time regardless of the amount of data
function addItem(newItem) {
    theArray[itemsInArray++] = newItem;
}

// O(N)    - time to complete grows in direct proportion to the amount of data
function linearSearch(value) {
    valueInArray = false;
    indexesWithValue = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i] = value) {
            valueInArray = true;
            indexesWithValue += i + " ";
        }
    }
    console.log("Value Found: " + valueInArray);
}

// O(N^2)    - the time to complete will be proportional to the square of the amount of data (inefficient)
// O(log N)  - data being used decreases by roughly 50% each time through the algorithm (very efficient)
function bubbleSort(array) {
    for (var i = array.length - 1; i > 1; i--) {
        for (var j = 0; j < a.length; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1)
            }
        }
        if (imin != i) {
            swap(a, i, imin);
        }
    }
}

// O(n log n) - Only compared once.  Each comparison will reduce the final sorted list in half (very efficient)
function quickSort(var left, right) {
    if (right - left <= 0) {
        return;
    } else {
        var pivot = array[right];
        var pivotLocation = partitionArray(left, right, pivot);
        quickSort(left, pivotLocation - 1);
        quickSort(pivotLocation + 1, right);
    }
}

function partitionArray(var left, right, pivot) {
    var leftPointer = left - 1;
    var rightPointer = right;
    while (true) {
        while (array[++leftPointer] < pivot);
        while (rightPointer > 0 && array[--rightPointer] > pivot);
        if (leftPointer >= rightPointer) {
            break;
        } else {
            swap(leftPointer, rightPointer);
        }
    }
    swap(leftPointer, right);
    return leftPointer;
}

/* Binary Search:  */
function findDigit(str) {
    for (var i = 0; i < str.length; i++) {
        if (/^\d$/.test(str[i])) {
            return i;
        }
    }
}

/* Binary Search:     O(1)            (constant time complexity) */
function findDigit(str) {
    return _someCache[str];
}

/* Binary Search:     O(log(n))       (Dividing the size of work in half.)  */
function findDigit(str) {
    var min = 0;
    var max = str.length - 1;
    var currIndex;
    var currCh;

    while (min < max) {
        currIndex = Math.floor((min + max) / 2);
        currCh = str[currIndex];
        if (/^\d$/.test(currCh)) {
            return currIndex;
        } else if (currCh < "0") {
            min = currIndex + 1;
        } else {
            max = currIndex;
        }
    }
}

/* Selection Sort:   O(N^2)       */
function selectionSort(a) {
    var i, j, tmp, imin;
    for (var i = 0; i < a.length; i++) {
        imin = i;
        for (var j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) {
                imin = j;
            }
        }
        if (imin != i) {
            swap(a, i, imin);
        }
    }
}