/* ## Queues
 *
 * INDEX:
 *  - Priority Queue
 *  - Radix Sort
 *  - Assigning Partners At A Square Dance  (Queue Example)
 *  - Class 1 Example
 *  - Class 2 Example
 *
 * NOTES:
 * - Queues:
 *      - Definition:
 *          - A type of list where data are inserted at the end and are removed from the front.
 *      - Main Operations:
 *          1. enqueue - insert
 *          2. dequeue - remove
 *          3. peek    - returns the element at the front of the queue
 *          4. length
 *          5. clear   - remove all elements from a queue
 *      - JavaScript Function Benefits:
 *          - push  - add data to end of array
 *          - shift - removing data from the front of the array
 *      - Sorting With Data & Queues:
 *          - radix sort
 *      - Priority Queues:
 *          - A queue where elements are removed from the queue based on a priority constraint.

 * 
 * Resources:
 *    - Data Structures with JavaScript: http://bit.ly/1NDeQYy
 *    - Queues & Stacks From Scratch With JS Patterns: http://bit.ly/1OxML1W
 *    - computer-science-in-javascript: http://bit.ly/1OxNj81
 * 
 */



/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Priority Queue
 */

/**
 * Patient Class Constructor
 * @param name
 * @param code Integer representing patient's priority or severity.
 * @constructor
 */
function Patient(name, code) {
    this.name = name;
    this.code = code;
}

/**
 * Same as dequeue but for priority queue. Move through the queue’s
 *      underlying array and finds the element with the lowest code.
 *      Then the function uses the splice() function to remove the
 *      highest-priority element.
 * @returns {Array.<T>}
 */
function priorityDequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}

/**
 * Priority Queue toString
 * @returns {string}
 */
function toStringPriority() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
        + this.dataStore[i].code + "\n";
    }
    return retStr;
}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Priority Queue
 */
//var p = new Patient("Smith",5);
//var ed = new Queue();
//ed.enqueue(p);
//p = new Patient("Jones", 4);
//ed.enqueue(p);
//p = new Patient("Fehrenbach", 6);
//ed.enqueue(p);
//p = new Patient("Brown", 1);
//ed.enqueue(p);
//p = new Patient("Ingram", 1);
//ed.enqueue(p);
//console.log(ed.toStringPriority());
//var seen = ed.priorityDequeue();
//console.log("Patient being treated: " + seen[0].name);
//console.log("Patients waiting to be seen: ")
//console.log(ed.toStringPriority());
//// another round
//var seen = ed.priorityDequeue();
//console.log("Patient being treated: " + seen[0].name);
//console.log("Patients waiting to be seen: ")
//console.log(ed.toStringPriority());
//var seen = ed.priorityDequeue();
//console.log("Patient being treated: " + seen[0].name);
//console.log("Patients waiting to be seen: ")
//console.log(ed.toStringPriority());








/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Radix Sort  (Queue Example)
 */

/**
 * Distributes numbers by the place (1s or 10s) digit.
 * @param nums
 * @param queues
 * @param n
 * @param digit
 */
function distribute(nums, queues, n, digit) { // digit represents either the 1s
    // or 10s place
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

/**
 * Collecting numbers from the queues.
 * @param queues
 * @param nums
 */
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

/**
 * Displays the array.
 * @param arr
 */
function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Radix Sort  (Queue Example)
 */
//var queues = [];
//for (var i = 0; i < 10; ++i) {
//    queues[i] = new Queue();
//}
//var nums = [];
//for (var i = 0; i < 10; ++i) {
//    nums[i] = Math.floor(Math.floor(Math.random() * 101));
//}
//console.log("Before radix sort: ");
//dispArray(nums);
//distribute(nums, queues, 10, 1);
//collect(queues, nums);
//distribute(nums, queues, 10, 10);
//collect(queues, nums);
//console.log("\n\nAfter radix sort: ");
//dispArray(nums);




/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE: Assigning Partners At A Square Dance  (Queue Example)
 */

/**
 * Each dancer is stored in a dancer object.
 * @param name
 * @param sex
 * @constructor
 */
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

/**
 * Load the dancers from the file into the program.
 * @param males
 * @param females
 */
function getDancers(males, females) {
    var dancers = 'F Allison McMillan\nM Frank Opitz\nM Mason McMillan\nM Clayton Ruff\nF Cheryl Ferenback\nM Raymond Williams\nF Jennifer Ingram\nM Bryan Frazer\nM David Durr\nM Danny Martin\nF Aurora Adney';
    //var names = read("dancers.txt").split("\n");
    var names = dancers.split("\n");
    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

/**
 * Announces male and female pairs.
 * @param males
 * @param females
 */
function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
    }
    console.log();
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Assigning Partners At A Square Dance  (Queue Example)
 */

//var maleDancers = new Queue();
//var femaleDancers = new Queue();
//getDancers(maleDancers, femaleDancers);
//dance(maleDancers, femaleDancers);
//if (!femaleDancers.empty()) {
//    console.log(femaleDancers.front().name + " is waiting to dance.");
//}
//if (!maleDancers.empty()) {
//    console.log(maleDancers.front().name + " is waiting to dance.");
//}




/* -------------------------------------------------------------------------------------------------------------
 * CLASS 1: Queue
 */

/**
 * Queue Class Constructor
 * @constructor
 */
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.toStringPriority = toStringPriority;
    this.priorityDequeue = priorityDequeue;
}

