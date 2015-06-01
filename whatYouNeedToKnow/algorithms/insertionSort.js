/*
 * Insertion Sort
 *
 * VIDEOS:
 * - Harvard YouTube: http://bit.ly/1Ds5F5k
 *
 * NOTES:
 *      - Basic:
 *
 *
 * RESOURCES:
 * -
 */


/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Insertion Sort
 */

//function insertionSort() {
//    var temp, inner;
//    for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
//        temp = this.dataStore[outer];
//        inner = outer;
//        while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
//            this.dataStore[inner] = this.dataStore[inner-1];
//            --inner;
//        }
//        this.dataStore[inner] = temp;
//    }
//}

function insertionSort() {
    var list = this.dataStore;
    for (var i = 1; i < list.length; i++) {
        var next = list[i];
        // find the insertion location while moving all larger element up
        var j = i;
        while (j > 0 && list[j - 1] > next) {
            list[j] = list[j - 1];
            j--;
        }
        // insert the element
        list[j] = next;
    }
    console.log(list);
    return list;
}


function insertionSort() {
    var list = this.dataStore;
    for (var i = 1; i < list.length; i++) {
        var next = list[i];
        var j = i;
        while(j > 0 && list[j - 1] > next) {
            list[j] = list[j - 1];
            j--;
        }
        list[j] = next;
    }
    return list;
}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Insertion Sort
 */
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.insertionSort();
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
    this.insertionSort = insertionSort;
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