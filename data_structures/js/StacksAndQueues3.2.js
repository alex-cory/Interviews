/* Chapter 3 | Stacks and Queues
 * 3.2
 *
 * Stack with Min
 *
 * RESOURCES:
 *     - StackOverflow: http://bit.ly/1Ibvjwc
 *     - JavaScript data structures: http://bit.ly/1J42phJ
 *     -
 *     -
 *     -
 *
 * QUESTION:
 * How would you design a stack which, in addition to push and pop, also has a function min which
 * returns the minimum element? Push, pop and min should all operate in O(1) time
 *
 */


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
