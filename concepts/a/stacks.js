/* ## Stacks
 *
 *
 *
 * Resources:
 *     - Stacks and queues in JavaScript: http://bit.ly/1DeYkWP
 *     - Algorithms and data structures in JavaScript: http://bit.ly/1NDdZaf
 *     - Data Structures with JavaScript: http://bit.ly/1NDeQYy
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * CLASS: Stacks
 */

/**
 * A stack implementation in javascript.
 * @class Stack
 * @constructor
 */
function Stack() {

    /**
     * The data to be stored in the stack.
     * @property _top
     * @type Object
     * @private
     */
    this._top = null;

    /**
     * The number of elements contained in the stack.
     * @property _count
     * @type int
     * @private
     */
    this._count = 0;

}

Stack.prototype = {

    //restore constructor
    constructor: Stack,

    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} element The item to be pushed onto this stack.
     * @return {Object} item
     * @method push
     */
    push: function (data) {

        //create a new item object, place data in
        var node = {
            data: data,
            next: null
        };

        //link the current node to top node
        node.next = this._top;

        //make the current node the top node.
        this._top = node;

        //update that count
        this._count++;

    },

    /**
     * Removes and returns the object at the top of the Stack.
     * @return {Object} The object at the top of this stack.
     * @method pop
     */
    pop: function () {

        if (this._top === null) {
            return null;
        } else {
            
            //assign top to a temp variable
            var out = this._top;

            //make the TOP the next in line
            this._top = this._top.next;

            //there still are items on the stack
            if (this._count > 0) {
                this._count--;
            }

            //returns the value that was removed
            return out.data;
        }

    },

    /**
     * Returns the object at the top of the Stack without removing it.
     * @return {Object} the head of the list or null if it's empty.
     * @method peek
     */
    peek: function () {
        //returns null if no items
        if (this._top === null) {
            return null;
        } else {
            return this._top.data;
        }
    },

    /**
     * Tests if this stack is empty.
     * @return {boolean} true If and only if this stack contains no
     *     items; false otherwise.
     * @method empty
     */
    empty: function () {
        return this._top.empty();
    },

    /**
     * Returns the 1-based position where an object is on this stack.
     * @param {Object} o The desired object.
     * @return {Void} The 1-based position from the top of the stack where
     *     the object is located.
     * @method search
     */
    search: function () {
        return this._top.search();
    },

    /**
     * Tests if this vector has no components.
     * @return {boolean} true If and only if this vector has
     *     no components, that is, its size is zero; false otherwise.
     * @method isEmpty
     */
    isEmpty: function () {
        return this._top.isEmpty();
    }
};



/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Stacks Class
 */

var someStack = new Stack();

someStack.push(1);
someStack.push(2);
someStack.push(3);

console.log(someStack);


/* -------------------------------------------------------------------------------------------------------------
 * Data Structures: Stacks
 *
 * From: http://bit.ly/1DeYkWP
 */

//var dataStructures = {
//    stack : function() {                  
//        var elements;
//        
//        this.push = function(element) {
//            if (typeof(elements) === 'undefined') {
//                elements = [];   
//            }                            
//            elements.push(element);
//        }
//        this.pop = function() {
//            return elements.pop();
//        }
//        this.stackTop = function(element) {
//            return elements[elements.length - 1];
//        }
//    }
//}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING:    Delete Node in Middle of Single Linked List
 */

//var someStack = new dataStructures.stack();
// 
//someStack.push(1);
//someStack.push(2);
//someStack.push(3);
// 
//var stackTopResult = someStack.stackTop();                                                 
// 
//stackTopResults.html(stackTopResult);
// 
//var popResult = "";
// 
//popResult += someStack.pop();
//popResult += someStack.pop();
//popResult += someStack.pop();









/* -------------------------------------------------------------------------------------------------------------
 * CLASS:    Linked List
 */

/* Node Class */
function Node(element) {
    this.element = element;
    this.next = null;
}

/* Constructor Function || Linked List Class */
function LList() {
    this.head = new Node('head');
    this.tail = this.head;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
    //    this.findNthToLast = findNthToLast;
    this.searchAndRemove = searchAndRemove;
    this.push = push;
}

/* Find Function */
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Insert Function */
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
    if (newNode.next == null) {
        this.tail = newNode;
    }
}

/* Remove Function */
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}

/* Find Previous Function */
function findPrevious(item) {
    var currNode = this.head; // first node on linked list
    while (!(currNode.next === null) &&
        !(currNode.next.element == item)) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Display Function */
function display() {
    var currNode = this.head; // first node on linked list
    while (!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next; // iterate over the next node
    }
}

/* Push Function */
function push(newElement) {
    var tailNode = this.tail; // last node on linked list
    tailNode.next = new Node(newElement); // adding new node after tail node
    this.tail = tailNode.next; // updating the tail of the list to the newly created node

}

//var cities = new LList();
//cities.push("Conway");
//cities.push("Russellville");
//cities.push("Carlisle");
//cities.push("Alma");
////cities.push("Carlisle");
//console.log('Display All');
//cities.display();
//console.log();
//
//console.log('Insert Indianapolis at End:');
//cities.insert('Indianapolis', 'Alma');
//cities.display();
//
//console.log();
//console.log('Display Tail:');
//console.log('cities.tail.element: ' + cities.tail.element + ', cities.tail.next: ' +cities.tail.next);