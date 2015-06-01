/*
 * Selection Sort
 *
 * VIDEOS:
 * - Harvard Youtube: http://bit.ly/1DrZf66
 *
 * NOTES:
 *      - Basic:
 *
 *
 * RESOURCES:
 * -
 */


/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Selection Sort
 */
//function selectionSort() {
//    var min, temp;
//    for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
//        min = outer;
//        for (var inner = outer + 1;
//             inner <= this.dataStore.length-1; ++inner) {
//            if (this.dataStore[inner] < this.dataStore[min]) {
//                min = inner;
//            }
//        }
//        swap(this.dataStore, outer, min);
//    }
//}

function selectionSort() {
    var arr = this.dataStore;
    for (var i = 0; i < arr.length - 1; i++) {
        var index = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {
                index = j;
            }
            var smallerNumber = arr[index];
            arr[index] = arr[i];
            arr[i] = smallerNumber;
        }
    }
    return arr;
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Selection Sort
 */
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.selectionSort();
console.log();
console.log(mynums.toString());

/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Array Test Bed Class
 */

function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.selectionSort = selectionSort;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() *
        (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Array Test Bed Class
 */

//var numElements = 100;
//var myNums = new CArray(numElements);
//myNums.setData();
//console.log(myNums.toString());