/**
 * Enqueue: Add element to end of array.
 * @param element
 */
function enqueue(element) {
    this.dataStore.push(element);
}

/**
 * Dequeue: Remove element from front of array.
 * @returns {T}
 */
function dequeue() {
    return this.dataStore.shift();
}

/**
 * Front: Examine the front of an array.
 * @returns {*}
 */
function front() {
    return this.dataStore[0];
}

/**
 * Back: Examine the back of an array.
 * @returns {*}
 */
function back() {
    return this.dataStore[this.dataStore.length-1];
}

/**
 * ToString: Display all elements in array.
 * @returns {string}
 */
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

/**
 * Empty: Let's us know if a queue is empty.
 * @returns {boolean}
 */
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Queue
 */
//var q = new Queue();
//q.enqueue("Meredith");
//q.enqueue("Cynthia");
//q.enqueue("Jennifer");
//console.log(q.toString());
//q.dequeue();
//console.log(q.toString());
//console.log("Front of queue: " + q.front());
//console.log("Back of queue: " + q.back());








/* -------------------------------------------------------------------------------------------------------------
 * CLASS 2: Queue
 */

/**
 * A queue implementation in javascript.
 * @class Queue
 * @constructor
 */
function Queue2() {

    /**
     * The data to be stored in the queue at the start.
     * @property _head
     * @type Object
     * @private
     */
    this._head = null;

    /**
     * The data to be stored in the queue at the end.
     * @property _tail
     * @type Object
     * @private
     */
    this._tail = null;

    /**
     * The number of elements contained in the queue.
     * @property _count
     * @type int
     * @private
     */
    this._count = 0;

}

Queue2.prototype = {

    //restore constructor
    constructor: Queue2,

    /**
     * Pushes an item onto the front of the queue.
     * @param {Object} node The item to be pushed onto this queue.
     * @return {Object} node
     * @method enqueue
     */
    enqueue: function (data) {

        //Create a node with the data
        var node = {
            data: data,
            //next points to value straight way. If head is null, it won't be a problem
            next: this._head
        };

        //if it is the first item, then the head is also the tail
        if (this._head === null) {
            this._tail = node;
        }

        //defines the node as the new head
        this._head = node;

        //increases the count
        this._count++;
    },

    /**
     * Removes and returns the last item inserted.
     * @return {Object} The object at the opposite side of the queue.
     * @method dequeue
     */
    dequeue: function () {

        //if queue is empty, returns null
        if (tail === null) {
            return null;
        } else {

            var current = this._head;
            var previous = null;

            //while there is a next, it will advance the queue
            //the idea is to have "current" at the end and "previous" as the one before last
            while (current.next) {
                previous = current;
                current = current.next;
            }

            //remove reference to the last one
            previous.next = null;

            //makes tail point to the previous node
            this._tail = previous;

            //if there are still items, decrease count by 1
            if (this._count > 0) {
                this._count--;

                //resets the queue
            } else {
                this._head = null;
                this._tail = null;
            }
        }
    },

    /**
     * Displays all data from the queue as an array.
     * @return {Array} array The noeds in the queue or null if it's empty.
     * @method display
     */
    display: function () {

        //I will leave the analysis to you.
        if (this._head === null) {
            return null;
        } else {
            var arr = new Array();
            var current = this._head;

            for (var i = 0; i < this._count; i++) {
                arr[i] = current.data;
                current = current.next;
            }

            return arr;
        }
    },

    /**
     * Any item from the queue can be searched and seen.
     * @return {Object} Any item from the queue.
     * @method peekAt
     */
    peekAt: function (index) {
        //anything smaller than 0 and equal or greater than count is not at the queue
        if (index > -1 && index < this._count) {
            var current = this._head;

            //look through the queue to find the item
            for (var i = 0; i < index; i++) {
                current = current.next;
            }

            return current.data;
        }
        //an index out of the bounds of the queue was chosen.
        else {
            return null;
        }
    }
};



/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Queue Class
 */
//var someStack = new Stack();
//
//someStack.push(1);
//someStack.push(2);
//someStack.push(3);
//
//console.log(someStack);




/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Queue Class
 *
 * EXERCISES:
 * 1. Modify the Queue class to create a Deque class. A deque is a queue-like structure that allows elements
 *    to be added and removed from both the front and the back of the list.
 *    Test your class in a program.
 * 2. Use the Deque class above to determine if a given word is a palindrome.
 * 3. Modify the priority queue example from above so that the higher-priority elements have higher numbers rather
 *    than lower numbers. Test your implementation with the example above.
 * 4. Modify the Emergency Department example above so the user can control the activity in the ED. Create a menu
 *    system that allows the user to choose from the following activities:
 *         - Patient enters ED.
 *         - Patient is seen by doctor.
 *         - Display list of patients waiting to be seen.
 */