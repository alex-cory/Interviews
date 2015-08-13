/* Chapter 3 | Stacks and Queues
 * 3.1
 *
 * Single Array to Implement Three Stacks
 *
 * RESOURCES:
 *     - https://gist.github.com/lazyGoose
 *     - How to efficiently implement k stacks in a single array?  http://bit.ly/1OyFYoB
 *     - Efficiently implement N stacks in a single array. http://bit.ly/1cu5pKh
 *     - StackOverflow: http://bit.ly/1Ibvjwc
 *     - JavaScript data structures: http://bit.ly/1J42phJ
 *
 * QUESTION:
 * Describe how you could use a single array to implement three stacks.
 *
 */


function MultiStackArray() {
    this.stacksArray = [];
}

MultiStackArray.prototype = {

    //restore constructor
    constructor: MultiStackArray,

    /**
     * Adds a node to specified stack in the array.
     * @param {string} stackName The name or number of the stack to add to.
     * @param {Object} nodeData The name, number, object to be passed
     *     into the node.
     * @method add
     */
    add: function (stackName, nodeData) {
        
        //create a variable to hold the current stack
        var currStack;

        //check if the stack exists
        if (this.stackDoesntExist(stackName)) {

            //make a new stack
            currStack = new Stack();

            //name the stack
            currStack._name = stackName;

            //add nodeData
            currStack.push(nodeData);

            //add new stack to stacks array
            this.stacksArray.push(currStack);

        } else {

            //find the current stack
            currStack = this.findStack(stackName);

        }

        //add new node to the current stack
        currStack.push(nodeData);
    },

    /**
     * Checks stack array to see if a stack exists with the same name.
     * @param {Object} stackName The name or number of the stack to check.
     * @return {boolean} If stack is found, returns false.
     * @method stackDoesntExist
     */
    stackDoesntExist: function (stackName) {
        if (this.stacksArray.length < 1) { return true; }
        for (var i = 0; i < this.stacksArray.length; i++) {
            if (this.stacksArray[i]._name == stackName) {
                //console.log('You can\'t use ' + stackName + ' for both stacks silly!\nChange, then give it another go!');
                return false;
            } else if (i == this.stacksArray.length - 1 && this.stacksArray[i]._name !== stackName) {
                return true;
            }
        }
    },

    /**
     * Returns a stack if it exists in stack array.
     * @param {variant} stackName The name or number of the stack to find.
     * @return {Object} The stack to find or null if none were found.
     * @method findStack
     */
    findStack: function (stackName) {
        for (var i = 0; i < this.stacksArray.length; i++) {
            //check if a stack in the stack array matches

            if (this.stacksArray[i]._name == stackName) {
                return this.stacksArray[i];
            } else if (i == this.stacksArray.length - 1 && this.stacksArray[i]._name !== stackName) {
                console.log('stack could not be found! :(  Check method stackDoesntExist()');
                return null;
            }
        }
    }
};

/* -------------------------------------------------------------------------------------------------------------
 * TEST: MultiStackArray
 */
var multiStackArray = new MultiStackArray();
multiStackArray.add(3, 'stack 3 item 1');
multiStackArray.add('Food', 'burger');
multiStackArray.add('Numbers', 1);
multiStackArray.add('Food', 'pizza');
multiStackArray.add('Food', 'cake');
multiStackArray.add('Numbers', 2);
multiStackArray.add('Numbers', 3);
multiStackArray.add(3, 'stack 3 item 2');
multiStackArray.add(3, 'stack 3 item 3');

console.log(multiStackArray);
console.log(multiStackArray.stacksArray[0]);
console.log(multiStackArray.stacksArray[1]);
console.log(multiStackArray.stacksArray[2]);










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

