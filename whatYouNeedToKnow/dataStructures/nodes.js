/* ## Nodes
 *
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * CLASS: Node Class
 */

/**
 * A node implementation in javascript.
 * @class Node
 * @constructor
 */
function Node() {

    /**
     * The data to be stored in the node.
     * @property _data
     * @type {Object Reference}
     * @private
     */
    this.disks = null;

    /**
     * The data to be stored in the node.
     * @property _next
     * @type {Object Reference}
     * @private
     */
    this._next = null;
}

Node.prototype = {

    //restore constructor
    constructor: Node,

    /**
     * Appends some data to the end of the node. This method traverses
     * the existing list and places the value at the end in a new item.
     * @param {variant} data The data to add to the list.
     * @return {Void}
     * @method add
     */
    add: function (d) {
        
//        var end = new Node(d);
//        var n = this;
//        while (n.next != null) {
//            n = n.next;
//        }
//        n.next = end;
    }
};

/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Node Class
 */

var newNode = new Node();
newNode.add('green');

newNode.data = 'blue';
newNode.next = 'yo mama';
console.log(newNode);
