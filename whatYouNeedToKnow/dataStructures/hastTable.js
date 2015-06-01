/* ## Hashing / Hash Tables
 *
 * INDEX:
 *  -
 *
 * NOTES:
 * - Hashing:
 *      - Definition:
 *          - Data structure designed around an array with key value pairs.
 *      - Collision:
 *          - Even with an efficient hash function, it is possible for two keys to hash (the
 *            result of the hash function) to the same value.
 *          - TO AVOID COLLISIONS, make sure the array for the hash table is sized to a prime number.
 *      - Collision Resolution:
 *          1. separate chaining - Technique where each array element of a hash table stores another
 *                                 data structure, such as another array, which is then used to store
 *                                 keys. Using this technique, if two keys generate the same hash value,
 *                                 each key can be stored in a different position of the secondary array.
 *
 *          2. linear probing    - Open-Addressing Hashing - when there is a collision, the program
 *                                 simply looks to see if the next element of the hash table is empty.
 *                                 If so, the key is placed in that element. If the element is not empty,
 *                                 the program continues to search for an empty hash-table element until
 *                                 one is found.
 *      - Determine Which Collision Method:
 *          - SEPARATE CHAINING: If the size of the array can be up to half the number of elements to be stored.
 *          - LINEAR PROBING: If the size of the array can be twice the size of the number of elements to be stored.

 Excerpt From: Michael McMillan. “Data Structures and Algorithms with JavaScript.” iBooks.
 *      - Size: prime number
 *      - Modular Hashing: keys are random integers
 *
 * RESOURCES:
 *    -
 *    -
 *    -
 *
 */




/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Linear Probing
 */

/**
 * Puts the data in the hash table with linear probing.
 * @param key
 * @param data
 */
function put(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    }
    else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
}

/**
 * Gets the data from the hash table usig linear probing.
 * @param key
 * @returns {*}
 */
function get(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}



/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Separate Chaining
 */

/**
 *
 */
function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}

/**
 * Show data.
 */
//function showDistro() {
//    var n = 0;
//    for (var i = 0; i < this.table.length; ++i) {
//        if (this.table[i][0] != undefined) {
//            print(i + ": " + this.table[i]);
//        }
//    }
//}

/**
 * Puts the data into the hash table.
 * @param key
 * @param data
 */
//function put(key, data) {
//    var pos = this.betterHash(key);
//    var index = 0;
//    if (this.table[pos][index] == undefined) {
//        this.table[pos][index+1] = data;
//        ++index;
//    } else {
//        while (this.table[pos][index] != undefined) {
//            ++index;
//        }
//        this.table[pos][index] = data;
//    }
//}

/**
 * Get the data with separate chaining.
 * @param key
 * @returns {*}
 */
//function get(key) {
//    var index = 0;
//    var pos = this.betterHash(key);
//    if (this.table[pos][index] = key) {
//        return this.table[pos][index+1];
//        index += 2;
//    } else {
//        while (this.table[pos][index] != key) {
//            index += 2;
//        }
//        return this.table[pos][index+1];
//    }
//    return undefined;
//}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Separate Chaining
 */
//var hTable = new HashTable();
//hTable.buildChains();
//var someNames = ["David", "Jennifer", "Donnie", "Raymond",
//"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
//for (var i = 0; i < someNames.length; ++i) {
//    hTable.put(someNames[i]);
//}
//hTable.showDistro();



    /* -------------------------------------------------------------------------------------------------------------
     * EXAMPLE: Store a Set of Students and Their Grades
     */
/**
 * Specify a min and max random number.
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates student data.
 * @param arr
 */
function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Store a Set of Students and Their Grades
 */
//var numStudents = 10;
//var arrSize = 97;
//var idLen = 9;
//var students = new Array(numStudents); // bad practice to set length
//genStuData(students);
//console.log("Student data: \n");
//for (var i = 0; i < students.length; ++i) {
//    console.log(students[i].substring(0,8) + " " +
//    students[i].substring(9));
//}
//console.log("\n\nData distribution: \n");
//var hTable = new HashTable();
//for (var i = 0; i < students.length; ++i) {
//    hTable.put(students[i]);
//}
//hTable.showDistro();




/* -------------------------------------------------------------------------------------------------------------
 * CLASS: Better Hash Function
 */

/**
 *
 * @param string
 * @param arr
 * @returns {Number}
 */
function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total)
}
/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Better Hash Function      DID NOT WORK
 */
//var someNames = ["David", "Jennifer", "Donnie", "Raymond",
//    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
//var hTable = new HashTable();
//for (var i = 0; i < someNames.length; ++i) {
//    hTable.put(someNames[i]);
//}
//htable.showDistro();


    /* -------------------------------------------------------------------------------------------------------------
     * CLASS: Simple Hash Function       (EXAMPLE COLLISION)
     */

/**
 * Sums the ASCII value of the letters in the key.
 * @param data
 * @returns {number}
 */
function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}

/**
 * Display the data from the hash table.
 */
//function showDistro() {
//    var n = 0;
//    for (var i = 0; i < this.table.length; ++i) {
//        if (this.table[i] != undefined) {
//            console.log(i + ": " + this.table[i]);
//        }
//    }
//}




/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Simple Hash Function        (EXAMPLE COLLISION)
 */
//var someNames = ["David", "Jennifer", "Donnie", "Raymond",
//    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
//var hTable = new HashTable();
//for (var i = 0; i < someNames.length; ++i) {
//    hTable.putSimple(someNames[i]);
//}
//hTable.showDistro();





/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE:  Storing and Retrieving Data From Hash Tables
 */
//var pnumbers = new HashTable();
//var name, number;
//for (var i = 0; i < 3; i++) {
//    console.log("Enter a name (space to quit): ");
//    name = readline();
//    console.log("Enter a number: ");
//    number = readline();
//}
//name = "";
//console.log("Name for number (Enter quit to stop): ");
//while (name != "quit") {
//    name = readline();
//    if (name == "quit") {
//        break;
//    }
//    console.log(name + "'s number is " + pnumbers.get(name));
//    console.log("Name for number (Enter quit to stop): ");
//}

    /* -------------------------------------------------------------------------------------------------------------
     * TESTING:
     */





/* -------------------------------------------------------------------------------------------------------------
 * CLASS: Hash Table
 */

/**
 * Hash Table Class Constructor
 * @constructor
 */
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.putSimple = putSimple;
    this.put = put;
    this.get = get;
    this.buildChains = buildChains;
    this.values = [];
}

/**
 * Place the data into the hash table.
 * @param data
 */
function putSimple(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

/**
 * Place the data into the hash table.
 * @param data
 */
//function put(key, data) {
//    var pos = this.betterHash(key, data);
//    this.table[pos] = data;
//}

/**
 * Getting data from the hash table.
 * @param key
 * @returns {*}
 */
function get(key) {
    return this.table[this.betterHash(key)];
}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Hash Table
 */




/**
 * EXERCISES:
 * 1. Use linear probing to create a simple dictionary to store the definitions of words. Your program should
 *    have two parts. The first part reads a text file that contains a list of words and definitions and stores
 *    them in a hash table. The second part of the program allows a user to enter a word and see the definition
 *    of that word.
 * 2. Repeat exercise 1 using separate chaining.
 * 3. Write a program using hashing that reads a text file and compiles a list of the words in the file with
 *    the number of times each word appears in the file.
 */


















