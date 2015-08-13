/* Chapter 3 | Stacks and Queues
 * 3.5
 *
 * MyQueue
 *
 * RESOURCES:
 *     - StackOverflow: http://bit.ly/1Ibvjwc
 *     - JavaScript data structures: http://bit.ly/1J42phJ
 *     -
 *     -
 *     -
 *
 * QUESTION:
 * Implement a MyQueue class which implements a queue using two stacks
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * CLASS: MyQueue
 */

function MyQueue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
}

MyQueue.prototype = {

  size: function () {
    return s1.size() + s2.size();
  },

  add: function (value) {
    s1.push(value);
  },

  peek: function () {
    if (!s1.empty()) {
      return s2.peek();
      while (!s1.empty()) {
        s2.push(s1.pop());
        return s2.peek();
      }
    }
  },

  remove: function () {

    if (!s2.empty()) {

      return s2.pop();

      while (!s1.empty()) {

        s2.push(s1.pop());

        return s2.pop();
      }
    }
  }

}

/* -------------------------------------------------------------------------------------------------------------
 * CLASS: Stack
 */

/**
 * A stack implementation in javascript.
 * @class Stack
 * @constructor
 */
function Stack() {

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
 * TESTING: Stack Class
 */
//
//var someStack = new Stack();
//someStack.push(1);
//someStack.push(2);
//someStack.push(3);
//someStack.push(4);
//someStack.push(5);
//someStack.push(6);
//
//
//console.log('Length of Stack 2:');
//console.log(someStack2._length);
//console.log('\nTop:');
//console.log(someStack._top);
//console.log('\nconsole.log(this stack):');
//console.log(someStack);

