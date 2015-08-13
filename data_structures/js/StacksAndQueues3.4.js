/* Chapter 3 | Stacks and Queues
 * 3.4
 *
 * Towers of Hanoi
 *
 * RESOURCES:
 *     - StackOverflow: http://bit.ly/1Ibvjwc
 *     - JavaScript data structures: http://bit.ly/1J42phJ
 *     -
 *     -
 *     -
 *
 * QUESTION:
 * In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different
 * sizes which can slide on to any tower. The puzzle starts with disks sorted in ascending order of size
 * from top to bottom (e.g., each disk sits on top of an even larger one).
 *
 * You have the following constraints:
 *     (A) Only one disk can be moved at a time.
 *     (B) A disk is slid off the top of one rod onto the next rod
 *     (C) A disk can only be placed on top of a larger disk.
 * Write a program to move the disks from the first rod to the last using Stacks.
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * CLASS: Towers of Hanoi      NOT FINISHED
 */

/**
 * Towers of Hanoi
 * @class Towers
 * @constructor
 */
function Towers(numDisks) {

    /**
     * The rods (stacks) that the disks (nodes) will be in.
     * @property _rods
     * @type Array
     * @private
     */
    this.rods = [];

    this.numDisks = numDisks;

    this.error = null;

    //construct my rods and the number of disks passed in
    if (numDisks != null && this.rods.length == 0) {

        //create the rods and and load them into the array
        for (var i = 0; i < 3; i++) {

            //create the rod
            var rod = new Stack();

            //give it a name
            rod._name = 'rod ' + i;

            //add it to the array
            this.rods.push(rod);
        }

        //create each disk and load them onto the first rod
        for (var i = 0; i < numDisks; i++) {

            //grab the current disk size
            var currDiskSize = numDisks - i;

            //grab rod 1
            var rod0 = this.rods[0];
            var rodName = rod0._name;
            //determine disk size below
            var currDiskSizeBelow = (i - 1 >= 0) ? rod0.disks[i - 1].diskSize : null;

            //create disk node
            var disk = {
                diskSize: currDiskSize,
                diskSizeBelow: currDiskSizeBelow,
                currentRodName: rodName,
                currentRod: rod0
            };

            //increase length of rod
            rod0._length++;

            //update the top
            rod0._top = disk;

            //create the disk and add it to the top of the 1st rod
            rod0.disks.push(disk);
        }
    }
}

Towers.prototype = {

    //restore constructor
    constructor: Towers,

    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} data The item to be pushed onto this stack.
     * @method push
     */
    printSetup: function () {
        if (this.error != null) {
            console.log(this.error);
            return;
        }
        console.log(this.rods[0]._name + '  ' + this.rods[1]._name + '  ' + this.rods[2]._name);
        for (var i = 0; i < this.numDisks; i++ ) {
            var rod1man = this.rods[0].disks.length > i ? '  ' + this.rods[0].disks[i].diskSize + '   ' : '      ';
            var rod2man = this.rods[1].disks.length > i ? '  ' + this.rods[1].disks[i].diskSize + '   ' : '      ';
            var rod3man = this.rods[2].disks.length > i ? '  ' + this.rods[2].disks[i].diskSize + '   ' : '      ';
            console.log(rod1man + ' ' + rod2man + ' ' + rod3man);
        }
    },

    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} data The item to be pushed onto this stack.
     * @method push
     */
    push: function (data) {

        if (typeof data == Stack) {
            //add stack to the stacks array and increase the length
            this.rods[this.rods.length - 1] = data;
            return;
        }
        //grab rod the data is in
        var rod = data.currentRod;
        //update length of stack
        rod._length++;
        rod._top = data;
        rod.disks.push(data);

    },

    /**
     * Removes and returns the object at the top of the Stack.
     * @return {Object} The object at the top of this stack.
     * @method pop
     */
    pop: function () {
        //return this._top[this._length--];
    },

    /**
     * Moves a disk to another rod.
     * @param {int} rodSource Moving disk off of this rod.
     * @param {int} rodTarget Moving disk on to this rod.
     * @method move
     */
    move: function (rodSource, rodTarget) {

        //grab node off rodSource
        var disk = this.rods[rodSource].disks.pop();
        //console.log(this.rods[rodTarget].disks);
        // TODO: FIXME the if statement below doesn't work properly
        //if the top of the stack we want to move it to is bigger than our current disk
        if (this.rods[rodTarget].disks.diskSize < disk.diskSize) {
            throw Error('Error placing ' + disk.diskSize);
        } else {
            //move to the rod
            this.rods[rodTarget].disks.push(disk);
        }
    }
};



/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Stack Class
 *
 * TEST CASES:
 *     1. Move disk1 (number represents it's size) from rod1 to rod2
 *     2. Move disk2 from rod1 to rod2 (shouldn't be able to do this since disk2 > disk1)
 *     3. Move disk2 from rod1 to rod3 (shouldn't be able to move disks more than 1 rod at a time)
 *
 *
 */


var towers = new Towers(4);
towers.move(0, 1);
towers.move(0, 1);
//towers.move(1, 2);
//towers.move(0, 1);
//towers.move(2, 0);
//towers.move(2, 1);
//towers.move(0, 1);
//towers.move(0, 2);
//towers.move(2, 1);
towers.printSetup();
//console.log(towers.rods[0]);






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
     * The top node of the stack.
     * @property _top
     * @type {Array}
     * @private
     */
    this._top = null;

    /**
     * The data to be stored in the stack.
     * @property _top
     * @type {Array}
     * @private
     */
    this.disks = [];

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
    add: function (data) {

        //set the _top
        this._top = data;

        //add node to the stack and increase the length
        this.disks.push(data);
        this._length++;
    },

    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} data The item to be pushed onto this stack.
     * @method push
     */
    unshift: function (data) {

        //set the _top
        this._top = data;

        //add node to the stack and increase the length
        this.disks.unshift(data);
        this._length++;
    },

    /**
     * Removes and returns the object at the top of the Stack.
     * @return {Object} The object at the top of this stack.
     * @method pop
     */
    pops: function () {
        //reset the _top
        this._top = this.disks[this._length - 1];

        //add node to the stack and increase the length
        return this.disks[this._length--];
    },

    /**
     *
     * @return {string} stack name
     * @method pop
     */
    getName: function () {
        //reset the _top
        //this._top = this.disks[this._length - 1];

        //add node to the stack and increase the length
        return this._name;
    },

    /**
     *
     * @return {string} stack name
     * @method pop
     */
    getData: function () {
        //reset the _top
        //this._top = this.disks[this._length - 1];

        //add node to the stack and increase the length
        return this.disks;
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
//var someStack = new Stack();
//someStack.push(1);
//someStack.push(2);
//someStack.push(3);
//someStack.push(4);
//someStack.push(5);
//someStack.push(6);
//someStack.min();