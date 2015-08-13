/* Chapter 3 | Stacks and Queues
 * 3.3
 *
 * SetOfStacks
 *
 * RESOURCES:
 *     - StackOverflow: http://bit.ly/1Ibvjwc
 *     - JavaScript data structures: http://bit.ly/1J42phJ
 *     -
 *     -
 *     -
 *
 * QUESTION:
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
 * in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of
 * several stacks, and should create a new stack once the previous one exceeds capacity. SetOfStacks
 * push() and SetOfStacks pop() should behave identically to a single stack (that is, pop() should
 * return the same values as it would if there were just a single stack).
 *
 * FOLLOW UP:
 * Implement a function popAt(int index) which performs a pop operation on a specific sub-stack
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * CLASS: SetOfStacks      NOT WORKING!
 */

/**
 * A stack implementation in javascript.
 * @class Stack
 * @constructor
 */
function SetOfStacks() {

    /**
     * The array to hold the stacks.
     * @property stacks
     * @type Array
     * @private
     */
    this.stacks = [];
    this.capacity = 3;

}

SetOfStacks.prototype = {

    //restore constructor
    constructor: SetOfStacks,

    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} data The item to be pushed onto this stack.
     * @method push
     */
    push: function (data) {

//        var last = this.getLastStack();
        var last = this.stacks[this.stacks.length - 1];
        if (last != null && last.length != this.capacity) {
            last.push(data);
        } else {
            var stack = new Stack({top: data});
            this.stacks.push(stack);
        }
    },

    /**
     * Grabs the last stack created out of the array.
     * @return {Object} stack The last stack created.
     * @method getLastStack
     */
    getLastStack: function () {
        return this.stacks[this.stacks.length - 1];
    },

    /**
     * Grabs the last stack created out of the array.
     * @return {Object} stack The last stack created.
     * @method getLastStack
     */
    isAtCapacity: function () {
        var lastStack = this.stacks[this.stacks.length - 1];
        if (lastStack._length == this.capacity) {
            return true;
        } else if (lastStack._length !== this.capacity) {
            return false;
        }
    },

    /**
     * Adds a stack to the stacks array.
     * @param {Object} stack The stack to be added to the array.
     * @method add
     */
    add: function (stack) {
        this.stacks.push(stack);
    },

    /**
     * Removes and returns the object at the top of the Stack.
     * @return {Object} The object at the top of this stack.
     * @method pop
     */
    pop: function () {

        //        var last = this.getLastStack();
        this.stacks[this.stacks.length - 1]
        if (last.length == 0) {
            var index = this.stacks.indexOf(last);
            this.stacks.splice(index, 1);
        }
        return last.pop();

    }

};



/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Stack Class
 */
//
var someStack = new SetOfStacks();
someStack.push(1);
someStack.push(2);
someStack.push(3);
someStack.push(4);
//someStack.push(5);
//someStack.push(6);
console.log(someStack);
//someStack.min();









/* -------------------------------------------------------------------------------------------------------------
 * CLASS: Stack
 */

/**
 * A stack implementation in javascript.
 * @class Stack
 * @constructor
 */
function Stack(args) {

    /**
     * The name or number of this specific stack.
     * @property _name
     * @type variant
     * @private
     */
    this._name = null;

    /**
     * The data to be stored in the stack.
     * @property _top
     * @type {Array}
     * @private
     */
    this._top = [];

    /**
     * The number of elements contained in the stack.
     * @property _length
     * @type int
     * @private
     */
    this._length = 0;
    
    if (args) {
        this._top[this._top.length - 1] = args.top;
    }

}

Stack.prototype = {

    //restore constructor
    constructor: Stack,

    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} data The item to be pushed onto this stack.
     * @method push
     */
    push: function (data) {
        //add node to the stack and increase the length
        this._top[this._length++] = data;
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
            if (this._length > 0) {
                this._length--;
            }

            //returns the value that was removed
            return out.data;
        }

    },

    /**
     * Returns the minimum element
     * @return {boolean} true Returns the minimum element
     * @method min
     */
    min: function () {
        var length = this._top.length;
        var min = this._top[0];
        for (var i = 0; i < this._top.length; i++) {
            if (min > length[i]) {
                min = length[i];
            }
        }
        console.log(min);
        return min;
    }
};



/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Stack Class
 */
//
var someStack = new Stack();
someStack.push(1);
someStack.push(2);
someStack.push(3);
someStack.push(4);
someStack.push(5);
someStack.push(6);
someStack.min();