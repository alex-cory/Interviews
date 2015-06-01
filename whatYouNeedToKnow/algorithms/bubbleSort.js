/*
 * Bubble Sort
 *
 * VIDEOS:
 * - Harvard Youtube: http://bit.ly/1HglMFv
 * -
 *
 * NOTES:
 *      - Basic:
 *
 *
 * RESOURCES:
 * -
 */


/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Bubble Sort
 */

//function bubbleSort() {
//    var numElements = this.dataStore.length;
//    var temp;
//    for (var outer = numElements; outer >= 2; --outer) {
//        for (var inner = 0; inner <= outer-1; ++inner) {
//            if (this.dataStore[inner] > this.dataStore[inner+1]) {
//                swap(this.dataStore, inner, inner+1);
//            }
//        }
//        console.log(this.toString());
//    }
//}

function bubbleSort() {
    var numElements = this.dataStore.length;
    var array = this.dataStore;
    var temp;
    for (var outer = 0; outer < numElements; outer++) {
        for (var inner = 1; inner < numElements - outer; inner++) {
            if (this.dataStore[j - 1] > this.dataStore[i]) {
                var temp = this.dataStore[j - 1];
                this.dataStore[j - 1] = this.dataStore[i];
                this.dataStore[i] = temp;
            }
        }
    }
    console.log(this.toString());
}
/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Bubble Sort
 */
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log('Prior To Being Sorted:\n' + mynums.toString()) + '\n';
console.log();
mynums.bubbleSort();
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
    this.bubbleSort = bubbleSort;
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